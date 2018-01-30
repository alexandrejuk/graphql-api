import mongoose from 'mongoose'
import _db from './db'

const Schema = mongoose.Schema;

const catSchema = new Schema({ name: String })

export default _db.model('cats', catSchema);