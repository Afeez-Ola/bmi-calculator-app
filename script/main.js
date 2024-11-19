const metricRadio = document.getElementById("metric");
const imperialRadio = document.getElementById("imperial");
const metricUnit = document.getElementById("metric_data");
const imperialUnit = document.getElementById("imperial_data");

// The Form Containers
const metricDiv = document.getElementById("metric_data");
const ImperialDiv = document.getElementById("imperial_data");

// BMI UNIT
const underweight =  18.5
const minHealthyWeight = 18.6;
const maxHealthyWeight = 24.9;
const minOverWeight = 25.0;
const maxOverWeight = 29.9;
const obese = 30.0;

// weight Note
const weightNote = document.getElementById("weight_note");

// IDeal weight

const idealWeight = document.getElementById("ideal_weight");

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
  let minIdealWeight = 0;
  let maxIdealWeight = 0;

  if (height > 0 && weight > 0){
    const bmi = (weight / (height * height)).toFixed(1);
    if (bmi < underweight){
      weightNote.innerText = "Underweight";
      minIdealWeight = (underweight * (height**2)).toFixed(1);
      idealWeight.innerText = minIdealWeight;
    } else if (bmi == minHealthyWeight || bmi <= maxHealthyWeight) {
      weightNote.innerText = "Healthy";
      minIdealWeight = (minHealthyWeight * (height**2)).toFixed(1);
      maxIdealWeight = (maxHealthyWeight * (height**2)).toFixed(1);
      idealWeight.innerText = minIdealWeight + " - " + maxIdealWeight
    } else if (bmi == minOverWeight || bmi <= maxOverWeight) {
      weightNote.innerText = "Overweight";
      minIdealWeight = (minOverWeight * (height**2)).toFixed(1);
      maxIdealWeight = (maxOverWeight * (height**2)).toFixed(1)
      idealWeight.innerText = minIdealWeight + " - " + maxIdealWeight;
    } else{
      weightNote.innerText = "Obese";
      minIdealWeight = (obese * (height**2)).toFixed(1);
      idealWeight.innerText = minIdealWeight + " - " + maxIdealWeight;
    }

    bmiResult.innerText = bmi
  }
}

