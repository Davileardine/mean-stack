import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {

  myFormIn!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.myFormIn = this.fb.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.email
        ])],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          this.minusculoFValidator,
        ])]
    });
  }

  minusculoFValidator(control: AbstractControl) {
    const pass = control.value as string;

    if ((pass !== pass?.toLowerCase()) && (pass !== null)) {
      return {minusculoF: true};
    } else {
      return null;
    }
  }

  onSubmit() {
    this.myFormIn.reset()
  }

}
