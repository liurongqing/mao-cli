"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentCategoryListModule = exports.ComponentCategoryList = void 0;
const core_1 = require("@angular/core");
const card_1 = require("@angular/material/card");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const documentation_items_1 = require("../../shared/documentation-items/documentation-items");
const svg_viewer_1 = require("../../shared/svg-viewer/svg-viewer");
const rxjs_1 = require("rxjs");
const navigation_focus_1 = require("../../shared/navigation-focus/navigation-focus");
exports.ComponentCategoryList = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-component-category-list',
            templateUrl: './component-category-list.html',
            styleUrls: ['./component-category-list.scss']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ComponentCategoryList = _classThis = class {
        constructor(docItems, _componentPageTitle, _route) {
            this.docItems = docItems;
            this._componentPageTitle = _componentPageTitle;
            this._route = _route;
        }
        ngOnInit() {
            // Combine params from all of the path into a single object.
            this.params = (0, rxjs_1.combineLatest)(this._route.pathFromRoot.map(route => route.params), Object.assign);
            // title on topbar navigation
            this.routeParamSubscription = this.params.subscribe(params => {
                const sectionName = params['section'];
                const section = documentation_items_1.SECTIONS[sectionName];
                this._componentPageTitle.title = section.name;
                this._categoryListSummary = section.summary;
            });
        }
        ngOnDestroy() {
            if (this.routeParamSubscription) {
                this.routeParamSubscription.unsubscribe();
            }
        }
    };
    __setFunctionName(_classThis, "ComponentCategoryList");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ComponentCategoryList = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ComponentCategoryList = _classThis;
})();
exports.ComponentCategoryListModule = (() => {
    let _classDecorators_1 = [(0, core_1.NgModule)({
            imports: [common_1.CommonModule, svg_viewer_1.SvgViewerModule, card_1.MatCardModule, router_1.RouterModule, navigation_focus_1.NavigationFocusModule],
            exports: [ComponentCategoryList],
            declarations: [ComponentCategoryList],
            providers: [documentation_items_1.DocumentationItems],
        })];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    var ComponentCategoryListModule = _classThis_1 = class {
    };
    __setFunctionName(_classThis_1, "ComponentCategoryListModule");
    (() => {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        ComponentCategoryListModule = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return ComponentCategoryListModule = _classThis_1;
})();
