function copiar() {

  //var copyText = document.getElementById("chave");
  //navigator.clipboard.writeText(copyText.innerHTML);

  // Create a "hidden" input
  var aux = document.createElement("input");
  console.log("1");
  // Assign it the value of the specified element
  aux.setAttribute("value", document.getElementById('chave').innerHTML);
  console.log("2");
  // Append it to the body
  document.body.appendChild(aux);
  console.log("3");
  // Highlight its content
  aux.select();
  console.log("4");
  // Copy the highlighted text
  document.execCommand("copy");
  console.log("5");
  // Remove it from the body
  document.body.removeChild(aux);
  console.log("6");
  confirmaCopia()
}

function confirmaCopia() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
} 