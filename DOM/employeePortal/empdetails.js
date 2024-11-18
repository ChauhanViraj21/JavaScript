let emps=[{id:1,firstName:"viraj",lastName:"chauhan",email:"vir@gmail.com",gender:"Male"},
          {id:2,firstName:"rahul",lastName:"Kumar",email:"rahul@gmail.com",gender:"Male"},
          {id:3,firstName:"Divyannsh",lastName:"kashyap",email:"divyans@gmail.com",gender:"Male"},
          {id:4,firstName:"Arpan",lastName:"Masih",email:"arpan@gmail.com",gender:"Male"},
          {id:5,firstName:"Disha",lastName:"chudail",email:"disha@gmail.com",gender:"Female"},
          {id:6,firstName:"rohini",lastName:"rathvi",email:"rohini@gmail.com",gender:"Female"}];

    //dispaly this emps

    function displayEmps(emps)
{
    if(emps.length!=0)
    {
        let eachEmp=``;
        for(let emp of emps)
        {
            eachEmp+=`<tr>
                            <td>${emp.id}</td>
                            <td>${emp.firstName}</td>
                            <td>${emp.lastName}</td>
                            <td>${emp.email}</td>
                            <td>${emp.gender}</td>
                        </tr>`
        }
        document.querySelector('#display-emps').innerHTML=eachEmp;
    }
}



let maleEmps=emps.filter((emp)=>
    {
        return emp.gender=='Male';
    });
    
    let femaleEmps=emps.filter((emp)=>
    {
        return emp.gender=='Female';
    });

    let allEmpsBtn=document.querySelector('#btn-all-emp');
    let maleEmpsBtn=document.querySelector('#btn-male-emp');
    let femaleEmpsBtn=document.querySelector('#btn-female-emp');

allEmpsBtn.addEventListener('click',()=>
{
    displayEmps(emps);
});

maleEmpsBtn.addEventListener('click',()=>
{
    displayEmps(maleEmps);
});

femaleEmpsBtn.addEventListener('click',()=>
{
    displayEmps(femaleEmps);
});



