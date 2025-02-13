module.exports = {
  // your existing config
  serviceName: 'DWP Digital User Centred Design Manual',
  
  // Add nunjucks configuration if not already present
  nunjucksEnv: {
    importPaths: [
      'node_modules/govuk-frontend/',
      'node_modules/govuk-frontend/govuk/components/'
    ]
  }
} 