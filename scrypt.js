function checkLogin(){
    const navLimba = document.getElementById("nav-limba");
        const navLitera = document.getElementById("nav-litera");
        const navHome = document.getElementById("nav-home");
        const navRegister = document.getElementById("nav-register");
        const navAbout = document.getElementById("nav-about");
    if(sessionStorage.getItem("loggedIn")==="true"){
        document.getElementById("home-section").style.display="none";
        document.getElementById("content-home").style.display= "block";
        
        if(navHome)
            navHome.style.display = "none";
        if(navRegister)
            navRegister.style.display = "none";
        if(navLimba)
            navLimba.style.display = "block";
        if(navLitera)
            navLitera.style.display = "block";
        if(navAbout)
            navAbout.style.display = "block";

    }
    else{
        document.getElementById("home-section").style.display   ="block";
        document.getElementById("content-home").style.display= "none";
        
        if(navHome)
            navHome.style.display = "block";
        if(navRegister)
            navRegister.style.display = "block";
        if(navLimba)
            navLimba.style.display = "none";
        if(navLitera)
            navLitera.style.display = "none";
        if(navAbout)
            navAbout.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function(){
    
    checkLogin();
    document.getElementById("home-form").addEventListener("submit", function(e){
        e.preventDefault();
        const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if(email.trim()==="user@gmail.com" && password.trim() ==="12345"){
        sessionStorage.setItem("loggedIn", "true");
        checkLogin();
    }
    else{
        alert("Email sau parola incorecta!!!");
    }
    });
    document.getElementById("logout").addEventListener("click", function(){
        sessionStorage.removeItem("loggedIn");
        checkLogin();
    });
    
    

    const section = document.querySelectorAll("section");
    function showSection(sectionId){
        section.forEach(sec=>{
            if(sec.id===sectionId){
                sec.style.display = "block";
            }
            else{
                sec.style.display = "none";
            }
        });
    }
    showSection("home-section");
    const navLink = document.querySelectorAll("nav a");
    navLink.forEach(link=>{
        link.addEventListener("click", event=>{
            event.preventDefault();
            const target = link.getAttribute("data-section");
            showSection(target);
        });
    });
    
});

