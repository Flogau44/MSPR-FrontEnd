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

// liste des scènes
var scenes = {
  "Scène 1": { lat: 49.05982, lon: 2.3579 },
  "Scène 2": { lat: 49.06072, lon: 2.36116 },
  "Scène 3": { lat: 49.06617, lon: 2.38374 },
  "Scène 4": { lat: 49.06693, lon: 2.38101 },
  "Scène 5": { lat: 49.05034, lon: 2.35851 },
};

var myIconScene = L.icon({
  iconUrl: "./images/mapIcone/micro.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

for (scene in scenes) {
  var markerScene = L.marker([scenes[scene].lat, scenes[scene].lon], {
    icon: myIconScene,
  }).addTo(myMap);
  markerScene.bindPopup("<b>" + scene + "</b>");
}

// liste des WC
var wcs = {
  "WC 1": { lat: 49.0482, lon: 2.36675 },
  "WC 2": { lat: 49.05439, lon: 2.37699 },
  "WC 3": { lat: 49.057, lon: 2.39258 },
  "WC 4": { lat: 49.06127, lon: 2.38523 },
  "WC 5": { lat: 49.06482, lon: 2.39172 },
  "WC 6": { lat: 49.06131, lon: 2.38262 },
  "WC 7": { lat: 49.0634, lon: 2.3703 },
  "WC 8": { lat: 49.05199, lon: 2.38202 },
};

var myIconWc = L.icon({
  iconUrl: "./images/mapIcone/wc.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

for (wc in wcs) {
  var markerWc = L.marker([wcs[wc].lat, wcs[wc].lon], {
    icon: myIconWc,
  }).addTo(myMap);
  markerWc.bindPopup("<b>" + wc + "</b>");
}

// liste des bars
var bars = {
  "Bar 1": { lat: 49.04834, lon: 2.37284 },
  "Bar 2": { lat: 49.05727, lon: 2.38058 },
  "Bar 3": { lat: 49.06268, lon: 2.3682 },
  "Bar 4": { lat: 49.06204, lon: 2.36532 },
  "Bar 5": { lat: 49.0555, lon: 2.37874 },
  "Bar 6": { lat: 49.05198, lon: 2.35618 },
};

var myIconBar = L.icon({
  iconUrl: "./images/mapIcone/bar.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

for (bar in bars) {
  var markerBar = L.marker([bars[bar].lat, bars[bar].lon], {
    icon: myIconBar,
  }).addTo(myMap);
  markerBar.bindPopup("<b>" + bar + "</b>");
}

// liste des points d'eau
var waterPoints = {
  "Point d'eau 1": { lat: 49.04829, lon: 2.37931 },
  "Point d'eau 2": { lat: 49.05321, lon: 2.37733 },
  "Point d'eau 3": { lat: 49.05436, lon: 2.36926 },
  "Point d'eau 4": { lat: 49.06511, lon: 2.37612 },
  "Point d'eau 5": { lat: 49.05757, lon: 2.35526 },
  "Point d'eau 6": { lat: 49.05408, lon: 2.38721 },
};

var myIconWaterPoint = L.icon({
  iconUrl: "./images/mapIcone/waterPoint.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

for (waterPoint in waterPoints) {
  var markerWaterPoint = L.marker(
    [waterPoints[waterPoint].lat, waterPoints[waterPoint].lon],
    {
      icon: myIconWaterPoint,
    }
  ).addTo(myMap);
  markerWaterPoint.bindPopup("<b>" + waterPoint + "</b>");
}

// liste des régies
var stageManagements = {
  "Régie 1": { lat: 49.05625, lon: 2.36145 },
  "Régie 2": { lat: 49.05501, lon: 2.36162 },
  "Régie 3": { lat: 49.05979, lon: 2.37424 },
};

var myIconStageManagement = L.icon({
  iconUrl: "./images/mapIcone/stage_management.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

for (stageManagement in stageManagements) {
  var markerStageManagement = L.marker(
    [
      stageManagements[stageManagement].lat,
      stageManagements[stageManagement].lon,
    ],
    {
      icon: myIconStageManagement,
    }
  ).addTo(myMap);
  markerStageManagement.bindPopup("<b>" + stageManagement + "</b>");
}

// liste des secouristes
var rescuers = {
  "Secouriste 1": { lat: 49.05285, lon: 2.36952 },
  "Secouriste 2": { lat: 49.05402, lon: 2.39301 },
};

var myIconRescuer = L.icon({
  iconUrl: "./images/mapIcone/rescuer.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

for (rescuer in rescuers) {
  var markerRescuer = L.marker([rescuers[rescuer].lat, rescuers[rescuer].lon], {
    icon: myIconRescuer,
  }).addTo(myMap);
  markerRescuer.bindPopup("<b>" + rescuer + "</b>");
}

// liste des pshs
var pshs = {
  "Plateforme PSH 1": { lat: 49.05681, lon: 2.36489 },
  "Plateforme PSH 2": { lat: 49.06336, lon: 2.38261 },
};

var myIconPlateformPsh = L.icon({
  iconUrl: "./images/mapIcone/psh.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

for (psh in pshs) {
  var markerPsh = L.marker([pshs[psh].lat, pshs[psh].lon], {
    icon: myIconPlateformPsh,
  }).addTo(myMap);
  markerPsh.bindPopup("<b>" + psh + "</b>");
}

// liste des restaurants
var myIconRestaurant = L.icon({
  iconUrl: "./images/mapIcone/restaurant.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var restaurant1 = L.marker([49.04845, 2.37687], {
    icon: myIconRestaurant,
  }).bindPopup("Restaurant 1"),
  restaurant2 = L.marker([49.04829, 2.36945], {
    icon: myIconRestaurant,
  }).bindPopup("Restaurant 2"),
  restaurant3 = L.marker([49.05947, 2.382], {
    icon: myIconRestaurant,
  }).bindPopup("Restaurant 3"),
  restaurant4 = L.marker([49.06409, 2.37249], {
    icon: myIconRestaurant,
  }).bindPopup("Restaurant 4");
restaurant5 = L.marker([49.05364, 2.35579], {
  icon: myIconRestaurant,
}).bindPopup("Restaurant 5");
restaurant6 = L.marker([49.06131, 2.382623], {
  icon: myIconRestaurant,
}).bindPopup("Restaurant 6");
restaurant7 = L.marker([49.0634, 2.3703], {
  icon: myIconRestaurant,
}).bindPopup("Restaurant 7");
restaurant8 = L.marker([49.05541, 2.35545], {
  icon: myIconRestaurant,
}).bindPopup("Restaurant 8");

var markerRestaurants = L.layerGroup([
  restaurant1,
  restaurant2,
  restaurant3,
  restaurant4,
  restaurant5,
  restaurant6,
  restaurant7,
  restaurant8,
]);

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
  iconUrl: "./images/mapIcone/acceuil.png",
  iconSize: [25, 25],
  iconAnchor: [0, 25],
  popupAnchor: [0, -25],
});

var markerReception = L.marker([49.05081, 2.38008], {
  icon: myIconReception,
}).addTo(myMap);
markerReception.bindPopup("<b>Acceuil</b>");

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

// Ajout de la légende

var baseMaps = {
  "<span style='color: red'>OpenStreetMap</span>": osm,
};

var overlayMaps = {
  Prevention: markerPrevention,
  Tipi: markerTipi,
  Acceuil: markerReception,
  "Parking Auto": markerParking,
  "Parking vélo": markerParkingBike,
  "Espace Famille": markerFamily,
  Entrée: markerEntrance,
  Camping: markerCamping,
  PSH: markerPsh,
  "Point de secouriste": markerRescuer,
  Régie: markerStageManagement,
  "Point d'eau": markerWaterPoint,
  Restaurant: markerRestaurants,
  Bar: markerBar,
  WC: markerWc,
  Scène: markerScene,
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(myMap);
