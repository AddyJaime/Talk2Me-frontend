module.exports = function (api) {
  api.cache(true);
  return {
    // react native 0.78 does not use "metro-react-native-babel-preset", this happens so that bael does not depend a lot from metro and has more dependency
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@api': './src/api',
            '@assets': './src/assets',
            '@components': './src/components',
            '@constants': './src/constants',
            '@contexts': './src/contexts',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@styles': './src/styles',
            '@utils': './src/utils',
          },
        },
      ],
      ['module:react-native-dotenv'],
      ['@babel/plugin-transform-flow-strip-types'],
      'react-native-reanimated/plugin',
    ],
  };
};
