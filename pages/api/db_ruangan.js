const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
// mengambil data dari collection mahasiswa
async function getRuangan(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let ruangan = await db
            .collection('ruangan')
            .find({})
            .sort({})
            .toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(ruangan)),
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
async function addRuangan(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // add the post
        await db.collection('ruangan').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Data ruangan Telah di Tambahkan',
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
            return getRuangan(req, res);
        }
        case 'POST': {
            return addRuangan(req, res);
        }
        case 'PUT': {
            return updateRuangan(req, res);
        }
        case 'DELETE': {
            return deleteaRuangan(req, res);
        }
    }
}