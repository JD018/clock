if (localStorage.getItem('adaylunch') === 'a') {
    setaluncha()
}
if (localStorage.getItem('adaylunch') === 'b') {
    setbluncha()
}
if (localStorage.getItem('bdaylunch') === 'a') {
    setalunchb()
}
if (localStorage.getItem('bdaylunch') === 'b') {
    setblunchb()
}

if (localStorage.getItem('c1') !== null) {
    document.getElementById('c1').value = localStorage.getItem('c1')
}
if (localStorage.getItem('c2') !== null) {
    document.getElementById('c2').value = localStorage.getItem('c2')
}
if (localStorage.getItem('c3') !== null) {
    document.getElementById('c3').value = localStorage.getItem('c3')
}
if (localStorage.getItem('c4') !== null) {
    document.getElementById('c4').value = localStorage.getItem('c4')
}
if (localStorage.getItem('c5') !== null) {
    document.getElementById('c5').value = localStorage.getItem('c5')
}
if (localStorage.getItem('c6') !== null) {
    document.getElementById('c6').value = localStorage.getItem('c6')
}