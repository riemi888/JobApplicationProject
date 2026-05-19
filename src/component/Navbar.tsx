function Navbar(){
    return(
        <div className="navbar" style={
            {
                height:"70px",
                background:"white",
                borderBottom: "1px solid #ddd",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                padding:"0 24px"
            }
        }>
            <div className="search">
                <input type="text" style={{
                padding: "10px",
                width:"240px"
            }} placeholder="Search"/>
            <button style={{
                padding:"10px 16px",
                background:"#694fbe",
                color:"white",
                border:"none",
                borderRadius:"8px",
                height:"40px",
            }}>Add Application</button>
            </div>
           
        </div>
    )
}

export default Navbar