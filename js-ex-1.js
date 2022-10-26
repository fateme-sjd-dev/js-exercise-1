let selectedPerson;

function addPerson(btn) {
  let fname = document.getElementById("txtFName").value;
  let lname = document.getElementById("txtLName").value;

  if (btn.value == "Add") {
    let person = document.createElement("tr");

    let chkCell = document.createElement("td");
    chkCell.innerHTML = '<input type="checkbox" />';

    let fnCell = document.createElement("td");
    let fnNode = (document.createTextNode = fname);
    fnCell.appendChild(fnNode);

    let lnCell = document.createElement("td");
    let lnNode = (document.createTextNode = lname);
    lnCell.appendChild(lnNode);
  }
}
