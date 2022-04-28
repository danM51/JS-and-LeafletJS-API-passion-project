// the map Lon Lat
let cLat = 0;
let cLng = 0;
const map = L.map('map', {
    center: [cLat, cLng],
    zoom: 1.2
});
// set initial marker location 
const marker = L.marker([0, 0]).addTo(map);
// attribution
const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

tiles.addTo(map);
// End of Map
const apiURL = 'https://api.wheretheiss.at/v1/satellites/25544';
let getIssData = async ()=>{
    let response = await fetch(apiURL);
    let data = await response.json();
    let {longitude, latitude} = data;
    
    // console.log(data); to view the updated location on the browser console
        document.getElementById('long').textContent = longitude;
        document.getElementById('lat').textContent = latitude;

        // L.marker([longitude, latitude]).addTo(map);
        marker.setLatLng([latitude, longitude]);

}

  setInterval(()=>{getIssData()} ,5000)


console.log('we are live!');
