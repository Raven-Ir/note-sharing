// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateNew from './pages/CreateNew';
import ViewNotes from './pages/ViewNotes';

 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-note" element={<CreateNew />} />
            <Route path="/my-notes" element={<ViewNotes />} />
         </Routes>
      </>
   );
};
 
export default App;