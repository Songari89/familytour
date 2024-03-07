import React, { useContext} from "react";
import styles from "./Ticket.module.css";
import { ModalContext } from "../context/ModalProvider";

export default function Ticket({ ticket, id }) {
  const { openPasswordModal, setData } = useContext(ModalContext);

  return (
    <>
      {id && (
        <>
          {id === "grandparents" && (
            <>
              <p>
                <span className={styles.dot}>•</span> 할아버지
                <button
                  className={styles.modalbtn}
                  onClick={() =>
                    openPasswordModal({
                      ticket: ticket.grandparents.father,
                      id: "grandfather",
                    })
                  }
                >
                  티켓 보기
                </button>
              </p>
              <p>
                <span className={styles.dot}>•</span> 할머니
                <button
                  className={styles.modalbtn}
                  onClick={() => {
                    openPasswordModal();
                    setData({
                      ticket: ticket.grandparents.mother,
                      id: "grandmother",
                    });
                  }}
                >
                  티켓 보기
                </button>
              </p>
            </>
          )}
          {id === "parents" && (
            <>
              <p>
                <span className={styles.dot}>•</span> 아빠
                <button
                  className={styles.modalbtn}
                  onClick={() => {
                    openPasswordModal();
                    setData({
                      ticket: ticket.parents.father,
                      id: "father",
                    });
                  }}
                >
                  티켓 보기
                </button>
              </p>
              <p>
                <span className={styles.dot}>•</span> 엄마
                <button
                  className={styles.modalbtn}
                  onClick={() => {
                    openPasswordModal();
                    setData({
                      ticket: ticket.parents.mother,
                      id: "mother",
                    });
                  }}
                >
                  티켓 보기
                </button>
              </p>
              <p>
                <span className={styles.dot}>•</span>지안이
                <button
                  className={styles.modalbtn}
                  onClick={() => {
                    openPasswordModal();
                    setData({
                      ticket: ticket.parents.jian,
                      id: "jian",
                    });
                  }}
                >
                  티켓 보기
                </button>
              </p>
            </>
          )}
          {id === "aunt" && (
            <p>
              <span className={styles.dot}>•</span>이모
              <button
                className={styles.modalbtn}
                onClick={() => {
                  openPasswordModal();
                  setData({ ticket: ticket.aunt, id: "aunt" });
                }}
              >
                티켓 보기
              </button>
            </p>
          )}
          {id === "uncle" && (
            <p>
              <span className={styles.dot}>•</span> 삼촌
              <button
                className={styles.modalbtn}
                onClick={() => {
                  openPasswordModal();
                  setData({ ticket: ticket.uncle, id: "uncle" });
                }}
              >
                티켓 보기
              </button>
            </p>
          )}
        </>
      )}
    </>
  );
}
