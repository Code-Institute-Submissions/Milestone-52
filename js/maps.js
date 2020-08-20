function initMap(){
    var options = {
        zoom:4,
        center:{lat:39.8097,lng:-98.5556},
        gestureHandling: 'cooperative'
    }
    var map = new google.maps.Map(document.getElementById("map"), options);
}

$(document).ready(function(){
  $(".menu-icon").mouseenter(function(){
    $("#mySidenav").css("width", "450px");
  });
  $("#mySidenav").mouseleave(function(){
    $("#mySidenav").css("width", "0");
  });
});

$(document).ready(function(){
  $("#epic-btn").click(function(){
    $("#epic-container").toggle();
  });
  $("#collective-btn").click(function(){
    $("#collective-container").toggle();
  });
  $("#ikon-btn").click(function(){
    $("#ikon-container").toggle();
  });
});


$(document).ready(function(){
  $(".epic-btn").click(function() {
  $(this).toggleClass('epic-pressed');
    });
        $(".epic-btn").click(function(){
		$(this).text(function(_i, v){
		   return v === 'Show Epic' ? 'Hide Epic' : 'Show Epic'
		});
    });
    });

$(document).ready(function(){
  $(".ikon-btn").click(function() {
  $(this).toggleClass('ikon-pressed');
    });
  $(".ikon-btn").click(function(){
		$(this).text(function(_i, v){
		   return v === 'Show Ikon' ? 'Hide Ikon' : 'Show Ikon'
		});
    });  
    });

$(document).ready(function(){
  $(".collective-btn").click(function() {
  $(this).toggleClass('collective-pressed');
    });
        $(".collective-btn").click(function(){
		$(this).text(function(_i, v){
		   return v === 'Show Collective' ? 'Hide Collective' : 'Show Collective'
		});
    });
    });