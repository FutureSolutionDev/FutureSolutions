export const fbPage =
  "https://www.facebook.com/profile.php?id=100003818689839&mibextid=kFxxJD";

export const CardsArray = [
  {
    id: 1,
    h3: "Quality",
    img: "/images/card1.svg",
    p: "We ensure the highest quality in all our projects, delivering results that exceed expectations",
  },
  {
    id: 1,
    h3: "Efficiency",
    img: "/images/card2.svg",
    p: "Our streamlined processes and experienced team guarantee the timely completion",
  },
  {
    id: 1,
    h3: "Data Security",
    img: "/images/card3.svg",
    p: "We prioritize the security and confidentiality of your data, implementing robust measures to protect it",
  },
  {
    id: 1,
    h3: "Customer Support",
    img: "/images/card4.svg",
    p: "Our dedicated support team is always ready to assist you, ensuring a smooth and satisfying experience",
  },
];
export const TestimoArray = [
  {
    id: 1,
    img: "/images/testimo1.svg",
    name: "Savannah Nguyen",
    company: "Apple",
    content:
      "Amazing session! Daniel helped me tremendously by sharing lots of practical tips and suggestions",
  },
  {
    id: 2,
    img: "/images/testimo2.svg",
    name: "Darrell Steward",
    company: "Gillette",
    content:
      "Peter was amazing! He shared wonderful tips, made the most out of our call, and was very attentive",
  },
  {
    id: 3,
    img: "/images/testimo1.svg",
    name: "Savannah Nguyen",
    company: "Apple",
    content:
      "Amazing session! Daniel helped me tremendously by sharing lots of practical tips and suggestions",
  },
  {
    id: 4,
    img: "/images/testimo3.svg",
    name: "Wade Warrer",
    company: "The Walt Disney Company",
    content:
      "Thank you so much - I can't believe how much we packed into a short conversation! Michael is so friendly",
  },
];

export const FeatureArray = [
  {
    id: 1,
    className: "bg-[#28408c] text-white",
    imgclassName: "bg-[#c5e2f2]",
    h3: "Cool Feature 1",
    p: "Things on a very small scale behave like nothing that you have any direct experience",
  },
  {
    id: 1,
    className: "bg-[#c4e4b9]",
    imgclassName: "bg-[#23856d]",
    h3: "Cool Feature 1",
    p: "Things on a very small scale behave like nothing that you have any direct experience",
  },
  {
    id: 1,
    className: "bg-[#de956c] text-white",
    imgclassName: "bg-[#ec5c2e]",
    h3: "Cool Feature 1",
    p: "Things on a very small scale behave like nothing that you have any direct experience",
  },
];

export const ProjectArray = [
  // {
  //   id: 1,
  //   img: project1,
  //   h3: "Landing Page",
  //   p: "A brief description of the project and its impact",
  //   active: false,
  // },
];

export const FooterArray = [
  {
    id: 1,
    h3: "company info",
    data: {
      p1: "about us",
      p2: "carrier",
      p3: "we are hiring",
      p4: "blog",
    },
  },
  {
    id: 1,
    h3: "legal",
    data: {
      p1: "about us",
      p2: "carrier",
      p3: "we are hiring",
      p4: "blog",
    },
  },
  {
    id: 1,
    h3: "features",
    data: {
      p1: "business marketing",
      p2: "user analytic",
      p3: "live chat",
      p4: "unlimited support",
    },
  },
  {
    id: 1,
    h3: "resources",
    data: {
      p1: "IOS & Android",
      p2: "watch a demo",
      p3: "customers",
      p4: "API",
    },
  },
];

export const MetaConfig = {
  title: "Future Solutions",
  description: `
  At Future Solutions, we specialize in creating bespoke software solutions that perfectly align with your
                business needs. Our team of experienced developers works closely with you to understand your
                requirements and deliver high-quality software that enhances your operational efficiency and drives
                growth. Whether you need a web application, a mobile app, or a desktop application, we have the
                expertise to bring your vision to life.
  `,
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
    other: {
      rel: "icon",
      url: "/favicon.png",
    },
  },
  alternates: { canonical: "https://futuresolutionsdev.com" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
  },
  keywords: [
    "Future Solutions",
    "Software Solutions",
    "Software Development",
    "Software Company",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "Material UI",
    "Figma",
    "Adobe XD",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Jira",
    "Trello",
    "Agile",
    "Scrum",
    "Kanban",
    "Jira",
    "Php",
    "Laravel",
    "Python",
    "Django",
    "Flask",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "C#",
    "C++",
    "C",
    "Java",
    "Cypress",
    "Jest",
    "Selenium",
    "Cucumber",
  ],
  twitter: {
    card: "summary_large_image",
    creator: "@Future Solutions",
    title: "Future Solutions",
    description: "Software Development Company",
    images: ["/favicon.png", "/images/fslogo.png"],
  },
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "Future Solutions",
    description: ` At Future Solutions, we specialize in creating bespoke software solutions that perfectly align with your
                business needs. Our team of experienced developers works closely with you to understand your
                requirements and deliver high-quality software that enhances your operational efficiency and drives
                growth. Whether you need a web application, a mobile app, or a desktop application, we have the
                expertise to bring your vision to life.`,
    siteName: "Future Solutions",
    images: [
      {
        url: "/images/fslogo.png",
      },
      {
        url: "/favicon.png",
      },
    ],
  },
  metadataBase: new URL("https://futuresolutionsdev.com"),
  publisher: "Future Solutions",
  referrer: "origin",
  manifest: "/manifest.json",
  classification: "SaaS",
}
