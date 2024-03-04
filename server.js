const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const app = express();

require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const port = process.env.PORT || 8000 ;

app.get("/", (req, res) => {
    let locDate = { temp: "Temp", disc: "Discription", location: "Location", humidity: "Humidity ", feel: "Feel ", speed: "Speed" };
    let tourist_attraction = [];
    let population = "Population";
    res.render("index", { locDate: locDate, tourist_attraction: tourist_attraction, population: population});
});

app.post("/", async (req, res) => {
    try {
        const location = await req.body.city;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.APIKEY}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        const lat_long_url = `https://maps.googleapis.com/maps/api/geocode/json?address=${data.name}%20${data.sys.country}&key=${process.env.PLACEAPIKEY}`;
        let response_lat_long = await fetch(lat_long_url);
        let data_lat_long = await response_lat_long.json();
        console.log(data_lat_long);

        const place_url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${data_lat_long.results[0].geometry.location.lat}%2C${data_lat_long.results[0].geometry.location.lng}&radius=25000&type=tourist_attraction&key=${process.env.PLACEAPIKEY}`;
        let response_place = await fetch(place_url);
        let data_place = await response_place.json();

        const pop_url = `https://api.api-ninjas.com/v1/city?name=${data.name}&country=${data.sys.country}`;
        let response_pop = await fetch(pop_url,{
            headers: {
			'X-Api-Key': `${process.env.POPKEY}` ,
		},});
        let data_pop = await response_pop.json();
        let population = data_pop[0].population;

        let locDate = {};
        locDate.temp = Math.floor(data.main.temp);
        locDate.disc = data.weather[0].description;
        locDate.feel = data.main.feels_like;
        locDate.humidity = data.main.humidity;
        locDate.speed = data.wind.speed;
        locDate.location = location;
        console.log(locDate);
        
        
        let tourist_attraction = [];
        for (let i = 0; i < data_place.results.length; i++) {
            tourist_attraction.push(data_place.results[i].name);
          }
        console.log(tourist_attraction);
        
        res.render("index", { locDate: locDate, tourist_attraction: tourist_attraction, population: "Population: " + population});
    } catch (err) {
        console.log(err);
        res.status(400).json({ data: 'not found!' })
    }
});

app.listen(port, () => {
    console.log("Server is running....");
});