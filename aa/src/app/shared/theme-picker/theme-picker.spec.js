"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const theme_picker_1 = require("./theme-picker");
const testing_module_1 = require("../../testing/testing-module");
describe('ThemePicker', () => {
    beforeEach((0, testing_1.async)(() => {
        testing_1.TestBed.configureTestingModule({
            imports: [theme_picker_1.ThemePickerModule, testing_module_1.DocsAppTestingModule],
        }).compileComponents();
    }));
    it('should install theme based on name', () => {
        const fixture = testing_1.TestBed.createComponent(theme_picker_1.ThemePicker);
        const component = fixture.componentInstance;
        const name = 'pink-bluegrey';
        spyOn(component.styleManager, 'setStyle');
        component.selectTheme(name);
        expect(component.styleManager.setStyle).toHaveBeenCalled();
        expect(component.styleManager.setStyle).toHaveBeenCalledWith('theme', `assets/${name}.css`);
    });
});
