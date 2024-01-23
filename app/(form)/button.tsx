
import { Button } from "@/components/ui/button";
import { ReloadIcon, TrashIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";

export function SubmitButtonCancel() {
  const { pending } = useFormStatus();

  return <Button variant={'destructive'} type="submit" disabled={pending} className="w-full">
        {pending? <ReloadIcon className="animate-spin"/> : <TrashIcon/>}
    </Button>
}
