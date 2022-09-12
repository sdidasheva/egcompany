import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Wrapper({ children, isContacts = false }) {
	return (
		<>
			<Header isContacts={isContacts} />
			{children}
			<Footer isContacts={isContacts} />
		</>
	);
}
