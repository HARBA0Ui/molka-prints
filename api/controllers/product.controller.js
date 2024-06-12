import prisma from "../db/prisma.js";

export const getAllProducts = async (req, res) => {
  const products = await prisma.product.findMany();
  return res.status(200).json(products);
};
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (!product) return;
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ message: "Couldn't find the product!" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params.id;
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.product.delete({
      where: { id },
    });
    return res
      .status(200)
      .json({ message: "Product is deleted successfully!" });
  } catch (err) {
    return res.status(500).json({ message: "Couldn't delete the product!" });
  }
};

// Create a new product

export const createProduct = async (req, res) => {
  const imgs= []
  req.files.forEach(file => imgs.push(file.filename))
  const {title, desc, price:reqPrice}= req.body;
  const price= parseFloat(reqPrice)
  const product= {title, desc, imgs, price}
  console.log("product", product)
  try {
    await prisma.product.create({
      data: product
    })
    return res.status(200).json({messaage: "The product has been added successfully!"})
  } catch (err) {
    console.log(err);
  }
};
