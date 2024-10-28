console.log("Event Handling DOM Started . . . . .");

const saveBtn = document.getElementById("btnSave");
console.log(saveBtn);
saveBtn.addEventListener("click", btnClicked);

function btnClicked() {
  alert("save button clicked");
}

saveBtn.removeEventListener("click", btnClicked);
