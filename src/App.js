import './App.css';
import Accordion from './Accordion';
import Dialog from './Dialog';
import Disclosure from './Disclosure';
import TabPanel from './TabPanel';

function App() {
  return (
    <div className="App" style={{padding:10}}>
      <Accordion />
      <Dialog />
      <Disclosure />
      <TabPanel />
    </div>
  );
}

export default App;
