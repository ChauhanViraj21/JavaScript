let btnemp=document.querySelector('#emp-btn');
btnemp.addEventListener('click',getUser);


function getUser()
{
    let xhr= new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
    xhr.send();
    xhr.addEventListener('load',function(){

        let data=JSON.parse(xhr.responseText);
        console.log(data);
                 
                if(data.length!=0)
                {
                    let eachEmp=``;
                    for(let emp of data)
                    {
                        eachEmp+=`<tr>
                                        <td>${emp.id}</td>
                                        <td>${emp.name}</td>
                                        <td>${emp.email}</td>
                                        <td>${emp.company.name}</td>
                                        <td>${emp.address.city}</td>
                                    </tr>`
                    }
                    document.querySelector('#display-emps').innerHTML=eachEmp;
                }
                   
    }); 
}
