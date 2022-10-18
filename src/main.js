let chk = document.querySelector('#darkmode-toggle')
let sun = document.querySelector('.fa-sun')
let moon = document.querySelector('.fa-moon')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    
    if(document.body.classList.contains('dark')) {
        sun.style.opacity = 100
        moon.style.opacity = 0
    } else{
        sun.style.opacity = 0
        moon.style.opacity = 100
    }
})