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
exports.NavigationFocusModule = exports.NavigationFocus = void 0;
const core_1 = require("@angular/core");
let uid = 0;
exports.NavigationFocus = (() => {
    let _classDecorators = [(0, core_1.Directive)({
            selector: '[focusOnNavigation]',
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _tabindex_decorators;
    let _tabindex_initializers = [];
    let _outline_decorators;
    let _outline_initializers = [];
    var NavigationFocus = _classThis = class {
        constructor(el, navigationFocusService) {
            this.el = (__runInitializers(this, _instanceExtraInitializers), el);
            this.navigationFocusService = navigationFocusService;
            this.tabindex = __runInitializers(this, _tabindex_initializers, '-1');
            this.outline = __runInitializers(this, _outline_initializers, 'none');
            if (!el.nativeElement.id) {
                el.nativeElement.id = `skip-link-target-${uid++}`;
            }
            this.navigationFocusService.requestFocusOnNavigation(el.nativeElement);
            this.navigationFocusService.requestSkipLinkFocus(el.nativeElement);
        }
        ngOnDestroy() {
            this.navigationFocusService.relinquishFocusOnNavigation(this.el.nativeElement);
            this.navigationFocusService.relinquishSkipLinkFocus(this.el.nativeElement);
        }
    };
    __setFunctionName(_classThis, "NavigationFocus");
    (() => {
        _tabindex_decorators = [(0, core_1.HostBinding)('tabindex')];
        _outline_decorators = [(0, core_1.HostBinding)('style.outline')];
        __esDecorate(null, null, _tabindex_decorators, { kind: "field", name: "tabindex", static: false, private: false, access: { has: obj => "tabindex" in obj, get: obj => obj.tabindex, set: (obj, value) => { obj.tabindex = value; } } }, _tabindex_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _outline_decorators, { kind: "field", name: "outline", static: false, private: false, access: { has: obj => "outline" in obj, get: obj => obj.outline, set: (obj, value) => { obj.outline = value; } } }, _outline_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        NavigationFocus = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NavigationFocus = _classThis;
})();
exports.NavigationFocusModule = (() => {
    let _classDecorators_1 = [(0, core_1.NgModule)({
            declarations: [NavigationFocus],
            exports: [NavigationFocus],
        })];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    var NavigationFocusModule = _classThis_1 = class {
    };
    __setFunctionName(_classThis_1, "NavigationFocusModule");
    (() => {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        NavigationFocusModule = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return NavigationFocusModule = _classThis_1;
})();
