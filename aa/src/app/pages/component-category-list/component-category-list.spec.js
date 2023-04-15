"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const testing_module_1 = require("../../testing/testing-module");
const component_category_list_1 = require("./component-category-list");
describe('ComponentCategoryList', () => {
    let fixture;
    let params;
    beforeEach((0, testing_1.async)(() => {
        params = new rxjs_1.BehaviorSubject({});
        const fakeActivatedRoute = {
            snapshot: {},
            pathFromRoot: [{ params }]
        };
        testing_1.TestBed.configureTestingModule({
            imports: [component_category_list_1.ComponentCategoryListModule, testing_module_1.DocsAppTestingModule],
            providers: [
                { provide: router_1.ActivatedRoute, useValue: fakeActivatedRoute }
            ]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(component_category_list_1.ComponentCategoryList);
    });
    it('should render a card for every component', () => {
        // Usually the component category list component won't be instantiated if the activated
        // route does not contain a `section` param. In case there is no section param before
        // `ngOnInit` subscribes to the activated route params, and an error will be raised.
        params.next({ section: 'components' });
        fixture.detectChanges();
        const component = fixture.componentInstance;
        const components = component.docItems.getItems('components');
        const cards = fixture
            .nativeElement.querySelectorAll('.docs-component-category-list-card');
        expect(cards.length).toEqual(components.length);
    });
});
