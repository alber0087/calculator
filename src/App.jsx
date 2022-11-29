import './assets/App.css'

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
const operators = ['/', '*', '-', '+', '=']

const App = () => {

	const handleClick = (e) => {
		const { innerText } = e.target
		alert(innerText)
	}

	return (
		<div className="calculator">
			<div id="display" className="display">1.234</div>

			<div className="nums-container">
			<button className="big-h light-gray ac" onClick={handleClick} >AC</button>
			{nums.map(num => (
					<button 
						className={`dark-gray ${num === 0 && 'big-h'}`} 
						key={num}
						onClick={handleClick}
					>
						{num}
					</button>
				))}
			<button className="light-gray" onClick={handleClick}>.</button>	
			</div>

			<div className="ops-container">
				{operators.map(op => (
					<button 
						className="orange" 
						key={op}
						onClick={handleClick}
					>
						{op}
					</button>
				))}
			</div>
		</div>
	)
}

export default App
