import './App.css';
import { RequestCard } from './components/RequestCard';
import { RequestSummary } from './components/RequestSummary';

function App() {
  return (
    <>
      <RequestCard id={101} title="Printer unavailable" status="OPEN" />
      <RequestSummary total={8} openCount={3} />
    </>
  )
}

export default App
