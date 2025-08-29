import React from "react";
import "./ModalContainer.scss";
import { ModalContainerProps } from "./ModalContainer.types";
import Portal from "../Portal";
import ModalWindows from "../ModalWindows";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { closeAuthModal } from "../../store/sliceModal";

const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {
const dispatch = useDispatch();

    const isOpen = useSelector((state: RootState) => state.ui.isAuthModalOpen);

    if (!isOpen) return null;

  // cons isOpen = 
  // сделать состояние

  //  <button onClick={() => dispatch(closeLoginModal())}>Close</button>

  return <Portal className="overlay">

    <ModalWindows onCloseModal={() => dispatch(closeAuthModal())}/>

  </Portal>;
};

export default ModalContainer;
