window.onload = function() {
    for (i = 1; i <= 27; i++) {
        var newBoxes = $("<div>")
        if (i >= 19) {
            var j = i - 20;
            newBoxes.html("<p>" + i + "</p>").attr("class", "box box-" + j);
            $("#game3").append(newBoxes);
        }
        else if (i >= 10) {
            var k = i - 10;
            newBoxes.html("<p>" + i + "</p>").attr("class", "box box-" + k);
            $("#game2").append(newBoxes);
        }
        else {
            newBoxes.html("<p>" + i + "</p>").attr("class", "box box-" + i)
            $("#game1").append(newBoxes);
        }
    }
};