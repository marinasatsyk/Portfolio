import { Modal, useModal } from '../../Modal';
import gitHubLogo from '../../../../assets/github-brands.svg';
import netLogo from '../../../../assets/globe-solid.svg';
import { motion } from 'framer-motion';

const ModalPart = ({ item, isCardOpened, handleClick }) => {
    const [...challenge] = [...item.description.challenge];
    const [...solution] = [...item.description.solution];
    const [...tecnologies] = [...item.tecnologies];

    return (
        <Modal isModalOpened={isCardOpened} hide={handleClick}>
            <div
                className="wrap-cover-proj-modal"
                key={item.id}
                onClick={() => handleClick()}
            >
                <img src={item.localLink} alt="" className="cover-proj-modal" />
                <article className="details-modal">
                    <header className="header-modal">
                        <h1 className="title-details">Détailles du projet</h1>
                    </header>
                    <main className="main-modal">
                        <div className="challenge-wrap item-proj-modal">
                            <h4>Défi</h4>
                            <ul className="solution-wrap-items">
                                {challenge.map((item, index) => (
                                    <li
                                        key={`${index}-challenge`}
                                        className="item-challenge item-modal"
                                    >
                                        <span key={`${index}-challengeSpan`}>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="solution-wrap item-proj-modal">
                            <h4>Solution</h4>
                            <ul className="solution-wrap-items">
                                {solution.map((item, index) => (
                                    <li
                                        key={`${index}-solution`}
                                        className="item-solution item-modal"
                                    >
                                        <span key={`${index}-solutionSpan`}>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="tecno-wrap item-proj-modal">
                            <h4>Técnologies</h4>
                            <ul className="tecno-wrap-items">
                                {tecnologies.map((item, index) => (
                                    <li
                                        key={`${index}-tecno`}
                                        className="item-tecno item-modal"
                                    >
                                        <span key={`${index}-tecnoSpan`}>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
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
    );
};
export default ModalPart;
