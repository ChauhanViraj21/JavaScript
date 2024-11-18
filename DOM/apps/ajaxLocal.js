let dataBtn=document.getElementById('data-btn');
dataBtn.addEventListener('click',fetchData);

function fetchData()
{
    //1. Create XMLHttpRequest Object

    let xhr=new XMLHttpRequest();

    //2.Create a Request

    xhr.open('GET','items.json',true);

    //3.Send The request

    xhr.send();

    //4. Once u send the request it may take some time to load the data

    xhr.onprogress=function()
    {
        let displaytag=document.getElementById('display-load');
        displaytag.innerText="Data Loading........."
    }

    //5.Once The data is loaded

    xhr.onload=function()
    {
        let items=JSON.parse(xhr.responseText);
        let{itemsArray}=items;

        if(itemsArray.length!=0)
            {
               let eachItem=``;
               for(let item of itemsArray)
               {
                  eachItem+=`<div class="col-3">
                        <div class="card">
                            <div class="card-header">
                                <img src="${item.img}" alt="" class="img-fluid">
                            </div>
                            <div class="card-body text-center">
                                <h3>${item.name}</h3>
                                <small></small>
                                <h6>${item.price}&#8377;</h6>
                                <div>
                                    <i class="fa fa-minus-circle"></i>
                                    <span>${item.qty}</span>
                                    <i class="fa fa-plus-circle" onclick="incQty(${item.id})"></i>
                                </div>
                            </div>
                        </div>
                    </div>`  
               }
               //console.log(eachItem);
               document.querySelector('#display').innerHTML=eachItem;
        
            }
    }
}