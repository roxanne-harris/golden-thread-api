import { repository } from "@loopback/repository";
import { CourseRepository } from "../repositories/course.repository";
import { post, requestBody, HttpErrors, get, param } from "@loopback/rest";
import { Course } from "../models/course.model";

export class CourseController {
    constructor(
        @repository(CourseRepository) protected courseRepo: CourseRepository
    ) {}

    @get('/courses')
    async findCourses(): Promise<Course[]> {
        return await this.courseRepo.find();
    }

    @get('/courses/{id}')
    async findCoursesById(
        @param.path.number('id') id: number
    ) {
        let courseExists: boolean = !!(await this.courseRepo.count({ id }));

        if (!courseExists) {
            throw new HttpErrors.BadRequest(' course ${id} does not exist');
        }

        return await this.courseRepo.findById(id);
    }

    @get('/courses/{courseCode}')
    async findCoursesByCode(
        @param.path.string('courseCode') code: string
    ) {
        let courseExists: boolean = !!(await this.courseRepo.count({ code }));

        if (!courseExists) {
            throw new HttpErrors.BadRequest(' course ${code} does not exist');
        }

        return await this.courseRepo.findOne({ 
            where: {
                and: [
                    { courseCode: code }
                ]
            } });
    }

    @post('/addCourse')
    async addCourse(
        @requestBody() course: Course
        //@param.path.string("courseCode") courseCode: string 

    ) : Promise<Course> 
    {

        if(!course.title || !course.description) {
            throw new HttpErrors.BadRequest('missing  required data');
        }

        let courseExists: boolean = !!(await this.courseRepo.count({courseCode: course.courseCode}));

        if (courseExists) {
            throw new HttpErrors.BadRequest('course already exists');
        }

        return await this.courseRepo.create(course);
    }
    
}