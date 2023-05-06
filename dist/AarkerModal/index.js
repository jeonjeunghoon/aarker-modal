import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createPortal } from "react-dom";
import * as styled from "./index.styled";
var AarkerModal = function (_a) {
    var isOpenModal = _a.isOpenModal, handleModalClose = _a.handleModalClose, children = _a.children;
    if (!isOpenModal) {
        return null;
    }
    return (_jsx(_Fragment, { children: createPortal(_jsxs(styled.AarkerModalBox, { children: [_jsx(styled.BackdropBox, { onClick: handleModalClose }), _jsx(styled.ContentSection, { children: children }), ";"] }), document.body) }));
};
export default AarkerModal;
