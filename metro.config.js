const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Remove the previous transformer configuration if you added it
// Keep only this:
module.exports = config;
