delete window.RegQuestion;

window.RegQuestion = class RegQuestion {
    constructor(degree, type, isRadian) {
        this.degree = degree;
        this.type = type;
        this.isRadian = isRadian;
    }

    romanize(reveal) {
        var output = "";

        switch (this.type) {
            case 0:
                output += "sin";
                break;
            case 1:
                output += "cos";
                break;
            case 2:
                output += "tan";
                break;
        }

        output += `(${this.isRadian ? TO_RADIAN[this.degree] : this.degree})`;

        if (reveal) {
            output += `    ${KEY_REG[this.degree][this.type]}`;
        }

        return output;
    }
}