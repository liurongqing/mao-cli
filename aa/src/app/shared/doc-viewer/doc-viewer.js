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
exports.DocViewer = void 0;
const portal_1 = require("@angular/cdk/portal");
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
const example_viewer_1 = require("../example-viewer/example-viewer");
const header_link_1 = require("./header-link");
exports.DocViewer = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'doc-viewer',
            template: '加载中...',
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _set_documentUrl_decorators;
    let _contentRendered_decorators;
    let _contentRendered_initializers = [];
    var DocViewer = _classThis = class {
        /** The URL of the document to display. */
        set documentUrl(url) {
            if (url !== undefined) {
                this._fetchDocument(url);
            }
        }
        static initExampleViewer(exampleViewerComponent, example, file, region) {
            exampleViewerComponent.example = example;
            if (file) {
                // if the html div has field `file` then it should be in compact view to show the code
                // snippet
                exampleViewerComponent.view = 'snippet';
                exampleViewerComponent.showCompactToggle = true;
                exampleViewerComponent.file = file;
                if (region) {
                    // `region` should only exist when `file` exists but not vice versa
                    // It is valid for embedded example snippets to show the whole file (esp short files)
                    exampleViewerComponent.region = region;
                }
            }
            else {
                // otherwise it is an embedded demo
                exampleViewerComponent.view = 'demo';
            }
        }
        constructor(_appRef, _componentFactoryResolver, _elementRef, _http, _injector, _viewContainerRef, _ngZone, _domSanitizer) {
            this._appRef = (__runInitializers(this, _instanceExtraInitializers), _appRef);
            this._componentFactoryResolver = _componentFactoryResolver;
            this._elementRef = _elementRef;
            this._http = _http;
            this._injector = _injector;
            this._viewContainerRef = _viewContainerRef;
            this._ngZone = _ngZone;
            this._domSanitizer = _domSanitizer;
            this._portalHosts = [];
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.contentRendered = __runInitializers(this, _contentRendered_initializers, new core_1.EventEmitter());
            /** The document text. It should not be HTML encoded. */
            this.textContent = '';
        }
        /** Fetch a document by URL. */
        _fetchDocument(url) {
            // Cancel previous pending request
            if (this._documentFetchSubscription) {
                this._documentFetchSubscription.unsubscribe();
            }
            this._documentFetchSubscription = this._http.get(url, { responseType: 'text' }).subscribe(document => this.updateDocument(document), error => this.showError(url, error));
        }
        /**
         * Updates the displayed document.
         * @param rawDocument The raw document content to show.
         */
        updateDocument(rawDocument) {
            // Replace all relative fragment URLs with absolute fragment URLs. e.g. "#my-section" becomes
            // "/components/button/api#my-section". This is necessary because otherwise these fragment
            // links would redirect to "/#my-section".
            rawDocument = rawDocument.replace(/href="#([^"]*)"/g, (_m, fragmentUrl) => {
                const absoluteUrl = `${location.pathname}#${fragmentUrl}`;
                return `href="${this._domSanitizer.sanitize(core_1.SecurityContext.URL, absoluteUrl)}"`;
            });
            this._elementRef.nativeElement.innerHTML = rawDocument;
            this.textContent = this._elementRef.nativeElement.textContent;
            this._loadComponents('material-docs-example', example_viewer_1.ExampleViewer);
            this._loadComponents('header-link', header_link_1.HeaderLink);
            // Resolving and creating components dynamically in Angular happens synchronously, but since
            // we want to emit the output if the components are actually rendered completely, we wait
            // until the Angular zone becomes stable.
            this._ngZone.onStable
                .pipe((0, operators_1.take)(1))
                .subscribe(() => this.contentRendered.next(this._elementRef.nativeElement));
        }
        /** Show an error that occurred when fetching a document. */
        showError(url, error) {
            console.log(error);
            this._elementRef.nativeElement.innerText =
                `Failed to load document: ${url}. Error: ${error.statusText}`;
        }
        /** Instantiate a ExampleViewer for each example. */
        _loadComponents(componentName, componentClass) {
            const exampleElements = this._elementRef.nativeElement.querySelectorAll(`[${componentName}]`);
            [...exampleElements].forEach((element) => {
                const example = element.getAttribute(componentName);
                const region = element.getAttribute('region');
                const file = element.getAttribute('file');
                const portalHost = new portal_1.DomPortalOutlet(element, this._componentFactoryResolver, this._appRef, this._injector);
                const examplePortal = new portal_1.ComponentPortal(componentClass, this._viewContainerRef);
                const exampleViewer = portalHost.attach(examplePortal);
                const exampleViewerComponent = exampleViewer.instance;
                if (example !== null) {
                    DocViewer.initExampleViewer(exampleViewerComponent, example, file, region);
                }
                this._portalHosts.push(portalHost);
            });
        }
        _clearLiveExamples() {
            this._portalHosts.forEach(h => h.dispose());
            this._portalHosts = [];
        }
        ngOnDestroy() {
            this._clearLiveExamples();
            if (this._documentFetchSubscription) {
                this._documentFetchSubscription.unsubscribe();
            }
        }
    };
    __setFunctionName(_classThis, "DocViewer");
    (() => {
        _name_decorators = [(0, core_1.Input)()];
        _set_documentUrl_decorators = [(0, core_1.Input)()];
        _contentRendered_decorators = [(0, core_1.Output)()];
        __esDecorate(_classThis, null, _set_documentUrl_decorators, { kind: "setter", name: "documentUrl", static: false, private: false, access: { has: obj => "documentUrl" in obj, set: (obj, value) => { obj.documentUrl = value; } } }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } } }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _contentRendered_decorators, { kind: "field", name: "contentRendered", static: false, private: false, access: { has: obj => "contentRendered" in obj, get: obj => obj.contentRendered, set: (obj, value) => { obj.contentRendered = value; } } }, _contentRendered_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        DocViewer = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DocViewer = _classThis;
})();
