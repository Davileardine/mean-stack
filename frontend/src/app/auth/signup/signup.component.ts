import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  myForm!: FormGroup;

  onSubmit() {
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstNameTS: new FormControl(null, Validators.required),
      lastNameTS: new FormControl(null, [
        Validators.required,
        Validators.minLength(4), Validators.maxLength(16)
      ]),
      emailTS: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
      ]),
      passwordTS: new FormControl(null, Validators.required)
    });
  }

  protected readonly onsubmit = onsubmit;
}
