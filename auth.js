//This module contains the corresponding APIs to interact with social platforms.

const appId = process.env.facebookid;
const appSecret = process.env.facebookSecret;
module.exports={

    'config':{
       'youtube':{
           'url':'https://content.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=placeholder&key=AIzaSyD-a9IF8KKYgoC3cpgS-Al7hLQDbugrDcw',
           'headers':{
            'X-ClientDetail': 'appVersion=5.0%20(X11)',
            'X-Requested-With': 'XMLHttpRequest',
            'X-JavaScript-User-Agent': 'google-api-javascript-client/1.1.0',
            'X-Origin': 'https://developers.google.com',
            'X-Referer': 'https://developers.google.com',
            'X-Goog-Encode-Response-If-Executable': 'base64',
            'Referer': 'https://content.googleapis.com/static/proxy.html?usegapi=1&jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.VP7YQdVRIjA.O%2Fm%3D__features__%2Fam%3DIA%2Frt%3Dj%2Fd%3D1%2Frs%3DAGLTcCOg0MqscAteEi1NrrPGELt6CmlMRw'
           }
       },
       'instagram':'https://www.instagram.com/placeholder/?__a=1',
       'twitter':'https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=twitter_username',
       'soundcloud':'http://api.soundcloud.com/users/username.json?client_id=879e9c59b2147c835bdd15a2265f1baf',
       'facebook': `https://graph.facebook.com/fanPageName?fields=name,fan_count,likes&access_token=${appId}|${appSecret}`
    }
}