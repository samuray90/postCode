import { Button, Typography } from "@material-ui/core";
import { Field, Formik,  } from "formik";
import { TextField } from "formik-material-ui";
import { navigate } from '@reach/router';
import React from "react";
import { initialFormValues, postcodeFormSchema } from "./home.form";
import { AppWrapper, Row, StyledForm } from "./home.style";

const Home = () => {
	const onSubmit = (values) => {
		console.log(values);
		navigate(`/find/${values.postcode}`)
	};

	return (
		<AppWrapper>
			<Formik
				initialValues={initialFormValues}
				validationSchema={postcodeFormSchema}
				onSubmit={onSubmit}
			>
				{({ isValid }) => (
					<StyledForm>
						<Row>
							<Typography component="h1" variant="h4">
								Postcode Finder
							</Typography>
						</Row>
						<Field
							id="postcode"
							name="postcode"
							label="Postcode"
							component={TextField}
							variant="outlined"
							color="primary"
						/>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							size="medium"
							disabled={!isValid}
						>
							Search
						</Button>
					</StyledForm>
				)}
			</Formik>
		</AppWrapper>
	);
};

export default Home;
