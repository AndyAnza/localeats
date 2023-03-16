const sequelize = require("../config/connection");
const { User, Dish, Comment } = require("../models");

const userSeedData = require("./userSeedData.json");
const dishSeedData = require("./dishSeedData.json");
const commentSeedData = require("./commentSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  await Dish.bulkCreate(dishSeedData);

  await Comment.bulkCreate(commentSeedData);

  process.exit(0);
};

seedDatabase();
