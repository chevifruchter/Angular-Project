
import { Component, OnInit } from '@angular/core';
import { GetCoursesService } from '../../../services/get-cource.service';
import { lesson } from '../../../models/lesson';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './get-lessons.component.html',
  styleUrl: './get-lessons.component.css'
})
export class LessonsComponent implements OnInit {
  lessons: lesson[] = [];
  courseId = 1; // ניתן להחליף את ה-ID לפי הצורך
  token:string|any=sessionStorage.getItem("token")
  
  constructor(private lessonService: GetCoursesService,private router: Router) {}

  ngOnInit() {
    this.fetchLessons();
  }

  fetchLessons() {
    this.lessonService.getAllLessons(this.token,this.token.courseId).subscribe({
      next: (response) => {
        this.lessons = response;
        console.log('Lessons:', this.lessons);
      },
      error: (error) => {
        console.error('Error fetching lessons:', error);
      }
    });
  }

  AddLesson(){
    const course=this.courseId
    const courseData = JSON.parse(JSON.stringify(course)); // המרת ה-Class לאובייקט פשוט
    console.log("📤 נתונים שנשלחים לניווט:", courseData);
    this.router.navigate(['/NewLesson'], { state: { courseData } });
  }
}
