var time = new Date()
var daytype
var lunchtype
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
dayW = days[time.getDay()]

if (dayW === "Monday" || dayW === "Thursday") {
    daytype = "a"
    lunchtype = localStorage.getItem('adaylunch')
} else if (dayW === "Tuesday" || dayW === "Friday") {
    daytype = "b"
    lunchtype = localStorage.getItem('bdaylunch')
} else if (dayW === "Wednesday") {
    daytype = "c"
    lunchtype = localStorage.getItem('bdaylunch')
} else {
    daytype = "o"
}

if (daytype === 'a') {
    document.getElementById('selectorb').style.display = 'none'
    document.getElementById('selectorc').style.display = 'none'
    document.getElementById('selectord').style.display = 'none'
}
if (daytype === 'b') {
    document.getElementById('selectora').style.display = 'none'
    document.getElementById('selectorc').style.display = 'none'
    document.getElementById('selectord').style.display = 'none'
}
if (daytype === 'c') {
    document.getElementById('selectora').style.display = 'none'
    document.getElementById('selectorb').style.display = 'none'
    document.getElementById('selectord').style.display = 'none'
}
if (daytype === 'd') {
    document.getElementById('selectora').style.display = 'none'
    document.getElementById('selectorb').style.display = 'none'
    document.getElementById('selectorc').style.display = 'none'
}
if (daytype === 'e') {
    document.getElementById('selectora').style.display = 'none'
    document.getElementById('selectorb').style.display = 'none'
    document.getElementById('selectorc').style.display = 'none'
    document.getElementById('selectord').style.display = 'none'
}

select = false

function daySelect() {
    document.getElementById('selectora').style.display = 'initial'
    document.getElementById('selectorb').style.display = 'initial'
    document.getElementById('selectorc').style.display = 'initial'
    document.getElementById('selectord').style.display = 'initial'
    select = true
}

function aday() {
    if (select) {
        document.getElementById('selectorb').style.display = 'none'
        document.getElementById('selectorc').style.display = 'none'
        document.getElementById('selectord').style.display = 'none'
        lunchtype = localStorage.getItem('adaylunch')
        daytype = 'a'
        select = false
    } else {
        daySelect()
    }
}
function bday() {
    if (select) {
        document.getElementById('selectora').style.display = 'none'
        document.getElementById('selectorc').style.display = 'none'
        document.getElementById('selectord').style.display = 'none'
        lunchtype = localStorage.getItem('bdaylunch')
        daytype = 'b'
        select = false
    } else {
        daySelect()
    }
}
function cday() {
    if (select) {
        document.getElementById('selectora').style.display = 'none'
        document.getElementById('selectorb').style.display = 'none'
        document.getElementById('selectord').style.display = 'none'
        lunchtype = localStorage.getItem('bdaylunch')
        daytype = 'c'
        select = false
    } else {
        daySelect()
    }
}
function dday() {
    if (select) {
        document.getElementById('selectora').style.display = 'none'
        document.getElementById('selectorb').style.display = 'none'
        document.getElementById('selectorc').style.display = 'none'
        lunchtype = localStorage.getItem('bdaylunch')
        daytype = 'd'
        select = false
    } else {
        daySelect()
    }
}

render()

function render() {
    var time = new Date()
    hr = time.getHours()
    min = time.getMinutes().toString()
    sec = time.getSeconds().toString()
    meridium = " AM"
    if (hr > 12) {
        hr -= 12
        meridium = " PM"
    }
    if (min.length === 1) {
        min = "0" + min
    }
    if (sec.length === 1) {
        sec = "0" + sec
    }
    document.getElementById('time').innerHTML = hr + ":" + min + ":" + sec + meridium

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    month = months[time.getMonth()]
    dayW = days[time.getDay()]
    day = time.getDate()
    document.getElementById('date').innerHTML = dayW + ", " + month + " " + day

    var periods = classes
    
    var adaya = ["7:05", "8:40", "8:45", "9:35", "9:40", "11:15", "11:20", "12:20", "12:25", "14:00", "23:59"]
    var adayb = ["7:05", "8:40", "8:45", "9:35", "9:40", "11:15", "11:20", "12:20", "12:25", "14:00", "23:59"]
    var bdaya = ["7:05", "8:40", "8:45", "9:35", "9:40", "11:15", "11:20", "12:20", "12:25", "14:00", "23:59"]
    var bdayb = ["7:05", "8:40", "8:45", "9:35", "9:40", "11:15", "11:20", "12:20", "12:25", "14:00", "23:59"]
    var cdaya = ["7:05", "7:45", "7:50", "8:20", "8:25", "9:05", "9:10", "9:50", "9:55", "10:35", "10:40", "11:30", "11:35", "12:15", "12:20", "13:00", "23:59"]
    var cdayb = ["7:05", "7:45", "7:50", "8:20", "8:25", "9:05", "9:10", "9:50", "9:55", "10:35", "10:40", "11:30", "11:35", "12:15", "12:20", "13:00", "23:59"]
    var ddaya = ["7:05", "7:55", "8:00", "8:30", "8:35", "9:25", "9:30", "10:20", "10:25", "11:15", "11:20", "12:10", "12:15", "13:05", "13:10", "14:00", "23:49"]
    var ddayb = ["7:05", "7:55", "8:00", "8:30", "8:35", "9:25", "9:30", "10:20", "10:25", "11:15", "11:20", "12:10", "12:15", "13:05", "13:10", "14:00", "23:49"]
    var oday = ["23:59"]

    var adayaC = ["Before School", periods[0], "Research Transition", "Research", "Period 3 Transition", periods[1], "Lunch Transition", "Lunch & Flex", "Period 4 Transition", periods[2], "After School"]
    var adaybC = ["Before School", periods[0], "Research Transition", "Research", "Period 3 Transition", periods[1], "Lunch Transition", "Lunch & Flex", "Period 4 Transition", periods[2], "After School"]
    var bdayaC = ["Before School", periods[3], "Research Transition", "Research", "Period 6 Transition", periods[4], "Lunch Transition", "Lunch & Flex", "Period 7 Transition", periods[5], "After School"]
    var bdaybC = ["Before School", periods[3], "Research Transition", "Research", "Period 6 Transition", periods[4], "Lunch Transition", "Lunch & Flex", "Period 7 Transition", periods[5], "After School"]
    var cdayaC = ["Before School", periods[0], "Research Transition", "Research", "Period 3 Transition", periods[1], "Period 4 Transition", periods[2], "Period 5 Transition", periods[3], "Lunch Transition", "Lunch & Flex", "Period 6 Transition", periods[4], "Period 7 Transition", periods[5], "After School"]
    var cdaybC = ["Before School", periods[0], "Research Transition", "Research", "Period 3 Transition", periods[1], "Period 4 Transition", periods[2], "Period 5 Transition", periods[3], "Lunch Transition", "Lunch & Flex", "Period 6 Transition", periods[4], "Period 7 Transition", periods[5], "After School"]
    var ddayaC = ["Before School", periods[0], "Research Transition", "Research", "Period 3 Transition", periods[1], "Period 4 Transition", periods[2], "Period 5 Transition", periods[3], "Lunch Transition", "Lunch & Flex", "Period 6 Transition", periods[4], "Period 7 Transition", periods[5], "After School"]
    var ddaybC = ["Before School", periods[0], "Research Transition", "Research", "Period 3 Transition", periods[1], "Period 4 Transition", periods[2], "Period 5 Transition", periods[3], "Lunch Transition", "Lunch & Flex", "Period 6 Transition", periods[4], "Period 7 Transition", periods[5], "After School"]
    var odayC = ["It's the Weekend!"]

    function cTime(typeArray, classArrayParameter) {
        var instance = 0
        var dayArray = typeArray
        var classArray = classArrayParameter

        dayArray = dayArray[instance].split(':')
        var endTime = dayArray[0] * 60 * 60 + dayArray[1] * 60
        var currentTime = time.getHours() * 60 * 60 + time.getMinutes() * 60 + time.getSeconds()

        while (endTime < currentTime) {
            instance++
            dayArray = typeArray
            dayArray = dayArray[instance].split(':')
            endTime = dayArray[0] * 60 * 60 + dayArray[1] * 60
        }

        if (instance > 0) {
            dayArray = typeArray
            dayArray = dayArray[instance - 1].split(':')
            minus = dayArray[0] * 60 * 60 + dayArray[1] * 60
            endTime -= minus
            currentTime -= minus
        }
        var difference = endTime - currentTime
        var differenceRef = difference

        var hrl = 0
        var minl = 0
        var secl = 0
        while (difference > 60*60) {
            difference -= 60*60
            hrl++
        }
        while (difference > 60) {
            difference -= 60
            minl++
        }
        while (difference > 1) {
            difference--
            secl++
        }
        minl = minl.toString()
        secl = secl.toString()
        if (minl.length === 1) {
            minl = "0" + minl
        }
        if (secl.length === 1) {
            secl = "0" + secl
        }
        if (hrl !== 0) {
            document.getElementById('remaining').innerHTML = hrl + ":" + minl + ":" + secl + " Remaining"
        } else if (minl !== '00') {
            document.getElementById('remaining').innerHTML = minl + ":" + secl + " Remaining"
        } else {
            document.getElementById('remaining').innerHTML = secl + " Seconds Remaining"
        }

        document.getElementById('class').innerHTML = classArray[instance]

        var dif = Math.abs((differenceRef - endTime)) / endTime
        
        document.getElementById('indicator').style = "width: " + (dif * 100) + "%"
    }


    if (daytype === "a" && lunchtype === "a") {
        cTime(adaya, adayaC)
    }
    if (daytype === "b" && lunchtype === "a") {
        cTime(bdaya, bdayaC)
    }
    if (daytype === "c" && lunchtype === "a") {
        cTime(cdaya, cdayaC)
    }
    if (daytype === "d" && lunchtype === "a") {
        cTime(ddaya, ddayaC)
    }
    if (daytype === "a" && lunchtype === "b") {
        cTime(adayb, adaybC)
    }
    if (daytype === "b" && lunchtype === "b") {
        cTime(bdayb, bdaybC)
    }
    if (daytype === "c" && lunchtype === "b") {
        cTime(cdayb, cdaybC)
    }
    if (daytype === "d" && lunchtype === "b") {
        cTime(ddayb, ddaybC)
    }
    if (daytype === "o") {
        cTime(oday, odayC)
    }

    setTimeout(render, 13)
}
