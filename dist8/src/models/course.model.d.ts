import { Entity } from "@loopback/repository";
export declare class Course extends Entity {
    id: number;
    courseCode: string;
    title: string;
    description: string;
    instructor: string;
    getId(): number;
}
