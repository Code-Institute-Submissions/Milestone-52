let map;
let emarkers = [];
let cmarkers = [];
let imarkers = [];

// Google Map // 
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom:4,
        center:{lat:39.8097,lng:-98.5556},
        gestureHandling: 'cooperative',
        streetViewControl: false,
        mapTypeControl: false
    });

    //map.addListener
    function setMarkers(locations, markerArray, icon) {
        let location = locations.map(function(location, i) {
            let marker = new google.maps.Marker({
                position: location.coords,
                map: null,
                icon: `http://maps.google.com/mapfiles/kml/paddle/${icon}`
            });
            let infowindow = new google.maps.InfoWindow({
                content: location.info
            });
            marker.addListener("click", () => {
                infowindow.open(map, marker);
                map.setZoom(6);
                map.setCenter(marker.getPosition());
            });
            markerArray.push(marker);
            return marker;
        });
    }
    setMarkers(ikonLocationsWithInfoContent, imarkers, 'blu-circle.png' )
    setMarkers(epicLocationsWithInfoContent, emarkers, 'orange-circle.png')
    setMarkers(collectiveLocationsWithInfoContent, cmarkers, 'wht-circle.png')
}

// Toggle Mountain Lists and Button Color//
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
		   return v === 'Hide Epic Mountains' ? 'Show Epic Mountains' : 'Hide Epic Mountains'
		});
    });
    });

$(document).ready(function(){
  $(".ikon-btn").click(function() {
  $(this).toggleClass('ikon-pressed');
    });
  $(".ikon-btn").click(function(){
		$(this).text(function(_i, v){
		   return v === 'Hide Ikon Mountains' ? 'Show Ikon Mountains' : 'Hide Ikon Mountains'
		});
    });  
    });

$(document).ready(function(){
  $(".collective-btn").click(function() {
  $(this).toggleClass('collective-pressed');
    });
        $(".collective-btn").click(function(){
		$(this).text(function(_i, v){
		   return v === 'Hide Collective Mountains' ? 'Show Collective Mountains' : 'Hide Collective Mountains'
		});
    });
    });

// Toggle Markers On and Off Map //    
function toggleEpic() {
    var e = document.getElementById("epic-btn");
    if (e.classList.contains('epic-pressed'))
    {
        show = null;
    }
    else 
    {
        show = map;
    }
    for (var i = 0; i < emarkers.length; i++) {
		emarkers[i].setMap(show);
    };
};

function toggleCollective() {
    var c = document.getElementById("collective-btn");
    if (c.classList.contains('collective-pressed'))
    {
        show = null;
    }
    else 
    {
        show = map;
    }
    for (var i = 0; i < cmarkers.length; i++) {
		cmarkers[i].setMap(show);
    };
};

function toggleIkon() {
    var k = document.getElementById("ikon-btn");
    if (k.classList.contains('ikon-pressed'))
    {
        show = null;
    }
    else 
    {
        show = map;
    }
    for (var i = 0; i < imarkers.length; i++) {
		imarkers[i].setMap(show);
    };
};

// Scroll to top button
$('.topBtn').click(function(){
    $('html, body').animate({
        scrollTop: $('#topofthePage').offset().top
    }, 1000);
});    
  
