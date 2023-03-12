import * as express from 'express';
var routes = express.Router();
import db from './db/data-source';
import { User } from './db/entities/user.entity';

routes.route("/users").get(async () =>{
    // here we will have logic to return all users
    const users = await db.getRepository(User).find();
    return users;
})

routes.route("/users/:id").get(async (id:number) =>{
    // here we will have logic to return user by id
    const user = await db.getRepository(User).findOneBy({id: id});
    return user;
})

routes.route("/users").post(async ({body}) =>{
    // here we will have logic to save a user or users
    const user = db.getRepository(User).create(body);
    const res = await db.getRepository(User).save(user);
    return res;
})

routes.route("/users/:id").put(async ({body, params}) =>{
    // here we will have logic to update a user by a given user id
    const id:number = Number(params.id);
    const user = await db.getRepository(User).findOneBy({id: id});
    db.getRepository(User).merge(user, body);
    const res = await db.getRepository(User).save(user);
    return res;
})

routes.route("/users/:id").delete(async (id:number) =>{
    // here we will have logic to delete a user by a given user id
    const res = await db.getRepository(User).delete({id: id});
    return res;
})
export default routes;