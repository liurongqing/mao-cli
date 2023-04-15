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
exports.GuideViewerModule = exports.GuideViewer = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const guide_items_1 = require("../../shared/guide-items/guide-items");
const footer_1 = require("../../shared/footer/footer");
const doc_viewer_module_1 = require("../../shared/doc-viewer/doc-viewer-module");
const table_of_contents_module_1 = require("../../shared/table-of-contents/table-of-contents.module");
const forms_1 = require("@angular/forms");
const navigation_focus_1 = require("../../shared/navigation-focus/navigation-focus");
exports.GuideViewer = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'guide-viewer',
            templateUrl: './guide-viewer.html',
            styleUrls: ['./guide-viewer.scss'],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var GuideViewer = _classThis = class {
        constructor(_route, _componentPageTitle, router, guideItems) {
            this._componentPageTitle = _componentPageTitle;
            this.router = router;
            this.guideItems = guideItems;
            _route.params.subscribe(p => {
                const guideItem = guideItems.getItemById(p['id']);
                if (guideItem) {
                    this.guide = guideItem;
                }
                if (!this.guide) {
                    this.router.navigate(['/guides']);
                }
            });
        }
        ngOnInit() {
            if (this.guide !== undefined) {
                this._componentPageTitle.title = this.guide.name;
            }
        }
    };
    __setFunctionName(_classThis, "GuideViewer");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        GuideViewer = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GuideViewer = _classThis;
})();
const routes = [{ path: '', component: GuideViewer }];
// This module needs to include all of the modules required by the examples in the guides.
// For example, the custom form-field guide requires the ReactiveFormsModule.
// These imports may need to be updated when adding examples to new or existing guides.
exports.GuideViewerModule = (() => {
    let _classDecorators_1 = [(0, core_1.NgModule)({
            imports: [
                doc_viewer_module_1.DocViewerModule, footer_1.FooterModule, table_of_contents_module_1.TableOfContentsModule, forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(routes), navigation_focus_1.NavigationFocusModule,
            ],
            exports: [GuideViewer],
            declarations: [GuideViewer],
            providers: [guide_items_1.GuideItems],
        })];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    var GuideViewerModule = _classThis_1 = class {
    };
    __setFunctionName(_classThis_1, "GuideViewerModule");
    (() => {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        GuideViewerModule = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return GuideViewerModule = _classThis_1;
})();
