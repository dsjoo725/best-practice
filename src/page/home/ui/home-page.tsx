import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/payment">Payment</Link>
    </div>
  );
};
