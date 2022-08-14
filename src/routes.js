const {
    addBookHandler,
    getAllBooksHandler,
    showBookHandler,
    updateBookHandler,
    deleteBookHandler,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
        options: {
            cors: {
                origin: ['*'],
            },
        },
    },
    {
        method: 'GET',
        path: '/books',
        handler: () => getAllBooksHandler,
        options: {
            cors: {
                origin: ['*'],
            },
        },
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: () => showBookHandler,
        options: {
            cors: {
                origin: ['*'],
            },
        },
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: () => updateBookHandler,
        options: {
            cors: {
                origin: ['*'],
            },
        },
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: () => deleteBookHandler,
        options: {
            cors: {
                origin: ['*'],
            },
        },
    },
];

module.exports = routes;
