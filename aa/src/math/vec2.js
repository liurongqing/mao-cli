"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v2 = exports.Vec2 = void 0;
class Vec2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    clone() {
        return new Vec2(this.x, this.y);
    }
    set(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        return this;
    }
    strictEquals(other) {
        return other && this.x === other.x && this.y === other.y;
    }
    strictEquals2f(x, y) {
        return this.x === x && this.y === y;
    }
    toString() {
        return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
    // 插值动画
    lerp(to, ratio) {
        this.x += (to.x - this.x) * ratio;
        this.y += (to.y - this.y) * ratio;
    }
    // 向量值在一定的范围内
    clampf() { }
    add(other) {
        this.x += other.x;
        this.y += other.y;
        return this;
    }
    add2f(x, y) {
        this.x += x;
        this.y += y;
        return this;
    }
    subtract(other) {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    }
    subtract2f(x, y) {
        this.x -= x;
        this.y -= y;
        return this;
    }
    multiply(other) {
        this.x *= other.x;
        this.y *= other.y;
        return this;
    }
    // f factor
    multiply2f(x, y) {
        this.x *= x;
        this.y *= y;
        return this;
    }
}
exports.Vec2 = Vec2;
const v2 = (x, y) => {
    return new Vec2(x, y);
};
exports.v2 = v2;
console.log((0, exports.v2)(100, 300));
