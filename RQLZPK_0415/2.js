$(document).ready(function() {
    // K1 gomb: elrejti a lista két első elemét és a href-t
    $('#k1').click(function() {
        $('ul li:nth-child(1), ul li:nth-child(2), footer a').hide();
    });

    // K2 gomb: elrejti a lista két első elemét, a href-t és a K2 gombot
    $('#k2').click(function() {
        $('ul li:nth-child(1), ul li:nth-child(2), footer a, #k2').hide();
    });

    // K3 gomb: elrejti a fejlécet, lista két első elemét és a href-t
    $('#k3').click(function() {
        $('header, ul li:nth-child(1), ul li:nth-child(2), footer a').hide();
    });

    // K4 gomb: elrejti a lista két első elemét, a link szöveget és a href-t
    $('#k4').click(function() {
        $('ul li:nth-child(1), ul li:nth-child(2)').contents().filter(function() {
            return this.nodeType === 3; // 3: TEXT_NODE
        }).hide(); // Rejtse el a szöveget
        $('footer a').hide(); // Rejtse el a href-t
    });

    // K5 gomb: elrejti a lista két első elemét, a href-t és a táblázat páros sorait
    $('#k5').click(function() {
        $('ul li:nth-child(1), ul li:nth-child(2), footer a').hide();
        $('table tr:nth-child(even)').hide(); // Rejtse el a táblázat páros sorait
    });
});
