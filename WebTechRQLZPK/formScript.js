$(document).ready(function() {
    $('input').blur(function() {
    if($(this).val().trim() === '') {
        $(this).css('background-color', 'red');
    }
});
$('input').focus(function() {
    $(this).css('background-color', 'lightblue');
});
function submitForm() {
    var form = document.getElementById("myForm");
    var formData = new FormData(form);

    var result = "Check your data:\n";

    for (const entry of formData.entries()) {
        result += `${entry[0]}: ${entry[1]}\n`;
    }

    alert(result);
}});
