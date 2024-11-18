      let item=
        {
            id:101,
            img:"../../Form/image/iron.jpg",
            name:"dhosa",
            price:60,
            qty:1,
            total:0
        };  

           let htmlData=`<tr>
                            <td>${item.id}</td>
                            <td>
                                <img src="${item.img}" alt="Image Not Found" width="35px" height="35px">
                            </td>
                            <td>
                              ${item.name}
                            </td>
                            <td>${item.price} &#8377;</td>
                            <td>
                                <i class="fa fa-minus-circle" onclick="decre()" id="minus"></i>
                                <span id="qty">${item.qty}</span>
                                <i class="fa fa-plus-circle" onclick="incrm()" id="plus"></i>
                            </td>
                            <td>
                            <span id="total">${item.price*item.qty}
                            </span>&#8377;
                            </td>
                        </tr>`;

let displayTag=document.querySelector('#display');
displayTag.innerHTML=htmlData;
totalTag=document.querySelector('#total')
qtytag=document.querySelector('#qty');


function incrm()
{
    item.qty++;
    qtytag.textContent=item.qty

    totalTag.textContent=`${((item.price*item.qty).toFixed(2))}`;

}
function decre()
{
   if(item.qty>0)
   {
   item.qty--;
   qtytag.textContent=item.qty;
   totalTag.textContent=`${((item.price*item.qty).toFixed(2))}`;
   }
   else 
   qtych.textContent=0;
}
