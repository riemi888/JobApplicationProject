import { useEffect, useState } from "react";
import type { job, jobStatus } from "../type/job";

type JobFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (job: job) => void;
  editingJob?: job | null;
};

const statusOptions: jobStatus[] = [
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
];

function JobFormModal({
  isOpen,
  onClose,
  onSubmit,
  editingJob,
}: JobFormModalProps) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [status, setStatus] = useState<jobStatus>("Applied");
  const [dateApplied, setDateApplied] = useState("");
  const [nextStep, setNextStep] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setCompany(editingJob?.company || "");
    setPosition(editingJob?.position || "");
    setLocation(editingJob?.location || "");
    setJobType(editingJob?.jobType || "");
    setStatus(editingJob?.status || "Applied");
    setDateApplied(editingJob?.dateApplied || "");
    setNextStep(editingJob?.nextStep || "");
    setNotes(editingJob?.notes || "");
  }, [editingJob, isOpen]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const job: job = {
      id: editingJob?.id || crypto.randomUUID(),
      company,
      position,
      location,
      jobType,
      status,
      dateApplied,
      nextStep,
      notes,
    };

    onSubmit(job);
    onClose();
  }

  const inputClass =
    "w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {editingJob ? "Edit Application" : "Add Application"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {editingJob
                ? "Update the details of this job application."
                : "Create a new job application record."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-2 py-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Company
              </label>
              <input
                placeholder="Google"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Position
              </label>
              <input
                placeholder="Frontend Developer"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Location
              </label>
              <input
                placeholder="Melbourne"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Job Type
              </label>
              <input
                placeholder="Full-time"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as jobStatus)}
                className={inputClass}
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Date Applied
              </label>
              <input
                type="date"
                value={dateApplied}
                onChange={(e) => setDateApplied(e.target.value)}
                required
                className={inputClass}
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Next Step
              </label>
              <input
                placeholder="Technical Interview"
                value={nextStep}
                onChange={(e) => setNextStep(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Notes
              </label>
              <textarea
                placeholder="Add notes about this application..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className={`${inputClass} min-h-24 resize-none`}
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t border-slate-200 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              {editingJob ? "Save Changes" : "Add Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobFormModal;