const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
// mengambil data dari collection mahasiswa
async function getPaket(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let paket = await db
            .collection('paket')
            .find({})
            .sort({})
            .toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(paket)),
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
async function updatePaket(req, res) {
    const { namapaket,
        harga,
        subpaket,
        foto,
        objectId, } = req.body
    var ObjectId = require('mongodb').ObjectId;
    const convertedObjectId = new ObjectId(objectId);
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // update the published status of the post
        await db.collection('paket').updateOne(
            {
                '_id': convertedObjectId
            },
            {
                $set: {
                    'namapaket': namapaket,
                    'harga': harga,
                    'subpaket': subpaket,
                    'foto': foto,
                }
            }
        );
        // return a message
        return res.json({
            message: 'Post updated successfully',
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
async function deletePaket(req, res) {
    var ObjectId = require('mongodb').ObjectId;
    const { _id } = req.body;
    const convertedObjectId = new ObjectId(_id);
    try {
        // Connecting to the database
        let { db } = await connectToDatabase();
        // Deleting the post
        
        await db.collection('paket').deleteOne({
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
async function addPaket(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // add the post
        await db.collection('paket').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Data paket Telah di Tambahkan',
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
            return getPaket(req, res);
        }
        case 'POST': {
            return addPaket(req, res);
        }
        case 'PUT': {
            return updatePaket(req, res);
        }
        case 'DELETE': {
            return deletePaket(req, res);
        }
    }
}