$(document).ready(function() {
    // Az adatok betöltése gombra kattintva történő AJAX kérés kezelése
    $("#loadDataButton").click(function() {
        // AJAX kérés indítása a JSON fájl beolvasására
        $.ajax({
            url: 'BB_orarend1obj.json', // Az URL, ahonnan a JSON fájl elérhető
            dataType: 'json', // A várt adattípus JSON formátumban
            success: function(data) {
                // Sikeres adatbetöltés esetén a data változóban lévő JSON objektum kezelése
                displayCourseData(data); // A JSON objektum megjelenítése
            },
            error: function() {
                alert('Hiba történt az adatok betöltése közben.'); // Hiba esetén üzenet megjelenítése
            }
        });
    });

    // JSON objektum megjelenítése az oldalon
    function displayCourseData(course) {
        // Az adatok megjelenítése egy DIV-en belül
        $('#terulet').html(`
            <h3>MISKOLCI EGYETEM</h3>
            <p>Cim: ${course.cim.code} ${course.cim.city} ${course.cim.street}</p>
            <p>Telefonszámok:</p>
            <ul>
                <li>Vezetékes: ${course['phone number'][0].number}</li>
                <li>Mobil: ${course['phone number'][1].number}</li>
            </ul>
            <p>MI Órarend 2024 tavasz - részlet</p>
            <p>Kurzusnév: ${course.kurzusnev}</p>
            <p>Oktató: ${course.oktato}</p>
            <p>Szak: ${course.szak.join(', ')}</p>
            <p>Időpont:</p>
            <ul>
                <li>Nap: ${course.idopont.nap}</li>
                <li>Tól: ${course.idopont.tol} Ig: ${course.idopont.ig}</li>
            </ul>
            <p>Helyszín: ${course.helyszin}</p>
        `);
    }
});
