delete window.RadQuestion;

window.RadQuestion = class RadQuestion {
    constructor(degree) {
        this.degree = degree;
    }

    romanize(reveal) {
        var output = "";

        output += TO_RADIAN[this.degree];

        if (reveal) {
            output += `      ${this.degree}`;
        }

        return output;
    }
}