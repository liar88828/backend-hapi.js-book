const Joi = require( "joi" );
const createBookSchema = Joi.object( {
    name: Joi.string()
    .required()
    .messages( { 'any.required': 'Nama buku harus diisi.' } ),

    year: Joi.number()
    .integer()
    .min( 1900 )
    .max( 2100 )
    .required()
    .messages( {
        'number.base': 'Tahun harus berupa angka.',
        'number.integer': 'Tahun harus berupa bilangan bulat.',
        'number.min': 'Tahun tidak boleh kurang dari 1900.',
        'number.max': 'Tahun tidak boleh lebih dari 2100.',
        'any.required': 'Tahun harus diisi.'
    } ),

    author: Joi.string()
    .required()
    .messages( { 'any.required': 'Nama penulis harus diisi.' } ),

    summary: Joi.string()
    .required()
    .messages( { 'any.required': 'Ringkasan harus diisi.' } ),

    publisher: Joi.string()
    .required()
    .messages( { 'any.required': 'Nama penerbit harus diisi.' } ),

    pageCount: Joi.number()
    .integer()
    .min( 1 )
    .required()
    .messages( {
        'number.base': 'Jumlah halaman harus berupa angka.',
        'number.integer': 'Jumlah halaman harus bilangan bulat.',
        'number.min': 'Jumlah halaman minimal 1.',
        'any.required': 'Jumlah halaman harus diisi.'
    } ),

    readPage: Joi.number()
    .integer()
    .min( 0 )
    .max( Joi.ref( 'pageCount' ) )
    .required()
    .messages( {
        'number.base': 'Halaman yang dibaca harus berupa angka.',
        'number.integer': 'Halaman yang dibaca harus bilangan bulat.',
        'number.min': 'Halaman yang dibaca minimal 0.',
        'number.max': 'Halaman yang dibaca tidak boleh lebih dari total jumlah halaman.',
        'any.required': 'Halaman yang dibaca harus diisi.'
    } ),

    reading: Joi.boolean()
    .required()
    .messages( {
        'boolean.base': 'Status membaca harus berupa nilai boolean (true atau false).',
        'any.required': 'Status membaca harus diisi.'
    } )
} );



const updateBookSchema = Joi.object({
    name: Joi.string()
    .required()
    .messages({ 'any.required': 'Nama buku harus diisi.' }),

    year: Joi.number()
    .integer()
    .min(1900)
    .max(2100)
    .required()
    .messages({
        'number.base': 'Tahun harus berupa angka.',
        'number.integer': 'Tahun harus berupa bilangan bulat.',
        'number.min': 'Tahun tidak boleh kurang dari 1900.',
        'number.max': 'Tahun tidak boleh lebih dari 2100.',
        'any.required': 'Tahun harus diisi.'
    }),

    author: Joi.string()
    .required()
    .messages({ 'any.required': 'Nama penulis harus diisi.' }),

    summary: Joi.string()
    .required()
    .messages({ 'any.required': 'Ringkasan harus diisi.' }),

    publisher: Joi.string()
    .required()
    .messages({ 'any.required': 'Nama penerbit harus diisi.' }),

    pageCount: Joi.number()
    .integer()
    .min(1)
    .required()
    .messages({
        'number.base': 'Jumlah halaman harus berupa angka.',
        'number.integer': 'Jumlah halaman harus bilangan bulat.',
        'number.min': 'Jumlah halaman minimal 1.',
        'any.required': 'Jumlah halaman harus diisi.'
    }),

    readPage: Joi.number()
    .integer()
    .min(0)
    .max(Joi.ref('pageCount'))
    .required()
    .messages({
        'number.base': 'Halaman yang dibaca harus berupa angka.',
        'number.integer': 'Halaman yang dibaca harus bilangan bulat.',
        'number.min': 'Halaman yang dibaca minimal 0.',
        'number.max': 'Halaman yang dibaca tidak boleh lebih dari total jumlah halaman.',
        'any.required': 'Halaman yang dibaca harus diisi.'
    }),

    reading: Joi.boolean()
    .required()
    .messages({
        'boolean.base': 'Status membaca harus berupa nilai boolean (true atau false).',
        'any.required': 'Status membaca harus diisi.'
    })
});


module.exports = { createBookSchema ,updateBookSchema};
