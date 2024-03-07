import React, { useContext, useEffect, useState } from 'react';
import fullheart from '../staticimage/fullheart.svg'
import heart from '../staticimage/heart.svg';
import styles from './Like.module.css'
import { IdContext } from "../context/IdProvider";
import {useQueryClient, useMutation, useQuery} from '@tanstack/react-query';
import { addLike, getLike, removeLike } from "../apis/firebase";
import { ModalContext } from "../context/ModalProvider";

export default function Like({placeId}) {
  const {openSelectedModal} = useContext(ModalContext);
  const {id} = useContext(IdContext);
  const [like, setLike] = useState();
  const [selected, setSelected] = useState(false);
  const queryClient = useQueryClient();
  const {data: likes} = useQuery({
    queryKey:['likes', placeId || ""], queryFn:() => getLike({placeId}), enabled: !!id})
  const addItem = useMutation({
    mutationFn: ({id, placeId}) => addLike({id, placeId}),
    onSuccess: () => queryClient.invalidateQueries(["likes", placeId]),
  });
  const removeItem = useMutation({
    mutationFn: ({id, placeId }) => removeLike( {id, placeId }),
    onSuccess: () => queryClient.invalidateQueries(["likes", placeId]),
  });


  useEffect(() => {
    if(likes){
      const isLike = likes.find(like => like && like === id)
      setSelected(!!isLike)
      setLike(likes.length)
    }
  }, [likes, id, placeId])
  
  const handleClick = () => {
    if(!id){
      openSelectedModal();
      return;
    }
    if(!selected){
      addItem.mutate({id, placeId})
      setSelected(true)
    }else {
      removeItem.mutate({id, placeId})
      setSelected(false)
    }

  }
  return (
    <div className={styles.container} onClick={handleClick}>
      <img className={styles.heartimage} src={selected? fullheart : heart} alt="like" />
      <span>좋아요 {like}</span>
    </div>
  );
}

