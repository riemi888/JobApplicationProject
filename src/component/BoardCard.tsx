import type { job, jobStatus } from "../type/job";
import StatusBadge from "./StatusBadge";

type BoardCardProps = {
  job: job;
  onStatusChange: (id: string, status: jobStatus) => void;
};

const statusOptions: jobStatus[] = [
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
];

function BoardCard({ job, onStatusChange }: BoardCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600">
            {job.company.charAt(0)}
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">{job.company}</h3>
            <p className="text-sm text-slate-500">{job.location}</p>
          </div>
        </div>
      </div>

      <p className="mb-3 text-sm font-medium text-slate-700">
        {job.position}
      </p>

      <StatusBadge status={job.status} />

      <div className="mt-4 space-y-2 text-sm text-slate-500">
        <p>Applied: {job.dateApplied}</p>
        <p>Next: {job.nextStep || "No next step"}</p>
      </div>

      <select
        value={job.status}
        onChange={(e) =>
          onStatusChange(job.id, e.target.value as jobStatus)
        }
        className="mt-4 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      >
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            Move to {status}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BoardCard;