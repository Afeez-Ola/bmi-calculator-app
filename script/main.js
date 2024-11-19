const metricRadio = document.getElementById("metric");
const imperialRadio = document.getElementById("imperial");
const metricUnit = document.getElementById("metric_data");
const imperialUnit = document.getElementById("imperial_data");

// The Form Containers
const metricDiv = document.getElementById("metric_data");
const ImperialDiv = document.getElementById("imperial_data");


// The BMI Result
const bmiResult = document.getElementById("result");

// The Metric Form
const height_form_metric = document.getElementById("height_form_metric");
const weight_form_metric = document.getElementById("weight_form_metric");

// The Imperial Form
const height_form_imperial = document.getElementById("height_form_imperial");
const weight_form_imperial = document.getElementById("weight_form_imperial");

// The input Section
const heightCm = document.getElementById("height_cm");
const weightKg = document.getElementById("weight_kg");
const imperialHeightFt = document.getElementById("imperial_height_ft");
const imperialHeightIn = document.getElementById("imperial_height_in");
const weightSt = document.getElementById("weight_st");
const weightLbs = document.getElementById("weight_lbs");

imperialRadio.addEventListener("change", isImperialChecked);
metricRadio.addEventListener("change", isImperialChecked);
height_form_metric.addEventListener("keyup", getHeightFormMetric)
weight_form_metric.addEventListener("keyup", getWeightFormMetric)

metricDiv.addEventListener("change", metricBmiCalculation(getHeightFormMetric(),getWeightFormMetric()))

function isImperialChecked(e){
  e.preventDefault();

  if (metricRadio.checked){
    metricUnit.style.display="flex"
    imperialUnit.style.display = "none"
  } else{
    imperialUnit.style.display = "flex"
    metricUnit.style.display = "none"
    console.log("metric Radio is checked!");
  }
}

function getHeightFormMetric(){
  let height = int(heightCm.value)/100
  return height
}
function getWeightFormMetric(){
  let weight = int(weightKg.value)
  return weight
}

function metricBmiCalculation(height, weight){
  console.log(height, weight);
  bmiResult.innerText = (weight * weight)/height
}

