import { property, Entity, model } from "@loopback/repository";

@model()
export class Course extends Entity {
    @property({
        type: "number",
        id: true
    })
    id: number;

    @property({
        type: "string"
    })
    courseCode: string;

    @property({
        type: "string"
    })
    title: string;

    @property({
        type: "string"
    })
    description: string;

    @property({
        type: "string"
    })
    instructor: string;

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
    



}
