/**
 * @type {{name: string, year: number, author: number, summary: string, publisher: string, pageCount: number, readPage: number, reading: boolean}}
 */
export const CreateBookshelf = {
    "name": '',
    "year": 0,
    "author": 0,
    "summary": '',
    "publisher": '',
    "pageCount": 0,
    "readPage": 0,
    "reading": false,
};
/**
 * @type {{id: string, name: string, year: number, author: string, summary: string, publisher: string, pageCount: number, readPage: number, finished: boolean, reading: boolean, insertedAt: string, updatedAt: string}}
 */
export const Bookshelf = {
    "id": "Qbax5Oy7L8WKf74l",
    "name": "Buku A",
    "year": 2010,
    "author": "John Doe",
    "summary": "Lorem ipsum dolor sit amet",
    "publisher": "Dicoding Indonesia",
    "pageCount": 100,
    "readPage": 25,
    "finished": false,
    "reading": false,
    "insertedAt": new Date(),
    "updatedAt":  new Date()
}
/**
 * @type {{status: string, message: string}}
 */
export const ErrorResponse = {
    "status": "fail",
    "message": "Gagal menambahkan buku. Mohon isi nama buku"
}

/**
 * @type {{status: string, data: {books: [{id: string, name: string, publisher: string},{id: string, name: string, publisher: string},{id: string, name: string, publisher: string}]}}}
 */
export const BookshelfResponses = {
    "status": "success",
    "data": {
        "books": [
            {
                "id": "Qbax5Oy7L8WKf74l",
                "name": "Buku A",
                "publisher": "Dicoding Indonesia"
            },
            {
                "id": "1L7ZtDUFeGs7VlEt",
                "name": "Buku B",
                "publisher": "Dicoding Indonesia"
            },
            {
                "id": "K8DZbfI-t3LrY7lD",
                "name": "Buku C",
                "publisher": "Dicoding Indonesia"
            }
        ]
    }
}

/**
 * @type {{status: string, data: {book: {id: string, name: string, year: number, author: string, summary: string, publisher: string, pageCount: number, readPage: number, finished: boolean, reading: boolean, insertedAt: string, updatedAt: string}}}}
 */
export const BookshelfResponse = {
    "status": "success",
    "data": {
        "book": {
            "id": "aWZBUW3JN_VBE-9I",
            "name": "Buku A Revisi",
            "year": 2011,
            "author": "Jane Doe",
            "summary": "Lorem Dolor sit Amet",
            "publisher": "Dicoding",
            "pageCount": 200,
            "readPage": 26,
            "finished": false,
            "reading": false,
            "insertedAt": "2021-03-05T06:14:28.930Z",
            "updatedAt": "2021-03-05T06:14:30.718Z"
        }
    }
}
