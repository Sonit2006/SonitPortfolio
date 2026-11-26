export type Figure = { value: number; suffix: string; label: string };
export type Role = { company: string; title: string; start: string; end: string; bullets: string[]; figures: Figure[]; lane: string; startMonth: number; endMonth: number; present?: boolean };
export type Project = { year: string; name: string; stack: string; bullets: string[]; source?: string };
export type Certification = { name: string; issuer: string; url?: string };
export type Link = { label: string; href: string; external?: boolean };

export const content = {
  name: 'Sonit Maddineni',
  about: {
    eyebrow: 'About',
    lead: 'I study computer science and astronomy at UIUC. Previous Software Engineering Intern at IBM. Open to full-time opportunities.',
    education: 'University of Illinois Urbana-Champaign. B.S. in Computer Science and Astronomy, expected May 2027.',
    profileImage: '/profile.jpg',
    profileImageAlt: 'Portrait of Sonit Maddineni',
  },
  roles: [
    { company: 'NOBE, Illinois Chapter', title: 'Software Developer', start: 'February', end: 'May 2025', lane: 'NOBE', startMonth: 1, endMonth: 5, bullets: ['Worked across product and engineering on an AI-enabled fitness application with real-time user feedback.', 'Helped turn sensor and product data into a clearer dashboard for testing and iteration.'], figures: [{ value: 30, suffix: '+', label: 'test users on the dashboard' }, { value: 20, suffix: '+', label: 'pull requests reviewed' }] },
    { company: 'Forward Data Lab, UIUC', title: 'Undergraduate Research Assistant', start: 'June', end: 'present', lane: 'Research', startMonth: 5, endMonth: 22.8, present: true, bullets: ['Built evaluation workflows for complex instruction-following behavior in language models.', 'Used Python automation and cloud tooling to make model analysis more repeatable and easier to scale.'], figures: [{ value: 25, suffix: '+', label: 'constraint families' }, { value: 1000, suffix: '+', label: 'outputs evaluated automatically' }, { value: 50, suffix: '%', label: 'less manual evaluation time' }] },
    { company: 'NOBE, Illinois Chapter', title: 'Technical Lead', start: 'September', end: 'December 2025', lane: 'NOBE', startMonth: 8, endMonth: 12, bullets: ['Guided a student engineering team through the delivery of web and mobile products.', 'Translated product needs into an iterative development process and reviewed work across the codebase.'], figures: [{ value: 8, suffix: '', label: 'engineers led' }, { value: 1000, suffix: '+', label: 'users served' }, { value: 20, suffix: '+', label: 'code reviews' }] },
    { company: 'IBM', title: 'Software Developer Intern', start: 'June', end: 'September 2026', lane: 'IBM', startMonth: 17, endMonth: 21, bullets: ['Built developer tooling that connected an internal coding assistant with live operational data.', 'Worked across identity, delivery automation, and reliability workflows for an enterprise engineering environment.'], figures: [{ value: 200, suffix: '+', label: 'member team on Keycloak RBAC' }, { value: 10, suffix: '+', label: 'repositories on the PR pipeline' }, { value: 20, suffix: '+', label: 'Jenkins pipelines tracked' }] },
  ] satisfies Role[],
  skills: [
    { name: 'Languages', items: 'Python, Java, C, C++, JavaScript, HTML, CSS, R, MIPS Assembly, Verilog' },
    { name: 'Frameworks and systems', items: 'React, Node.js, PyTorch, TensorFlow, Pandas, LangChain, NumPy, Unix/Linux' },
    { name: 'Cloud and DevOps', items: 'AWS, Google Cloud Platform, Azure AI Services, Docker, JIRA, Git, Jenkins' },
    { name: 'Tools and concepts', items: 'REST APIs, Agile/Scrum, MySQL, PostgreSQL, IBM Bob, Cursor, Zed' },
  ],
  projects: [
    { year: '2026', name: 'Mastiq', stack: 'React, Next.js, Azure AI, Keywords AI', bullets: ['Built a Next.js and React agentic learning platform that turns a prompt into structured courses by orchestrating article and YouTube resource retrieval with Azure AI.', 'Implemented model routing with Keywords AI and Azure AI, combining multi-model generation, subject-specific prompts, and interactive practice content.']},
    { year: '2026', name: 'IBM Concert MCP Gateway', stack: 'Python, FastMCP, IBM Concert API, MCP', bullets: ['Built a Python FastMCP server that connects IBM Bob to IBM Concert REST APIs through stdio transport, using requests and C_API_KEY authentication for live operational data.', 'Implemented four semantic tools for multi-repository CVE aggregation, remediation guidance, deployment risk analysis, and vulnerability-posture monitoring.']},
    { year: '2025', name: 'FileChat', stack: 'Python, FAISS, LLMs', bullets: ['Built a Python hybrid RAG application using FAISS approximate nearest-neighbor indexing to retrieve relevant chunks from large document collections.', 'Implemented recursive chunking and local Ollama embeddings for offline-first retrieval, then used Azure OpenAI to generate answers grounded in the retrieved context.']},
    { year: '2024', name: 'Secure Knock', stack: 'Python, OpenCV, face_recognition, AWS SNS, boto3', bullets: ['Built a real-time computer-vision pipeline with OpenCV and face_recognition to detect visitors, generate face embeddings, and match them against authorized identities.', 'Integrated boto3 with AWS SNS to send SMS alerts for unrecognized faces while rendering live camera bounding boxes and identity labels.']},
  ] satisfies Project[],
  certifications: [
    { name: 'Azure AI Engineer Associate', issuer: 'Microsoft', url: 'https://learn.microsoft.com/en-us/users/sonitmaddineni-5370/credentials/837196eaa7d0a5de' },
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', url: 'https://www.credly.com/badges/4e94fd85-94a6-4036-9c5e-a79652356523/linked_in_profile' },
    { name: 'PCAP, Certified Associate Python Programmer', issuer: 'Python Institute', url: 'https://www.credly.com/badges/0d46606a-a6b5-46d3-baff-663b9b7cf7fc/linked_in_profile' },
    { name: 'PCPP1, Certified Professional Python Programmer', issuer: 'Python Institute', url: 'https://www.credly.com/badges/a5ae3034-cefb-4f79-9802-4e1861b9f199/linked_in_profile' },
    { name: 'Intermediate Machine Learning', issuer: 'Kaggle' },
  ] satisfies Certification[],
  links: [
    { label: 'GitHub', href: 'https://github.com/Sonit2006', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/sonit-maddineni', external: true },
    { label: 'Email', href: 'mailto:sonit.maddineni@gmail.com' },
  ] satisfies Link[],
  email: 'sonit.maddineni@gmail.com',
} as const;

export const sections = ['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'] as const;
export const sectionOffsets = [0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 5] as const;
export const firstSteps = [0, 1, 5, 9, 10, 11] as const;
export const totalSteps = 12;
