import React from 'react';
import { Link } from 'react-router-dom';
import { TypewriterEffect } from '../components/TypewriterEffect';
import { PhotoSlideshow } from '../components/PhotoSlideshow';
import { 
  Shield, 
  Server, 
  Settings, 
  Award, 
  ExternalLink, 
  Mail, 
  GraduationCap,
  MapPin,
  Calendar,
  ChevronRight,
  Download,
  Eye,
  Linkedin
} from 'lucide-react';

export const Portfolio: React.FC = () => {
  const professionalTitles = [
    "Network Professional",
    "AI Enthusiastic", 
    "Red-Team Analyst",
    "Data Science Engineer",
    "Fullstack Developer",
    "DevOps Professional",
    "Cloud Architect"
  ];

  const profilePhotos = [
    "/profile-photo-1.jpg",
    "/profile-photo-2.jpg"
  ];

  const handleLinkedInContact = () => {
    window.open('https://www.linkedin.com/in/yell-yint-myat-thu-7b01951b4/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 text-yellow-400 animate-pulse">
            <Shield size={40} />
          </div>
          <div className="absolute top-40 right-32 text-amber-400 animate-bounce">
            <Server size={36} />
          </div>
          <div className="absolute bottom-32 left-32 text-yellow-500 animate-pulse">
            <Settings size={32} />
          </div>
          <div className="absolute bottom-20 right-20 text-gold-500 animate-bounce">
            <Award size={38} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-300">
                  Hello, It's Me
                </h1>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                    Ye' Yint Myat Thu
                  </span>
                </h1>
              </div>
              
              <div className="text-2xl lg:text-3xl font-semibold text-gray-300 min-h-[4rem] flex items-center">
                <span className="mr-4">And I'm</span>
                <TypewriterEffect 
                  words={professionalTitles}
                  className="text-yellow-400 font-bold"
                />
              </div>
            </div>

            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              Specialized in network security architecture, infrastructure management, and IT operations 
              with a proven track record of implementing resilient security solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">70+</div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">10+</div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">Expertise Areas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">3+</div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">Years Experience</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleLinkedInContact}
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-600 to-amber-600 
                           hover:from-yellow-700 hover:to-amber-700 text-black px-8 py-4 rounded-xl 
                           font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Linkedin size={20} />
                LinkedIn
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <Link 
                to="/certifications"
                className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm 
                           hover:bg-yellow-600/20 text-white px-8 py-4 rounded-xl font-semibold 
                           transition-all duration-300 transform hover:scale-105 border border-yellow-500/30 hover:border-yellow-400"
              >
                <Eye size={20} />
                View Certifications
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Content - Professional Photo Slideshow */}
          <div className="relative">
            <div className="relative">
              {/* Photo Slideshow */}
              <div className="relative w-96 h-96 mx-auto">
                <PhotoSlideshow 
                  photos={profilePhotos}
                  className="w-full h-full border-2 border-yellow-500/20 shadow-2xl"
                  autoSlide={true}
                  interval={4000}
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-500 to-amber-500 
                                text-black p-4 rounded-xl shadow-lg animate-float">
                  <Shield size={24} />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-500 to-yellow-600 
                                text-black p-4 rounded-xl shadow-lg animate-float" 
                     style={{ animationDelay: '1s' }}>
                  <Server size={24} />
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-amber-600/20 
                              rounded-2xl blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 px-6 bg-gray-900/50 backdrop-blur-sm border-t border-yellow-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Areas of <span className="text-yellow-400">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Well-proficient and experienced professional in Network Engineering and Cybersecurity 
              fields with expertise in designing, implementing, and maintaining secure network infrastructures.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Network & Cybersecurity */}
            <div className="group bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm 
                            border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-400/50 
                            transition-all duration-300 transform hover:scale-105 hover:bg-yellow-500/5">
              <div className="text-yellow-400 mb-6 group-hover:text-yellow-300 transition-colors">
                <Shield size={48} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Network & Cybersecurity</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Penetration testing, ethical hacking, IDS/IPS systems, and security protocol implementation.
              </p>
            </div>

            {/* Cloud Computing */}
            <div className="group bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm 
                            border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/50 
                            transition-all duration-300 transform hover:scale-105 hover:bg-blue-500/5">
              <div className="text-blue-400 mb-6 group-hover:text-blue-300 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cloud Computing</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                AWS, Azure, Google Cloud architecture, deployment automation, and cloud security.
              </p>
            </div>

            {/* Data Science & Analytics */}
            <div className="group bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm 
                            border border-green-500/20 rounded-2xl p-8 hover:border-green-400/50 
                            transition-all duration-300 transform hover:scale-105 hover:bg-green-500/5">
              <div className="text-green-400 mb-6 group-hover:text-green-300 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 12h2v5H7v-5zm4-3h2v8h-2V9zm4-3h2v11h-2V6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Science & Analytics</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Advanced analytics, machine learning models, data visualization, and statistical analysis.
              </p>
            </div>

            {/* AI & Machine Learning */}
            <div className="group bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm 
                            border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/50 
                            transition-all duration-300 transform hover:scale-105 hover:bg-purple-500/5">
              <div className="text-purple-400 mb-6 group-hover:text-purple-300 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI & Machine Learning</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Generative AI solutions, neural networks, deep learning, and intelligent automation systems.
              </p>
            </div>

            {/* Digital Marketing */}
            <div className="group bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm 
                            border border-pink-500/20 rounded-2xl p-8 hover:border-pink-400/50 
                            transition-all duration-300 transform hover:scale-105 hover:bg-pink-500/5">
              <div className="text-pink-400 mb-6 group-hover:text-pink-300 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Digital Marketing & SEO</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Search engine optimization, marketing analytics, e-commerce strategies, and campaign management.
              </p>
            </div>

            {/* Project Management */}
            <div className="group bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm 
                            border border-orange-500/20 rounded-2xl p-8 hover:border-orange-400/50 
                            transition-all duration-300 transform hover:scale-105 hover:bg-orange-500/5">
              <div className="text-orange-400 mb-6 group-hover:text-orange-300 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Project Management</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Agile methodologies, business process optimization, and cross-functional team leadership.
              </p>
            </div>

            {/* Software Development */}
            <div className="group bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm 
                            border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-400/50 
                            transition-all duration-300 transform hover:scale-105 hover:bg-indigo-500/5">
              <div className="text-indigo-400 mb-6 group-hover:text-indigo-300 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Software Development</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Full-stack development, mobile applications, DevOps practices, and system integration.
              </p>
            </div>

            {/* Network Administration */}
            <div className="group bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm 
                            border border-teal-500/20 rounded-2xl p-8 hover:border-teal-400/50 
                            transition-all duration-300 transform hover:scale-105 hover:bg-teal-500/5">
              <div className="text-teal-400 mb-6 group-hover:text-teal-300 transition-colors">
                <Server size={48} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Network Administration</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Network design, routing protocols, wireless systems, and infrastructure management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm border-t border-yellow-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Featured <span className="text-yellow-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcase of innovative solutions spanning mobile development, blockchain technology, 
              and security applications demonstrating technical versatility and problem-solving expertise.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Book Shop App */}
            <div className="group bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 
                            hover:bg-black/70 hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-yellow-400 mb-6 group-hover:text-yellow-300 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Book Shop Mobile App</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p><span className="text-yellow-400 font-semibold">Technology:</span> Flutter & Dart</p>
                <p><span className="text-yellow-400 font-semibold">Features:</span> Cross-platform mobile application with intuitive UI/UX design</p>
                <p><span className="text-yellow-400 font-semibold">Functionality:</span> Book catalog browsing, search filters, user authentication, shopping cart, and payment integration</p>
                <p><span className="text-yellow-400 font-semibold">Architecture:</span> Clean architecture with state management using Provider/Bloc patterns</p>
              </div>
            </div>

            {/* Cryptocurrency Website */}
            <div className="group bg-black/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 
                            hover:bg-black/70 hover:border-amber-400/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-amber-400 mb-6 group-hover:text-amber-300 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.41 15.09L7 13.5l1.41-1.41 2.18 2.18 6.59-6.59L18.59 9 11.41 17.09z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cryptocurrency Platform</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p><span className="text-amber-400 font-semibold">Stack:</span> Full-Stack Development (React, Node.js, MongoDB)</p>
                <p><span className="text-amber-400 font-semibold">Features:</span> Real-time crypto trading, portfolio tracking, market analytics dashboard</p>
                <p><span className="text-amber-400 font-semibold">Security:</span> Multi-factor authentication, encrypted transactions, secure wallet integration</p>
                <p><span className="text-amber-400 font-semibold">APIs:</span> Integration with multiple crypto exchanges and live market data feeds</p>
              </div>
            </div>

            {/* Location Tracing System */}
            <div className="group bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 
                            hover:bg-black/70 hover:border-red-400/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-red-400 mb-6 group-hover:text-red-300 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Criminal Location Tracing</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p><span className="text-red-400 font-semibold">Purpose:</span> Law enforcement digital forensics and location intelligence system</p>
                <p><span className="text-red-400 font-semibold">Technologies:</span> GIS mapping, GPS tracking, data analytics, machine learning algorithms</p>
                <p><span className="text-red-400 font-semibold">Capabilities:</span> Real-time location monitoring, pattern analysis, predictive modeling</p>
                <p><span className="text-red-400 font-semibold">Security:</span> Encrypted communications, access control, audit trails, compliance standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              <span className="text-yellow-400">Educational</span> Background
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strong academic foundation with specialized training in network engineering and cybersecurity.
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-8">
            {/* University of Gloucestershire */}
            <div className="group bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 
                            hover:bg-black/70 hover:border-yellow-400/40 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/gusto-logo.png" 
                    alt="GUSTO University Logo"
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500/30"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    GUSTO University (University of Gloucestershire)
                  </h3>
                  <p className="text-yellow-400 font-semibold mb-2">Network Engineering - Overall Merit Grade</p>
                  <p className="text-gray-500 mb-4">April 2019 - April 2022</p>
                  <p className="text-gray-400">
                    Comprehensive study in network design, security protocols, and infrastructure management 
                    with distinction in practical implementations.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Training */}
            <div className="group bg-black/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 
                            hover:bg-black/70 hover:border-amber-400/40 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/ach-logo.jpg" 
                    alt="ACH Logo"
                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-500/30"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    ACH Network Professional Training Center
                  </h3>
                  <p className="text-amber-400 font-semibold mb-2">Cisco Certified Network Professional (ENCOR + ENARSI)</p>
                  <p className="text-gray-500 mb-4">2022</p>
                  <p className="text-gray-400">
                    Advanced certification training in enterprise network core technologies and 
                    advanced routing and services implementation.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Training */}
            <div className="group bg-black/50 backdrop-blur-sm border border-yellow-600/20 rounded-2xl p-8 
                            hover:bg-black/70 hover:border-yellow-500/40 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/kmd-logo.jpg" 
                    alt="KMD University Logo"
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-600/30"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">KMD University</h3>
                  <p className="text-yellow-500 font-semibold mb-2">Microsoft Office Products</p>
                  <p className="text-gray-500 mb-4">2019</p>
                  <p className="text-gray-400">
                    Comprehensive training in Microsoft Office suite for professional documentation 
                    and productivity enhancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm border-t border-yellow-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to <span className="text-yellow-400">Collaborate</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how my expertise in cybersecurity and network engineering 
            can contribute to your organization's success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={handleLinkedInContact}
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-600 to-amber-600 
                         hover:from-yellow-700 hover:to-amber-700 text-black px-8 py-4 rounded-xl 
                         font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Linkedin size={20} />
              Get In Touch
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <Link 
              to="/certifications"
              className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm 
                         hover:bg-yellow-600/20 text-white px-8 py-4 rounded-xl font-semibold 
                         transition-all duration-300 transform hover:scale-105 border border-yellow-500/30 hover:border-yellow-400"
            >
              <Award size={20} />
              View All Certifications
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
