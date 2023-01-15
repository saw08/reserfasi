const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
// mengambil data dari collection mahasiswa
async function getHiburan(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let hiburan = await db
            .collection('hiburan')
            .find({})
            .sort({})
            .toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(hiburan)),
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
async function deleteHiburan(req, res) {
    var ObjectId = require('mongodb').ObjectId;
    const { _id } = req.body;
    const convertedObjectId = new ObjectId(_id);
    try {
        // Connecting to the database
        let { db } = await connectToDatabase();
        // Deleting the post
        
        await db.collection('hiburan').deleteOne({
            '_id': convertedObjectId
        });
        // returning a message
        return res.json({
            message: 'Post deleted successfully',
            success: true,
        });
    } catch (error) {
        // returning an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
};
// menambah data kedalam collection mahasiswa
async function addHiburan(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // add the post
        await db.collection('hiburan').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Data hiburan Telah di Tambahkan',
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
            return getHiburan(req, res);
        }
        case 'POST': {
            return addHiburan(req, res);
        }
        case 'PUT': {
            return updateHiburan(req, res);
        }
        case 'DELETE': {
            return deleteHiburan(req, res);
        }
    }
}