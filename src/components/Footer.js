import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-800">
        <div className="p-4 flex justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2035 <Link to="/" className="hover:underline">MovieVerse™</Link>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}
