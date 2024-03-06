import React, { useContext, useState } from 'react';
import { ModalContext } from "../context/ModalProvider";
import styles from './PassWordModal.module.css'

const password = {
  grandfather: process.env.REACT_APP_PASSWORD_SEOSAN,
  grandmother: process.env.REACT_APP_PASSWORD_KYEONGSOOK,
  father: process.env.REACT_APP_PASSWORD_BONGHWAN,
  mother: process.env.REACT_APP_PASSWORD_YEOWOOL,
  aunt: process.env.REACT_APP_PASSWORD_GARAM,
  auncle: process.env.REACT_APP_PASSWORD_YOUNGWOO
};


export default function PassWordModal() {
  const { openModal, isPassword, data,closePasswordModal } = useContext(ModalContext);
  const [text, setText] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text === password[data.id]){
      setText('')
      openModal(data.ticket)
      closePasswordModal();
    } else {
      alert('비밀번호를 다시 입력해주세요.')
      setText("");
    }
  }

  return (
    <>
      {isPassword && (
        <div className={styles.container}>
          <div className={styles.contentscontainer}>
            <p className={styles.cancle} onClick={closePasswordModal}>
              X
            </p>
            <p className={styles.content}>
              티켓 소유주의 생일을 입력하세요.(주민등록번호 기준)
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <input type="password" value={text} placeholder="ex)0515" onChange={(e) => setText(e.target.value)}/>
              <button className={styles.submitbtn}>확인</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

