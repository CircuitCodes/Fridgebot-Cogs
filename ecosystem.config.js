module.exports = {
  apps : [
      {
        name: "fridgebot-cog-repo",
        script: "./index.js",
        watch: true,
        env: {
          "PORT": 6789,
        }
      }
  ]
}
