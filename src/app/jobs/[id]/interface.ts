export interface SingleJobI {
  id: string;
  premium: boolean;
  billing_type: BillingType;
  relations: any[];
  name: string;
  insider_interview: any;
  response_letter_required: boolean;
  area: Area;
  salary: any;
  type: Type;
  address: Address;
  allow_messages: boolean;
  experience: Experience;
  schedule: Schedule;
  employment: Employment;
  department: any;
  contacts: any;
  description: string;
  branded_description: any;
  vacancy_constructor_template: any;
  key_skills: any[];
  accept_handicapped: boolean;
  accept_kids: boolean;
  archived: boolean;
  response_url: any;
  specializations: any[];
  professional_roles: ProfessionalRole[];
  code: any;
  hidden: boolean;
  quick_responses_allowed: boolean;
  driver_license_types: any[];
  accept_incomplete_resumes: boolean;
  employer: Employer;
  published_at: string;
  created_at: string;
  initial_created_at: string;
  negotiations_url: any;
  suitable_resumes_url: any;
  apply_alternate_url: string;
  has_test: boolean;
  test: any;
  alternate_url: string;
  working_days: any[];
  working_time_intervals: any[];
  working_time_modes: any[];
  accept_temporary: boolean;
  languages: any[];
  approved: boolean;
}

interface BillingType {
  id: string;
  name: string;
}

interface Area {
  id: string;
  name: string;
  url: string;
}

interface Type {
  id: string;
  name: string;
}

interface Address {
  city: string;
  street: string;
  building: string;
  lat: number;
  lng: number;
  description: any;
  raw: string;
  metro: any;
  metro_stations: any[];
}

interface Experience {
  id: string;
  name: string;
}

interface Schedule {
  id: string;
  name: string;
}

interface Employment {
  id: string;
  name: string;
}

interface ProfessionalRole {
  id: string;
  name: string;
}

interface Employer {
  id: string;
  name: string;
  url: string;
  alternate_url: string;
  logo_urls: LogoUrls | null;
  vacancies_url: string;
  accredited_it_employer: boolean;
  trusted: boolean;
}

interface LogoUrls {
  "90": string;
  "240": string;
  original: string;
}
