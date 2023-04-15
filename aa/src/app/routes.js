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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MATERIAL_DOCS_ROUTES = void 0;
const component_sidenav_can_load_guard_1 = require("./pages/component-sidenav/component-sidenav-can-load-guard");
exports.MATERIAL_DOCS_ROUTES = [
    {
        path: '', pathMatch: 'full',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/homepage'))).then(m => m.HomepageModule)
    },
    { path: 'categories', redirectTo: '/components/categories' },
    {
        path: 'guides',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/guide-list'))).then(m => m.GuideListModule)
    },
    // Since https://github.com/angular/components/pull/9574, the cdk-table guide became the overview
    // document for the cdk table. To avoid any dead / broken links, we redirect to the new location.
    { path: 'guide/cdk-table', redirectTo: '/cdk/table/overview' },
    {
        path: 'guide/:id',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/guide-viewer'))).then(m => m.GuideViewerModule)
    },
    {
        path: ':section',
        canActivate: [component_sidenav_can_load_guard_1.CanActivateComponentSidenav],
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/component-sidenav/component-sidenav'))).then(m => m.ComponentSidenavModule)
    },
    { path: '**', redirectTo: '' },
];
