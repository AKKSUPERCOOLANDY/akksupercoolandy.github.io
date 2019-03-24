alert("Waring: This is not a safe website to visit. We are not responsible for anything bad that happens. Thank you"
	<div class="alert alert-danger" role="alert">
  Waring: This is not a safe website to visit. We are not responsible for anything bad that happens. Thank you.
function validateForm() {
 	var missing = []
	if($("#name").val() == "")
		missing.push("name")
	if($("#email").val() == "")
		missing.push("email")
	if($("#message").val() == "")
		missing.push("message")
	if(missing.length>0) {
		$("#formerrors").css("color", "red")
		$("#formerrors").html("You are missing: " + missing)
	} else {
		$("#formerrors").css("color", "green")
		$("#formerrors").html("Thank you for submitting!")
	}
}

function validateForm1() {
	$("#formerrors").css("color", "red")
	$("#formerrors").html("You are missing: missed")
}


function validateForm2() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out 2");
    return false;
  }
}