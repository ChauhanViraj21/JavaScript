let user1 = { name: "viraj Chauhan", pin: 1111, transaction: [100, -500, 200, 1000, 500], intRate: 1.7 };
let user2 = { name: "divyansh Kashyap", pin: 2222, transaction: [100, -500, 200, 600, 500], intRate: 1.3 };
let user3 = { name: "arpan Masih", pin: 3333, transaction: [100, -400, 200, 1000, 900], intRate: 1.5 };
let user4 = { name: "deep kanada", pin: 4444, transaction: [100, -700, 200, 1000, 400], intRate: 1.2 };
let user5 = { name: "vijay Chavda", pin: 2110, transaction: [300, -800, 200, 1000, 700], intRate: 1.7 };

let userArr = [user1, user2, user3, user4, user5];
console.log(userArr);

let userNameText = document.getElementById('usen-txt');
let pinText = document.getElementById('pin-txt');
let submitBtn = document.getElementById('login-user-btn');
let displayTag = document.getElementById('displayName');
let loginForm = document.getElementById('login-form');

let showTransactionbtn = document.getElementById('show-Transaction');
let totalTransactionbtn = document.getElementById('btn-balance');
let depositbtn = document.getElementById('btn-dep');
let withdrawalbtn = document.getElementById('btn-with');

submitBtn.addEventListener('click', checkUserPass);

function createUserName(unm) {
    unm.usename = unm.name.toLowerCase().split(' ').map((nam) => nam[0]).join('')
    console.log(unm.usename)
}
let currentuser = '';
function checkUserPass(e) {
    e.preventDefault();

    if (userNameText != "" && pinText != "") {
        let val = userArr.find(function (val) {
            createUserName(val);
            return val.usename === userNameText.value && val.pin == pinText.value;
        });

        currentuser = val;
        console.log(currentuser);
        if (val) {

            let displaytag = `<h2>${(val.name.split(' ')[0])}<h3>Welcome to the V bank </h3></h2>`;
            displayTag.innerHTML = displaytag;
            document.getElementById('btns').classList.remove('hidden');
            loginForm.innerHTML = `<button class="btn btn-outline-light" onclick="showForm" id="show-Form">Log Out</button>`;
            console.log(val.transaction);

           

        }
        else {
            alert("Enter Correct UserName & Password")
        }
    }
    else { alert("Please Enter Username or Password First") }
}

function showForm() {
    document.getElementById('btns').classList.add('hidden');

    loginForm.innerHTML = `<div><input type="text" placeholder="Enter Username" class="form-control" id="usen-txt" value=""></div>
                        <div><input type="password" placeholder="Enter pin" class="form-control ms-2" id="pin-txt" value=""></div>
                        <div class="ms-2"><input type="submit" id="login-user-btn" class="btn btn-outline-light ms-2"> </div>`;
}

function totalBalance(transactions)
{
    if(transactions!=0)
    {
        let totalBal=transactions.reduce((acc,val)=>
        {
            let bal=acc+val;
            return bal;
        },0);

        document.getElementById('total-bal').innerHTML=`<h7><b>${totalBal}</b></h7>`;
    }
}


function showTransactions(transacti) {
    if (transacti != 0) {
        let eachTransaction = ``;
        transacti.forEach(function (val, i) {
            let type = val > 0 ? "deposit" : "withdrawl";
            let typeColor = val > 0 ? "success" : "danger";
            eachTransaction += `<li class="list-group-item list-group-item-primary">
                                                    <button class="btn btn-${typeColor}">
                                                        ${type} <span class="badge text-bg-warning">${i + 1}</span>
                                                      </button>                  
                                                      <span class="h7 float-end"><b>${val}&#8377;</b></span>
                                                </li>`;
        });
        document.querySelector('#display').innerHTML = eachTransaction;

    }
}

showTransactionbtn.addEventListener('click',function()
{
    document.getElementById('card-trans').classList.remove('hidden');
    showTransactions(currentuser.transaction);
})

totalTransactionbtn.addEventListener('click',function()
{
    document.getElementById('card-tot').classList.remove('hidden');
    totalBalance(currentuser.transaction);
})








