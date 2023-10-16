const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter product name'],
        },
        description: {
            type: String,
            required: [true, 'Please enter product description'],
        },
        price: {
            type: Number,
            required: [true, 'Please enter product price'],
        },
        images: [
            {
                public_id: {
                    type: String,
                },
                url: {
                    type: String,
                }
            }
        ],
        category: {
            type: String,
            required: [true, 'Please enter product category'],
            enum: {
                values: [
                    "Paint",
                    "Markers",
                    "Pencils",
                    "Pens",
                    "Sketchbooks",
                    "Canvas",
                ],
                message: "Please select correct category",
            }
        },
        description: {
            type: String,
            required: [true, 'Please enter product seller'],
        },
        price: {
            type: Number,
            required: [true, 'Please enter product stock'],
        },
        ratings: {
            type: Number,
            default: 0,
        },
        reviews: [
            {
                rating: {
                    type: Number,
                    required: true,
                },
                comment: {
                    type: String,
                    required: true,
                },
                createdAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
        createdAt: {
            type: Date,
            default: Date.now,
        },
    });

export default model.Product ||
    model('Product', productSchema);

