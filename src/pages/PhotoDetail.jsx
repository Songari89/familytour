import React from 'react';
import styles from './PhotoDetail.module.css'
import { useQuery } from "@tanstack/react-query";
import {useLocation} from 'react-router-dom'
import { getPhoto } from "../apis/firebase";
import PhotoItem from "../components/PhotoItem";

export default function PhotoDetail() {
  const location = useLocation();
  const date = location.state?.date
  const {isLoading, error, data:photos} = useQuery({
    queryKey:['photos',date],
    queryFn: () => getPhoto(date),
    enabled: !!date,
  })

  return (
    
    <ul>
    
      {photos && 
      photos.map(photo => <li key={photo.id}><PhotoItem photo={photo}/> </li>)}
    </ul>
  );
}

