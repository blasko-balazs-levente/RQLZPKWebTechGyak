// Neptunkod_3.js

// Várjuk, hogy az oldal teljesen betöltődjön, mielőtt végrehajtjuk a kódunkat
$(document).ready(function() {
    // Doboz eltávolítása gomb eseménykezelője
    $('#eltuntet').click(function() {
        $('#box').hide(); // A doboz elrejtése
    });

    // DIV elemek kiürítése gomb eseménykezelője
    $('#kiurit').click(function() {
        $('#div').empty(); // A doboz tartalmának kiürítése
    });
});
