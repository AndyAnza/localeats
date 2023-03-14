const User = require("./User");
const Dish = require("./Dish");
const Comment = require("./Comment");

Comment.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = { User, Dish, Comment };
