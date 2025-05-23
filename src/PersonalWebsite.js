import React, { useState, useEffect, useMemo } from 'react';
import { User, FileText, Linkedin, Twitter } from 'lucide-react';
import profilePicture from './assets/profile_picture_linkedin.jpeg';

// Custom hook for handling routes
const useRouter = () => {
  // Get initial path from window location or default to '/about'
  const getInitialPath = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path === '/' ? '/about' : path;
    }
    return '/about';
  };

  const [currentPath, setCurrentPath] = useState(getInitialPath);

  useEffect(() => {
    // Update path when URL changes
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for popstate event (browser back/forward)
    window.addEventListener('popstate', onLocationChange);

    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  // Navigate to a new route
  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return { currentPath, navigate };
};

const PersonalWebsite = () => {
  const { currentPath, navigate } = useRouter();
  
  // Sample blog posts
  const blogPosts = [
    {
      id: 'running-cross-functional-teams',
      title: "Running (Serving) Cross Functional Teams",
      date: "March 2024",
      summary: "Competence matters. Cultural relativity matters.",
      content: `A few years into my career, I was asked to build an automated evidence generator for ensuring and proving software compliance for pharmaceutical use cases. As a software engineer turned architect turned product manager, I obviously attributed success to 100% test coverage. "I was incorrect" would be an understatement. There is a whole industry built around this and although it is filled with well-meaning people, it breeds bloat if unchecked. With that naive assumption, my team partner and I set out on a quest to build the best testing framework there is to gather insurmountable amounts of evidence against the checks enlisted in the CFRs. Despite gathering all the evidence in the world and testing every nook and cranny of the software, during many audits, these fell on deaf ears.

The tests were good, but the reason for failure was that we hadn't satisfied the lateral categories. The SOPs, the penetration testing juxtaposed with the integration tests, the tests for "flows", the design spec commitments, among other things. Fortunately, I quickly realized that the very essence of a compliance audit in the pharmaceutical space, although seemingly straightforward requires rigor that extends beyond "testing" the software. This rigor first needs to take into account that engineering alone isn't enough. The reliance on compliance specialists is the pre-cursor to curating what's needed to set this up for success. Although the goal is the same, people in these organizations operate differently. The reason is the concerns are different and they each have their place. Understanding this and quickly and catering to become a translator between these organizations led to the genesis of what is a successful program today.

Configuring this system of specialists to collaborate generally needs harmony that can only be achieved by having highly competent, low ego and adaptable people. Although this "special projects" team I was curating was meant to be lean, the lean team needed a high degree of agency and varying skillsets. That brings me to the second learning, i.e. recruit top tier talent and rely on all levers to ensure you have the right people for the job. It's a function of high slope, low ego and extreme agency. Since my team was distributed globally, this further meant that delineating responsibility while encouraging a collaborative environment was yet another precursor to success.

I'll keep this short for now, but a high performing team is generally one that's cross-functional, with people of similar virtues but different skillsets. To engage them productively it requires distinctive strokes and sometimes different brushes. This journey of learning was a precondition for delivering successful projects over the past few years.`
    },
    {
      id: 'understanding-mcp',
      title: "Understanding MCP in Large Language Models",
      date: "April 15, 2025",
      summary: "Better to just use APIs?",
      content: "Coming soon..."
    },
    {
      id: 'router-llm',
      title: "RouterLLM: The Next Step in Efficient Language Models",
      date: "March 22, 2025",
      summary: "An analysis of how RouterLLM architecture is changing the way we think about model efficiency and routing capabilities.",
      content: "Coming soon..."
    },
    {
      id: 'blueprint-components',
      title: "Blueprint Components in React: A Game Changer",
      date: "February 10, 2025",
      summary: "How Blueprint components have transformed my React development workflow and improved UI consistency.",
      content: "Coming soon..."
    }
  ];

  // Education information
  const education = [
    {
      institution: "University Name",
      degree: "Master of Science in Computer Science",
      years: "2019 - 2021",
      description: "Focused on machine learning and artificial intelligence. Thesis on neural networks for healthcare applications."
    },
    {
      institution: "Another University",
      degree: "Bachelor of Engineering in Computer Science",
      years: "2015 - 2019",
      description: "Strong foundation in algorithms, data structures, and software engineering principles."
    }
  ];

  // Career information
  const career = [
    {
      company: "Tech Innovation Corp",
      position: "Senior Software Engineer",
      years: "2022 - Present",
      description: "Leading development of AI-powered healthcare solutions. Implementing machine learning models for medical diagnostics."
    },
    {
      company: "Digital Solutions Inc",
      position: "Software Developer",
      years: "2019 - 2022",
      description: "Developed web applications using React and Redux. Implemented BLE integrations for IoT devices."
    }
  ];
  
  // Navigation items wrapped in useMemo to prevent unnecessary re-renders
  const navItems = useMemo(() => [
    { path: '/about', label: 'About', icon: <User className="w-5 h-5" /> },
    { path: '/writings', label: 'Writings', icon: <FileText className="w-5 h-5" /> },
  ], []);
  
  // If the current path doesn't match any of our routes, default to /about
  useEffect(() => {
    const validPaths = navItems.map(item => item.path);
    const articleMatch = currentPath.match(/^\/writings\/(.+)$/);
    
    // Allow article paths to pass through
    if (!validPaths.includes(currentPath) && !articleMatch) {
      navigate('/about');
    }
  }, [currentPath, navigate, navItems]);

  // Render page content based on current path
  const renderContent = () => {
    // Check if the current path is an article
    const articleMatch = currentPath.match(/^\/writings\/(.+)$/);
    if (articleMatch) {
      const articleId = articleMatch[1];
      const article = blogPosts.find(post => post.id === articleId);
      
      if (article) {
        return (
          <div className="bg-white shadow rounded-lg p-6 max-w-3xl mx-auto">
            <div className="mb-8">
              {/* <button
                onClick={() => navigate('/writings')}
                className="text-gray-600 hover:text-gray-900 flex items-center mb-4"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Writings
              </button> */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
              <p className="text-gray-500 mb-8">{article.date}</p>
              <div className="prose prose-lg max-w-none">
                {article.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      }
    }

    switch (currentPath) {
      case '/about':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            {/* <h2 className="text-2xl font-bold text-gray-900 mb-6">About Me</h2> */}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - About and Writings */}
              <div className="flex flex-col space-y-8">
                {/* About Row */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
                  <p className="text-gray-700 mb-4">
                    Hello! I'm Sid. Engineer by discipline, Architect (worn many hats) at Palantir. Eternally aching to build. Opinions reflected here are all personal.
                  </p>
                </div>
                {/* Writings Row */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Writings</h3>
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Running (Serving) Cross Functional Teams</h4>
                      <p className="text-sm text-gray-500 mb-2">Competence matters. Cultural relativity matters.</p>
                      <button 
                        onClick={() => navigate('/writings/running-cross-functional-teams')}
                        className="text-blue-500 hover:underline"
                      >
                        Read More
                      </button>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">To MCP or not MCP</h4>
                      <p className="text-sm text-gray-500 mb-2">Better to just use APIs?</p>
                      <button 
                        onClick={() => navigate('/writings/understanding-mcp')}
                        className="text-blue-500 hover:underline"
                      >
                        Read More
                      </button>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Good to Great - Product</h4>
                      <p className="text-sm text-gray-500 mb-2">Iteration over planning. Empirical over Abstract</p>
                      <button 
                        onClick={() => navigate('/writings/good-to-great')}
                        className="text-blue-500 hover:underline"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column - Timeline and Placeholder */}
              <div className="flex flex-col space-y-8">
                {/* Timeline Row */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Timeline</h2>
                  <div className="relative border-l-2 border-gray-200 pl-6">
                    {/* Palantir Technologies Header */}
                    <div className="mb-4">
                      <div className="absolute -left-3.5 w-7 h-7 bg-blue-100 border-2 border-blue-400 rounded-full flex items-center justify-center">
                        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Palantir Technologies</h4>
                    </div>
                    {/* 2021-2024 Sub-nodes */}
                    <div className="mb-6 ml-4">
                      <span className="text-xs text-gray-500 font-bold">2021–2024 • Palo Alto, CA</span>
                      <div className="space-y-4">
                        <div>
                          <p className="text-gray-700 mb-1">Currently responsible for two key initiatives:</p>
                          <div className="ml-4">
                            <p className="text-gray-700 mb-1">• Leading a team of engineers and compliance specialists to develop Palantir's GxP platform for clinical use-cases ranging from site-selection to RWE analysis.</p>
                            <p className="text-gray-700 mb-1">• Leading a team of extremely talented architects to build product demos that show end to end product capability for Palantir's AI Platform.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 2020-2021 Sub-node */}
                    <div className="mb-6 ml-4">
                      <span className="text-xs text-gray-500 font-bold">2020–2021 • London, UK</span>
                      <p className="text-gray-700 mb-1">Developed applications for the NHS at the brink of and through COVID-19 that allowed for equitable allocation of ICU and PPE equipment.</p>
                    </div>
                    {/* 2019-2020 Sub-node */}
                    <div className="mb-6 ml-4">
                      <span className="text-xs text-gray-500 font-bold">2019–2020 • New York, NY</span>
                      <p className="text-gray-700 mb-1">Developed User applications that are currently thwarting nation state cyber-security attacks.</p>
                      <p className="text-gray-700 mb-1">Wrote data pipelines and models that detected fraud amongst trillion row transaction datasets.</p>
                    </div>
                    {/* Digital Control Inc. Header */}
                    <div className="mb-4">
                      <div className="absolute -left-3.5 w-7 h-7 b rounded-full flex items-center justify-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Digital Control Inc.</h4>
                    </div>
                    {/* 2018-2019 Sub-node */}
                    <div className="mb-6 ml-4">
                      <span className="text-xs text-gray-500 font-bold">2018–2019 • Seattle, WA</span>
                      <p className="text-gray-700 mb-1">Programmed a custom transmitter / receiver for directional drilling.</p>
                    </div>
                    {/* Helitrak Inc. Header */}
                    <div className="mb-4">
                      <div className="absolute -left-3.5 w-7 h-7 rounded-full flex items-center justify-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Helitrak Inc.</h4>
                    </div>
                    {/* 2017-2018 Sub-node */}
                    <div className="ml-4">
                      <span className="text-xs text-gray-500 font-bold">2017–2018 • Gig Harbor, WA</span>
                      <p className="text-gray-700 mb-1">Programmed Autopilots and Safety Trigger for the Collective for R22 and R44 Helicopters.</p>
                    </div>
                  </div>
                </div>
                {/* Placeholder Row for future content */}
                <div>
                  {/* Add future content here if needed */}
                </div>
              </div>
            </div>
          </div>
        );
        
      case '/education':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900">{edu.institution}</h3>
                  <p className="text-lg font-medium text-gray-600">{edu.degree}</p>
                  <p className="text-sm text-gray-500 mb-4">{edu.years}</p>
                  <div className="border-t border-gray-200 my-4"></div>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
        
      case '/career':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Career</h2>
            <div className="space-y-6">
              {career.map((job, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900">{job.company}</h3>
                  <p className="text-lg font-medium text-gray-600">{job.position}</p>
                  <p className="text-sm text-gray-500 mb-4">{job.years}</p>
                  <div className="border-t border-gray-200 my-4"></div>
                  <p className="text-gray-700">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
        
      case '/writings':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Writings</h2>
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                  <div className="border-t border-gray-200 my-4"></div>
                  <p className="text-gray-700 mb-4">{post.summary}</p>
                  <button 
                    onClick={() => navigate(`/writings/${post.id || '#'}`)}
                    className="px-4 py-2 border border-gray-800 text-sm font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50"
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
        
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-indigo-200 py-4 md:py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
            <div className="flex items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-sm mb-3 md:mb-0 md:mr-5">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl font-bold text-gray-800">Siddhant Ekale</h1>
                {/* Tagline commented out until personalized
                <p className="mt-1 text-base text-gray-600">
                  Technology Enthusiast • Healthcare Innovator • Lifelong Learner
                </p>
                */}
                <div className="mt-2 flex justify-center md:justify-start space-x-3">
                  <a href="https://www.linkedin.com/in/siddhantekale/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/sidekale" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            {/* Navigation */}
            <nav className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.path !== '#') {
                      navigate(item.path);
                    }
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPath === item.path
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-gray-500 mt-1">
            Built with React and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
