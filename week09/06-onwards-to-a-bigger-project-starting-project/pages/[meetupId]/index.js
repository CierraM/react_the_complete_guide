import { Fragment } from "react/cjs/react.production.min";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

export default function MeetupDetails(props) {
    return <Fragment>
        <Head>
            <title>Meetup details for {props.meetupData.title}</title>
        </Head>
        <MeetupDetails image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description} />

    </Fragment>
}

export function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://read-write-user:SWQ5mep2ULQjqvOl@cluster0.3lib4.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    client.close();
    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({ params: {meetupId: meetup._id.toString()}}))
    }
}

export async function getStaticProps(context) {
    //fetch data for a single meetup
    const client = await MongoClient.connect('mongodb+srv://read-write-user:SWQ5mep2ULQjqvOl@cluster0.3lib4.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)})
    client.close();
    
    const meetupId = context.params.meetupId;
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}