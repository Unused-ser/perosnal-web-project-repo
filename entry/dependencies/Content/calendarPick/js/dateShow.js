function timeShow() {

    let date = new Date();
    let times = document.getElementsByName("date");

    let i = 1;
    for (let showTime of times) {
        showTime.innerHTML = `<p>${i}</p>`;
        i++;
    }
}

timeShow();

function mert() {
    let select = document.getElementById("monthpick");

    let options = select.options;
    if (Number(options[options.selectedIndex].value) % 2 === 0) {
        alert("good");
    }
}
document.getElementById("monthpick").addEventListener("change", mert);

