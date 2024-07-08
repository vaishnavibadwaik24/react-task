import './App.css';

function App() {
  return (
    <>
    {/* Start Header */}
    <header className="p-4 dark:bg-black dark:text-white">
	<div className="container flex justify-between h-16 mx-auto">
  <li className="flex">
				<a href="#" className="flex items-center px-4 -mb-1 text-lg font-bold">My Portfolio</a>
			</li>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1">Home</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1">About Us</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1">Contact Us</a>
			</li>
			{/* <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
			</li> */}
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="self-center px-8 py-3 font-semibold rounded dark:bg-white dark:text-black">Projects</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    {/* End Header */}
    </>
  );
}

export default App;
