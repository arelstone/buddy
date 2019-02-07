function page() {
    this.init = function () {
        const body = document.querySelector('body');
        body.style = 'background: black !important'
        body.innerHTML = '<div style="text-align: center"><h1 style="color: white;">We are closed for business...!</h1></div>'
    }
}