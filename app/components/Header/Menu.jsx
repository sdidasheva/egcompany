import Link from "next/link";
import Close from "../../icons/Close";
import ContactArrow from "../../icons/ContactArrow";
import Facebook from "../../icons/Facebook";
import Instagram from "../../icons/Instagram";
import Youtube from "../../icons/Youtube";

export default function Menu({ open, setOpen }) {
	return (
		<>
			<div
				className={open ? "backdrop-active" : "backdrop"}
				onClick={() => setOpen(!open)}
			></div>
			<div className="header__menu">
				<div
					className={open ? "header__menu-nav-active" : "header__menu-nav"}
					onClick={(e) => e.stopPropagation()}
				>
					<div className="header__menu-nav-container">
						<div
							className="header__menu-nav-container-close"
							onClick={() => setOpen(!open)}
						>
							<Close />
						</div>
						<nav className="header__menu-nav-container-list">
							<ul>
								<Link href="/about">
									<li onClick={() => setOpen(!open)}>О КОМПАНИИ</li>
								</Link>
								<Link href="/mission">
									<li onClick={() => setOpen(!open)}>НАША МИССИЯ</li>
								</Link>
								<Link href="/news">
									<li onClick={() => setOpen(!open)}>ЧТО НОВОГО</li>
								</Link>
							</ul>
						</nav>
						<Link href="/contact">
							<button className="c-button c-button-grey header__menu-nav-button">
								СВЯЗАТЬСЯ С НАМИ
								<span>
									<ContactArrow />
								</span>
							</button>
						</Link>
					</div>
					<div className="header__menu-nav-contacts">
						<div className="header__menu-nav-contacts-social">
							<div>
								<Facebook />
							</div>
							<div>
								<Instagram />
							</div>
							<div>
								<Youtube />
							</div>
						</div>
						<p>© EURASIA GROUP 2022</p>
					</div>
				</div>
			</div>
		</>
	);
}
