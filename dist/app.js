"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Create and setup express app
var app = express();
app.use(express.json());
//register routes
app.get("/users", function (req, res) {
    // here we will have logic to return all users
});
app.get("/users/:id", function (req, res) {
    // here we will have logic to return user by id
});
app.post("/users", function (req, res) {
    // here we will have logic to save a user
});
app.put("/users/:id", function (req, res) {
    // here we will have logic to update a user by a given user id
});
app.delete("/users/:id", function (req, res) {
    // here we will have logic to delete a user by a given user id
});
// start express server
app.listen(3000);
