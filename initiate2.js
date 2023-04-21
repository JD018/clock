function setupMain() {
    if (localStorage.getItem('setup') === 'true') {
        timeFormat = localStorage.getItem('time')
        light = localStorage.getItem('light')
        bdaylunch = localStorage.getItem('bdaylunch')
        adaylunch = localStorage.getItem('adaylunch')
        s1 = localStorage.getItem('s1')
        s2 = localStorage.getItem('s2')
        s3 = localStorage.getItem('s3')
        s4 = localStorage.getItem('s4')
        s5 = localStorage.getItem('s5')
        s6 = localStorage.getItem('s6')
    } else {
        localStorage.setItem('time', '12')
        localStorage.setItem('light', 'light')
        localStorage.setItem('bdaylunch', 'b')
        localStorage.setItem('adaylunch', 'a')

        localStorage.setItem('s1', 'Class 1')
        localStorage.setItem('s2', 'Class 2')
        localStorage.setItem('s3', 'Class 3')
        localStorage.setItem('s4', 'Class 4')
        localStorage.setItem('s5', 'Class 5')
        localStorage.setItem('s6', 'Class 6')

        localStorage.setItem('setup', 'true')
    }


    students = []
    students.push(s1)
    students.push(s2)
    students.push(s3)
    students.push(s4)
    students.push(s5)
    students.push(s6)

    period = document.getElementById('period_index').value

    if (period == "Period 1") {
        students = s1
    }
    if (period == "Period 2") {
        students = s2
    }
    if (period == "Period 3") {
        students = s3
    }
    if (period == "Period 4") {
        students = s4
    }
    if (period == "Period 5") {
        students = s5
    }
    if (period == "Period 6") {
        students = s6
    }

    students = students.split(',')

    for (var i = 0; i < students.length; i++) {
        const child = document.createElement('button')
        child.className = 'selector'
        child.innerHTML = students[i].trim()
        child.id = students[i].trim()
        document.getElementById('names').appendChild(child)
    }

    // table option as well
    // SWITCH FOR STUDENT OR TABLE
    // back button

    // if (light === 'light') {
    //     document.getElementById('main').setAttribute('href', 'light.css')
    // } else if (light === 'dark') {
    //     document.getElementById('main').setAttribute('href', 'dark.css')
    // } else if (light === 'legacy') {
    //     document.getElementById('main').setAttribute('href', 'legacy.css')
    // } else {
    //     document.getElementById('main').setAttribute('href', 'light.css')
    // }
}

setupMain()

function keep() {
    selector = Math.floor(Math.random() * students.length)
    document.getElementById('pickedStudent').innerHTML = students[selector]
}

function remove() {
    removed = document.getElementById('pickedStudent').innerHTML
    loc = students.indexOf(removed)
    students.splice(loc, 1)
    document.getElementById(removed.trim()).remove()
    selector = Math.floor(Math.random() * students.length)
    document.getElementById('pickedStudent').innerHTML = students[selector]
}
