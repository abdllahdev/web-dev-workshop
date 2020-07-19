var defaultColor = "black";

$(document).ready(function () {
    $("#changeColor").on("click", function () {
        $("#content").css("background-color", "yellow");
    });

    $("#reset").on("click", function () {
        $("#content").css("background-color", defaultColor);
    });
});