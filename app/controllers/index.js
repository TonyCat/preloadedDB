function doClick(e) {
	alert($.label.text);
}

$.index.open();

var dbPath;

dbPath = Ti.Filesystem.applicationSupportDirectory;

Ti.API.info("The database  is located at " + dbPath);

var MY_CALL = Alloy.Collections.hallen;
MY_CALL.fetch({
	query : "select * from hallen"
});

Ti.API.info("MY_CALL returns " + MY_CALL.length + " records");

for (var i = 0; i < MY_CALL.length; i++) {
	var mydata = MY_CALL.at(i);

	Ti.API.info(mydata.attributes.street + " is the street");
	Ti.API.info("This is the whole record " + JSON.stringify(mydata));

}

///or you can access the database directly

var db = Ti.Database.open('_alloy_');

var STATES = db.execute("select * from STATE");

while (STATES.isValidRow()) {
	///do stuff

	Ti.API.info(STATES.fieldByName("STATE_NAME") + " is the state name");

		
		STATES.next();	
}

db.close();
