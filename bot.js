/////////////////////////////////////

const botkit = require('botkit');
const keys = require('./keys');
const context = require('./context');
const Slack = require('slack-node');

const controller = botkit.slackbot({
  debug : false,
  log: true
});

controller.spawn({
  token: keys.botAPIToken
}).startRTM();

/////////////////////////////////////

for(i=0;i< context.length;i++){
  (function(){
    let input = context[i].input;
    let output = context[i].output;

    controller.hears(
      //message content
      input,
      //message type [default]
      ["direct_message","direct_mention","mention","ambient"],
      //return message
      function(bot,message){
        bot.reply(message,output);
      }
    );

    randomIdx = Math.floor(Math.random() * (context[0].output.length));
  })();
}