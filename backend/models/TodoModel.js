import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const {DataTypes} = Sequelize;
const Todo = db.define('todo', {
    activity: DataTypes.STRING,
    desc: DataTypes.STRING,
    deadline: DataTypes.DATE,
    byuser: DataTypes.INTEGER
}, {
    freezeTableName:true
})

export default Todo;

(async()=>{
    await db.sync();
})();