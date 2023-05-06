import { PropsWithChildren } from "react";
interface AarkerModalProps {
    isOpenModal: boolean;
    handleModalClose: () => void;
}
declare const AarkerModal: ({ isOpenModal, handleModalClose, children, }: PropsWithChildren<AarkerModalProps>) => JSX.Element | null;
export default AarkerModal;
