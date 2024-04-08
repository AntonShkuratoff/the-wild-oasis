import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin was successfully deleted.");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting: isLoading, deleteCabin: mutate };
}
