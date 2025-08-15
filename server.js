const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3785;

// Serve static files from the static-export directory
app.use(express.static(path.join(__dirname, 'static-export/0.0.0.0:3944')));

// Middleware to handle routes without .html extension
app.use((req, res, next) => {
  // Skip if the request already has a file extension
  if (path.extname(req.path)) {
    return next();
  }

  // Skip if it's the root path
  if (req.path === '/') {
    return next();
  }

  const staticDir = path.join(__dirname, 'static-export/0.0.0.0:3944');
  const htmlFile = path.join(staticDir, req.path + '.html');

  // Check if the HTML file exists
  fs.access(htmlFile, fs.constants.F_OK, (err) => {
    if (!err) {
      // File exists, serve it
      res.sendFile(htmlFile);
    } else {
      // File doesn't exist, continue to next middleware
      next();
    }
  });
});

// Handle root route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static-export/0.0.0.0:3944/index.html'));
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Page Not Found</h1>
    <p>The requested page could not be found.</p>
    <a href="/">Go back to home</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Serving static files from: static-export/0.0.0.0:3944`);
  console.log('Routes available without .html extension:');
  console.log('- http://localhost:' + PORT + '/kontakt');
  console.log('- http://localhost:' + PORT + '/om-oss');
  console.log('- http://localhost:' + PORT + '/overnatting');
  console.log('- http://localhost:' + PORT + '/turar');
  console.log('- And all other HTML files in the directory structure');
});
