
type StartCardProps = {
    title:string,
    description?:string,
    value:number
}

function StartCard({title,description,value}:StartCardProps){
    return(
        <div style={{
            background:"white",
            borderRadius:"16px",
            padding:"20px",
            border:"1px solid #e5e7eb"
        }}>
            <p style={{fontSize:"20px",fontWeight:"bold",margin:0}}>{title}</p>
            <h2 style={{fontSize:"24px",fontWeight:"bold",margin:"12px 0 4px"}}>{value}</h2>
            {description && <p style={{fontSize:"16px",margin:0,color:"#10b981"}}>{description}</p>}
            
        </div>
    )
}

export default StartCard