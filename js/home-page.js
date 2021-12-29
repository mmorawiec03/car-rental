$(document).ready(function() {
    $("#date-from").datepicker();
    $("#date-from").click(function() {
        $("#date-from").focus();
    });

    $("#date-to").datepicker();
    $("#date-to").click(function() {
        $("#date-to").focus();
    });
});
