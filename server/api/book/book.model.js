'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const book = new Schema({
		cat_id : {
			type: mongoose.Schema.ObjectId,
			ref: 'book_category',
			required:true
		},
		book_name : {
			type:String,
			required:true
		},
		auth_name : {
			type:String,
			required:true
		},
		owner : {
			type: mongoose.Schema.ObjectId,
			ref: 'book_user',
			required:true
		},
		availibility :{
			type:Boolean,
			default:true
		},
		created_date : {
			type:Date	
		},
		updated_date : {
			type:Date,
			default:Date.now()	
		},
		updated_by : {
			type: mongoose.Schema.ObjectId,
			ref: 'book_user'
		},
		approve :{
			type:Boolean,
			default:false
		},
		rating : {
			type:Number,
			default:5
		},
		request_id : {type:String} 
},
{ 
    collection : "book" ,timestamp:true
});

module.exports = mongoose.model('book', book);