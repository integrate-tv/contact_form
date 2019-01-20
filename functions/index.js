const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

const helloWorld = function(request, response) {
  response.status(200).send('{"message": "Hello, World!"}');
};

exports.hello = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    helloWorld(request, response);
  });
});
