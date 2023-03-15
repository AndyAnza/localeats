const User = require("./User");
const Dish = require("./Dish");
const Comment = require("./Comment");

User.hasMany(Dish, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
Dish.belongsTo(User, {
  foreignKey: "userId",
});
User.hasMany(Comment, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
Comment.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = { User, Dish, Comment };
