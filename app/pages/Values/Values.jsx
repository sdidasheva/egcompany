import Value from "./Value";
import { useTranslation } from "next-i18next";

export default function Values({ valueInfo }) {
	const { t } = useTranslation();
	if (valueInfo.length % 2 == 1) {
		valueInfo.push(" ");
	}
	return (
		<section className="values">
			<h2 className="values__title">{t("values.title")}</h2>
			<p className="values__text">{t("values.text")}</p>
			<div className="values__content row">
				{valueInfo.map((value) => (
					<Value icon={value.icon} title={value.title} text={value.subtitle} />
				))}
			</div>
		</section>
	);
}
