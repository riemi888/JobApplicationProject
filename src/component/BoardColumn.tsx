import type {job,jobStatus} from '../type/job'
import BoardCard from './BoardCard';

type BoardColumnProps = {
    title:jobStatus;
    jobs:job[];
    onStatusChange:(job:string,status:jobStatus)=>void;
};

function BoardColumn({title,jobs,onStatusChange}:BoardColumnProps) {
    return (
        <div style={{
            background:"#f9fafb",
            borderRadius:"16px",
            padding:"14px",
            minWidth:"260px",
            border:"1px solid #e5e7eb"
        }}>
            <div
            style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                marginBottom:"16px"
            }}>
                <h2 style={{fontSize:"16PX",margin:0}}>{title}</h2>
                <span style={{
                    background:"#e5e7eb",
                    padding:"2px 8px",
                    borderRadius:"999px",
                    fontSize:"12px"
                }}>{jobs.length}</span>
            </div>

            {jobs.length === 0 ? (
                <p style={{
                    color:"#9ca3af",
                    fontSize:"14px",
                    textAlign:"center",
                    padding:"20px 0"
                }}>No Applications</p>
            ) : (jobs.map((job)=><BoardCard key={job.id} job={job} onStatusChange={onStatusChange} />))}
        </div>
    )
}
export default BoardColumn;