"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const page_title_1 = require("./page-title");
const platform_browser_1 = require("@angular/platform-browser");
describe('ComponentPageTitle', () => {
    const title = new platform_browser_1.Title({});
    const service = new page_title_1.ComponentPageTitle(title);
    it('should initialize title to empty string', () => {
        expect(service._title).toEqual('');
        expect(service.title).toEqual('');
    });
});
