const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
// mengambil data dari collection mahasiswa
async function getMenu(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let menu = await db
            .collection('menu')
            .find({})
            .sort({})
            .toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(menu)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
// menambah data kedalam collection mahasiswa
async function addMenu(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // add the post
        await db.collection('menu').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Data menu Telah di Tambahkan',
            success: true,
        });
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
// CRUD handler
export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getMenu(req, res);
        }
        case 'POST': {
            return addMenu(req, res);
        }
        case 'PUT': {
            return updateMenu(req, res);
        }
        case 'DELETE': {
            return deleteaMenu(req, res);
        }
    }
}