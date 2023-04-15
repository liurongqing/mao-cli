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
const testing_1 = require("@angular/common/http/testing");
const core_1 = require("@angular/core");
const testing_2 = require("@angular/core/testing");
const platform_browser_1 = require("@angular/platform-browser");
const testing_module_1 = require("../../testing/testing-module");
const doc_viewer_1 = require("./doc-viewer");
const doc_viewer_module_1 = require("./doc-viewer-module");
const example_viewer_1 = require("../example-viewer/example-viewer");
describe('DocViewer', () => {
    let http;
    beforeEach((0, testing_2.async)(() => {
        testing_2.TestBed.configureTestingModule({
            imports: [doc_viewer_module_1.DocViewerModule, testing_module_1.DocsAppTestingModule],
            declarations: [DocViewerTestComponent],
        }).compileComponents();
    }));
    beforeEach((0, testing_2.inject)([testing_1.HttpTestingController], (h) => {
        http = h;
    }));
    it('should load doc into innerHTML', () => {
        const fixture = testing_2.TestBed.createComponent(DocViewerTestComponent);
        fixture.detectChanges();
        const url = fixture.componentInstance.documentUrl;
        http.expectOne(url).flush(FAKE_DOCS[url]);
        const docViewer = fixture.debugElement.query(platform_browser_1.By.directive(doc_viewer_1.DocViewer));
        expect(docViewer).not.toBeNull();
        expect(docViewer.nativeElement.innerHTML).toBe('<div>my docs page</div>');
    });
    it('should save textContent of the doc', () => {
        const fixture = testing_2.TestBed.createComponent(DocViewerTestComponent);
        fixture.detectChanges();
        const url = fixture.componentInstance.documentUrl;
        http.expectOne(url).flush(FAKE_DOCS[url]);
        const docViewer = fixture.debugElement.query(platform_browser_1.By.directive(doc_viewer_1.DocViewer));
        expect(docViewer.componentInstance.textContent).toBe('my docs page');
    });
    it('should correct hash based links', () => {
        const fixture = testing_2.TestBed.createComponent(DocViewerTestComponent);
        fixture.componentInstance.documentUrl = `http://material.angular.io/doc-with-links.html`;
        fixture.detectChanges();
        const url = fixture.componentInstance.documentUrl;
        http.expectOne(url).flush(FAKE_DOCS[url]);
        const docViewer = fixture.debugElement.query(platform_browser_1.By.directive(doc_viewer_1.DocViewer));
        // Our test runner runs at the page /context.html, so it will be the prepended value.
        expect(docViewer.nativeElement.innerHTML).toContain(`/context.html#test"`);
    });
    it('should preserve document element ids', () => {
        const fixture = testing_2.TestBed.createComponent(DocViewerTestComponent);
        const testUrl = 'http://material.angular.io/doc-with-element-ids.html';
        fixture.componentInstance.documentUrl = testUrl;
        fixture.detectChanges();
        http.expectOne(testUrl).flush(FAKE_DOCS[testUrl]);
        const docViewer = fixture.debugElement.query(platform_browser_1.By.directive(doc_viewer_1.DocViewer));
        expect(docViewer.nativeElement.innerHTML).toContain('id="my-header"');
    });
    it('should instantiate example viewer in snippet view with region', () => {
        const fixture = testing_2.TestBed.createComponent(DocViewerTestComponent);
        const testUrl = 'http://material.angular.io/snippet-example.html';
        fixture.componentInstance.documentUrl = testUrl;
        fixture.detectChanges();
        http.expectOne(testUrl).flush(FAKE_DOCS[testUrl]);
        const exampleViewer = fixture.debugElement.query(platform_browser_1.By.directive(example_viewer_1.ExampleViewer));
        expect(exampleViewer.componentInstance.file).toBe('some-example.html');
        expect(exampleViewer.componentInstance.showCompactToggle).toBeTrue();
        expect(exampleViewer.componentInstance.region).toBe('some-region');
        expect(exampleViewer.componentInstance.view).toBe('snippet');
    });
    it('should instantiate example viewer in demo view', () => {
        const fixture = testing_2.TestBed.createComponent(DocViewerTestComponent);
        const testUrl = 'http://material.angular.io/demo-example.html';
        fixture.componentInstance.documentUrl = testUrl;
        fixture.detectChanges();
        http.expectOne(testUrl).flush(FAKE_DOCS[testUrl]);
        const exampleViewer = fixture.debugElement.query(platform_browser_1.By.directive(example_viewer_1.ExampleViewer));
        expect(exampleViewer.componentInstance.file).toBeUndefined();
        expect(exampleViewer.componentInstance.showCompactToggle).toBeFalse();
        expect(exampleViewer.componentInstance.view).toBe('demo');
    });
    it('should instantiate example viewer in snippet view with whole snippet', () => {
        const fixture = testing_2.TestBed.createComponent(DocViewerTestComponent);
        const testUrl = 'http://material.angular.io/whole-snippet-example.html';
        fixture.componentInstance.documentUrl = testUrl;
        fixture.detectChanges();
        http.expectOne(testUrl).flush(FAKE_DOCS[testUrl]);
        const exampleViewer = fixture.debugElement.query(platform_browser_1.By.directive(example_viewer_1.ExampleViewer));
        expect(exampleViewer.componentInstance.file).toBe('whole-snippet-example.ts');
        expect(exampleViewer.componentInstance.showCompactToggle).toBeTrue();
        expect(exampleViewer.componentInstance.view).toBe('snippet');
    });
    it('should show error message when doc not found', () => {
        spyOn(console, 'log');
        const fixture = testing_2.TestBed.createComponent(DocViewerTestComponent);
        const docViewer = fixture.debugElement.query(platform_browser_1.By.directive(doc_viewer_1.DocViewer));
        fixture.detectChanges();
        const url = fixture.componentInstance.documentUrl;
        http.expectOne(url).flush(FAKE_DOCS[url]);
        const errorUrl = 'http://material.angular.io/error-doc.html';
        fixture.componentInstance.documentUrl = errorUrl;
        fixture.detectChanges();
        http.expectOne(errorUrl).flush('Not found', { status: 404, statusText: 'Not found' });
        expect(docViewer).not.toBeNull();
        expect(docViewer.nativeElement.innerHTML).toContain('Failed to load document: http://material.angular.io/error-doc.html');
        expect(console.log).toHaveBeenCalledTimes(1);
    });
    // TODO(mmalerba): Add test that example-viewer is instantiated.
});
let DocViewerTestComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'test',
            template: `<doc-viewer [documentUrl]="documentUrl"></doc-viewer>`,
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var DocViewerTestComponent = _classThis = class {
        constructor() {
            this.documentUrl = 'http://material.angular.io/simple-doc.html';
        }
    };
    __setFunctionName(_classThis, "DocViewerTestComponent");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        DocViewerTestComponent = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DocViewerTestComponent = _classThis;
})();
const FAKE_DOCS = {
    'http://material.angular.io/simple-doc.html': '<div>my docs page</div>',
    'http://material.angular.io/doc-with-example.html': `
      <div>Check out this example:</div>
      <div material-docs-example="some-example"></div>`,
    'http://material.angular.io/doc-with-links.html': `<a href="#test">Test link</a>`,
    'http://material.angular.io/doc-with-element-ids.html': `<h4 id="my-header">Header</h4>`,
    'http://material.angular.io/snippet-example.html': '<div material-docs-example="some-example" file="some-example.html"' +
        ' region="some-region"></div>',
    'http://material.angular.io/demo-example.html': '<div material-docs-example="demo-example"></div>',
    'http://material.angular.io/whole-snippet-example.html': '<div material-docs-example="whole-snippet-example" file="whole-snippet-example.ts"></div>',
};
