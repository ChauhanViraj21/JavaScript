let btnemp = document.querySelector('#emp-btn');
btnemp.addEventListener('click', getUser);

function getUser() {
    fetch('http://localhost:8080/account/allacc')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Display fetched data in console
                if (data.length > 0) {
                    let eachEmp = '';
                    data.forEach(emp => {
                        eachEmp += `<tr>
                                        <td>${emp.id}</td>
                                        <td>${emp.name}</td>
                                        <td>${emp.age}</td>
                                        <td>${emp.balance}</td>
                                        <td><a href='UpdateData.html?id=${emp.id}'>Edit</a>/<a href="#" onclick="deleteEmployee(${emp.id}); return false;">Delete</a></td>
                                    </tr>`;
                    });
                    document.querySelector('#display-emps').innerHTML = eachEmp;
                } else {
                    document.querySelector('#display-emps').innerHTML = '<tr><td colspan="4">No Data found</td></tr>';
                }
        })
        .catch(err => {
            console.error('Fetch error:', err);
            document.querySelector('#display-emps').innerHTML = '<tr><td colspan="5" >Error fetching data</td></tr>';
        });
}


function deleteEmployee(empId) {
    fetch(`http://localhost:8080/account/delete/${empId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            alert('Employee deleted successfully.');
            getUser(); // Refresh the list of employees after delete
        } else {
            alert('Failed to delete the employee.');
        }
    })
    .catch(error => console.error('Error:', error));
}