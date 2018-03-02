const express = require('express');
const es6Renderer = require('express-es6-template-engine');

const app = express();

require('isomorphic-fetch');

app.use(express.static('dist'));
app.engine('html', es6Renderer);
app.set('views', 'dist');
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('home', {
    locals: {
      title: 'Home'
    }
  });
});

app.get('/w/:id', (req, res) => {
  const id = Number(req.params.id);

  fetch('http://localhost:3001/categories')
    .then(response => {
      return response.json();
    })
    .then(json => {
      const category = json.find(item => {
        if (item.id === id) {
          return true;
        }
        return false;
      });

      res.render('about', {
        locals: {
          title: category.title
        }
      });
    });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
