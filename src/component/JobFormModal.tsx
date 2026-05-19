import { useState, type CSSProperties } from "react";
import type {job,jobStatus} from "../type/job"

type jobFormModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (job: job) => void;
    editingJob?: job | null;
};

const statusOptions: jobStatus[] = [
    "Applied", "Interview", "Offer", "Rejected"];

const inputStyle: CSSProperties = {
    width: "100%",
    padding: "10px",
    fontSize: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
};

const selectStyle: CSSProperties = {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
}
function JobFormModal({ isOpen, onClose, onSubmit, editingJob }: jobFormModalProps) {
    const [company, setCompany] = useState(editingJob?.company || "");
    const [position, setPosition] = useState(editingJob?.position || "");
    const [location, setLocation] = useState(editingJob?.location || "");
    const [jobType, setJobType] = useState(editingJob?.jobType || "");
    const [status, setStatus] = useState(editingJob?.status || "Applied");
    const [dateApplied, setDateApplied] = useState(editingJob?.dateApplied || "");
    const [nextStep, setNextStep] = useState(editingJob?.nextStep || "");
    const [notes, setNotes] = useState(editingJob?.notes || "");
    if(!isOpen) return null;

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const jobData: job = {
            id: editingJob?.id || Date.now().toString(),
            company,
            position,
            location,
            jobType,
            status,
            dateApplied,
            nextStep,
            notes
        };
        onSubmit(jobData);
        onClose();
    }

    return(
        <div style={{
            position:"fixed",
            inset:0,
            background:"rgba(0,0,0,0,0.45)",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            zIndex:100
        }}>
            <div style={{
                background:"white",
                width:"520px",
                borderRadius:"16px",
                padding:"24px"
            }}>
                <h2>{editingJob ? "Edit Job" : "Add Job"}</h2>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Company" 
                    value={company} 
                    onChange={(e)=>setCompany(e.target.value)}
                    required
                    style={inputStyle}
                    ></input>
                    <input placeholder="Position" 
                    value={position} 
                    onChange={(e)=>setPosition(e.target.value)}
                    required
                    style={inputStyle}
                    ></input>
                    <input
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    style={inputStyle}
                    />

                    <input
                    placeholder="Job Type"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    style={inputStyle}
                    />

                    <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as jobStatus)}
                    style={selectStyle}>
                        {statusOptions.map((status)=>(
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>

                    <input 
                    type="date" value={dateApplied}
                    onChange={(e)=>setDateApplied(e.target.value)}
                    required
                    style={inputStyle}></input>

                    <input 
                    placeholder="Next Step"
                    value={nextStep}
                    onChange={(e)=>setNextStep(e.target.value)}
                    style={inputStyle}></input>

                    <textarea 
                    placeholder="Notes"
                    value={notes}
                    onChange={(e)=>setNotes(e.target.value)}
                    style={{
                        ...inputStyle,
                        height:"80px",
                        resize:"none"
                    }}></textarea>

                    <div
                    style={{
                        display:"flex",
                        justifyContent:"flex-end",
                        gap:"12px",
                        marginTop:"16px"
                    }}>
                        <button type="button" onClick={onClose}>Cancel</button>
                        <button type="submit" style={{
                            background:"#2563eb",
                            color:"white",
                            border:"none",
                            padding:"10px 16px",
                            borderRadius:"8px"
                        }}>{editingJob ? "Update" : "Create"}</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default JobFormModal