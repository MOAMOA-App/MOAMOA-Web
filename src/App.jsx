import Router from "./routes/Router";
import './App.css';

type AppProps = {
  name: string;
}; 

function App (props: AppProps) :JSX.Element {
  return (
    <Router />
  )
}

export default App;


