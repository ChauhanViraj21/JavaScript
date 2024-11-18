function getCountries(country)
{
    let xhr=new XMLHttpRequest();
    xhr.open('GET',`https://restcountries.com/v3.1/name/${country}`,true);
    xhr.send();
    xhr.addEventListener('load',function()
    { 
        let data=JSON.parse(xhr.responseText);
        console.log(data);
        let eachCountry=``;
        data.forEach(function(item)
        {
            eachCountry+=`
            <div class="col-md-3 mt-3">
            <div class="card">
                <div class="card-header">
                    <img src="${item.flags.png}" alt="" class="img-fluid mt-1">
                </div>
                <div class="card-body text-center">
                    <h3>${item.name.common}</h3>
                    <h5>${item.capital[0]}</h5>
                    <h2>${(item.population/1000000).toFixed(2)} M People</h2>
                    <h4>${item.region}</h4>
                    _______________________
                    <h4>${item.area} km²</h4>
                </div>
            </div>
        </div>`;
        });
        document.getElementById('display').insertAdjacentHTML('beforeend',eachCountry);
    })
}
getCountries('bharat');
getCountries('south africa');
getCountries('Afghanistan');
getCountries('United Kingdom');
getCountries('bangladesh');
getCountries('pakistan');
getCountries('New Zealand');
getCountries('Usa');
