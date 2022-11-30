import { useState, useEffect } from 'react'
import { NumericFormat } from 'react-number-format'
import './assets/App.css'

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
const operators = ['/', '*', '-', '+']



const App = () => {
	const [prevState, setPrevState] = useState("")
	const [currentState, setCurrentState] = useState("")
	const [input, setInput] = useState("0")
	const [operator, setOperator] = useState(null)
	const [total, setTotal] = useState(false)
	
	const inputNum = (event) => {
		if (currentState.includes(".") && event.target.innerText === ".") return;
	
		if (total) {
			setPrevState("")
		}
		
		currentState 
			? setCurrentState((pre) => pre + event.target.innerText) 
			: setCurrentState(event.target.innerText)
		setTotal(false)
	}
	
	useEffect(() => {
		setInput(currentState)
	}, [currentState])
	
	useEffect(() => {
		setInput("0")
	}, [])
	
	const operatorType = (event) => {
		setTotal(false)
		setOperator(event.target.innerText)
		if (currentState === "") return;
		if (prevState !== "") {
			equals()
		} else {
			setPrevState(currentState)
			setCurrentState("")
		}
	}
	
	const equals = (event) => {
		if (event?.target.innerText === "=") {
			setTotal(true)
		}
		let calc
		switch (operator) {
			case "/":
				calc = String(parseFloat(prevState) / parseFloat(currentState));
				break;
			case "*":
				calc = String(parseFloat(prevState) * parseFloat(currentState));
				break;
			case "-":
				calc = String(parseFloat(prevState) - parseFloat(currentState));
				break;
			case "+":
				calc = String(parseFloat(prevState) + parseFloat(currentState));
				break;
			default:
				return;	
		}
		setInput("")
		setPrevState(calc)
		setCurrentState("")
	}

	const reset = () => {
		setPrevState("")
		setCurrentState("")
		setInput("0")
	}

	
	
	
	return (
		<div className="calculator">
			<div id="display" className="display">
				{input !== "" || input === "0" ? (
					<NumericFormat 
						value={input}
						displayType={"text"}
						thousandSeparator={true}
					/>
				) : (
					<NumericFormat 
						value={prevState}
						displayType={"text"}
						thousandSeparator={true}
					/>
				)}
			</div>

			<div className="nums-container">
			<button className="big-h light-gray ac" onClick={reset} >AC</button>
			{nums.map(num => (
					<button 
						className={`dark-gray ${num === 0 && 'big-h'}`} 
						key={num}
						onClick={inputNum}
					>
						{num}
					</button>
				))}
			<button className="light-gray">.</button>	
			</div>

			<div className="ops-container">
				{operators.map(op => (
					<button 
						className="orange" 
						key={op}
						onClick={operatorType}
					>
						{op}
					</button>
				))}
				<button className="orange" onClick={equals}>=</button>
			</div>
		</div>
	)
}

export default App
