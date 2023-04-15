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
exports.ComponentViewerModule = exports.ComponentExamples = exports.ComponentApi = exports.ComponentOverview = exports.ComponentBaseView = exports.ComponentViewer = void 0;
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const tabs_1 = require("@angular/material/tabs");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const doc_viewer_module_1 = require("../../shared/doc-viewer/doc-viewer-module");
const documentation_items_1 = require("../../shared/documentation-items/documentation-items");
const table_of_contents_module_1 = require("../../shared/table-of-contents/table-of-contents.module");
const navigation_focus_1 = require("../../shared/navigation-focus/navigation-focus");
exports.ComponentViewer = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-component-viewer',
            templateUrl: './component-viewer.html',
            styleUrls: ['./component-viewer.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ComponentViewer = _classThis = class {
        constructor(_route, router, _componentPageTitle, docItems) {
            this.router = router;
            this._componentPageTitle = _componentPageTitle;
            this.docItems = docItems;
            this.componentDocItem = new rxjs_1.ReplaySubject(1);
            this.sections = new Set(['overview', 'api']);
            this._destroyed = new rxjs_1.Subject();
            const routeAndParentParams = [_route.params];
            if (_route.parent) {
                routeAndParentParams.push(_route.parent.params);
            }
            // Listen to changes on the current route for the doc id (e.g. button/checkbox) and the
            // parent route for the section (material/cdk).
            (0, rxjs_1.combineLatest)(routeAndParentParams).pipe((0, operators_1.map)((params) => ({ id: params[0]['id'], section: params[1]['section'] })), (0, operators_1.map)((docIdAndSection) => ({ doc: docItems.getItemById(docIdAndSection.id, docIdAndSection.section),
                section: docIdAndSection.section }), (0, operators_1.takeUntil)(this._destroyed))).subscribe((docItemAndSection) => {
                if (docItemAndSection.doc !== undefined) {
                    this.componentDocItem.next(docItemAndSection.doc);
                    this._componentPageTitle.title = `${docItemAndSection.doc.name}`;
                    docItemAndSection.doc.examples && docItemAndSection.doc.examples.length ?
                        this.sections.add('examples') :
                        this.sections.delete('examples');
                }
                else {
                    this.router.navigate(['/' + docItemAndSection.section]);
                }
            });
        }
        ngOnDestroy() {
            this._destroyed.next();
            this._destroyed.complete();
        }
    };
    __setFunctionName(_classThis, "ComponentViewer");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ComponentViewer = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ComponentViewer = _classThis;
})();
/**
 * Base component class for views displaying docs on a particular component (overview, API,
 * examples). Responsible for resetting the focus target on doc item changes and resetting
 * the table of contents headers.
 */
exports.ComponentBaseView = (() => {
    let _classDecorators_1 = [(0, core_1.Directive)()];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    let _instanceExtraInitializers = [];
    let _tableOfContents_decorators;
    let _tableOfContents_initializers = [];
    var ComponentBaseView = _classThis_1 = class {
        constructor(componentViewer, breakpointObserver) {
            this.componentViewer = (__runInitializers(this, _instanceExtraInitializers), componentViewer);
            this.tableOfContents = __runInitializers(this, _tableOfContents_initializers, void 0);
            this.destroyed = new rxjs_1.Subject();
            this.showToc = breakpointObserver.observe('(max-width: 1200px)')
                .pipe((0, operators_1.map)(result => !result.matches));
        }
        ngOnInit() {
            this.componentViewer.componentDocItem.pipe((0, operators_1.takeUntil)(this.destroyed)).subscribe(() => {
                if (this.tableOfContents) {
                    this.tableOfContents.resetHeaders();
                }
            });
        }
        ngOnDestroy() {
            this.destroyed.next();
        }
        updateTableOfContents(sectionName, docViewerContent, sectionIndex = 0) {
            if (this.tableOfContents) {
                this.tableOfContents.addHeaders(sectionName, docViewerContent, sectionIndex);
                this.tableOfContents.updateScrollPosition();
            }
        }
    };
    __setFunctionName(_classThis_1, "ComponentBaseView");
    (() => {
        _tableOfContents_decorators = [(0, core_1.ViewChild)('toc')];
        __esDecorate(null, null, _tableOfContents_decorators, { kind: "field", name: "tableOfContents", static: false, private: false, access: { has: obj => "tableOfContents" in obj, get: obj => obj.tableOfContents, set: (obj, value) => { obj.tableOfContents = value; } } }, _tableOfContents_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        ComponentBaseView = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return ComponentBaseView = _classThis_1;
})();
exports.ComponentOverview = (() => {
    let _classDecorators_2 = [(0, core_1.Component)({
            selector: 'component-overview',
            templateUrl: './component-overview.html',
            encapsulation: core_1.ViewEncapsulation.None,
        })];
    let _classDescriptor_2;
    let _classExtraInitializers_2 = [];
    let _classThis_2;
    var ComponentOverview = _classThis_2 = class extends ComponentBaseView {
        constructor(componentViewer, breakpointObserver) {
            super(componentViewer, breakpointObserver);
        }
        getOverviewDocumentUrl(doc) {
            // Use the explicit overview path if specified. Otherwise, compute an overview path based
            // on the package name and doc item id. Overviews for components are commonly stored in a
            // folder named after the component while the overview file is named similarly. e.g.
            //    `cdk#overlay`     -> `cdk/overlay/overlay.md`
            //    `material#button` -> `material/button/button.md`
            const overviewPath = doc.overviewPath || `${doc.packageName}/${doc.id}/${doc.id}.html`;
            return `/docs-content/overviews/${overviewPath}`;
        }
    };
    __setFunctionName(_classThis_2, "ComponentOverview");
    (() => {
        __esDecorate(null, _classDescriptor_2 = { value: _classThis_2 }, _classDecorators_2, { kind: "class", name: _classThis_2.name }, null, _classExtraInitializers_2);
        ComponentOverview = _classThis_2 = _classDescriptor_2.value;
        __runInitializers(_classThis_2, _classExtraInitializers_2);
    })();
    return ComponentOverview = _classThis_2;
})();
exports.ComponentApi = (() => {
    let _classDecorators_3 = [(0, core_1.Component)({
            selector: 'component-api',
            templateUrl: './component-api.html',
            styleUrls: ['./component-api.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
        })];
    let _classDescriptor_3;
    let _classExtraInitializers_3 = [];
    let _classThis_3;
    var ComponentApi = _classThis_3 = class extends ComponentBaseView {
        constructor(componentViewer, breakpointObserver) {
            super(componentViewer, breakpointObserver);
        }
        getApiDocumentUrl(doc) {
            const apiDocId = doc.apiDocId || `${doc.packageName}-${doc.id}`;
            return `/docs-content/api-docs/${apiDocId}.html`;
        }
    };
    __setFunctionName(_classThis_3, "ComponentApi");
    (() => {
        __esDecorate(null, _classDescriptor_3 = { value: _classThis_3 }, _classDecorators_3, { kind: "class", name: _classThis_3.name }, null, _classExtraInitializers_3);
        ComponentApi = _classThis_3 = _classDescriptor_3.value;
        __runInitializers(_classThis_3, _classExtraInitializers_3);
    })();
    return ComponentApi = _classThis_3;
})();
exports.ComponentExamples = (() => {
    let _classDecorators_4 = [(0, core_1.Component)({
            selector: 'component-examples',
            templateUrl: './component-examples.html',
            encapsulation: core_1.ViewEncapsulation.None,
        })];
    let _classDescriptor_4;
    let _classExtraInitializers_4 = [];
    let _classThis_4;
    var ComponentExamples = _classThis_4 = class extends ComponentBaseView {
        constructor(componentViewer, breakpointObserver) {
            super(componentViewer, breakpointObserver);
        }
    };
    __setFunctionName(_classThis_4, "ComponentExamples");
    (() => {
        __esDecorate(null, _classDescriptor_4 = { value: _classThis_4 }, _classDecorators_4, { kind: "class", name: _classThis_4.name }, null, _classExtraInitializers_4);
        ComponentExamples = _classThis_4 = _classDescriptor_4.value;
        __runInitializers(_classThis_4, _classExtraInitializers_4);
    })();
    return ComponentExamples = _classThis_4;
})();
exports.ComponentViewerModule = (() => {
    let _classDecorators_5 = [(0, core_1.NgModule)({
            imports: [
                tabs_1.MatTabsModule,
                router_1.RouterModule,
                doc_viewer_module_1.DocViewerModule,
                common_1.CommonModule,
                table_of_contents_module_1.TableOfContentsModule,
                navigation_focus_1.NavigationFocusModule,
            ],
            exports: [ComponentViewer],
            declarations: [ComponentViewer, ComponentOverview, ComponentApi, ComponentExamples],
            providers: [documentation_items_1.DocumentationItems],
        })];
    let _classDescriptor_5;
    let _classExtraInitializers_5 = [];
    let _classThis_5;
    var ComponentViewerModule = _classThis_5 = class {
    };
    __setFunctionName(_classThis_5, "ComponentViewerModule");
    (() => {
        __esDecorate(null, _classDescriptor_5 = { value: _classThis_5 }, _classDecorators_5, { kind: "class", name: _classThis_5.name }, null, _classExtraInitializers_5);
        ComponentViewerModule = _classThis_5 = _classDescriptor_5.value;
        __runInitializers(_classThis_5, _classExtraInitializers_5);
    })();
    return ComponentViewerModule = _classThis_5;
})();
