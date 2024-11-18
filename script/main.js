const metricRadio = document.getElementById("metric");
const imperialRadio = document.getElementById("imperial");
const metricUnit = document.getElementById("metric_data");
const imperialUnit = document.getElementById("imperial_data");
const imperialHeightFt = document.getElementById("imperial_height_ft");
const imperialHeightIn = document.getElementById("imperial_height_in");
const weight_input = document.getElementById("weight");
const form_metric = document.getElementById("metric_data");
const form_imperial = document.getElementById("imperial_data");
const heightCm = document.getElementById("height_cm")
const weightKg = document.getElementById("weight_kg")

imperialRadio.addEventListener("change", isImperialChecked)
metricRadio.addEventListener("change", isImperialChecked)

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