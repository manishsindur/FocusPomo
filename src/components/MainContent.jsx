const MainContent = () => {
	return (
		<div className="grid grid-cols-2 gap-12 w-4/5 items-center h-[80vh] m-auto">
			<div className="bg-red-300/65 rounded flex flex-col items-center justify-center gap-5 h-72">
				<div className="flex gap-10 justify-center">
					<button className="text-white font-bold">Pomodoro</button>
					<button className="text-white font-bold">Short Break</button>
					<button className="text-white font-bold">Long Break</button>
				</div>
				<div>
					<span className="text-white font-extrabold text-9xl">25:00</span>
				</div>
				<button className="bg-white rounded px-4 py-2 tracking-wide text-2xl text-red-500/85 font-bold">
					START
				</button>
			</div>
			<div>helo</div>
		</div>
	);
};

export default MainContent;
