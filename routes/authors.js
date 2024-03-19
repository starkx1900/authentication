const authors = (req, res) => {
    if (req.method === 'GET') {
      return res.end(
        JSON.stringify({
          message: 'Fetching all authors',
          data: [
            { id: 1, name: 'J.K. Rowling' },
            { id: 2, name: 'Mark Ronson' },
          ],
        })
      );
    }
  
    if (req.method === 'POST') {
      if (req.body) {
        const author = req.body;
        return res.end(
          JSON.stringify({
            message: 'Author created successfully',
            data: author,
          })
        );
      }
    }
  
    if (req.method === 'PATCH') {
      if (req.body) {
        const author = req.body;
        return res.end(
          JSON.stringify({
            message: 'Author updated successfully',
            data: author,
          })
        );
      }
    }
  
    if (req.method === 'PUT') {
      if (req.body) {
        const author = req.body;
        return res.end(
          JSON.stringify({
            message: 'Author updated successfully',
            data: author,
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
  
  export default authors;
  