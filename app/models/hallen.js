exports.definition = {
	config: {
		columns: {
			"id": "INTEGER PRIMARY KEY AUTOINCREMENT",
			"name": "TEXT",
			"street": "TEXT",
			"house_number": "TEXT",
			"city": "TEXT",
			"plz": "TEXT",
			"lon": "REAL",
			"lat": "REAL",
			"mine":"INTEGER"
		},
		adapter: {
			type: "sql",
			collection_name: "hallen",
			idAttribute: "id",
		}
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
		});

		return Collection;
	}
};