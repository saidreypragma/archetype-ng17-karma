import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[OnlyLetters]',
  standalone: true
})
export class OnlyLettersDirective {

  constructor(private readonly elRef:ElementRef) { }
  @HostListener('input', ['$event'])
  onChangeInput(event: Event): void {
    // console.log('TESTS', this.elRef.nativeElement.value);
    const lettersOnly = /[^a-zA-Z]*/g;
    const initValue = this.elRef.nativeElement.value;
    this.elRef.nativeElement.value = initValue.replace(lettersOnly, '');
    if(initValue !== this.elRef.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
