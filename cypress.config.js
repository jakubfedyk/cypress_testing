const { defineConfig } = require('cypress')

module.exports = defineConfig({
  examples: {
      
        //"baseUrl": "you url goes here",//
        watchForFileChanges: false,
        viewPortWidth: 1000,
        viewPortHeight: 600,
        waitForAnimation: true,
        animationDistanceTreshold: 20,
        defaultCommandTimeout: 5000,
        execTimeout: 60000,
        pageLoadTimeout: 60000,
        requestTimeout: 15000,
        responseTImeout: 15000,
        video: false,
        failOnStatusCode: false
    
    }
  }
)