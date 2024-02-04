"use client";
import { Input } from "@/components/ui/input";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/formschema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Create } from "@/lib/action";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export const Forms = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    startTransition( async () => {
      const result = await Create(data);
      if (result.error) {
        toast.error("Their's something wrong");
      } else {
        toast.success("Task Added");
        form.reset();
      }
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Task" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isPending}
            className="w-full"
          >
            {isPending ? (
              <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
            ) : (
              null
            )}
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};
