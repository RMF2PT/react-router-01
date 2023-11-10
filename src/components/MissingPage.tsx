import { Link } from "react-router-dom";

const MissingPage = () => {
  return (
    <main className="Missing">
      <h2>404 - Page not found</h2>
      <p>
        <Link to="/">Return to home page</Link>
      </p>
    </main>
  );
};
export default MissingPage;
