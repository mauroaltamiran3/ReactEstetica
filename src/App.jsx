import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/product/:productId" element={<ItemDetailContainer />} />
            </Routes>
        </Router>
    );
}

export default App;