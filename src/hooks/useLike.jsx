
import {useQueryClient, useQuery, useMutation} from '@tanstack/react-query'
import { addLike, getLike, removeLike } from "../apis/firebase";

export default function useLike({placeId, id}) {
    const queryClient = useQueryClient();
    const likeQuery = useQuery({
      queryKey: ["likes", placeId || ""],
      queryFn: () => getLike({ placeId }),
    });
    const addItem = useMutation({
      mutationFn: ({ id, placeId }) => addLike({ id, placeId }),
      onSuccess: () => queryClient.invalidateQueries(["likes", placeId]),
    });
    const removeItem = useMutation({
      mutationFn: ({ id, placeId }) => removeLike({ id, placeId }),
      onSuccess: () => queryClient.invalidateQueries(["likes", placeId]),
    });
  return {likeQuery, addItem, removeItem};
}
