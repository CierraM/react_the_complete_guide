import DUMMY_MEALS from './dummy-meals.js'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card.js'
import MealItem from './MealItem/MealItem.js'

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => {
        return <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}>{meal.name}</MealItem>
    })
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}
export default AvailableMeals