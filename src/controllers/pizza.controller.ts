import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { NOTFOUND } from "dns";
import { PizzaRepository } from "../repositories/pizza.repository";
import { repository } from "@loopback/repository";
import { Pizza } from "../models/pizza";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';



export class PizzaController {
  constructor(
    @repository(PizzaRepository.name) private pizzaRepo: PizzaRepository
  ) {}

  // we need to tell Loopback how we get this function
  @get("/pizzas") 
  
  
  async getAllPizzas(
    @param.query.string("toppings") toppings: string
  ): Promise<Array<any>> {
    // var pizzas = []; // new Array<any>();

    // if (toppings == "pineapple") {
    //   pizzas.push("With Pinapple");
    // } else {
    //   pizzas.push("Yum");
    // }
    
    
    
    // return pizzas;

    return await this.pizzaRepo.find();
  }

  @get("/pizzas/{pizzaID}")
  getSpecificPizza(
    @param.path.string("pizzaID") pizzaID: string
  ): any {
    if (pizzaID = "A") {
      return "ABC";
    }

    if (pizzaID = "B") {
      return "BCD";
    }

    throw new HttpErrors.NotFound("Sorry, pizza not found");
  }

  // @post("/pizzas")
  // createPizza(
  //   @requestBody() pizza: any
  // ): any {

  //   pizza.status = "received"
    
  // }


  // we need to wait for the information to come back before we use it
  // we use asynchronous. says this function is asynchornous
  // synchronous is an instant request, asynchornous waits until
  @post("/pizzas")
  async createPizza(
    @requestBody() pizza: any
  ): Promise<Pizza> {

    // pizza.status = "received";
    // return pizza;

    // this.pizzaRepo.create(pizza);

    let createdPizza = await this.pizzaRepo.create(pizza);
    return createdPizza;
    
  }

  
}
