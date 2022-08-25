// import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
    Navigate,
} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Main from './components/body';
import Footer from './components/footer';
import Langing from './components/body';
import CV from './components/body/cv';
import Skills from './components/body/skills';
import Error from './components/error';
import Projects from './components/body/projects';
import videoBg from './assets/videoBg.mp4';
// import videoBg from './assets/Map.mp4';

function App() {
    document.title = 'DARDE Marina';

    return (
        <Router>
            <div id="wrapper_body">
                <Header />
                <main>
                    <video src={videoBg} autoPlay muted loop />
                    <div id="main-content">
                        <Routes>
                            <Route path="/" element={<Langing />} />
                            <Route exact path="/cv" element={<CV />} />
                            <Route exact path="/skills" element={<Skills />} />
                            <Route
                                exact
                                path="/projects"
                                element={<Projects />}
                            />
                            <Route
                                path="*"
                                element={<Error codeError="404" />}
                            />
                        </Routes>
                    </div>
                </main>

                {/* <Main /> */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
