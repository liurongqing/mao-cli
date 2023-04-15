"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const rxjs_1 = require("rxjs");
const router_1 = require("@angular/router");
const guide_viewer_1 = require("./guide-viewer");
const testing_module_1 = require("../../testing/testing-module");
const guideItemsId = 'getting-started';
const mockActivatedRoute = {
    fragment: new rxjs_1.Observable(observer => {
        observer.complete();
    }),
    params: new rxjs_1.Observable(observer => {
        observer.next({ id: guideItemsId });
        observer.complete();
    })
};
describe('GuideViewer', () => {
    let fixture;
    beforeEach((0, testing_1.async)(() => {
        testing_1.TestBed.configureTestingModule({
            imports: [guide_viewer_1.GuideViewerModule, testing_module_1.DocsAppTestingModule],
            providers: [
                { provide: router_1.ActivatedRoute, useValue: mockActivatedRoute },
            ]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(guide_viewer_1.GuideViewer);
    });
    it('should set the guide based off route params', () => {
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component.guide)
            .toEqual(component.guideItems.getItemById(guideItemsId));
    });
});
