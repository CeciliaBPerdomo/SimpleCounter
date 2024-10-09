import React from "react";
import SecondsCounter from "./secondsCounter.jsx";


//create your first component
const Home = ({ segundos, reversa }) => {
	return (
		<>
			<hr className="border border-danger border-2" />
			<h1 className="text-center mt-5 text-white">Contador de segundos, baby</h1>
			<br />
			<div className="d-flex justify-content-center container">
				<SecondsCounter digito={segundos} />
			</div>

			<hr className="border border-danger border-2" />

			<h1 className="text-center mt-5 text-white">De reversa, mami</h1>
			<br />
			<div className="d-flex justify-content-center container">
				<SecondsCounter digito={reversa} />
			</div>

			<hr className="border border-danger border-2" />
		</>
	);
};

export default Home;
