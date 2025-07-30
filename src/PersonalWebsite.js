import React, { useState, useEffect, useMemo } from 'react';
import { User, FileText, Linkedin, Twitter } from 'lucide-react';
import profilePicture from './assets/profile_picture_linkedin.jpeg';

// Custom hook for handling routes
const useRouter = () => {
  // Get initial path from window location or default to '/about'
  const getInitialPath = () => {
    if (typeof window !== 'undefined') {
      // Handle the special GitHub Pages redirect
      const search = window.location.search;
      if (search && search[1] === '/') {
        const decoded = search.slice(1).split('&').map(s => s.replace(/~and~/g, '&')).join('?');
        return decoded;
      }
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
      id: 'tell-me-about-yourself',
      title: "Tell me about yourself",
      date: "Jul 2025",
      summary: "How to craft a thoughtful and brief response to the most common interview question.",
      content: `"Brevity is the soul of wit" - William Shakespeare

It's easy to fall into a ramble of talking about everything or.. the equally worse, say nothing at all, when asked this question. It comes up in many contexts: when making a new friend, going on a first date, or during an interview. I'm going to focus this piece in the interview context. It's a loaded question and often the asker themselves have no idea about what they want to know. They just hinge on the hope that the answerer is intelligent enough to leave some breadcrumbs that make for a good conversation while allowing them to learn as much there is to their relevance to the role at hand.

I think this question is important - it practically defines the tone of the interviewer throughout the conversation. I remember that the time I started to thoughtfully prepare for this question was when I wanted to attend one of the most consequential interviews of my lifetime - at Palantir. From the many interactions I had had with Palantir people, pre-interviewing with them, I had learned that they wanted to know you beyond the surface level intelligent archetype you're conditioned to present yourself as. The quirks, the ticks, the technical density and everything under the sun. The answer to this question would probably warrant only five minutes though. I had to be thoughtful and brief.

I decided to start by writing down the most comprehensive lineage of my journey, from where I was born, to how I was brought up, to friendships that changed my life, projects that made me learn what I wanted to be.... all the way to why I chose not to pursue a funded master's program. I realized that my life was full of micro and macro decisions and indecisions alike. There was a why to everything, I just hadn't thought enough when I was running auto-pilot. I realized that the parts of my story that led to a consequential change were in a trench deep in my mind. Awesome? Not yet. This enumeration of events gave me a thesis for who I had become and a sliver of where I was going, but it was, to put bluntly, verbose.

I decided to now look at it from a different lens, in the journey, are there parts that I can "hand-wave" i.e. get a nod-level consensus with the interviewer on what the story looked like there, only to lead organically into the part I wanted to convey to them the most. The two slices I wanted to focus on were my motivations and my technical contributions so far.

The latter was simple, I chose to use a prop i.e. draw out on a board, literally, the application of the product I had built. My first project was writing code for helicopter safety triggers, I literally drew parts of the helicopter that would be engaged on my code being deployed onboard. The second project was detecting what was underground for drilling operations. By giving the frame, I allowed the interviewer to naturally ask me what part of this project I worked on, and I was able to elaborate in a frame that they understood. In the process, I not only gave them confidence on my technical aptitude, but also the ability to discern the relevance of my work. If I was a bonehead who didn't understand why I did what I did, I wouldn't have a place at Palantir. Any interviewer would discern a performative play, so don't even try, instead focus on your choices and state intention instead of being duplicitous.

For the former, i.e. discussing my motivations, this was a process of drawing out what mattered to me at that point in time 't'. This exercise of elaborately enumerating everything I had done enabled me to realize that everything that I chose to work on had some consequential change to someone's life. I don't mean this in any altruistic sense, it just gave me pleasure that I could apply the same skills I did to print my first "Hello World" in service of other humans. That was my purpose, my motivation, my reason to do anything that I did. You may have different ones, knowing what those are distinguishes you, and being able to articulate them allows the world to see that distinction.

How much time did I take to convey these two things: 5 minutes, but the prep for it took me over a day and a week of background rumination. When I was asked this though, I was prepared to convey it precisely and enabled the interviewer to ask the follow on questions, learn about my journey and establish a rapport with me that would have otherwise potentially not happened through the course of the interview. This question deserves thought, it deserves an enumeration of your journey and then mapping it to what you want to convey to the person asking this question. Showing motivations and technical aptitude whilst conveying my reasons for making choices that I did was important to me for my interview at Palantir. I would implore you to do this for the next important meeting you have. It begs honesty and brevity.`
    },
    {
      id: 'receiving-feedback',
      title: "Receiving Feedback",
      date: "May 2025",
      summary: "The art of filtering feedback and knowing when to push back.",
      content: `"It is clear, then, from what has been said, that it is not possible to be good in the strict sense without practical wisdom, nor practically wise without moral virtue." - Aristotle

I was due to give my first demo on some complex technical tools to a group of 15 experts in that domain. I prepared "just enough", jumped on the call with equal parts euphoria and equal parts nervousness. The call started, the nerves kicked in, and it was a, to put it lightly, a below average demo. My audience left unimpressed. I know exactly where I went wrong. To top it all, it was my first demo and I had setup myself up for a harsh critique by my colleagues (fair). 

My reflection was rather quick and I owned up to it on our internal group chat. I had two colleagues, one much younger, another much older. The older one assuming leadership responsibility (fairly), took this as an opportunity to get on a call together. I'm paraphrasing his words "Sid, you messed up. You should have been better prepared. I know you admitted to this already, but this looks really bad." I acknowledged he was right, and said I'll do better next time and roughly talked through a plan. He spent ten minutes after that virtue signaling. Because, I was in a vulnerable state, I ended up capitulating to his continued hurtful remarks feeling "I needed this". The call ended, I was disturbed throughout the day. The next day, I got a call from the younger colleague. His wisdom is the essence behind why I'm writing this. 

He said, "Sid, you were wrong to have not prepared and I have the same feedback on that front. Your self-admission right after and specific propositions to fix this were "more than enough". You want to improve, and you will. Cut yourself some slack, improve and nail it. This call isn't about feedback, I wanted to tell you that you should assess who's giving feedback and know how to accept and how to draw lines where people cross boundaries. The senior colleague on the call yesterday was feeling good about putting you down, and you didn't realize this. There are many such bad actors in the corporate environment. You admitted your error, the consequences were reparable, and you took feedback and provided an action plan. The virtue signaling at the end was a reflection of the senior colleague's ego and in all honesty malicious behavior. The malice there was to bring you down, and feel good about being "an advisor". You need to step out of this frame of overt submissiveness." The doctrine of the golden mean proved right yet again. I realized he was right, accepting and working on feedback was important, but if someone tried to bring you down with "feedback" being the means, you need to filter and in when possible push back on it. I had spent years in "impostor syndrome" putting myself down on a single piece of critical feedback, reassessing every move of mine. This had to stop. It did and I retained the ability to constructively accept and work on critique.

With that experience, I got better at the art of the demo, but also at the art of receiving feedback. I mentally started to curate a list of people who gave feedback from a lens of enabling growth. I listened to them with intent. That intent, tactically, came across as quick and actionable feedback, very critical at times, but aimed to improve. I flourished as a result of those people and I hold them very dear to my heart. 

The virtue signalers also got into a list of people whose words I passed through high-pass filters. In cases where ruffling feathers would prove detrimental, I ignored their words and very indirectly let them know their place. I actively found ways to cease working with them. In some cases where I had the right authority, I pushed back, so others who were like me would be spared that vicious cycle of self-doubt. I also made it a point to pay forward that young colleague's wisdom, and held many such meetings over the years where I hope the people I intended to help have grown out of the frame of unnecessary capitulation, but still retained the critical ability to accept and work on genuine feedback. There is obviously nuance to how to handle people and situations like these, but the lesson I've learned is that intention of the counselor is as important as the counsel itself. Since that time, I've gone a step further, I've also learnt the art of distilling feedback from the virtue signalers and filter out the rest.`
    },
    {
      id: 'conducting-meetings',
      title: "Conducting Meetings",
      date: "May 2025",
      summary: "Directive but malleable.",
      content: `"We can do noble acts without ruling earth and sea; for even with moderate advantages one can act excellently." - Aristotle

I was trying to bring together a cross-functional group of engineers, compliance managers, a few senior director type personas in a room to agree on the execution of a fairly complex project. Being a newly "promoted" technical lead of a fairly large group, I was thrilled to "lead" the meeting. I spent about 25 minutes of the 30 minute call soliciting feedback on the design and to the whole group's dismay, we ended up with zero artifacts of substance.

I thought I did everything right, prepared the deck, put together some squiggly lines of architecture, knew the technical details in and out, knew what questions to seed the conversation with, among other things. Another unfortunate bit here was that I also left the meeting elated, thinking I had clarified all doubts. Few minutes, after the call I realized I had done nothing that would move the needle on the project. The architecture remained unapproved, the stakeholders didn't know what they would be doing in service of this project, and we had philosophical notes from everyone that led to zero change of state, now or in the future. The Platonian objective had prevailed.

A good friend, mentor, manager and advisor of mine who fortunately (thank all the lords!) attended that call sent me a quick fire email of critical feedback right after. I will be grateful to him for life for allowing me to see this shortcoming and giving me arguably the most important skill in leadership. His feedback was and I'm paraphrasing A LOT because it was layered, "Knowing **when and how** to seek advise is **equally if not more** important than who to seek advise from. As a leader, in a fairly large meeting, the role isn't to capitulate into win-win games. It's to organize, plan, and then direct the vision that you've pre-deliberated on. It also does not mean take a dictatorial stance, it's embracing malleability, while being directive. That meeting failed to achieve the objective i.e. the approval on the execution and tactical actions for the people involved. The process will now elongate into individually persuading folks and then corralling opinions yet again."

This feedback didn't sting (a masterclass in giving feedback, credit to him), it pushed me to think harder before these kinds of future meetings. I eventually got good at it. I started by setting the tone, defining macro-objectives without sounding dictatorial, and kept reiterating the tactical action items that needed to be worked on. I solicited feedback and approval from the lens of concluding micro-objectives and ensured that the folks involved had accepted (sometimes uncomfortably) the piece that they needed to contribute. Many times, there were debates and I ensured that there was malleability at accepting different ways of doing things, as long as the goal post and timelines didn't change. There were disagreements on goal settings too, and that allowed us to change course before proceeding into the meeting, when reasonable.

It was uncomfortable at times, because by virtue of having cross-functionality and differing incentives, there will always be times of disagreement on the micro-objectives. If you've done a good job of defining and agreeing on the big picture, you can move forward without being happy (short term) in service of the larger outcome. In high performing organizations, most people are dealing with a large factorial of things and don't have the brain-space to contribute to your objective in a manner that'll guarantee convergence. That onus lies on you, the leader of that consortium.`
    },
    {
      id: 'running-cross-functional-teams',
      title: "Running (Serving) Cross Functional Teams",
      date: "April 2025",
      summary: "Competence matters. Cultural relativity matters.",
      content: `A few years into my career, I was asked to build an automated evidence generator for ensuring and proving software compliance for pharmaceutical use cases. As a software engineer turned architect turned product manager, I obviously attributed success to 100% test coverage. "I was incorrect" would be an understatement. There is a whole industry built around this and although it is filled with well-meaning people, it breeds bloat if unchecked. With that naive assumption, my team partner and I set out on a quest to build the best testing framework there is to gather insurmountable amounts of evidence against the checks enlisted in the CFRs. Despite gathering all the evidence in the world and testing every nook and cranny of the software, during many audits, these fell on deaf ears.

The tests were good, but the reason for failure was that we hadn't satisfied the lateral categories. The SOPs, the penetration testing juxtaposed with the integration tests, the tests for "flows", the design spec commitments, among other things. Fortunately, I quickly realized that the very essence of a compliance audit in the pharmaceutical space, although seemingly straightforward requires rigor that extends beyond "testing" the software. This rigor first needs to take into account that engineering alone isn't enough. The reliance on compliance specialists is the pre-cursor to curating what's needed to set this up for success. Although the goal is the same, people in these organizations operate differently. The reason is the concerns are different and they each have their place. Understanding this and quickly and catering to become a translator between these organizations led to the genesis of what is a successful program today.

Configuring this system of specialists to collaborate generally needs harmony that can only be achieved by having highly competent, low ego and adaptable people. Although this "special projects" team I was curating was meant to be lean, the lean team needed a high degree of agency and varying skillsets. That brings me to the second learning, i.e. recruit top tier talent and rely on all levers to ensure you have the right people for the job. It's a function of high slope, low ego and extreme agency. Since my team was distributed globally, this further meant that delineating responsibility while encouraging a collaborative environment was yet another precursor to success.

I'll keep this short for now, but a high performing team is generally one that's cross-functional, with people of similar virtues but different skillsets. To engage them productively it requires distinctive strokes and sometimes different brushes. This journey of learning was a precondition for delivering successful projects over the past few years.`
    },
    {
      id: 'good-to-great',
      title: "Good to Great - Product",
      date: "January 2025",
      summary: "Iteration over planning. Empirical over Abstract",
      content: `"The great doers are also the great thinkers" - Steve Jobs

I have been bitten by the opioid of planning (or worse, planning to plan) more than anyone else. It may seem alluring to think in the ether, especially if there is a complex task at hand. It always ended up being the case that when I did, I thought better and then did better, and that virtuous cycle led to outcomes I wouldn't have expected to begin with.

Very early on in my career, I was tasked with programming a CAN bus sensor to read telemetry from Hall sensors on a very cool helicopter gig. I started building the CAN bus driver that was sampling values and I saw that I was able to sample values relatively easily when sent using a wave generator that had a set voltage. When I tried testing this in production, it ended up missing some of the data (the start and stop bits), thus reported incorrect data. I was convinced (read: tunnel-visioned) that my logic was incorrect, and instead of raw testing the bits, I kept looking at the sensor values over and over again. I tried intercepting the signal, changing the driver code, changing the kernel code... basically did everything other than test the voltage. I wrote the best code possible but it didn't work until close to the end of my then internship. Had I done the obvious thing first, I could have worked and built so much more. Thinking killed time and creativity. Experimentation would have trumped thinking here by a yawning margin.

Reflecting on yet another mistake (of thinking) a few years later... I was once asked to create this elaborate product demo for this data centric operating system. I needed to essentially show the product features in a way that my clients would understand the art of the possible. It meant I had to coherently stitch together a bunch of developer tools in service of some outcome. I chose to demo a supply chain vignette. I created an elaborate draft of how a large retailer does its inventory allocation in a way that it requires minimal shelf space for its goods. It went all the way from doing predictive analytics on datasets of customer orders, to using those models to then decide inventory numbers across various shelves. I went into a writer's block of how to conceptualize a dataset like this, how would I keep the pipelines updated, the data model, and visualizations. What I forgot was that the outcome here was to show credibly how many tools existed and the art of the possible. I ended up spending over two weeks hyper-focused on making my data model perfect. Turns out, I was behind on my deadline by a mile and the tech took way longer to stitch. After creating the notional data integrations and pipelines, it felt really difficult to model the real world scenario and it just seemed easier to create something close enough. Turns out, easier was enough. The overwhelming feedback from my project sponsors was: what really mattered is the polish on the front-end apps, the narrative that stitches the various screens between the different tools. Nobody cared about the story more than the headline and it was really easy to just emulate the story with words while showing capability with somewhat relevant screens. Had I started just doing first, I'd have had an easier time dealing with the deadline, getting even more feedback and incorporating it to be a stellar demo. This writer's block I ran into was detrimental, timeline wise and affected the end product.

Obviously, if it were a real-world solution, then the details on the data model, the ML forecasts would have mattered. The visualizations there could have taken a hit but precision was key. In a demo, the precision is less important than covering the breadth of tools. And even then, iterating rapidly vs assuming and thinking would have yielded more precise outcomes.

Lesson learned: iteration >> planning. Do, think less (not saying don't think but bias towards doing).`
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
                {article.content.split('\n\n').map((paragraph, index) => {
                  // Check if the paragraph starts with a quote
                  if (paragraph.startsWith('"') && paragraph.includes('" - ')) {
                    const [quote, author] = paragraph.split('" - ');
                    return (
                      <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mb-4">
                        <p className="mb-2">{quote}"</p>
                        <footer className="text-gray-500">- {author}</footer>
                      </blockquote>
                    );
                  }
                  
                  // Regular paragraph rendering
                  return (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph.split(/(\*\*.*?\*\*)/).map((part, partIndex) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={partIndex}>{part.slice(2, -2)}</strong>;
                        }
                        return part;
                      })}
                    </p>
                  );
                })}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Featured Writings</h3>
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Tell me about yourself</h4>
                      <p className="text-sm text-gray-500 mb-2">How to craft a thoughtful and brief response to the most common interview question.</p>
                      <button 
                        onClick={() => navigate('/writings/tell-me-about-yourself')}
                        className="text-blue-500 hover:underline"
                      >
                        Read More
                      </button>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Receiving Feedback</h4>
                      <p className="text-sm text-gray-500 mb-2">The art of filtering feedback and knowing when to push back.</p>
                      <button 
                        onClick={() => navigate('/writings/receiving-feedback')}
                        className="text-blue-500 hover:underline"
                      >
                        Read More
                      </button>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Conducting Meetings</h4>
                      <p className="text-sm text-gray-500 mb-2">Directive but malleable.</p>
                      <button 
                        onClick={() => navigate('/writings/conducting-meetings')}
                        className="text-blue-500 hover:underline"
                      >
                        Read More
                      </button>
                    </div>
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
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Good to Great - Product</h4>
                      <p className="text-sm text-gray-500 mb-2">Iteration over planning. Empirical over Abstract</p>
                      <button 
                        onClick={() => navigate('/writings/good-to-great')}
                        className="text-blue-500 hover:underline"
                      >
                        Read More
                      </button>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">To MCP or not MCP (Coming soon...)</h4>
                      <p className="text-sm text-gray-500 mb-2">Better to just use APIs?</p>
                      <button 
                        onClick={() => navigate('/writings/understanding-mcp')}
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
    </div>
  );
};

export default PersonalWebsite;