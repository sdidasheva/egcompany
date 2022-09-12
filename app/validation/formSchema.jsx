import * as yup from "yup";

export const formSchema = yup.object().shape({
	name: yup.string().required("errors.required"),
	email: yup
		.string()
		.required("errors.required")
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i, "errors.email"),
	phone_number: yup.string().test({
		name: "phoneValidation",
		test: (value) => {
			if (!value) {
				return false;
			} else if (value.replace(/_/g, "").length !== 18) {
				return false;
			}
			return true;
		},
		message: "errors.phone_number",
	}),
	agreement: yup.bool().oneOf([true], "errors.agreement"),
});
