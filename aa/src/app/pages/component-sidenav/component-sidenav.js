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
exports.ComponentSidenavModule = exports.ComponentNav = exports.ComponentSidenav = void 0;
const core_1 = require("@angular/core");
const documentation_items_1 = require("../../shared/documentation-items/documentation-items");
const icon_1 = require("@angular/material/icon");
const sidenav_1 = require("@angular/material/sidenav");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const component_page_header_1 = require("../component-page-header/component-page-header");
const footer_1 = require("../../shared/footer/footer");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const animations_1 = require("@angular/animations");
const accordion_1 = require("@angular/cdk/accordion");
const component_category_list_1 = require("../component-category-list/component-category-list");
const component_viewer_1 = require("../component-viewer/component-viewer");
const doc_viewer_module_1 = require("../../shared/doc-viewer/doc-viewer-module");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/common/http");
const stack_blitz_1 = require("../../shared/stack-blitz");
const svg_viewer_1 = require("../../shared/svg-viewer/svg-viewer");
const list_1 = require("@angular/material/list");
const navigation_focus_1 = require("../../shared/navigation-focus/navigation-focus");
// These constants are used by the ComponentSidenav for orchestrating the MatSidenav in a responsive
// way. This includes hiding the sidenav, defaulting it to open, changing the mode from over to
// side, determining the size of the top gap, and whether the sidenav is fixed in the viewport.
// The values were determined through the combination of Material Design breakpoints and careful
// testing of the application across a range of common device widths (360px+).
// These breakpoint values need to stay in sync with the related Sass variables in
// src/styles/_constants.scss.
const EXTRA_SMALL_WIDTH_BREAKPOINT = 720;
const SMALL_WIDTH_BREAKPOINT = 939;
exports.ComponentSidenav = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-component-sidenav',
            templateUrl: './component-sidenav.html',
            styleUrls: ['./component-sidenav.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _sidenav_decorators;
    let _sidenav_initializers = [];
    var ComponentSidenav = _classThis = class {
        constructor(docItems, _route, _navigationFocusService, zone, breakpoints) {
            this.docItems = (__runInitializers(this, _instanceExtraInitializers), docItems);
            this._route = _route;
            this._navigationFocusService = _navigationFocusService;
            this.sidenav = __runInitializers(this, _sidenav_initializers, void 0);
            this.subscriptions = new rxjs_1.Subscription();
            this.isExtraScreenSmall =
                breakpoints.observe(`(max-width: ${EXTRA_SMALL_WIDTH_BREAKPOINT}px)`)
                    .pipe((0, operators_1.map)(breakpoint => breakpoint.matches));
            this.isScreenSmall = breakpoints.observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
                .pipe((0, operators_1.map)(breakpoint => breakpoint.matches));
        }
        ngOnInit() {
            // Combine params from all of the path into a single object.
            this.params = (0, rxjs_1.combineLatest)(this._route.pathFromRoot.map(route => route.params), Object.assign);
            this.subscriptions.add(this._navigationFocusService.navigationEndEvents.pipe((0, operators_1.map)(() => this.isScreenSmall))
                .subscribe((shouldCloseSideNav) => {
                if (shouldCloseSideNav && this.sidenav) {
                    this.sidenav.close();
                }
            }));
        }
        ngOnDestroy() {
            this.subscriptions.unsubscribe();
        }
        toggleSidenav(sidenav) {
            return sidenav.toggle();
        }
    };
    __setFunctionName(_classThis, "ComponentSidenav");
    (() => {
        _sidenav_decorators = [(0, core_1.ViewChild)(sidenav_1.MatSidenav)];
        __esDecorate(null, null, _sidenav_decorators, { kind: "field", name: "sidenav", static: false, private: false, access: { has: obj => "sidenav" in obj, get: obj => obj.sidenav, set: (obj, value) => { obj.sidenav = value; } } }, _sidenav_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ComponentSidenav = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ComponentSidenav = _classThis;
})();
exports.ComponentNav = (() => {
    let _classDecorators_1 = [(0, core_1.Component)({
            selector: 'app-component-nav',
            templateUrl: './component-nav.html',
            animations: [
                (0, animations_1.trigger)('bodyExpansion', [
                    (0, animations_1.state)('collapsed', (0, animations_1.style)({ height: '0px', display: 'none' })),
                    (0, animations_1.state)('expanded', (0, animations_1.style)({ height: '*', display: 'block' })),
                    (0, animations_1.transition)('expanded <=> collapsed', (0, animations_1.animate)('225ms cubic-bezier(0.4,0.0,0.2,1)')),
                ]),
            ],
        })];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    let _instanceExtraInitializers_1 = [];
    let _params_decorators;
    let _params_initializers = [];
    var ComponentNav = _classThis_1 = class {
        constructor(docItems) {
            this.docItems = (__runInitializers(this, _instanceExtraInitializers_1), docItems);
            this.params = __runInitializers(this, _params_initializers, void 0);
        }
    };
    __setFunctionName(_classThis_1, "ComponentNav");
    (() => {
        _params_decorators = [(0, core_1.Input)()];
        __esDecorate(null, null, _params_decorators, { kind: "field", name: "params", static: false, private: false, access: { has: obj => "params" in obj, get: obj => obj.params, set: (obj, value) => { obj.params = value; } } }, _params_initializers, _instanceExtraInitializers_1);
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        ComponentNav = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return ComponentNav = _classThis_1;
})();
const routes = [{
        path: '',
        component: ComponentSidenav,
        children: [
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
            { path: 'component/:id', redirectTo: ':id', pathMatch: 'full' },
            { path: 'category/:id', redirectTo: '/categories/:id', pathMatch: 'full' },
            {
                path: 'categories',
                children: [
                    { path: '', component: component_category_list_1.ComponentCategoryList },
                ],
            },
            {
                path: ':id',
                component: component_viewer_1.ComponentViewer,
                children: [
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                    { path: 'overview', component: component_viewer_1.ComponentOverview, pathMatch: 'full' },
                    { path: 'api', component: component_viewer_1.ComponentApi, pathMatch: 'full' },
                    { path: 'examples', component: component_viewer_1.ComponentExamples, pathMatch: 'full' },
                    { path: '**', redirectTo: 'overview' },
                ],
            },
        ]
    }];
exports.ComponentSidenavModule = (() => {
    let _classDecorators_2 = [(0, core_1.NgModule)({
            imports: [
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
                router_1.RouterModule,
                common_1.CommonModule,
                component_category_list_1.ComponentCategoryListModule,
                component_page_header_1.ComponentHeaderModule,
                component_viewer_1.ComponentViewerModule,
                doc_viewer_module_1.DocViewerModule,
                footer_1.FooterModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                accordion_1.CdkAccordionModule,
                icon_1.MatIconModule,
                sidenav_1.MatSidenavModule,
                stack_blitz_1.StackBlitzButtonModule,
                svg_viewer_1.SvgViewerModule,
                router_1.RouterModule.forChild(routes),
                navigation_focus_1.NavigationFocusModule
            ],
            exports: [ComponentSidenav],
            declarations: [ComponentSidenav, ComponentNav],
            providers: [documentation_items_1.DocumentationItems],
        })];
    let _classDescriptor_2;
    let _classExtraInitializers_2 = [];
    let _classThis_2;
    var ComponentSidenavModule = _classThis_2 = class {
    };
    __setFunctionName(_classThis_2, "ComponentSidenavModule");
    (() => {
        __esDecorate(null, _classDescriptor_2 = { value: _classThis_2 }, _classDecorators_2, { kind: "class", name: _classThis_2.name }, null, _classExtraInitializers_2);
        ComponentSidenavModule = _classThis_2 = _classDescriptor_2.value;
        __runInitializers(_classThis_2, _classExtraInitializers_2);
    })();
    return ComponentSidenavModule = _classThis_2;
})();
