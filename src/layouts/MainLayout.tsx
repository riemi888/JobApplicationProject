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
    return(<div style={
        {display:"flex",
        minHeight:"100vh",
        backgroundColor:"rgba(118, 165, 199, 0.5)",
        }
    }>
        <Sidebar></Sidebar>
        <div style={{flex:1}}>
            <Navbar></Navbar>
            <main style={
                {padding:"24px"}
            }>
                <Outlet context={{jobs,setJobs}}></Outlet>
            </main>
            
        </div>

    </div>)
}

export default MainLayout