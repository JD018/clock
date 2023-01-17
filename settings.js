function setaluncha() {
    localStorage.setItem('adaylunch', 'a')
    document.getElementById('1').style = 'background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);'
    document.getElementById('2').style = 'background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);'
}
function setbluncha() {
    localStorage.setItem('adaylunch', 'b')
    document.getElementById('2').style = 'background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);'
    document.getElementById('1').style = 'background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);'
}

function setalunchb() {
    localStorage.setItem('bdaylunch', 'a')
    document.getElementById('3').style = 'background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);'
    document.getElementById('4').style = 'background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);'
}
function setblunchb() {
    localStorage.setItem('bdaylunch', 'b')
    document.getElementById('4').style = 'background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);'
    document.getElementById('3').style = 'background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);'
}

function setlegacy() {
    localStorage.setItem('light', 'legacy')
    document.getElementById('7').style = 'background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);'
    document.getElementById('6').style = 'background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);'
    document.getElementById('5').style = 'background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);'
}

function set12() {
    localStorage.setItem('time', '12')
    document.getElementById('12').style = 'background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);'
    document.getElementById('24').style = 'background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);'
}
function set24() {
    localStorage.setItem('time', '24')
    document.getElementById('24').style = 'background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);'
    document.getElementById('12').style = 'background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);'
}

function save() {
    if (document.getElementById('c1').value.toString() !== "") {
        localStorage.setItem('c1', document.getElementById('c1').value.toString())
    }
    if (document.getElementById('c2').value.toString() !== "") {
        localStorage.setItem('c2', document.getElementById('c2').value.toString())
    }
    if (document.getElementById('c3').value.toString() !== "") {
        localStorage.setItem('c3', document.getElementById('c3').value.toString())
    }
    if (document.getElementById('c4').value.toString() !== "") {
        localStorage.setItem('c4', document.getElementById('c4').value.toString())
    }
    if (document.getElementById('c5').value.toString() !== "") {
        localStorage.setItem('c5', document.getElementById('c5').value.toString())
    }
    if (document.getElementById('c6').value.toString() !== "") {
        localStorage.setItem('c6', document.getElementById('c6').value.toString())
    }
    window.open('index.html', target='_self')
}

function reset() {
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
}