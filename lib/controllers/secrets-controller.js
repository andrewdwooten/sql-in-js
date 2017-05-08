const Secret     = require('../models/secret')

function show (request, response){
  Secret.find(request.params.id)
  .then((data) => {
    let secret = data.rows[0]
    if (!secret) {
      return response.sendStatus(404)
    }
    else{
      response.json(secret)
    }
  })
}

module.exports = {
  show: show
}
