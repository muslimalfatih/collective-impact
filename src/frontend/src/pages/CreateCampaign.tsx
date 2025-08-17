import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const formSchema = z.object({
  title: z.string(),
  campaignDescription: z.string(),
  goal: z.number(),
  cover: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
});

const CreateCampaign = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      campaignDescription: "",
      goal: 0,
      cover: "",
      category: "",
      tags: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <React.Fragment>
      <section
        aria-labelledby="Hero Create Campaign"
        className="mx-auto bg-[#012D19]"
      >
        <div className="pt-24 w-full mx-auto container p-4 flex flex-col justify-center">
          <h1 className="scroll-m-20 text-white text-4xl font-extrabold tracking-tight text-balance">
            Let’s begin your fundraising journey
          </h1>
          <p className="text-white mt-2 leading-7 [&:not(:first-child)]:mt-6 max-w-3xl">
            Create a campaign to raise funds for a cause you care about. fill
            information about your campaign and share it with your friends and
            family.
          </p>

          <div className="mt-4 inline-flex gap-4 items-center"></div>
        </div>
      </section>
      <section aria-labelledby="From" className="mx-auto container my-4 p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campaign Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Campaign Title." {...field} />
                  </FormControl>
                  <FormDescription>
                    Input your campaign title : ex : Help Plant 1 Milion Tree.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="campaignDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campaign Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Campaign description." />
                  </FormControl>
                  <FormDescription>
                    Input your campaign description.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cover"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campaign Cover</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Campaign Title."
                      type="file"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Add your campaign cover image.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AspectRatio ratio={16 / 9}>
              <img src="/" alt="Image" className="rounded-md object-cover" />
            </AspectRatio>
            <button
              type="submit"
              className="bg-[#274A34] px-3 py-2 min-w-32 text-white rounded-lg"
            >
              Submit
            </button>
          </form>
        </Form>
      </section>
    </React.Fragment>
  );
};

export default CreateCampaign;
