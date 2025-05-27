import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home/Home';
import ContactsPage from './pages/Contacts/Contacts';
import AboutPage from './pages/About/About';
import TodoRedux from './pages/todo-redux/index.js';
import CounterRedux from "./pages/counter-redux";
import './styles.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Header/>
                <main className="content">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/contacts" element={<ContactsPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/todo-redux" element={<TodoRedux/>}/>
                        <Route path="/counter-redux" element={<CounterRedux/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;