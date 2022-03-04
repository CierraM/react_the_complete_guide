import MeetupDetails from "../../pages/[meetupId]";
import { Fragment } from "react/cjs/react.production.min";
import classes from './MeetupDetail.module.css'

export default function MeetupDetail() {
    return <Section className={classes.detail}>
        <img src={props.image} alt={props.title} />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
        
    </Section>
}