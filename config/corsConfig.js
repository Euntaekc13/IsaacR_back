const whitelist = require('./whiteList.json')


const corsConfig = {
  origin: whitelist,
  methods: [ 'OPTIONS', 'GET', 'POST', 'HEAD'],
  credentials: true,     
}


module.exports = corsConfig