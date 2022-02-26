var productDetails=JSON.parse(localStorage.getItem("productDetailData"))||[];

detail(productDetails);
console.log(productDetails);

function detail(productDetails)
{
    productDetails.map(function(pro){
    console.log("Hello");
    scroll(0,0);
    var productDetailPage=document.querySelector(".product-detail");
    productDetailPage.innerHTML="";
    productDetailPage.style.visibility="visible";

    var productImageDiv=document.createElement("div");
    productImageDiv.style.height="538px";
    productImageDiv.style.width="466px";

    var productImage=document.createElement("img");;
    productImage.style.height="423px";
    productImage.style.width="323px";
    productImage.setAttribute("src",pro.imageUrl);

    productImageDiv.append(productImage);


    var descriptionDiv=document.createElement("div");
    descriptionDiv.style.height="442px";
    descriptionDiv.style.width="466px";

    var descFor=document.createElement("p");
    descFor.innerText="FOR: "+pro.productUses;
    descFor.style.fontSize="25px";

    var descName=document.createElement("p");
    descName.innerText=pro.productName;
    descName.style.fontSize="30px";
    descName.style.fontWeight="bold";
    descName.style.marginTop="20px";

    var descPriceDiv=document.createElement("div");
    descPriceDiv.style.display="flex";
    descPriceDiv.style.gap="20px";
    

    var descPrice=document.createElement("p");
    descPrice.innerText="₹"+" "+pro.price;
    descPrice.style.fontSize="30px";
    descPrice.style.fontWeight="bold";
    descPrice.style.color="darkblue";
    descPrice.style.marginTop="20px";

    var descStrikePrice=document.createElement("s");
    descStrikePrice.innerText="₹"+" "+pro.mrp;
    descStrikePrice.style.fontSize="30px";
    descStrikePrice.style.fontWeight="bold";
    descStrikePrice.style.marginTop="20px";

    descPriceDiv.append(descPrice,descStrikePrice)

    var marketDesce=document.createElement("p");
    marketDesce.style.fontSize="25px";
    marketDesce.style.marginTop="20px";
    marketDesce.innerText="MRP (Incl. of all taxes)";

    var DecaddToCart=document.createElement("button");
    DecaddToCart.innerText="Add to Cart";
    DecaddToCart.style.width="100%";
    DecaddToCart.style.backgroundColor="darkslateblue";
    DecaddToCart.style.color="white";
    DecaddToCart.style.fontSize="20px";
    DecaddToCart.style.border="none";
    DecaddToCart.style.paddingBottom="15px";
    DecaddToCart.style.paddingTop="15px";
    DecaddToCart.style.borderRadius="30px";
    DecaddToCart.style.cursor="pointer";
    DecaddToCart.style.marginTop="20px";
    DecaddToCart.addEventListener("mouseover",addcarthover);
    DecaddToCart.addEventListener("mouseleave",addcartleave);
    function addcartleave(){
      DecaddToCart.style.backgroundColor="rgb(72, 61, 139)";
    }
    function addcarthover(){
      DecaddToCart.style.backgroundColor="rgba(72, 61, 139,0.7";
    }
    DecaddToCart.addEventListener("click", addCart);
    function addCart()
    {
      alert("The product has been added to the cart")
      location.reload(true);
      pro.quant=1;
      console.log(pro);
      cart.push(pro);
      localStorage.setItem("cartItems",JSON.stringify(cart));
    }


    descriptionDiv.append(descFor,descName,descPriceDiv,marketDesce,DecaddToCart);

    document.querySelector(".product-detail").append(productImageDiv,descriptionDiv);
    
    })
    
};  