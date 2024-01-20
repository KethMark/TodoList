
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { useFormContext } from "react-hook-form";

export function SubmitButton() {
  const {formState: { isSubmitting} } = useFormContext()

  return <Button type="submit" disabled={isSubmitting} className="w-full">
         Submit
      </Button> 
}

export function SubmitButtonCancel(){
  const { pending } = useFormStatus();

  return <Button variant={'destructive'} type="submit" disabled={pending} className="w-full">
        Delete
    </Button>
}

export function SubmitButtonUpdate(){
  const {formState: { isSubmitting} } = useFormContext()

  return <Button type="submit" disabled={isSubmitting} className="w-full">
        Update
    </Button>
}
