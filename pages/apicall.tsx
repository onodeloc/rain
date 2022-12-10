import styles from '../styles/Home.module.css';
import React, { useState } from "react";
import { Button } from 'react-bootstrap';

export default function APIcall() {

	const [text, setText] = useState('');
	var toggle = false;

	var callAPI = async () => {

		var lat = "0";
		var lon = "0";

		try {
			const res = await fetch(
				`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=daily,alerts&appid=da7baf20495e7f43d736127763cae39d
				`
			);
			const data = await res.json();
			console.log(data);

			var currRain = data.hourly.rain;

			if (currRain > 0){
				setText("It will rain "+currRain+"mm!");
			} else {
				setText("It will not rain.");
			}

			// setText(data.current.clouds);
			// setText(data.minutely.precipitation);

			// if (toggle) {
			// 	setText(JSON.stringify(data));
			// 	toggle = !toggle;
			// } else {
			// 	setText('It will not rain today.');
			// 	toggle = !toggle;
			// }

		} catch (err) {
			console.log(err);
		}

	};

	return (
		<div className={styles.container}>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Will it <a href="">Rain?</a>
				</h1>
				<br></br>
				<Button onClick={callAPI}>
					<h2>Click me!</h2>
				</Button>
				<br></br>
				<div className={styles.card}>{text}</div>

			</main>
		</div>
	);
}