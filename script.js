const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active");
        }
    });
});

const header = document.querySelector("header");

let lastScroll = 300;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    const limit = window.innerHeight / 2;

    if(currentScroll > limit){

        header.style.transform = "translateY(-100%)";

    }else{

        if(currentScroll > lastScroll + 100){

            header.style.transform = "translateY(-100%)";

        }else{

            header.style.transform = "translateY(0)";
        }
    }

    lastScroll = currentScroll;
});

