import React, { useState } from 'react';
import { Modal } from './components/Modal';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RegistrationForm } from './components/RegistrationForm';
import { RegistrationTable } from './components/RegistrationTable';
import { ClipboardList, CheckCircle2, Clock, Zap, Users, Play, ChevronLeft, ChevronRight } from 'lucide-react';

interface Registration {
  name: string;
  email: string;
  phone: string;
  company: string;
  timestamp: string;
}

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleSubmit = (formData: Omit<Registration, 'timestamp'>) => {
    const newRegistration = {
      ...formData,
      timestamp: new Date().toLocaleString(),
    };
    setRegistrations(prev => [...prev, newRegistration]);
    setIsFormOpen(false);
    setIsThankYouOpen(true);
  };

  const features = [
    {
      icon: <CheckCircle2 className="feature-icon" />,
      title: "Task Management",
      description: "Efficiently organize and prioritize your daily tasks with our intuitive interface"
    },
    {
      icon: <Clock className="feature-icon" />,
      title: "Time Tracking",
      description: "Monitor your productivity and track time spent on different activities"
    },
    {
      icon: <Zap className="feature-icon" />,
      title: "Efficiency Boost",
      description: "Streamline your workflow and boost productivity with smart automation"
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team members and share progress in real-time"
    }
  ];

  const testimonials = [
    {
      content: "After implementing this todo app, our team's productivity increased by 35% in just two months. The collaborative features and real-time updates have transformed how we manage projects. The customizable workflows are exactly what we needed for our complex tasks.",
      author: "Jennifer Martinez",
      role: "Director of Operations",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400"
    },
    {
      content: "As a startup founder, staying organized is crucial. This platform helped me reduce meeting times by 40% and improved team coordination significantly. The intuitive interface and powerful automation features make it stand out from every other solution we've tried.",
      author: "David Chen",
      role: "CEO & Founder",
      company: "InnovateX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400"
    },
    {
      content: "Managing a remote team of 50+ developers became effortless with this tool. We've seen a 60% reduction in task handover time and improved project visibility. The API integration capabilities have allowed us to create a seamless workflow with our existing tools.",
      author: "Sarah Thompson",
      role: "Engineering Director",
      company: "Global Tech Innovations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-[#F8F9FF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-16 md:py-24">
            {/* Main Content */}
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-[40px] md:text-[56px] font-bold text-[#1E1B39] leading-tight">
                Simplify Your Life with Our
                <span className="block">Todo App</span>
              </h1>
              <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
                Stay organized and boost your productivity with our intuitive todo website.
                Experience a modern approach to task management that fits your lifestyle.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="px-8 py-3 bg-[#FF4B6E] text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
                >
                  Get started
                </button>
                <button className="px-8 py-3 text-[#1E1B39] bg-white rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-all">
                  Learn more
                </button>
              </div>
            </div>

            {/* Hero Cards */}
            <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Left Card */}
              <div className="hero-card">
                <div className="space-y-4">
                  <h2 className="hero-text">
                    Organize.
                    <br />
                    Achieve.
                    <br />
                    Relax.
                  </h2>
                  <p className="text-white/90 text-lg">
                    Turn clutter into clarity, chaos into control, and dreams into done.
                    Bold visions into market success
                  </p>
                  <div className="flex gap-4 mt-8">
                    <button className="px-6 py-2 bg-white text-[#FF4B6E] rounded-full font-medium hover:bg-opacity-90 transition-all">
                      Get Started Today
                    </button>
                    <button className="px-6 py-2 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all">
                      Discover Features
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div className="relative aspect-[9/16] bg-gray-100 rounded-[32px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="Your Tasks"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h3 className="text-2xl font-bold">Your Tasks.</h3>
                      <h3 className="text-2xl font-bold">Our Tools.</h3>
                    </div>
                    <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                      <Play className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="social-proof-bar">
              <img src="/google.svg" alt="Google" className="social-proof-logo" />
              <img src="/facebook.svg" alt="Facebook" className="social-proof-logo" />
              <img src="/youtube.svg" alt="YouTube" className="social-proof-logo" />
              <img src="/pinterest.svg" alt="Pinterest" className="social-proof-logo" />
              <img src="/twitch.svg" alt="Twitch" className="social-proof-logo" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Transform Your Productivity with Our Innovative To-Do List Features
            </h2>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={index} className="relative">
                  <div className="space-y-6">
                    <div className="flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-medium text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See how leading companies are transforming their productivity
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Testimonial Content */}
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-between relative">
                  <div>
                    <div className="h-1 w-12 bg-[#FF4B6E] mb-8"></div>
                    <blockquote className="text-xl text-gray-800 leading-relaxed mb-8">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    <div className="flex items-center">
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonials[currentTestimonial].author}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonials[currentTestimonial].role}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonials[currentTestimonial].company}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mt-8">
                    <button 
                      onClick={previousTestimonial}
                      className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="md:col-span-2 relative">
                  <div className="absolute inset-0 bg-[#FF4B6E] transform -skew-x-6"></div>
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].author}
                    className="relative h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#FF4B6E]">
            <div className="relative z-10 px-8 py-16 sm:px-16 md:py-20 lg:py-24">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Start Organizing Your Life Today
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
                  Join thousands of satisfied users who have transformed their productivity with our intuitive platform.
                </p>
                <div className="mt-10 flex items-center justify-center gap-6">
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="rounded-full bg-white px-8 py-3 text-base font-semibold text-[#FF4B6E] shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get Started
                  </button>
                  <button className="text-base font-semibold leading-7 text-white hover:text-white/90">
                    Learn more <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="Register Now"
      >
        <RegistrationForm
          onSubmit={handleSubmit}
          onClose={() => setIsFormOpen(false)}
        />
      </Modal>

      {/* Thank You Modal */}
      <Modal
        isOpen={isThankYouOpen}
        onClose={() => setIsThankYouOpen(false)}
        title="Thank You!"
      >
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-lg text-gray-700">
            Thank you for your interest! We'll get back to you soon.
          </p>
          <button
            onClick={() => setIsThankYouOpen(false)}
            className="mt-6 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white hero-gradient hover:opacity-90 sm:w-auto"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Registrations Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RegistrationTable registrations={registrations} />
      </div>

      <Footer />
    </div>
  );
}

export default App;