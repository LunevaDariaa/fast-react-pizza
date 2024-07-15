import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-500 rounded-full text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2";
  const styles = {
    primary: base + " px-4 py-3  md:px-6 md:py-4",
    small: base + " py-2 px-4 md:px-5 md:py-2.5 text-xs",
    secondary:
      " rounded-full text-sm font-semibold border-2 border-stone-3000 focus:outline-none focus:ring px-4 py-2.5  md:px-6 md:py-3.5 focus:ring-stone-300 text-stone-500  hover:bg-stone-600/40 hover:text-stone-100 focus:ring-offset-2 uppercase",
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
