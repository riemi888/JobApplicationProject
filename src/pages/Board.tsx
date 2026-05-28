import BoardColumn from "../component/BoardColumn";
import { useJob } from "../hooks/useJob";
import type { jobStatus } from "../type/job";

const columns: jobStatus[] = [
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
];

function Board() {
  const { jobs, setJobs } = useJob();

  function handleStatusChange(id: string, status: jobStatus) {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, status } : job
      )
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Board</h1>

        <p className="mt-1 text-slate-500">
          Visualize and manage your job application pipeline.
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map((status) => (
          <BoardColumn
            key={status}
            title={status}
            jobs={jobs.filter((job) => job.status === status)}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;