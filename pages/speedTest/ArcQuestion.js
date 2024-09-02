delete window.ArcQuestion;

window.ArcQuestion = class ArcQuestion {
    constructor(degree, type, isRadian) {
        this.degree = degree;
        this.type = type;
        this.isRadian = isRadian;
    }

    romanize(reveal) {
        var functionInput = KEY_REG[this.degree][this.type];

        if (functionInput == "DNE") {
            functionInput = "∞";
        }

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

        output += "⁻¹";
        output += `(${functionInput})`;

        if (reveal) {
            var degWrap;

            if (this.type == 0) {
                //sine
                if (this.degree > 90 && this.degree <= 180) {
                    //second quadrant
                    degWrap = 180 - this.degree;
                } else if (this.degree > 180 && this.degree <= 270) {
                    //third quadrant
                    degWrap = -(90 - (270 - this.degree));
                } else if (this.degree > 270 && this.degree <= 360) {
                    //fourth quadrant
                    degWrap = -(360 - this.degree);
                } else {
                    degWrap = this.degree;
                }
            } else if (this.type == 2) {
                //tangent
                if (this.degree > 90 && this.degree <= 180) {
                    //second quadrant
                    degWrap = this.degree - 180;
                } else if (this.degree > 180 && this.degree <= 270) {
                    //third quadrant
                    degWrap = this.degree - 180;
                } else if (this.degree > 270 && this.degree <= 360) {
                    //fourth quadrant
                    degWrap = this.degree - 360;
                } else {
                    degWrap = this.degree;
                }
            } else if (this.type == 1) {
                //cosine
                if (this.degree > 180 && this.degree <= 270) {
                    //third quadrant
                    degWrap = 90 + (270 - this.degree);
                } else if (this.degree > 270 && this.degree <= 360) {
                    //fourth quadrant
                    degWrap = 360 - this.degree;
                } else {
                    degWrap = this.degree;
                }
            }

            output += `      ${degWrap} / ${degWrap > 0 ? TO_RADIAN[degWrap] : "-" + TO_RADIAN[Math.abs(degWrap)]}`;
        }

        return output;
    }
}