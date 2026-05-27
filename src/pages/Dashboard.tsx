import {useJob} from "../hooks/useJob"
import StartCard from "../component/StartCard"
import StatusBadge from "../component/StatusBadge";

function Dashboard() {
  const {jobs} = useJob();
  const total = jobs.length;
  const applied = jobs.filter((job)=>job.status=="Applied").length
  const rejected = jobs.filter((job)=>job.status=="Rejected").length
  const interview = jobs.filter((job)=>job.status=="Interview").length
  const offer = jobs.filter((job)=>job.status=="Offer").length


  return(<>
  <p className="mt-1 text-slate-500">Welcome back! Here is your job search overview!!</p>
  <div className="grid gap-4 grid-cols-5">
    <StartCard title="Total Applications" value={total}></StartCard>
    <StartCard title="Applied" value={applied}></StartCard>
    <StartCard title="Interview" value={interview}></StartCard>
    <StartCard title="Offer" value={offer}></StartCard>
    <StartCard title="Rejected" value={rejected}></StartCard>

  </div>

  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <h2>Recent Application</h2>

    <table className="w-full border-collapse text-sm">
      <thead className="bg-slate-50 text-left text-slate-500">
        <tr>
          <th className="px-4 py-3 font-medium">Company</th>
          <th className="px-4 py-3 font-medium">Position</th>
          <th className="px-4 py-3 font-medium">Status</th>
          <th className="px-4 py-3 font-medium">Applied On</th>
          <th className="px-4 py-3 font-medium">Actions</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job)=>(
          <tr key={job.id} className="hover:bg-slate-50">
            <td className="px-4 py-3 font-medium text-slate-900">{job.company}</td>
            <td className="px-4 py-3 text-slate-600">{job.position}</td>
            <td className="px-4 py-3"><StatusBadge status={job.status} /></td>
            <td className="px-4 py-3 text-slate-600">{job.location}</td>
            <td className="px-4 py-3 text-slate-600">{job.dateApplied}</td>
            <td className="px-4 py-3 text-slate-600">{job.nextStep || "-"}</td>
            
          </tr>
          
        ))}
      </tbody>
    </table>
  </div>
  
  </>)
}

export default Dashboard