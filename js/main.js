 function add(){
 document.querySelector('.nav-2').style.display = 'block';



}
 function remove(){
 document.querySelector('.nav-2').style.display = 'none';


}

//For google Map
function initMap(){
  var option = {
  zoom:6,
  center:{lat:26.8467,lng:80.9462}
  
  
  }
   var map = new google.maps.Map(
       document.getElementById('map'), option);
  
  // google.maps.event.addListener(map, 'click', function(event){
  
  
  // add({pos:event.latLng})
  
  // });
  
  
  
  
  var mark = [
  {
  pos:{lat:26.4499,lng:80.3319},
  con:'<h2>Kanpur</h2>'
  
  
  
  },
  {
  
  pos:{lat:25.4796,lng:80.3380},
  con:'<h2>Banda</h2>'
  
  },
  {
  
  pos:{lat:26.8467,lng:80.9462},
  con:'<h2>Lucknow</h2>'
  
  },
  {
  
  pos:{lat:27.0073,lng:80.9226},
  con:'<h2>SRIMT</h2>'
  
  }
  
  ];
  
  mark.forEach(function(index ,a){
  add(mark[a])
  
  
  })
  
  
  
  
  
  
  
  
  // add({
  // pos:{lat:26.4499,lng:80.3319},
  // con:'<h2>Kanpur</h2>'
  
  
  
  // });
  // add({
  
  // pos:{lat:25.4796,lng:80.3380},
  // con:'<h2>Banda</h2>'
  
  // });
  // add({
  
  // pos:{lat:26.8467,lng:80.9462},
  // con:'<h2>Lucknow</h2>'
  
  // });
  // add({
  
  // pos:{lat:27.0073,lng:80.9226},
  // con:'<h2>SRIMT</h2>'
  
  // });
  
  function add(loc){
       var marker = new google.maps.Marker({
          
          position:loc.pos,
        map:map
        
        
       });
  
    var infoWindow = new google.maps.InfoWindow({
   content:loc.con
  
   });
   marker.addListener('click', function(){
   infoWindow.open(map, marker);
   });
  
  
  
  
  
  }
  
  
  }
