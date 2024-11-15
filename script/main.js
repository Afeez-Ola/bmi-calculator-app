const metricRadio = document.getElementById("metric");
const imperialRadio = document.getElementById("imperial");
const metricUnit = document.getElementById("metric_data");
const imperialUnit = document.getElementById("imperial_data");

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