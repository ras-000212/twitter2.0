console.log("Hello world");

function authentification(){
    var Twit = require('twit');
    var fs = require('fs');

    var t = new Twit({
        consumer_key : "GAUtxcmgZhgEVdenfNoLqsgXr",
        consumer_secret: "xw7feZ2xhZ6QdcKOmdeKHj5ffocl9yMmasv800hAQEERzid7kF",
        access_token: "564269211-o8hmJ72REZbAdDrXlTNpYmnogM0dRcPMbC8CfXFR",
        access_token_secret: "IqP2ROpYDqDvPBlpjUULpMjfXLK2T4xgNeQcuj5Pj5Wug",
    });

    var b64content = fs.readFileSync('./alexis.jpg', { encoding: 'base64' })

    // first we must post the media to Twitter
    t.post('media/upload', { media_data: b64content }, function (err, data, response) {
      // now we can assign alt text to the media, for use by screen readers and
      // other text-based presentations and interpreters
      var mediaIdStr = data.media_id_string
      var altText = "ALEXIS A LA PURPLE"
      var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
    
      t.post('media/metadata/create', meta_params, function (err, data, response) {
        if (!err) {
          // now we can reference the media and post a tweet (media will attach to the tweet)
          var params = { status: 'COUCOU LES FILLES C ALEXIS <3', media_ids: [mediaIdStr] }
    
          t.post('statuses/update', params, function (err, data, response) {
            console.log(data)
          })
        }
      })
    })
}
/* 
    t.post('statuses/update', { status: 'hello world! Alexis' }, 
    function(err, data, response) {
        console.log(data)
    }); */




authentification();