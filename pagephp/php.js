function changeColor() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 1) {

        navbar.classList.add('bg-dark');
        navbar.classList.remove('bg-light');

    } else {
        navbar.classList.remove('bg-dark');
        navbar.classList.add('bg-light');
    }

}

window.addEventListener("scroll", function () {
    changeColor();
})


function changeColorIcon() {
    const iconColor = document.querySelectorAll('.iconTest');
    if (window.scrollY > 1) {
        for (let i = 0; i < iconColor.length; ++i) {
            iconColor[i].classList.add('icon-nav');
            iconColor[i].classList.remove('icon-nav-scroll');

        }

    } else {
        for (let i = 0; i < iconColor.length; ++i) {
            iconColor[i].classList.add('icon-nav-scroll');
            iconColor[i].classList.remove('icon-nav');

        }

    }

}

window.addEventListener("scroll", function () {
    changeColorIcon();
})


function changeColorText() {
    const navbar = document.querySelector('.navbar-brand');
    if (window.scrollY > 1) {

        navbar.classList.add('text-white');
        navbar.classList.remove('text-dark');

    } else {
        navbar.classList.remove('text-white');
        navbar.classList.add('text-dark');
    }

}

window.addEventListener("scroll", function () {
    changeColorText();
})


function changeColorIconText() {
    const iconTextColor = document.querySelectorAll('.text-test');
    if (window.scrollY > 1) {
        for (let i = 0; i < iconTextColor.length; ++i) {
            iconTextColor[i].classList.add('text-white');
            iconTextColor[i].classList.remove('text-dark');

        }

    } else {
        for (let i = 0; i < iconTextColor.length; ++i) {
            iconTextColor[i].classList.add('text-dark');
            iconTextColor[i].classList.remove('text-white');

        }

    }

}

window.addEventListener("scroll", function () {
    changeColorIconText();
})


// ACTIVE LINK


function testactive(){
    const SectionHome = document.getElementById ('home');
    const HeightSectionHome = 800;
    const HeightSectionTag = 1000;
    const SectionTag = document.getElementById ('tag');
    const HeightSectionCreation = 3900;
    const SectionCreation = document.getElementById ('creation');
    const HeightSectionDisplay = 6100;
    const SectionDisplay = document.getElementById ('display');
    if(scrollY > HeightSectionHome && scrollY < HeightSectionTag){
        SectionHome.classList.add ("accueilAside")
        SectionTag.classList.remove ("accueilAside")
        SectionCreation.classList.remove ("accueilAside")
        SectionDisplay.classList.remove ("accueilAside")
    } else if (scrollY > HeightSectionTag && scrollY < HeightSectionCreation) {
        SectionHome.classList.remove ("accueilAside")
        SectionTag.classList.add ("accueilAside")
        SectionCreation.classList.remove ("accueilAside")
        SectionDisplay.classList.remove ("accueilAside")
    } else if (scrollY > HeightSectionCreation && scrollY < HeightSectionDisplay) {
        SectionHome.classList.remove ("accueilAside")
        SectionTag.classList.remove ("accueilAside")
        SectionCreation.classList.add ("accueilAside")
        SectionDisplay.classList.remove ("accueilAside")
    } else if (scrollY > HeightSectionDisplay) {
        SectionHome.classList.remove ("accueilAside")
        SectionTag.classList.remove ("accueilAside")
        SectionCreation.classList.remove ("accueilAside")
        SectionDisplay.classList.add ("accueilAside")
    }
    console.log(scrollY)
}

window.addEventListener("scroll", function () {
    testactive()
})



