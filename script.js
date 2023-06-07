var gi = [];

function submitForm() {
  var name = document.getElementById("nameInput").value;
  var birthDate = document.getElementById("birthDateInput").value;
  var gender = document.getElementById("genderSelect").value;
  var message = document.getElementById("messageInput").value;

  var data = {
    name: name,
    birthDate: birthDate,
    gender: gender,
    message: message,
  };

  gi.push(data);
  document.getElementById("hasil").value = JSON.stringify(gi);
}
