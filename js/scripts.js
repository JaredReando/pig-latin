
var pigLatin = function(str) {
  return str + " is what you entered.";
}









$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = pigLatin(word);

    $("#result").text(result);

  });
});
