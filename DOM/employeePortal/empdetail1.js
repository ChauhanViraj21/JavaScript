let btnemp = document.querySelector('#emp-btn');
btnemp.addEventListener('click', getUser);



function getUser() {
    fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        if (data.length != 0) {
            let eachEmp = ``;
            for (let emp of data) {
                eachEmp += `<tr>
                                            <td>${emp.id}</td>
                                            <td>${emp.name}</td>
                                            <td>${emp.email}</td>
                                            <td>${emp.company.name}</td>
                                            <td>${emp.address.city}</td>
                                        </tr>`
            }
            document.querySelector('#display-emps').innerHTML = eachEmp;
        }

    }).catch(function (err) { console.log(err); });

  


}
