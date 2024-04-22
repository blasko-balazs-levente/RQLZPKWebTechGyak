$(document).ready(function() {
    // Űrlap felett lévő gombok eseménykezelése
    $('#hideParagraphs').click(function() {
        $('#paragraphs').hide();
    });

    $('#showParagraphs').click(function() {
        $('#paragraphs').show();
    });

    $('#toggleVisibility').click(function() {
        $('#paragraphs').toggle();
    });

    // Űrlap alatt lévő gombok eseménykezelése
    $('#opacity01').click(function() {
        $('#myForm').css('opacity', 0.1);
    });

    $('#opacity05').click(function() {
        $('#myForm').css('opacity', 0.5);
    });

    $('#opacity08').click(function() {
        $('#myForm').css('opacity', 0.8);
    });

    $('#hideForm').click(function() {
        $('#myForm').hide();
    });

    $('#showForm').click(function() {
        $('#myForm').show();
    });

    $('#toggleFormVisibility').click(function() {
        $('#myForm').toggle();
    });
});
