import type { job, jobStatus } from "../type/job";
import BoardCard from "./BoardCard";

type BoardColumnProps = {
  title: jobStatus;
  jobs: job[];
  onStatusChange: (id: string, status: jobStatus) => void;
};

function BoardColumn({ title, jobs, onStatusChange }: BoardColumnProps) {
  return (
    <section className="min-w-70 flex-1 rounded-2xl border border-slate-200 bg-slate-100/70 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold text-slate-800">{title}</h2>

        <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 shadow-sm">
          {jobs.length}
        </span>
      </div>

      <div className="space-y-3">
        {jobs.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white/60 p-6 text-center text-sm text-slate-400">
            No applications
          </div>
        ) : (
          jobs.map((job) => (
            <BoardCard
              key={job.id}
              job={job}
              onStatusChange={onStatusChange}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default BoardColumn;