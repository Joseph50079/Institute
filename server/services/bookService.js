export async function getBookByIsbn(num) {
    // Ensure the ISBN is provided
    if (!num) {
        return { error: 'ISBN parameter is required' };
    }

    try {
        // Fetch book data from Open Library API
        const response = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${num}&format=json&jscmd=data`);
        const data = await response.json();

        // Check if book exists in the response
        const bookKey = `ISBN:${num}`;
        if (!data[bookKey]) {
            return { message: 'Book not found' };
        }

        const book = data[bookKey];

        // Safely construct the object
        const result = {
            title: book.title || 'Unknown Title',
            covers: book.cover?.medium || "https://via.placeholder.com/150", // Default cover
            download_links: book.ebooks?.[0]?.formats?.pdf || null, // Null if no valid link
        };

        return result;
    } catch (error) {
        console.error('Error fetching book data:', error.message);
        return { error: 'An error occurred while fetching book data' };
    }
}
