import { CommonModule } from '@angular/common';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { OnlyLettersDirective } from './only-letters.directive';

@Component({
  selector: 'app-test',
  template: '<input OnlyLetters>',
  standalone: true,
  imports: [CommonModule, FormsModule, OnlyLettersDirective],
})

export class TestComponent {}

describe('OnlyLettersDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directiveElm: DebugElement;
  let directive: OnlyLettersDirective;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    directiveElm = fixture.debugElement.query(By.directive(OnlyLettersDirective));
    directive = directiveElm.injector.get(OnlyLettersDirective);
    fixture.detectChanges();
  });

  it('validateCharacter call with keyCode = 8 (backspace)', () => {
    const eventInit: KeyboardEventInit = {
      keyCode: 8,
      ctrlKey: false
    };
    const event = new KeyboardEvent('keydown', eventInit);
    spyOn(directive, 'validateCharacter').and.callThrough();
    directiveElm.triggerEventHandler('keydown', event);
    expect(directive.validateCharacter).toHaveBeenCalled();
  });

  it('validateCharacter call with keyCode = 65 (A)', () => {
    const eventInit: KeyboardEventInit = {
      keyCode: 65,
      ctrlKey: false
    };
    const event = new KeyboardEvent('keydown', eventInit);
    spyOn(directive, 'validateCharacter').and.callThrough();
    directiveElm.triggerEventHandler('keydown', event);
    expect(directive.validateCharacter).toHaveBeenCalled();
  });

  it('validateCharacter call with keyCode = 97 (a)', () => {
    const eventInit: KeyboardEventInit = {
      keyCode: 97,
      ctrlKey: false
    };
    const event = new KeyboardEvent('keydown', eventInit);
    spyOn(directive, 'validateCharacter').and.callThrough();
    directiveElm.triggerEventHandler('keydown', event);
    expect(directive.validateCharacter).toHaveBeenCalled();
  });

  it('validateCharacter call with ctrlKey = true', () => {
    const eventInit: KeyboardEventInit = {
      ctrlKey: true
    };
    const event = new KeyboardEvent('keydown', eventInit);
    spyOn(directive, 'validateCharacter').and.callThrough();
    directiveElm.triggerEventHandler('keydown', event);
    expect(directive.validateCharacter).toHaveBeenCalled();
  });

  it('validateCharacter call with keyCode = 0', () => {
    const eventInit: KeyboardEventInit = {
      keyCode: 0,
      ctrlKey: false
    };
    const event = new KeyboardEvent('keydown', eventInit);
    spyOn(directive, 'validateCharacter').and.callThrough();
    directiveElm.triggerEventHandler('keydown', event);
    expect(directive.validateCharacter).toHaveBeenCalled();
  });

  it('validateFields call with paste event', () => {
    const eventInit: KeyboardEventInit = {
      key: 'v',
      ctrlKey: true
    };
    const event = new KeyboardEvent('paste', eventInit);
    const preventDefaultSpy = spyOn(event, 'preventDefault').and.stub();
    spyOn(directive, 'validateFields').and.callThrough();
    directiveElm.triggerEventHandler('paste', event);
    expect(directive.validateFields).toHaveBeenCalled();
    expect(preventDefaultSpy).toHaveBeenCalled();
  });
});