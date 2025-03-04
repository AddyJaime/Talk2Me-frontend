const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push('cjs'); // Add any additional file extensions if needed

module.exports = config;
