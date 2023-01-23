export const DrinkItems = ({ drinks }) => {
  return (
    <>
      {drinks.map((drink) => (
        <p key={drink.id}>{drink.name}</p>
      ))}
    </>
  );
};
