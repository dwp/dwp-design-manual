// Configure nunjucks
var nunjucksConfig = {
  autoescape: true,
  noCache: true,
  watch: false // set to true for dev
}

// Set up Nunjucks environment with custom filters
var nunjucksAppEnv = nunjucks.configure([
  'app/views',
  'node_modules/govuk-frontend/',
  'node_modules/govuk-frontend/govuk/components/'
], nunjucksConfig) 