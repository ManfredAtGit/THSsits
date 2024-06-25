/* eslint-disable no-undef */
/**
 * Marker grouping width markercluster plugin
 */

// config map
let config = {
  minZoom: 6,
  maxZoom: 18,
};
// magnification with which the map will start
const zoom = 6;
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
cols=['lon','lat','name']
// coordinate array with popup text
let points = [
  [7.49999310452571,51.50533428501075,"Dortmund","https://www.trustedhousesitters.com/house-and-pet-sitters/germany/north-rhine-westphalia/dortmund/l/1022593/?q=eyJmaWx0ZXJzIjp7ImFjdGl2ZU1lbWJlcnNoaXAiOnRydWUsImdlb1BvaW50Ijp7ImxhdGl0dWRlIjo1MS41MTQ5NCwibG9uZ2l0dWRlIjo3LjQ2NiwiZGlzdGFuY2UiOiI0MGttIn19LCJmYWNldHMiOltdLCJzb3J0IjpbeyJpbmRleGVkX2RhdGUiOiJkZXNjIn1dLCJwYWdlIjoxLCJyZXN1bHRzUGVyUGFnZSI6MjQsImRlYnVnIjpmYWxzZX0%3D","Susanne&Manfred","All sorts","Jan 21- Dec 25",3,"./images/Dortmund.jpg"],
  [7.543541447702308,50.286154087710166,"Waldesch","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/germany/rheinland-pfalz/koblenz/l/581748/","Stefan&Dominique","Martha, Lea, Lara, and more","Apr 22",1,"./images/Koblenz_Icon.jpg"],
  [5.235674053272854,50.46427965188503,"Huy","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/belgium/wallonia/huy/l/791682/","Didier","James&Jones","May 23",1,"./images/Didier.jpg"],
  [4.633715410834703,52.39417623633694,"Haarlem","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/netherlands/north-holland/haarlem/l/1495460/","James","Summer","Aug 23, May 24",2,"./images/James.jpg"],
  [4.3949333415388905,52.1466077707771,"Wassenaar","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/netherlands/south-holland/wassenaar/l/1482346/","Toni&Marti","Cinnamon","Oct 23, Ap 24",2,"./images/ToniMarti.jpg"],
  [5.479716247449919,51.70696460620194,"Hertogenbosch","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/netherlands/north-brabant/s-hertogenbosch/l/423323/","Luc&Bas","Henry, Norbert, Hannes, Jannes, Poltry","Ap 23",1,"./images/Hertogenbosch.jpg"],
  [6.834764474995741,46.83020403419155,"Chatillion","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/switzerland/bern/bern/l/1138513/","Saloua&Pascal","Eko&Neo","Sep 23",1,"./images/Chatillion.jpg"],
  [1.821488184987038,50.80469920782534,"Hardighen","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/france/hauts-de-france/hardinghen/l/265425/","Alison&John","Genna&Mowgli","Jul 22",1,"./images/Hardinghen.jpg"],
  [9.00645404796947,54.506591221517795,"Husum","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/germany/schleswig-holstein/husum/l/833838/","Petra&Martinus","Mephisto&Azrael","Sep 22",1,"./images/Husum.jpg"],
  [9.967257228056063,48.39525782050707,"Ulm","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/germany/baden-wuerttemberg/ulm/l/443180/","Rachel&Matt","Boady, Ragnar, Poltry","Feb 22",1,"./images/Ulm.jpg"],
  [6.119348290099437,49.60962000406314,"Luxembourg","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/luxembourg/luxembourg/luxembourg/l/608597/","Lisa","Louis","Dec 21",1,"./images/Luxembourg.jpg"],
  [9.149564426819298,51.48628495389147,"Warburg","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/germany/north-rhine-westphalia/warburg/l/682706/","Geraldine","Suri, Pico, Angel, Birds","Aug 22",1,"./images/Warburg.jpg"],
  [7.528425592260216,50.373084982444205,"Koblenz","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/germany/rheinland-pfalz/koblenz/l/581748/","Stefan&Dominique","Martha, Lea, Lara, and more","Oct 22",1,"./images/Koblenz_Icon.jpg"],
  [8.881426054304299,53.08460824385044,"Bremen","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/germany/bremen/bremen/","Katherine","Gloria","Nov 21",1,"./images/Katherine.jpg"],
  [5.835588687379251,51.9570314931211,"Arnhem","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/netherlands/gelderland/arnhem/l/511473/","Liz&Neil","Bismarck&Boefje","Dec 23",1,"./images/Arnhem.jpg"],
  [4.945341738516996,52.37470856181347,"Amsterdam","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/netherlands/north-holland/amsterdam/l/1164792/","Josh&Kevin","Jett,Louie,Wilhelmina,Henry","Dec 23",1,"./images/Amsterdam.jpg"],
  [4.240792746350671,52.07207454100266,"Scheveningen","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/netherlands/south-holland/scheveningen/l/615972/","David&Joanna","Floky","Feb 24",1,"./images/Scheveningen.jpg"],
  [7.623173354069206,51.49613653790669,"Holzwickede","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/germany/north-rhine-westphalia/holzwickede/l/540195/","Casey&Stefan","Hudson","Feb 24",1,"./images/Holzwickede.jpg"],
  [3.206915665039187,51.33188066710052,"Zeebrugge","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/belgium/flanders/zeebrugge/l/804559/","Eve&Thomas","Mila&Sam","Ap 24",1,"./images/Zeebrugge.jpg"],
  [-2.3996494033252302,48.3645661836332,"Plenee-Jugon","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/france/brittany/plenee-jugon/l/232436/","Ron&Judi","Alpaka-Gang","Jul 24",0,"./images/RonJudi.jpg"],
  [4.401146346131438,52.13865411534486,"Wassenaar","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/netherlands/south-holland/wassenaar/l/1300300/","Corrine","Wrigley,Wuffles,Bean,Leo","Oct 24",0,"./images/Corrine.jpg"],
  [6.138636792194074,49.600554456269876,"Luxembourg","https://www.trustedhousesitters.com/house-and-pet-sitting-assignments/luxembourg/luxembourg/luxembourg/l/1194572/","Elisabetta&Marco","Speck","Jul 24",0,"./images/Elisabetta-Marco.jpg"]
];

// calling map
const map = L.map("map", config).setView([lat, lng], zoom);

// Used to load and display tile layers on the map
// Most tile servers require attribution, which you can set under `Layer`
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// L.MarkerClusterGroup extends L.FeatureGroup
// by clustering the markers contained within
let markers = L.markerClusterGroup();

// Add markers to the layer
for (let i = 0; i < points.length; i++) {
  //const [lat, lng, title] = points[i];
  const [lng, lat, name, ths_url, hosts, pets, dates, visits, img_file] = points[i];

  let html = `
        <h1> ${name}</h1>
        <p>Sit bei ${hosts}:</p>
        <ul>
            <li>${dates}</li>
            <li>${pets}</li>
        </ul>
        </p>

        <p>Link to THS listing <a href=${ths_url} target=_blank>link</a></p>
        <img src=${img_file} style="width: 300px; height: auto; overflow: auto;">
    `;

  //html += '<img src=${img_file} "img_file/jpeg;base64, ' + encoded + '">'; 
  let popup = L.popup({maxWidth: 2650})
    .setContent(html);
  let marker = L.marker(new L.LatLng(lat, lng)).bindPopup(popup);
  markers.addLayer(marker);
}

// Add all markers to map
map.addLayer(markers);
