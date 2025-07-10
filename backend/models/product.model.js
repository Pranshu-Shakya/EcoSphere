import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		imageUrl: {
			type: Array,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		bestseller: {
			type: Boolean,
		},
	},
	{ timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
