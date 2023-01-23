const coffee = {
  name: "Coffee",
  imgUrl: "https://media.wincacademy.nl/coffee.jpeg",
  alt: `A nice cup of coffee`,
  id: self.crypto.randomUUID(),
};

const tea = {
  name: "Tea",
  imgUrl: "https://media.wincacademy.nl/tea.jpeg",
  alt: `A nice cup of tea`,
  id: self.crypto.randomUUID(),
};

const cola = {
  name: "Cola",
  imgUrl: "https://pauldaniel.nl/img/cola.jpeg",
  alt: `A bottle of Coca Cola`,
  id: self.crypto.randomUUID(),
};

const fanta = {
  name: "Fanta",
  imgUrl: "https://pauldaniel.nl/img/fanta.png",
  alt: `A bottle of Fanta`,
  id: self.crypto.randomUUID(),
};

const sevenup = {
  name: "7-Up",
  imgUrl: "https://pauldaniel.nl/img/7up.jpeg",
  alt: `A bottle of 7-up`,
  id: self.crypto.randomUUID(),
};

const icetea = {
  name: "Ice Tea",
  imgUrl: "https://pauldaniel.nl/img/ice-tea.jpeg",
  alt: `A bottle of Ice Tea`,
  id: self.crypto.randomUUID(),
};

export const availableDrinks = [coffee, tea, cola, fanta, sevenup, icetea];
