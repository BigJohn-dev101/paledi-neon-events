import weddingEvent from '@/assets/wedding-event.jpg';
import corporateEvent from '@/assets/corporate-event.jpg';
import birthdayEvent from '@/assets/birthday-event.jpg';
import concertEvent from '@/assets/concert-event.jpg';

const Portfolio = () => {
  const projects = [
    {
      image: weddingEvent,
      title: "Elegant Garden Wedding",
      category: "Wedding",
      description: "A romantic outdoor ceremony with fairy lights and natural beauty"
    },
    {
      image: corporateEvent,
      title: "Tech Conference 2024",
      category: "Corporate",
      description: "Modern corporate event with cutting-edge presentation technology"
    },
    {
      image: birthdayEvent,
      title: "Milestone Birthday Bash",
      category: "Birthday",
      description: "Vibrant celebration with custom theming and entertainment"
    },
    {
      image: concertEvent,
      title: "Live Music Concert",
      category: "Entertainment",
      description: "Professional concert setup with world-class audio and lighting"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-primary">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our recent work and see how we transform visions into unforgettable experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-neon rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;