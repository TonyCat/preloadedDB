// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

if (Ti.App.Properties.hasProperty('initialInstall')) {

Ti.API.info("The preloaded database is already installed do nothing");

} else {
Ti.API.info("Installing the preloaded database");
Ti.App.Properties.setString('initialInstall', "Installed");

var db = Titanium.Database.install("_mypreloadedDB_.sql","_alloy_"); ///this is the db in your assets folder
db.file.setRemoteBackup(false);
}

Alloy.Collections.instance("STATE");
Alloy.Collections.instance("hallen"); 