const mongoose = require('mongoose');

const { toJSON, paginate } = require('./plugins');


const categorySchema = mongoose.Schema(
    {

        name: {
            type: String,

        },
        description: {
            type: String,

        },
        facts: {
            type: String,

        },
        image: {
            type: String,

        },
        challenges: [

            {
                name: {
                    type: String,
                },
                message: {
                    type: String
                },
                flag: {
                    type: String
                },
                points: {
                    type: Number,
                    default: 0
                }

            }
        ]



    },
    {
        timestamps: true,
    }
);

// add plugin that converts mongoose to json
categorySchema.plugin(toJSON);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
