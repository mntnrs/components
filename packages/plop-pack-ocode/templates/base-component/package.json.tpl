{
  "name": "@ocode/{{name}}",
  "version": "1.0.0",
  "description": "{{description}}",
  "main": "lib/index.js",
  "author": "Chris Biscardi <chris@christopherbiscardi.com",
  "license": "MIT",
  "scripts": {
    "build": "babel src --out-dir lib --source-maps",
    "build:watch": "babel src --out-dir lib --source-maps --watch"
  },
  "dependencies": {
    "@ocode/constants": "*",
    "preact-emotion": "7.2.0"
  }
}
