var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Gallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages }, 
	brand: { type: Types.Select, options: 'Hess Collection,Hess Select,Artezin,Amalaya,Colom�,Glen Carlou,MacPhail,Peter Lehmann,Sequana' },
	category: {type: Types.Select, options: 'Bottle Shot,Self Talker,Etc' },
	comments: {type: Types.Textarea  }


	
});

Gallery.register();
