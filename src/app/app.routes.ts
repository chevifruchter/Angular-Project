import { Routes } from '@angular/router';
import { LoginComponent } from '../component/login/login/login.component';
import { RegisterComponent } from '../component/register/register/register.component';
import { GetCourcesComponent } from '../component/get-cources/get-cources/get-cources.component';
import { NewCourseComponent } from '../component/new-cources/new-cources/new-cources.component';
import { LessonsComponent } from '../component/get-lessons/get-lessons/get-lessons.component';
import { AddLessonComponent } from '../component/add-lessons/add-lessons/add-lessons.component';

export const routes: Routes = [
    {path: 'Login',component: LoginComponent},
    {path: 'Register',component: RegisterComponent},
    {path: 'GetCourses',component: GetCourcesComponent},
    {path: 'NewCourses',component: NewCourseComponent},
    {path: 'GetLessons',component: LessonsComponent},
    {path: 'NewLesson',component: AddLessonComponent},
];
