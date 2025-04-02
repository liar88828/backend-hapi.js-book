const { queryBookSchema, idBookSchema, updateBookSchema, createBookSchema } = require( "../schema/book" );
const { bookAll, bookDelete, bookCreate, bookUpdate, bookDetail } = require( "../controller/bookController" );

const routerBook = [

    {
        method: 'GET',
        path: '/books',
        handler: bookAll,
        options: {
            validate: {
                query: queryBookSchema,
                failAction: 'log'
            }
        }
    },

    {
        method: 'POST',
        path: '/books',
        handler: bookCreate,
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
        handler: bookDetail,
        options: {
            validate: {
                params: idBookSchema,
                failAction: 'log'
            }
        }
    },

    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: bookUpdate,
        options: {
            validate: {
                params: idBookSchema,
                payload: updateBookSchema,
                failAction: 'log'
            },
        }
    },

    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: bookDelete,
        options: {
            validate: {
                params: idBookSchema,
                failAction: 'log'
            },
        }
    },
];

module.exports = routerBook;
