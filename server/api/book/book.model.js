'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

	var bookSchema = new Schema({
		book_id : {type:mongoose.Schema.Types.ObjectId},
		cat_id : {
			type:mongoose.Schema.Types.ObjectId,
			ref: 'book_user'
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
			ref: 'book_user'
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
			default:true
		},
		rating : {
			type:Number,
			required:true
		},
		request_id : {type:mongoose.Schema.Types.ObjectId}
	});  
	
			type: mongoose.Schema.ObjectId,
			
			module.export = mongoose.model('book',bookSchema); 
	