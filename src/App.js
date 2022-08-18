// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Main from './components/body';
import Footer from './components/footer';

function App() {
    document.title = 'DARDE Marina';
    return (
        <div id="wrapper_body">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
