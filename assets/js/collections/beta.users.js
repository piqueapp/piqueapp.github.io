var beta = beta || {};


beta.Users = Backbone.Collection.extend({
	model: beta.User,
	root: 'http://pique-beta-serv.herokuapp.com/user',
});




