import { useOutletContext } from "react-router";
import type { job } from "../type/job";

type JobsContext = {
    jobs:job[];
    setJobs: React.Dispatch<React.SetStateAction<job[]>>;
};

export function useJob() {
    const {jobs, setJobs} = useOutletContext<JobsContext>();
    return {jobs, setJobs};
}
