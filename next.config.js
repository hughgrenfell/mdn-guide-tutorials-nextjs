const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            output: "export",
            images: { unoptimized: true },
        }
    }

    return {
        images: { unoptimized: true },
    }
}