import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { addNewPhoto, getPhoto, removePhoto } from "../apis/firebase";

export default function usePhoto(date) {
  const queryClient = useQueryClient();
  const photoQuery = useQuery({
    queryKey: ["photos", date || ""],
    queryFn: () => getPhoto(date),
    enabled: !!date,
  });

 

  const addPhoto = useMutation({
    mutationFn: ({ photo, id, imageUrl }) =>
      addNewPhoto({ photo, id, imageUrl }),
    onSuccess: () => queryClient.invalidateQueries(["photos"]),
  });

  const removeItem = useMutation({
    mutationFn: ({ photo }) => removePhoto({ photo }),
    onSuccess: () => queryClient.invalidateQueries(["photos"]),
  });

  return { photoQuery, addPhoto, removeItem };
}
