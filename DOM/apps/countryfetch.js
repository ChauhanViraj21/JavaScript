 function getCountries(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);

        if (data.length != 0) {
            let eachCountry=``;
            data.forEach(function (item) {
                eachCountry += `
                <div class="col-md-3 mt-3">
                <div class="card">
                    <div class="card-header">
                        <img src="${item.flags.png}" alt="" class="img-fluid mt-1">
                    </div>
                    <div class="card-body text-center">
                        <h3>${item.name.common}</h3>
                        <h5>${item.capital[0]}</h5>
                        <h2>${(item.population / 1000000).toFixed(2)} M People</h2>
                        <h4>${item.region}</h4>
                        _______________________
                        <h4>${item.area} km²</h4>
                    </div>
                </div>
            </div>`;
            });

            
            document.getElementById('display').insertAdjacentHTML('beforeend', eachCountry);
        }

    }).catch(function (err) { console.log(err); });
 }
    getCountries('bharat');
    getCountries('south africa');
    getCountries('Afghanistan');
    getCountries('United Kingdom');
    getCountries('bangladesh');
    getCountries('pakistan');
    getCountries('New Zealand');
    getCountries('Usa');



    function getCountriess(){
        fetch(`https://restcountries.com/v3.1/name/bharat`).then((res)=>{
           return res.json();

        }).then((data)=>{
            console.log(data)
            
        })
    }