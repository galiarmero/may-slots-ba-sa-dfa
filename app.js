'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = function (fastify, opts, next) {
  // Adds some useful utilities to Fastify
  fastify.register(require('fastify-sensible'))

  // MongoDB connector
  fastify.register(require('fastify-mongodb'), {
    forceClose: true,
    url: 'mongodb://localhost:27017/',
    database: 'dfa_pas'
  })

  // Loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins')
  })

  // Loads all plugins defined in services
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services')
  })

  // Make sure to call next when done
  next()
}
