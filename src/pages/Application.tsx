import StatusBadge from "../component/StatusBadge"
import { useState } from "react"
import JobFormModal from "../component/JobFormModal"
import { useJob } from "../hooks/useJob"
import type { job,jobStatus } from "../type/job"

const statusOptions:(jobStatus | "ALL")[] = ["Applied","Interview","Rejected","Offer","ALL"];

function Application() {

  const {jobs,setJobs} = useJob();
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [editingJob,setEditingJob] = useState<job | null>(null);

  const [search,setSearch] = useState("");
  const [statusFilter,setStatusFilter] = useState<jobStatus | "ALL">("ALL");
  const [sortOrder,setSortOrder] = useState("newest");

  function handleAddClick(){
    setIsModalOpen(true);
    setEditingJob(null);
  }

  function handleSubmit(job:job){
    if(editingJob){
      setJobs((prevJobs) => 
      prevJobs.map((item) =>(item.id === job.id ? job : item)))
  }else{
    setJobs((prevJobs) => [...prevJobs,job])
  }
}

  function handleEdit(job:job){
    setIsModalOpen(true);
    setEditingJob(job);
  }

  function handleDelete(job:job){
    setJobs((prevJobs) => prevJobs.filter((item) => item.id !== job.id))
  }

  const filteredJobs = jobs.filter((job) => {
    const keyword = search.toLowerCase();
    
    const matchSearch = job.company.toLowerCase().includes(keyword) || job.position.toLowerCase().includes(keyword) || job.location .toLowerCase().includes(keyword);
    const matchStatus = statusFilter === "ALL" || job.status === statusFilter;
    return matchSearch && matchStatus;
  }).sort((a,b) =>{
    if(sortOrder === "newest"){
      return (new Date(b.dateApplied).getTime() - new Date(a.dateApplied).getTime());
    }
    if(sortOrder === "oldest"){
      return (new Date(a.dateApplied).getTime() - new Date(b.dateApplied).getTime());
    }
    if(sortOrder === "company"){
      return a.company.localeCompare(b.company);
    }
    return 0;
  })

  
  return(<>
  <div>
  
    <button onClick={handleAddClick} style={{
      background:"#2563eb",
      color:"white",
      border:"none",
      padding:"10px 16px",
      borderRadius:"8px"
    }}>ADD APPLICATION</button>
  </div>
  
  <div>
    <input placeholder="Search company,position or location..." value={search}
    onChange={(e)=>setSearch(e.target.value)} style={{
      flex:1, 
      padding:"10px 12px",
      borderRadius:"8px",
      border:"1px solid #d1d5db",
      width:"50%"
    }}></input>

    <select value={statusFilter} onChange={(e)=>setStatusFilter(e.target.value as "ALL" | jobStatus)} style={{
      padding:"10px 12px",
      borderRadius:"8px",
      border:"1px solid #d1d5db",
      width:"150px",
      marginLeft:"10px"
    }}>
      {statusOptions.map((option)=><option key={option} value={option}>{option}</option>)}
      </select>

      <select value={sortOrder} onChange={(e)=>setSortOrder(e.target.value as "date" | "company")} style={{
      padding:"10px 12px",
      borderRadius:"8px",
      border:"1px solid #d1d5db",
      width:"150px",
      marginLeft:"10px"
    }}>
      <option value="newest">Newest</option>
      <option value="newest">Oldest</option>
      <option value="newest">Company</option>
    </select>
  </div>

  <div>
    <table style={{width:"100%",borderCollapse:"collapse"}}>
      <thead>
        <tr style={{textAlign:"center",color:"#6b7280"}}>
          <th style={{ padding: "12px" }}>Company</th>
            <th style={{ padding: "12px" }}>Position</th>
            <th style={{ padding: "12px" }}>Location</th>
            <th style={{ padding: "12px" }}>Status</th>
            <th style={{ padding: "12px" }}>Date Applied</th>
            <th style={{ padding: "12px" }}>Next Step</th>
        </tr>
      </thead>
      <tbody>
        
          {filteredJobs.length === 0 ? (
            <tr>
              <td colSpan={7} style={{
                padding:"40px",
                textAlign:"center",
                color:"#6b7280"
              }}>
                No jobs found.
              </td>
            </tr>
          )
           :
          
          (filteredJobs.map((job)=>(
            <tr style={{
              borderTop:"1px solid #e5e7eb"
            }}>
              <td style={{padding:"12px"}}>{job.company}</td>
              <td style={{padding:"12px"}}>{job.position}</td>
              <td style={{padding:"12px"}}>{job.location}</td>
              <td style={{padding:"12px"}}><StatusBadge status={job.status}/></td>
              <td style={{padding:"12px"}}>{job.dateApplied}</td>
              <td style={{padding:"12px"}}>{job.nextStep || "-"}</td>
              <button onClick={()=>handleDelete(job)}>Delete</button>
              <button onClick={()=>handleEdit(job)}>Edit</button>
            </tr>
          ))
        )}
      </tbody>
    </table>

    <JobFormModal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} onSubmit={handleSubmit} editingJob={editingJob}></JobFormModal>
  </div>
  </>)
}

export default Application