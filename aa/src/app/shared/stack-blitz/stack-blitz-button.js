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
exports.StackBlitzButtonModule = exports.StackBlitzButton = void 0;
const core_1 = require("@angular/core");
const posts_1 = require("../../../posts");
const button_1 = require("@angular/material/button");
const icon_1 = require("@angular/material/icon");
const tooltip_1 = require("@angular/material/tooltip");
const stack_blitz_writer_1 = require("./stack-blitz-writer");
exports.StackBlitzButton = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'stack-blitz-button',
            templateUrl: './stack-blitz-button.html',
            providers: [stack_blitz_writer_1.StackBlitzWriter],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _onMouseOver_decorators;
    let _set_example_decorators;
    var StackBlitzButton = _classThis = class {
        onMouseOver() {
            this.isDisabled = !this.stackBlitzForm;
        }
        set example(example) {
            this.exampleData = new posts_1.ExampleData(example);
            if (example) {
                this.stackBlitzWriter.constructStackBlitzForm(example, this.exampleData)
                    .then((stackBlitzForm) => {
                    this.stackBlitzForm = stackBlitzForm;
                    this.isDisabled = false;
                });
            }
            else {
                this.isDisabled = true;
            }
        }
        constructor(stackBlitzWriter) {
            this.stackBlitzWriter = (__runInitializers(this, _instanceExtraInitializers), stackBlitzWriter);
            /**
             * The button becomes disabled if the user hovers over the button before the StackBlitz form
             * is created. After the form is created, the button becomes enabled again.
             * The form creation usually happens extremely quickly, but we handle the case of the
             * StackBlitz not yet being ready for people with poor network connections or slow devices.
             */
            this.isDisabled = false;
        }
        openStackBlitz() {
            // When the form is submitted, it must be in the document body. The standard of forms is not
            // to submit if it is detached from the document. See the following chromium commit for
            // more details:
            // https://chromium.googlesource.com/chromium/src/+/962c2a22ddc474255c776aefc7abeba00edc7470%5E!
            document.body.appendChild(this.stackBlitzForm);
            this.stackBlitzForm.submit();
            document.body.removeChild(this.stackBlitzForm);
        }
    };
    __setFunctionName(_classThis, "StackBlitzButton");
    (() => {
        _onMouseOver_decorators = [(0, core_1.HostListener)('mouseover')];
        _set_example_decorators = [(0, core_1.Input)()];
        __esDecorate(_classThis, null, _onMouseOver_decorators, { kind: "method", name: "onMouseOver", static: false, private: false, access: { has: obj => "onMouseOver" in obj, get: obj => obj.onMouseOver } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _set_example_decorators, { kind: "setter", name: "example", static: false, private: false, access: { has: obj => "example" in obj, set: (obj, value) => { obj.example = value; } } }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        StackBlitzButton = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StackBlitzButton = _classThis;
})();
exports.StackBlitzButtonModule = (() => {
    let _classDecorators_1 = [(0, core_1.NgModule)({
            imports: [tooltip_1.MatTooltipModule, button_1.MatButtonModule, icon_1.MatIconModule],
            exports: [StackBlitzButton],
            declarations: [StackBlitzButton],
            providers: [stack_blitz_writer_1.StackBlitzWriter],
        })];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    var StackBlitzButtonModule = _classThis_1 = class {
    };
    __setFunctionName(_classThis_1, "StackBlitzButtonModule");
    (() => {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        StackBlitzButtonModule = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return StackBlitzButtonModule = _classThis_1;
})();
