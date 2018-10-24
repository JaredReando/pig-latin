
var pigLatin = function(str) {
  if (str === "a") {
    return str + "way";
  } else {
    return "Sorry I cant do that";
  }
}









$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = pigLatin(word);

    $("#result").text(result);

  });
});
