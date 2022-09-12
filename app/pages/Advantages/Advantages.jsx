import Advantage from "./Advantage";
import { useTranslation } from "next-i18next";

export default function Advantages({ advantagesInfo }) {
	const { t } = useTranslation();
	if (advantagesInfo.length % 2 == 1) {
		advantagesInfo.push(" ");
	}
	return (
		<section className="advantages">
			<h2 className="advantages__title">
				{t("advantages.titleBlack")} <span>{t("advantages.titleGreen")}</span>
			</h2>
			<div className="advantages__content row">
				{advantagesInfo.map((advantage) => (
					<Advantage
						number={advantage.title}
						description={advantage.subtitle}
					/>
				))}
			</div>
		</section>
	);
}
