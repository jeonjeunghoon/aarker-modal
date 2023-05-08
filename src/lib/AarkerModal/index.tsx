import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import * as styled from "./index.styled";

interface AarkerModalProps {
  isOpenModal: boolean;
  handleModalClose: () => void;
}

const AarkerModal = ({
  isOpenModal,
  handleModalClose,
  children,
}: PropsWithChildren<AarkerModalProps>) => {
  if (!isOpenModal) {
    return null;
  }

  return (
    <>
      {createPortal(
        <styled.AarkerModalBox>
          <styled.BackdropBox onClick={handleModalClose} />
          <styled.ContentSection>{children}</styled.ContentSection>;
        </styled.AarkerModalBox>,
        document.body
      )}
    </>
  );
};

export default AarkerModal;
