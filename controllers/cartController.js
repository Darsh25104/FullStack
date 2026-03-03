const Cart = require("../models/Cart");

// Create Cart
exports.createCart = async (req, res, next) => {
  try {
    const cart = await Cart.create(req.body);
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
};

// Get All Carts
exports.getCarts = async (req, res, next) => {
  try {
    const carts = await Cart.find()
      .populate("user")
      .populate("products.product");
    res.json(carts);
  } catch (error) {
    next(error);
  }
};

// Get Single Cart
exports.getCartById = async (req, res, next) => {
  try {
    const cart = await Cart.findById(req.params.id)
      .populate("user")
      .populate("products.product");
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

// Update Cart
exports.updateCart = async (req, res, next) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

// Delete Cart
exports.deleteCart = async (req, res, next) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Cart deleted" });
  } catch (error) {
    next(error);
  }
};