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