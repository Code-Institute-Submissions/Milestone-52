function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
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

    var markers = epicLocations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            map:map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
        });
    });

    var markers = collectiveLocations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            map:map,
            icon: 'http://labs.google.com/ridefinder/images/mm_20_white.png'
        });
    });
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