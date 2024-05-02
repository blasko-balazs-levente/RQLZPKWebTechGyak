$(document).ready(function() {
    // Szöveg gombra kattintva felugró ablakba beírja a megadott szöveget
    $('#textButton').click(function() {
        var text = 'HTML kód...'; // Szöveg beállítása
        alert(text);
    });

    // HTML gombra kattintva felugró ablakba beírja a HTML kódot
    $('#htmlButton').click(function() {
        var html = 'ME GEIK - PTI'; // HTML kód beállítása
        alert(html);
    });

    // Érték gombra kattintva felugró ablakba beírja a név mezőbe írt nevet
    $('#valueButton').click(function() {
        var name = $('#name').val(); // Név kinyerése a mezőből
        alert('Név: ' + name);
    });

    var submittedData = {}; // Objektum létrehozása az űrlap adatok tárolására

    // Jelentkezés gombra kattintva az adatok összegyűjtése
    $('#submit').click(function() {
        submittedData.name = $('#name').val(); // Név mentése
        submittedData.email = $('#email').val(); // E-mail cím mentése
        submittedData.password = $('#password').val(); // Jelszó mentése
    });

    // Érték gombra kattintva a jelentkezési adatok kiírása
    $('#valueButton').click(function() {
        var name = submittedData.name; // Név lekérése az űrlapból
        var email = submittedData.email; // E-mail cím lekérése az űrlapból
        var password = submittedData.password; // Jelszó lekérése az űrlapból

        if (name && email && password) { // Ellenőrzés, hogy minden adat kitöltve lett-e
            alert('Név: ' + name + '\nE-mail: ' + email + '\nJelszó: ' + password);
        } else {
            alert('Kérem adja le jelentkezését!');
        }
    });

    // Paraméter gombra kattintva felugró ablakba beírja a megadott paramétert
    $('#parameterButton').click(function() {
        var link = 'https://www.tutorialspoint.com/jquery/index.htm';
        var area = '200x200';
        var id = 'ME GEIK-PTI';

        var parameter = $('#parameter').val(); // Gomb szövegének kinyerése
        var value;

        switch (parameter) {
            case 'terület':
                value = area;
                alert('Paraméter értéke: ' + value);
                break;
            case 'ID':
                value = id;
                alert('Paraméter értéke: ' + value);
                break;
            default:
                value = link;
                alert('Paraméter értéke: ' + value);
        }
    });
});
