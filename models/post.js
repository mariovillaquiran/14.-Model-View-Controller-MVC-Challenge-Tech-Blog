const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config");
class Post extends Model { }

Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING,
    },
    {
        sequelize
    }
)
module.exports = Post;