const metricRadio = document.getElementById("metric");
const imperialRadio = document.getElementById("imperial");
const metricUnit = document.getElementById("metric_data");

imperialRadio.addEventListener("change", isImperialChecked)
metricRadio.addEventListener("change", isImperialChecked)

function isImperialChecked(e){
  e.preventDefault();

  if (imperialRadio.checked){
    metricUnit.style.display="none"
    console.log("imperialRadio is checked");
  } else{
    metricUnit.style.display = "block"
    console.log("metric Radio is checked!");
  }
}