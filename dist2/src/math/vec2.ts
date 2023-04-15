export class Vec2 {
  constructor(private x = 0, private y = 0) {
    this.x = x;
    this.y = y;
  }

  public clone() {
    return new Vec2(this.x, this.y);
  }

  public set(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    return this;
  }

  public strictEquals(other: Vec2) {
    return other && this.x === other.x && this.y === other.y;
  }

  public strictEquals2f(x: number, y: number) {
    return this.x === x && this.y === y;
  }

  public toString() {
    return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
  }

  // 插值动画
  public lerp(to: Vec2, ratio: number) {
    this.x += (to.x - this.x) * ratio;
    this.y += (to.y - this.y) * ratio;
  }

  // 向量值在一定的范围内
  public clampf() {}

  public add(other: Vec2) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  public add2f(x: number, y: number) {
    this.x += x;
    this.y += y;
    return this;
  }

  public subtract(other: Vec2) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  public subtract2f(x: number, y: number) {
    this.x -= x;
    this.y -= y;
    return this;
  }

  public multiply(other: Vec2) {
    this.x *= other.x;
    this.y *= other.y;
    return this;
  }

  // f factor
  public multiply2f(x: number, y: number) {
    this.x *= x;
    this.y *= y;
    return this;
  }
}

export const v2 = (x?: number, y?: number) => {
  return new Vec2(x, y);
};

console.log(v2(100, 300));
