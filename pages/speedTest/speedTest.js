delete window.SpeedTest;

window.SpeedTest = class SpeedTest {
    constructor() {
        this.SIN = 0;
        this.COS = 1;
        this.TAN = 2;
        this.deg = [30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];

        this.grid = [];
    }

    randRange(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }

    create() {
        for (var i = 0; i < 80; i++) {
            const pick = this.randRange(0, 3);
            var question;

            switch (pick) {
                case 0:
                    question = new window.RegQuestion(
                        this.deg[this.randRange(0, this.deg.length - 1)],
                        this.randRange(0, 2),
                        Math.random() > 0.5 ? 1 : 0
                    );
                    break;
                case 1:
                    question = new window.ArcQuestion(
                        this.deg[this.randRange(0, this.deg.length - 1)],
                        this.randRange(0, 2),
                        Math.random() > 0.5 ? 1 : 0
                    );
                    break;
                case 2:
                    question = new window.DegQuestion(this.deg[this.randRange(0, this.deg.length - 1)]);
                    break;
                case 3:
                    question = new window.RadQuestion(this.deg[this.randRange(0, this.deg.length - 1)]);
                    break;
            }

            this.grid.push(question);
        }
    }

    display(reveal) {
        const firstContainer = document.getElementsByClassName("content-wrapper")[0];
        const test = document.getElementById("test-container");

        if (test)
            test.remove();

        const div = document.createElement("div");
        div.setAttribute("id", "test-container");

        for (var i = 0; i < 80; i++) {
            const questionDisplay = document.createElement("div");

            if (this.grid[i])
                questionDisplay.textContent = this.grid[i].romanize(reveal);

            test.appendChild(questionDisplay);
        }

        firstContainer.appendChild(test);
    }
}

var t = new window.SpeedTest();
t.create();
t.display(true);