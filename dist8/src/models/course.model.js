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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Course = class Course extends repository_1.Entity {
    // @property({
    //     type: "Array<string>"
    // })
    // recommendation: Array<string>;
    // @property({
    //     type: "Array<string>"
    // })
    // resources: Array<string>;
    // @property({
    //     type: "Array<string>"
    // })
    // keywords: Array<string>;
    // @property({
    //     type: "Array<string>"
    // })
    // reviews: Array<string>
    getId() {
        return this.id;
    }
};
__decorate([
    repository_1.property({
        type: "number",
        id: true
    }),
    __metadata("design:type", Number)
], Course.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], Course.prototype, "courseCode", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], Course.prototype, "description", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], Course.prototype, "instructor", void 0);
Course = __decorate([
    repository_1.model()
], Course);
exports.Course = Course;
//# sourceMappingURL=course.model.js.map