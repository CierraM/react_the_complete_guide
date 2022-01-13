import Card from "../UI/Card";
import './WelcomeCard.css';

function WelcomeCard(props) {
    return (
        <Card className="welcome-card">
            <h2>Welcome, {props.name}</h2>
        </Card>
    )
}

export default WelcomeCard