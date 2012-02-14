var DB = require('mongoose'),
	Schema = DB.Schema;
		


module.exports = function(){


	// CONNECT TO THE DATABASE
	DB.connect('mongodb://localhost/tunetub');




	/*********************************************
	 ** USER SCHEMA
	 *********************************************/


	 // Memberships
	var Memberships = new Schema({
		_id	: {type: Schema.ObjectId},// membership id
		mesh: {
			_id: {type: Schema.ObjectId},
			tag: {type: String},
			title: {type: String}
		}
	});


	// Users
	var UserSchema = new Schema({

		facebookId: {type: String, index: true},

		twitterId: {type: String, index: true},

		linkedinId: {type: String, index: true},
		
		// full name 
		name: {type: String},
		
		// Their email address. We use this as a primary
		// form of identification. When ever someone logs
		// in for the first time we must check that there isn't an
		// account already associated with the returned email address
		email: {type: String, index: true},
		
		// a url to their avatar image
		avatar: {type: String},
		
		// the date they joined
		joined: {type: Date, 'default': Date.now},
		
		// embedded collection containing limited data on
		// each group this user is a member of
		memberships: [Memberships],
		
		// this is where we can store the entire user
		// object sent back from the chosen login service
		authData: {
			facebook: {},
			twitter: {},
			linkedIn: {}
		}
	});

	// CREATE MONGOOSE MODEL
	DB.model('users', UserSchema);



	/*********************************************
	 ** GROUP SCHEMA
	 *********************************************/


	var Members = new Schema({
			user    : {type: Schema.ObjectId, ref: 'users'},// ref User._id
			joined  : {type: Date, 'default': Date.now}
	}); 


	var GroupSchema = new Schema({
		
		// The title of this group. Should probably default to 
		// the tag and can then be customised at a later date.
		title: {type: String, trim: true, lowercase: true},

		// the unique identifier for this group. We have it index true 
		// for added lookup speed
		tag           : {type: String, trim: true, lowercase: true, index: true},

		// the creator and host of the group
		host          : {type: Schema.ObjectId},

		// an embedded document with limited data on each person
		// who is a member
		members       : [Members],

		// The invite code for this group.
		// In the future this can be upgraded to be an embedded
		// collection of invite codes that are generated on demand.
		// They can have an expiry date, and once used will be removed
		// from the collection. 
		inviteCode    : {type: String},

		// the date of the last activity within the group
		lastActivity  : {type: Date, 'default': Date.now},

		// the date the group was created
		created       : {type: Date, 'default': Date.now}
	});


	// CREATE MONGOOSE MODEL
	DB.model('groups', GroupSchema);




	/*********************************************
	 ** TRACK SCHEMA
	 *********************************************/


	var TracksSchema = new Schema({
		
		// the mongo _id for this record
		_id: { type: Schema.ObjectId },

		// the title of this track
		title: { type: String },

		// the _id of the group this track belongs to
		_group: { type: Schema.ObjectId },

		// each track has a current score that reflects it's
		// position in the chart
		currentScore: { type: Number },
		
		// the overall score is the total number of points 
		// this track has accrued since it was added
		overallScore: { type: Number },

		// the user who uploaded this track. We store a limited
		// amount of duplicate data inside this object for speedy 
		// lookups. 
		user: {
			_id: { type: Schema.ObjectId },
			name: { type: String },
			email: { type: String },
			avatar: { type: String }
		},

		// the date this track was added
		added: { type: Date, 'default': Date.now },

		// the date this tack was last changed
		changed: { type: Date, 'default': Date.now }
	});

	// CREATE MONGOOSE MODEL
	DB.model('tracks', TracksSchema);


};
