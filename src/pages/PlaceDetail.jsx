import React from 'react';
import Loading from "../components/Loading";
import Error from "../components/Error";
import PlaceItem from "../components/PlaceItem";
import styles from './PlaceDetail.module.css'
import usePlace from "../hooks/usePlace";


export default function PlaceDetail({category}) {
const { placeQuery:{
  isLoading,
  error,
  data: lists,}
} = usePlace({category})


if (isLoading) {
  return <Loading />;
}
if (error) {
  return <Error />;
}

return (
  <>
    <ul className={styles.lists}>
      {lists &&
        lists.map((list) => (
          <li key={list.id} className={styles.list}>
            <PlaceItem list={list}/>
          </li>
        ))}
    </ul>
  </>
);
}

