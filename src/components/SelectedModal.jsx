import React, { useContext } from 'react';
import { ModalContext } from "../context/ModalProvider";
import {useNavigate} from 'react-router-dom'
import styles from './SelectedModal.module.css'

export default function SelectedModal() {
  const { isSelected,closeSelectedModal } = useContext(ModalContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/')
    closeSelectedModal();
  }

  return (
    <>
      {isSelected && (
              <div className={styles.container}>
          <div className={styles.contentscontainer}>
            <p className={styles.cancle} onClick={closeSelectedModal}>
              취소
            </p>
            <p className={styles.content}>
              사용자를 선택해주세요.
            </p>

            <button className={styles.submitbtn} onClick={handleClick}>
              메인화면으로
            </button>
          </div>
        </div>
      )}
    </>
  );
}

