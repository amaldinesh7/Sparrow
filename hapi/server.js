//  'use strict';

const Hapi = require('@hapi/hapi');
const Bell = require('@hapi/bell');
const {configureRoutes} = require('./src/routes/routes');


const init = async () => 
{

    const server = Hapi.server({
        port: 80,
        host: 'localhost',
        routes: {
            cors: true
        }
    });

    await server.register(Bell)

    server.auth.strategy('google', 'bell', {
        provider: 'google',
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: '604711657196-dlfe9tsb18bk696qjvo27acenihcuebv.apps.googleusercontent.com',
        clientSecret: '9lCmYNkKBWVf4wM0DiSkMMaS',
        location: server.info.uri
    });

    await configureRoutes(server)
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
