import { Children } from "react/cjs/react.production.min";

export default function ModalDefault({ showModal, setShowModal, children }) {
  return (
    <>
      {showModal ? (
        <>
          <div
            style={{ zIndex: 100 }}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div
              className={
                showModal
                  ? "slide-fwd-center relative w-auto my-6 mx-auto max-w-3xl px-2"
                  : "relative w-auto my-6 mx-auto max-w-3xl px-2"
              }
            >
              {/*content*/}
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="absolute top-2 right-2 z-50">
                  <button
                    className=""
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>

                <div className="relative p-0 flex-auto">{children}</div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
