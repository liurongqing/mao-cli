"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleViewer = void 0;
const core_1 = require("@angular/core");
const posts_1 = require("../../../posts");
const code_snippet_1 = require("./code-snippet");
/** Regular expression that matches a file name and its extension */
const fileExtensionRegex = /(.*)\.(\w+)/;
/** Preferred order for files of an example displayed in the viewer. */
const preferredExampleFileOrder = ['HTML', 'TS', 'CSS'];
exports.ExampleViewer = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'example-viewer',
            templateUrl: './example-viewer.html',
            styleUrls: ['./example-viewer.scss']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _snippet_decorators;
    let _snippet_initializers = [];
    let _view_decorators;
    let _view_initializers = [];
    let _showCompactToggle_decorators;
    let _showCompactToggle_initializers = [];
    let _get_example_decorators;
    let _region_decorators;
    let _region_initializers = [];
    let _file_decorators;
    let _file_initializers = [];
    var ExampleViewer = _classThis = class {
        /** String key of the currently displayed example. */
        get example() { return this._example; }
        set example(exampleName) {
            if (exampleName && exampleName !== this._example && posts_1.EXAMPLE_COMPONENTS[exampleName]) {
                this._example = exampleName;
                this.exampleData = posts_1.EXAMPLE_COMPONENTS[exampleName];
                this._generateExampleTabs();
                this._loadExampleComponent();
            }
            else {
                console.error(`Could not find example: ${exampleName}`);
            }
        }
        constructor(snackbar, clipboard) {
            this.snackbar = (__runInitializers(this, _instanceExtraInitializers), snackbar);
            this.clipboard = clipboard;
            this.snippet = __runInitializers(this, _snippet_initializers, void 0);
            /** The tab to jump to when expanding from snippet view. */
            this.selectedTab = 0;
            /** Data for the currently selected example. */
            this.exampleData = null;
            /** Component type for the current example. */
            this._exampleComponentType = null;
            /** Module factory that declares the example component. */
            this._exampleModuleFactory = null;
            /** View of the example component. */
            this.view = __runInitializers(this, _view_initializers, void 0);
            /** Whether to show toggle for compact view. */
            this.showCompactToggle = __runInitializers(this, _showCompactToggle_initializers, false);
            /** Range of lines of the source code to display in compact view. */
            this.region = __runInitializers(this, _region_initializers, void 0);
            /** Name of file to display in compact view. */
            this.file = __runInitializers(this, _file_initializers, void 0);
        }
        ngOnInit() {
            if (this.file) {
                this.fileUrl = this.generateUrl(this.file);
            }
        }
        /** Selects a given tab based on the example file of the compact view. */
        selectCorrectTab() {
            if (!this.file || !this.exampleTabs) {
                return;
            }
            const extension = this.file.substring(this.file.lastIndexOf('.') + 1);
            const exampleTabNames = this._getExampleTabNames();
            for (let i = 0; i < exampleTabNames.length; i++) {
                const tabName = exampleTabNames[i];
                if (tabName.toLowerCase() === extension || tabName.endsWith(`.${extension}`)) {
                    this.selectedTab = i;
                    return;
                }
            }
            console.error(`Could not find tab for file extension: "${extension}".`);
        }
        toggleCompactView() {
            if (this.view === 'snippet') {
                this.view = 'full';
                this.selectCorrectTab();
            }
            else {
                this.view = 'snippet';
            }
        }
        toggleSourceView() {
            this.view === 'full' ? this.view = 'demo' : this.view = 'full';
        }
        copySource(text) {
            if (this.clipboard.copy(text)) {
                this.snackbar.open('Code copied', '', { duration: 2500 });
            }
            else {
                this.snackbar.open('Copy failed. Please try again!', '', { duration: 2500 });
            }
        }
        generateUrl(file) {
            const lastDotIndex = file.lastIndexOf('.');
            const contentBeforeDot = file.substring(0, lastDotIndex);
            const contentAfterDot = file.substring(lastDotIndex + 1);
            let fileName;
            if (this.region) {
                fileName = `${contentBeforeDot}_${this.region}-${contentAfterDot}.html`;
            }
            else {
                fileName = `${contentBeforeDot}-${contentAfterDot}.html`;
            }
            return this.exampleData ?
                `/docs-content/examples-highlighted/${this.exampleData.packagePath}/${fileName}` : '';
        }
        _getExampleTabNames() {
            return Object.keys(this.exampleTabs).sort((a, b) => {
                let indexA = preferredExampleFileOrder.indexOf(a);
                let indexB = preferredExampleFileOrder.indexOf(b);
                // Files which are not part of the preferred example file order should be
                // moved after all items with a preferred index.
                if (indexA === -1)
                    indexA = preferredExampleFileOrder.length;
                if (indexB === -1)
                    indexB = preferredExampleFileOrder.length;
                return (indexA - indexB) || 1;
            });
        }
        /** Loads the component and module factory for the currently selected example. */
        _loadExampleComponent() {
            return __awaiter(this, void 0, void 0, function* () {
                const { componentName, module } = posts_1.EXAMPLE_COMPONENTS[this._example];
                // Lazily loads the example package that contains the requested example. Webpack needs to be
                // able to statically determine possible imports for proper chunk generation. Explicitly
                // specifying the path to the `fesm2015` folder as first segment instructs Webpack to generate
                // chunks for each example flat esm2015 bundle. To avoid generating unnecessary chunks for
                // source maps (which would never be loaded), we instruct Webpack to exclude source map
                // files. More details: https://webpack.js.org/api/module-methods/#magic-comments.
                const moduleExports = yield Promise.resolve(`${
                /* webpackExclude: /\.map$/ */
                '../../../posts/fesm2015/' + module.importSpecifier}`).then(s => __importStar(require(s)));
                this._exampleComponentType = moduleExports[componentName];
                // The components examples package is built with Ivy. This means that no factory files are
                // generated. To retrieve the factory of the AOT compiled module, we simply pass the module
                // class symbol to Ivy's module factory constructor. There is no equivalent for View Engine,
                // where factories are stored in separate files. Hence the API is currently Ivy-only.
                this._exampleModuleFactory = new core_1.ɵNgModuleFactory(moduleExports[module.name]);
            });
        }
        _generateExampleTabs() {
            this.exampleTabs = {};
            if (this.exampleData) {
                // Name of the default example files. If files with such name exist within the example,
                // we provide a shorthand for them within the example tabs (for less verbose tabs).
                const exampleBaseFileName = `${this.example}-example`;
                const docsContentPath = `/docs-content/examples-highlighted/${this.exampleData.packagePath}`;
                for (const fileName of this.exampleData.files) {
                    // Since the additional files refer to the original file name, we need to transform
                    // the file name to match the highlighted HTML file that displays the source.
                    const fileSourceName = fileName.replace(fileExtensionRegex, '$1-$2.html');
                    const importPath = `${docsContentPath}/${fileSourceName}`;
                    if (fileName === `${exampleBaseFileName}.ts`) {
                        this.exampleTabs['TS'] = importPath;
                    }
                    else if (fileName === `${exampleBaseFileName}.css`) {
                        this.exampleTabs['CSS'] = importPath;
                    }
                    else if (fileName === `${exampleBaseFileName}.html`) {
                        this.exampleTabs['HTML'] = importPath;
                    }
                    else {
                        this.exampleTabs[fileName] = importPath;
                    }
                }
            }
        }
    };
    __setFunctionName(_classThis, "ExampleViewer");
    (() => {
        _snippet_decorators = [(0, core_1.ViewChildren)(code_snippet_1.CodeSnippet)];
        _view_decorators = [(0, core_1.Input)()];
        _showCompactToggle_decorators = [(0, core_1.Input)()];
        _get_example_decorators = [(0, core_1.Input)()];
        _region_decorators = [(0, core_1.Input)()];
        _file_decorators = [(0, core_1.Input)()];
        __esDecorate(_classThis, null, _get_example_decorators, { kind: "getter", name: "example", static: false, private: false, access: { has: obj => "example" in obj, get: obj => obj.example } }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _snippet_decorators, { kind: "field", name: "snippet", static: false, private: false, access: { has: obj => "snippet" in obj, get: obj => obj.snippet, set: (obj, value) => { obj.snippet = value; } } }, _snippet_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _view_decorators, { kind: "field", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } } }, _view_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _showCompactToggle_decorators, { kind: "field", name: "showCompactToggle", static: false, private: false, access: { has: obj => "showCompactToggle" in obj, get: obj => obj.showCompactToggle, set: (obj, value) => { obj.showCompactToggle = value; } } }, _showCompactToggle_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _region_decorators, { kind: "field", name: "region", static: false, private: false, access: { has: obj => "region" in obj, get: obj => obj.region, set: (obj, value) => { obj.region = value; } } }, _region_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _file_decorators, { kind: "field", name: "file", static: false, private: false, access: { has: obj => "file" in obj, get: obj => obj.file, set: (obj, value) => { obj.file = value; } } }, _file_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ExampleViewer = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ExampleViewer = _classThis;
})();
