import React from 'react';
import styles from './PhotoDetail.module.css'
import { useQuery } from "@tanstack/react-query";
import { getPhoto } from "../apis/firebase";
import PhotoItem from "../components/PhotoItem";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function PhotoDetail({date}) {
  const {isLoading, error, data:photos} = useQuery({
    queryKey:['photos',date],
    queryFn: () => getPhoto(date),
    enabled: !!date,
  })

  if(isLoading){return <Loading/>}
  if (error) {
    return <Error/>;
  }

  return (
    
    <ul className={styles.lists}>
      {photos && 
      photos.map(photo => <li key={photo.id}> </li>)}
    </ul>
  );
}

