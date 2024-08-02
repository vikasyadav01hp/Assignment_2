$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    if ($("#name").val() === "") {
      alert("Name field is empty.");
      return;
    }
    if ($("#email").val() === "") {
      alert("Email field is empty.");
      return;
    }
    if ($('#password').val() === "" || $('#cnfpassword').val() === "") {
      alert("Please enter password.");
      return;
    }
    if ($('#password').val() !== $('#cnfPassword').val()) {
      alert("Passwords do not match.");
      return;  
  }

    alert("Success!");
    form.reset();
  });
});
