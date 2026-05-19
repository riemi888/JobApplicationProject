import type {jobStatus} from '../type/job'

type StatusBadgeProps = {
    status: jobStatus
};

function StatusBadge({status}: StatusBadgeProps) {
    const styles: Record<jobStatus,React.CSSProperties>={
    Applied:{
        background: "#dbeafe",
        color: "#1d4ed8",
    },
    Interview: {
      background: "#ffedd5",
      color: "#c2410c",
    },
    Offer: {
      background: "#dcfce7",
      color: "#15803d",
    },
    Rejected: {
      background: "#fee2e2",
      color: "#b91c1c",
    },
    }
    return(
        <span style={{
            ...styles[status],
            padding:"4px 10px",
            borderRadius:"999px",
            fontSize:"12px",
            fontWeight:600
        }}>{status}</span>
    )
}

export default StatusBadge