/* eslint-disable no-undef */
/**
 * THS sit map
 * - each sit represented by one marker on map
 * - markers in close neighborhood groupwed in marker cluster
 * - popup per marker with sitinformation content like host, pets, time, THS-link and button to activate video popup
 * 
 * Marker grouping width markercluster plugin
 */

// config map
let config = {
  minZoom: 5,
  maxZoom: 18,
};
// magnification with which the map will start
const zoom = 5;
// coordinates
const lat = 51.50533428501075;
const lng = 7.49999310452571;

// coordinate array with popup text
/* let points = [
  [52.22922544734814, 21.008997559547428, "point 1"],
  [52.22941930482576, 21.009861230850223, "point 2"],
  [52.22966244690615, 21.011084318161014, "point 3"],
  [52.22980701724154, 21.01167440414429, "point 4"],
  [52.22998444382795, 21.012511253356937, "point 5"],
  [52.230188154960125, 21.013487577438358, "point 6"],
  [52.230299867119605, 21.01395428180695, "point 7"],
  [51.26191485308451, 17.753906250000004, "point 8"],
  [51.23440735163461, 17.578125000000004, "point 9"],
  [50.84757295365389, 17.753906250000004, "point 10"],
  [50.90303283111257, 18.061523437500004, "point 11"],
  [51.04139389812637, 17.446289062500004, "point 12"],
]; */

// sit data

cols=['lon','lat','name']
// coordinate array with popup text
let points = [
  [7.49999310452571,51.50533428501075,"Dortmund","https://www.trustedhousesitters.com/house-and-pet-sitters/germany/north-rhine-westphalia/dortmund/l/1022593/?q=eyJmaWx0ZXJzIjp7ImFjdGl2ZU1lbWJlcnNoaXAiOnRydWUsImdlb1BvaW50Ijp7ImxhdGl0dWRlIjo1MS41MTQ5NCwibG9uZ2l0dWRlIjo3LjQ2NiwiZGlzdGFuY2UiOiI0MGttIn19LCJmYWNldHMiOltdLCJzb3J0IjpbeyJpbmRleGVkX2RhdGUiOiJkZXNjIn1dLCJwYWdlIjoxLCJyZXN1bHRzUGVyUGFnZSI6MjQsImRlYnVnIjpmYWxzZX0%3D","Susanne&Manfred","All sorts","Jan 21- Dec 25",3,"./images/Dortmund.jpg","./images/THSlogo-transparent-720p.webm"],
  [7.543541447702308,50.286154087710166,"Waldesch","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/germany/rheinland-pfalz/koblenz/l/581748/","Stefan&Dominique","Martha, Lea, Lara, and more","Apr 22",1,"./images/Koblenz_Icon.jpg","./images/THS-Koblenz-video-720-medijm_VP9.webm"],
  [5.235674053272854,50.46427965188503,"Huy","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/belgium/wallonia/huy/l/791682/","Didier","James&Jones","May 23",1,"./images/Didier.jpg","./images/THS-Huy-720-medium_VP9.webm"],
  [4.633715410834703,52.39417623633694,"Haarlem","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/netherlands/north-holland/haarlem/l/1495460/","James","Summer","Aug 23, May 24",2,"./images/James.jpg","./images/THSlogo-transparent-720p.webm"],
  [4.3949333415388905,52.1466077707771,"Wassenaar","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/netherlands/south-holland/wassenaar/l/1482346/","Toni&Marti","Cinnamon","Oct 23, Ap 24",2,"./images/ToniMarti.jpg",""],
  [5.479716247449919,51.70696460620194,"Hertogenbosch","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/netherlands/north-brabant/s-hertogenbosch/l/423323/","Luc&Bas","Henry, Norbert, Hannes, Jannes, Poltry","Ap 23",1,"./images/Hertogenbosch.jpg",""],
  [6.834764474995741,46.83020403419155,"Chatillion","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/switzerland/bern/bern/l/1138513/","Saloua&Pascal","Eko&Neo","Sep 23",1,"./images/Chatillion.jpg","./images/THS-Chatillion-720x576-medium_VP9.webm"],
  [1.821488184987038,50.80469920782534,"Hardighen","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/france/hauts-de-france/hardinghen/l/265425/","Alison&John","Genna&Mowgli","Jul 22",1,"./images/Hardinghen.jpg","./images/THS-Hardinghen-720-medium_VP9.webm"],
  [9.00645404796947,54.506591221517795,"Husum","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/germany/schleswig-holstein/husum/l/833838/","Petra&Martinus","Mephisto&Azrael","Sep 22",1,"./images/Husum.jpg",""],
  [9.967257228056063,48.39525782050707,"Ulm","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/germany/baden-wuerttemberg/ulm/l/443180/","Rachel&Matt","Boady, Ragnar, Poltry","Feb 22",1,"./images/Ulm.jpg",""],
  [6.119348290099437,49.60962000406314,"Luxembourg","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/luxembourg/luxembourg/luxembourg/l/608597/","Lisa","Louis","Dec 21",1,"./images/Luxembourg.jpg",""],
  [9.149564426819298,51.48628495389147,"Warburg","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/germany/north-rhine-westphalia/warburg/l/682706/","Geraldine","Suri, Pico, Angel, Birds","Aug 22",1,"./images/Warburg.jpg",""],
  [7.528425592260216,50.373084982444205,"Koblenz","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/germany/rheinland-pfalz/koblenz/l/581748/","Stefan&Dominique","Martha, Lea, Lara, and more","Oct 22",1,"./images/Koblenz_Icon.jpg","./images/THSlogo-transparent-720p-H265.mov"],
  [8.881426054304299,53.08460824385044,"Bremen","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/germany/bremen/bremen/","Katherine","Gloria","Nov 21",1,"./images/Katherine.jpg",""],
  [5.835588687379251,51.9570314931211,"Arnhem","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/netherlands/gelderland/arnhem/l/511473/","Liz&Neil","Bismarck&Boefje","Dec 23",1,"./images/Arnhem.jpg",""],
  [4.945341738516996,52.37470856181347,"Amsterdam","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/netherlands/north-holland/amsterdam/l/1164792/","Josh&Kevin","Jett,Louie,Wilhelmina,Henry","Dec 23",1,"./images/Amsterdam.jpg",""],
  [4.240792746350671,52.07207454100266,"Scheveningen","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/netherlands/south-holland/scheveningen/l/615972/","David&Joanna","Floky","Feb 24",1,"./images/Scheveningen.jpg","./images/F&M-Kijkduin-720p-24fps-final.webm"],
  [7.623173354069206,51.49613653790669,"Holzwickede","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/germany/north-rhine-westphalia/holzwickede/l/540195/","Casey&Stefan","Hudson","Feb 24",1,"./images/Holzwickede.jpg",""],
  [3.206915665039187,51.33188066710052,"Zeebrugge","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/belgium/flanders/zeebrugge/l/804559/","Eve&Thomas","Mila&Sam","Ap 24",1,"./images/Zeebrugge.jpg","./images/THS-Zeebrugge-720-24-medium_VP8.webm"],
  [-2.3996494033252302,48.3645661836332,"Plenee-Jugon","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/france/brittany/plenee-jugon/l/232436/","Ron&Judi","Alpaka-Gang","Jul 24",0,"./images/RonJudi.jpg","./images/THSvideo-Plenee_VP8.webm"],
  [4.401146346131438,52.13865411534486,"Wassenaar","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/netherlands/south-holland/wassenaar/l/1300300/","Corrine","Wrigley,Wuffles,Bean,Leo","Oct 24",0,"./images/Corrine.jpg",""],
  [6.138636792194074,49.600554456269876,"Luxembourg","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/luxembourg/luxembourg/luxembourg/l/1194572/","Elisabetta&Marco","Speck","Jul 24",0,"./images/Elisabetta-Marco.jpg",""]
];

// calling map
// support for touch event : tap
const map = L.map("map", {config, tap: true}).setView([lat, lng], zoom);

// Used to load and display tile layers on the map
// Most tile servers require attribution, which you can set under `Layer`
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// L.MarkerClusterGroup extends L.FeatureGroup
// by clustering the markers contained within
let markers = L.markerClusterGroup();


/////////////////////////////////////////////////////////////////
// Create popups with sit content and bind to marker for each sit
/////////////////////////////////////////////////////////////////
for (let i = 0; i < points.length; i++) {

  const [lng, lat, name, ths_url, hosts, pets, dates, visits, img_file, video_file] = points[i];

  // Set showButton based on the length of video_file
  let showButton = video_file.length > 0;

  let html = `
        <h1> ${name}</h1>
        <p>Sit at ${hosts}:</p>
        <ul>
            <li>${dates}</li>
            <li>${pets}</li>
        </ul>
        </p>

        <p>Link to THS listing <a href=${ths_url} target=_blank>link</a></p>
        <img src=${img_file} style="width: 300px; height: auto; overflow: auto;">
        <p></p>
        <!-- button onclick="myFunction('${video_file}')">Click Me!</button> -->
        <!-- <button onclick="onButtonClick">Click Button!</button> -->
        <!-- <button onclick="openNewPopup(${lat},${lng},'${video_file}','${name}')">Click Button!</button> -->

        ${showButton ? `<button onclick="openNewPopup(${lat},${lng},'${video_file}','${name}')">Show slide show</button>` : ''}
    `;

  //<source src="./images/F&M-Kijkduin-720p-24fps-final.webm" type="video/webm">
  //html += '<img src=${img_file} "img_file/jpeg;base64, ' + encoded + '">'; 

  // set maxwidth conditional on device width
  let popup = L.popup({maxWidth: window.innerWidth > 600 ? 2650 : window.innerWidth - 20})
    .setContent(html);
  let marker = L.marker(new L.LatLng(lat, lng)).bindPopup(popup);
  markers.addLayer(marker);
}

////////////////////////////////////////////////////////////////
// Function to open a new popup with video player for video_file
////////////////////////////////////////////////////////////////
function openNewPopup(lat,lng,filename,name) {

  let html = `
  <h1> ${name}</h1>
 
  <p></p>
  <video class="no-display-on-mobile" width="320" height="240" controls>
    <source src=${filename} type="video/webm">
    <source src=${filename} type="video/mov">
    Your browser does not support the video tag.
  </video>
  `;

  var newPopupContent = 'This is the new popup content! '+lat.toString()+ ' - ' +lng.toString() +' - ' +filename;
  var newPopup = L.popup()
    .setLatLng([lat, lng])
    .setContent(html)
    .openOn(map);
}


// Add all markers to map
map.addLayer(markers);

////////////////////////////////////////
// Main Video overlay for segmented dogs
////////////////////////////////////////

// video overlay bounds
let topleft_lat = 54.17529672404642, topleft_lng = -1.0107421875000002 //top-left
let bottomright_lat = 47.14489748555398, bottomright_lng = 15.578613281250002 //bot-right


const video = document.createElement('video');
let videoUrl='';
if (video.canPlayType('video/webm').length > 0) {
    // WebM is supported
    //videoUrl = './images/Dogs-11-sec-720p-GoPro-RGB16_00108000.webm';
    videoUrl = './images/Dogs-Transparant-10sec-GoPro-RGB16-720p.webm';
    
} else {
    videoUrl = './images/Dogs-Transparant-10sec-GoPro-RGB16-720p-1.mov';
}

const videoBounds = [[topleft_lat, topleft_lng], [bottomright_lat, bottomright_lng]]; // Define the bounds

const videoOverlay = L.videoOverlay(videoUrl, videoBounds, {
  opacity: 0.8,
  interactive: true,
  autoplay: true,
  muted: true,
  playsInline: true
}).addTo(map);

// add control button to enable video-overlay display on/off
// Create a new control with a button
var VideoControl = L.Control.extend({
  onAdd: function() {
    var button = L.DomUtil.create('button');
    button.innerHTML = 'Video on/off';
    button.style.background = 'red'; // default when video is on
    button.style.padding = '10px';

    // When the button is clicked, toggle the video overlay
    L.DomEvent.on(button, 'click', function() {
      if (map.hasLayer(videoOverlay)) {
        map.removeLayer(videoOverlay);
        button.style.background = 'green'; // change to green when video is off
      } else {
        videoOverlay.addTo(map);
        // Get the video element and manually play it
        var video = videoOverlay.getElement();
        video.play();
        button.style.background = 'red'; // change to red when video is on
      }
    });

    return button;
  }
});

// Add the control to the map
new VideoControl({ position: 'topright' }).addTo(map);

// automatically adjust videoBounds to zoom-level
// Listen to the 'zoomend' event on the map and ajust videoOverlay bounds
map.on('zoomend', function() {
  // Get the current bounds of the map view
  var bounds = map.getBounds();

  // Set the bounds of the video overlay to the bounds of the map view
  videoOverlay.setBounds(bounds);
});


///////////////////////////////////////
///////////////////////////////////////

// browser type detection
// Opera
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
    return p.toString() === "[object SafariRemoteNotification]";
})(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

// Internet Explorer
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge
var isEdge = !isIE && !!window.StyleMedia;

// Chrome
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on Chromium)
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") !== -1);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;


console.log(video.canPlayType('video/webm'))
console.log(video.canPlayType('video/webm').length)
console.log(videoUrl)

const canPlay = {
  mp4: video.canPlayType('video/mp4'),
  ogg: video.canPlayType('video/ogg'),
  webm: video.canPlayType('video/webm'),
  mov: video.canPlayType('video/mov'),
  avi: video.canPlayType('video/avi'),
};

console.log(canPlay);
// outputs: { mp4: "maybe", ogg: "maybe", webm: "maybe", mov: "", avi: "" }

//const videoUrl = './images/Cinnamon-21-720p.mov';
//onst videoUrl = './images/Hudson-720p-goproCineForm-rgb-16bit-single00000000.webm';
//const videoUrl = './images/Cinnamon-21-720p.wepm';



// Example output
console.log("Detecting browsers by duck-typing:");
console.log("isFirefox:", isFirefox);
console.log("isChrome:", isChrome);
console.log("isSafari:", isSafari);
console.log("isOpera:", isOpera);
console.log("isIE:", isIE);


// FOLLOWING CODE TO BE DELETED
// ----------------------------
/* not needed anymore!
// callback function for on-click event of button in popup
// display video
// par: name = videofile
function myFunction(name) {
  //console.log(name);
  alert("Button clicked!"+name);

  // set videoUrl only for browsers that support webm; else, setdummy mov
  const video_sit = document.createElement('video');
  let videoUrl='';
  if (video_sit.canPlayType('video/webm').length > 0) {
      // WebM is supported
      //videoUrl = './images/Dogs-11-sec-720p-GoPro-RGB16_00108000.webm';
      videoUrl = name;
      
  } else {
      videoUrl = './images/THSlogo-transparent-720p-H265.mov';
  }

  video_sit.src = videoUrl;
  video_sit.controls= true;
  video_sit.target = '_blank';

  const videoBounds1 = [[53.0, -1.0], [47.0, 15.0]]; // Adjust coordinates as needed

  // Create the video overlay
  //var videoOverlay1 = L.videoOverlay(video_sit, videoBounds1, {
  //  opacity: 1.0 // Optional: Set opacity
  //});

  //videoOverlay1.addTo(map);
  L.videoOverlay(video_sit, videoBounds1).addTo(map);

  //video_sit.href = videoUrl;
  //video_sit.target = '_blank';
  //video_sit.click();

}
*/

//////////////////////////////////////
///////// display location on click //
//////////////////////////////////////
// Add an event listener for the click event on the map
/*
map.on('click', function(e) {
  // e.latlng contains the latitude and longitude of the clicked point
  var lat = e.latlng.lat;
  var lng = e.latlng.lng;

  // You can do something with the coordinates here, like display them to the user
  alert("You clicked the map at latitude: " + lat + " and longitude: " + lng);
});
*/


// ----------- test button click popup begin ----------------
/*
var pop01 = L.popup();
function onButtonClick(e) {
    pop01
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onButtonClick);

*/
// ----------- test button click popup end ----------------


