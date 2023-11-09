import { Link } from "react-router-dom";

type NavProps = {
  search: string;
  setSearch: (value: string) => void;
};

const Nav = ({ search, setSearch }: NavProps) => {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search posts</label>
        <input
          type="text"
          id="search"
          placeholder="Search posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">New Post</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
