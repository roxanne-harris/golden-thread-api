import { DefaultCrudRepository } from "@loopback/repository";
import { Pizza } from "../models/pizza";
import { DataSource } from "loopback-datasource-juggler";
import { inject } from "@loopback/core";

export class PizzaRepository extends DefaultCrudRepository<
Pizza,
typeof Pizza.prototype.id> 
{
    constructor(@inject('datasources.db') protected datasource: DataSource) {
        super(Pizza, datasource);
    }
}