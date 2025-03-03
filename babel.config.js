module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver", //allow to use short routes inatead of long routes
        {
          root: ["./src"],
          alias: {
            "@api": "./src/api",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@constants": "./src/Constants",
            "@contexts": "./src/contexts",
            "@hooks": "./src/hooks",
            "@navigation": "./src/navigation",
            "@routes": "./src/Routes",
            "@screens": "./src/screens",
            "@styles": "./src/styles",
            "@utils": "./src/utils",
          },
        },
      ],
      ["module:react-native-dotenv"],
    ],
  };
};
