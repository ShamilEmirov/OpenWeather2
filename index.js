let key = "e0da5243946afc5821c88e2545c8268c";
let input = document.querySelector(".input")
input.addEventListener('change', () => {
    let city = input.value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let degree = document.querySelector(".degree")
            let main = document.querySelector(".main")
            let city_mauto = document.querySelector(".city_mauto")
            city_mauto.innerHTML = data.name;
            degree.innerHTML = `${Math.round(data.main.temp)}<sup>&#176;</sup>`;
            main.innerHTML = data.weather[0].main;
            let img = document.querySelector("img")
            img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        })
        .catch(() => {
            console.log('!');
        })
})