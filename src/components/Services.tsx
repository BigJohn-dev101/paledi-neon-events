import { Heart, Building2, Gift, Music, Users, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Weddings",
      description: "Magical wedding experiences with romantic lighting and unforgettable moments",
      color: "text-secondary"
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Professional business events that impress clients and inspire teams",
      color: "text-primary"
    },
    {
      icon: Gift,
      title: "Birthday Parties",
      description: "Vibrant celebrations that make every birthday special and memorable",
      color: "text-neon-pink"
    },
    {
      icon: Music,
      title: "Concerts & Shows",
      description: "Spectacular live entertainment with professional stage and sound setup",
      color: "text-neon-blue"
    },
    {
      icon: Users,
      title: "Social Gatherings",
      description: "Intimate gatherings and social events with perfect ambiance",
      color: "text-primary"
    },
    {
      icon: Sparkles,
      title: "Special Occasions",
      description: "Custom events tailored to your unique vision and requirements",
      color: "text-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-primary">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring your vision to life with style and precision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-neon p-8 rounded-xl text-center group"
            >
              <div className="mb-6">
                <service.icon className={`w-16 h-16 mx-auto ${service.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;