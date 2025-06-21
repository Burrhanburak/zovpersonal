'use client';

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Twitter, Linkedin } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    employees: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormData({ fullName: '', email: '', company: '', employees: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              Levent Mahallesi<br />
              Büyükdere Caddesi No:123<br />
              Istanbul, Turkey
            </p>
          </div>
          
          <div>
            <h2 className="font-semibold">{t('contact.offices.berlin')}</h2>
            <p className="mt-3 text-muted-foreground">
              Unter den Linden 77<br />
              10117 Berlin<br />
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
                href={t('footer.social.twitter.url')} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="size-5" />
              </a>
              <a 
                href={t('footer.social.linkedin.url')} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative text-muted-foreground h-px w-full my-12">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
        </div>
        
        <div className="mx-auto text-center">
          <h2 className="text-lg font-semibold">{t('contact.sections.inquiries')}</h2>
          <form className="mt-8 space-y-5 text-left" onSubmit={handleSubmit}>
            <div className="space-y-2 text-center">
              <Label htmlFor="fullName" className="block text-left">{t('contact.form.fullName')}</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t('contact.form.placeholders.fullName')}
                required
              />
            </div>
            
            <div className="space-y-2 text-center">
              <Label htmlFor="email" className="block text-left">{t('contact.form.email')}</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.form.placeholders.email')}
                required
              />
            </div>
            
           
           
            
            <div className="space-y-2 text-center">
              <Label htmlFor="message" className="block text-left">{t('contact.form.message')}</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.placeholders.message')}
                className="min-h-[120px] resize-none"
                required
              />
            </div>
            
            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="h-10 rounded-md px-6"
              >
                {isSubmitting ? `${t('contact.form.submit')}...` : t('contact.form.submit')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
