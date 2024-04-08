import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateSetting } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("The setting was successfully edited.");

      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating: isLoading, updateSetting: mutate };
}
