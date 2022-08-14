// 1. Build it from "scratch"
// 2. Follow the design
// 3. Make all six button work
// stretch-1. Add a "New Game" button
// stretch-2. Highlight the leader
// stretch-3. Add a few more counters (e.g. period, fouls, timer)
// stretch-4. Chagne the design
// Figma: https://www.figma.com/file/1JrG4AGFx2BEvxT3YARFiR/Basketball-Scoreboard-(Copy)?node-id=0%3A1
// Help section: https://projects.scrimba.com/basketball-scoreboard

// **Score
let homeScore = document.querySelector("#home-score")
let guestScore = document.getElementById('guest-score')

const homePlus1 = document.getElementById('home-plus1')
const homePlus2 = document.getElementById('home-plus2')
const homePlus3 = document.getElementById('home-plus3')
const guestPlus1 = document.getElementById('guest-plus1')
const guestPlus2 = document.getElementById('guest-plus2')
const guestPlus3 = document.getElementById('guest-plus3')

let homeCount = 0
let guestCount = 0

function runTheScore(){
    homePlus1.addEventListener('click', function(){
        homeCount += 1
        homeScore.innerText = homeCount
    })
    homePlus2.addEventListener('click', function(){
        homeCount += 2
        homeScore.innerText = homeCount
    })
    homePlus3.addEventListener('click', function(){
        homeCount += 3
        homeScore.innerText = homeCount
    })
    guestPlus1.addEventListener('click', function(){
        guestCount += 1
        guestScore.innerText = guestCount
    })
    guestPlus2.addEventListener('click', function(){
        guestCount += 2
        guestScore.innerText = guestCount
    })
    guestPlus3.addEventListener('click', function(){
        guestCount += 3
        guestScore.innerText = guestCount
    })
}


// **Fouls
const homefoulBtn = document.querySelector('#homefoul-btn')
const guestfoulBtn = document.querySelector('#guestfoul-btn')

let homeFoulCount = 0
let guestFoulCount = 0

function runTheFouls(){
    homefoulBtn.addEventListener('click', function(){
        homeFoulCount += 1
        homefoulBtn.innerText = homeFoulCount
    })
    guestfoulBtn.addEventListener('click', function(){
        guestFoulCount += 1
        guestfoulBtn.innerText = guestFoulCount
    })
}


// **Timer  'time'
let timer = document.getElementById('time')

function tenMinCountdown(){
    function countdown(elementName, minutes, seconds){
        let element, endTime, hours, mins, msleft, time;
        function twoDigits(n){
            return (n <= 9 ? "0" + n : n);
        }
        function updateTimer(){
            msLeft = endTime - (+new Date);
            if(msLeft < 1000){
                element.innerHTML = "Time's up!"
            }else{
                time = new Date(msLeft)
                hours = time.getUTCHours();
                mins = time.getUTCMinutes();
                element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds());
                setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
            }
        }
        element = document.getElementById(elementName);
        endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
        updateTimer();
    }
    countdown("time", 10, 0);
}


// **Period  'period-btn'
const periodBtn = document.querySelector('#period-btn')

let periodQuart = 1

function nextPeriod(){
    periodBtn.addEventListener('click', function(){
        periodQuart += 1
        periodBtn.innerText = periodQuart
        tenMinCountdown()
    })
    
}


// **Start Game
const startBtn = document.getElementById('start-btn')

startBtn.addEventListener('click', function(){
    renderGame()
})

function renderGame(){
    tenMinCountdown()
    runTheScore()
    runTheFouls()
    nextPeriod()
}


// **New Game  "new-btn"
const newBtn = document.querySelector('#new-btn')

newBtn.addEventListener('click',function(){
    window.location.reload()
})


// **highlight  homeCount = home-background & guestCount = guest-background  #EEEEEE solid 4px
// function leader(){
//     if(homeCount > guestCount){
//         let homeBackground = document.getElementById('home-background')
//         homeBackground = css({
//             border: '#EEEEEE solid 4px'
//         });
//     }else if (homeCount < guestCount){
//         let guestBackground = document.getElementById('guest-background')
//         guestBackground = css({
//             border: '#EEEEEE solid 4px'
//         });
//     }else{
        
//     }
// }