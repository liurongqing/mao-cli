"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const rxjs_1 = require("rxjs");
const router_1 = require("@angular/router");
const table_of_contents_1 = require("./table-of-contents");
const table_of_contents_module_1 = require("./table-of-contents.module");
const testing_module_1 = require("../../testing/testing-module");
const mockActivatedRoute = {
    fragment: new rxjs_1.Observable(observer => {
        observer.complete();
    })
};
describe('TableOfContents', () => {
    beforeEach((0, testing_1.async)(() => {
        testing_1.TestBed.configureTestingModule({
            imports: [table_of_contents_module_1.TableOfContentsModule, testing_module_1.DocsAppTestingModule],
            providers: [
                { provide: router_1.ActivatedRoute, useValue: mockActivatedRoute },
            ]
        }).compileComponents();
    }));
    let fixture;
    let component;
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(table_of_contents_1.TableOfContents);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should have no header', () => {
        const header = fixture
            .nativeElement
            .querySelector('h2');
        expect(header).toBeNull();
    });
    it('should have header and links', () => {
        component._links = [
            {
                type: 'h2',
                id: 'test',
                name: 'test',
                top: 0,
                active: false
            }
        ];
        const header = fixture.nativeElement.querySelector('h2');
        expect(header).toBeDefined();
        const links = fixture.nativeElement.querySelector('li');
        expect(links).toBeDefined();
    });
});
