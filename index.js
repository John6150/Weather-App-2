let countries = []
let weather = []
let count = 0

// function search_(){
// fetch("https://restcountries.com/v3.1/all")
// .then((res) => res.json())
// .then((data) => {
//     data.forEach((el, index) => {
//         countries.push(data[index].name.common);
//     });
// console.log(countries);
// countries.forEach((el, index) => {
// console.log(el);

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("search").value}&appid=081a435ce968f30cec64c6d2800d4ce9`)
//     .then((res) => res.json())
//     .then((data) => {
//         weather.push({ data })
// console.log(data);


//             })
//     })
// console.log(weather);
// }

// })

function searc() {
    fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((el, index) => {
                countries.push(data[index].name.common);
            });
            // console.log(countries);
            countries.forEach((el, index) => {
                // console.log(el);

                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${el}&appid=80833273c463c38708fb4d1a53789f37`)
                    .then((res) => res.json())
                    .then((data) => {
                        weather.push({ data })
                        localStorage.setItem("Data", JSON.stringify(weather))
                    })
            })



        })

}

searc()

setInterval(() => {
    let DataFetch = JSON.parse(localStorage.getItem("Data", (weather)))
    console.log(DataFetch);

    DataFetch.forEach((el, index) => {
        if (el.data.name == undefined) {

        } else {
            count += 1
            document.getElementById("data_").innerHTML += `
<tr>
<td>${count}</td>
<td>${DataFetch[index].data.name}</td>
<td>${DataFetch[index].data.main.temp}</td>
<td>${DataFetch[index].data.main.humidity}</td>
<td>${DataFetch[index].data.main.pressure}</td>
<td>${DataFetch[index].data.main.temp_max}</td>
<td>${DataFetch[index].data.main.temp_min}</td>
</tr>

`
        }
    })
}, 10000)






// fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=081a435ce968f30cec64c6d2800d4ce9")
//     .then((res) => res.json())
//     .then((data) => {
//         // weather.push({Country: el, data})
//         console.log(data.main.temp);

//     })


