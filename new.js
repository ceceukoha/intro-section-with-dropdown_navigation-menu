const mobileNav = document.querySelector(".mobileNav");
const overlay = document.querySelector(".overlay");
const navToggleClose = document.querySelector("#close-img");
const navToggle = document.querySelector(".hamburger");
const body = document.querySelector("body");

// navToggleClose.addEventListener('click', ()=>{
//     const visibility = mobileNav.getAttribute('data-visible');


//     if (visibility === "false") {
//         overlay.setAttribute("data-visible", true)
//         mobileNav.setAttribute("data-visible", true)
//         navToggle.setAttribute("aria-expaned",true);
//         navToggle.classList.add("fixed",true);

//     }elseif (visibility === "true") {
//         overlay.setAttribute("data-visible", false)
//         mobileNav.setAttribute("data-visible", false)
//         navToggle.setAttribute("aria-expaned",true);
//         navToggle.classList.remove("fixed",true);
//     }
// })

navToggleClose.addEventListener('click', ()=>{
    const visibility = overlay.getAttribute('data-visible');

    // if (visibility === "false"){
    //     overlay.style.display = "none"
    // }else{
    //     overlay.style.display = "block";
    // }

    overlay.style.marginLeft = '0'
    mobileNav.classList.toggle("left");
})



