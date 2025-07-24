import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$2,999",
      period: "per event",
      icon: Check,
      description: "Perfect for intimate gatherings and small celebrations",
      features: [
        "Up to 50 guests",
        "Basic lighting setup",
        "Sound system included",
        "Event coordination",
        "4-hour event duration",
        "Email support"
      ],
      popular: false,
      glowColor: "border-glow"
    },
    {
      name: "Standard",
      price: "$5,999",
      period: "per event",
      icon: Star,
      description: "Ideal for medium-sized events with enhanced features",
      features: [
        "Up to 150 guests",
        "Advanced lighting design",
        "Professional sound system",
        "Dedicated event planner",
        "8-hour event duration",
        "Photography coordination",
        "Custom decorations",
        "24/7 support"
      ],
      popular: true,
      glowColor: "border-glow-secondary"
    },
    {
      name: "Premium",
      price: "$12,999",
      period: "per event",
      icon: Zap,
      description: "Ultimate experience for large-scale luxury events",
      features: [
        "Unlimited guests",
        "Full neon lighting spectacle",
        "Concert-grade sound system",
        "Senior event management team",
        "Full-day event coverage",
        "Professional photography/videography",
        "Complete venue transformation",
        "VIP concierge service",
        "Live streaming setup",
        "Post-event content delivery"
      ],
      popular: false,
      glowColor: "border-glow"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-primary">
            Choose Your <span className="text-primary">Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing options designed to bring your event vision to life, no matter the scale
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 ${plan.glowColor} ${
                plan.popular 
                  ? 'transform scale-105 glow-secondary' 
                  : 'card-neon'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <plan.icon className={`w-12 h-12 mx-auto mb-4 ${plan.popular ? 'text-secondary' : 'text-primary'}`} />
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-secondary' : 'text-primary'}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-secondary' : 'text-primary'}`} />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-secondary text-secondary-foreground hover-glow'
                    : 'bg-primary text-primary-foreground hover-glow'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;