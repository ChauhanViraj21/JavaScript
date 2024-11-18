let items=[ {
    id:101,
    img:"../apps/imges/jalebifafda.jpeg",
    name:"Jalebi Fafda",
    price:70,
    qty:1,
    totalprice:0
},
{
    id:102,
    img:"../apps/imges/khandvi.jpeg",
    name:"Khandvi",
    price:60,
    qty:1,
    totalprice:0

},
{
    id:103,
    img:"../apps/imges/dhokla.jpeg",
    name:"Dhokla",
    price:30,
    qty:1,
    totalprice:0

},
{
    id:104,
    img:"../apps/imges/thepla.jpeg",
    name:"Thepla",
    price:40,
    qty:1,
    totalprice:0

}];

function displayItems(item)
{
    if(item.length!=0)
        {
            
           let eachitm=``;
           for(let itm of items)
           {
            
              eachitm +=`<div class="col-3">
                    <div class="card">
                        <div class="card-header">
                            <img src="${itm.img}" alt="" class="img-fluid">
                        </div>
                        <div class="card-body text-center">
                            <h3>${itm.name}</h3>
                            <small></small>
                            <h6>${itm.totalprice=itm.price*itm.qty}&#8377;</h6>
                            <div>
                                <i class="fa fa-minus-circle" onclick="decrement(${itm.id})"></i>
                                <span>${itm.qty}</span>
                                <i class="fa fa-plus-circle" onclick="increment(${itm.id})"></i>
                            </div>
                        </div>
                    </div>
                </div>`  
           }
document.querySelector('#display').innerHTML=eachitm;

}
}

// function plus(itm)
// {increment(itm);
// updateCartTotal();
// }

//increment quantity

function increment(id)
{
  let objinc= items.map(function(item)
    {     
        if (item.id === id) {
            let obj1={
                ...items,
                qty:++item.qty,
                totalprice:item.price * item.qty
            }
            // item.qty++;
            // item.totalprice = item.price * item.qty;
            
            items.totalprice=obj1.totalprice;
            return obj1;
        }
    });
    displayItems(objinc);
   updateCartTotal();  
}

// decreament Quantity
function decrement(id)
{
  let objde= items.map(function(item)
    {
      
        if(item.id===id && item.qty!=0)
                {
                    let obj={
                        ...items,
                        qty:--item.qty,
                        totalprice:item.price * item.qty
                    }
                    items.totalprice=obj.totalprice;

                 return obj;
                }
            
           else{
                return item;
            }

    });
    displayItems(objde);
    updateCartTotal();
    
}

function updateCartTotal() {
    let cartprice = 0;
    items.forEach(item => {
        cartprice += item.totalprice;
    });
    document.querySelector('#cartprice-tot').innerHTML = `Total price = &#8377; ${cartprice}`;
}

displayItems(items);
updateCartTotal();