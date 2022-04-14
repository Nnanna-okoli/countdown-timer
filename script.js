// created variable constants to get the numbers elements by ID
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

//Set the desired date for the countdown in a constant variable
const newYears = '1 Jan 2023';

//created a function called countdown and stored a set of instructions
function countdown() {
    
    // by default JavaScript stores the current date in new date() constructor
    const currentDate = new Date();
    //passed new years date into the date constructor and stored it into var
    const newYearsDate = new Date(newYears);

    /* to get totalseconds till new year substract new years date from 
    current date then multiply by 1000 from ms to s */
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    //math.floor rounds down the decimals numbers to its nearest whole number
    // stores the answers in their corresponding variables 
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    /* innerHTML replaces original content stored in the variables selected by ID 
    with the new variables forumated to the right of the equation */
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}
/* formatTime function checks if time is less than 10 seconds add a 0 
before the time if not then just display the time figure*/
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//calls the function
countdown();

setInterval(countdown, 1000);