import ContactForm from "../../app/pages/ContactForm/ContactForm";
import Wrapper from "../../app/components/Wrapper/Wrapper";
import nextI18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Contact() {
	return (
		<Wrapper isContacts>
			<ContactForm />
		</Wrapper>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(
				locale,
				["translate"],
				nextI18nextConfig
			)),
		},
	};
}
