module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
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
    ],
  };
};
