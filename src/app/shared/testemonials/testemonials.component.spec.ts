import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestemonialsComponent } from './testemonials.component';
describe('TestemonialsComponent', () => {
  let component: TestemonialsComponent;
  let fixture: ComponentFixture<TestemonialsComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TestemonialsComponent]
    });
    fixture = TestBed.createComponent(TestemonialsComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('testemonials defaults to: [, , , ]', () => {
    expect(component.testemonials).toEqual([, , ,]);
  });
});
