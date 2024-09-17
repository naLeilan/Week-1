import PageLayout from "../components/Pagelayout";

function Skills() {
  return (
    <>
      <PageLayout />
      <div className="main">
        <h2>Technical Skills:</h2>
        <ul>
          <li>
            JavaScript (ES6+): Proficient in modern JavaScript features,
            including promises, async/await, destructuring, and arrow functions.
          </li>
          <li>
            React.js: Extensive experience building component-based
            architectures using React, working with hooks (useState, useEffect,
            useMemo, useCallback), and functional components.
          </li>
          <li>
            State Management: Strong knowledge of React state management using
            useState, useReducer, and external libraries like Redux and Zustand.
          </li>
          <li>
            React Router: Experience in implementing dynamic routing, nested
            routes, and protected routes using React Router.
          </li>
          <li>
            API Integration: Skilled in fetching and managing data using Axios
            and fetch, handling async operations, and integrating third-party
            APIs.
          </li>
          <li>
            Performance Optimization: Familiar with optimizing React
            applications using memoization, lazy loading, and React DevTools to
            prevent unnecessary re-renders.
          </li>
          <li>
            Testing: Experience in writing unit and integration tests with Jest
            and React Testing Library, and debugging with browser DevTools and
            React DevTools.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Skills;
