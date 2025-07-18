'use client';

import React, { useState, useRef } from 'react';
import { services } from '@/lib/services';

// Portfolio and testimonials data (copy from respective files for chatbot use)
const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Modern online store with advanced filtering, payment integration, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Healthcare Management System',
    description: 'Comprehensive patient management system with appointment scheduling and medical records.',
    tags: ['Next.js', 'PostgreSQL', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing platform with advanced search, virtual tours, and agent management.',
    tags: ['Vue.js', 'Firebase', 'Google Maps API', 'PWA'],
  },
  {
    title: 'Learning Management System',
    description: 'Educational platform with course creation, progress tracking, and interactive assessments.',
    tags: ['React', 'Express', 'Socket.io', 'AWS'],
  },
  {
    title: 'Financial Dashboard',
    description: 'Real-time analytics dashboard for financial data with interactive charts and reports.',
    tags: ['Angular', 'Python', 'D3.js', 'Redis'],
  },
  {
    title: 'Social Media App',
    description: 'Modern social platform with real-time messaging, content sharing, and community features.',
    tags: ['React Native', 'GraphQL', 'Apollo', 'Prisma'],
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'nayastack transformed our vision into a stunning web application. Their attention to detail and technical expertise exceeded our expectations.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, E-Shop Plus',
    content: 'The e-commerce platform they built for us has increased our sales by 300%. Professional, reliable, and innovative team.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthCo',
    content: 'Outstanding work on our company website. The design is beautiful and the performance is exceptional. Highly recommended!',
  },
  {
    name: 'David Thompson',
    role: 'Product Manager, InnovateLabs',
    content: 'nayastack delivered our project on time and within budget. Their communication and project management skills are top-notch.',
  },
  {
    name: 'Lisa Wang',
    role: 'Startup Founder',
    content: 'They understood our requirements perfectly and created a mobile app that our users love. Great team to work with!',
  },
  {
    name: 'Robert Kim',
    role: 'CTO, DataFlow Systems',
    content: 'Excellent technical skills and creative problem-solving. They optimized our platform and improved performance significantly.',
  },
];

const about = {
  mission: 'To empower businesses with scalable, intelligent, and beautifully crafted digital solutions that drive meaningful change.',
  vision: 'To lead as a trusted technology partner, driving innovation and excellence in the digital age.',
  process: [
    'Discovery: We dive deep into your goals, audience, and challenges to align our strategy.',
    'Design: We craft intuitive, visually stunning designs tailored to your brand.',
    'Development: We build robust, scalable solutions using cutting-edge technologies.',
    'Deployment & Support: We launch your project and provide ongoing support for success.',
  ],
  who: 'nayastack is a collective of passionate developers, designers, and strategists united by a mission to craft transformative digital experiences. From sleek marketing sites to powerful SaaS platforms, we',
};

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const quickReplies = [
  'Show me your services',
  'How can you help my business?',
  'Show me your portfolio',
  'What do clients say?',
  'What is your mission?',
  'How do I get started?',
];

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hi! I\'m nayastack\'s assistant. Ask me about our services, portfolio, business benefits, or how we can help you grow!', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to bottom on new message
  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (msg?: string) => {
    const userInput = msg ?? input;
    if (!userInput.trim()) return;
    const userMessage: Message = { text: userInput, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      setMessages((prev) => [...prev, { text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 700);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    // Services
    if (input.includes('service')) {
      return (
        'Here are our main services:\n' +
        services.map((s) => `• ${s.title}: ${s.shortDescription}`).join('\n') +
        '\nAsk about any service for more details!'
      );
    }
    // Portfolio
    if (input.includes('portfolio') || input.includes('project') || input.includes('work')) {
      return (
        'Here are some of our featured projects:\n' +
        projects.map((p) => `• ${p.title}: ${p.description}`).join('\n') +
        '\nWant to know more about a specific project?'
      );
    }
    // Testimonials
    if (input.includes('testimonial') || input.includes('client') || input.includes('review')) {
      return (
        'Here\'s what our clients say about us:\n' +
        testimonials.map((t) => `"${t.content}" — ${t.name}, ${t.role}`).join('\n\n')
      );
    }
    // Mission, Vision, About
    if (input.includes('mission')) {
      return `Our mission: ${about.mission}`;
    }
    if (input.includes('vision')) {
      return `Our vision: ${about.vision}`;
    }
    if (input.includes('who are you') || input.includes('about')) {
      return about.who;
    }
    // Process
    if (input.includes('process') || input.includes('how do you work') || input.includes('how to get started')) {
      return (
        'Our process:\n' + about.process.map((step) => `• ${step}`).join('\n') +
        '\nReady to start? Just ask!'
      );
    }
    // Business benefits
    if (input.includes('benefit') || input.includes('help my business') || input.includes('grow')) {
      return (
        'We help businesses grow by building scalable, high-performance digital solutions, improving user experience, and automating processes with AI and modern tech. Want to know how a specific service can benefit your business?'
      );
    }
    // Greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return 'Hello! How can I assist you today?';
    }
    // Default
    return 'I can guide you about our services, portfolio, business benefits, process, and more. Try asking about our services or how we can help your business!';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-96 max-w-full bg-white shadow-2xl rounded-2xl p-4 flex flex-col max-h-[600px] border border-blue-200">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-blue-700 text-lg">nayastack Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-blue-600 text-xl">×</button>
          </div>
          <div className="flex-1 overflow-y-auto mb-2 pr-1 custom-scrollbar" style={{ minHeight: 200 }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-3 rounded-xl whitespace-pre-line text-sm ${
                  msg.sender === 'user'
                    ? 'bg-blue-100 ml-auto max-w-[75%] text-right'
                    : 'bg-gray-100 mr-auto max-w-[85%] text-left'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="mb-2 p-3 rounded-xl bg-gray-100 max-w-[85%] text-left animate-pulse">
                <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-1"></span>
                <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-1"></span>
                <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {quickReplies.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs hover:bg-blue-100 border border-blue-100"
              >
                {q}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ask me anything about nayastack..."
            />
            <button
              onClick={() => handleSend()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
              disabled={isTyping}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 font-bold text-lg flex items-center gap-2"
        >
          <span>💬</span> Chat with us
        </button>
      )}
    </div>
  );
};

export default Chatbot;