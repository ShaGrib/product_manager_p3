const mongoose = require('mongoose');

const db_name = 'products_db';

mongoose.connect(`mongodb+srv://root:root@ninjasdb.d6hgn.mongodb.net/${db_name}retryWrites=true&w=majority`, {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => console.log('Connected to the database'))
.catch(err => console.log('Something went wrong, error when connecting to the database', err));