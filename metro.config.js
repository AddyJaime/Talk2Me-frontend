const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  const { resolver, transformer } = config;

  config.resolver.assetExts = config.resolver.assetExts.filter(
    (ext) => ext !== 'svg' && ext !== 'flow',
  );
  config.resolver.sourceExts = [
    ...config.resolver.sourceExts,
    'svg',
    'cjs',
    'mjs',
  ];

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };
  config.resolver.unstable_enablePackageExports = false;

  return config;
})();
