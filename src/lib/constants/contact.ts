export const CONTACT_META = {
  title: 'CONTACT',
  tagline: 'START A CONVERSATION',
  description: 'Get in touch with the Twofold Tech lab. We respond to all inquiries within 24 hours.',
};

export interface ContactMethod {
  label: string;
  value: string;
  icon: string;
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    label: 'EMAIL',
    value: 'hello@twofold.tech',
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
    label: 'STUDIO ACCESS',
    value: 'studio',
    description: 'Request access to STUDIO_OS platform',
  },
  {
    label: 'ALLOY DEMO',
    value: 'alloy',
    description: 'Schedule a migration engine demonstration',
  },
  {
    label: 'CONSULTING',
    value: 'consulting',
    description: 'Enterprise modernization services',
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
