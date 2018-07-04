"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const course_repository_1 = require("../repositories/course.repository");
const rest_1 = require("@loopback/rest");
const course_model_1 = require("../models/course.model");
let CourseController = class CourseController {
    constructor(courseRepo) {
        this.courseRepo = courseRepo;
    }
    async findCourses() {
        return await this.courseRepo.find();
    }
    async findCoursesById(id) {
        let courseExists = !!(await this.courseRepo.count({ id }));
        if (!courseExists) {
            throw new rest_1.HttpErrors.BadRequest(' course ${id} does not exist');
        }
        return await this.courseRepo.findById(id);
    }
    async findCoursesByCode(code) {
        let courseExists = !!(await this.courseRepo.count({ code }));
        if (!courseExists) {
            throw new rest_1.HttpErrors.BadRequest(' course ${code} does not exist');
        }
        return await this.courseRepo.findOne({
            where: {
                and: [
                    { courseCode: code }
                ]
            }
        });
    }
    async addCourse(course, courseCode) {
        if (!course.title || !course.description) {
            throw new rest_1.HttpErrors.BadRequest('missing  required data');
        }
        let courseExists = !!(await this.courseRepo.count({ courseCode: course.courseCode }));
        if (courseExists) {
            throw new rest_1.HttpErrors.BadRequest('course already exists');
        }
        course.courseCode = courseCode;
        return await this.courseRepo.create(course);
    }
};
__decorate([
    rest_1.get('/courses'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "findCourses", null);
__decorate([
    rest_1.get('/courses/{id}'),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "findCoursesById", null);
__decorate([
    rest_1.get('/courses/{courseCode}'),
    __param(0, rest_1.param.path.string('courseCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "findCoursesByCode", null);
__decorate([
    rest_1.post('/addCourse'),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.path.string("courseCode")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_model_1.Course, String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "addCourse", null);
CourseController = __decorate([
    __param(0, repository_1.repository(course_repository_1.CourseRepository)),
    __metadata("design:paramtypes", [course_repository_1.CourseRepository])
], CourseController);
exports.CourseController = CourseController;
//# sourceMappingURL=course.controller.js.map