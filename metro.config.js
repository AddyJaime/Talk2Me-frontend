const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  config.resolver.assetExts = [...config.resolver.assetExts, 'cjs'];
  config.resolver.sourceExts = [...config.resolver.sourceExts, 'cjs', 'mjs'];

  config.resolver.assetExts = config.resolver.assetExts.filter(
    (ext) => ext !== 'flow',
  );

  return config;
})();
