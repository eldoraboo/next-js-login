module.exports = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        secret: 'uHtch0XTy0meAIrbbtafjQ'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'https://eldoraboo-nextjslogin.netlify.app/api' // production api
    }
}
