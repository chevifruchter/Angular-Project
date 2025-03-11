
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { GetCoursesService } from '../../../services/get-cource.service';


@Component({
  selector: 'app-new-course',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl:'./new-cources.component.html',
  styleUrl: './new-cources.component.css'
})
export class NewCourseComponent {
  postCourseForm: FormGroup;
  token: string = sessionStorage.getItem("token") ?? "";
  isEditMode = false;
  role: string | null = localStorage.getItem('role');
  constructor(private fb: FormBuilder, private courseService: GetCoursesService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const courseData = navigation?.extras.state?.['courseData'];
    this.postCourseForm = this.fb.group({
      course: this.fb.group({
        title: [courseData ? courseData.title : '', Validators.required],
        description: [courseData ? courseData.description : '', Validators.required],
        id: [courseData ? courseData.id : null]
      })
    });
    if (courseData) {
      this.isEditMode = true;
    }
  }

  onSubmit(): void {
    const storedUserId = localStorage.getItem('userId');
    const userId: string | null = localStorage.getItem('userId');
    console.log(userId);
    console.log(this.postCourseForm.value.course.id);
    if (this.isEditMode) {
      if (this.postCourseForm.valid) {
        console.log(this.postCourseForm.value);
        this.courseService.putCoursr(this.postCourseForm.value.course.title, this.postCourseForm.value.course.description, userId, this.token, this.postCourseForm.value.course.id).subscribe({
          next: (data: any) => {
            alert("הקורס עודכן בהצלחה");
            console.log(this.postCourseForm.value.course.title);
            this.postCourseForm = this.fb.group({
              course: this.fb.group({
                title: [this.postCourseForm.value.course.title],
                description: [this.postCourseForm.value.course.description],
                id: [this.postCourseForm.value.course.id]
              })
            });
          },
          error: (err: any) => console.log("no")
        });
      };
    }
    else {
      if (this.postCourseForm.valid) {
        console.log(this.postCourseForm.value);
        this.courseService.postCoursr(this.postCourseForm.value.course.title, this.postCourseForm.value.course.description, userId, this.token).subscribe({
          next: (data: any) => { alert("הקורס נוסף בהצלחה"); }, error: (err: any) => console.log("no")
        });
      };
    }

  }
}
