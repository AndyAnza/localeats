const router = require("express").Router();
const { User, Dish } = require("../models");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "../images",
  filename: function(req, file, cb){
    return cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
})


// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "../images")
//   },
//   filename: (req, file, cb) => {
//     return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//   }
// });

//router.use(express.static(path.join(__dirname,"imgaes")));

const upload = multer({
  storage: storage
})

// const upload = multer({
//   storage: multer.memoryStorage()
// });

router.get("/", async (req, res) => {
  try {
    const dishData = await Dish.findAll({
      include: [{ model: User, attributes: { exclude: ["password"] } }],
      order: [["createdAt", "DESC"]],
    });
    const dishes = dishData.map((dish) => dish.get({ plain: true }));
    console.log(dishes);
    res.render("pages/homepage", { dishes });
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE NEW DISH FROM MODAL ROUTE
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { dish_name, description, price, userId } = req.body;
    const image = req.file;
    console.log(image);
    if (!dish_name || !description || !price || !userId || image === null) {
      return res.status(400).json({ error: "Missing required properties" });
    }
    const newDish = await Dish.create({
      dish_name,
      description,
      price,
      userId,
      image,
    });
    res.status(202).json({ message: "Dish created", dish: newDish });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
