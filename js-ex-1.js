// let selectedPerson;

// function addPerson(btn) {
//   let fname = document.getElementById("txtFName").value;
//   let lname = document.getElementById("txtLName").value;

//   if (btn.value == "Add") {
//     let person = document.createElement("tr");

//     let chkCell = document.createElement("td");
//     chkCell.innerHTML = '<input type="checkbox" />';

//     let fnCell = document.createElement("td");
//     let fnNode = (document.createTextNode = fname);
//     fnCell.appendChild(fnNode);

//     let lnCell = document.createElement("td");
//     let lnNode = (document.createTextNode = lname);
//     lnCell.appendChild(lnNode);
//   }
// }
var selectedPerson;
function addPerson(btn) {
  var fname = document.getElementById("txtFName").value;
  var lname = document.getElementById("txtLName").value;

  if (btn.value == "Add") {
    var person = document.createElement("tr");
    person.onmouseover = function () {
      this.style.backgroundColor = "pink";
    };
    person.onmouseout = function () {
      this.style.backgroundColor = "white";
    };

    var chkCell = document.createElement("td");
    chkCell.innerHTML = "<input type='checkbox' onclick='chkClick(this)' />";

    var fnCell = document.createElement("td");
    var fnNode = document.createTextNode(fname);
    fnCell.appendChild(fnNode);
    //fnCell.innerHTML = fname
    var lnCell = document.createElement("td");
    var lnNode = document.createTextNode(lname);
    lnCell.appendChild(lnNode);

    var delLink = document.createElement("a");
    delLink.innerHTML = "Delete";
    delLink.href = "#";
    //delLink.onclick = function(){delPerson(event)}
    //delLink.onclick = function(){delPerson2(this)}
    delLink.onclick = function () {
      delPerson3(person);
    };

    var editLink = document.createElement("a");
    editLink.innerHTML = "Edit";
    editLink.href = "#";
    editLink.onclick = function () {
      editPerson(person);
    };

    var sep = document.createTextNode(" | ");

    var opCell = document.createElement("td");
    opCell.appendChild(delLink);
    opCell.appendChild(sep);
    opCell.appendChild(editLink);

    person.appendChild(chkCell);
    person.appendChild(fnCell);
    person.appendChild(lnCell);
    person.appendChild(opCell);

    document.getElementById("tblPersons").appendChild(person);
  } else {
    selectedPerson.childNodes[1].innerHTML = fname;
    selectedPerson.childNodes[2].innerHTML = lname;
    selectedPerson.style.backgroundColor = "white";
  }
}

function delPerson(e) {
  var person = e.srcElement.parentNode.parentNode;
  document.getElementById("tblPersons").removeChild(person);
}

function delPerson2(link) {
  var person = link.parentNode.parentNode;
  document.getElementById("tblPersons").removeChild(person);
}

function delPerson3(person) {
  document.getElementById("tblPersons").removeChild(person);
}

function editPerson(person) {
  selectedPerson = person;
  person.style.backgroundColor = "orange";
  document.getElementById("txtFName").value = person.childNodes[1].innerHTML;
  document.getElementById("txtLName").value = person.childNodes[2].innerHTML;
  document.getElementById("btnAdd").value = "Modify";
}

function chkAll_click(chkAll) {
  var tbl = document.getElementById("tblPersons");
  if (chkAll.checked)
    for (var i = 1; i < tbl.childNodes.length; ++i)
      tbl.childNodes[i].childNodes[0].childNodes[0].checked = "checked";
  else
    for (var i = 1; i < tbl.childNodes.length; ++i)
      tbl.childNodes[i].childNodes[0].childNodes[0].checked = "";
}

function chkClick(chk) {
  var tbl = document.getElementById("tblPersons");
  var boxes = tbl.getElementsByTagName("input");
  if (!chk.checked) document.getElementById("chkAll").checked = "";
  else
    for (var i = 1; i < boxes.length; ++i)
      if (boxes[i].checked) continue;
      else break;

  if (i == boxes.length) document.getElementById("chkAll").checked = "checked";
}

function deleteSelected() {
  var tbl = document.getElementById("tblPersons");
  var boxes = tbl.getElementsByTagName("input");
  for (var i = 1; i < boxes.length; ) {
    //if(tbl.childNodes[i].childNodes[0].childNodes[0].checked == "checked")
    //	tbl.removeChild(tbl.childNodes[i])
    if (boxes[i].checked) {
      tbl.removeChild(boxes[i].parentNode.parentNode);
    } else ++i;
  }
}
