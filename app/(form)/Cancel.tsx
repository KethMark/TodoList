import React from "react";
import { Button } from "@/components/ui/button";
import { Delete } from "@/lib/action";
import { Input } from "@/components/ui/input";
import { Toaster, toast } from "sonner";
import { SubmitButtonCancel } from "./button";

type Deletes = {
  data: Message;
};

export const Cancel = ({ data }: Deletes) => {
  async function DeleteToast(formdata: FormData) {
    const result = await Delete(formdata);
    if (result?.error) {
      toast.error("Their's something wrong");
    } else {
      toast.success("Message Remove");
    }
  }

  <Toaster richColors position="top-center" />;
  return (
    <form action={DeleteToast}>
      <Input name="id" type="hidden" value={data.id} />
      <SubmitButtonCancel />
    </form>
  );
};
