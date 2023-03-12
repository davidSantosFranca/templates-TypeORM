"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var dataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "db.sql",
    entities: ["src/db/entities/*.ts"],
    logging: true,
    synchronize: true,
    cache: true,
});
