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
exports.Carousel = exports.CarouselItem = void 0;
const core_1 = require("@angular/core");
const a11y_1 = require("@angular/cdk/a11y");
exports.CarouselItem = (() => {
    let _classDecorators = [(0, core_1.Directive)({
            selector: '[carousel-item]',
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _role_decorators;
    let _role_initializers = [];
    let _width_decorators;
    let _width_initializers = [];
    let _tabindex_decorators;
    let _tabindex_initializers = [];
    var CarouselItem = _classThis = class {
        constructor(carousel, element) {
            this.carousel = (__runInitializers(this, _instanceExtraInitializers), carousel);
            this.element = element;
            this.role = __runInitializers(this, _role_initializers, 'listitem');
            this.width = __runInitializers(this, _width_initializers, this.carousel.itemWidth);
            this.tabindex = __runInitializers(this, _tabindex_initializers, '-1');
        }
        focus() {
            this.element.nativeElement.focus({ preventScroll: true });
        }
    };
    __setFunctionName(_classThis, "CarouselItem");
    (() => {
        _role_decorators = [(0, core_1.HostBinding)('attr.role')];
        _width_decorators = [(0, core_1.HostBinding)('style.width.px')];
        _tabindex_decorators = [(0, core_1.HostBinding)('tabindex')];
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: obj => "role" in obj, get: obj => obj.role, set: (obj, value) => { obj.role = value; } } }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _width_decorators, { kind: "field", name: "width", static: false, private: false, access: { has: obj => "width" in obj, get: obj => obj.width, set: (obj, value) => { obj.width = value; } } }, _width_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _tabindex_decorators, { kind: "field", name: "tabindex", static: false, private: false, access: { has: obj => "tabindex" in obj, get: obj => obj.tabindex, set: (obj, value) => { obj.tabindex = value; } } }, _tabindex_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        CarouselItem = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CarouselItem = _classThis;
})();
exports.Carousel = (() => {
    let _classDecorators_1 = [(0, core_1.Component)({
            selector: 'app-carousel',
            templateUrl: './carousel.html',
            styleUrls: ['./carousel.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    let _instanceExtraInitializers_1 = [];
    let _ariaLabel_decorators;
    let _ariaLabel_initializers = [];
    let _itemWidth_decorators;
    let _itemWidth_initializers = [];
    let _items_decorators;
    let _items_initializers = [];
    let _wrapper_decorators;
    let _wrapper_initializers = [];
    var Carousel = _classThis_1 = class {
        constructor(element) {
            this.element = (__runInitializers(this, _instanceExtraInitializers_1), element);
            this.ariaLabel = __runInitializers(this, _ariaLabel_initializers, void 0);
            this.itemWidth = __runInitializers(this, _itemWidth_initializers, void 0);
            this.items = __runInitializers(this, _items_initializers, void 0);
            this.wrapper = __runInitializers(this, _wrapper_initializers, void 0);
            this.position = 0;
            this.showPrevArrow = false;
            this.showNextArrow = true;
            this._index = 0;
        }
        get index() {
            return this._index;
        }
        set index(i) {
            this._index = i;
            this.showPrevArrow = i > 0;
            this.showNextArrow = i < (this.items.length - this.visibleItems);
        }
        onKeydown(event) {
            switch (event.key) {
                case 'Tab':
                    if (!this.focusKeyManager.activeItem) {
                        this.focusKeyManager.setFirstItemActive();
                        this._updateItemTabIndices();
                    }
                    break;
                case 'ArrowLeft':
                    if (this.focusKeyManager.activeItemIndex === this.index) {
                        this.previous();
                    }
                    this.focusKeyManager.setPreviousItemActive();
                    this._updateItemTabIndices();
                    break;
                case 'ArrowRight':
                    if (this.focusKeyManager.activeItemIndex === this.index + this.visibleItems - 1) {
                        this.next();
                    }
                    this.focusKeyManager.setNextItemActive();
                    this._updateItemTabIndices();
                    break;
                default:
                    break;
            }
        }
        onResize() {
            this._resizeCarousel();
        }
        ngAfterContentInit() {
            this.focusKeyManager =
                new a11y_1.FocusKeyManager(this.items);
            // timeout to make sure clientWidth is defined
            setTimeout(() => {
                this.itemsArray = this.items.toArray();
                this.shiftWidth = this.items.first.element.nativeElement.clientWidth;
                this._resizeCarousel();
            });
        }
        next() {
            // prevent keyboard navigation from going out of bounds
            if (this.showNextArrow) {
                this._shiftItems(1);
            }
        }
        previous() {
            // prevent keyboard navigation from going out of bounds
            if (this.showPrevArrow) {
                this._shiftItems(-1);
            }
        }
        _updateItemTabIndices() {
            this.items.forEach((item) => {
                item.tabindex = item === this.focusKeyManager.activeItem ? '0' : '-1';
            });
        }
        _shiftItems(shiftIndex) {
            this.index += shiftIndex;
            this.position += shiftIndex * this.shiftWidth;
            this.items.forEach((item) => {
                item.element.nativeElement.style.transform = `translateX(-${this.position}px)`;
            });
        }
        _resizeCarousel() {
            const newVisibleItems = Math.max(1, Math.min(Math.floor((this.element.nativeElement.offsetWidth) / this.shiftWidth), this.items.length));
            if (this.visibleItems !== newVisibleItems) {
                if (this.visibleItems < newVisibleItems) {
                    const shiftIndex = this.index - (this.items.length - this.visibleItems) + 1;
                    if (shiftIndex > 0) {
                        this._shiftItems(-shiftIndex);
                    }
                }
                else {
                    if (this.focusKeyManager.activeItemIndex && this.focusKeyManager.activeItemIndex >
                        this.index + newVisibleItems - 1) {
                        this.focusKeyManager.setPreviousItemActive();
                        this._updateItemTabIndices();
                    }
                }
                this.visibleItems = newVisibleItems;
                this.showNextArrow = this.index < (this.items.length - this.visibleItems);
            }
            this.wrapper.nativeElement.style.width = `${this.visibleItems * this.shiftWidth}px`;
        }
    };
    __setFunctionName(_classThis_1, "Carousel");
    (() => {
        _ariaLabel_decorators = [(0, core_1.Input)('aria-label')];
        _itemWidth_decorators = [(0, core_1.Input)()];
        _items_decorators = [(0, core_1.ContentChildren)(CarouselItem)];
        _wrapper_decorators = [(0, core_1.ViewChild)('contentWrapper')];
        __esDecorate(null, null, _ariaLabel_decorators, { kind: "field", name: "ariaLabel", static: false, private: false, access: { has: obj => "ariaLabel" in obj, get: obj => obj.ariaLabel, set: (obj, value) => { obj.ariaLabel = value; } } }, _ariaLabel_initializers, _instanceExtraInitializers_1);
        __esDecorate(null, null, _itemWidth_decorators, { kind: "field", name: "itemWidth", static: false, private: false, access: { has: obj => "itemWidth" in obj, get: obj => obj.itemWidth, set: (obj, value) => { obj.itemWidth = value; } } }, _itemWidth_initializers, _instanceExtraInitializers_1);
        __esDecorate(null, null, _items_decorators, { kind: "field", name: "items", static: false, private: false, access: { has: obj => "items" in obj, get: obj => obj.items, set: (obj, value) => { obj.items = value; } } }, _items_initializers, _instanceExtraInitializers_1);
        __esDecorate(null, null, _wrapper_decorators, { kind: "field", name: "wrapper", static: false, private: false, access: { has: obj => "wrapper" in obj, get: obj => obj.wrapper, set: (obj, value) => { obj.wrapper = value; } } }, _wrapper_initializers, _instanceExtraInitializers_1);
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        Carousel = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return Carousel = _classThis_1;
})();
