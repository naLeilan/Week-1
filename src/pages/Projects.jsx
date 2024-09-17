import PageLayout from "../components/Pagelayout";

function Projects() {
  return (
    <>
      <PageLayout />
      <div className="main">
        <h2>Projects</h2>
        <ul>
          <li>
            Task Management App: Showcases drag-and-drop UI, real-time
            collaboration, and state management.
          </li>
          <li>
            E-Commerce Store: Highlights a complete shopping flow, including
            payment processing and order management.
          </li>
          <li>
            Social Media Platform: Demonstrates complex state management,
            real-time updates, and social features like posts and messaging.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Projects;
