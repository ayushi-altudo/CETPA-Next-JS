import Products from "../../../models/Products";
import connectDb from "../../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);

    try {
      let temp = new Products({
        id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
      });

      const response = await temp.save();
      res.status(201).json(response);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
};

export default connectDb(handler);
