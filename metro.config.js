const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts = [...defaultConfig.resolver.assetExts, 'cjs'];
defaultConfig.resolver.sourceExts = [
  ...defaultConfig.resolver.sourceExts,
  'cjs',
  'mjs',
];

module.exports = defaultConfig;
