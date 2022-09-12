import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from "react-input-mask";
import { formSchema } from "../../validation/formSchema";
import { useTranslation } from "next-i18next";
import { ContactSevices } from "../../services/ContactServices";

export default function ContactForm() {
	const { t } = useTranslation();
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({ mode: "onBlur", resolver: yupResolver(formSchema) });

	const onSubmit = (data) => {
		console.log(data);
		const sendData = {
			email: data.email,
			phone_number: data.phone_number.replace(/\D/g, ""),
			name: data.name,
		};
		ContactSevices.postContactInfo(sendData);
		reset({
			name: null,
			email: null,
			phone_number: "+7(___)___-__-__",
			agreement: false,
		});
	};

	return (
		<section className="contact row container-fluid">
			<div className="contact__content  container-fluid col-xl-11 col-md-6">
				<h2 className="contact__content-title col-xl-6 col-12">
					{t("contact.title")}
				</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="contact__content-form"
				>
					<label className="contact__content-form-label">
						{t("contact.name")}
						<input
							className="contact__content-form-input"
							type="text"
							placeholder={t("contact.namePlaceholder")}
							{...register("name")}
						/>
						<div className="contact__content-form-label-error">
							{t(errors?.name?.message)}
						</div>
					</label>
					<label className="contact__content-form-label">
						{t("contact.email")}
						<input
							className="contact__content-form-input"
							type="text"
							placeholder={t("contact.emailPlaceholder")}
							{...register("email")}
						/>
						<div className="contact__content-form-label-error">
							{t(errors?.email?.message)}
						</div>
					</label>
					<label className="contact__content-form-label">
						{t("contact.phone_number")}
						<InputMask
							className="contact__content-form-input"
							mask="+7 (999) 999-99-99"
							maskChar="_"
							alwaysShowMask
							onBlur={true}
							{...register("phone_number")}
						/>
						<div className="contact__content-form-label-error">
							{t(errors?.phone_number?.message)}
						</div>
					</label>
					<label className="contact__content-form-label-checkbox">
						<div>
							<input
								className="contact__content-form-label-checkbox--custom"
								type="checkbox"
								{...register("agreement")}
							/>
							<span className="contact__content-form-label-checkbox--checkmark"></span>
							{t("contact.agreement")}&nbsp;
							<a href="#">{t("contact.policy")}</a> {t("contact.agreement2")}
						</div>

						<div className="contact__content-form-label-error-checkbox">
							{t(errors?.agreement?.message)}
						</div>
					</label>
					<button className="contact__content-form-button" type="submit">
						{t("contact.send")}
					</button>
				</form>
			</div>
			<div className="contact__image col-6"></div>
		</section>
	);
}
