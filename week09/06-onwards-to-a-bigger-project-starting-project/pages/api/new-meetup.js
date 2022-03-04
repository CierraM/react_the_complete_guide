import { MongoClient } from "mongodb";
// /api/new-meetup
//POST

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body
        
        const client = await MongoClient.connect('mongodb+srv://read-write-user:SWQ5mep2ULQjqvOl@cluster0.3lib4.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data)
        
        client.close();
        res.status(201).json({message: 'Meetup inserted'})
    }
}