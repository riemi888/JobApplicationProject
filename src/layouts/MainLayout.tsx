import { Outlet } from "react-router"
import { useEffect,useState } from "react"
import Sidebar from "../component/Sidebar"
import Navbar from "../component/Navbar"

import type {job} from "../type/job"
import { sampleJobs } from "../data/sampleJobs"
import { loadJobs, saveJobs } from "../utils/stroge"

function MainLayout(){
    const [jobs,setJobs] = useState<job[]>(() =>{
        const savedJobs = loadJobs();
        return savedJobs.length>0 ? savedJobs : sampleJobs;
    });
    useEffect(()=>{
        saveJobs(jobs);
    },[jobs])
    return(<div className="flex min-h-screen bg-slate-50"
    >
        <Sidebar></Sidebar>
        <div className="flex-1">
            <Navbar></Navbar>
            <main className="p-6">
                <Outlet context={{jobs,setJobs}}></Outlet>
            </main>
            
        </div>

    </div>)
}

export default MainLayout