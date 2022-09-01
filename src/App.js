import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Langing from './components/body';
import CV from './components/body/cv';
import Skills from './components/body/skills';
import Error from './components/error';
import Projects from './components/body/projects';
import ParticlesBg from './components/particles';

function App() {
    document.title = 'DARDE Marina';

    return (
        <Router>
            <div id="wrapper_body">
                <Header />
                <main>
                    <ParticlesBg />
                    <div id="main-content">
                        <Routes>
                            <Route path="/" element={<Langing />} />
                            <Route
                                path="Portfolio/"
                                element={<Navigate to="/" replace />}
                            />
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

                <Footer />
            </div>
        </Router>
    );
}

export default App;
