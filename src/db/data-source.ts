import {DataSource} from "typeorm";

const dataSource: DataSource = new DataSource({
    type: "sqlite",
    database: "db.sql",
    entities: ["src/db/entities/*.ts"],
    logging: true,
    synchronize: true,
    cache: true,
})

export default dataSource;