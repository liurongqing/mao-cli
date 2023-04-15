"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./polyfills.ts");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const core_1 = require("@angular/core");
const environment_1 = require("./environments/environment");
const app_1 = require("./app/");
const unregister_service_workers_1 = require("./unregister-service-workers");
// Unregister all installed service workers and force reload the page if there was
// an old service worker from a previous version of the docs.
(0, unregister_service_workers_1.unregisterServiceWorkers)()
    .then(hadServiceWorker => hadServiceWorker && location.reload());
if (environment_1.environment.production) {
    (0, core_1.enableProdMode)();
}
(0, platform_browser_dynamic_1.platformBrowserDynamic)().bootstrapModule(app_1.AppModule)
    .catch(err => console.error(err));
