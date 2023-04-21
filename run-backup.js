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
    
    var adaya = ["7:10", "7:40", "7:45", "9:15", "9:25", "10:05", "10:10", "10:55", "11:00", "12:30", "12:40", "14:10", "23:59"]
    var adayb = ["7:10", "7:40", "7:45", "9:15", "9:25", "10:05", "10:10", "11:40", "11:45", "12:30", "12:40", "14:10", "23:59"]
    var bdaya = ["7:10", "7:40", "7:45", "9:15", "9:25", "10:05", "10:10", "10:55", "11:00", "12:30", "12:40", "14:10", "23:59"]
    var bdayb = ["7:10", "7:40", "7:45", "9:15", "9:25", "10:05", "10:10", "11:40", "11:45", "12:30", "12:40", "14:10", "23:59"]
    var cdaya = ["7:10", "7:56", "8:04", "8:50", "8:58", "9:44", "9:52", "10:38", "10:43", "11:24", "11:29", "12:15", "12:24", "13:10", "23:59"]
    var cdayb = ["7:10", "7:56", "8:04", "8:50", "8:58", "9:44", "9:52", "10:38", "10:43", "11:29", "11:34", "12:15", "12:24", "13:10", "23:59"]
    var ddaya = ["7:10", "8:06", "8:14", "9:10", "9:18", "10:14", "10:22", "11:18", "11:23", "12:05", "12:10", "13:06", "13:14", "14:10", "23:59"]
    var ddayb = ["7:10", "8:06", "8:14", "9:10", "9:18", "10:14", "10:22", "11:18", "11:23", "12:19", "12:24", "13:06", "13:14", "14:10", "23:59"]
    var oday = ["23:59"]

    var adayaC = ["Before School", "Flex", "Period 1 Transition", periods[0], "Research Transition", "Research", "Lunch Transition", "Lunch", "Period 2 Transition", periods[1], "Period 3 Transition", periods[2], "After School"]
    var adaybC = ["Before School", "Flex", "Period 1 Transition", periods[0], "Research Transition", "Research", "Period 2 Transition", periods[1], "Lunch Transition", "Lunch", "Period 3 Transition", periods[2], "After School"]
    var bdayaC = ["Before School", "Flex", "Period 4 Transition", periods[3], "Research Transition", "Research", "Lunch Transition", "Lunch", "Period 5 Transition", periods[4], "Period 6 Transition", periods[5], "After School"]
    var bdaybC = ["Before School", "Flex", "Period 4 Transition", periods[3], "Research Transition", "Research", "Period 5 Transition", periods[4], "Lunch Transition", "Lunch", "Period 6 Transition", periods[5], "After School"]
    var cdayaC = ["Before School", periods[0], "Period 2 Transition", periods[1], "Period 3 Transition", periods[2], "Period 4 Transition", periods[3], "Lunch Transition", "Lunch", "Period 5 Transition", periods[4], "Period 6 Transition", periods[5], "After School"]
    var cdaybC = ["Before School", periods[0], "Period 2 Transition", periods[1], "Period 3 Transition", periods[2], "Period 4 Transition", periods[3], "Period 5 Transition", periods[4], "Lunch Transition", "Lunch", "Period 6 Transition", periods[5], "After School"]
    var ddayaC = ["Before School", periods[0], "Period 2 Transition", periods[1], "Period 3 Transition", periods[2], "Period 4 Transition", periods[3], "Lunch Transition", "Lunch", "Period 5 Transition", periods[4], "Period 6 Transition", periods[5], "After School"]
    var ddaybC = ["Before School", periods[0], "Period 2 Transition", periods[1], "Period 3 Transition", periods[2], "Period 4 Transition", periods[3], "Period 5 Transition", periods[4], "Lunch Transition", "Lunch", "Period 6 Transition", periods[5], "After School"]
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