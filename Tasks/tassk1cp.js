
let user_1={accName:"Pushpa Raj",transactions:[100,300,-150,500,200,-50],intRate:1,pin:1234};

let user_2={accName:"Sagar Kumar",transactions:[1000,-300,150,-500,700,50],intRate:0.7,pin:2345};

let user_3={accName:"Venkat Sai Krishna",transactions:[300,100,1200,-500,-200],intRate:1.2,pin:3456};

let user_4={accName:"Yuvakishore Reddy",transactions:[200,-30,500,-200,700,-70],intRate:1.7,pin:4567};

let user_5={accName:"Yuvaraj Rathod",transactions:[200,-30,500,-200,700,-70],intRate:1.7,pin:5678};

let accounts=[user_1,user_2,user_3,user_4,user_5];

//console.log(accounts);

//Create Usernames For All The Customers
function createUsernames(accs)
{
    accs.forEach(function(acc)
    {
        acc.username=acc.accName.toLowerCase().split(' ').map((name)=>{return name[0]}).join('');

        console.log(acc);
    });
}
createUsernames(accounts);


//LogIn Functionality
let logInForm=document.getElementById('login-form');
let usnBox=document.getElementById('usen-txt');
let pwBox=document.getElementById('pin-txt');

let currentAccount;

logInForm.addEventListener('click',function(event)
{
    event.preventDefault();
    let usn=usnBox.value.toLowerCase().trim();
    let pin=Number(pwBox.value);


    let currentAccount = accounts.filter(function(user) {
        return user.username == usn;
    });
    
    // Assuming you want the first matching element, if any:


    if(currentAccount?.pin==pin)
    {
        //Display Welcome Message In UI
        let welcomeLabel=document.getElementById('displayName');
        welcomeLabel.textContent =`Welcome Back ${currentAccount.accName.split(' ')[0]} ✅`;
        welcomeLabel.style.color="green";
    }
    //usnBox.value='';
    //pwBox.value='';

    usnBox.value=pwBox.value='';
});