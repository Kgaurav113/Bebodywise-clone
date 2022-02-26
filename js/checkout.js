var cart=JSON.parse(localStorage.getItem("cartItems"))||[];
    var proceedtopay=document.querySelector(".proceed-to-pay");
    proceedtopay.addEventListener("click",function(){
        alert("You order has been placed");
        location.href="index.html";
        localStorage.setItem("cartItems",JSON.stringify([]));
    })

   
    var cartQuant=cart.reduce(function(acc,elem)
    {
    return acc + elem.quant;
    },0);

    var cartPrice=cart.reduce(function(acc,elem)
    {
    return acc + (elem.price * elem.quant);
    },0);

    if(cartQuant==0){
        location.href="index.html";
        alert("Your cart is empty.")
    }
  
    var inputAddres=document.querySelector(".address-input").value;

    // Order Summary Arrow button function start
    var downArroworder=document.querySelector(".downarrow-order");
    var upArroworder=document.querySelector(".uparrow-order");
    upArroworder.addEventListener("click",function(){
        var selectAddressbtn=document.querySelector(".select-address");
        var OrderProduct=document.querySelector(".order-summmary-order-product");
        OrderProduct.style.display="none";
        selectAddressbtn.style.display="none";
        downArroworder.style.display="block";
        upArroworder.style.display="none";
    })


    downArroworder.addEventListener("click",function(){
        var selectAddressbtn=document.querySelector(".select-address");
        var OrderProduct=document.querySelector(".order-summmary-order-product");
        OrderProduct.style.display="block";
        selectAddressbtn.style.display="block";
        upArroworder.style.display="block";
        downArroworder.style.display="none";
        var proceedtobtn=document.querySelector(".proceed-to-payment");
        var addressProduct=document.querySelector(".order-summary-address-form");
        addressProduct.style.display="none";
        proceedtobtn.style.display="none";
        downArrowaddress.style.display="block";
        upArrowaddress.style.display="none";
        var addressProduct=document.querySelector(".order-summary-payment-form");
        addressProduct.style.display="none";
        downArrowpayment.style.display="block";
        upArrowpayment.style.display="none";   
        var proceedtopay=document.querySelector(".proceed-to-pay");
        proceedtopay.innerText="Pay"+" "+"₹"+" "+cartPrice;
        proceedtopay.style.display="none";
    })

    selectAddressbtn=document.querySelector(".select-address");
    selectAddressbtn.addEventListener("click",function(){
        var proceedtobtn=document.querySelector(".proceed-to-payment");
        var addressProduct=document.querySelector(".order-summary-address-form");
        addressProduct.style.display="block";
        proceedtobtn.style.display="block";
        upArrowaddress.style.display="block";
        downArrowaddress.style.display="none";
        var OrderProduct=document.querySelector(".order-summmary-order-product");
        OrderProduct.style.display="none";
        selectAddressbtn.style.display="none";
        downArroworder.style.display="block";
        upArroworder.style.display="none";
        

    })
     // Order Summary Arrow button function end



     // Address Arrow button function start
    var downArrowaddress=document.querySelector(".downarrow-address");
    var upArrowaddress=document.querySelector(".uparrow-address");
    upArrowaddress.addEventListener("click",function(){
        var proceedtobtn=document.querySelector(".proceed-to-payment");
        var addressProduct=document.querySelector(".order-summary-address-form");
        addressProduct.style.display="none";
        proceedtobtn.style.display="none";
        downArrowaddress.style.display="block";
        upArrowaddress.style.display="none"; 
               
    })


    downArrowaddress.addEventListener("click",function(){
        var proceedtobtn=document.querySelector(".proceed-to-payment");
        var addressProduct=document.querySelector(".order-summary-address-form");
        addressProduct.style.display="block";
        proceedtobtn.style.display="block";
        upArrowaddress.style.display="block";
        downArrowaddress.style.display="none";
        var selectAddressbtn=document.querySelector(".select-address");
        var OrderProduct=document.querySelector(".order-summmary-order-product");
        OrderProduct.style.display="none";
        selectAddressbtn.style.display="none";
        downArroworder.style.display="block";
        upArroworder.style.display="none";
        var proceedtopay=document.querySelector(".proceed-to-pay");
        proceedtopay.innerText="Pay"+" "+"₹"+" "+cartPrice;
        proceedtopay.style.display="none";
        var addressProduct=document.querySelector(".order-summary-payment-form");
        addressProduct.style.display="none";
        downArrowpayment.style.display="block";
        upArrowpayment.style.display="none";  
    })


    var proceedtobtn=document.querySelector(".proceed-to-payment");
    proceedtobtn.addEventListener("click",function(){
        var addressDisplay=document.querySelector(".items-summary-address");
        addressDisplay.innerText=inputAddres;
        console.log(inputAddres);
        var proceedtobtn=document.querySelector(".proceed-to-payment");
        var addressProduct=document.querySelector(".order-summary-payment-form");
        addressProduct.style.display="block";
        upArrowpayment.style.display="block";
        downArrowpayment.style.display="none";
        var proceedtobtn=document.querySelector(".proceed-to-payment");
        var addressProduct=document.querySelector(".order-summary-address-form");
        addressProduct.style.display="none";
        proceedtobtn.style.display="none";
        downArrowaddress.style.display="block";
        upArrowaddress.style.display="none";  
        var proceedtopay=document.querySelector(".proceed-to-pay");
        proceedtopay.innerText="Pay"+" "+"₹"+" "+cartPrice;
        proceedtopay.style.display="block";
    })
     // Address Arrow button function end

    // Payment Arrow button function start
    var downArrowpayment=document.querySelector(".downarrow-payment");
    var upArrowpayment=document.querySelector(".uparrow-payment");
    upArrowpayment.addEventListener("click",function(){
        var proceedtopay=document.querySelector(".proceed-to-pay");
        proceedtopay.innerText="Pay"+" "+"₹"+" "+cartPrice;
        proceedtopay.style.display="none";
        var addressProduct=document.querySelector(".order-summary-payment-form");
        addressProduct.style.display="none";
        proceedtopay.style.display="none";
        downArrowpayment.style.display="block";
        upArrowpayment.style.display="none";        
    })


    downArrowpayment.addEventListener("click",function(){
        var proceedtopay=document.querySelector(".proceed-to-pay");
        proceedtopay.innerText="Pay"+" "+"₹"+" "+cartPrice;
        proceedtopay.style.display="block";
        var addressProduct=document.querySelector(".order-summary-payment-form");
        addressProduct.style.display="block";
        upArrowpayment.style.display="block";
        downArrowpayment.style.display="none";
        var selectAddressbtn=document.querySelector(".select-address");
        var OrderProduct=document.querySelector(".order-summmary-order-product");
        OrderProduct.style.display="none";
        selectAddressbtn.style.display="none";
        downArroworder.style.display="block";
        upArroworder.style.display="none";
        var proceedtobtn=document.querySelector(".proceed-to-payment");
        var addressProduct=document.querySelector(".order-summary-address-form");
        addressProduct.style.display="none";
        proceedtobtn.style.display="none";
        downArrowaddress.style.display="block";
        upArrowaddress.style.display="none"; 
    })


    
    var showItemsSummary=document.querySelector(".items-summary-order");
    showItemsSummary.innerText=cartQuant+" "+"items"+" " + "for" +" "+ "₹"+" "+cartPrice ;


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

         var priceSummaryDetail=document.querySelector(".checkout-right");
         priceSummaryDetail.append(subTotalDiv,dicountDiv,shippingtDiv,hr,toPayDiv,TotalSavingDiv);
         document.querySelector(".order-summmary-order-product").append(productsTotal);
