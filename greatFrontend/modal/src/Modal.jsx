import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

export default function ModalDialog({ children, open = false, title, onClose }) {
    const modalRef = useRef(null);
    const previousActiveElement = useRef(null);

    useEffect(() => {
        if (open) {
            previousActiveElement.current = document.activeElement;
            modalRef.current.focus();
        } else if (previousActiveElement.current) {
            previousActiveElement.current.focus();
        }
    }, [open]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!open) {
        return null;
    }

    return createPortal(
        <div className="modal-overlay" role="dialog"  aria-labelledby="modal-title" onClick={onClose}>
            <dialog className="modal" ref={modalRef} tabIndex="-1" aria-modal>
                <header>
                    <h1 id="modal-title" className="modal-title">{title}</h1>
                </header>
                <div>{children}</div>
                <footer>
                    <button onClick={onClose}>Close</button>
                </footer>
            </dialog>
        </div>,
        document.body,
    );
}