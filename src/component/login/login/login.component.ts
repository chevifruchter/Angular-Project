import { UserServiceService } from '../../../services/user-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  registerForm: FormGroup;
  show = true;
  constructor(private fb: FormBuilder, private UserService: UserServiceService) {
    this.registerForm = this.fb.group({
      user: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      }),
    });
  }

  
  showpasword() {
    this.show = !this.show;
  }


  onSubmit():void {
    console.log('🔍 Submitting login form:', this.registerForm.value);
    this.UserService.Login(this.registerForm.value.user.email, this.registerForm.value.user.password)
      .subscribe({
        next: response =>{ console.log('✅ Login successful:', response)
          alert("נכנסת בהצלחה")
        },
        error: err => console.error('❌ Login failed:', err)
      });
  }
  
}
