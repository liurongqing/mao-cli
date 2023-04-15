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
exports.HomepageModule = exports.Homepage = void 0;
const core_1 = require("@angular/core");
const svg_viewer_1 = require("../../shared/svg-viewer/svg-viewer");
const button_1 = require("@angular/material/button");
const footer_1 = require("../../shared/footer/footer");
const router_1 = require("@angular/router");
const navigation_focus_1 = require("../../shared/navigation-focus/navigation-focus");
const icon_1 = require("@angular/material/icon");
const divider_1 = require("@angular/material/divider");
const card_1 = require("@angular/material/card");
const guide_items_1 = require("../../shared/guide-items/guide-items");
const common_1 = require("@angular/common");
const carousel_module_1 = require("../../shared/carousel/carousel-module");
const TOP_COMPONENTS = ['datepicker', 'input', 'slide-toggle', 'slider', 'button'];
exports.Homepage = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-homepage',
            templateUrl: './homepage.html',
            styleUrls: ['./homepage.scss']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Homepage = _classThis = class {
        constructor(_componentPageTitle, guideItems) {
            this._componentPageTitle = _componentPageTitle;
            this.guideItems = guideItems;
            this.isNextVersion = location.hostname.startsWith('next.material.angular.io');
        }
        ngOnInit() {
            this._componentPageTitle.title = '';
        }
        getTopComponents() {
            return TOP_COMPONENTS;
        }
    };
    __setFunctionName(_classThis, "Homepage");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Homepage = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Homepage = _classThis;
})();
const routes = [{ path: '', component: Homepage }];
exports.HomepageModule = (() => {
    let _classDecorators_1 = [(0, core_1.NgModule)({
            imports: [svg_viewer_1.SvgViewerModule,
                button_1.MatButtonModule,
                footer_1.FooterModule,
                router_1.RouterModule.forChild(routes),
                navigation_focus_1.NavigationFocusModule, icon_1.MatIconModule, divider_1.MatDividerModule, card_1.MatCardModule, common_1.CommonModule,
                carousel_module_1.CarouselModule],
            exports: [Homepage],
            declarations: [Homepage],
            providers: [guide_items_1.GuideItems]
        })];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    var HomepageModule = _classThis_1 = class {
    };
    __setFunctionName(_classThis_1, "HomepageModule");
    (() => {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        HomepageModule = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return HomepageModule = _classThis_1;
})();
