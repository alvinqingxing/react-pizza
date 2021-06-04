import Card from "./Card";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";

const PIZZAS = [
  {
    id: "m1",
    name: "Classic",
    description: "Tomatoes, Mozarella, Basil",
    price: 4.99,
  },
  {
    id: "m2",
    name: "Breakfast",
    description: "Eggs, Bacon, Spam, Hash Browns",
    price: 4.99,
  },
  {
    id: "m3",
    name: "Meatatarian",
    description: "Ground Beef, Italian Sausage, Bacon, Ham",
    price: 4.99,
  },
  {
    id: "m4",
    name: "Vegan",
    description: "Garden veggies, Tofu, Fresh Herbs",
    price: 4.99,
  },
  {
    id: "m5",
    name: "Hawaiian",
    description: "Ham and Pineapple 🍍",
    price: 4.99,
  },
];

const AvailableMeals = () => {
  const mealsList = PIZZAS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
