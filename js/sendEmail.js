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


  