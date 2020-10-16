module.export = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("react-docgen-typescript-loader")
      }
    ]
  })
}