import { useEffect, useState } from "react";
import Serie from "./Serie";
import "bootstrap/dist/css/bootstrap.min.css";

const Series = (props) => {
	const [series, setSeries] = useState([]);

	useEffect(() => {
		if (!navigator.onLine) {
			if (localStorage.getItem("series") === null) {
				setSeries("Loading...");
			} else {
				setSeries(localStorage.getItem("series"));
			}
		}

		fetch(props.url)
			.then((result) => result.json())
			.then((result) => {
				console.log(result);
				setSeries(result);
				localStorage.setItem("series", series);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Name</th>
						<th scope="col">Seasons</th>
						<th scope="col">Episodes</th>
						<th scope="col">Release Date</th>
					</tr>
				</thead>
				<tbody>
					{series.map((serie) => {
						return (
							<tr>
								<th scope="col">{serie.id}</th>
								<th scope="col">{serie.name}</th>
								<th scope="col">{serie.seasons}</th>
								<th scope="col">{serie.episodes}</th>
								<th scope="col">{serie.release}</th>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Series;
