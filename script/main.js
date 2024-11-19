const metricRadio = document.getElementById("metric");
const imperialRadio = document.getElementById("imperial");
const metricUnit = document.getElementById("metric_data");
const imperialUnit = document.getElementById("imperial_data");

// The Form Containers
const metricDiv = document.getElementById("metric_data");
const ImperialDiv = document.getElementById("imperial_data");

// weight Note
const weightNote = document.getElementById("weight_note");


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
height_form_metric.addEventListener("input", metricBmiCalculation)
weight_form_metric.addEventListener("input", metricBmiCalculation)

// metricDiv.addEventListener("change", metricBmiCalculation(getHeightFormMetric,getWeightFormMetric))

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



function metricBmiCalculation(){
  const height = (parseFloat(heightCm.value)/100);
  const weight = parseFloat(weightKg.value);

  if (height > 0 && weight > 0){
    const bmi = (weight / (height * height)).toFixed(1)

    if (bmi < 18.5){
      weightNote.innerText = "Underweight"
    } else if (bmi == 18.5 || bmi <= 24.9) {
      weightNote.innerText = "Healthy"
    } else if (bmi == 25 || bmi <= 29.9) {
      weightNote.innerText = "Overweight"
    } else{
      weightNote.innerText = "Obese"
    }

    bmiResult.innerText = bmi
  }
}

