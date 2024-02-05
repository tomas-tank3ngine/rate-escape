import "./RoomItemMobile.scss";
import Icons from "../IconHolder/IconHolder";
import StarRating from "../StarRating/StarRating";
import FavRoomButton from "../FavRoomButton/FavRoomButton";
import ModalPopup from "../ModalPopup/ModalPopup";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { singleRoomEndpoint } from "../../utils/api-utils";

function RoomItemMobile({ room, setSelectedRoom }) {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    
    const handleContinue = () => {
        navigate(room.id);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        console.log("cancel clicked")
        setTimeout(() => {
            setIsModalOpen(false);
        }, 10);
    };

    const handleSelected = () => {
        setModalContent(`Continue to ${room.name} details?`)
        setIsModalOpen(true);
    };

    return (
        <li onClick={handleSelected} className="table-item-mobile">
            <ModalPopup
                content={modalContent}
                isOpen={isModalOpen}
                onClose={handleCancel}
                onContinue={handleContinue}
            />
            <section className="item-container-top">
                <div className="item-container-top__left">
                    <FavRoomButton />
                    <p className="item-name">{`${room.name}`}</p>
                </div>
                <StarRating rating={room.overall_rating} />
            </section>
            <section className="item-container-middle">
                <p className="item-container-middle__theme">{`${room.theme}`}</p>
                <p className="item-container-middle__difficulty">{`${room.difficulty}`}</p>
                <p className="item-container-middle__completion-rate">
                    {`${room.completion_rate}`}%
                </p>
            </section>
            <section className="item-container-bottom">
                <p className="item-container-bottom__description">{`${room.description}`}</p>
            </section>

            
        </li>
    );
}

export default RoomItemMobile;
