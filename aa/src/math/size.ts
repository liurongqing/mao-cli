export class Size {
  public static ZERO = Object.freeze(new Size(0, 0));

  constructor(public width = 0, public height = 0) {
    this.width = width;
    this.height = height;
  }

  clone() {
    return new Size(this.width, this.height);
  }

  public set(width = 0, height = 0) {
    this.width = width;
    this.height = height;
    return this;
  }

  public equals(other: Size) {
    return this.width === other.width && this.height === other.height;
  }

  /**
   * 插值
   */
  public lerp(to: Size, ratio: number) {
    this.width += (to.width - this.width) * ratio;
    this.height += (to.height - this.height) * ratio;
    return this;
  }

  public toString() {
    return `(${this.width.toFixed(2)}, ${this.height.toFixed(2)})`;
  }
}

export const size = (width?: number, height?: number) => {
  return new Size(width, height);
};
