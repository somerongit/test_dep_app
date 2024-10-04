const Hapi = require('@hapi/hapi');
const formatter = new Intl.DateTimeFormat("en-In", { dateStyle: "medium", timeStyle: "medium", hour12: false })

const server = Hapi.server({ port: 3000 });

main()

process.on('unhandledRejection', (err) => {
    console.error(`${formatter.format(new Date())} > Unhandled Rejection Crash`, err);
    process.exit(1);
});

async function main() {

    server.route({
        method: 'GET',
        path: '/ping',
        handler: (_request, _h) => {
            console.log(`${formatter.format(new Date())} > (/ping) Got request`)
            return 'pong';
        }
    });

    await server.start();
    console.log(`${formatter.format(new Date())} > Server running on ${server.info.uri}`);
}
