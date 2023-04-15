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
exports.DocumentationItems = exports.SECTIONS = void 0;
const core_1 = require("@angular/core");
const posts_1 = require("../../../posts");
console.log('EXAMPLE_COMPONENTS', posts_1.EXAMPLE_COMPONENTS);
const exampleNames = Object.keys(posts_1.EXAMPLE_COMPONENTS);
const LABS = 'labs';
const GAME = 'game';
const PLUGIN = 'plugin';
const PROBLEM = 'problem';
const CDK = 'cdk';
const COMPONENTS = 'components';
exports.SECTIONS = {
    [LABS]: {
        name: '实验室',
        summary: '基于官方例子的整理，<a href="https://labs.phaser.io/">官方例子</a>'
    },
    [GAME]: {
        name: '游戏教程',
        summary: '完整小游戏教程'
    },
    [PLUGIN]: {
        name: '插件',
        summary: '游戏插件'
    },
    [PROBLEM]: {
        name: 'Q & A',
        summary: '常见问题与解决方案'
    },
    [COMPONENTS]: {
        name: 'Components',
        summary: 'Angular Material offers a wide variety of UI components based on the <a' +
            ' href="https://material.io/components">Material Design specification</a>'
    },
    [CDK]: {
        name: 'CDK',
        summary: 'The Component Dev Kit (CDK) is a set of behavior primitives for building UI' +
            ' components.'
    },
};
const DOCS = {
    [LABS]: [
        {
            id: 'actions',
            name: 'Actions',
            summary: '一些常用的方法',
            exampleSpecs: {
                prefix: 'labs-actions-'
            }
        }
    ],
    [COMPONENTS]: [
        {
            id: 'autocomplete',
            name: 'Autocomplete',
            summary: 'Suggests relevant options as the user types.',
            exampleSpecs: {
                prefix: 'autocomplete-',
            },
            additionalApiDocs: [{
                    name: 'Testing', path: 'material-autocomplete-testing.html'
                }],
        },
        {
            id: 'badge',
            name: 'Badge',
            summary: 'A small value indicator that can be overlaid on another object.',
            exampleSpecs: {
                prefix: 'badge-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-badge-testing.html' }],
        },
        {
            id: 'bottom-sheet',
            name: 'Bottom Sheet',
            summary: 'A large interactive panel primarily for mobile devices.',
            exampleSpecs: {
                prefix: 'bottom-sheet-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-bottom-sheet-testing.html' }],
        },
        {
            id: 'button',
            name: 'Button',
            summary: 'An interactive button with a range of presentation options.',
            exampleSpecs: {
                prefix: 'button-',
                exclude: ['button-toggle-']
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-button-testing.html' }],
        },
        {
            id: 'button-toggle',
            name: 'Button toggle',
            summary: 'A groupable on/off toggle for enabling and disabling options.',
            exampleSpecs: {
                prefix: 'button-toggle-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-button-toggle-testing.html' }],
        },
        {
            id: 'card',
            name: 'Card',
            summary: 'A styled container for pieces of itemized content.',
            exampleSpecs: {
                prefix: 'card-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-card-testing.html' }],
        },
        {
            id: 'checkbox',
            name: 'Checkbox',
            summary: 'Captures boolean input with an optional indeterminate mode.',
            exampleSpecs: {
                prefix: 'checkbox-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-checkbox-testing.html' }],
        },
        {
            id: 'chips',
            name: 'Chips',
            summary: 'Presents a list of items as a set of small, tactile entities.',
            exampleSpecs: {
                prefix: 'chips-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-chips-testing.html' }],
        },
        {
            id: 'datepicker',
            name: 'Datepicker',
            summary: 'Captures dates, agnostic about their internal representation.',
            exampleSpecs: {
                prefix: 'datepicker-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-datepicker-testing.html' }],
        },
        {
            id: 'dialog',
            name: 'Dialog',
            summary: 'A configurable modal that displays dynamic content.',
            exampleSpecs: {
                prefix: 'dialog-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-dialog-testing.html' }],
        },
        {
            id: 'divider',
            name: 'Divider',
            summary: 'A vertical or horizontal visual divider.',
            exampleSpecs: {
                prefix: 'divider-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-divider-testing.html' }],
        },
        {
            id: 'expansion',
            name: 'Expansion Panel',
            summary: 'A container which can be expanded to reveal more content.',
            exampleSpecs: {
                prefix: 'expansion-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-expansion-testing.html' }],
        },
        {
            id: 'form-field',
            name: 'Form field',
            summary: 'Wraps input fields so they are displayed consistently.',
            exampleSpecs: {
                prefix: 'form-field-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-form-field-testing.html' }],
        },
        {
            id: 'grid-list',
            name: 'Grid list',
            summary: 'A flexible structure for presenting content items in a grid.',
            exampleSpecs: {
                prefix: 'grid-list-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-grid-list-testing.html' }],
        },
        {
            id: 'icon',
            name: 'Icon',
            summary: 'Renders a specified icon.',
            exampleSpecs: {
                prefix: 'icon-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-icon-testing.html' }],
        },
        {
            id: 'input',
            name: 'Input',
            summary: 'Enables native inputs to be used within a Form field.',
            exampleSpecs: {
                prefix: 'input-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-input-testing.html' }],
        },
        {
            id: 'list',
            name: 'List',
            summary: 'Presents conventional lists of items.',
            exampleSpecs: {
                prefix: 'list-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-list-testing.html' }],
        },
        {
            id: 'menu',
            name: 'Menu',
            summary: 'A floating panel of nestable options.',
            exampleSpecs: {
                prefix: 'menu-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-menu-testing.html' }],
        },
        {
            id: 'paginator',
            name: 'Paginator',
            summary: 'Controls for displaying paged data.',
            exampleSpecs: {
                prefix: 'paginator-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-paginator-testing.html' }],
        },
        {
            id: 'progress-bar',
            name: 'Progress bar',
            summary: 'A linear progress indicator.',
            exampleSpecs: {
                prefix: 'progress-bar-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-progress-bar-testing.html' }],
        },
        {
            id: 'progress-spinner',
            name: 'Progress spinner',
            summary: 'A circular progress indicator.',
            exampleSpecs: {
                prefix: 'progress-spinner-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-progress-spinner-testing.html' }],
        },
        {
            id: 'radio',
            name: 'Radio button',
            summary: 'Allows the user to select one option from a group.',
            exampleSpecs: {
                prefix: 'radio-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-radio-testing.html' }],
        },
        {
            id: 'ripple',
            name: 'Ripples',
            overviewPath: 'material/core/ripple/ripple.html',
            summary: 'Directive for adding Material Design ripple effects',
            exampleSpecs: {
                prefix: 'ripple-',
            },
        },
        {
            id: 'select',
            name: 'Select',
            summary: 'Allows the user to select one or more options using a dropdown.',
            exampleSpecs: {
                prefix: 'select-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-select-testing.html' }],
        },
        {
            id: 'sidenav',
            name: 'Sidenav',
            summary: 'A container for content that is fixed to one side of the screen.',
            exampleSpecs: {
                prefix: 'sidenav-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-sidenav-testing.html' }],
        },
        {
            id: 'slide-toggle',
            name: 'Slide toggle',
            summary: 'Captures boolean values as a clickable and draggable switch.',
            exampleSpecs: {
                prefix: 'slide-toggle-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-slide-toggle-testing.html' }],
        },
        {
            id: 'slider',
            name: 'Slider',
            summary: 'Allows the user to input a value by dragging along a slider.',
            exampleSpecs: {
                prefix: 'slider-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-slider-testing.html' }],
        },
        {
            id: 'snack-bar',
            name: 'Snackbar',
            summary: 'Displays short actionable messages as an uninvasive alert.',
            exampleSpecs: {
                prefix: 'snack-bar-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-snack-bar-testing.html' }],
        },
        {
            id: 'sort',
            name: 'Sort header',
            summary: 'Allows the user to configure how tabular data is sorted.',
            exampleSpecs: {
                prefix: 'sort-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-sort-testing.html' }],
        },
        {
            id: 'stepper',
            name: 'Stepper',
            summary: 'Presents content as steps through which to progress.',
            exampleSpecs: {
                prefix: 'stepper-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-stepper-testing.html' }],
        },
        {
            id: 'table',
            name: 'Table',
            summary: 'A configurable component for displaying tabular data.',
            exampleSpecs: {
                prefix: 'table-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-table-testing.html' }],
        },
        {
            id: 'tabs',
            name: 'Tabs',
            summary: 'Only presents one view at a time from a provided set of views.',
            exampleSpecs: {
                prefix: 'tab-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-tabs-testing.html' }],
        },
        {
            id: 'toolbar',
            name: 'Toolbar',
            summary: 'A container for top-level titles and controls.',
            exampleSpecs: {
                prefix: 'toolbar-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-toolbar-testing.html' }],
        },
        {
            id: 'tooltip',
            name: 'Tooltip',
            summary: 'Displays floating content when an object is hovered.',
            exampleSpecs: {
                prefix: 'tooltip-',
            },
            additionalApiDocs: [{ name: 'Testing', path: 'material-tooltip-testing.html' }],
        },
        {
            id: 'tree',
            name: 'Tree',
            summary: 'Presents hierarchical content as an expandable tree.',
            exampleSpecs: {
                prefix: 'tree-',
            },
        },
    ],
    [CDK]: [
        {
            id: 'a11y',
            name: 'Accessibility',
            summary: 'Utilities for screen readers, focus and more.',
            exampleSpecs: {
                prefix: 'focus-monitor-',
            },
        },
        {
            id: 'bidi',
            name: 'Bidirectionality',
            summary: 'Utilities to respond to changes in LTR/RTL layout direction.',
            exampleSpecs: {
                prefix: 'cdk-bidi-',
            },
        },
        {
            id: 'clipboard',
            name: 'Clipboard',
            summary: 'Helpers for working with the system clipboard.',
            exampleSpecs: {
                prefix: 'cdk-clipboard-',
            },
        },
        {
            id: 'drag-drop',
            name: 'Drag and Drop',
            summary: 'Directives enabling drag-and-drop interactions',
            exampleSpecs: {
                prefix: 'cdk-drag-drop-',
            },
        },
        {
            id: 'layout',
            name: 'Layout',
            summary: 'Utilities to respond to changes in viewport size.',
            exampleSpecs: {
                prefix: 'cdk-layout-',
            },
        },
        {
            id: 'observers',
            name: 'Observers',
            summary: 'Utilities to respond to changes to element properties.',
            exampleSpecs: {
                prefix: 'cdk-observers-',
            },
        },
        {
            id: 'overlay',
            name: 'Overlay',
            summary: 'Utilities for dynamically displaying floating content.',
            exampleSpecs: {
                prefix: 'cdk-overlay-',
            },
        },
        {
            id: 'platform',
            name: 'Platform',
            summary: 'Provides information about the user\'s platform.',
            exampleSpecs: {
                prefix: 'cdk-platform-',
            },
        },
        {
            id: 'portal',
            name: 'Portal',
            summary: 'Utilities for dynamically displaying content into a target.',
            exampleSpecs: {
                prefix: 'cdk-portal-',
            },
        },
        {
            id: 'scrolling',
            name: 'Scrolling',
            summary: 'Directives for managing scroll events.',
            exampleSpecs: {
                prefix: 'cdk-virtual-scroll-',
            },
        },
        {
            id: 'stepper',
            name: 'Stepper',
            summary: 'Presents content as steps through which to progress.',
            exampleSpecs: {
                prefix: 'cdk-custom-stepper-',
            },
        },
        {
            id: 'table',
            name: 'Table',
            summary: 'A configurable component for displaying tabular data.',
            exampleSpecs: {
                prefix: 'cdk-table-',
            },
        },
        {
            id: 'test-harnesses',
            name: 'Component Harnesses',
            summary: 'Foundation for component test harnesses.',
            exampleSpecs: {
                prefix: 'cdk-test-harnesses-',
            },
            overviewPath: 'cdk/testing/test-harnesses.html',
            apiDocId: 'cdk-testing',
            additionalApiDocs: [
                {
                    name: 'Testbed',
                    path: 'cdk-testing-testbed.html'
                },
                {
                    name: 'Protractor',
                    path: 'cdk-testing-protractor.html'
                }
            ],
        },
        {
            id: 'text-field',
            name: 'Text field',
            summary: 'Utilities for working with text input fields.',
            exampleSpecs: {
                prefix: 'text-field-',
            },
        },
        {
            id: 'tree',
            name: 'Tree',
            summary: 'Presents hierarchical content as an expandable tree.',
            exampleSpecs: {
                prefix: 'cdk-tree-',
            },
        },
    ]
};
for (const doc of DOCS[LABS]) {
    doc.packageName = 'labs';
    // 查找模块指定前缀及排除指定前缀
    doc.examples =
        exampleNames
            .filter(key => {
            var _a;
            return key.match(RegExp(`^${doc.exampleSpecs.prefix}`)) &&
                !((_a = doc.exampleSpecs.exclude) === null || _a === void 0 ? void 0 : _a.some(excludeName => key.indexOf(excludeName) === 0));
        });
}
for (const doc of DOCS[COMPONENTS]) {
    doc.packageName = 'material';
    // 查找模块指定前缀及排除指定前缀
    doc.examples =
        exampleNames
            .filter(key => {
            var _a;
            return key.match(RegExp(`^${doc.exampleSpecs.prefix}`)) &&
                !((_a = doc.exampleSpecs.exclude) === null || _a === void 0 ? void 0 : _a.some(excludeName => key.indexOf(excludeName) === 0));
        });
}
for (const doc of DOCS[CDK]) {
    doc.packageName = 'cdk';
    doc.examples =
        exampleNames
            .filter(key => {
            var _a;
            return key.match(RegExp(`^${doc.exampleSpecs.prefix}`)) &&
                !((_a = doc.exampleSpecs.exclude) === null || _a === void 0 ? void 0 : _a.includes(key));
        });
}
const ALL_COMPONENTS = DOCS[COMPONENTS];
const ALL_CDK = DOCS[CDK];
const ALL_LABS = DOCS[LABS];
const ALL_DOCS = ALL_COMPONENTS.concat(ALL_CDK).concat(ALL_LABS);
exports.DocumentationItems = (() => {
    let _classDecorators = [(0, core_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var DocumentationItems = _classThis = class {
        getItems(section) {
            if (section === COMPONENTS) {
                return ALL_COMPONENTS;
            }
            if (section === CDK) {
                return ALL_CDK;
            }
            if (section === LABS) {
                return ALL_LABS;
            }
            return [];
        }
        getItemById(id, section) {
            let sectionLookup = section === 'components' ? 'material' : section;
            console.log('sectionLookup', sectionLookup);
            // const sectionLookup = section === 'cdk' ? 'cdk' : 'material';
            return ALL_DOCS.find(doc => doc.id === id && doc.packageName === sectionLookup);
        }
    };
    __setFunctionName(_classThis, "DocumentationItems");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        DocumentationItems = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DocumentationItems = _classThis;
})();
