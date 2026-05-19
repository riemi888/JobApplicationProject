import type { job } from "../type/job";

const STORGE_KEY = "job-tracker-jobs";

export function saveJobs(jobs: job[]) {
  localStorage.setItem(STORGE_KEY, JSON.stringify(jobs));
}

export function loadJobs(): job[] {
    const data = localStorage.getItem(STORGE_KEY);
    if(!data){
        return [];
    }
    return JSON.parse(data) as job[];
}