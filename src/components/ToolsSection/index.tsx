import clsx from 'clsx';
import styles from './styles.module.css';

// Tool component
function Tool({ title, description }) {
  return (
    <div className={clsx(styles.tool, 'animate__animated', 'animate__fadeIn')}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Tools Section
function ToolsSection() {
  // Example tools data
  const tools = [
    {
      title: 'Jax VRC Tools',
      description: '',
      link: '/tools/jaxvrctools'
    },
    {
      title: '3D Model Optimizer 🐾',
      description: 'Optimize your 3D models for better performance and quality!'
    },
  ];

  return (
    <section className={styles.toolsSection}>
      <div className="container">
        <h2 className="section__title">🛠️ BlackJaxVR's Tools for Unity, VRChat, Twitch, & Discord 🛠️</h2>
        <div className={styles.toolsGrid}>
          {tools.map(tool => (
            <Tool key={tool.title} title={tool.title} description={tool.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsSection;