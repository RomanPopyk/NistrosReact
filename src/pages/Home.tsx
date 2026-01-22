
import { BrowserRouter as Link} from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Navigation */}
      <header className="bg-blue-600 text-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Language Translator</h1>
            <ul className="flex gap-6">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Container - Language Pages List */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        <h2 className="text-3xl font-bold mb-6">Choose a Language</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/french" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">French 🇫🇷</h3>
            <p className="text-gray-600">Search and translate French words</p>
          </Link>
          
          <Link to="/spanish" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Spanish 🇪🇸</h3>
            <p className="text-gray-600">Search and translate Spanish words</p>
          </Link>
          
          <Link to="/german" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">German 🇩🇪</h3>
            <p className="text-gray-600">Search and translate German words</p>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 Language Translator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;