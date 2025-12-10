import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.route.js';
import cartRouter from './routes/cart.route.js';
import productRouter from './routes/product.route.js';
import orderRouter from './routes/order.route.js';

import communityRouter from './routes/community.route.js';

import contactRoutes from './routes/contact.route.js';

import initiativeRouter from './routes/initiative.route.js'

import ecoRouter from './routes/ecoAI.route.js';

import learnRouter from './routes/learn.route.js';
import Community from './models/community.model.js';
import Initiative from './models/Initiative.model.js';

//app config
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/product', productRouter)
app.use('/api/order', orderRouter);
app.use('/api/order', orderRouter);
app.use('/api/contact',contactRoutes)

// community api endpoint
app.use('/api/communities',communityRouter);

// eco-ai api endpoint
app.use("/api/ai", ecoRouter );

// initiative api end point
app.use('/api/initiative', initiativeRouter)

// learn api endpoint
app.use('/api/learn',learnRouter);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the backend server!');
});

app.get("/cleardb", async(req,res)=>{
  try{
    await Initiative.deleteMany({});
    await Community.deleteMany({});
    res.json({message:"success"});
  }catch(err){
    res.json({message:"error"});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});