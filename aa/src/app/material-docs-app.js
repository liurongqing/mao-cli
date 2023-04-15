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
exports.MaterialDocsApp = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.MaterialDocsApp = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'material-docs-app',
            templateUrl: './material-docs-app.html',
            styleUrls: ['./material-docs-app.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var MaterialDocsApp = _classThis = class {
        constructor(router, ga, navigationFocusService) {
            this.subscriptions = new rxjs_1.Subscription();
            // 404 重定向
            this.redirect(router);
            this.subscriptions.add(navigationFocusService.navigationEndEvents.pipe((0, operators_1.map)(e => e.urlAfterRedirects), (0, operators_1.startWith)(''), (0, operators_1.pairwise)()).subscribe(([fromUrl, toUrl]) => {
                // We want to reset the scroll position on navigation except when navigating within
                // the documentation for a single component.
                if (!navigationFocusService.isNavigationWithinComponentView(fromUrl, toUrl)) {
                    resetScrollPosition();
                }
                ga.locationChanged(toUrl);
            }));
        }
        redirect(router) {
            const redirect = new URLSearchParams(location.search).get('redirect');
            if (redirect) {
                router.navigateByUrl(decodeURIComponent(redirect));
            }
        }
        ngOnDestroy() {
            this.subscriptions.unsubscribe();
        }
    };
    __setFunctionName(_classThis, "MaterialDocsApp");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        MaterialDocsApp = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MaterialDocsApp = _classThis;
})();
function resetScrollPosition() {
    if (typeof document === 'object' && document) {
        const sidenavContent = document.querySelector('.mat-drawer-content');
        if (sidenavContent) {
            sidenavContent.scrollTop = 0;
        }
    }
}
