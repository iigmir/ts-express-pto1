import dotenv from "dotenv";
import { Sequelize } from "sequelize";

export function get_dababase_instance() {
    const get_db = (env: any) => ({
        name: String(env.DB_NAME),
        user: String(env.DB_USER),
        pass: String(env.DB_PASS),
    });
    dotenv.config();
    const db = get_db(process.env);
    const sequelize = new Sequelize(db.name, db.user, db.pass, { host: "localhost", dialect: "mariadb" });
    return sequelize;
}
