import {useJob} from "../hooks/useJob"
import StartCard from "../component/StartCard"

function Dashboard() {
  const {jobs} = useJob();
  const total = jobs.length;
  const applied = jobs.filter((job)=>job.status=="Applied").length
  const rejected = jobs.filter((job)=>job.status=="Rejected").length
  const interview = jobs.filter((job)=>job.status=="Interview").length
  const offer = jobs.filter((job)=>job.status=="Offer").length


  return(<>
  <p style={{color:"#6b7280",margin:"12px",fontSize:"16px",fontWeight:"500"}}>Welcome back! Here is your job search overview!!</p>
  <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"4px",marginBottom:"24px",
    padding:"0 4px"
  }}>
    <StartCard title="Total Applications" value={total}></StartCard>
    <StartCard title="Applied" value={applied}></StartCard>
    <StartCard title="Interview" value={interview}></StartCard>
    <StartCard title="Offer" value={offer}></StartCard>
    <StartCard title="Rejected" value={rejected}></StartCard>

  </div>

  <div style={{background:"white",borderRadius:"16px",padding:"20px",
    border:"1px solid #e5e7eb",margin:"20px"
  }}>
    <h2>Recent Application</h2>

    <table style={{
      width:"100%",
      borderCollapse:"collapse"
    }}>
      <thead>
        <tr style={{textAlign:"center",color:"#6b7280"}}>
          <th style={{padding:"12px"}}>Company</th>
          <th style={{padding:"12px"}}>Position</th>
          <th style={{padding:"12px"}}>Status</th>
          <th style={{padding:"12px"}}>Applied On</th>
          <th style={{padding:"12px"}}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job)=>(
          <tr>
            <td style={{padding:"12px"}}>{job.company}</td>
            <td style={{padding:"12px"}}>{job.position}</td>
            <td style={{padding:"12px"}}>{job.status}</td>
            <td style={{padding:"12px"}}>{job.location}</td>
            <td style={{padding:"12px"}}>{job.dateApplied}</td>
            <td style={{padding:"12px"}}>{job.nextStep || "-"}</td>
            
          </tr>
          
        ))}
      </tbody>
    </table>
  </div>
  
  </>)
}

export default Dashboard