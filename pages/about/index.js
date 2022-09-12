import Advantages from "../../app/pages/Advantages/Advantages";
import Main from "../../app/pages/Main/Main";
import Solutions from "../../app/pages/Solutions/Solutions";
import Wrapper from "../../app/components/Wrapper/Wrapper";
import nextI18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AboutSevices } from "../../app/services/AboutServices";
import { useEffect } from "react";

export default function About({ mainInfo, advantagesInfo, solutionsInfo }) {
	// useEffect(() => {
	// 	console.log(mainInfo);
	// 	console.log(advantagesInfo);
	// 	console.log(solutionsInfo);
	// }, []);
	return (
		<Wrapper>
			<Main mainInfo={mainInfo} />
			<Advantages advantagesInfo={advantagesInfo} />
			<Solutions solutionsInfo={solutionsInfo} />
		</Wrapper>
	);
}

export async function getServerSideProps({ locale }) {
	let mainInfo;
	let advantagesInfo;
	let solutionsInfo;

	try {
		const mainData = await AboutSevices.getAboutPageMainData(locale ?? "ru");
		mainInfo = await mainData?.data?.data;

		const advantagesData = await AboutSevices.getAboutPageAdvantagesData(
			locale ?? "ru"
		);
		advantagesInfo = await advantagesData?.data?.data;

		const solutionsData = await AboutSevices.getAboutPageSolutionsData(
			locale ?? "ru"
		);
		solutionsInfo = await solutionsData?.data?.data;
		return {
			props: {
				...(await serverSideTranslations(
					locale,
					["translate"],
					nextI18nextConfig
				)),
				mainInfo,
				advantagesInfo,
				solutionsInfo,
			},
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
}
