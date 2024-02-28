import React, { useContext, useState } from "react";
import styles from "./Ticket.module.css";
import { ModalContext } from "../context/ModalProvider";

export default function Ticket({ ticket, id }) {
  const {openModal} =useContext(ModalContext);

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
                  onClick={() => openModal(ticket.grandparents.father)}
                >
                  티켓 보기
                </button>
              </p>
              <p>
                <span className={styles.dot}>•</span> 할머니
                <button
                  className={styles.modalbtn}
                  onClick={() => openModal(ticket.grandparents.mother)}
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
                  onClick={() => openModal(ticket.parents.father)}
                >
                  티켓 보기
                </button>
              </p>
              <p>
                <span className={styles.dot}>•</span> 엄마
                <button
                  className={styles.modalbtn}
                  onClick={() => openModal(ticket.parents.mother)}
                >
                  티켓 보기
                </button>
              </p>
              <p>
                <span className={styles.dot}>•</span>지안이
                <button
                  className={styles.modalbtn}
                  onClick={() => openModal(ticket.parents.jian)}
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
                onClick={() => openModal(ticket.aunt)}
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
                onClick={() => openModal(ticket.uncle)}
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
