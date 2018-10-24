var vowelsArray = ['a', 'e', 'i', 'o', 'u']


var pigLatin = function(str) {
  console.log(str);
  if (vowelsArray.indexOf(str[0]) !== -1) {
    return str + 'way';
    } else {
    return "I'm afraid I can't do that.";
    }
  }



//   if (str === "a") {
//     return str + "way";
//   } else {
//     return "Sorry I cant do that";
//   }
// }



$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = pigLatin(word);

    $("#result").text(result);

  });
});
