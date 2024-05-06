$(document).ready(function() {
    // Az órarend betöltése gombra kattintva történő AJAX kérés kezelése
    $("#loadScheduleButton").click(function() {
        // AJAX kérés indítása a JSON fájl beolvasására
        $.ajax({
            url: 'BB_orarend.json', // Az URL, ahonnan a JSON fájl elérhető
            dataType: 'json', // A várt adattípus JSON formátumban
            success: function(data) {
                // Sikeres adatbetöltés esetén a data változóban lévő JSON objektum kezelése
                displaySchedule(data); // Az órarend megjelenítése
            },
            error: function() {
                alert('Hiba történt az órarend betöltése közben.'); // Hiba esetén üzenet megjelenítése
            }
        });
        $("#span").empty();
    });

    // JSON objektum alapján az órarend megjelenítése
    function displaySchedule(schedule) {
        var scheduleHtml = '<h3>Órarend</h3>';

        // Iterálás az órák listáján és megjelenítése
        for (var i = 0; i < schedule.length; i++) {
            var course = schedule[i];
            scheduleHtml += `
                <div>
                    <h4>${course.kurzusnev}</h4>
                    <p>Oktató: ${course.oktato}</p>
                    <p>Szak: ${course.szak.join(', ')}</p>
                    <p>Időpont: ${course.idopont.nap} ${course.idopont.tol}-${course.idopont.ig}</p>
                    <p>Helyszín: ${course.helyszin}</p>
                    <p>Cím: ${course.cim.code} ${course.cim.city} ${course.cim.street}</p>
                    <p>Telefonszámok:</p>
                    <ul>
                        <li>Vezetékes: ${course['phone number'][0].number}</li>
                        <li>Mobil: ${course['phone number'][1].number}</li>
                    </ul>
                </div>
            `;
        }

        // Az órarend tartalmának megjelenítése a scheduleContainer div-ben
        $('#scheduleContainer').html(scheduleHtml);
    }
});
