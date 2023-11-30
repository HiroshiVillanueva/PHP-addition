
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const power = document.getElementById("proven");
    if (screen.width > 500){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("TitleAL").style.marginLeft = "0rem";
            document.getElementById("TitleAL").style.fontSize = "1.5rem";
    
            document.getElementById("proven").style.borderBottom = "solid 1px rgba(255, 255, 255, 0.507)";
            document.getElementById("proven").style.backgroundImage = "linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0))";
            document.getElementById("proven").style.backdropFilter = "blur(9px)";
    
            document.getElementById("Logo").style.opacity = "1";
        
        } else {
            document.getElementById("TitleAL").style.marginLeft = "-3.6rem";
            document.getElementById("TitleAL").style.fontSize = "smaller";
    
            document.getElementById("proven").style.borderBottom = "solid 1px rgba(255, 255, 255, 0)";
            document.getElementById("proven").style.backgroundImage = "linear-gradient(to right, rgb(0, 0, 0, 0), rgba(0, 0, 0, 0))";
            document.getElementById("proven").style.backdropFilter = "blur(0px)";
    
            document.getElementById("Logo").style.opacity = "0";
        }
    } else {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("TitleAL").style.marginLeft = "0rem";
    
            document.getElementById("proven").style.borderBottom = "solid 1px rgba(255, 255, 255, 0.507)";
            document.getElementById("proven").style.backgroundImage = "linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0))";
            document.getElementById("proven").style.backdropFilter = "blur(9px)";
    
            document.getElementById("Logo").style.opacity = "1";
        
        } else {
            document.getElementById("TitleAL").style.marginLeft = "-3.6rem";
            document.getElementById("TitleAL").style.fontSize = "smaller";
    
            document.getElementById("proven").style.borderBottom = "solid 1px rgba(255, 255, 255, 0)";
            document.getElementById("proven").style.backgroundImage = "linear-gradient(to right, rgb(0, 0, 0, 0), rgba(0, 0, 0, 0))";
            document.getElementById("proven").style.backdropFilter = "blur(0px)";
    
            document.getElementById("Logo").style.opacity = "0";
        }
    }

}


window.addEventListener("load", () => {
    const Load = document.querySelector(".Loader");

    Load.classList.add("Loader-Hidden");

    Load.addEventListener("transitioned", () => {
        document.body.removeChild(document.querySelector(".Loader"));
    })
})



window.onload = function a(){
    let navtoggle = document.getElementById('Vertical_Navigator');
    let PageExpander = document.getElementById('Expander');

    SymbolToggle1 = document.getElementById('NavSymbols1');
    SymbolToggle2 = document.getElementById('NavSymbols11');
    SymbolToggle3 = document.getElementById('NavSymbols12');

    SymbolToggle4 = document.getElementById('NavSymbols2');
    SymbolToggle5 = document.getElementById('NavSymbols3');
    SymbolToggle6 = document.getElementById('NavSymbols4');
    SymbolToggle7 = document.getElementById('NavSymbols5');

    if(localStorage.getItem("toggle") === 'on'){
        console.log("Onload Sidebar = false");
        SymbolToggle1.classList.add("SymbolOff");
        SymbolToggle2.classList.add("SymbolOff");
        SymbolToggle3.classList.add("SymbolOff");
        SymbolToggle4.classList.add("SymbolOff");
        SymbolToggle5.classList.add("SymbolOff");
        SymbolToggle6.classList.add("SymbolOff");
        SymbolToggle7.classList.add("SymbolOff");

        navtoggle.classList.add("NavbarOff");
        PageExpander.classList.add("Content_Home_Off");
    }
    if(localStorage.getItem("toggle") === null){
        console.log("setting = false");
        localStorage.setItem("toggle", 'off');
    }
}
function NavBarToggle() {
    let navtoggle = document.getElementById('Vertical_Navigator'); 
    let PageExpander = document.getElementById('Expander');

    SymbolToggle1 = document.getElementById('NavSymbols1');
    SymbolToggle2 = document.getElementById('NavSymbols11');
    SymbolToggle3 = document.getElementById('NavSymbols12');

    SymbolToggle4 = document.getElementById('NavSymbols2');
    SymbolToggle5 = document.getElementById('NavSymbols3');
    SymbolToggle6 = document.getElementById('NavSymbols4');
    SymbolToggle7 = document.getElementById('NavSymbols5');
    
    //navtoggle.classList.toggle("NavbarOff");
    // navtoggle.classList.toggle("NavbarOff");
    if(localStorage.getItem("toggle") == 'on'){
        console.log("Sidebar = True");
        navtoggle.classList.remove("NavbarOff");
        navtoggle.classList.add("Vertical_Navigation_Bar_Wrapper");

        PageExpander.classList.remove("Content_Home_Off");

        SymbolToggle1.classList.remove("SymbolOff");
        SymbolToggle2.classList.remove("SymbolOff");
        SymbolToggle3.classList.remove("SymbolOff");
        SymbolToggle4.classList.remove("SymbolOff");
        SymbolToggle5.classList.remove("SymbolOff");
        SymbolToggle6.classList.remove("SymbolOff");
        SymbolToggle7.classList.remove("SymbolOff");

        localStorage.setItem("toggle", 'off');
    }
    else{
        navtoggle.classList.add("NavbarOff");
        navtoggle.classList.remove("Vertical_Navigation_Bar_Wrapper");
        PageExpander.classList.add("Content_Home_Off");

        SymbolToggle1.classList.add("SymbolOff");
        SymbolToggle2.classList.add("SymbolOff");
        SymbolToggle3.classList.add("SymbolOff");
        SymbolToggle4.classList.add("SymbolOff");
        SymbolToggle5.classList.add("SymbolOff");
        SymbolToggle6.classList.add("SymbolOff");
        SymbolToggle7.classList.add("SymbolOff");

        console.log("Sidebar = false");
        localStorage.setItem("toggle", 'on');
    }
    console.log(localStorage.getItem("toggle"));

}




