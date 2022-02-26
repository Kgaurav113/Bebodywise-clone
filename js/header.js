

   var emptyCartbutton=document.querySelector(".emptycartbutton");
   emptyCartbutton.addEventListener("click",function(){
       location.href="index.html";
   })

    //  <!-- /* Notification Bar */ -->;

    var body=document.querySelector("body");
    var notificationBar=document.querySelector(".notificationBar");
    var notificationClose=document.querySelector(".close");
    notificationClose.addEventListener("click",function()
    {
        notificationBar.style.display="none";
    })

    // <!-- login page -->
    var loginPage=document.querySelector(".login-page")
    var loginBtn=document.querySelector(".login");
    var loginBg=document.querySelector(".login-bg");
    
    loginBtn.addEventListener("click", function(){
        loginBg.style.visibility="visible";
        loginBg.style.opacity="1";
        loginPage.style.transition=".4s ease-in-out";
        loginPage.style.top="25%";
    })

   
    var loginClose=document.querySelector(".login-close");
    loginClose.addEventListener("click", function(){
        loginBg.style.visibility="hidden";
        loginPage.style.top="18%";
        loginPage.style.transition="0.1s linear";
    })

    // var loginData=[];
    // var loginInput=document.getElementById(".login-bar").value;
    // var loginInputBtn=document.querySelector("#login-submit");
    // loginInputBtn.addEventListener("click",function()
    // {

        
    //     console.log(+loginInput);

    //     loginData.push(+loginInput);
    //     alert("Account Added");
    //     localStorage.setItem("LoginDetail",JSON.stringify(loginData))
    // });
    

    // <!-- search page -->
    var searchPage=document.querySelector(".search-page")
    var searchBtn=document.querySelector(".search");
    var searchBg=document.querySelector(".search-bg");
    
    searchBtn.addEventListener("click", function(){
        searchBg.style.visibility="visible";
        searchBg.style.opacity="1";
        searchPage.style.transition=".2s linear";
        searchPage.style.top="3%";
    })

    var searchCatBtn=document.querySelector(".search-head>a>img");
    searchCatBtn.addEventListener("click", function(){
        searchBg.style.visibility="hidden";
        searchPage.style.transition=".1s ease-in-out";
        searchPage.style.top="0";
        cartBg.style.visibility="visible";
        cartBg.style.opacity="1";
        body.style.overflowY="hidden";
        cartPage.style.transition="0.3s ease-in-out";
        cartPage.style.right="0";
    })

    var searchClose=document.querySelector(".search-close");
    searchClose.addEventListener("click", function(){
        searchBg.style.visibility="hidden";
        searchPage.style.transition=".1s ease-in-out";
        searchPage.style.top="0";
        location.reload(true);
    })


    // <!-- cart page -->
    var cartPage=document.querySelector(".cart-page")
    var cartBtn=document.querySelector(".cart");

    var cartBg=document.querySelector(".cart-bg");
    var cartClose=document.querySelector(".cartClose");
    
    cartClose.addEventListener("click", function(){
        cartBg.style.visibility="hidden";
        cartBg.style.opacity="0";
        cartPage.style.transition="0.3s ease-in-out";
        cartPage.style.right="-450px";
        location.reload(true);
        
    })
    cartBtn.addEventListener("click", function(){
        cartBg.style.visibility="visible";
        cartBg.style.opacity="1";
        body.style.overflowY="hidden";
        cartPage.style.transition="0.3s ease-in-out";
        cartPage.style.right="0";
        
    })
    