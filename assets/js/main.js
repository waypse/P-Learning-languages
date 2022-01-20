function changeColor() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 750) {

        navbar.classList.add('bg-test');
        navbar.classList.remove('bg-dark');

    } else {
        navbar.classList.remove('bg-test');
        navbar.classList.add('bg-dark');
    }

}

window.addEventListener("scroll", function () {
    changeColor();
})


function changeColorIcon() {
    const iconColor = document.querySelectorAll('.iconTest');
    if (window.scrollY > 1) {
        for (let i = 0; i < iconColor.length; ++i) {
            iconColor[i].classList.add('icon-nav-scroll');
            iconColor[i].classList.remove('icon-nav');

        }

    } else {
        for (let i = 0; i < iconColor.length; ++i) {
            iconColor[i].classList.add('icon-nav');
            iconColor[i].classList.remove('icon-nav-scroll');

        }

    }

}

// ici
window.addEventListener("scroll", function () {
    changeColorIco();   
})


function changeColorText() {
    const navbar = document.querySelector('.navbar-brand');
    if (window.scrollY > 1) {

        navbar.classList.add('text-dark');
        navbar.classList.remove('text-white');

    } else {
        navbar.classList.remove('text-dark');
        navbar.classList.add('text-white');
    }

}

//ici
window.addEventListener("scroll", function () {
    changeColorTex();
})




function changeColorH3() {
    const textColor = document.querySelectorAll('.text-test');
    if (window.scrollY > 1) {
        for (let i = 0; i < textColor.length; ++i) {
            textColor[i].classList.add('text-dark');
            textColor[i].classList.remove('text-white');

        }

    } else {
        for (let i = 0; i < textColor.length; ++i) {
            textColor[i].classList.add('text-white');
            textColor[i].classList.remove('text-dark');

        }

    }

}
//ici
window.addEventListener("scroll", function () {
    changeColor3();
})






function testScroll() {
    if (scrollY > 700) {
        let articles = document.getElementsByClassName("card__line");
        let articlesAnimDelayShort = document.getElementsByClassName("card__image");
        let articlesAnimDelayMedium = document.getElementsByClassName("card__content");
        for(let i = 0; i < articles.length; ++i){
            articles[i].classList.add("card__line1")
        }
        for(let i = 0; i < articlesAnimDelayShort.length; ++i){
            articlesAnimDelayShort[i].classList.add("card__image1")
        }
        for(let i = 0; i < articlesAnimDelayMedium.length; ++i){
            articlesAnimDelayMedium[i].classList.add("card__anim")
        }
    }
}

window.addEventListener('scroll', function () {
    testScroll()
})



if (window.addEventListener) {
    let tab = ['v', 'o', 'd', 'k', 'a'];
    let tabinter = [];
    let cross = document.getElementById("crossHidden")
    var paradise = new Audio ('/assets/js/paradise.mp3')
    window.addEventListener('keypress', function (e) {
        let key = e.key.toLowerCase()
        console.log(e)
        tabinter.push(key)
        if (tabinter.length === tab.length) {
            const tabToString = JSON.stringify(tab)
            const tabInterToString = JSON.stringify(tabinter)
            if (tabInterToString === tabToString) {
                //reussis
                tabinter = []
                paradise.play();
                console.log('yaaaaa')
            } else {
                //echoué
                cross.style.display = 'block';
                cross.classList.add("crossanim")
                setTimeout(function(){
                    console.log('renter')
                    cross.style.display = "none"
                    tabinter = []
                },6700)
            }
        }
    })
}