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
exports.ComponentHeaderModule = exports.ComponentPageHeader = void 0;
const core_1 = require("@angular/core");
const navigation_focus_1 = require("../../shared/navigation-focus/navigation-focus");
const button_1 = require("@angular/material/button");
const icon_1 = require("@angular/material/icon");
exports.ComponentPageHeader = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'component-page-header',
            templateUrl: './component-page-header.html',
            styleUrls: ['./component-page-header.scss']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _toggleSidenav_decorators;
    let _toggleSidenav_initializers = [];
    var ComponentPageHeader = _classThis = class {
        constructor(_componentPageTitle) {
            this._componentPageTitle = (__runInitializers(this, _instanceExtraInitializers), _componentPageTitle);
            this.toggleSidenav = __runInitializers(this, _toggleSidenav_initializers, new core_1.EventEmitter());
        }
        getTitle() {
            return this._componentPageTitle.title;
        }
    };
    __setFunctionName(_classThis, "ComponentPageHeader");
    (() => {
        _toggleSidenav_decorators = [(0, core_1.Output)()];
        __esDecorate(null, null, _toggleSidenav_decorators, { kind: "field", name: "toggleSidenav", static: false, private: false, access: { has: obj => "toggleSidenav" in obj, get: obj => obj.toggleSidenav, set: (obj, value) => { obj.toggleSidenav = value; } } }, _toggleSidenav_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ComponentPageHeader = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ComponentPageHeader = _classThis;
})();
exports.ComponentHeaderModule = (() => {
    let _classDecorators_1 = [(0, core_1.NgModule)({
            imports: [button_1.MatButtonModule, icon_1.MatIconModule, navigation_focus_1.NavigationFocusModule],
            exports: [ComponentPageHeader],
            declarations: [ComponentPageHeader],
        })];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    var ComponentHeaderModule = _classThis_1 = class {
    };
    __setFunctionName(_classThis_1, "ComponentHeaderModule");
    (() => {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        ComponentHeaderModule = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return ComponentHeaderModule = _classThis_1;
})();
