interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) =>  {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Button1"/>
      <Button title="Button2"/>
      <Button title="Button1"/>
    </div>
  )
}

export default App
