exports.definition = {
	config: {
		columns: {
		    "STATE_ID": "INTEGER PRIMARY KEY",
		    "STATE_NAME": "TEXT",
		    "STATE_ABBREVIATION": "TEXT",
		  	"CREATED_DATE" : "TEXT",
			"LOGICAL_DELETE_DATE" : "TEXT",
			"LAST_UPDATED_DATE" : "TEXT",
			"LAST_SYNCHRONIZED_DATE" : "TEXT",
			"LAST_UPDATED_SERVERSIDE" : "TEXT"
			
		},
		adapter: {
			type: "sql",
			collection_name: "STATE",
			idAttribute:'STATE_ID'
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