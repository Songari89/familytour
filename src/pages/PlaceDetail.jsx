import React from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import PlaceItem from "../components/PlaceItem";
import styles from "./PlaceDetail.module.css";
import {useQuery} from '@tanstack/react-query'
import { getList } from "../apis/firebase";

export default function PlaceDetail({ category }) {
    const {isLoading, error, data:lists} = useQuery({
      queryKey: ["lists", category],
      queryFn: () => getList(category),
      enabled: !!category,
    });
  



  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const sortedLists = lists?.sort((a, b) => b.like - a.like);

  return (
    <>
      <ul className={styles.lists}>
        {sortedLists &&
          sortedLists.map((list) => (
            <li key={list.id} className={styles.list}>
              <PlaceItem list={list} />
            </li>
          ))}
      </ul>
    </>
  );
}
