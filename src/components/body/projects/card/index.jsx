import { Modal, useModal } from '../../Modal';
import ReactDOM from 'react-dom/client';
import gitHubLogo from '../../../../assets/github-brands.svg';
import netLogo from '../../../../assets/globe-solid.svg';

import './card.css';
// const root = ReactDOM.createRoot(document.getElementById('root'));
const Card = ({ item }) => {
    const { isModalOpened: isCardOpened, toggle: toggleCardOpened } =
        useModal();
    console.log(isCardOpened);
    function handleClick() {
        return toggleCardOpened();
    }
    const [...challenge] = [...item.description.challenge];
    const [...solution] = [...item.description.solution];
    const [...tecnologies] = [...item.tecnologies];
    console.log(challenge);
    return (
        <>
            <div
                className="wrap-cover-proj"
                key={item.id}
                onClick={handleClick}
            >
                <img src={item.localLink} alt="" className="cover-proj" />
                <div className="btn-details">Détailles</div>
            </div>
            <Modal
                isModalOpened={isCardOpened}
                hide={toggleCardOpened}
                title={item.name}
            >
                <div
                    className="wrap-cover-proj-modal"
                    key={item.id}
                    onClick={() => handleClick()}
                >
                    <img
                        src={item.localLink}
                        alt=""
                        className="cover-proj-modal"
                    />
                    <article className="details-modal">
                        <header className="header-modal">
                            <h1 className="title-details">
                                Détailles du projet
                            </h1>
                        </header>
                        <main className="main-modal">
                            <div className="challenge-wrap item-proj-modal">
                                <h4>Défi</h4>
                                {challenge.map((item, index) => (
                                    <div
                                        key={`${index}-challenge`}
                                        className="item-challenge"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="solution-wrap item-proj-modal">
                                <h4>Solution</h4>
                                {solution.map((item, index) => (
                                    <div
                                        key={`${index}-solution`}
                                        className="item-solution"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="tecno-wrap item-proj-modal">
                                <h4>Técnologies</h4>
                                <div className="tecno-wrap-items">
                                    {' '}
                                    {tecnologies.map((item, index) => (
                                        <div
                                            key={`${index}-tecno`}
                                            className="item-tecno"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </main>

                        <footer className="footer-modal">
                            <nav>
                                <ul className="footer-nav-modal">
                                    <li
                                        className="item-modal-link"
                                        onClick={() => window.open(item.gitHub)}
                                    >
                                        <img
                                            src={gitHubLogo}
                                            alt=""
                                            className="gitHubLogo modal-logo"
                                        />
                                        <div>Regarder le code</div>
                                    </li>

                                    {item.externalLink && (
                                        <li
                                            className="item-modal-link"
                                            onClick={() =>
                                                window.open(item.externalLink)
                                            }
                                        >
                                            <img
                                                src={netLogo}
                                                alt=""
                                                className="netLogo modal-logo"
                                            />
                                            <div>Regarder le site</div>
                                        </li>
                                    )}
                                </ul>
                            </nav>
                        </footer>
                    </article>
                </div>
            </Modal>
        </>
    );
};

export default Card;
