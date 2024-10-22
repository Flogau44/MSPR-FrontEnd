// On initialise la carte

var myMap = L.map("myMap", {
  center: [49.05466, 2.37556],
  zoom: 13.5,
});

// On charge les tuiles
var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  minZoom: 10,
  maxZoom: 18,
}).addTo(myMap);

// liste des scènes
var myIconScene = L.icon({
  iconUrl: "./images/mapIcone/micro.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var scene1 = L.marker([49.05982, 2.3579], {
    icon: myIconScene,
  }).bindPopup("Scène 1"),
  scene2 = L.marker([49.06072, 2.36116], {
    icon: myIconScene,
  }).bindPopup("Scène 2"),
  scene3 = L.marker([49.06617, 2.38374], {
    icon: myIconScene,
  }).bindPopup("Scène 3"),
  scene4 = L.marker([49.06693, 2.38101], {
    icon: myIconScene,
  }).bindPopup("Scène 4"),
  scene5 = L.marker([49.05034, 2.35851], {
    icon: myIconScene,
  }).bindPopup("Scène 5");

var markerScene = L.layerGroup([scene1, scene2, scene3, scene4, scene5]).addTo(
  myMap
);

// liste des WC
var myIconWc = L.icon({
  iconUrl: "./images/mapIcone/wc.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var wc1 = L.marker([49.0482, 2.36675], {
    icon: myIconWc,
  }).bindPopup("WC"),
  wc2 = L.marker([49.05439, 2.37699], {
    icon: myIconWc,
  }).bindPopup("WC"),
  wc3 = L.marker([49.057, 2.39258], {
    icon: myIconWc,
  }).bindPopup("WC"),
  wc4 = L.marker([49.06127, 2.38523], {
    icon: myIconWc,
  }).bindPopup("WC"),
  wc5 = L.marker([49.06482, 2.39172], {
    icon: myIconWc,
  }).bindPopup("WC"),
  wc6 = L.marker([49.06131, 2.38262], {
    icon: myIconWc,
  }).bindPopup("WC"),
  wc7 = L.marker([49.0634, 2.3703], {
    icon: myIconWc,
  }).bindPopup("WC"),
  wc8 = L.marker([49.05199, 2.38202], {
    icon: myIconWc,
  }).bindPopup("WC");

var markerWc = L.layerGroup([wc1, wc2, wc3, wc4, wc5, wc6, wc7, wc8]).addTo(
  myMap
);

// liste des bars
var myIconBar = L.icon({
  iconUrl: "./images/mapIcone/bar.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var bar1 = L.marker([49.04834, 2.37284], {
    icon: myIconBar,
  }).bindPopup("Bar du village <br> Ouvert de 15h à 23h"),
  bar2 = L.marker([49.05727, 2.38058], {
    icon: myIconBar,
  }).bindPopup("Bar à vin <br> Ouvert de 15h à 23h"),
  bar3 = L.marker([49.06268, 2.3682], {
    icon: myIconBar,
  }).bindPopup("Bar à vin <br> Ouvert de 15h30 à 22h30"),
  bar4 = L.marker([49.06204, 2.36532], {
    icon: myIconBar,
  }).bindPopup("Bar à bière <br> Ouvert de 15h30 à 22h30"),
  bar5 = L.marker([49.0555, 2.37874], {
    icon: myIconBar,
  }).bindPopup("Bar à bière <br> Ouvert de 15h à 23h"),
  bar6 = L.marker([49.05198, 2.35618], {
    icon: myIconBar,
  })
    .bindPopup("Bar à bière <br> Ouvert de 15h30 à 22h30")
    .addTo(myMap);

var markerBar = L.layerGroup([bar1, bar2, bar3, bar4, bar5, bar6]).addTo(myMap);

// liste des points d'eau
var myIconWaterPoint = L.icon({
  iconUrl: "./images/mapIcone/waterPoint.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var waterPoint1 = L.marker([49.04829, 2.37931], {
    icon: myIconWaterPoint,
  }).bindPopup("Point d'eau"),
  waterPoint2 = L.marker([49.05321, 2.37733], {
    icon: myIconWaterPoint,
  }).bindPopup("Point d'eau"),
  waterPoint3 = L.marker([49.05436, 2.36926], {
    icon: myIconWaterPoint,
  }).bindPopup("Point d'eau"),
  waterPoint4 = L.marker([49.06511, 2.37612], {
    icon: myIconWaterPoint,
  }).bindPopup("Point d'eau"),
  waterPoint5 = L.marker([49.05757, 2.35526], {
    icon: myIconWaterPoint,
  }).bindPopup("Point d'eau"),
  waterPoint6 = L.marker([49.05408, 2.38721], {
    icon: myIconWaterPoint,
  }).bindPopup("Point d'eau");

var markerWaterPoint = L.layerGroup([
  waterPoint1,
  waterPoint2,
  waterPoint3,
  waterPoint4,
  waterPoint5,
  waterPoint6,
]).addTo(myMap);

// liste des régies
var myIconStageManagement = L.icon({
  iconUrl: "./images/mapIcone/stage_management.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var stageManagement1 = L.marker([49.05625, 2.36145], {
    icon: myIconStageManagement,
  }).bindPopup("Régie pour scène 1 et scène 2"),
  stageManagement2 = L.marker([49.05501, 2.36162], {
    icon: myIconStageManagement,
  }).bindPopup("Régie pour scène 5"),
  stageManagement3 = L.marker([49.05979, 2.37424], {
    icon: myIconStageManagement,
  }).bindPopup("Régie pour scène 3 et scène 4");

var markerStageManagement = L.layerGroup([
  stageManagement1,
  stageManagement2,
  stageManagement3,
]).addTo(myMap);

// liste des secouristes
var myIconRescuer = L.icon({
  iconUrl: "./images/mapIcone/rescuer.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var rescuer1 = L.marker([49.05285, 2.3695], {
    icon: myIconRescuer,
  }).bindPopup("Point de Secouriste"),
  rescuer2 = L.marker([49.05402, 2.39301], {
    icon: myIconRescuer,
  }).bindPopup("Point de Secouriste");

var markerRescuer = L.layerGroup([rescuer1, rescuer2]).addTo(myMap);

// liste des pshs
var myIconPlateformPsh = L.icon({
  iconUrl: "./images/mapIcone/psh.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var psh1 = L.marker([49.05681, 2.36489], {
    icon: myIconPlateformPsh,
  }).bindPopup("Plateforme PSH pour scène 1 et scène 2"),
  psh2 = L.marker([49.06336, 2.38261], {
    icon: myIconPlateformPsh,
  }).bindPopup("Plateforme PSH pour scène 3 et scène 4"),
  psh3 = L.marker([49.05129, 2.36625], {
    icon: myIconPlateformPsh,
  }).bindPopup("Plateforme PSH pour scène 5");

var markerPsh = L.layerGroup([psh1, psh2, psh3]).addTo(myMap);

// liste des restaurants
var myIconRestaurant = L.icon({
  iconUrl: "./images/mapIcone/restaurant.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var restaurant1 = L.marker([49.04845, 2.37687], {
    icon: myIconRestaurant,
  }).bindPopup(
    "Restaurant du village <br> Pannini, Croque Monsieur, Pizza, Frites <br> Ouvert de 18h à 23h"
  ),
  restaurant2 = L.marker([49.04829, 2.36945], {
    icon: myIconRestaurant,
  }).bindPopup(
    "Restaurant du village <br> Kebab, Americain, Frites <br> Ouvert de 18h à 23h"
  ),
  restaurant3 = L.marker([49.05947, 2.382], {
    icon: myIconRestaurant,
  }).bindPopup(
    "Restaurant 3 <br> Kebab, Americain, Frites <br> Ouvert de 17h à 22h"
  ),
  restaurant4 = L.marker([49.06409, 2.37249], {
    icon: myIconRestaurant,
  }).bindPopup(
    "Restaurant 4 <br> Burgers, Saucisse, Frites <br> Ouvert de 17h à 22h"
  ),
  restaurant5 = L.marker([49.05364, 2.35579], {
    icon: myIconRestaurant,
  }).bindPopup(
    "Restaurant 5 <br> Sandwich, Pannini, Croque Monsieur, Frites <br> Ouvert de 17h à 22h"
  ),
  restaurant6 = L.marker([49.06131, 2.382623], {
    icon: myIconRestaurant,
  }).bindPopup(
    "Restaurant 6 <br> Plats cuisinées: Poulet curry riz, Chili cone carne, Végétarien <br> Ouvert de 18h30 à 21h"
  ),
  restaurant7 = L.marker([49.0634, 2.3703], {
    icon: myIconRestaurant,
  }).bindPopup(
    "Restaurant 7 <br> Poulet curry riz, Chili cone carne, Végétarien <br> Ouvert de 18h30 à 21h"
  ),
  restaurant8 = L.marker([49.05541, 2.35545], {
    icon: myIconRestaurant,
  }).bindPopup("Restaurant 8 <br> Burgers, Frites <br> Ouvert de 17h à 22h");

var markerRestaurants = L.layerGroup([
  restaurant1,
  restaurant2,
  restaurant3,
  restaurant4,
  restaurant5,
  restaurant6,
  restaurant7,
  restaurant8,
]).addTo(myMap);

// liste parking auto
var myIconParking = L.icon({
  iconUrl: "./images/mapIcone/parking.png",
  iconSize: [50, 50],
  iconAnchor: [0, 50],
  popupAnchor: [25, -50],
});

var markerParking = L.marker([49.04406, 2.38953], {
  icon: myIconParking,
}).addTo(myMap);
markerParking.bindPopup("<b>Parking</b>");

// liste parking vélo
var myIconParkingBike = L.icon({
  iconUrl: "./images/mapIcone/parking_velo.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var markerParkingBike = L.marker([49.04768, 2.3882], {
  icon: myIconParkingBike,
}).addTo(myMap);
markerParkingBike.bindPopup("<b>Parking Vélo</b>");

// liste entrée
var myIconEntrance = L.icon({
  iconUrl: "./images/mapIcone/entrance.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var markerEntrance = L.marker([49.04879, 2.38185], {
  icon: myIconEntrance,
}).addTo(myMap);
markerEntrance.bindPopup("<b>Entrée</b>");

// liste camping
var myIconCamping = L.icon({
  iconUrl: "./images/mapIcone/camping.png",
  iconSize: [50, 50],
  iconAnchor: [0, 50],
  popupAnchor: [25, -50],
});

var markerCamping = L.marker([49.05833, 2.38879], {
  icon: myIconCamping,
}).addTo(myMap);
markerCamping.bindPopup("<b>Camping</b>");

// liste espace famille
var myIconFamily = L.icon({
  iconUrl: "./images/mapIcone/family.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var markerFamily = L.marker([49.05197, 2.37905], {
  icon: myIconFamily,
}).addTo(myMap);
markerFamily.bindPopup("<b>Espace Famille</b>");

// liste réception
var myIconReception = L.icon({
  iconUrl: "./images/mapIcone/accueil.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var markerReception = L.marker([49.05081, 2.38008], {
  icon: myIconReception,
}).addTo(myMap);
markerReception.bindPopup("<b>Accueil</b>");

// liste tipi
var myIconTipi = L.icon({
  iconUrl: "./images/mapIcone/tipi.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var markerTipi = L.marker([49.05946, 2.39281], {
  icon: myIconTipi,
}).addTo(myMap);
markerTipi.bindPopup("<b>Tipi Village</b>");

// liste prévention
var myIconPrevention = L.icon({
  iconUrl: "./images/mapIcone/prevention.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var markerPrevention = L.marker([49.05159, 2.37186], {
  icon: myIconPrevention,
}).addTo(myMap);
markerPrevention.bindPopup("<b>Stand de prévention</b>");

// liste accueil psh
var myIconPshaccueil = L.icon({
  iconUrl: "./images/mapIcone/accueil_psh.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var markerPshaccueil = L.marker([49.05079, 2.37595], {
  icon: myIconPshaccueil,
}).addTo(myMap);
markerPshaccueil.bindPopup("<b>accueil PSH</b>");

// Polygone festival

var polygon = L.polygon(
  [
    [49.05059, 2.35593],
    [49.05931, 2.35412],
    [49.06671, 2.37832],
    [49.06808, 2.38296],
    [49.0669, 2.3858],
    [49.05935, 2.38331],
    [49.05406, 2.37842],
    [49.04824, 2.38498],
    [49.04772, 2.38116],
    [49.04733, 2.36751],
  ],
  {
    color: "yellow",
  }
).addTo(myMap);

// Polygone camping

var polygon = L.polygon(
  [
    [49.0669, 2.3858],
    [49.06791, 2.387],
    [49.06754, 2.39334],
    [49.06529, 2.39364],
    [49.06297, 2.39372],
    [49.06038, 2.39501],
    [49.04959, 2.39567],
    [49.04824, 2.38498],
    [49.05406, 2.37842],
    [49.05935, 2.38331],
  ],
  {
    color: "purple",
  }
).addTo(myMap);

// Polygone parking

var polygon = L.polygon(
  [
    [49.04772, 2.38116],
    [49.04959, 2.39558],
    [49.04018, 2.39455],
    [49.03962, 2.38683],
  ],
  {
    color: "blue",
  }
).addTo(myMap);

// Ajout de la légende

var baseMaps = {};

var overlayMaps = {
  "<div class='layers-control-img'><img src='./images/mapIcone/waterPoint.png'/></div>Point d'eau":
    markerWaterPoint,
  "<div class='layers-control-img'><img src='./images/mapIcone/prevention.png'/> </div>Prevention":
    markerPrevention,
  "<div class='layers-control-img'><img src='./images/mapIcone/tipi.png'/> </div>Tipi":
    markerTipi,
  "<div class='layers-control-img'><img src='./images/mapIcone/accueil.png'/> </div>accueil":
    markerReception,
  "<div class='layers-control-img'><img src='./images/mapIcone/parking.png'/> </div>Parking Auto":
    markerParking,
  "<div class='layers-control-img'><img src='./images/mapIcone/parking_velo.png'/> </div>Parking vélo":
    markerParkingBike,
  "<div class='layers-control-img'><img src='./images/mapIcone/family.png'/> </div>Espace Famille":
    markerFamily,
  "<div class='layers-control-img'><img src='./images/mapIcone/entrance.png'/> </div>Entrée":
    markerEntrance,
  "<div class='layers-control-img'><img src='./images/mapIcone/camping.png'/> </div>Camping":
    markerCamping,
  "<div class='layers-control-img'><img src='./images/mapIcone/psh.png'/> </div>Plateforme PSH":
    markerPsh,
  "<div class='layers-control-img'><img src='./images/mapIcone/rescuer.png'/> </div>Point de secouriste":
    markerRescuer,
  "<div class='layers-control-img'><img src='./images/mapIcone/stage_management.png'/> </div>Régie":
    markerStageManagement,
  "<div class='layers-control-img'><img src='./images/mapIcone/restaurant.png'/> </div>Restaurant":
    markerRestaurants,
  "<div class='layers-control-img'><img src='./images/mapIcone/bar.png'/> </div>Bar":
    markerBar,
  "<div class='layers-control-img'><img src='./images/mapIcone/wc.png'/> </div>WC":
    markerWc,
  "<div class='layers-control-img'><img src='./images/mapIcone/micro.png'/> </div>Scène":
    markerScene,
  "<div class='layers-control-img'><img src='./images/mapIcone/accueil_psh.png'/> </div>accueil PSH":
    markerPshaccueil,
};

var layerControl = L.control
  .layers(baseMaps, overlayMaps, {
    position: "topright",
    //collapsed: false,
  })
  .addTo(myMap);

layerControl.expand();
