import axios from 'axios';
import { getBookByIsbn } from '../services/bookService.js';


const OAUTH_ACCESS_TOKEN = 'nuAgQdPey46W4XRQ';
const OAUTH_ACCESS_SECRET = 'D8VybvjlIuDwxExQ';

export const getBooks = async (req, res) => {
    const { query } = req.query; // Extract the search query parameter from the request
  
    if (!query) {
      return res.status(400).json({ error: 'Search query is required.' });
    }
  
    try {
      // Call Open Library API with the search query
      const response = await axios.get('https://openlibrary.org/search.json', {
        params: {
          q: query,
          mode: 'ebooks',
          has_fulltext: true,
        },
        // headers: {
        //   Authorization: `Bearer ${OAUTH_ACCESS_TOKEN}`, // Ensure this token is valid
        // },
      });
  
      const data = response.data; // Axios already parses JSON
  
      if (data.docs && data.docs.length > 0) {
        // Use Promise.all to handle asynchronous operations within the map
        const books = await Promise.all(
          data.docs.map(async (book) => {
            const isbn = book.isbn && book.isbn.length > 0 ? book.isbn[book.isbn.length - 1] : null;
            const additionalData = isbn ? await getBookByIsbn(isbn) : null;
  
            return {
              title: book.title,
              workId: book.key.split('/')[2],
              author: book.author_name ? book.author_name.join(', ') : 'Unknown',
              first_publish_year: book.first_publish_year || 'N/A',
              isbn: isbn || 'N/A',
              obj: additionalData,
            };
          })
        );
  
        res.json({books});
      } else {
        res.status(404).json({ message: 'No books found' });
      }
    } catch (error) {
      console.error('Error fetching books:', error.message);
      res.status(500).json({ error: 'Failed to fetch books from Open Library' });
    }
};