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
                • 할아버지
                <button onClick={() => openModal(ticket.parents.father)}>
                  티켓 보기
                </button>
              </p>
              <p>
                • 할머니
                <button onClick={() => openModal(ticket.grandparents.mother)}>
                  티켓 보기
                </button>
              </p>
            </>
          )}
          {id === "parents" && (
            <>
              <p>
                • 아빠
                <button onClick={() => openModal(ticket.parents.father)}>
                  티켓 보기
                </button>
              </p>
              <p>
                • 엄마
                <button onClick={() => openModal(ticket.parents.mother)}>
                  티켓 보기
                </button>
              </p>
              <p>
                • 지안이
                <button onClick={() => openModal(ticket.parents.jian)}>
                  티켓 보기
                </button>
              </p>
            </>
          )}
          {id === "aunt" && (
            <p>
              • 이모
              <button onClick={() => openModal(ticket.aunt)}>티켓 보기</button>
            </p>
          )}
          {id === "uncle" && (
            <p>
              • 삼촌
              <button onClick={() => openModal(ticket.uncle)}>티켓 보기</button>
            </p>
          )}
        </>
      )}

    </>
  );
}
