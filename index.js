const Hapi = require( '@hapi/hapi' );
const Joi = require( 'joi' );
const { nanoid } = require( "nanoid" );
const { createBookSchema, updateBookSchema } = require( "./src/schema/book" );
const { bookRepo } = require( "./src/repo/book" );

const init = async () => {
    const server = Hapi.server( {
        debug: { request: [ 'error', 'log' ] },
        port: 9000,
        host: 'localhost',
    } );

    server.route( [

        {
            method: 'GET',
            path: '/books',
            handler: ( req, res ) => {
                return res.response( {
                    status: "success",
                    data: { books: bookRepo.read( req.query ) }
                } ).code( 200 );

            },
            options: {
                validate: {
                    query: Joi.object( {
                        name: Joi.string().optional(),
                        reading: Joi.number().optional(),
                        finished: Joi.number().optional(),
                    } ),
                    failAction: 'log'
                }
            }
        },

        {
            method: 'POST',
            path: '/books',
            handler: ( req, res ) => {
                const book = req.payload;

                if ( book.name === '' || !book.name ) {
                    const data = {
                        "status": "fail",
                        "message": "Gagal menambahkan buku. Mohon isi nama buku"
                    };
                    return res.response( data ).code( 400 );
                }

                if ( book.pageCount < book.readPage ) {
                    const data = {
                        "status": "fail",
                        "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
                    };
                    return res.response( data ).code( 400 );
                }

                book.id = nanoid();
                book.insertedAt = new Date().toISOString();
                book.updatedAt = new Date().toISOString();
                book.finished = book.pageCount === book.readPage;
                bookRepo.create( book );
                const data = {
                    "status": "success",
                    "message": "Buku berhasil ditambahkan",
                    "data": {
                        "bookId": book.id
                    }
                };
                return res.response( data ).code( 201 );
            },
            options: {
                validate: {
                    payload: createBookSchema,
                    failAction: 'log'

                }
            }
        },

        {
            method: 'GET',
            path: '/books/{bookId}',
            handler: ( req, res ) => {
                const bookDB = bookRepo.read( { id: req.params.bookId } );
                if ( !bookDB ) {
                    const data = {
                        "status": "fail",
                        "message": "Buku tidak ditemukan"
                    };
                    return res.response( data ).code( 404 );
                }

                const data = {
                    "status": "success",
                    "data": {
                        "book": bookDB
                    }
                };
                return res.response( data ).code( 200 );
            },
            options: {
                validate: {
                    params: Joi.object( { bookId: Joi.string() } ),
                    failAction: 'log'
                }
            }
        },

        {
            method: 'PUT',
            path: '/books/{bookId}',
            handler: ( req, res ) => {
                const book = req.payload;
                const id = req.params.bookId;
                const bookDB = bookRepo.read( { id } );
                if ( !bookDB ) {
                    const data = {
                        "status": "fail",
                        "message": "Gagal memperbarui buku. Id tidak ditemukan"
                    };
                    return res.response( data ).code( 404 );
                }

                if ( book.name === '' || !book.name ) {
                    const data = {
                        "status": "fail",
                        "message": "Gagal memperbarui buku. Mohon isi nama buku"
                    };
                    return res.response( data ).code( 400 );
                }


                if ( book.pageCount < book.readPage ) {
                    const data = {
                        "status": "fail",
                        "message": "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
                    };
                    return res.response( data ).code( 400 );
                }

                book.updatedAt = new Date().toISOString();
                book.finished = book.pageCount === book.readPage;
                bookRepo.update( id, book );
                const data = {
                    // "status": "success",
                    // "data": {
                    //     "book": bookDB
                    // }
                    "status": "success",
                    "message": "Buku berhasil diperbarui"
                };

                return res.response( data ).code( 200 );
            },
            options: {
                validate: {
                    params: Joi.object( { bookId: Joi.string() } ),
                    payload: updateBookSchema,
                    failAction: 'log'
                },
            }
        },

        {
            method: 'DELETE',
            path: '/books/{bookId}',
            handler: ( req, res ) => {
                const id = req.params.bookId;
                const bookDB = bookRepo.read( { id } );
                if ( !bookDB ) {
                    const data = {
                        "status": "fail",
                        "message": "Buku gagal dihapus. Id tidak ditemukan"
                    };
                    return res.response( data ).code( 404 );
                }
                bookRepo.remove( id );
                const data = {
                    "status": "success",
                    "message": "Buku berhasil dihapus"
                };

                return res.response( data ).code( 200 );
            },
            options: {
                validate: {
                    params: Joi.object( { bookId: Joi.string() } ),
                    failAction: 'log'

                },
            }
        },
    ] );
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
