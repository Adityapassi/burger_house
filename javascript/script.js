window.addEventListener("scroll" , function(){
    let scrollval = window.scrollY;
    if(scrollval < "40"){
        document.getElementById("menu").classList.remove("active");
        document.getElementById("top").classList.remove("active")    
    }

    else{
        document.getElementById("menu").classList.add("active");
        document.getElementById("top").classList.add("active");
    }
})