import { useParams } from "@reach/router";
import React, { useEffect } from "react";
import { useState } from "react";
import Table from "../table/table";
import { getApiNearestPostcode, getApiPostcode } from "../../util/postcode";

const Postcode = () => {
	const { postcode } = useParams();
	const [data, setData] = useState({
		postcode: {},
		nearest: [],
	});

	useEffect(() => {
		const getResult = async () => {
			try {
				const postcodeResponse = await fetch(getApiPostcode(postcode));
				const { result: postcodeResult } = await postcodeResponse.json();

				const nearestPostcodeResponse = await fetch(
					getApiNearestPostcode(postcode)
				);
				const { result: nearestPostcodeResult } =
					await nearestPostcodeResponse.json();

				setData({
					postcode: postcodeResult,
					nearest: nearestPostcodeResult,
				});
			} catch (error) {
				console.log(error);
			}
		};
		getResult();
	}, [postcode]);
	const currentPostCode = data?.postcodeResult;
	console.log(currentPostCode);
	return (
		<div>
			<Table list={currentPostCode} />
		</div>
	);
};

export default Postcode;
