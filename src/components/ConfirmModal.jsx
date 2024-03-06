import React, { useContext } from "react";
import styles from "./ConfirmModal.module.css";
import { ModalContext } from "../context/ModalProvider";
import { useQueryClient, useMutation} from '@tanstack/react-query'
import { deletePhoto, removePhoto } from "../apis/firebase";

export default function ConfirmModal() {
  const { isConfirm, data, closeConfirmModal } = useContext(ModalContext);
    const queryClient = useQueryClient();
    const removeItem = useMutation({
      mutationFn: ({ data }) => removePhoto({ data }),
      onSuccess: () => queryClient.invalidateQueries(["photos"]),
    });

      const handleDelete = (data) => {
        deletePhoto({ id: data.id });
        removeItem.mutate({ data });
        closeConfirmModal();
      };



  return (
    <>
      {isConfirm && (
        <div className={styles.container}>
          <div className={styles.contentscontainer}>
            
            <p className={styles.content}>
              정말 사진을 삭제하시겠습니까?
            </p>

          
              <div className={styles.confirm}>
              <p className={styles.submitbtn} onClick={() => handleDelete(data)}>확인</p><p className={styles.cancle} onClick={closeConfirmModal}>
              취소
            </p>
          </div>
          </div>
        </div>
      )}
    </>
  );
}
