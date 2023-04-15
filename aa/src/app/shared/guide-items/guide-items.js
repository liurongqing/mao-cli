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
exports.GuideItems = void 0;
const core_1 = require("@angular/core");
const GUIDES = [
    {
        id: 'getting-started',
        name: 'Getting started',
        document: '/docs-content/guides/getting-started.html',
        overview: 'Add Angular Material to your project!'
    },
    {
        id: 'schematics',
        name: 'Schematics',
        document: '/docs-content/guides/schematics.html',
        overview: 'Use schematics to quickly generate views with Material Design components.'
    },
    {
        id: 'theming',
        name: 'Theming Angular Material',
        document: '/docs-content/guides/theming.html',
        overview: `Customize your application with Angular Material's theming system.`
    },
    {
        id: 'theming-your-components',
        name: 'Theming your own components',
        document: '/docs-content/guides/theming-your-components.html',
        overview: `Use Angular Material's theming system in your own custom components.`
    },
    {
        id: 'typography',
        name: `Customizing Typography`,
        document: '/docs-content/guides/typography.html',
        overview: 'Configure the typography settings for Angular Material components.'
    },
    {
        id: 'customizing-component-styles',
        name: 'Customizing component styles',
        document: '/docs-content/guides/customizing-component-styles.html',
        overview: 'Understand how to approach style customization with Angular Material components.'
    },
    {
        id: 'creating-a-custom-form-field-control',
        name: 'Custom form field control',
        document: '/docs-content/guides/creating-a-custom-form-field-control.html',
        overview: 'Build a custom control that integrates with `<mat-form-field>`.'
    },
    {
        id: 'elevation',
        name: 'Elevation helpers',
        document: '/docs-content/guides/elevation.html',
        overview: 'Enhance your components with elevation and depth.'
    },
    {
        id: 'creating-a-custom-stepper-using-the-cdk-stepper',
        name: 'Custom stepper using the CdkStepper',
        document: '/docs-content/guides/creating-a-custom-stepper-using-the-cdk-stepper.html',
        overview: 'Create a custom stepper components using Angular CDK.'
    },
    {
        id: 'using-component-harnesses',
        name: `Testing with component harnesses`,
        document: '/docs-content/guides/using-component-harnesses.html',
        overview: 'Write tests with component harnesses for convenience and meaningful results.'
    }
];
exports.GuideItems = (() => {
    let _classDecorators = [(0, core_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var GuideItems = _classThis = class {
        getAllItems() {
            return GUIDES;
        }
        getItemById(id) {
            return GUIDES.find(i => i.id === id);
        }
    };
    __setFunctionName(_classThis, "GuideItems");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        GuideItems = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GuideItems = _classThis;
})();
