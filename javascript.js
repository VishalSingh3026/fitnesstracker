// ############################# BMI CALCULATOR ######################################
function calcBMI() {
    var weight = document.bmiform.pounds.value, height = document.bmiform.inches.value;
    var bmi = parseInt(((weight) / (height * height))*10000);
    document.bmiform.bmi.value=bmi;
    if(document.bmiform.bmi.value<18.5)
    {
      document.getElementById("underweightbmi").style.visibility="visible";
      document.getElementById("healthybmi").style.visibility="hidden";
      document.getElementById("overweightbmi").style.visibility="hidden";
    }
    else if(document.bmiform.bmi.value>18.5 && document.bmiform.bmi.value<24.9)
    {
      document.getElementById("healthybmi").style.visibility="visible";
      document.getElementById("underweightbmi").style.visibility="hidden";
      document.getElementById("overweightbmi").style.visibility="hidden";
    }
    else if(document.bmiform.bmi.value>24.9)
    {
      document.getElementById("overweightbmi").style.visibility="visible";
      document.getElementById("underweightbmi").style.visibility="hidden";
      document.getElementById("healthybmi").style.visibility="hidden";
    }
  }

// ############################ CALORIE CALCULATOR ######################################
function calsPerDay() {
  function find(id) { return document.getElementById(id) }

  var age = find("age").value
  var height = find("height").value * 2.54
  var weight = find("weight").value / 2.2
  var result = 0
  if (find("male").checked) 
    result = 66.47 + (13.75 * weight) + (5.0 * height - (6.75 * age))
  else if (find("female").checked)
    result = 665.09 + (9.56 * weight) + (1.84 * height - (4.67 * age))
  find("totalCals").innerHTML = Math.round( result )
}
calsPerDay()

//############################# MACROS COUNTER #######################################// 

function calcMACROS()
{
    var weight = document.bmiform.pounds.value;
    var height = document.bmiform.inches.value;
    var proteins = parseInt(weight*0.8);
    var fats = parseInt(weight/2);
    var carbs = parseInt(weight*2);
    document.getElementById("proteins").value=proteins;
    document.getElementById("fats").value=fats;
    document.getElementById("carbohydrates").value=carbs;
}