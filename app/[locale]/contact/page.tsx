'use client';

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const ContactFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const t = useTranslations();
  const locale = useLocale();
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      fullName: "",
      
      email: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  async function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    console.log('📝 Contact form submitted:', values);
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.fullName,
          email: values.email,
          message: values.message,
          locale
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('✅ Email sent successfully:', result);
        setSubmitStatus('success');
        form.reset(); // Clear form after successful submission
      } else {
        console.error('❌ Error sending email:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('❌ Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-gradient-to-b from-amber-50 via-background to-background py-32 lg:mx-4 dark:from-amber-950">
      <div className="container max-w-2xl mx-auto text-center">
        <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl">
          {t('contact.pageTitle')}
        </h1>
        <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
          {t('contact.pageSubtitle')}
        </p>
        
        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          <div>
            <h2 className="font-semibold">{t('contact.offices.istanbul')}</h2>
            <p className="mt-3 text-muted-foreground">
              Online<br />
            </p>
          </div>
          
          <div>
            <h2 className="font-semibold">{t('contact.offices.berlin')}</h2>
            <p className="mt-3 text-muted-foreground">
              Brückstraße 59, 
              26725 Emden<br />
              Germany
            </p>
          </div>
          
          <div>
            <h2 className="font-semibold">{t('contact.sections.email')}</h2>
            <div className="mt-3">
              <div>
                <a 
                  href="mailto:info@zovpersonal.com" 
                  className="text-muted-foreground hover:text-foreground"
                >
                  info@zovpersonal.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-semibold">{t('contact.sections.follow')}</h2>
            <div className="mt-3 flex gap-6 lg:gap-10 justify-center">
              <a 
                href={t('footer.social.instagram.url')} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
             
              <a 
                href={t('footer.social.facebook.url')} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Facebook className="size-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative text-muted-foreground h-px w-full my-12">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
        </div>
        
        <div className="mx-auto text-center">
          <h2 className="text-lg font-semibold">{t('contact.sections.inquiries')}</h2>
          
          <Form {...form}>
            <form className="mt-8 space-y-5 text-left" onSubmit={form.handleSubmit(onSubmit)}>
              {/* Full Name Field */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.form.fullName')}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t('contact.form.placeholders.fullName')}
                        {...field}
                        className="h-12 bg-[#f8f9fa] border-none rounded-[15px] text-[rgb(28,39,6)] font-medium placeholder:text-[rgb(28,39,6)]/50 focus:ring-2 focus:ring-[rgb(28,39,6)]/20 transition-all duration-200"
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
                    <FormLabel>{t('contact.form.email')}</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={t('contact.form.placeholders.email')}
                        {...field}
                        className="h-12 bg-[#f8f9fa] border-none rounded-[15px] text-[rgb(28,39,6)] font-medium placeholder:text-[rgb(28,39,6)]/50 focus:ring-2 focus:ring-[rgb(28,39,6)]/20 transition-all duration-200"
                      />
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
                    <FormLabel>{t('contact.form.message')}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t('contact.form.placeholders.message')}
                        {...field}
                        className="min-h-[120px] bg-[#f8f9fa] border-none rounded-[15px] text-[rgb(28,39,6)] font-medium placeholder:text-[rgb(28,39,6)]/50 focus:ring-2 focus:ring-[rgb(28,39,6)]/20 transition-all duration-200 resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-[rgb(28,39,6)] hover:bg-[rgb(28,39,6)]/90 disabled:bg-[rgb(28,39,6)]/50 disabled:cursor-not-allowed text-white rounded-[60px] font-medium text-base transition-all duration-200 hover:scale-[1.02] disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {t('contact.sending') || 'Sending...'}
                  </div>
                ) : (
                  t('contact.form.submit')
                )}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="w-full p-4 bg-green-100 border border-green-300 rounded-[15px] text-green-700 text-center font-medium">
                  ✅ {t('contact.successMessage') || 'Message sent successfully! We will get back to you soon.'}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="w-full p-4 bg-red-100 border border-red-300 rounded-[15px] text-red-700 text-center font-medium">
                  ❌ {t('contact.errorMessage') || 'An error occurred while sending the message. Please try again.'}
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
