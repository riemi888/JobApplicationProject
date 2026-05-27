import type {jobStatus} from '../type/job'

type StatusBadgeProps = {
    status: jobStatus
};

function StatusBadge({status}: StatusBadgeProps) {
    const styles: Record<jobStatus,String>={
    Applied: "bg-blue-50 text-blue-700 ring-blue-600/20",
    Interview: "bg-orange-50 text-orange-700 ring-orange-600/20",
    Offer: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    Rejected: "bg-rose-50 text-rose-700 ring-rose-600/20",
    }
    return(
        <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${styles[status]}`}
    >
      {status}
    </span>
    )
}

export default StatusBadge