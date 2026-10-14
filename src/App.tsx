import './App.css';
import { RequestCard } from './components/RequestCard';

function App() {
  return (
    <>
      <RequestCard id={101} title="Printer unavailable" status="OPEN" />
    </>
  )
}

export default App
