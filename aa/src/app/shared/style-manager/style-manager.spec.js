"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/common/http/testing");
const testing_2 = require("@angular/core/testing");
const style_manager_1 = require("./style-manager");
describe('StyleManager', () => {
    let styleManager;
    beforeEach(() => testing_2.TestBed.configureTestingModule({
        imports: [testing_1.HttpClientTestingModule],
        providers: [style_manager_1.StyleManager]
    }));
    beforeEach((0, testing_2.inject)([style_manager_1.StyleManager], (sm) => {
        styleManager = sm;
    }));
    afterEach(() => {
        const links = document.head.querySelectorAll('link');
        for (const link of Array.prototype.slice.call(links)) {
            if (link.className.includes('style-manager-')) {
                document.head.removeChild(link);
            }
        }
    });
    it('should add stylesheet to head', () => {
        styleManager.setStyle('test', 'test.css');
        const styleEl = document.head.querySelector('.style-manager-test');
        expect(styleEl).not.toBeNull();
        expect(styleEl.href.endsWith('test.css')).toBe(true);
    });
    it('should change existing stylesheet', () => {
        styleManager.setStyle('test', 'test.css');
        const styleEl = document.head.querySelector('.style-manager-test');
        expect(styleEl).not.toBeNull();
        expect(styleEl.href.endsWith('test.css')).toBe(true);
        styleManager.setStyle('test', 'new.css');
        expect(styleEl.href.endsWith('new.css')).toBe(true);
    });
    it('should remove existing stylesheet', () => {
        styleManager.setStyle('test', 'test.css');
        let styleEl = document.head.querySelector('.style-manager-test');
        expect(styleEl).not.toBeNull();
        expect(styleEl.href.endsWith('test.css')).toBe(true);
        styleManager.removeStyle('test');
        styleEl = document.head.querySelector('.style-manager-test');
        expect(styleEl).toBeNull();
    });
});
