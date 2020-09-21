// Contest Entry Submition EmailJS //

function sendMail(contestEntry) {
    emailjs.send("SkiVillage", "template_pvm79k8", {
       "from_name": contestEntry.name.value,
       "from_email": contestEntry.emailaddress.value,
       "favorite_mountain": contestEntry.favoritemountain.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}

// Change text on form submission //
function changeText() {
  var x = document.getElementById("change");
  if (x.innerHTML === "Enter To Win The Pass Of Your Choice!") {
    x.innerHTML = "Good Luck!";
  } else {
    x.innerHTML = "Enter To Win The Pass Of Your Choice!";
  }
}

// Hide form on submission //
$(document).ready(function(){
    $( "#submitBtn" ).click(function() {
        $( "#contest" ).hide( "slow", function() {
    });
});
}); 