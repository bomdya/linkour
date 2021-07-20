const hearts = document.querySelectorAll(".heart_btn");
const header = document.querySelector("#header");
const sidebox = document.querySelector(".side_box");
const variableWidth = document.querySelectorAll(".contents_box .contents");
const delegation = document.querySelector(".contents_box");

const delegationFunc = (e) => {
    let elem = e.target;

    while(!elem.getAttribute("data-name")){
        elem=elem.parentNode;
        if(elem.nodeName === "BODY"){
            elem=null;
            return;
        }
    }
    if(elem.matches("[data-name=heartbeat]")){

        $.ajax({
            type:"POST",
            url:"data/like.json",
            data:37,
            dataType:"json",
            success: function(response){
                let likeCount = document.querySelector("#like-count-37");
                likeCount.innerHTML = "alert" + response.like_count + "alert";
            },
            error: function(request,status,error){
                alert("alert");
                window.location.replace("https://www.naver.com");
            }
        })
    }else if(elem.matches("[data-name=bookmark]")){

    }else if(elem.matches("[data-name=share]")){

    }
    else if(elem.matches("[data-name=more]")){

    }
    elem.classList.toggle("on");
}

const resizeFunc = () => {
    if(pageYOffset>=10){
    let calcWidth = (window.innerWidth * 0.5) + 170;
    sidebox.style.left = calcWidth + "px";
    }
    if(matchMedia('screen and (max-width: 800px').matches){

        
        for(let i=0; i<variableWidth.length; i++){
            variableWidth[i].style.width = window.innerWidth - 20 + "px";
        }
    
    
    }else{
       
        for(let i=0; i<variableWidth.length; i++){
            if(window.innerWidth<600){
              variableWidth[i].removeAttribute("style");  
            }
        } 
        
    }
}

const scrollFunc = () => {
    if(pageYOffset>=10){
        header.classList.add("on");
        if(sidebox){
            sidebox.classList.add("on");
        }        
        resizeFunc();
    }else{
        header.classList.remove("on");
        if(sidebox){

            sidebox.classList.remove("on");
            sidebox.removeAttribute("style");
        }
    }
}

// Vá para o topo ao recarregar 
setTimeout(function(){
    scrollTo(0,0);
},100);

if(delegation){

    delegation.addEventListener("click",delegationFunc);
}
window.addEventListener("resize",resizeFunc);
window.addEventListener("scroll",scrollFunc);