interface MetaInfo {
  title: string;
  description: string;
  keywords: string;
}

const meta: Record<string, MetaInfo> = {
  '/': {
    title: 'Haixun Global Logistics (Shenzhen) Co., Ltd. – Neutral LCL Consolidation',
    description:
      'Neutral LCL consolidation provider based in Oud Metha, Dubai with CFS in Jebel Ali. Expanded to Saudi Arabia (Dammam, Riyadh, Jeddah) with bonded warehouses in Jeddah & Dammam. Backed by 40+ professionals and the CWN global network.',
    keywords:
      'Haixun Global Logistics, neutral LCL, consolidation, Jebel Ali CFS, Oud Metha Dubai, bonded warehouse, Dammam, Riyadh, Jeddah, CWN network, logistics UAE KSA',
  },

  '/contact': {
    title: 'Contact Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Get in touch with Haixun Global Logistics (Shenzhen) Co., Ltd. for neutral LCL consolidation, CFS operations, and regional logistics support across the UAE and Saudi Arabia.',
    keywords:
      'contact Haixun, logistics support, UAE logistics, Saudi logistics, LCL, CFS',
  },

  '/services': {
    title: 'Services – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Explore Haixun Global Logistics’ core services including neutral LCL consolidation, CFS operations, warehousing, project cargo and more.',
    keywords:
      'Haixun services, neutral LCL, CFS, warehousing, project cargo, logistics',
  },

  // --- Your primary services ---
  '/services/lcl': {
    title: 'LCL Consolidation – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Neutral LCL consolidation with reliable sailings, competitive rates, and CWN-backed global reach from Dubai and KSA.',
    keywords:
      'LCL, less than container load, neutral consolidator, Dubai LCL, Jebel Ali LCL, CWN',
  },
  '/services/cfs': {
    title: 'CFS Operations – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Modern CFS at Jebel Ali supported by bonded warehouses in Jeddah and Dammam for faster throughput and reliable schedules.',
    keywords:
      'CFS, container freight station, Jebel Ali, bonded warehouse, Jeddah, Dammam',
  },

  // --- Existing routes rebranded ---
  '/services/sea-freight': {
    title: 'Sea Freight – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Cost-effective FCL/LCL sea freight with dependable schedules across major tradelanes.',
    keywords:
      'sea freight, ocean shipping, FCL, LCL, logistics UAE, logistics KSA',
  },
  '/services/air-freight': {
    title: 'Air Freight – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Fast and reliable air cargo solutions for time-critical shipments, backed by regional expertise.',
    keywords:
      'air freight, air cargo, express shipping, UAE, KSA',
  },
  '/services/customs-clearance': {
    title: 'Customs Clearance – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Efficient customs brokerage and documentation across UAE and Saudi Arabia.',
    keywords:
      'customs clearance, brokerage, import export, GCC compliance',
  },
  '/services/warehousing': {
    title: 'Warehousing – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Secure storage, inventory control, and value-added services with bonded options in Jeddah and Dammam.',
    keywords:
      'warehousing, bonded warehouse, storage, VAS, Jeddah, Dammam',
  },
  '/services/consolidation': {
    title: 'Cargo Consolidation – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Optimize shipments with multi-origin consolidation and hub-and-spoke solutions.',
    keywords:
      'cargo consolidation, multi-origin, hub and spoke, LCL',
  },
  '/services/project-cargo': {
    title: 'Project Cargo – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'End-to-end handling for oversized and complex moves across the region.',
    keywords:
      'project cargo, heavy lift, OOG, logistics projects',
  },
  '/services/liquid-cargo': {
    title: 'Liquid Cargo – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Safe and compliant liquid cargo transport with specialized handling.',
    keywords:
      'liquid cargo, ISO tank, bulk liquids, chemical logistics',
  },
  '/services/third-party-logistics': {
    title: 'Third-Party Logistics (3PL) – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Flexible 3PL solutions integrating warehousing, distribution, and value-added services.',
    keywords:
      '3PL, third party logistics, fulfillment, distribution',
  },
  '/services/liner-agency': {
    title: 'Liner Agency – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Professional liner representation and port operations support across key GCC gateways.',
    keywords:
      'liner agency, port operations, shipping lines, GCC',
  },

  '/global-presence': {
    title: 'Global Presence – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Our footprint spans the UAE and Saudi Arabia with CWN network coverage worldwide.',
    keywords:
      'global presence, UAE, Saudi Arabia, CWN, logistics network',
  },

  '/about-us': {
    title: 'About Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Neutral LCL specialist headquartered in Oud Metha, Dubai with CFS in Jebel Ali. 40+ professionals and 9 years of growth powered by the CWN network.',
    keywords:
      'about Haixun, neutral LCL, Jebel Ali CFS, CWN network, Dubai logistics',
  },

  '/gallery': {
    title: 'Gallery – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'A look at our consolidation, CFS operations, and project handling in the region.',
    keywords:
      'gallery, logistics images, CFS, LCL operations',
  },

  '/career': {
    title: 'Careers – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Join a growing regional consolidator and build your logistics career.',
    keywords:
      'careers, logistics jobs, UAE jobs, Saudi jobs',
  },

  '/blog': {
    title: 'Insights – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Logistics insights, updates, and regional trade news.',
    keywords:
      'logistics blog, trade updates, shipping news',
  },

  '/news': {
    title: 'News – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Company announcements and regional logistics updates.',
    keywords:
      'logistics news, GCC updates',
  },

  '/projects': {
    title: 'Projects – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Selected logistics projects and case studies showcasing our regional capabilities.',
    keywords:
      'projects, case studies, logistics projects',
  },

  '/privacy-policy': {
    title: 'Privacy Policy – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description: 'Read how Haixun Global Logistics protects your data and privacy.',
    keywords:
      'privacy policy, data protection, Haixun Global Logistics',
  },

  '/terms-and-conditions': {
    title: 'Terms & Conditions – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description:
      'Terms for using Haixun Global Logistics services and this website.',
    keywords:
      'terms and conditions, policies, Haixun Global Logistics',
  },

  '/login': {
    title: 'Login – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description: 'Access your Haixun account and shipment information.',
    keywords: 'login, account, Haixun',
  },
  '/signup': {
    title: 'Sign Up – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description: 'Create your Haixun account to manage bookings and documents.',
    keywords: 'signup, register, Haixun account',
  },
  '/forgot-password': {
    title: 'Forgot Password – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description: 'Reset your Haixun account password.',
    keywords: 'password reset, account recovery, Haixun',
  },

  '/dashboard': {
    title: 'Dashboard – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description: 'Manage shipments, documents, and invoices in your Haixun dashboard.',
    keywords: 'dashboard, shipments, documents, Haixun',
  },

  '/admin-login': {
    title: 'Admin Login – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description: 'Administrative access to Haixun systems.',
    keywords: 'admin login, Haixun admin',
  },
  '/admin-dashboard': {
    title: 'Admin Dashboard – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description: 'Administration panel for Haixun operations.',
    keywords: 'admin dashboard, management, Haixun',
  },
  '/admin': {
    title: 'Admin Dashboard – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description: 'Administration panel for Haixun operations.',
    keywords: 'admin dashboard, management, Haixun',
  },

  '/blog-editor': {
    title: 'Blog Editor – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description: 'Create and edit blog posts.',
    keywords: 'blog editor, CMS, Haixun',
  },
  '/blog-admin': {
    title: 'Blog Admin – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description: 'Administer blog content.',
    keywords: 'blog admin, content management, Haixun',
  },

  '/not-found': {
    title: 'Page Not Found – Haixun Global Logistics (Shenzhen) Co., Ltd.',
    description: 'The page you’re looking for could not be found.',
    keywords: '404, not found, Haixun',
  },
};

export default meta;
