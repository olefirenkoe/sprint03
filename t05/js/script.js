function Calculator() {
    this.result = 0;
    this.init = function(a) {
        this.result = a;
        return this;
    }
    this.add = function(a) {
        this.result += a;
        return this;
    }
    this.mul = function(a) {
        this.result *= a;
        return this;
    }
    this.div = function(a) {
        this.result /= a;
        return this;
    }
    this.sub = function(a) {
        this.result -= a;
        return this;
    }
    this.alert = function(a) {
        setTimeout(() => alert(this.result), 5000);
    }
}

const calc = new Calculator();

console.log(
    calc
    .init(2)
    .add(2)
    .mul(3)
    .div(4)
    .sub(2).result // 1
);
calc.alert();