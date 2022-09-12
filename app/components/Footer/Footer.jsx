import FacebookFooter from "../../icons/FacebookFooter";
import InstagramFooter from "../../icons/InstagramFooter";
import YoutubeFooter from "../../icons/YoutubeFooter";
import { useRouter } from "next/router";

export default function Footer({ isContacts = false }) {
	const router = useRouter();

	return (
		<footer className="footer container-fluid">
			<div
				className={
					isContacts
						? "footer__wrapper-contact container-fluid"
						: "footer__wrapper container-fluid"
				}
			>
				<p className="footer__copy">© EURASIA GROUP 2022</p>
				<div className="footer__socials">
					<div
						className={
							isContacts
								? "footer__socials-item-contact"
								: "footer__socials-item"
						}
					>
						<FacebookFooter />
					</div>
					<div
						className={
							isContacts
								? "footer__socials-item-contact"
								: "footer__socials-item"
						}
					>
						<InstagramFooter />
					</div>
					<div
						className={
							isContacts
								? "footer__socials-item-contact"
								: "footer__socials-item"
						}
					>
						<YoutubeFooter />
					</div>
				</div>
			</div>
		</footer>
	);
}
