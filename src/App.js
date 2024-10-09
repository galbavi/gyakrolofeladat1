import './App.css';
import Receipt from './Receipt';

const recipes = [
  {
    id: 1,
    name: "Rántotta",
    ingredients: [
      "2 tojás",
      "egy csipet só"
    ],
    instructions: "Feltörjük, megsütjük, finom lesz.",
    difficulty: 3
  },
  {
    id: 1,
    name: "Tükörtojás",
    ingredients: [
      "3 tojás",
      "egy csipet só",
      "zsír"
    ],
    instructions: "Feltörjük, megsütjük, megesszük.",
    difficulty: 4
  },
  {
    id: 1,
    name: "Kávé",
    ingredients: [
      "kávé",
      "2 dl tej",
      "1 kocka cukor"
    ],
    instructions: "Megfőzzük, ízesítjük.",
    difficulty: 4
  }
]

function App() {
  return (
    <div className="App">
      <table>
        {recipes.map(item => {
          return (<Receipt key={item.id} data={item}/>)
        })}
      </table>
    </div>
  );
}

export default App;
