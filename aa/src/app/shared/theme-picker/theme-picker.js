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
exports.ThemePickerModule = exports.ThemePicker = void 0;
const core_1 = require("@angular/core");
const style_manager_1 = require("../style-manager");
const theme_storage_1 = require("./theme-storage/theme-storage");
const button_1 = require("@angular/material/button");
const icon_1 = require("@angular/material/icon");
const menu_1 = require("@angular/material/menu");
const tooltip_1 = require("@angular/material/tooltip");
const common_1 = require("@angular/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.ThemePicker = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'theme-picker',
            templateUrl: 'theme-picker.html',
            styleUrls: ['theme-picker.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            encapsulation: core_1.ViewEncapsulation.None
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ThemePicker = _classThis = class {
        constructor(styleManager, _themeStorage, _activatedRoute, liveAnnouncer, iconRegistry, sanitizer) {
            this.styleManager = styleManager;
            this._themeStorage = _themeStorage;
            this._activatedRoute = _activatedRoute;
            this.liveAnnouncer = liveAnnouncer;
            this._queryParamSubscription = rxjs_1.Subscription.EMPTY;
            // The below colors need to align with the themes defined in theme-picker.scss
            this.themes = [
                {
                    primary: '#673AB7',
                    accent: '#FFC107',
                    displayName: 'Deep Purple & Amber',
                    name: 'deeppurple-amber',
                    isDark: false,
                },
                {
                    primary: '#3F51B5',
                    accent: '#E91E63',
                    displayName: 'Indigo & Pink',
                    name: 'indigo-pink',
                    isDark: false,
                    isDefault: true,
                },
                {
                    primary: '#E91E63',
                    accent: '#607D8B',
                    displayName: 'Pink & Blue-grey',
                    name: 'pink-bluegrey',
                    isDark: true,
                },
                {
                    primary: '#9C27B0',
                    accent: '#4CAF50',
                    displayName: 'Purple & Green',
                    name: 'purple-green',
                    isDark: true,
                },
            ];
            iconRegistry.addSvgIcon('theme-example', sanitizer.bypassSecurityTrustResourceUrl('assets/img/theme-demo-icon.svg'));
            const themeName = this._themeStorage.getStoredThemeName();
            if (themeName) {
                this.selectTheme(themeName);
            }
        }
        ngOnInit() {
            this._queryParamSubscription = this._activatedRoute.queryParamMap
                .pipe((0, operators_1.map)((params) => params.get('theme')))
                .subscribe((themeName) => {
                if (themeName) {
                    this.selectTheme(themeName);
                }
            });
        }
        ngOnDestroy() {
            this._queryParamSubscription.unsubscribe();
        }
        selectTheme(themeName) {
            const theme = this.themes.find(currentTheme => currentTheme.name === themeName);
            if (!theme) {
                return;
            }
            this.currentTheme = theme;
            if (theme.isDefault) {
                this.styleManager.removeStyle('theme');
            }
            else {
                this.styleManager.setStyle('theme', `assets/${theme.name}.css`);
            }
            if (this.currentTheme) {
                this.liveAnnouncer.announce(`${theme.displayName} theme selected.`, 'polite', 3000);
                this._themeStorage.storeTheme(this.currentTheme);
            }
        }
    };
    __setFunctionName(_classThis, "ThemePicker");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ThemePicker = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ThemePicker = _classThis;
})();
exports.ThemePickerModule = (() => {
    let _classDecorators_1 = [(0, core_1.NgModule)({
            imports: [
                common_1.CommonModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                menu_1.MatMenuModule,
                tooltip_1.MatTooltipModule,
            ],
            exports: [ThemePicker],
            declarations: [ThemePicker],
            providers: [style_manager_1.StyleManager, theme_storage_1.ThemeStorage],
        })];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    var ThemePickerModule = _classThis_1 = class {
    };
    __setFunctionName(_classThis_1, "ThemePickerModule");
    (() => {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        ThemePickerModule = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return ThemePickerModule = _classThis_1;
})();
