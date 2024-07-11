export interface JobPosting {
    id: number;
    title: string;
    company_name: string;
    company_logo: string;
    workplace_type: string;
    job_type: string;
    skills: { id: number; name: string }[];
    description: string;
    department_id: string;
    position_id: string;
    location: string;
    closing_date: string;
    createdBy: number;
  }
  