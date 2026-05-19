import type {job,jobStatus} from "../type/job";
import StatusBadge from "./StatusBadge";

type BoardCardProps = {
    job: job,
    onStatusChange: (job: string, status: jobStatus) => void;
}

const statusOptions: jobStatus[] = ["Applied", "Interview", "Offer", "Rejected"];

const BoardCard = ({job, onStatusChange}: BoardCardProps) => {
    return(<div
    style={{
        background:"white",
        borderRadius:"12px",
        padding:"14px",
        border:"1px solid #e5e7eb",
        marginBottom:"12px"
    }}>
        <div style={{
            width:"36px",
            height:"36px",
            borderRadius:"10px",
            background:"#eff6ff",
            color:"#2563eb",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            fontWeight:700,
            marginBottom:"10px"
        }}>
            {job.company.charAt(0)}
        </div>
        <h3 style={{margin:"0 0 4px"}}>{job.position}</h3>
        <p style={{margin:"0 0 10px",color:"#6b7280"}}>
            {job.company}
        </p>
        <StatusBadge status={job.status} />
        <p style={{
            fontSize:"13px",
            color:"#6b7280",
            marginTop:"10px"
        }}>
            Applied:{job.dateApplied}
        </p>
        <select
        value={job.status}
        onChange={(e)=>{onStatusChange(job.id,e.target.value as jobStatus)
            //console.log("select change:", job.id, e.target.value);
        }
            
        }
        style={{
            width:"100%",
            marginTop:"10px",
            padding:"8px",
            borderRadius:"8px",
            border:"1px solid #d1d5db"
        }}>
            {statusOptions.map((status)=>(<option key={status} value={status}>Move to {status}</option>))}
        </select>
    </div>)
    
}

export default BoardCard;