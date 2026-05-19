import { Link } from 'react-router-dom';
function Sidebar() {
  return (
      
      <div className="sideBar" style={
        {
          width: "250px",
          background:"#111827",
          color: "white",
          padding: "24px"
        }
      }>
        <div className="icon">
          <img src="/public/favicon.svg" alt="icon1"></img>
        </div>
        
        <h2 style={{color:"white"}}>JobTacker</h2>
        <nav className="nav" style={
          {display:"flex",
            flexDirection:"column",
            gap:"24px",
            marginTop: "64px",
          }
        }>
          <Link to="/">Dashboard</Link>
          <Link to="application">Application</Link>
          <Link to="board">Board</Link>
          <Link to="/">Calendar</Link>
          <Link to="/">Analytics</Link>
          <Link to="/">Documents</Link>
          <Link to="/">Setting</Link>
        </nav>
      </div>
      
  )
  
}

export default Sidebar