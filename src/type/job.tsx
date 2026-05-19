export type jobStatus = "Applied" | "Interview" | "Rejected" | "Offer";

export type job = {
  id: string;
  company: string;
  position: string;
  location: string;
  jobType: string;
  status: jobStatus;
  dateApplied: string;
  nextStep?: string;
  nextStepDate?: string;
  jobLink?: string;
  salary?: string;
  notes?: string;

}