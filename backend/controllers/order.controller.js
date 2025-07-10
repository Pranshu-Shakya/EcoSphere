import Order from "../models/order.model.js";
import User from "../models/user.model.js";
import Stripe from "stripe";

//global variables
const currency = "inr"; //currency for stripe and razorpay
const deliveryCharge = 10; //delivery charge for orders

//gateway initialization
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// const razorpayInstance = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
// })


//placing orders using COD Method
const placeOrder = async (req, res) => {
    try {
        
        const { userId, items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            amount,
            address,
            // status: "Order Placed",  // default status is "Order Placed" in the model
            paymentMethod: "COD",
            payment: false,
        }

        const newOrder = new Order(orderData);
        await newOrder.save();

        await User.findByIdAndUpdate(userId, {cartData: {}});

        res.status(200).json({ success: true, message: "Order placed successfully(Backend)" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

//placing orders using stripe Method
const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers;

        const orderData = {
            userId,
            items,
            amount,
            address,
            // status: "Order Placed",
            paymentMethod: "Stripe",
            payment: false,
        }

        const newOrder = new Order(orderData);
        await newOrder.save();

        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.title,
                },
                unit_amount : item.price * 100, // Stripe expects the amount in cents
            },
            quantity: item.quantity,
        }))

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: "Delivery Charges",
                },
                unit_amount : deliveryCharge * 100, // Stripe expects the amount in cents
            },
            quantity: 1,
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: "payment",
        })

        res.status(200).json({ success: true, session_url: session.url });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

//verify stripe payment
const verifyStripe = async (req, res) => {

    const { orderId, success, userId } = req.body;
    try {
        if(success === "true") {
            //update order status
            await Order.findByIdAndUpdate(orderId, {payment: true});
            await User.findByIdAndUpdate(userId, {cartData: {}});
            res.status(200).json({ success: true, message: "Payment successful and order placed" });
        } else {
            await Order.findByIdAndDelete(orderId);
            res.status(400).json({ success: false, message: "Payment failed, order not placed" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }

}

//placing orders using razorpay Method
const placeOrderRazorpay = async (req, res) => {
    // try {
    //     const { userId, items, amount, address } = req.body;

    //     const orderData = {
    //         userId,
    //         items,
    //         amount,
    //         address,
    //         // status: "Order Placed",
    //         paymentMethod: "Razorpay",
    //         payment: false,
    //         date: Date.now()
    //     }

    //     const newOrder = new Order(orderData);
    //     await newOrder.save();

    //     const options = {
    //         amount: amount * 100, // amount in the smallest currency unit
    //         currency: currency.toUpperCase(),
    //         receipt: newOrder._id.toString(),
    //     };

    //     await razorpayInstance.orders.create(options, (error, order) => {
    //         if (error) {
    //             console.log(error);
    //             return res.status(500).json({ success: false, message: error.message });
    //         }

    //         res.status(200).json({ success: true, order });
    //     })

    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({ success: false, message: error.message });
    // }
}

const verifyRazorpay = async (req, res) => {
    // try {
    //     const { userId, razorpay_order_id } = req.body;
    //     const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
    //     if(orderInfo.status === "paid") {
    //         //update order status
    //         await Order.findByIdAndUpdate(orderInfo.receipt, { payment: true });
    //         await User.findByIdAndUpdate(userId, { cartData: {} });
    //         res.status(200).json({ success: true, message: "Payment successful and order placed" });
    //     } else {
    //         res.status(400).json({ success: false, message: "Payment failed, order not placed" });
    //     }
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({ success: false, message: error.message });
    // }
}

//All orders data for admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
        res.status(200).json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

//All orders data for user panel
const userOrders = async (req, res) => {
    try {
        
        const {userId} = req.body;
        const orders = await Order.find({userId})
        res.status(200).json({ success: true, orders });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

//update order status from admin panel
const updateStatus = async (req, res) => {

    try {
        
        const { orderId, status } = req.body;
        await Order.findByIdAndUpdate(orderId, { status });

        res.status(200).json({ success: true, message: "Order status updated successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }

}

export {
    placeOrder,
    placeOrderStripe,
    placeOrderRazorpay,
    allOrders,
    userOrders,
    updateStatus,
    verifyStripe,
    verifyRazorpay
};