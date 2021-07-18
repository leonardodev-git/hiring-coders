function saveData() {
  var email = document.getElementById("exampleInputEmail1").value;
  var nome = document.getElementById("exampleInputText").value;
  localStorage.setItem("User", JSON.stringify({ email, nome }));
}

const btn = document.getElementById("saveInfo");
btn.onclick = saveData;
