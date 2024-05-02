$(document).ready(function() {
    // Animáció indítása gomb
    $('#startAnimation').click(function() {
        $('#container').animate({
            left: '+=200px', // jobbra elindul
            width: '+=200px', // szélesség növekszik
            fontSize: '30pt' // betűméret növekszik
        }, 1000, 'swing') // 1000 ms (1 másodperc) sebesség, swing easing

        .animate({
            top: '+=100px', // lefelé elindul
            width: '-=50px', // szélesség csökken
            height: '+=15px' // magasság növekszik
        }, 1000, 'linear') // 1000 ms (1 másodperc) sebesség, linear easing

        .animate({
            left: '0', // balra elindul
            opacity: '0.4' // opacity csökken
        }, 1000, 'linear') // 1000 ms (1 másodperc) sebesség, linear easing

        .animate({
            top:'-=100px',
            opacity: '1', // vissza opacity
            fontSize: '12pt' // vissza betűméret
        }, 1000, 'linear', function() {
            alert('VÉGE');
        });
    });

    // Bekezdések elrejtése gomb
    $('#hideParagraphs').click(function() {
        $('p').hide(); // bekezdések elrejtése
        $('#container').show(); // doboz megjelenítése a bekezdések helyén
        alert('Bekezdések elrejtése');
    });

    // Összecsuk / Kinyit gomb
    var isOpen = true;
    $('#toggleBox').click(function() {
        if (isOpen) {
            $('#container').animate({
                width: 'toggle', // szélesség összecsukása/kinyitása
                left: '+=200px' // jobbra elindul
            }, 1000, 'linear');
        } else {
            $('#container').animate({
                width: 'toggle' // szélesség összecsukása/kinyitása
            }, 1000, 'linear');
        }
        isOpen = !isOpen;
    });
});
