function navSlide () {
    const listBtn = document.querySelector('.list-btn');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navBar = document.querySelector('nav');

    // Toggle Nav List
    listBtn.addEventListener('click', function () {
        // Toggle Nav links
        nav.classList.toggle('nav-links-active');
        console.log('togglr top')
        // Make nav ljnks visible
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``
            }
            else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.1}s`
            }
        })
        // Toggle animation
        listBtn.classList.toggle('list-btn-active');
    })

    // change navbar color when scrolling
    window.addEventListener('scroll', function () {
        navBar.classList.toggle('navScroll', window.scrollY > 0);
    })
    
    // collpse nav links when clicked outside
    window.addEventListener('click', function (e) {
        if (e.target.id !== 'nav-links' && e.target.id !== 'list-btn' && e.target.id !== 'btn-line') {
            if (nav.classList.contains('nav-links-active')) {
                nav.classList.remove('nav-links-active')
                listBtn.classList.remove('list-btn-active')
                console.log('remove at bottom check ')
                navLinks.forEach((link) => {
                    link.style.animation = ``
                    console.log('animation remove bottom')
                })
            }
            
        }
    })
    
}

navSlide();