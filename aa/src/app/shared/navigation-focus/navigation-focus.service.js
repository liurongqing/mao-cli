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
exports.NavigationFocusService = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
exports.NavigationFocusService = (() => {
    let _classDecorators = [(0, core_1.Injectable)({
            providedIn: 'root',
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var NavigationFocusService = _classThis = class {
        constructor(router) {
            this.router = router;
            this.subscriptions = new rxjs_1.Subscription();
            this.navigationFocusRequests = [];
            this.skipLinkFocusRequests = [];
            this.navigationEndEvents = this.router.events
                .pipe((0, operators_1.filter)((event) => event instanceof router_1.NavigationEnd));
            this.softNavigations = this.navigationEndEvents.pipe((0, operators_1.skip)(1));
            this.subscriptions.add(this.softNavigations.subscribe(() => {
                // focus if url does not have fragment
                if (!this.router.url.split('#')[1]) {
                    setTimeout(() => {
                        if (this.navigationFocusRequests.length) {
                            this.navigationFocusRequests[this.navigationFocusRequests.length - 1]
                                .focus({ preventScroll: true });
                        }
                    }, 100);
                }
            }));
        }
        ngOnDestroy() {
            this.subscriptions.unsubscribe();
        }
        requestFocusOnNavigation(el) {
            this.navigationFocusRequests.push(el);
        }
        relinquishFocusOnNavigation(el) {
            this.navigationFocusRequests.splice(this.navigationFocusRequests.indexOf(el), 1);
        }
        requestSkipLinkFocus(el) {
            this.skipLinkFocusRequests.push(el);
            this.setSkipLinkHref(el);
        }
        relinquishSkipLinkFocus(el) {
            this.skipLinkFocusRequests.splice(this.skipLinkFocusRequests.indexOf(el), 1);
            const skipLinkFocusTarget = this.skipLinkFocusRequests[this.skipLinkFocusRequests.length - 1];
            this.setSkipLinkHref(skipLinkFocusTarget);
        }
        setSkipLinkHref(el) {
            const baseUrl = this.router.url.split('#')[0];
            this.skipLinkHref = el ? `${baseUrl}#${el.id}` : null;
        }
        getSkipLinkHref() {
            return this.skipLinkHref;
        }
        isNavigationWithinComponentView(previousUrl, newUrl) {
            const componentViewExpression = /(components|cdk)\/([^\/]+)/;
            const previousUrlMatch = previousUrl.match(componentViewExpression);
            const newUrlMatch = newUrl.match(componentViewExpression);
            return previousUrl && newUrl && previousUrlMatch && newUrlMatch
                && previousUrlMatch[0] === newUrlMatch[0]
                && previousUrlMatch[1] === newUrlMatch[1];
        }
    };
    __setFunctionName(_classThis, "NavigationFocusService");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        NavigationFocusService = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NavigationFocusService = _classThis;
})();
