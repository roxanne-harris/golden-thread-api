import { CourseRepository } from "../repositories/course.repository";
import { Course } from "../models/course.model";
export declare class CourseController {
    protected courseRepo: CourseRepository;
    constructor(courseRepo: CourseRepository);
    findCourses(): Promise<Course[]>;
    findCoursesById(id: number): Promise<Course>;
    findCoursesByCode(code: string): Promise<Course | null>;
    addCourse(course: Course, courseCode: string): Promise<Course>;
}
