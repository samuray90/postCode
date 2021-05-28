import * as Yup from "yup";

export const initialFormValues = {
	postcode: "",
};

export const postcodeFormSchema = Yup.object().shape({
	postcode: Yup.string()
		.min(3, "min three characters required")
		.max(7, "max seven characters required")
		.required("You must enter at least 2 characters of the postcode"),
});
