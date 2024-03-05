import React from 'react';
import {useQuery} from '@tanstack/react-query'
import Loading from "../components/Loading";
import Error from "../components/Error";
import { getList } from "../apis/firebase";
import PlaceItem from "../components/PlaceItem";
import styles from './PlaceDetail.module.css'

export default function PlaceDetail({category}) {

const {
  isLoading,
  error,
  data: lists,
} = useQuery({
  queryKey: ["list", category],
  queryFn: () => getList(category),
  enabled: !!category,
});

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

