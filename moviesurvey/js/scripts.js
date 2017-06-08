
var add = function(stringNumber1, stringNumber2, StringNumber3) {
  var number1 = parseInt(stringNumber1);
   var number2 = parseInt(stringNumber2);
  var number3 = parseInt(StringNumber3);
  var numericResult = number1 + number2 + number3;
    console.log(numericResult);

    if (numericResult === 3 || 4) {
      result = ("Blood Hound")
    } else if (numericResult === 5 || 6) {
      result = ("Norwich Terrior")
    } else if (numericResult === 7 || 8) {
      result = ("Shitsu")
    } else if (numericResult === 9 || 10) {
      result = ("French Poodle")
    } else if (numericResult === 11 || 12) {
      result = ("Weimaraner")
    }

};


$(document).ready(function() {
  $("form#quiz").submit(function() {
    event.preventDefault();
  //  var number1 = parseInt($(".input1").val());
  //  var number2 = parseInt($(".input2").val());
  //  var number3 = parseInt($(".input3").val());
    var operator1 = $("input:radio[name=operator1]:checked").val();
    var operator2 = $("input:radio[name=operator2]:checked").val();
    var operator3 = $("input:radio[name=operator3]:checked").val();
    //var result;
    console.log(operator1);
    add(operator1, operator2, operator3);

    $("#output").text(result);
  });
});
