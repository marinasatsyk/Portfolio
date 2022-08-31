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
import { useEffect } from 'react';
import particlesConfig from './assets/particlesConfig.json';
import ParticlesBg from './components/particles';
// import videoBg from './assets/Map.mp4';

function App() {
    document.title = 'DARDE Marina';
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = './components/bg_animation/work_part/particles.js';
    //     script.async = true;
    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);

    return (
        <Router>
            <div id="wrapper_body">
                <Header />
                <main>
                    {/* <div id="particles-js"></div>
                    <div class="count-particles">
                        <span class="js-count-particles">--</span> particles
                    </div> */}
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
                    {/* <video src={videoBg} autoPlay muted loop /> */}
                </main>

                {/* <Main /> */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
