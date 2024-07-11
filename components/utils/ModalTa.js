import React, { useEffect, useRef, useState } from "react";

export default function ModalTa({
  children,
  title,
  show,
  setShowModal,
  setYyLink,
}) {
  const Modal = useRef(null);
  const close = useRef(null);
  const mounted = useRef(true);

  function closeModal() {
    setShowModal(false);
    setYyLink(null);
  }

  useEffect(() => {
    if (show) {
      Modal.current.classList.remove("modal");
    } else {
      Modal.current.classList.add("modal");
    }
  }, [show]);

  return (
    <>
      <div
        ref={Modal}
        className={`modal  h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 `}
        style={{ zIndex: 999999 }}
      >
        <div className="bg-white rounded shadow-lg w-full md:w-4/6">
          <div className="border-b px-2 py-2 flex justify-between items-center">
            <h3 className="font-semibold text-lg">{title}</h3>
            <button
              className="text-black close-modal "
              ref={close}
              onClick={() => closeModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>

          <div className="p-0 m-0">{children}</div>
        </div>
      </div>
    </>
  );
}
