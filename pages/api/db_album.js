const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
// mengambil data dari collection mahasiswa
async function getAlbum(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the posts
    let album = await db
      .collection('album')
      .find({})
      .sort({ })
      .toArray();
    // return the posts
    return res.json({
      message: JSON.parse(JSON.stringify(album)),
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
async function deleteaAlbum(req, res) {
  var ObjectId = require('mongodb').ObjectId;
  const { _id } = req.body;
  const convertedObjectId = new ObjectId(_id);
  try {
    // Connecting to the database
    let { db } = await connectToDatabase();
    // Deleting the post

    await db.collection('album').deleteOne({
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
async function updateAlbum(req, res) {
  const {
    foto,
    deskripsi,
    objectId, } = req.body
  var ObjectId = require('mongodb').ObjectId;
  const convertedObjectId = new ObjectId(objectId);
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // update the published status of the post
    await db.collection('album').updateOne(
      {
        '_id': convertedObjectId
      },
      {
        $set: {
          'namahiburan': namahiburan,
          'harga': harga,
          'subhiburan': subhiburan,
          'deskripsi': deskripsi,
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
// menambah data kedalam collection mahasiswa
async function addAlbum(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post
    await db.collection('album').insertOne(JSON.parse(req.body));
    // return a message
    return res.json({
      message: 'Data album Telah di Tambahkan',
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
      return getAlbum(req, res);
    }
    case 'POST': {
      return addAlbum(req, res);
    }
    case 'PUT': {
      return updateAlbum(req, res);
    }
    case 'DELETE': {
      return deleteaAlbum(req, res);
    }
  }
}