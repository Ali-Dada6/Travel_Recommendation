const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
const newYorkTime = new Date().toLocaleTimeString('en-US', options);
console.log("Current time in New York:", newYorkTime);

Reset = document.getElementById("btnReset");
function ResetText() {
    Reset.value = '';
}
Reset.addEventListener('click', ResetText) 