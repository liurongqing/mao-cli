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
const carousel_1 = require("./carousel");
const testing_1 = require("@angular/core/testing");
const testing_module_1 = require("../../testing/testing-module");
const core_1 = require("@angular/core");
const carousel_module_1 = require("./carousel-module");
describe('HorizontalCarousel', () => {
    let fixture;
    let component;
    beforeEach((0, testing_1.async)(() => {
        testing_1.TestBed.configureTestingModule({
            imports: [carousel_module_1.CarouselModule, testing_module_1.DocsAppTestingModule],
            declarations: [CarouselTestComponent],
        }).compileComponents();
    }));
    beforeEach((0, testing_1.fakeAsync)(() => {
        fixture = testing_1.TestBed.createComponent(CarouselTestComponent);
        fixture.nativeElement.style.width = '1300px';
        fixture.detectChanges();
        (0, testing_1.flush)();
        component = fixture.componentInstance.carousel;
    }));
    it('should not show prev nav arrow when instantiated', () => {
        const navPrevious = fixture.nativeElement.querySelector('.docs-carousel-nav-prev');
        expect(navPrevious).toBeNull();
        const navNext = fixture.nativeElement.querySelector('.docs-carousel-nav-next');
        expect(navNext).toBeDefined();
    });
    it('should show prev nav arrow after increasing index', () => {
        component.next();
        fixture.detectChanges();
        expect(component.index).toEqual(1);
        const navPrevious = fixture.nativeElement.querySelector('.docs-carousel-nav-prev');
        expect(navPrevious).toBeDefined();
    });
    it('should hide next nav arrow after reaching end of items', () => {
        expect(component.visibleItems).toBe(4);
        component.next();
        component.next();
        expect(component.index).toEqual(2);
        fixture.detectChanges();
        const navPrevious = fixture.nativeElement.querySelector('.docs-carousel-nav-next');
        expect(navPrevious).toBeNull();
        // in case of keyboard nav at end of items
        component.next();
        expect(component.index).toEqual(2);
    });
    it('should resize carousel when not all content can be displayed', () => {
        const carouselWrapper = fixture.nativeElement.querySelector('.docs-carousel-content-wrapper');
        fixture.nativeElement.style.width = '1350px';
        window.dispatchEvent(new Event('resize'));
        fixture.detectChanges();
        expect(carouselWrapper.clientWidth).toEqual(1250);
        expect(component.visibleItems).toEqual(5);
    });
    it('should not resize carousel when all content can be displayed', () => {
        fixture.componentInstance.numberOfItems = 2;
        fixture.detectChanges();
        const carouselWrapper = fixture.nativeElement.querySelector('.docs-carousel-content-wrapper');
        fixture.nativeElement.style.width = '1350px';
        window.dispatchEvent(new Event('resize'));
        fixture.detectChanges();
        expect(carouselWrapper.clientWidth).toEqual(500);
        expect(component.visibleItems).toEqual(2);
    });
});
let CarouselTestComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'test-carousel',
            template: `
    <app-carousel itemWidth="250">
      <div carousel-item class="docs-carousel-item-container"
           *ngFor="let i of [].constructor(numberOfItems) "></div>
    </app-carousel>`,
            styles: ['.docs-carousel-item-container { display: flex; }']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _carousel_decorators;
    let _carousel_initializers = [];
    var CarouselTestComponent = _classThis = class {
        constructor() {
            this.numberOfItems = (__runInitializers(this, _instanceExtraInitializers), 6);
            this.carousel = __runInitializers(this, _carousel_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "CarouselTestComponent");
    (() => {
        _carousel_decorators = [(0, core_1.ViewChild)(carousel_1.Carousel)];
        __esDecorate(null, null, _carousel_decorators, { kind: "field", name: "carousel", static: false, private: false, access: { has: obj => "carousel" in obj, get: obj => obj.carousel, set: (obj, value) => { obj.carousel = value; } } }, _carousel_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        CarouselTestComponent = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CarouselTestComponent = _classThis;
})();
