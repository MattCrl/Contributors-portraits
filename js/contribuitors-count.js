define('contribuitors-count', function () {
    var nodesSameClass = document.getElementsByClassName("contributor");
    document.getElementById("count").innerHTML = "Contributors Count: " + "<b style='color:#21ffff'>" +
        nodesSameClass.length + "</b>";
});