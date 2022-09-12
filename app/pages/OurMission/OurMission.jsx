import ContactArrow from "../../icons/ContactArrow";
import { useTranslation } from "next-i18next";
export default function OurMission({ mainSolutionInfo }) {
	const { t } = useTranslation();

	return (
		<section className="mission">
			<div className="mission__content col col-lg-5">
				<h1 className="mission__content-title">
					<span className="mission__content-title-primary">
						{t("mission.titleGreen")}
					</span>
					&nbsp;
					<span className="mission__content-title-black">
						{t("mission.titleBlack")}
					</span>
				</h1>
				<div
					className="mission__content-description"
					dangerouslySetInnerHTML={{ __html: mainSolutionInfo.description }}
				></div>
				<button className="c-button c-button-primary">
					{t("main.contactBtn")}
					<span>
						<ContactArrow />
					</span>
				</button>
			</div>
			<div className="mission__image col col-lg-7">
				<img src={mainSolutionInfo.image} alt="field" />
				<div className="mission__image-backdrop"></div>
			</div>
		</section>
	);
}
