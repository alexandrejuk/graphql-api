import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/test')

let _db = mongoose.connection;

_db.on('error', console.error.bind(console, 'connection error: '));
_db.once('open', () =>{
    console.log('Application running' )
});

export default _db;