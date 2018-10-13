define('copyright', function () {

    var now = new Date();
    var currentYear = now.getFullYear();

    $('#actual-year').html('&copy; ' + currentYear);

});