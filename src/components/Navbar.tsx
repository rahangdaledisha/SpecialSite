import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          💖 Anniversary
        </h1>
        <div className="space-x-4 font-medium">
          <Link className="hover:text-yellow-300 transition" to="/">Welcome</Link>
          <Link className="hover:text-yellow-300 transition" to="/gallery">Gallery</Link>
          <Link className="hover:text-yellow-300 transition" to="/celebration">Celebrate</Link>
          <Link className="hover:text-yellow-300 transition" to="/message">Message</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
