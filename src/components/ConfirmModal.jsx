import React, { useContext } from "react";
import styles from "./ConfirmModal.module.css";
import { ModalContext } from "../context/ModalProvider";
import { useQueryClient, useMutation} from '@tanstack/react-query'
import { deletePhoto, removePhoto } from "../apis/firebase";

export default function ConfirmModal() {
  const { isConfirm, data:photo, closeConfirmModal } = useContext(ModalContext);
    const queryClient = useQueryClient();
    const removeItem = useMutation({
      mutationFn: ({ photo }) => removePhoto({ photo }),
      onSuccess: () => queryClient.invalidateQueries(["photos"]),
    });

      

      const handleDelete = ({photo}) => {
        const id = photo.id
        removeItem.mutate({ photo })
        deletePhoto({id}).then(() => closeConfirmModal())
        
        
      
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
              <p className={styles.submitbtn} onClick={() => handleDelete({photo})}>확인</p><p className={styles.cancle} onClick={closeConfirmModal}>
              취소
            </p>
          </div>
          </div>
        </div>
      )}
    </>
  );
}
