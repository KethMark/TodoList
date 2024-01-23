"use client";
import { Input } from "@/components/ui/input";
import React, { useRef } from "react";
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
import { Toaster, toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { PaperPlaneIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export const Forms = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const result = await Create(data);
    if (result.error) {
      toast.error("Their's something wrong");
    } else {
      toast.success("Message Added");
      form.reset();
    }
  }

  return (
    <>
      <Toaster richColors position="top-center" />
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
                  <Textarea placeholder="Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
            {form.formState.isSubmitting ? (
              <ReloadIcon className="animate-spin" />
            ) : (
              <PaperPlaneIcon className="animate-out" />
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};
