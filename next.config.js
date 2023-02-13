module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                and: [/\.(js|ts)x?$/]
            },
            use: ['@svgr/webpack']
        });

        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ['raw-loader', 'glslify-loader'],
        });

        return config;
    }
};
