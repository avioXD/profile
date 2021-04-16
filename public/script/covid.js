const date = new Date();
console.log(date.getDate(), date.getMonth(), date.getUTCFullYear());
var formattedNumber = ("0" + date.getUTCMonth()).slice(-2);
today = `${date.getUTCFullYear()}-${("0" + date.getUTCDate()).slice(-2)}-${("0" + date.getUTCMonth()).slice(-2)}`;
console.log(today);
fetch(`https://covid-19-data.p.rapidapi.com/report/country/name?date=2020-04-01&name=India`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "2533d3a2famshda075ca17770d79p1e9664jsnff6e6f5cb146",
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
        }
    })
    .then(response => {
        return response.json();
    }).then((data) => {
        const country = data[0].country;
        const conf = data[0].provinces[0].confirmed;
        const recover = data[0].provinces[0].recovered;
        const deaths = data[0].provinces[0].deaths;
        const active = data[0].provinces[0].active;
        info.innerHTML = `Country : ${country} <br>
                          Confirmed Case : ${conf} <br>
                          Recover : ${recover}<br>
                          Deaths : ${deaths}<br> 
                          Active : ${active} `;
        coviddiv.style.display = 'flex';
    })
    .catch(err => {
        console.error(err);
    });

const crossbtn = document.querySelector('.cross-btn');
const covidbtn = document.querySelector('.covid-btn-fixed');
const info = document.querySelector('#info');
const coviddiv = document.querySelector('.covid-box');

crossbtn.addEventListener('click', () => {
    coviddiv.style.display = 'none';
});
covidbtn.addEventListener('click', () => {
    coviddiv.style.display = 'flex';
});