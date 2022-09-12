import Solution from "./Solution";
import { useTranslation } from "next-i18next";

export default function Solutions({ solutionsInfo }) {
	const { t } = useTranslation();
	return (
		<section className="solutions">
			<div className="solutions__content">
				<h2 className="solutions__content-title">{t("solutions.title")}</h2>
				<p className="solutions__content-text">{t("solutions.text")}</p>
			</div>
			<div className="solutions__info row container-fluid">
				{solutionsInfo.map((solution) => (
					<Solution number={solution.title} description={solution.subtitle} />
				))}
			</div>
		</section>
	);
}
