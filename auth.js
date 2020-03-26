	function authentification(){
		alert("yoooo la street");
		var Twit = require('twit');

		var t = new Twit({
			consumer_key : "GAUtxcmgZhgEVdenfNoLqsgXr",
			consumer_secret: "xw7feZ2xhZ6QdcKOmdeKHj5ffocl9yMmasv800hAQEERzid7kF",
			access_token: "564269211-o8hmJ72REZbAdDrXlTNpYmnogM0dRcPMbC8CfXFR",
			access_token_secret: "IqP2ROpYDqDvPBlpjUULpMjfXLK2T4xgNeQcuj5Pj5Wug",
		});



		t.post('statuses/update', { status: 'hello world! Alexis' }, 
		function(err, data, response) {
			console.log(data)
		});
	}

