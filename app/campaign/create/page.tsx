"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Select } from "@radix-ui/react-select";
import { useEffect, useState } from "react";
import { makeCampaignActor } from "@/service";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Campaign title must be filled.",
  }),
  description: z.string().min(2, {
    message: "Campaign description must be filled.",
  }),
  type: z.string({
    message: "Campaign type must be selected",
  }),
  imageUrl: z.string({
    message: "Campaign url must be filled.",
  }),
});

export default function Page() {
  const [actor, setActor] = useState<any>(null);

  useEffect(() => {
    const initActor = async () => {
      const campaignActor = makeCampaignActor();
      setActor(campaignActor);
    };
    initActor();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await actor.createCampaign(values.title, values.description, 4);
  }

  return (
    <div className="container mx-auto py-24 px-4 md:px-8 lg:px-12">
      <div className="flex flex-col gap-10 mb-5">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Create</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-3xl font-regular text-left">
              Launch Your Campaign with Ease
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-neutral-500  text-left dark:text-neutral-400">
              Start today and bring your vision to life!
            </p>
          </div>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign Title</FormLabel>
                <FormControl>
                  <Input placeholder="ex: involve for green tech" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about your campaign"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Url</FormLabel>
                <FormControl>
                  <FormControl>
                    <Input placeholder="Input Campaign Url" {...field} />
                  </FormControl>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select campaign type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="variant {Individual}">
                      Individual
                    </SelectItem>
                    <SelectItem value="variant {Fundraiser}">
                      Fundraiser
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
