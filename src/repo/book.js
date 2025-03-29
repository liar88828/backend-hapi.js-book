/**
 * @type {Bookshelf[]}
 */
const data = [];

function create( newItem ) {
    data.push( newItem );
}

/**
 * @param query {{name?:string,reading?:number,finished?:number,id?:string}}
 * @returns {{id: string, name: string, publisher: string}[]}
 */
function read( query ) {
    const { name, reading, finished, id } = query;
    if ( typeof id === 'string' ) {
        return data.find( item => item.id === id );
    }
    if ( typeof name === 'string' ) {
        const found = data
        .filter( item => item.name.toLowerCase().includes( name.toLowerCase()) )
        .map( item => ({
            "id": item.id,
            "name": item.name,
            "publisher": item.publisher,
        }) );
        if ( found.length === 0 ) return [];
        return found;

    }
    if ( typeof reading === 'number' ) {
        const found = data
        .filter( item => item.reading === Boolean( reading ) )
        .map( item => ({
            "id": item.id,
            "name": item.name,
            "publisher": item.publisher,
        }) );
        if ( found.length === 0 ) return [];
        return found;
    }
    if ( typeof finished === 'number' ) {
        const found = data
        .filter( item => item.finished === Boolean( finished ) )
        .map( item => ({
            "id": item.id,
            "name": item.name,
            "publisher": item.publisher,
        }) );
        if ( found.length === 0 ) return [];
        return found;
    }
    return data.map( item => ({
        "id": item.id,
        "name": item.name,
        "publisher": item.publisher,
    }) );
}

function update( id, updatedItem ) {
    const index = data.findIndex( item => item.id === id );
    if ( index !== -1 ) {
        data[index] = { ...data[index], ...updatedItem };
    } else {
        console.log( "Item not found" );
    }
}

function remove( id ) {
    const index = data.findIndex( item => item.id === id );
    if ( index !== -1 ) {
        data.splice( index, 1 );
    } else {
        console.log( "Item not found" );
    }
}

module.exports = {
    bookRepo: {
        remove, read, create, update, data
    }
};
