import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      title: "Health",
      amount: "$759",
      date: new Date(),
    },
    {
      title: "Rent",
      amount: "$584",
      date: new Date(),
    },
    {
      title: "Transport",
      amount: "$4098",
      date: new Date(),
    },
    {
      title: "Roadtrip",
      amount: "$948",
      date: new Date(),
    },
  ];

  return (
    <div>
      <h2>Let's do magic, together!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
