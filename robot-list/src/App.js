import { useState } from "react";

const initialString = {
	stringInput: "",
};

function App() {
	const [string, setString] = useState(initialString);
	const [list, setList] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setList([...list, string]);
	};

  const update = (e) => {
    e.preventDefault();
    setString({
      ...string,
      [e.target.name]: e.target.value
    })};


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
			{list.length > 0 && (
				<>
					<h1>Robot Collection</h1>
					<ul>
            {list.map(item =>{
              return(
                <li>
                  <img src={`https://robohash.org/${item}`} alt={item} />
                </li>

              )
            })}
					</ul>
				</>
			)}
		</div>
	);
}

export default App;
