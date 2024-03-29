const mongoose = require('mongoose');

schema = new mongoose.Schema({
    businessName :{
        type:String,
        required:true
    },
    ABN: {
        type:String,  
        // required:true,
        default:''      
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        // required:true,
        default:"000000",
    },
    streetAddress:{
        type:String,
        // required:true,
        default:''
    },
    postcode:{
        type:Number,
        required:true
    },
    state:{
        type:String,
        // required:true,
        default:'QLD',
        enum: ['NSW', 'VIC', 'QLD', 'WA', 'TAS','SA','ACT', 'NT'], 
    },
    categories:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category'
    }],
    orders:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }]
});
schema.statics.searchQuery = async function (key, page, pageSize, sort) {
 
    const query = this.find({'businessName':new RegExp(key,'i')});
    query.skip((page-1)*pageSize);
    query.limit(pageSize);          
    sort ? query.sort(sort) :  query;
    return query.exec();
}
const model = mongoose.model('Business', schema);

module.exports = model;