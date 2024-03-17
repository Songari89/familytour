import React, { useContext, useEffect, useState } from 'react';
import fullheart from '../staticimage/fullheart.svg'
import heart from '../staticimage/heart.svg';
import styles from './Like.module.css'
import { IdContext } from "../context/IdProvider";
import { ModalContext } from "../context/ModalProvider";
import useLike from "../hooks/useLike";
import usePlace from "../hooks/usePlace";

export default function Like({list}) {
  const {openSelectedModal} = useContext(ModalContext);
  const {id} = useContext(IdContext);
  const [selected, setSelected] = useState(false);
  const {id:placeId , like } = list
  const {likeQuery:{data: likes}, addItem, removeItem} = useLike({placeId,id})
  const {updateItem} = usePlace();


  useEffect(() => {
    if(likes){
      const isLike = likes.find(like => like && like === id)
      setSelected(!!isLike)
    }
  }, [likes, id, placeId])
  
  const handleClick = () => {
    if(!id){
      openSelectedModal();
      return;
    }
    if(!selected){
      const updateLike = {...list, like:like + 1}
      updateItem.mutate(updateLike)
      addItem.mutate({id, placeId})
      setSelected(true)
    }else{
      const updateLike = { ...list, like: like - 1 };
      updateItem.mutate(updateLike);
      removeItem.mutate({id, placeId})
      setSelected(false)
    }
  }

  
  return (
    <div className={styles.container} onClick={handleClick}>
      <img className={styles.heartimage} src={selected? fullheart : heart} alt="like" />
      <span>좋아요 {list.like}</span>
    </div>
  );
}

