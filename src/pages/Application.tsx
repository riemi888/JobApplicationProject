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
  <div className="space-y-6">
  
    <button onClick={handleAddClick} className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">ADD APPLICATION</button>
  </div>
  
  <div>
    <input placeholder="Search company,position or location..." value={search}
    onChange={(e)=>setSearch(e.target.value)} 
    className="flex-1 rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"></input>

    <select value={statusFilter} onChange={(e)=>setStatusFilter(e.target.value as "ALL" | jobStatus)} className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
      {statusOptions.map((option)=><option key={option} value={option}>{option}</option>)}
      </select>

      <select value={sortOrder} onChange={(e)=>setSortOrder(e.target.value as "date" | "company")} 
        className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="company">Company</option>
    </select>
  </div>

  <div className="overflow-hidden rounded-xl border border-slate-200">
    <table className="w-full border-collapse text-sm">
      <thead className="bg-slate-50 text-left text-slate-500">
        <tr>
          <th className="px-4 py-3 font-medium">Company</th>
            <th className="px-4 py-3 font-medium">Position</th>
            <th className="px-4 py-3 font-medium">Location</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Date Applied</th>
            <th className="px-4 py-3 font-medium">Next Step</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200">
        
          {filteredJobs.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-12 text-center text-slate-500">
                No jobs found.
              </td>
            </tr>
          )
           :
          
          (filteredJobs.map((job)=>(
            <tr className="transition hover:bg-slate-50">
              <td className="px-4 py-3 font-semibold text-slate-900">{job.company}</td>
              <td className="px-4 py-3 text-slate-600">{job.position}</td>
              <td className="px-4 py-3 text-slate-600">{job.location}</td>
              <td className="px-4 py-3"><StatusBadge status={job.status}/></td>
              <td className="px-4 py-3 text-slate-600">{job.dateApplied}</td>
              <td className="px-4 py-3 text-slate-600">{job.nextStep || "-"}</td>
              <button onClick={()=>handleDelete(job)}
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100">Delete</button>
              <button onClick={()=>handleEdit(job)} 
                className="rounded-lg border border-rose-200 px-3 py-1.5 text-xs font-medium text-rose-600 transition hover:bg-rose-50">Edit</button>
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