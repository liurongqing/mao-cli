"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvgViewerModule = exports.SvgViewer = void 0;
const core_1 = require("@angular/core");
exports.SvgViewer = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'docs-svg-viewer',
            template: '<div class="docs-svg-viewer" aria-hidden="true"></div>',
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _src_decorators;
    let _src_initializers = [];
    let _scaleToContainer_decorators;
    let _scaleToContainer_initializers = [];
    var SvgViewer = _classThis = class {
        constructor(elementRef, http) {
            this.elementRef = (__runInitializers(this, _instanceExtraInitializers), elementRef);
            this.http = http;
            this.src = __runInitializers(this, _src_initializers, void 0);
            this.scaleToContainer = __runInitializers(this, _scaleToContainer_initializers, void 0);
        }
        ngOnInit() {
            this.fetchAndInlineSvgContent(this.src);
        }
        inlineSvgContent(template) {
            this.elementRef.nativeElement.innerHTML = template;
            if (this.scaleToContainer) {
                const svg = this.elementRef.nativeElement.querySelector('svg');
                svg.setAttribute('width', '100%');
                svg.setAttribute('height', '100%');
                svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
            }
        }
        fetchAndInlineSvgContent(path) {
            const svgAbsPath = getAbsolutePathFromSrc(path);
            this.http.get(svgAbsPath, { responseType: 'text' }).subscribe(svgResponse => {
                this.inlineSvgContent(svgResponse);
            });
        }
    };
    __setFunctionName(_classThis, "SvgViewer");
    (() => {
        _src_decorators = [(0, core_1.Input)()];
        _scaleToContainer_decorators = [(0, core_1.Input)()];
        __esDecorate(null, null, _src_decorators, { kind: "field", name: "src", static: false, private: false, access: { has: obj => "src" in obj, get: obj => obj.src, set: (obj, value) => { obj.src = value; } } }, _src_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _scaleToContainer_decorators, { kind: "field", name: "scaleToContainer", static: false, private: false, access: { has: obj => "scaleToContainer" in obj, get: obj => obj.scaleToContainer, set: (obj, value) => { obj.scaleToContainer = value; } } }, _scaleToContainer_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        SvgViewer = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SvgViewer = _classThis;
})();
function getAbsolutePathFromSrc(src) {
    return src.slice(src.indexOf('assets/') - 1);
}
exports.SvgViewerModule = (() => {
    let _classDecorators_1 = [(0, core_1.NgModule)({
            exports: [SvgViewer],
            declarations: [SvgViewer],
        })];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    var SvgViewerModule = _classThis_1 = class {
    };
    __setFunctionName(_classThis_1, "SvgViewerModule");
    (() => {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        SvgViewerModule = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return SvgViewerModule = _classThis_1;
})();
