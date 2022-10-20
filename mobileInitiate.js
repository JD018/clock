if (localStorage.getItem('setup') === 'true') {
    timeFormat = localStorage.getItem('time')
    light = localStorage.getItem('light')
    bdaylunch = localStorage.getItem('bdaylunch')
    adaylunch = localStorage.getItem('adaylunch')
    c1 = localStorage.getItem('c1')
    c2 = localStorage.getItem('c2')
    c3 = localStorage.getItem('c3')
    c4 = localStorage.getItem('c4')
    c5 = localStorage.getItem('c5')
    c6 = localStorage.getItem('c6')
} else {
    localStorage.setItem('time', '12')
    localStorage.setItem('light', 'light')
    localStorage.setItem('bdaylunch', 'b')
    localStorage.setItem('adaylunch', 'a')

    localStorage.setItem('c1', 'Class 1')
    localStorage.setItem('c2', 'Class 2')
    localStorage.setItem('c3', 'Class 3')
    localStorage.setItem('c4', 'Class 4')
    localStorage.setItem('c5', 'Class 5')
    localStorage.setItem('c6', 'Class 6')

    localStorage.setItem('setup', 'true')
}


classes = []
classes.push(c1)
classes.push(c2)
classes.push(c3)
classes.push(c4)
classes.push(c5)
classes.push(c6)

if (light === 'light') {
    document.getElementById('main').setAttribute('href', 'mobileLight.css')
// } else if (light === 'dark') {
//     document.getElementById('main').setAttribute('href', 'dark.css')
// } else if (light === 'legacy') {
//     document.getElementById('main').setAttribute('href', 'legacy.css')
} else {
    document.getElementById('main').setAttribute('href', 'mobileLight.css')
}