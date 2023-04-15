var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AlignPlugin = /** @class */ (function (_super) {
    __extends(AlignPlugin, _super);
    function AlignPlugin(scene, pluginManager) {
        var _this = _super.call(this, scene, pluginManager) || this;
        _this.depth = 9999;
        return _this;
    }
    AlignPlugin.prototype.envelop = function (obj, scale) {
        var _a = this.scene.scale, width = _a.width, height = _a.height;
        var windowRadio = width / height;
        var mode = 'vw';
        if (window.designRatio && windowRadio < window.designRatio) {
            mode = 'vh';
        }
        this[mode](obj, scale);
    };
    AlignPlugin.prototype.vw = function (obj, scale) {
        var width = this.scene.scale.width;
        obj.displayWidth = width * scale;
        obj.scaleY = obj.scaleX;
    };
    AlignPlugin.prototype.vh = function (obj, scale) {
        var height = this.scene.scale.height;
        obj.displayHeight = height * scale;
        obj.scaleX = obj.scaleY;
    };
    AlignPlugin.prototype.placeAt = function (obj, row, col, origin) {
        if (origin === void 0) { origin = [0.5, 0.5]; }
        var x = this.cellWidth * col + this.cellWidth * origin[0];
        var y = this.cellHeight * row + this.cellHeight * origin[1];
        obj.setPosition(x, y);
    };
    AlignPlugin.prototype.placeAtIndex = function (obj, index, origin) {
        if (origin === void 0) { origin = [0.5, 0.5]; }
        var row = Math.floor(index / this.cols);
        var col = index - (row * this.cols);
        this.placeAt(obj, row, col, origin);
    };
    AlignPlugin.prototype.grid = function (_a) {
        var _b = _a.rows, rows = _b === void 0 ? 5 : _b, _c = _a.cols, cols = _c === void 0 ? 5 : _c, _d = _a.color, color = _d === void 0 ? 0xff0000 : _d, _e = _a.debug, debug = _e === void 0 ? true : _e;
        var _f = this.scene.scale, width = _f.width, height = _f.height;
        this.rows = rows;
        this.cols = cols;
        this.color = Phaser.Display.Color.ValueToColor(color);
        this.cellWidth = width / cols;
        this.cellHeight = height / rows;
        if (debug)
            this.debug();
    };
    AlignPlugin.prototype.debug = function () {
        this.drawLine();
        var count = 0;
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++) {
                var numText = this.scene.add.text(0, 0, String(count), { color: this.color.rgba });
                numText.setOrigin(0.5).setDepth(this.depth);
                this.placeAtIndex(numText, count);
                count++;
            }
        }
    };
    AlignPlugin.prototype.drawLine = function () {
        var _a = this.scene.scale, width = _a.width, height = _a.height;
        this.graphics = this.scene.add.graphics();
        this.graphics.lineStyle(2, this.color.color);
        for (var i = 0; i < width; i += this.cellWidth) {
            this.graphics.moveTo(i, 0);
            this.graphics.lineTo(i, height);
        }
        for (var i = 0; i < height; i += this.cellHeight) {
            this.graphics.moveTo(0, i);
            this.graphics.lineTo(width, i);
        }
        this.graphics.strokePath();
        this.graphics.setDepth(this.depth);
    };
    return AlignPlugin;
}(Phaser.Plugins.ScenePlugin));
export { AlignPlugin };
