require('dotenv').config()
const middy = require('@middy/core')
const jsonBodyParser = require('@middy/http-json-body-parser')
const httpMultipartBodyParser = require('@middy/http-multipart-body-parser')
const { preflight } = require('@ziro/middleware')
// const { allowedOrigin } = require('@ziro/middleware')
// const { auth } = require('@ziro/middleware')
const { errorHandler } = require('@ziro/middleware')
const { cors } = require('@ziro/middleware')
// const allowed = null // <----------- CHANGE TO NULL BEFORE DEPLOY

const lambda = handler =>
    middy(handler)
        .use(preflight)
        // .use(allowedOrigin(allowed))
        .use(jsonBodyParser())
        .use(httpMultipartBodyParser())
        .use(errorHandler)
        .use(cors)
        // .use(auth)

module.exports = lambda