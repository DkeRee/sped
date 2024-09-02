
var wind = new window.SpeedTest();
wind.display(false);

var generate = document.getElementById("generate");
var answer = document.getElementById("answer");
var p = document.getElementById("p-button");
var revealed = false;

generate.addEventListener("mousedown", () => {
    wind.create();
    wind.display(false);

    revealed = false;
    answer.children[0].textContent = "Reveal";
});

answer.addEventListener("mousedown", () => {
    if (wind.grid.length > 0) {
        revealed = !revealed;
        wind.display(revealed);
    
        if (revealed) {
            answer.children[0].textContent = "Hide";
        } else {
            answer.children[0].textContent = "Reveal";
        }
    }
});

p.addEventListener("mousedown", () => {
    window.print();
});