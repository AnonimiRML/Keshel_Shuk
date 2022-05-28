const twit = require('twit');
const http = require('http');


/* SERVER */

const port = process.env.PORT || 80

const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(port);

/* END SERVER */


const config = {  
    consumer_key: '04tA5YUNfIi73GG4wksEo1hjJ',  
    consumer_secret: 'JSFRI0DGvIzzBXllcHY3DQu3bYWXCvJdnaIx2hopMccVgiCgr8',
    access_token: '1515628251862949892-YkOeKzPJXUXv72qfuen36mSKLnmGlk',  
    access_token_secret: 'H7ytmndLaNcTwXJV2NU1dfoUy3WgtFRVin6PFsz9XdiPY'
}

const Twitter = new twit(config);

function tweetNow(tweetTxt) {  
    
    tweet = {
        status: tweetTxt,
    }
    
    Twitter.post('statuses/update', tweet, function(err, data, response) {
        if (err) {
            console.log('Error in Replying');
            console.error(err);
        } else {
            console.log('Tweet sent successfully');
        }
    });

}


const stream = T.stream('statuses/filter', { track: 'כשל שוק' })

stream.on('tweet', function (tweet) {
  console.log(tweet)
})