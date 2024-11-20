import { Book } from '../models/bookModel.js';

export const createBook = async (request, response) => {
    try {
      if (
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear
      ) {
        return response.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
  
      const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
      };
  
      const book = await Book.create(newBook);
  
      return response.status(201).send(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  };

export const getAllBooks = async (request, response) => {
    try {
      const books = await Book.find({});
  
      return response.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  };

  export const deleteBook = async (request, response) => {
    try {
      const { id } = request.params;
  
      const book = await Book.findByIdAndDelete(id);
  
      if (!book) {
        return response.status(404).json({
          message: 'Book not found',
        });
      }
      
      return response.status(200).json({
        message: 'Book deleted successfully',
      });
    } catch (error) {
      console.error(error.message);
      response.status(500).json({
        message: 'An error occurred while deleting the book',
      });
    }
  };


export const editBook = async (request, response) => {
    try {
      const { id } = request.params; 
      const { title, author, publishYear } = request.body; 
  
      if (!title || !author || !publishYear) {
        return response.status(400).json({
          message: 'Please provide title, author, and publishYear to update the book.',
        });
      }
  
      const updatedBook = await Book.findByIdAndUpdate(
        id,
        { title, author, publishYear },
        { new: true, runValidators: true } 
    );
    if (!updatedBook) {
      return response.status(404).json({
        message: 'Book not found',
      });
    }
    return response.status(200).json({
      message: 'Book updated successfully',
      data: updatedBook,
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({
      message: 'An error occurred while updating the book',
    });
  }
};


export const getBookById = async (request, response) => {
  try {
    const { id } = request.params; 

    const book = await Book.findById(id);
    if (!book) {
      return response.status(404).json({
        message: 'Book not found',
      });
    }
    return response.status(200).json({
      message: 'Book fetched successfully',
      data: book,
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({
      message: 'An error occurred while fetching the book details',
    });
  }
};