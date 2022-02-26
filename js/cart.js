var cart=JSON.parse(localStorage.getItem("cartItems"))||[];


var cartQuant=cart.reduce(function(acc,elem)
{
  return acc + elem.quant;
},0);

var cartPrice=cart.reduce(function(acc,elem)
{
  return acc + (elem.price * elem.quant);
},0);

if(cartQuant==0)
{
    localStorage.setItem("cartItems",JSON.stringify([]));
}

if(cart.length>0)
{
    var emptyCart=document.querySelector(".items-empty");
    emptyCart.style.display="none";
    var displayComplete=document.querySelector(".cart-footer");
    displayComplete.style.visibility="visible";
}



    var itemsDiv=document.createElement("div");
        itemsDiv.setAttribute("class","itemsDiv");
        itemsDiv.style.display="flex";
        itemsDiv.style.flexDirection="column";
        
        var itemsTotal=document.createElement("div");
        itemsTotal.setAttribute("class","itemsTotal");
        itemsTotal.style.display="flex";
        itemsTotal.style.width="360px";
        itemsTotal.style.height="82px";
        itemsTotal.style.borderRadius="10px";
        itemsTotal.style.backgroundColor="white";
        itemsTotal.style.justifyContent="space-between";
        itemsTotal.style.margin="15px";
        itemsTotal.style.padding="10px";
        
        
        
        var items=document.createElement("div");
        items.setAttribute("class","items");
        items.innerHTML="Items";
        items.style.fontSize="20px";
        items.style.color="rgb(107, 104, 104)";

        var itemsValue=document.createElement("p");
        itemsValue.innerText=cartQuant;
        itemsValue.style.marginTop="15px";
        itemsValue.style.fontSize="20px";
        itemsValue.style.fontWeight="bold";
        itemsValue.style.color="black";
        
        items.append(itemsValue)
        
        var total=document.createElement("div");
        total.setAttribute("class","total");
        total.innerText="Total";
        total.style.fontSize="20px";
        total.style.color="rgb(107, 104, 104)";
        
        
        var rupee=document.createElement("p");
        rupee.innerText="₹"+" "+ cartPrice;
        rupee.style.marginTop="15px";
        rupee.style.fontSize="20px";
        rupee.style.fontWeight="bold";
        rupee.style.color="black";

        total.append(rupee)
        
        var savings=document.createElement("div");
        savings.setAttribute("class","savings");
        savings.innerHTML="Savings";
        savings.style.fontSize="20px";
        savings.style.color="rgb(107, 104, 104)";

        var savingsAmt=document.createElement("p");
        savingsAmt.innerText="₹"+" "+ (cartPrice*10/100);
        savingsAmt.style.marginTop="15px";
        savingsAmt.style.fontSize="20px";
        savingsAmt.style.fontWeight="bold";
        savingsAmt.style.color="black";

        savings.append(savingsAmt);

        var emptyCart=document.createElement("img");
        emptyCart.setAttribute("src","https://www.iconsdb.com/icons/preview/black/delete-xxl.png");
        emptyCart.style.height="25px";
        emptyCart.style.width="25px";
        emptyCart.style.cursor="pointer";
        emptyCart.addEventListener("click",function(){
            location.reload(true);
            localStorage.setItem("cartItems",JSON.stringify([]));
        })

        
        itemsTotal.append(items,total,savings,emptyCart);

        var productsTotal=document.createElement("div");
        productsTotal.setAttribute("class","productsTotal");
        productsTotal.style.width="360px";
        productsTotal.style.height="auto";
        productsTotal.style.borderRadius="10px";
        productsTotal.style.backgroundColor="white";
        productsTotal.style.justifyContent="space-between";
        productsTotal.style.marginRight="15px";
        productsTotal.style.marginLeft="15px";
        productsTotal.style.padding="10px";

        var productDiv=document.createElement("div");
        productDiv.style.margin="5px"

        var productHead=document.createElement("p");
        productHead.innerText="Products";
        productHead.style.fontWeight="bold";
        productHead.style.fontSize="18px";

        var emptyCart=document.createElement("img");
        emptyCart.setAttribute("src","https://www.iconsdb.com/icons/preview/black/delete-xxl.png");
        emptyCart.style.height="25px";
        emptyCart.style.width="25px";
             
       

        productDiv.append(productHead);
        productsTotal.append(productDiv);
        


        var priceSummary=document.createElement("div");
        priceSummary.style.margin="5px"
        priceSummary.style.width="360px";
        priceSummary.style.height="auto";
        priceSummary.style.borderRadius="10px";
        priceSummary.style.backgroundColor="white";
        priceSummary.style.justifyContent="space-between";
        priceSummary.style.marginRight="15px";
        priceSummary.style.marginLeft="15px";
        priceSummary.style.padding="10px";

        var priceHead=document.createElement("p");
        priceHead.innerText="Pricing Summary";
        priceHead.style.fontWeight="bold";
        priceHead.style.fontSize="18px";


        // subtotal part here ---->
        var subTotalDiv=document.createElement("div");
        subTotalDiv.style.display="flex";
        subTotalDiv.style.justifyContent="space-between";

        var subtotal=document.createElement("p");
        subtotal.innerText="Subtotal";
        subtotal.style.marginTop="12px";
        subtotal.style.fontSize="20px";


        var subtotalValue=document.createElement("p");
        subtotalValue.innerText="₹"+" "+ cartPrice.toFixed(1);
        subtotalValue.style.marginTop="12px";
        subtotalValue.style.fontSize="20px";

        subTotalDiv.append(subtotal,subtotalValue);

         // Discount part here ---->
        var dicountDiv=document.createElement("div");
        dicountDiv.style.display="flex";
        dicountDiv.style.justifyContent="space-between";

        var discounttotal=document.createElement("p");
        discounttotal.innerText="Discount";
        discounttotal.style.marginTop="12px";
        discounttotal.style.fontSize="20px";
        discounttotal.style.color="rgb(167,177,92";

        var discountValue=document.createElement("p");
        discountValue.innerText="-"+" "+"₹"+" "+ (cartPrice*10/100);
        discountValue.style.marginTop="12px";
        discountValue.style.fontSize="20px";
        discountValue.style.color="rgb(167,177,92";

        dicountDiv.append(discounttotal,discountValue);



        // shipping free part------>
        var shippingtDiv=document.createElement("div");
        shippingtDiv.style.display="flex";
        shippingtDiv.style.justifyContent="space-between";

        var shipping=document.createElement("p");
        shipping.innerText="Shipping";
        shipping.style.marginTop="12px";
        shipping.style.fontSize="20px";
        shipping.style.color="rgb(167,177,92";

        var shippingValue=document.createElement("p");
        shippingValue.innerText="Free!";
        shippingValue.style.marginTop="12px";
        shippingValue.style.fontSize="20px";
        shippingValue.style.color="rgb(167,177,92";

        shippingtDiv.append(shipping,shippingValue);

        // horizontal line ---------->

        var hr=document.createElement("hr");
        hr.style.marginTop="12px";

        // To Pay ---------->
        var toPayDiv=document.createElement("div");
        toPayDiv.style.display="flex";
        toPayDiv.style.justifyContent="space-between";

        var toPaytotal=document.createElement("p");
        toPaytotal.innerText="Subtotal";
        toPaytotal.style.marginTop="12px";
        toPaytotal.style.fontSize="20px";


        var toPayValue=document.createElement("p");
        toPayValue.innerText="₹"+" "+ (cartPrice.toFixed(1) - (cartPrice*10/100)) ;
        toPayValue.style.marginTop="12px";
        toPayValue.style.fontSize="20px";
        toPayValue.style.fontWeight="bold";

        toPayDiv.append(toPaytotal,toPayValue);

         // Total Savings part here ---->
         var TotalSavingDiv=document.createElement("div");
         TotalSavingDiv.style.display="flex";
         TotalSavingDiv.style.justifyContent="space-between";
         TotalSavingDiv.style.border="1px solid rgb(167,177,92)";
         TotalSavingDiv.style.marginTop="12px";
         TotalSavingDiv.style.marginLeft="-5px";
         TotalSavingDiv.style.marginRight="-5px";
         TotalSavingDiv.style.alignItems="center";
         TotalSavingDiv.style.borderRadius="10px";

         var TotalSaving=document.createElement("p");
         TotalSaving.innerText="Total Savings";
         TotalSaving.style.fontSize="20px";
         TotalSaving.style.color="rgb(167,177,92";
         TotalSaving.style.padding="8px";
 
         var totalSavingValue=document.createElement("p");
         totalSavingValue.innerText="₹"+" "+ (cartPrice*10/100);
         totalSavingValue.style.fontSize="20px";
         totalSavingValue.style.color="rgb(167,177,92";
         totalSavingValue.style.padding="8px";
 
         TotalSavingDiv.append(TotalSaving,totalSavingValue);

        priceSummary.append(priceHead,subTotalDiv,dicountDiv,shippingtDiv,hr,toPayDiv,TotalSavingDiv);

        itemsDiv.append(itemsTotal,productsTotal,priceSummary);
        // checkout and all items number display part------>

        var alltotal=document.createElement("div");
        alltotal.style.height="65px";
        alltotal.style.width="700px";
        alltotal.style.backgroundColor="white";
        alltotal.style.display="flex";
        alltotal.style.justifyContent="space-between";
        alltotal.style.overflow="none";

        var totalDisplay=document.createElement("div");
        totalDisplay.style.backgroundColor="white";
        totalDisplay.style.width="210px";
        
        

        var totalItemsDisplay=document.createElement("p");

        if(cartQuant>1)
        {
            totalItemsDisplay.innerText=cartQuant+" "+"items";
        }
        else
        {
            totalItemsDisplay.innerText=cartQuant+" "+"item";
        }
        
        totalItemsDisplay.style.marginTop="10px";
        totalItemsDisplay.style.marginLeft="15px";

        var totalDisplayprice=document.createElement("p");
        totalDisplayprice.innerText="₹"+" "+ (cartPrice.toFixed(1) - (cartPrice*10/100));
        totalDisplayprice.style.fontSize="20px";
        totalDisplayprice.style.marginLeft="15px";
        totalDisplayprice.style.fontWeight="bold";

        totalDisplay.append(totalItemsDisplay,totalDisplayprice)

        var checkoutButton=document.createElement("button");
        checkoutButton.innerText="CHECKOUT";
        checkoutButton.style.backgroundColor="black";
        checkoutButton.style.color="white";
        checkoutButton.style.width="210px";
        checkoutButton.style.cursor="pointer";
        checkoutButton.addEventListener("click",function(){
            location.href="checkout.html";
        })

        alltotal.append(totalDisplay,checkoutButton);

        document.querySelector(".cart-footer").append(alltotal);

        

       


        showCart(cart);
function showCart(cart)
{
    cart.map(function(elem,index){

        console.log(elem.quant);      
        
        var cartPage=document.querySelector(".cart-page");
        cartPage.style.height="90.8%";

       

        var productDisplay=document.createElement("div");
        productDisplay.style.marginTop="5px";
        productDisplay.style.display="flex";

        var productImage=document.createElement("div");
        var image=document.createElement("img");
        image.style.height="76px";
        image.style.width="101px";
        image.setAttribute("src",elem.imageUrl);
        image.style.borderRadius="10px";
        image.style.justifyContent="center";

        productImage.append(image);

        var productDetail=document.createElement("div");
        productDetail.style.marginLeft="10px";
        var productTitle=document.createElement("p");
        productTitle.innerText=elem.productName;
        productTitle.style.fontSize="18px";
        productTitle.style.fontWeight="bold";


        var productPrice=document.createElement("p");
        productPrice.innerText="₹"+" "+elem.price;
        productPrice.style.fontWeight="bold";
        productPrice.style.marginTop="1px";

        var plusMinus=document.createElement("div");
        plusMinus.style.display="flex";
        plusMinus.style.marginTop="5px";
        plusMinus.style.padding="5px";

        var minusdiv=document.createElement("div");
        minusdiv.style.width="26px";
        minusdiv.style.height="26px";
        minusdiv.style.backgroundColor="black";
        minusdiv.style.color="white";
        minusdiv.style.borderRadius="5px";
        minusdiv.innerText="-";
        minusdiv.style.cursor="pointer";
        minusdiv.style.textAlign="center";
        minusdiv.style.fontSize="15px";
        minusdiv.addEventListener("click",function(){
            decreasequant(index);
        })

        var quanDisplay=document.createElement("div");
        quanDisplay.style.width="26px";
        quanDisplay.style.height="26px";
        quanDisplay.style.backgroundColor="white";
        quanDisplay.style.color="black";
        quanDisplay.innerText=elem.quant;
        quanDisplay.style.margin="3px";
        quanDisplay.style.textAlign="center";


        var plusdiv=document.createElement("div");
        plusdiv.style.width="26px";
        plusdiv.style.height="26px";
        plusdiv.style.backgroundColor="black";
        plusdiv.style.color="white";
        plusdiv.style.borderRadius="5px";
        plusdiv.innerText="+";
        plusdiv.style.cursor="pointer";
        plusdiv.style.textAlign="center";
        plusdiv.style.fontSize="15px";
        plusdiv.addEventListener("click",function(){
            increasequant(index);
            console.log(elem.quant);
        })
        
        var hr=document.createElement("hr");

        plusMinus.append(minusdiv,quanDisplay,plusdiv);

        productDetail.append(productTitle,productPrice,plusMinus);

        productDisplay.append(productImage,productDetail);

       
        productDiv.append(productDisplay,hr);
        productsTotal.append(productDiv);
        

        function decreasequant(index){
            
            if(cart[index].quant>1 && cart[index].quant!=0){
            cart[index].quant--;
            localStorage.setItem("cartItems",JSON.stringify(cart));
            location.reload(true);
            
            }
            
        }

        function increasequant(index){
            cart[index].quant++;
            localStorage.setItem("cartItems",JSON.stringify(cart));
            location.reload(true);
        }
     
                
        document.querySelector(".cart-items").append(itemsDiv);
        
    });
};
