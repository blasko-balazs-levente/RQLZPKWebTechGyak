$(document).ready(function() {

    var submittedData = {};

    $('#submit').click(function() {
        submittedData.name = $('#fName').val()+(' ')+$('#lName').val();
        var name = submittedData.name;
        submittedData.email = $('#email').val();
        var email = submittedData.email;
        submittedData.date = $('#date').val();
        var date = submittedData.date;
        if(name && email && date) {
            alert('Név: ' + name + '\nE-mail: ' + email + '\nSzületési év: ' + date);
        }else {
            alert('Kérem töltsön ki minden egyes mezőt!');
        }
    });
    $('input').blur(function() {
        if($(this).val().trim() === '') {
            $(this).css('background-color', 'red');
        }
    });
    $('input').focus(function() {
        $(this).css('background-color', 'lightblue');
    });
});