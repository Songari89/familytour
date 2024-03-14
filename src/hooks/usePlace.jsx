import React from 'react';
import {useQueryClient, useQuery} from '@tanstack/react-query'
import { getList } from "../apis/firebase";

export default function usePlace({category}) {
  const queryClient = useQueryClient
  const placeQuery = useQuery({
    queryKey: ["list", category],
    queryFn: () => getList(category),
    enabled: !!category,
  });



  return {placeQuery}
}

