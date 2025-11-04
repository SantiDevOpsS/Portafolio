import { Link } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope } from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>El Santi</h2>
      <nav>
        <Link to="/">
          <FaHome style={{ marginRight: "10px" }} />
          Dashboard
        </Link>
        <Link to="/projects">
          <FaProjectDiagram style={{ marginRight: "10px" }} />
          Proyectos
        </Link>
        <Link to="/about">
          <FaUser style={{ marginRight: "10px" }} />
          Sobre mí
        </Link>
        <Link to="/contact">
          <FaEnvelope style={{ marginRight: "10px" }} />
          Contacto
        </Link>
      </nav>
    </aside>
  )
}
