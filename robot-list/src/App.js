import { useState } from "react";

const initialString = {
	stringInput: "",
};

function App() {
	const [string, setString] = useState(initialString);
	const [list, setList] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setList(true);
	};

	const update = (e) => {
		e.preventDefault();
		setString({
			stringInput: e.target.value,
		});
    setString(initialString)
	};

	const url = `https://robohash.org/${string}`;

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<input
					name="stringInput"
					placeholder="Enter any word"
					type="text"
          value={string.stringInput.value}
					onChange={update}
				/>
				<button type="submit">Get Robot</button>
			</form>
			{list && (
				<>
					<h1>Robot Collection</h1>
					<ul>
						<li>
							<img src={url} alt={string.stringInput.value} />
						</li>
					</ul>
				</>
			)}
		</div>
	);
}

export default App;
