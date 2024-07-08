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
    {/* Start Hero */}
    <section className="py-6 bg-black text-gray-800">
	<div className="container flex flex-col items-center mt-14 justify-center p-4 mx-auto sm:p-10 w-full">
		<div className="flex flex-row flex-wrap-reverse justify-center mt-8 w-full">
			<div className="flex flex-col justify-center w-full px-8 mt-14 pb-0 text-center rounded-md bg-white text-gray-500">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" style={{width:"150px", height:"150px"}} src="https://source.unsplash.com/100x100/?portrait?5" />
				<div className="flex-1 my-4 mt-8">
					<p className="text-xl font-semibold leading-snug"> I have a keen interest in Web Development, I possess a foundational understanding of ObjectOriented Programming (OOPs) concepts. Eager to apply and enhance my skills, I am actively seeking entry-level opportunities to
          contribute to real-world projects and expand my knowledge in the dynamic field of computer science.</p>
				</div>
			</div>
		</div>
	</div>
</section>
    {/* End Hero */}
    </>
  );
}

export default App;
