// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: 'your-secret-clientID-here', // your App ID
		'clientSecret' 	: 'your-client-secret-here', // your App Secret
		'callbackURL' 	: 'http://whisp.dev:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'bpJGbtV7lZqf50wMawANPgvq3',
		'consumerSecret' 	: '13wLpRQzYucB61d4eCKKezuMoiy61rctG8U9Y6Wr3JBTPSijaW',
		'callbackURL' 		: 'http://whisp.dev:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};