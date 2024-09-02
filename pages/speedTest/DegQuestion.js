delete window.DegQuestion;

window.DegQuestion = class DegQuestion {
    constructor(degree) {
        this.degree = degree;
    }

    romanize(reveal) {
        var output = "";

        output += this.degree.toString();

        if (reveal) {
            output += `    ${TO_RADIAN[this.degree]}`;
        }

        return output;
    }
}