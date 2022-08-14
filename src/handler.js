const { nanoid } = require('nanoid');
const books = require('./books');

// eslint-disable-next-line consistent-return
const addBookHandler = (request, h) => {
    try {
        const {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
        } = request.payload;

        if (!name) {
            const response = h.response({
                status: 'fail',
                message: 'Gagal menambahkan buku. Mohon isi nama buku',
            });
            response.code(400);
            return response;
        } if (readPage > pageCount) {
            const response = h.response({
                status: 'fail',
                message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
            });
            response.code(400);
            return response;
        }

            const id = nanoid(16);
            const insertedAt = new Date().toISOString();
            const updatedAt = insertedAt;
            const finished = pageCount === readPage;

            const newBook = {
                id,
                name,
                year,
                author,
                summary,
                publisher,
                pageCount,
                readPage,
                finished,
                reading,
                insertedAt,
                updatedAt,
            };

            const isSuccess = books.filter((book) => book.id === id).length > 0;

            if (isSuccess) {
                const response = h.response({
                    status: 'success',
                    message: 'Buku berhasil ditambahkan',
                    data: {
                        bookId: '1L7ZtDUFeGs7VlEt',
                    },
                });
                response.code(201);
                books.push(newBook);
                return response;
            }
    } catch (error) {
        const response = h.response({
            status: 'errorr',
            message: 'Buku gagal ditambahkan',
        });
        response.code(500);
        return response;
    }
};

const getAllBooksHandler = (request, h) => {
    const response = h.response({
        status: 'success',
        data: {
            books,
        },
    });
    response.code(200);
    return response;
};

const showBookHandler = (request, h) => {
};

const updateBookHandler = (request, h) => {
};

const deleteBookHandler = (request, h) => {
};

module.exports = { addBookHandler,
getAllBooksHandler,
showBookHandler,
updateBookHandler,
deleteBookHandler };
