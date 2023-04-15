"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unregisterServiceWorkers = void 0;
/**
 * Unregisters all currently registered service workers and returns a boolean that indicates
 * whether there were service workers registered or not.
 */
function unregisterServiceWorkers() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!navigator.serviceWorker) {
            return false;
        }
        const registrations = yield navigator.serviceWorker.getRegistrations();
        // Walk through every currently registered Service Worker and unregister it. There can be
        // service workers from previous versions of the Angular Material docs.
        registrations.forEach(registration => registration.unregister());
        return registrations.length > 0;
    });
}
exports.unregisterServiceWorkers = unregisterServiceWorkers;
