$(document).ready(function() {
        // 1. A fejléc szövegről elhúzott egér információt ír ki egy ablakba
        $('header').on('mousemove', function(event) {
            alert('Egér elhúzva a fejléc szövegéről.');
        });

        // 2. Az első bekezdésben lévő Kattints ide - elrejti az első bekezdést
        $('#hideButton').click(function() {
            $('#p1').hide();
        });

        // 3. A második bekezdésben lévő Kattints ide duplán kattintva - elrejti a 2. bekezdést
        $('main p:eq(1)').dblclick(function() {
            $(this).hide();
        });

        // 4. A gomb felé húzta az egeret - információs ablak jelenik meg benne szöveggel
        $('button').mouseover(function() {
            alert('Az egeret a gomb felé húztad!');
        });

        // 5. A keret fel/lefelé mozgatja az egerét a keret színe változik meg
        $('input').hover(function() {
            $(this).css('border-color', 'red');
        }, function() {
            $(this).css('border-color', 'black');
        });

        // 6. A beviteli mezőn belül kattintunk (kereten belül) - kitölti egy színnel
        $('input').focus(function() {
            $(this).css('background-color', 'lightblue');
        });
    });
