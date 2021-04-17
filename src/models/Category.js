const mongoose = require('mongoose');

const { toJSON, paginate } = require('./plugins');


const categorySchema = mongoose.Schema(
    {

        name: {
            type: String,

        },
        details: {
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
                challenge: {
                    type: String
                },
                value: {
                    type: String
                },
                image:{
                    type:String
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
