const mapId = "map";
const initialCoordinates = [44.30315119629514, 9.209812032823143]; // Plaza Sol en Madrid [lat, lng]
const map = L.map(mapId).setView(initialCoordinates, 13);

const  ACCESS_TOKEN = "pk.eyJ1Ijoib29ndWciLCJhIjoiY2tyNjFvazI3MDRtdzJxcXJhOHJ2Z3djbCJ9.lhXoc823sbnpKTFapxfjnw"

const ATTRIBUTION =
  'Gugooooo &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';



  const MAPBOX_API =
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}";

  

  L.tileLayer(MAPBOX_API, {
    attribution: ATTRIBUTION,
    maxZoom: 19,
    id: "mapbox/dark-v10",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: ACCESS_TOKEN,
  }).addTo(map);
  
 
console.log(L);

L.marker(initialCoordinates)
  .bindPopup("<b>Piazzetta</b><br>Posición inicial del mapa")
  .addTo(map);
// Ejemplo añadiendo otras coordenadas:
const portoFino = [44.30336834322633, 9.209099906332083];
L.marker(portoFino)
  .bindPopup("<b>Galleria D'Arte Portofino</b><br>Posición adicional")
  .addTo(map);


