export const CONTACT_META = {
  title: 'CONTACT',
  tagline: 'START A CONVERSATION',
  description: 'Request Conduit beta access, discuss advisory engagement, or get guidance on deterministic orchestration with STUDIO.',
};

export interface ContactMethod {
  label: string;
  value: string;
  icon: string;
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    label: 'EMAIL',
    value: 'contact@twofold.tech',
    icon: 'mail',
  },
  {
    label: 'LOCATION',
    value: 'Remote-First / Global',
    icon: 'map-pin',
  },
  {
    label: 'RESPONSE TIME',
    value: '< 24 Hours',
    icon: 'clock',
  },
];

export interface InquiryType {
  label: string;
  value: string;
  description: string;
}

export const INQUIRY_TYPES: InquiryType[] = [
  {
    label: 'CONDUIT BETA',
    value: 'conduit',
    description: 'Request Conduit beta access for unified CMS integration',
  },
  {
    label: 'ADVISORY',
    value: 'advisory',
    description: 'Architecture reviews, CMS strategy, and AI orchestration guidance',
  },
  {
    label: 'STUDIO OSS',
    value: 'studio',
    description: 'Open-source orchestration support or implementation help',
  },
  {
    label: 'PARTNERSHIP',
    value: 'partnership',
    description: 'Technology or business partnership',
  },
  {
    label: 'OTHER',
    value: 'other',
    description: 'General inquiry',
  },
];
