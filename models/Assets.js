var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Asset Model
 * =============
 */

var Assets = new keystone.List('Assets', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Assets.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages }, 
	brand: { type: Types.Select, options: 'Hess Collection,Hess Select,Artezin,Amalaya,Colome,Glen Carlou,MacPhail,Peter Lehmann,Sequana' },
	category: {type: Types.Select, options: 'Bottle Shot,Self Talker,Etc' },
	vintage:  {type: Types.Select, options: '2009,2010,2011,2012,2013' },
	comments: {type: Types.Textarea  }
	


	
});

Assets.register();
