let weather = {
    apikey:"311328334867404a933200625242005",
     fetchWeather:function (city){
        fetch("http://api.weatherapi.com/v1/current.json?key=311328334867404a933200625242005&q=pakistan" 
).then((response) => response.json())
.then((data) => console.log(data));
       
    },
    displayWeather: function(data) {

    }
};