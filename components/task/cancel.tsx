import React, { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Delete } from "@/lib/action";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { TrashIcon } from "@radix-ui/react-icons";
import { Loader2 } from "lucide-react";

type Deletes = {
  data: Message;
};

export const Cancel = ({ data }: Deletes) => {
  const [isPending, startTransition] = useTransition();

  function DeleteToast(data: FormData) {
    startTransition(async () => {
      const result = await Delete(data);
      if (result?.error) {
        toast.error("Their's something wrong");
      } else {
        toast.success("Task Remove");
      }
    });
  }

  return (
    <form action={DeleteToast}>
      <Input name="id" type="hidden" value={data.id} />
      {data.isCompleted? (
        <Button disabled={isPending} variant='destructive'>
          {isPending ? <Loader2 className='h-4 w-4 animate-spin'/> : <TrashIcon />}
        </Button>
      ): (
        null
      )}
    </form>
  );
};
