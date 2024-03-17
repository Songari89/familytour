import React, { useEffect, useState } from "react";
import usePlace from "./usePlace";
import useLike from "./useLike";

export default function useSortedPlaceItem(category) {
  const [sortedList, setSortedList] = useState([]);
  const {
    placeQuery: {data: placeItems },
  } = usePlace({category});
  const { likeQuery } = useLike({
    placeIds: placeItems? placeItems.map((place) => place.id) : [],
  });

  useEffect(() => {
    if (likeQuery.data) {
      const sorted = placeItems.sort((a, b) => {
        const likeA = likeQuery.data.filter(
          (like) => like.placeId === a.id
        ).length;
        console.log(likeA)
        const likeB = likeQuery.data.filter(
          (like) => like.placeId === b.id
        ).length;
        return likeB - likeA;
      });
      setSortedList(sorted);
    }
  }, [placeItems, likeQuery.data]);

  console.log(sortedList);
  return { sortedList };
}
