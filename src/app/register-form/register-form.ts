import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm {
 
  registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, { validators: this.passwordMatchValidator });;

  constructor() {}  

  // get skills(): FormArray {
  //   return this.registrationForm.get('skills') as FormArray;
  // }

  // addSkill(): void {
  //   this.skills.push(new FormControl('', Validators.required));
  // }

  // removeSkill(index: number): void {
  //   if (this.skills.length > 1) {
  //     this.skills.removeAt(index);
  //   }
  // }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  atLeastOneSkillValidator(array: AbstractControl): ValidationErrors | null {
    const controls = array as FormArray;
    return controls.length > 0 && controls.controls.some(control => control.value.trim()) ? null : { atLeastOneSkill: true };
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Data:', this.registrationForm.value);
      // Handle form submission
    } else {
      console.log('Form is invalid');
    }
  }
}
