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
exports.DemoMaterialModule = void 0;
const core_1 = require("@angular/core");
const a11y_1 = require("@angular/cdk/a11y");
const clipboard_1 = require("@angular/cdk/clipboard");
const drag_drop_1 = require("@angular/cdk/drag-drop");
const portal_1 = require("@angular/cdk/portal");
const scrolling_1 = require("@angular/cdk/scrolling");
const stepper_1 = require("@angular/cdk/stepper");
const table_1 = require("@angular/cdk/table");
const tree_1 = require("@angular/cdk/tree");
const autocomplete_1 = require("@angular/material/autocomplete");
const badge_1 = require("@angular/material/badge");
const bottom_sheet_1 = require("@angular/material/bottom-sheet");
const button_1 = require("@angular/material/button");
const button_toggle_1 = require("@angular/material/button-toggle");
const card_1 = require("@angular/material/card");
const checkbox_1 = require("@angular/material/checkbox");
const chips_1 = require("@angular/material/chips");
const stepper_2 = require("@angular/material/stepper");
const datepicker_1 = require("@angular/material/datepicker");
const dialog_1 = require("@angular/material/dialog");
const divider_1 = require("@angular/material/divider");
const expansion_1 = require("@angular/material/expansion");
const grid_list_1 = require("@angular/material/grid-list");
const icon_1 = require("@angular/material/icon");
const input_1 = require("@angular/material/input");
const list_1 = require("@angular/material/list");
const menu_1 = require("@angular/material/menu");
const core_2 = require("@angular/material/core");
const paginator_1 = require("@angular/material/paginator");
const progress_bar_1 = require("@angular/material/progress-bar");
const progress_spinner_1 = require("@angular/material/progress-spinner");
const radio_1 = require("@angular/material/radio");
const select_1 = require("@angular/material/select");
const sidenav_1 = require("@angular/material/sidenav");
const slider_1 = require("@angular/material/slider");
const slide_toggle_1 = require("@angular/material/slide-toggle");
const snack_bar_1 = require("@angular/material/snack-bar");
const sort_1 = require("@angular/material/sort");
const table_2 = require("@angular/material/table");
const tabs_1 = require("@angular/material/tabs");
const toolbar_1 = require("@angular/material/toolbar");
const tooltip_1 = require("@angular/material/tooltip");
const tree_2 = require("@angular/material/tree");
const overlay_1 = require("@angular/cdk/overlay");
exports.DemoMaterialModule = (() => {
    let _classDecorators = [(0, core_1.NgModule)({
            exports: [
                a11y_1.A11yModule,
                clipboard_1.ClipboardModule,
                stepper_1.CdkStepperModule,
                table_1.CdkTableModule,
                tree_1.CdkTreeModule,
                drag_drop_1.DragDropModule,
                autocomplete_1.MatAutocompleteModule,
                badge_1.MatBadgeModule,
                bottom_sheet_1.MatBottomSheetModule,
                button_1.MatButtonModule,
                button_toggle_1.MatButtonToggleModule,
                card_1.MatCardModule,
                checkbox_1.MatCheckboxModule,
                chips_1.MatChipsModule,
                stepper_2.MatStepperModule,
                datepicker_1.MatDatepickerModule,
                dialog_1.MatDialogModule,
                divider_1.MatDividerModule,
                expansion_1.MatExpansionModule,
                grid_list_1.MatGridListModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                list_1.MatListModule,
                menu_1.MatMenuModule,
                core_2.MatNativeDateModule,
                paginator_1.MatPaginatorModule,
                progress_bar_1.MatProgressBarModule,
                progress_spinner_1.MatProgressSpinnerModule,
                radio_1.MatRadioModule,
                core_2.MatRippleModule,
                select_1.MatSelectModule,
                sidenav_1.MatSidenavModule,
                slider_1.MatSliderModule,
                slide_toggle_1.MatSlideToggleModule,
                snack_bar_1.MatSnackBarModule,
                sort_1.MatSortModule,
                table_2.MatTableModule,
                tabs_1.MatTabsModule,
                toolbar_1.MatToolbarModule,
                tooltip_1.MatTooltipModule,
                tree_2.MatTreeModule,
                overlay_1.OverlayModule,
                portal_1.PortalModule,
                scrolling_1.ScrollingModule,
            ]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var DemoMaterialModule = _classThis = class {
    };
    __setFunctionName(_classThis, "DemoMaterialModule");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        DemoMaterialModule = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DemoMaterialModule = _classThis;
})();
