"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const component_page_header_1 = require("./component-page-header");
const testing_module_1 = require("../../testing/testing-module");
describe('ComponentPageHeader', () => {
    let fixture;
    beforeEach((0, testing_1.async)(() => {
        testing_1.TestBed.configureTestingModule({
            imports: [component_page_header_1.ComponentHeaderModule, testing_module_1.DocsAppTestingModule],
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(component_page_header_1.ComponentPageHeader);
    });
    it('should return the title', () => {
        const component = fixture.componentInstance;
        const title = 'foobar';
        fixture.detectChanges();
        component._componentPageTitle.title = title;
        expect(component.getTitle()).toEqual(title);
    });
    it('should emit a toggleSideNav event', () => {
        const component = fixture.componentInstance;
        fixture.detectChanges();
        spyOn(component.toggleSidenav, 'emit');
        fixture
            .nativeElement
            .querySelector('.sidenav-toggle')
            .click();
        expect(component.toggleSidenav.emit).toHaveBeenCalled();
    });
});
