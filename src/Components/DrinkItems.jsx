export const DrinkItems = ({ drinks }) => {
  <>
    {drinks.map((drink) => (
      <p key={drink.id}>{drink.name}</p>
    ))}
  </>;
};
