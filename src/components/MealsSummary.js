import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Fresh Pizzas, By The Slice</h2>
      <p>
        Thinking of what to get for lunch or dinner, or craving a late night
        snack?
      </p>
      <p>
        Try our different pizzas right now -- order them by the slice, and get
        them delivered right to your doorstep!
      </p>
    </section>
  );
};

export default MealsSummary;
