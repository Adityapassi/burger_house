window.addEventListener("scroll" , function(){
    let scrollval = window.scrollY;
    if(scrollval < "40"){
        document.getElementById("menu").classList.remove("active");
        b
    }

    else{
        document.getElementById("menu").classList.add("active");
    }
})