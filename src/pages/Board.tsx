import BoardColumn from "../component/BoardColumn";
import { useJob } from "../hooks/useJob";
import type { job, jobStatus } from "../type/job";

const columns: jobStatus[] = ["Applied","Interview","Offer","Rejected"];
function Board() {
  const {jobs,setJobs} = useJob();

  function handleStatusChange(id:string,status:jobStatus){
    setJobs((prevJobs)=>prevJobs.map((job)=>job.id === id ? {...job,status} : job))
  }
  return(<>
  <div>
      
      <p style={{
        color:"#6b7280",
        marginBottom:"24px"
      }}>
        Visualize your job application progress.
      </p>
      <div style={{
        display:"flex",
        gap:"16px",
        overflowX:"auto",
      }}>
        {columns.map((column)=>(<BoardColumn key={column} title={column}
        onStatusChange={handleStatusChange} jobs={jobs.filter((job)=>job.status === column)}/>))}
      </div>
    </div>
  </>)
}

export default Board