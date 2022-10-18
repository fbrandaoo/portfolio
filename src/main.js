let chk = document.querySelector('#darkmode-toggle')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})