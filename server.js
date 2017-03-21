const express = require('express')
const helmet = require('helmet')
const history = require('connect-history-api-fallback')
const useragent = require('express-useragent')
const urllib = require('url')
const app = express()

app.use(helmet())
app.use(useragent.express())
app.use(function (req, res, next) {
  const parsed = urllib.parse(req.url)
  const pathname = parsed.pathname
  if (pathname === '/index' || pathname === '/index.html') {
    // 重定向首页至 /，保留 querystring
    res.redirect('/' + req.url.substring(pathname.length))
  } else if (req.url.match(/.*?union\.html/)) {
    res.redirect('/league')
  } else if (req.url.match(/.*?\.html/)) {
    res.redirect(req.url.replace('.html', ''))
  } else {
    return next()
  }
})

const human = express.static('./dist', {
  maxage: 7 * 86400 * 1000
})

const spider = express.static('./prerender', {
  maxage: 7 * 86400 * 1000
})

app.use(history())

app.use(function (req, res, next) {
  if (req.useragent.isBot) {
    spider(req, res, next)
  } else {
    human(req, res, next)
  }
})

const port = 8000
app.listen(port, function (err) {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`server listen on http://localhost:${port}`)
})
