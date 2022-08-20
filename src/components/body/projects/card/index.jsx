import { Modal, useModal } from '../../Modal';

const Card = ({ item }) => {
    const { isModalOpened: isCardOpened, toggle: toggleCardOpened } =
        useModal();
    console.log(isCardOpened);
    function handleClick() {
        return toggleCardOpened();
    }

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
                    className="wrap-cover-proj"
                    key={item.id}
                    onClick={() => handleClick()}
                >
                    <img src={item.localLink} alt="" className="cover-proj" />
                    <div className="btn-details">Détailles</div>
                </div>
                {console.log(item.id)}
            </Modal>
        </>
    );
};

export default Card;
