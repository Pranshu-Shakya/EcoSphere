import img1_1 from "./img1_1.jpg";
import img1_2 from "./img1_2.jpg";
import img2_1 from "./img2_1.jpg"
import img2_2 from "./img2_2.jpg";
import img2_3 from "./img2_3.jpg";
import img2_4 from "./img2_4.jpg";
import img3_1 from "./img3_1.jpg";
import img3_2 from "./img3_2.jpg";
import img3_3 from "./img3_3.jpg";
import img4_1 from "./img4_1.jpg";
import img4_2 from "./img4_2.jpg";
import img5_1 from "./img5_1.jpg";
import img5_2 from "./img5_2.jpg";
import img5_3 from "./img5_3.jpg";
import img6_1 from "./img6_1.jpg";
import img6_2 from "./img6_2.jpg";
import img7_1 from "./img7_1.jpg";
import img7_2 from "./img7_2.jpg";
import img8 from "./img8.jpg";
import img9 from "./img9.jpg";
import img10 from "./img10.jpg";
import img11 from "./img11.jpg";
import img12 from "./img12.jpg"
import img13 from "./img13.jpg";
import img14 from "./img14.jpg";
import img15 from "./img15.jpg";
import img16_1 from "./img16_1.jpg";
import img16_2 from "./img16_2.jpg";
import img17 from "./img17.jpg";
import img18 from "./img18.jpg";
import img19 from "./img19.jpg";

import star_icon from "./star_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import bin_icon from "./bin_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import dropdown_icon from "./dropdown_icon.png";

export const assets = {
	star_icon, 
	star_dull_icon,
	bin_icon,
	stripe_logo,
	razorpay_logo,
	dropdown_icon
}

export const products = [
	{
		_id: "product-1",
		title: "Upcycled Newspaper Bag",
		description: "Handmade bag crafted from old newspapers, durable and eco-friendly.",
		category: "Utilities",
		price: 50,
		imageUrl: [img1_1, img1_2],
		bestseller: true,
		seller: {
			userId: "64f1a1a2e6e123456789abcd",
			name: "Anjali Mehra",
			email: "anjali@example.com",
		},
		createdAt: "2025-07-07T10:00:00Z",
	},
	{
		_id: "product-2",
		title: "Glass Bottle Planter",
		description: "Reused glass bottle turned into a beautiful hanging planter.",
		category: "Home Decor",
		price: 120,
		imageUrl: [img2_1, img2_2, img2_3, img2_4],
		bestseller: false,
		seller: {
			userId: "64f1a1a2e6e123456789abce",
			name: "Rohit Sharma",
			email: "rohit@example.com",
		},
		createdAt: "2025-07-06T14:45:00Z",
	},
	{
		_id: "product-3",
		title: "Coconut Shell Candle Holder",
		description: "Sustainably sourced coconut shell used as a natural candle holder.",
		category: "Home Decor",
		price: 90,
		imageUrl: [img3_1, img3_2, img3_3],
		bestseller: true,
		seller: {
			userId: "64f1a1a2e6e123456789abcf",
			name: "Sneha Gupta",
			email: "sneha@example.com",
		},
		createdAt: "2025-07-05T12:00:00Z",
	},
	{
		_id: "product-4",
		title: "Paper Seed Greeting Cards",
		description: "Biodegradable cards embedded with plant seeds.",
		category: "Gifting",
		price: 60,
		imageUrl: [img4_1, img4_2],
		bestseller: false,
		seller: {
			userId: "64f1a1a2e6e123456789abd0",
			name: "Dev Jain",
			email: "dev@example.com",
		},
		createdAt: "2025-07-04T09:30:00Z",
	},
	{
		_id: "product-5",
		title: "Upcycled Denim Pouch",
		description: "Small zipper pouch made from old jeans, ideal for daily use.",
		category: "Fashion",
		price: 80,
		imageUrl: [img5_1, img5_2, img5_3],
		bestseller: true,
		seller: {
			userId: "64f1a1a2e6e123456789abd1",
			name: "Vanshika Sen",
			email: "vanshika@example.com",
		},
		createdAt: "2025-07-03T18:10:00Z",
	},
	{
		_id: "product-6",
		title: "Eco Brick Stool",
		description: "Compact stool made using plastic-filled eco bricks.",
		category: "Utilities",
		price: 200,
		imageUrl: [img6_1, img6_2],
		bestseller: false,
		seller: {
			userId: "64f1a1a2e6e123456789abd2",
			name: "Darshita Roy",
			email: "darshita@example.com",
		},
		createdAt: "2025-07-03T16:00:00Z",
	},
	{
		_id: "product-7",
		title: "Compost Kit",
		description: "Starter kit for home composting, includes guide and bin.",
		category: "Utilities",
		price: 300,
		imageUrl: [img7_1, img7_2],
		bestseller: true,
		seller: {
			userId: "64f1a1a2e6e123456789abd3",
			name: "Mehul Agarwal",
			email: "mehul@example.com",
		},
		createdAt: "2025-07-02T10:45:00Z",
	},
	{
		_id: "product-8",
		title: "Cement Bag Planters",
		description: "Tough and rustic planters made using empty cement bags.",
		category: "Home Decor",
		price: 150,
		imageUrl: [img8],
		bestseller: false,
		seller: {
			userId: "64f1a1a2e6e123456789abd4",
			name: "Priya Desai",
			email: "priya@example.com",
		},
		createdAt: "2025-07-01T13:00:00Z",
	},
	{
		_id: "product-9",
		title: "Organic Soap Bar",
		description: "Natural soap made from coconut oil and essential herbs.",
		category: "Utilities",
		price: 70,
		imageUrl: [img9],
		bestseller: true,
		seller: {
			userId: "64f1a1a2e6e123456789abd5",
			name: "Arjun Kumar",
			email: "arjun@example.com",
		},
		createdAt: "2025-06-30T08:20:00Z",
	},
	{
		_id: "product-10",
		title: "Bottle Cap Mosaic Frame",
		description: "Colorful wall frame made by arranging used bottle caps.",
		category: "Home Decor",
		price: 110,
		imageUrl: [img10],
		bestseller: false,
		seller: {
			userId: "64f1a1a2e6e123456789abd6",
			name: "Nikita Rao",
			email: "nikita@example.com",
		},
		createdAt: "2025-06-29T11:30:00Z",
	},
	{
		_id: "product-11",
		title: "Tire Ottoman",
		description: "Stylish seating made from used tires and jute rope.",
		category: "Home Decor",
		price: 400,
		imageUrl: [img11],
		bestseller: true,
		seller: {
			userId: "64f1a1a2e6e123456789abd7",
			name: "Kabir Singh",
			email: "kabir@example.com",
		},
		createdAt: "2025-06-28T10:10:00Z",
	},
	{
		_id: "product-12",
		title: "Bottle LED Lamp",
		description: "LED decorative lamp made from a recycled bottle.",
		category: "Home Decor",
		price: 130,
		imageUrl: [img12],
		bestseller: false,
		seller: {
			userId: "64f1a1a2e6e123456789abd8",
			name: "Ishita Sharma",
			email: "ishita@example.com",
		},
		createdAt: "2025-06-27T17:30:00Z",
	},
	{
		_id: "product-13",
		title: "Old T-Shirt Tote Bag",
		description: "Trendy reusable tote bag made from old t-shirts.",
		category: "Fashion",
		price: 95,
		imageUrl: [img13],
		bestseller: true,
		seller: {
			userId: "64f1a1a2e6e123456789abd9",
			name: "Karan Yadav",
			email: "karan@example.com",
		},
		createdAt: "2025-06-26T14:50:00Z",
	},
	{
		_id: "product-14",
		title: "E-Waste Keychains",
		description: "Cool keychains made from broken circuit boards.",
		category: "Gifting",
		price: 40,
		imageUrl: [img14],
		bestseller: false,
		seller: {
			userId: "64f1a1a2e6e123456789abda",
			name: "Zoya Sheikh",
			email: "zoya@example.com",
		},
		createdAt: "2025-06-25T10:00:00Z",
	},
	{
		_id: "product-15",
		title: "Plantable Eco Pencil Set",
		description: "Set of pencils that grow into plants after use.",
		category: "Gifting",
		price: 85,
		imageUrl: [img15],
		bestseller: true,
		seller: {
			userId: "64f1a1a2e6e123456789abdb",
			name: "Ritesh Verma",
			email: "ritesh@example.com",
		},
		createdAt: "2025-06-24T08:30:00Z",
	},
	{
		_id: "product-16",
		title: "Recycled Paper Notebook",
		description: "Notebook made from 100% recycled paper.",
		category: "Utilities",
		price: 65,
		imageUrl: [img16_1, img16_2],
		bestseller: false,
		seller: {
			userId: "64f1a1a2e6e123456789abdc",
			name: "Divya Taneja",
			email: "divya@example.com",
		},
		createdAt: "2025-06-23T12:00:00Z",
	},
	{
		_id: "product-17",
		title: "Can Art Organizer",
		description: "Desk organizer made by decorating used cans.",
		category: "Home Decor",
		price: 70,
		imageUrl: [img17],
		bestseller: true,
		seller: {
			userId: "64f1a1a2e6e123456789abdd",
			name: "Yash Mittal",
			email: "yash@example.com",
		},
		createdAt: "2025-06-22T11:15:00Z",
	},
	{
		_id: "product-18",
		title: "Bottle Cap Fridge Magnets",
		description: "Set of decorative fridge magnets made from bottle caps.",
		category: "Gifting",
		price: 55,
		imageUrl: [img18],
		bestseller: false,
		seller: {
			userId: "64f1a1a2e6e123456789abde",
			name: "Aanya Bhatt",
			email: "aanya@example.com",
		},
		createdAt: "2025-06-21T15:00:00Z",
	},
	{
		_id: "product-19",
		title: "Jute Gift Bags",
		description: "Reusable jute bags, perfect for eco-gifting.",
		category: "Fashion",
		price: 75,
		imageUrl: [img19],
		bestseller: true,
		seller: {
			userId: "64f1a1a2e6e123456789abdf",
			name: "Neel Patil",
			email: "neel@example.com",
		},
		createdAt: "2025-06-20T09:00:00Z",
	},
	{
		_id: "product-20",
		title: "Bamboo Toothbrush Set",
		description: "Eco-friendly toothbrushes made from sustainable bamboo.",
		category: "Utilities",
		price: 60,
		imageUrl: [img1_1],
		bestseller: false,
		seller: {
			userId: "64f1a1a2e6e123456789abe0",
			name: "Aarav Joshi",
			email: "aarav@example.com",
		},
		createdAt: "2025-06-19T10:00:00Z",
	},
	{
		_id: "product-21",
		title: "Terracotta Water Bottle",
		description: "Handcrafted water bottle made from natural terracotta clay.",
		category: "Utilities",
		price: 180,
		imageUrl: [img2_1],
		bestseller: true,
		seller: {
			userId: "64f1a1a2e6e123456789abe1",
			name: "Simran Kaur",
			email: "simran@example.com",
		},
		createdAt: "2025-06-18T09:00:00Z",
	},
	{
		_id: "product-22",
		title: "Recycled Sari Wallet",
		description: "Colorful wallet made from upcycled sari fabric.",
		category: "Fashion",
		price: 110,
		imageUrl: [img3_1],
		bestseller: false,
		seller: {
			userId: "64f1a1a2e6e123456789abe2",
			name: "Fatima Khan",
			email: "fatima@example.com",
		},
		createdAt: "2025-06-17T12:00:00Z",
	},
	{
		_id: "product-23",
		title: "Seed Bomb Kit",
		description: "Kit with clay and seeds to create your own seed bombs for planting.",
		category: "Gifting",
		price: 95,
		imageUrl: [img4_1],
		bestseller: true,
		seller: {
			userId: "64f1a1a2e6e123456789abe3",
			name: "Rahul Sethi",
			email: "rahul@example.com",
		},
		createdAt: "2025-06-16T15:00:00Z",
	},
	{
		_id: "product-24",
		title: "Cork Yoga Mat",
		description: "Non-slip yoga mat made from natural cork and rubber.",
		category: "Utilities",
		price: 350,
		imageUrl: [img5_1],
		bestseller: false,
		seller: {
			userId: "64f1a1a2e6e123456789abe4",
			name: "Priyansh Mehta",
			email: "priyansh@example.com",
		},
		createdAt: "2025-06-15T11:00:00Z",
	},
	{
		_id: "product-25",
		title: "Handmade Clay Earrings",
		description: "Unique earrings crafted from natural clay, painted by hand.",
		category: "Fashion",
		price: 130,
		imageUrl: [img6_1],
		bestseller: true,
		seller: {
			userId: "64f1a1a2e6e123456789abe5",
			name: "Shreya Nair",
			email: "shreya@example.com",
		},
		createdAt: "2025-06-14T13:00:00Z",
	}
];
