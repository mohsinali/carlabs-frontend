var axios = require('axios');

getMessages = (email) => {
  return axios.get('http://localhost:8080/test');
}

var helpers = {
  loadMessages: function(email){
    return axios.all([getMessages(email)])
      .then(function(arr){
        return {
          repos: arr[0].data
        }
      })
  }
}

module.exports = helpers;