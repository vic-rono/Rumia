const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51IVEB6CCWmIObDCQi99xcXlKfIjCPvRn8slfcLjMbH5eRgz3rOqO2rGSe0717PxeMirvp8fW12MIVpCtYhJvsCUj00KijWVzRV"
);
const Order = require("../models/orderModel");
exports.placeOrder = async (req, res) => {
  const { token, cartItems, currentUser, subtotal } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: subtotal,
        currency: "USD",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      const order = new Order({
        userId: currentUser._id,
        name: currentUser.name,
        email: currentUser.email,
        orderItems: cartItems,
        shippingAddress: {
          address: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          postalCode: token.card.address_zip,
        },
        orderAmount: subtotal,
        transactionId: payment.source.id,
        isDelivered: false,
      });

      order.save((err) => {
        if (err) {
          return res.status(400).json("Something Went Wrong");
        } else {
          return res.status(200).json("Order Placed Successfully");
        }
      });
    } else {
      return res.status(400).json("Payment Failed");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getOrdersByUserId = async (req, res) => {
  try {
    const userId = await Order.find({ userId: req.body.userId });
    !userId && res.status(400).json("Something Went Wrong");

    userId && res.status(200).json(userId);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getOrderById = async (req, res) => {
  const orderid = req.body.orderid;
  try {
    const orderId = await Order.find({ _id: orderid });
    !orderId && res.status(400).json("Something Went Wrong");

    orderId && res.status(200).json(orderId[0]);
  } catch (err) {
    res.status(500).json(err);
  }
};

//uuid for generating unique id numbers

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (err) {
    return res.status(400).json(err);
  }
};
