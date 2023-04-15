"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlignPlugin = void 0;
class AlignPlugin extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
        super(scene, pluginManager);
        this.depth = 9999;
    }
    envelop(obj, scale) {
        const { width, height } = this.scene.scale;
        const windowRadio = width / height;
        let mode = 'vw';
        if (window.designRatio && windowRadio < window.designRatio) {
            mode = 'vh';
        }
        this[mode](obj, scale);
    }
    vw(obj, scale) {
        const { width } = this.scene.scale;
        obj.displayWidth = width * scale;
        obj.scaleY = obj.scaleX;
    }
    vh(obj, scale) {
        const { height } = this.scene.scale;
        obj.displayHeight = height * scale;
        obj.scaleX = obj.scaleY;
    }
    placeAt(obj, row, col, origin = [0.5, 0.5]) {
        const x = this.cellWidth * col + this.cellWidth * origin[0];
        const y = this.cellHeight * row + this.cellHeight * origin[1];
        obj.setPosition(x, y);
    }
    placeAtIndex(obj, index, origin = [0.5, 0.5]) {
        const row = Math.floor(index / this.cols);
        const col = index - (row * this.cols);
        this.placeAt(obj, row, col, origin);
    }
    grid({ rows = 5, cols = 5, color = 0xff0000, debug = true }) {
        const { width, height } = this.scene.scale;
        this.rows = rows;
        this.cols = cols;
        this.color = Phaser.Display.Color.ValueToColor(color);
        this.cellWidth = width / cols;
        this.cellHeight = height / rows;
        if (debug)
            this.debug();
    }
    debug() {
        this.drawLine();
        let count = 0;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let numText = this.scene.add.text(0, 0, String(count), { color: this.color.rgba });
                numText.setOrigin(0.5).setDepth(this.depth);
                this.placeAtIndex(numText, count);
                count++;
            }
        }
    }
    drawLine() {
        const { width, height } = this.scene.scale;
        this.graphics = this.scene.add.graphics();
        this.graphics.lineStyle(2, this.color.color);
        for (let i = 0; i < width; i += this.cellWidth) {
            this.graphics.moveTo(i, 0);
            this.graphics.lineTo(i, height);
        }
        for (let i = 0; i < height; i += this.cellHeight) {
            this.graphics.moveTo(0, i);
            this.graphics.lineTo(width, i);
        }
        this.graphics.strokePath();
        this.graphics.setDepth(this.depth);
    }
}
exports.AlignPlugin = AlignPlugin;
