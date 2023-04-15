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
exports.DocViewerModule = void 0;
const doc_viewer_1 = require("./doc-viewer");
const example_viewer_1 = require("../example-viewer/example-viewer");
const stack_blitz_1 = require("../stack-blitz");
const button_1 = require("@angular/material/button");
const icon_1 = require("@angular/material/icon");
const snack_bar_1 = require("@angular/material/snack-bar");
const tabs_1 = require("@angular/material/tabs");
const tooltip_1 = require("@angular/material/tooltip");
const portal_1 = require("@angular/cdk/portal");
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const header_link_1 = require("./header-link");
const code_snippet_1 = require("../example-viewer/code-snippet");
// ExampleViewer is included in the DocViewerModule because they have a circular dependency.
exports.DocViewerModule = (() => {
    let _classDecorators = [(0, core_1.NgModule)({
            imports: [
                common_1.CommonModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                tooltip_1.MatTooltipModule,
                snack_bar_1.MatSnackBarModule,
                tabs_1.MatTabsModule,
                portal_1.PortalModule,
                stack_blitz_1.StackBlitzButtonModule
            ],
            declarations: [doc_viewer_1.DocViewer, example_viewer_1.ExampleViewer, header_link_1.HeaderLink, code_snippet_1.CodeSnippet],
            entryComponents: [example_viewer_1.ExampleViewer, header_link_1.HeaderLink],
            exports: [doc_viewer_1.DocViewer, example_viewer_1.ExampleViewer, header_link_1.HeaderLink],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var DocViewerModule = _classThis = class {
    };
    __setFunctionName(_classThis, "DocViewerModule");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        DocViewerModule = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DocViewerModule = _classThis;
})();
