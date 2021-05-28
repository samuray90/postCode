import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@material-ui/core";
import React from "react";

const SmartTable = ({ list = [] }) => {
	const postcodeInfo = Object.keys(list).filter((key) =>
		["number", "string"]
			.includes(typeof list[key])
			.map((key) => ({ key, value: list[key] }))
	);

	return (
		<div>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>property</TableCell>
						<TableCell>value</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{postcodeInfo.map(({ key, value }) => (
						<TableRow>
							<TableCell>{key}</TableCell>
							<TableCell>{value}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default SmartTable;
