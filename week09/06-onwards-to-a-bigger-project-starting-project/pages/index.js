import MeetupList from '../components/meetups/MeetupList'
import Layout from '../components/layout/Layout'
import { useEffect, useState } from 'react'
import { MongoClient } from 'mongodb'
import Head from 'next/head'
import { Fragment } from 'react/cjs/react.production.min'

export default function HomePage(props) {

    return <Fragment>
        <Head>
            <title>React Meetups</title>
            <meta name="description" content="Brows a list of meetups"></meta>
        </Head>
        <MeetupList meetups={props.meetups} />
    </Fragment>


}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: DUMMY_MEETUPS
//     }
// }

export async function getStaticProps() {
    //fetch data from database
    //read from filesystem
    const client = await MongoClient.connect('mongodb+srv://read-write-user:SWQ5mep2ULQjqvOl@cluster0.3lib4.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 100 //number of seconds to wait until regenerating page
    };
}