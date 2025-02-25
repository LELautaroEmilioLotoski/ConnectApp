import Link from "next/link"

export default function Navbar() {
  return (
    <header className=" bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          ConnectApp
        </Link>
        <div className="flex-1 max-w-xl px-4">
          <input
            type="search"
            placeholder="Buscar en ConnectApp"
            className="w-full bg-white text-black px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <nav className="flex items-center space-x-4">
          <button className="p-2 hover:bg-blue-700 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>
          <button className="p-2 hover:bg-blue-700 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </button>
          <button className="p-2 hover:bg-blue-700 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
          {/* <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image src="/placeholder-user.jpg" alt="@usuario" layout="fill" objectFit="cover" />
          </div> */}
        </nav>
      </div>
    </header>
  )
}

