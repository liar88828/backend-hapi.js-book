const Hapi = require( '@hapi/hapi' );
const routerBook = require( "./src/router/book" );

const init = async () => {
    const server = Hapi.server( {
        debug: { request: [ 'error', 'log' ] },
        port: 9000,
        host: 'localhost',
    } );

    server.route(routerBook );
    // server.events.on( 'log', ( event, tags ) => {
    //     console.log( event );
    //     if ( tags.error ) {
    //         console.log( `Server error: ${ event.error ? event.error.message : 'unknown' }` );
    //     }
    // } );
    await server.start();
    console.log( `Server berjalan pada ${ server.info.uri }` );
};

init();
