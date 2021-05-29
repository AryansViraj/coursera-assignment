function navSlide () {
    const listBtn = document.querySelector('.list-btn');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    listBtn.onclick = function () {
        if (nav.classList.contains('nav-links-active')) {
            nav.classList.remove('nav-links-active');
            listBtn.classList.remove('list-btn-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ``
                }
            })
            console.log('removed from top')
        }
        else {
            nav.classList.add('nav-links-active');
            listBtn.classList.add('list-btn-active');
            navLinks.forEach((link, index) => {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.1}s`
            })
            console.log('added from top')

            window.onclick = function (e) {
                console.log(e.target.classList)
                if (e.target.id !== 'nav-links' && e.target.id !== 'list-btn' && e.target.id !== 'btn-line') {
                    if (nav.classList.contains('nav-links-active')) {
                        nav.classList.remove('nav-links-active');
                        listBtn.classList.remove('list-btn-active');
                        navLinks.forEach((link, index) => {
                            if (link.style.animation) {
                                link.style.animation = ``
                            }
                        })
                    }
                    console.log('removed from bottom')
                }
            }
        }
    };
    
};

function scrollNav () {
    const navBar = document.querySelector('nav');

    window.addEventListener('scroll', function () {
        navBar.classList.toggle('navScroll', window.scrollY > 0);
    })
};

navSlide();
// clickElse();
scrollNav();