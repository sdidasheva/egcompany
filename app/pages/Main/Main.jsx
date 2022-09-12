import ContactArrow from "../../icons/ContactArrow";
import Link from "next/link";
import { useTranslation } from "next-i18next";
export default function Main({ mainInfo }) {
	const { t } = useTranslation();

	return (
		<section className="main">
			<div className="main__content col col-lg-5 container-fluid">
				<h1 className="main__content-title">
					<span className="main__content-title-primary">EURASIA</span>&nbsp;
					<span className="main__content-title-black">GROUP</span>
				</h1>
				<div
					className="main__content-description"
					dangerouslySetInnerHTML={{ __html: mainInfo.description }}
				></div>
				<Link href="/contact">
					<button className="c-button c-button-primary">
						{t("main.contactBtn")}
						<span>
							<ContactArrow />
						</span>
					</button>
				</Link>
			</div>
			<div className="main__image col col-lg-7">
				<img src={mainInfo.image} alt="tractor" />
				<div className="main__image-backdrop"></div>
			</div>
		</section>
	);
}
