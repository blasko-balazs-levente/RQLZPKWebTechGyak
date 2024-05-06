$(document).ready(function() {
          $('#json').click(function() {
          $.ajax({
        url: 'courses.json', // Az endpoint, ahol a JSON található
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Sikeresen lekértük a JSON-t

            // Az objektum bejárása és adatok megjelenítése
            $.each(data['Bass lessons']['courses'], function(index, course) {
                // Tanár nevek
                var teachers = course['Teacher'].join(', ');
                
                // Tanfolyam napjai és időpontjai
                var days = course['Date']['Day'].join(', ');
                var times = course['Date']['Time'].join(', ');
                
                // Tanfolyam helyszíne
                var location = course['Location']['Street'] + ', ' + 
                               course['Location']['City'] + ', ' + 
                               course['Location']['Postcode'];
                
                // Tanfolyam ára és telefonszáma
                var price = course['Price'];
                var phoneNumber = course['PhoneNumber'];

                // Adatok megjelenítése a HTML oldalon
                var html = '<div class="course">';
                html += '<h3>Teachers: ' + teachers + '</h3>';
                html += '<p>Days: ' + days + '</p>';
                html += '<p>Times: ' + times + '</p>';
                html += '<p>Location: ' + location + '</p>';
                html += '<p>Price: ' + price + '</p>';
                html += '<p>Contact: ' + phoneNumber + '</p>';
                html += '</div>';

                // A létrehozott HTML tartalom beillesztése az oldalra
                $('#courses-container').append(html);
            });
        },
        error: function(xhr, status, error) {
            // Hiba esetén kezelés
            console.log('Hiba történt az AJAX kérés során: ' + error);
        }
    });
  });
        });
