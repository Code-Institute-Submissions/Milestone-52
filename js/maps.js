let map;
let emarkers = [];
let cmarkers = [];
let imarkers = [];

// Google Map // 
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom:4,
        center:{lat:39.8097,lng:-98.5556},
        gestureHandling: 'cooperative'
    });

    var epicLocations = [
        {lat: 38.6848, lng: -120.0652},
        {lat: 38.9353, lng: -119.9399},
        {lat: 39.2733, lng: -120.1025},
        {lat: 39.604328, lng: -106.512329},
        {lat: 39.482231, lng: -106.046181},
        {lat: 38.8991, lng: -106.9658},
        {lat: 39.6084, lng: -105.9437},
        {lat: 39.6061, lng: -106.3550},
        {lat: 38.5562, lng: -86.4683},
        {lat: 42.5408, lng: -83.8115},
        {lat: 44.853864, lng: -92.790553},
        {lat: 38.5353, lng: -90.6507},
        {lat: 39.4673, lng: -94.9707},
        {lat: 44.0828, lng: -71.2294},
        {lat: 43.0120, lng: -71.8789},
        {lat: 43.3082, lng: -72.0712},
        {lat: 44.2641, lng: -71.2393},
        {lat: 40.714353, lng: -74.005973},
        {lat: 41.5269, lng: -81.2597},
        {lat: 41.2641, lng: -81.5632},
        {lat: 40.318173, lng: -83.678652},
        {lat: 41.0502, lng: -75.6013},
        {lat: 41.1092, lng: -75.6563},
        {lat: 39.7598177, lng: -77.370821},
        {lat: 40.1095, lng: -76.9275},
        {lat: 39.7418, lng: -77.9333},
        {lat: 40.6505, lng: -111.5045},
        {lat: 42.9689, lng: -72.8962},
        {lat: 43.4008, lng: -72.7167},
        {lat: 44.5258, lng: -72.7858},
        {lat: 47.7448, lng: -121.0890},
        {lat: 42.4990, lng: -88.1877},
        {lat: 50.1130, lng: -122.9544}   
    ];
    var collectiveLocations = [
        {lat: 37.6308, lng: -119.0326},
        {lat: 39.1976, lng: -120.2354},
        {lat: 39.1863, lng: -106.8182},
        {lat: 45.2857, lng: -111.4012},
        {lat: 36.5960, lng: -105.4545},
        {lat: 40.5884, lng: -111.6386},
        {lat: 40.5811, lng: -111.6603},
        {lat: 44.1359, lng: -72.8944},
        {lat: 44.2717327, lng: -70.9250709},
        {lat: 43.7871, lng: -110.9593},
        {lat: 43.5875, lng: -110.8279},
        {lat: 51.07861, lng: -115.78222},
        {lat: 51.4419, lng: -116.1622},
        {lat: 50.4604, lng: -116.2381},
        {lat: 50.9583, lng: -118.1638},
        {lat: 50.8844, lng: -119.8859}
    ];
    var ikonLocations =[
        {lat: 34.2267, lng: -116.8602},
        {lat: 37.7679, lng: -119.0906},
        {lat: 37.6308, lng: -119.0326},
        {lat: 39.1970, lng: -120.2357},
        {lat: 39.6425, lng: -105.8719},
        {lat: 39.1863, lng: -106.8182},
        {lat: 39.5014, lng: -106.1516},
        {lat: 40.4572, lng: -106.8045},
        {lat: 39.8868, lng: -105.7625},
        {lat: 44.4734, lng: -70.8569},
        {lat: 45.0541, lng: -70.3085},
        {lat: 45.4702, lng: -84.9379},
        {lat: 45.2857, lng: -111.4012},
        {lat: 44.0564, lng: -71.6333},
        {lat: 36.5960, lng: -105.4545},
        {lat: 42.2937, lng: -74.2567},
        {lat: 44.0029, lng: -121.6791},
        {lat: 40.5884, lng: -111.6386},
        {lat: 40.5980, lng: -111.5832},
        {lat: 40.6374, lng: -111.4783},
        {lat: 40.5818, lng: -111.6552},
        {lat: 40.6199, lng: -111.5919},
        {lat: 43.6263, lng: -72.7968},
        {lat: 43.1134, lng: -72.9081},
        {lat: 44.1359, lng: -72.8944},
        {lat: 45.0541, lng: -70.3085},
        {lat: 46.9282, lng: -121.5045},
        {lat: 47.4240, lng: -121.4160},
        {lat: 38.4108, lng: -79.9936},
        {lat: 43.5875, lng: -110.8279},
        {lat: 40.8107, lng: -75.5209},
        {lat: 49.3960, lng: -123.2045},
        {lat: 50.9583, lng: -118.1638},
        {lat: 51.1152, lng: -115.7633},
        {lat: 46.2096, lng: -74.5853}
    ];

// Push Markers //
    var epic = epicLocations.map(function(location, i) {
        var epicMarkers = new google.maps.Marker({
            position: location,
            map:null,
            icon: 'http://maps.google.com/mapfiles/kml/paddle/orange-circle.png'
         });
         emarkers.push(epicMarkers);
         return epicMarkers;
    });
      
    var collective = collectiveLocations.map(function(location, i) {
        var collectiveMarkers = new google.maps.Marker({
            position: location,
            map:null,
            icon: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png'
        });
        cmarkers.push(collectiveMarkers);
        return collectiveMarkers;
    });

    var ikon = ikonLocations.map(function(location, i) {
        var ikonMarkers = new google.maps.Marker({
            position: location,
            map:null,
            icon: 'http://maps.google.com/mapfiles/kml/paddle/blu-circle.png'
        });
        imarkers.push(ikonMarkers);
        return ikonMarkers;
    });
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
