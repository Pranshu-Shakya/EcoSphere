import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},

		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},

		password: {
			type: String,
			required: true,
			// minlength: 6
		},

		cartData: {
			type: Object,
			default: {},
		},

		bio: {
			type: String,
			default: "",
		},

		badges: {
			type: [String],
			default: [], // e.g. ["Green Beginner", "Sustainability Creator"]
		},

		lifestyleData: {
			transport: { type: Number, default: 0 }, // CO2 from transport
			electricity: { type: Number, default: 0 },
			food: { type: Number, default: 0 },
			shopping: { type: Number, default: 0 },
			totalEmissions: { type: Number, default: 0 },
		},

		//   initiativesJoined: [{
		//     type: mongoose.Schema.Types.ObjectId,
		//     ref: 'Initiative'
		//   }],

		//   productsListed: [{
		//     type: mongoose.Schema.Types.ObjectId,
		//     ref: 'Product'
		//   }],
	},
	{ timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
