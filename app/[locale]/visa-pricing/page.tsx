import { getTranslations } from "next-intl/server";
import { ArrowRight, CheckCircle2, Star, Shield, Clock, Users } from "lucide-react";

export default async function VisaPricingPage() {
  const t = await getTranslations();

  const pricingPlans = [
    {
      name: "Essential",
      price: "€299",
      description: "Perfect for straightforward applications",
      popular: false,
      features: [
        "Initial consultation (1 hour)",
        "Document checklist",
        "Basic application review",
        "Email support",
        "Application submission guidance",
        "1 revision included"
      ]
    },
    {
      name: "Professional",
      price: "€599", 
      description: "Comprehensive support for most applicants",
      popular: true,
      features: [
        "Extended consultation (2 hours)",
        "Complete document preparation",
        "Application form completion",
        "Priority email & phone support",
        "Document authentication assistance",
        "Application submission service",
        "3 revisions included",
        "Interview preparation (if needed)"
      ]
    },
    {
      name: "Premium",
      price: "€999",
      description: "Full-service support for complex cases",
      popular: false,
      features: [
        "Unlimited consultations",
        "Complete document management",
        "Personal case manager",
        "24/7 priority support", 
        "Translation services included",
        "Legal review included",
        "Unlimited revisions",
        "Interview coaching",
        "Post-approval support",
        "Express processing (where available)"
      ]
    }
  ];

  const additionalServices = [
    {
      service: "Document Translation",
      price: "€25-50",
      unit: "per document",
      description: "Certified translation by qualified translators"
    },
    {
      service: "Document Authentication", 
      price: "€75-150",
      unit: "per document",
      description: "Apostille and consular authentication services"
    },
    {
      service: "Express Review",
      price: "€200",
      unit: "one-time",
      description: "48-hour document and application review"
    },
    {
      service: "Interview Coaching",
      price: "€150",
      unit: "per session",
      description: "1-on-1 visa interview preparation"
    },
    {
      service: "Appeal Assistance",
      price: "€500",
      unit: "per case",
      description: "Professional assistance with visa appeal process"
    }
  ];

  const faqs = [
    {
      question: "What's included in the consultation?",
      answer: "Our consultation includes eligibility assessment, document review, timeline planning, and personalized strategy development for your specific case."
    },
    {
      question: "Do you guarantee visa approval?",
      answer: "While we cannot guarantee approval (as the final decision rests with immigration authorities), our expert guidance significantly improves your chances of success."
    },
    {
      question: "What if my application is rejected?",
      answer: "We provide detailed analysis of rejection reasons and offer appeal assistance or guidance for reapplication at discounted rates."
    },
    {
      question: "Are government fees included?",
      answer: "No, our prices cover consultation and preparation services only. Government visa fees, translation, and authentication costs are additional."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Visa Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for all your visa application needs. 
              Choose the plan that best fits your requirements and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600">
              Professional visa consulting services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 border-2 hover:shadow-lg transition-all duration-300 ${
                plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-full font-semibold transition-colors duration-300 ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Optional services to complement your visa application package
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.service}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {service.price}
                  <span className="text-sm text-gray-500 font-normal"> {service.unit}</span>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Visa Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Schedule a free consultation to discuss your specific needs and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/additional-services" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-colors duration-300"
            >
              Explore Additional Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
