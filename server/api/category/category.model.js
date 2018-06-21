'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const category = new Schema({
	cat_id : {type:mongoose.Schema.Types.ObjectId},
	cat_name : {
		type:String,
		required:true
	},
	status:{
		type:Boolean,
		default:true
	},
	created_date : {
		type:Date	
    },
    created_by : {
        type: mongoose.Schema.ObjectId,
        ref: 'book_user'
    },
	updated_date : {
		type:Date,
		default:Date.now()	
    },
    updated_by : {
        type: mongoose.Schema.ObjectId,
        ref: 'book_user'
    }
},
{ 
    collection : "book_category" ,timestamp:true
});

module.exports = mongoose.model('category', category);