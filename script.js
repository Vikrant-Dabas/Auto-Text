let text = document.querySelector('.text');
let speed = document.querySelector('#speed');
const s = "Hello@There,@I@am@Vikrant@Dabas"
let i = 0, len = s.length;
let currInterval;
speed.addEventListener('change', () => {
    if (speed.value < 1) speed.value = 1;
    change(speed.value);
});
window.addEventListener('load', () => {
    speed.value = 1;
    change(1);
})

function change(currSpeed) {
    if (currSpeed < 1) currSpeed = 1;
    clearInterval(currInterval)
    currInterval = setInterval(() => {
        if (i < len) {
            if (s[i] == '@') text.textContent += '\u00a0';
            else text.innerText += s[i];
            i++;
        }
        else {
            text.innerText = "";
            i = 0;
        }
    }, 1000 / currSpeed);
}
