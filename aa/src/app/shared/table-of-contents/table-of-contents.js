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
exports.TableOfContents = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.TableOfContents = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'table-of-contents',
            styleUrls: ['./table-of-contents.scss'],
            templateUrl: './table-of-contents.html'
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _container_decorators;
    let _container_initializers = [];
    var TableOfContents = _classThis = class {
        constructor(_router, _route, _element, _navigationFocusService, _document) {
            this._router = (__runInitializers(this, _instanceExtraInitializers), _router);
            this._route = _route;
            this._element = _element;
            this._navigationFocusService = _navigationFocusService;
            this._document = _document;
            this.container = __runInitializers(this, _container_initializers, void 0);
            this._linkSections = [];
            this._links = [];
            this._rootUrl = this._router.url.split('#')[0];
            this._urlFragment = '';
            this.subscriptions = new rxjs_1.Subscription();
            this.subscriptions.add(this._navigationFocusService.navigationEndEvents
                .subscribe(() => {
                const rootUrl = _router.url.split('#')[0];
                if (rootUrl !== this._rootUrl) {
                    this._rootUrl = rootUrl;
                }
            }));
            this.subscriptions.add(this._route.fragment.subscribe(fragment => {
                this._urlFragment = fragment;
                const target = document.getElementById(this._urlFragment);
                if (target) {
                    target.scrollIntoView();
                }
            }));
        }
        ngOnInit() {
            // On init, the sidenav content element doesn't yet exist, so it's not possible
            // to subscribe to its scroll event until next tick (when it does exist).
            Promise.resolve().then(() => {
                this._scrollContainer = this.container ?
                    this._document.querySelectorAll(this.container)[0] : window;
                if (this._scrollContainer) {
                    this.subscriptions.add((0, rxjs_1.fromEvent)(this._scrollContainer, 'scroll').pipe((0, operators_1.debounceTime)(10))
                        .subscribe(() => this.onScroll()));
                }
            });
        }
        ngAfterViewInit() {
            this.updateScrollPosition();
        }
        ngOnDestroy() {
            this.subscriptions.unsubscribe();
        }
        updateScrollPosition() {
            const target = document.getElementById(this._urlFragment);
            if (target) {
                target.scrollIntoView();
            }
        }
        resetHeaders() {
            this._linkSections = [];
            this._links = [];
        }
        addHeaders(sectionName, docViewerContent, sectionIndex = 0) {
            const headers = Array.from(docViewerContent.querySelectorAll('h3, h4'));
            const links = [];
            headers.forEach((header) => {
                // remove the 'link' icon name from the inner text
                const name = header.innerText.trim().replace(/^link/, '');
                const { top } = header.getBoundingClientRect();
                links.push({
                    name,
                    type: header.tagName.toLowerCase(),
                    top: top,
                    id: header.id,
                    active: false
                });
            });
            this._linkSections[sectionIndex] = { name: sectionName, links };
            this._links.push(...links);
        }
        /** Gets the scroll offset of the scroll container */
        getScrollOffset() {
            const { top } = this._element.nativeElement.getBoundingClientRect();
            if (typeof this._scrollContainer.scrollTop !== 'undefined') {
                return this._scrollContainer.scrollTop + top;
            }
            else if (typeof this._scrollContainer.pageYOffset !== 'undefined') {
                return this._scrollContainer.pageYOffset + top;
            }
        }
        onScroll() {
            for (let i = 0; i < this._links.length; i++) {
                this._links[i].active = this.isLinkActive(this._links[i], this._links[i + 1]);
            }
        }
        isLinkActive(currentLink, nextLink) {
            // A link is considered active if the page is scrolled passed the anchor without also
            // being scrolled passed the next link
            const scrollOffset = this.getScrollOffset();
            return scrollOffset >= currentLink.top && !(nextLink && nextLink.top < scrollOffset);
        }
    };
    __setFunctionName(_classThis, "TableOfContents");
    (() => {
        _container_decorators = [(0, core_1.Input)()];
        __esDecorate(null, null, _container_decorators, { kind: "field", name: "container", static: false, private: false, access: { has: obj => "container" in obj, get: obj => obj.container, set: (obj, value) => { obj.container = value; } } }, _container_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        TableOfContents = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TableOfContents = _classThis;
})();
