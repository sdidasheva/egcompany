import Image from "next/image";
import Burger from "../../icons/Burger";
import logo from "../../../public/assets/images/logo.svg";
import ArrowLeft from "../../icons/ArrowLeft";
import { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Header({ isContacts = false }) {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(false);
	const { t, i18n } = useTranslation("translate");
	const router = useRouter();
	const { pathname, asPath, query } = router;

	const getCurrentLanguage = (lang) => {
		switch (lang) {
			case "ru":
				return "RU";
			case "kz":
				return "KZ";
			case "en":
				return "EN";
		}
		setSelected(false);
	};

	const changeLocale = (lang, e) => {
		e.preventDefault();
		router.push({ pathname, query }, asPath, { locale: lang });
	};
	return (
		<>
			<header className="header container-fluid">
				<div
					className={
						isContacts
							? "header__wrapper-contact container-fluid"
							: "header__wrapper container-fluid"
					}
				>
					<div className="header__burger" onClick={() => setOpen(!open)}>
						<Burger />
					</div>
					<Link href="/about">
						<div
							className={isContacts ? "header__logo-contact" : "header__logo"}
						>
							<Image src={logo} alt="logo" width="154" height="34" />
						</div>
					</Link>

					{isContacts ? (
						<Link href="/about">
							<div className="header__button-contact">
								<button>
									<ArrowLeft /> {t("headerbtn")}
								</button>
							</div>
						</Link>
					) : null}
					<div className={isContacts ? "header__lang-contact" : "header__lang"}>
						<p
							className={
								isContacts
									? "header__lang-contact-selected"
									: "header__lang-selected"
							}
							onClick={() => setSelected(!selected)}
						>
							{getCurrentLanguage(i18n.language)}
						</p>
						<div
							className={
								selected
									? "header__lang-options-active"
									: "header__lang-options"
							}
						>
							<p
								className="header__lang-options-item"
								onClick={(e) => changeLocale("ru", e)}
							>
								RU
							</p>
							<p
								className="header__lang-options-item"
								onClick={(e) => changeLocale("kz", e)}
							>
								KZ
							</p>
							<p
								className="header__lang-options-item"
								onClick={(e) => changeLocale("en", e)}
							>
								EN
							</p>
						</div>
					</div>
				</div>
			</header>
			<Menu open={open} setOpen={setOpen} />
		</>
	);
}
