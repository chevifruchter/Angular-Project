
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserServiceService } from '../../../services/user-service.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule
    ,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  show = true;
  constructor(private fb: FormBuilder, private userService: UserServiceService) {
    this.registerForm = this.fb.group({
      user: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        role: ['', Validators.required],

      }),
    });
  }

  showpasword() {
    this.show = !this.show;
  }
  onSubmit(): void {
    localStorage.setItem('role',this.registerForm.value.user.role)
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.userService.signUp(this.registerForm.value.user.name,this.registerForm.value.user.email,this.registerForm.value.user.password,this.registerForm.value.user.role).subscribe({
        next: (data:any) => alert("התחברת בהצלחה"), error: (err:any) => console.log("no")
      });
    };
  }
}



