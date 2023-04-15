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
const core_1 = require("@angular/core");
const testing_1 = require("@angular/core/testing");
const router_1 = require("@angular/router");
const testing_2 = require("@angular/router/testing");
const navigation_focus_service_1 = require("./navigation-focus.service");
const navigation_focus_1 = require("./navigation-focus");
describe('Navigation focus service', () => {
    let navigationFocusService;
    let router;
    let zone;
    let fixture;
    const navigate = (url) => {
        zone.run(() => router.navigateByUrl(url));
        (0, testing_1.tick)(100);
    };
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule.withRoutes([
                    { path: '', component: RouteTest },
                    { path: 'cdk', component: RouteTest },
                    { path: 'guides', component: RouteTest }
                ]),
                navigation_focus_1.NavigationFocusModule],
            providers: [navigation_focus_service_1.NavigationFocusService],
            declarations: [NavigationFocusTest, RouteTest],
        });
        fixture = testing_1.TestBed.createComponent(NavigationFocusTest);
    });
    beforeEach(() => {
        zone = testing_1.TestBed.inject(core_1.NgZone);
        router = testing_1.TestBed.inject(router_1.Router);
        navigationFocusService = testing_1.TestBed.inject(navigation_focus_service_1.NavigationFocusService);
    });
    it('should set skip link href', () => {
        const target1 = fixture.nativeElement.querySelector('#target1');
        const target2 = fixture.nativeElement.querySelector('#target2');
        navigationFocusService.requestSkipLinkFocus(target1);
        navigationFocusService.requestSkipLinkFocus(target2);
        expect(navigationFocusService.getSkipLinkHref()).toEqual('/#target2');
        navigationFocusService.relinquishSkipLinkFocus(target2);
        expect(navigationFocusService.getSkipLinkHref()).toEqual('/#target1');
    });
    it('should set skip link href to null when there are no more requests', () => {
        const target1 = fixture.nativeElement.querySelector('#target1');
        const target3 = fixture.nativeElement.querySelector('.no-id');
        navigationFocusService.requestSkipLinkFocus(target1);
        expect(navigationFocusService.getSkipLinkHref()).toEqual('/#target1');
        navigationFocusService.relinquishSkipLinkFocus(target1);
        // target3 has `focusOnNavigation` directive that automatically requests focus, so focus must
        // be relinquished to test the desired behaviour
        navigationFocusService.relinquishSkipLinkFocus(target3);
        expect(navigationFocusService.getSkipLinkHref()).toBeNull();
    });
    it('should set id for skip link target without id', () => {
        const skipLinkTarget = fixture.nativeElement.querySelector('.no-id');
        navigationFocusService.requestSkipLinkFocus(skipLinkTarget);
        expect(navigationFocusService.getSkipLinkHref()).toMatch(`/#skip-link-target-[0-9]*`);
    });
    it('should be within component view', () => {
        const previousUrl = '/components/autocomplete/overview';
        const newUrl = '/components/autocomplete/overview#simple-autocomplete';
        expect(navigationFocusService.isNavigationWithinComponentView(previousUrl, newUrl)).toBeTrue();
    });
    it('should not be within component view', () => {
        const previousUrl = '/cdk/clipboard/overview';
        const newUrl = '/cdk/categories';
        expect(navigationFocusService.isNavigationWithinComponentView(previousUrl, newUrl)).toBeFalse();
    });
    it('should focus on component then relinquish focus', (0, testing_1.fakeAsync)(() => {
        const target1 = fixture.nativeElement.querySelector('#target1');
        const target2 = fixture.nativeElement.querySelector('#target2');
        // First navigation event doesn't trigger focus because it represents a hardnav.
        navigationFocusService.requestFocusOnNavigation(target1);
        navigationFocusService.requestFocusOnNavigation(target2);
        navigate('/');
        expect(document.activeElement).not.toEqual(target1);
        expect(document.activeElement).not.toEqual(target2);
        // Most recent requester gets focus on the next nav.
        navigate('/guides');
        expect(document.activeElement).toEqual(target2);
        // Falls back to the focusing the previous requester once the most recent one relinquishes.
        navigationFocusService.relinquishFocusOnNavigation(target2);
        navigate('/cdk');
        expect(document.activeElement).toEqual(target1);
    }));
    it('should not set focus when navigating to hash target', (0, testing_1.fakeAsync)(() => {
        const target1 = fixture.nativeElement.querySelector('#target1');
        // First navigation event doesn't trigger focus because it represents a hardnav.
        navigationFocusService.requestFocusOnNavigation(target1);
        navigate('/');
        expect(document.activeElement).not.toEqual(target1);
        // Navigating to a hash target should not set focus on target1 even though it requested focus
        navigate('/guides#hash');
        expect(document.activeElement).not.toEqual(target1);
    }));
});
let NavigationFocusTest = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'navigation-focus-test',
            template: `
    <button id="target1">Target 1</button>
    <button id="target2">Target 2</button>
    <button class="no-id" focusOnNavigation>Target 3</button>
  `
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var NavigationFocusTest = _classThis = class {
    };
    __setFunctionName(_classThis, "NavigationFocusTest");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        NavigationFocusTest = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NavigationFocusTest = _classThis;
})();
let RouteTest = (() => {
    let _classDecorators_1 = [(0, core_1.NgModule)({
            imports: [navigation_focus_1.NavigationFocusModule]
        }), (0, core_1.Component)({
            selector: 'route-test',
            template: '',
        })];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    var RouteTest = _classThis_1 = class {
    };
    __setFunctionName(_classThis_1, "RouteTest");
    (() => {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        RouteTest = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return RouteTest = _classThis_1;
})();
