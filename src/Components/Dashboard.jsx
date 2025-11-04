import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaGithub,
  FaCalendarAlt,
  FaCheckCircle,
  FaRocket,
  FaBug,
  FaDatabase,
} from "react-icons/fa";
import "./Dashboard.css";

export default function Dashboard() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
    hover: {
      y: -6,
      scale: 1.03,
      boxShadow: "0 6px 20px rgba(96,165,250,0.35)",
      transition: { type: "spring", stiffness: 200 },
    },
  };

  const activities = [
    {
      icon: <FaRocket />,
      title: "Proyecto 'Ken-Chop-Love' actualizado",
      desc: "Se agregaron mejoras visuales y autenticación con CSV.",
      date: "Hace 2 días",
    },
    {
      icon: <FaDatabase />,
      title: "Optimización SQL en SAP B1",
      desc: "Consulta de pagos y devoluciones mejorada para ORCT / RCT2.",
      date: "Hace 5 días",
    },
    {
      icon: <FaBug />,
      title: "Corrección de bug en Kenny Adventures",
      desc: "Animación del sprite optimizada para Pygame y Phaser.",
      date: "Hace 1 semana",
    },
    {
      icon: <FaCheckCircle />,
      title: "Publicación en GitHub",
      desc: "Repositorio actualizado en Project-Ken-Chop-Love.",
      date: "Hace 2 semanas",
    },
  ];

  return (
    <motion.div
      className="dashboard-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Bienvenido, Santi 👋
      </motion.h2>
      <p className="subtitle">Tu panel personal de proyectos y desarrollo</p>

      <div className="stats-grid">
        {[
          {
            icon: <FaCode className="stat-icon" />,
            title: "Proyectos Activos",
            text: "3",
          },
          {
            icon: <FaLaptopCode className="stat-icon" />,
            title: "Lenguajes Favoritos",
            text: "JavaScript, PHP, Python",
          },
          {
            icon: <FaGithub className="stat-icon" />,
            title: "Repositorios",
            text: "5 repos en GitHub",
          },
          {
            icon: <FaCalendarAlt className="stat-icon" />,
            title: "Última Actualización",
            text: "04 Nov 2025",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="stat-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            custom={index}
          >
            {item.icon}
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="dashboard-summary"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h3>Resumen</h3>
        <p>
          Actualmente estás trabajando en varios proyectos:{" "}
          <strong>Ken-Chop-Love</strong> (Laravel),
          <strong> Kenny Adventures</strong> (Phaser/Unity), y automatizaciones en{" "}
          <strong>SAP B1</strong>. Tu portafolio crece rápido — ¡sigue así!
        </p>
      </motion.div>

      <motion.div
        className="activity-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h3>Actividad Reciente</h3>
        <div className="activity-list">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="activity-card"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.4 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <div className="activity-icon">{activity.icon}</div>
              <div className="activity-details">
                <h4>{activity.title}</h4>
                <p>{activity.desc}</p>
                <span>{activity.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
