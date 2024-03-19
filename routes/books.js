const books = (req, res) => {
    if (req.method === 'GET') {
      return res.end(
        JSON.stringify({
          message: 'Fetching all books',
          data: [{ name: 'Harry Potter' }, { name: 'Lord of the Rings' }],
        })
      );
    }
  
    if (req.method === 'POST') {
      if (req.body) {
        const book = req.body;
        return res.end(
          JSON.stringify({
            message: 'Book created successfully',
            data: book,
          })
        );
      }
    }
  
    if (req.method === 'PATCH') {
      if (req.body) {
        const book = req.body;
        return res.end(
          JSON.stringify({
            message: 'Book updated successfully',
            data: book,
          })
        );
      }
    }
  
    if (req.method === 'PUT') {
      if (req.body) {
        const book = req.body;
        return res.end(
          JSON.stringify({
            message: 'Book updated successfully',
            data: book,
          })
        );
      }
    }
  
    if (req.method === 'DELETE') {
      res.statusCode = 204;
      return res.end();
    }
    res.statusCode = 404;
    return res.end(
      JSON.stringify({
        message: 'Something went wrong',
      })
    );
  };
  
  export default books;
  