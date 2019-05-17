// Javascript goes here!
window.onload = function() {
    for (i = 1; i <= 27; i++) {
        if (i >= 19) {
            var j = i - 20;
            var newTds = $("<td>").attr("data");
            var newInput = $("<input>")
                .type("text")
                .maxlength("1")
                .attr("class", "box box-" + j);
            newTds.append(newInput);
            $("#game1").append(newTds);
        }
        else if (i >= 10) {
            var k = i - 10;
            var newTds = $("<td>").attr("data");
            var newInput = $("<input>")
                .type("text")
                .maxlength("1")
                .attr("class", "box box-" + k);
            newTds.append(newInput);
            $("#game1").append(newTds);
        }
        else {
            var newTds = $("<td>").attr("data");
            var newInput = $("<input>")
                .type("text")
                .maxlength("1")
                .attr("class", "box box-" + i);
            newTds.append(newInput);
            $("#game1").html(newTds);
        }
    }
};