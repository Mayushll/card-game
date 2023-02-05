const HtmlWebpackInjectPreload = require("@principalstudio/html-webpack-inject-preload")
module.exports = function override(config, env) {
    config.plugins.push(
        new HtmlWebpackInjectPreload({
            files: [
                {
                    match: /\.(webp|png|jpeg|jpg)$/,
                    attributes: { as: "image" },
                },
                {
                    match: /\.(mp3|wav)$/,
                    attributes: { as: "video" },
                },
            ],
        })
    )
    return config
}
