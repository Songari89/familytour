
import {useQueryClient,  useMutation} from '@tanstack/react-query'
import { updateList } from "../apis/firebase";

export default function usePlace() {
  const queryClient = useQueryClient

  const updateItem = useMutation({
    mutationFn: (list) => updateList(list)
    ,
    onSuccess: () => queryClient.invalidateQueries(["lists"]),
  });

  return {updateItem}
}

