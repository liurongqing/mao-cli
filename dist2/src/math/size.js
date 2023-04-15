"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.size = exports.Size = void 0;
class Size {
    constructor(width = 0, height = 0) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    clone() {
        return new Size(this.width, this.height);
    }
    set(width = 0, height = 0) {
        this.width = width;
        this.height = height;
        return this;
    }
    equals(other) {
        return this.width === other.width && this.height === other.height;
    }
    /**
     * 插值
     */
    lerp(to, ratio) {
        this.width += (to.width - this.width) * ratio;
        this.height += (to.height - this.height) * ratio;
        return this;
    }
    toString() {
        return `(${this.width.toFixed(2)}, ${this.height.toFixed(2)})`;
    }
}
Size.ZERO = Object.freeze(new Size(0, 0));
exports.Size = Size;
const size = (width, height) => {
    return new Size(width, height);
};
exports.size = size;
