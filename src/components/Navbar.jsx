import threedots from "../assets/icons/threedots-white.png";

const Navbar = () => {
	return (
		<div className="w-4/5 h-14 flex justify-between items-center m-auto border-b border-red-300">
			<h1 className="text-white text-xl font-bold">FocousPomo</h1>
			<nav className="flex gap-4">
				<button className="text-white bg-red-300/65 px-3 py-[2px] rounded">
					Report
				</button>
				<button className="text-white bg-red-300/65 px-3 py-[2px] rounded">
					Settings
				</button>
				<button className="text-white bg-red-300/65 px-3 py-[2px] rounded">
					Sign In
				</button>
				<button className=" bg-red-300/65 px-2 py-[2px] rounded">
					<img className="h-3.5" src={threedots} alt="Three dots" />
				</button>
			</nav>
		</div>
	);
};

export default Navbar;
