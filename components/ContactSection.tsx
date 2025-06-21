'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ChevronDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  date: z.date().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactSection() {
  const t = useTranslations('contact');
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      date: undefined,
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <section 
      className="bg-white flex items-center justify-center relative overflow-visible py-[100px] px-[30px] md:py-20 md:px-7.5 w-full"
      id="contact-section"
    >
      <div className="flex flex-col items-center justify-center gap-[20px] max-w-[1200px] w-full overflow-hidden">
        <main className="flex flex-col lg:flex-row items-center justify-between gap-[20px] w-full">
          {/* Left Side - Form */}
          <div className="flex flex-col items-start justify-start gap-10 max-w-[430px] w-full lg:flex-1">
            {/* Title */}
            <div className="flex flex-col items-start justify-start gap-5 w-full">
              <h2 className="text-left text-[rgb(28,39,6)] text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight font-satoshi-bold">
                {t('title')}
              </h2>
              <p className="text-left text-[rgb(28,39,6)] opacity-70 text-base md:text-lg leading-relaxed font-satoshi-medium">
                {t('subtitle')}
              </p>
            </div>

            {/* Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={t('namePlaceholder')}
                          {...field}
                          className="h-14 bg-[#f8f9fa] border-none rounded-[15px] text-[rgb(28,39,6)] font-satoshi-medium placeholder:text-[rgb(28,39,6)]/50 focus:ring-2 focus:ring-[rgb(28,39,6)]/20 transition-all duration-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t('emailPlaceholder')}
                          {...field}
                          className="h-14 bg-[#f8f9fa] border-none rounded-[15px] text-[rgb(28,39,6)] font-satoshi-medium placeholder:text-[rgb(28,39,6)]/50 focus:ring-2 focus:ring-[rgb(28,39,6)]/20 transition-all duration-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Date Field */}
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex flex-col gap-3">
                          <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="h-14 bg-[#f8f9fa] border-none rounded-[15px] text-[rgb(28,39,6)] font-satoshi-medium justify-between hover:bg-[#f0f1f2] focus:ring-2 focus:ring-[rgb(28,39,6)]/20 transition-all duration-200"
                              >
                                {field.value ? field.value.toLocaleDateString() : t('datePlaceholder')}
                                <ChevronDownIcon className="h-4 w-4 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                captionLayout="dropdown"
                                onSelect={(date) => {
                                  field.onChange(date);
                                  setDatePickerOpen(false);
                                }}
                                disabled={(date) => date < new Date()}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder={t('messagePlaceholder')}
                          {...field}
                          className="min-h-[120px] bg-[#f8f9fa] border-none rounded-[15px] text-[rgb(28,39,6)] font-satoshi-medium placeholder:text-[rgb(28,39,6)]/50 focus:ring-2 focus:ring-[rgb(28,39,6)]/20 transition-all duration-200 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-14 bg-[rgb(28,39,6)] hover:bg-[rgb(28,39,6)]/90 text-white rounded-[60px] font-satoshi-medium text-base transition-all duration-200 hover:scale-[1.02]"
                >
                  {t('submitButton')}
                </Button>
              </form>
            </Form>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 max-w-[555px] w-full h-[400px] lg:h-[600px] relative rounded-[20px] overflow-hidden">
            <Image
              src="/contacti.png"
              alt={t('imageAlt')}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 555px"
            />
          </div>
        </main>
      </div>
    </section>
  );
}
