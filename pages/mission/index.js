import OurMission from "../../app/pages/OurMission/OurMission";
import Values from "../../app/pages/Values/Values";
import Wrapper from "../../app/components/Wrapper/Wrapper";
import nextI18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MissionSevices } from "../../app/services/MissionServices";
import { useEffect } from "react";
export default function Mission({ mainSolutionInfo, valueInfo }) {
	useEffect(() => {
		console.log(mainSolutionInfo);
		console.log(valueInfo);
	}, []);
	return (
		<Wrapper>
			<OurMission mainSolutionInfo={mainSolutionInfo} />
			<Values valueInfo={valueInfo} />
		</Wrapper>
	);
}

export async function getServerSideProps({ locale }) {
	let mainSolutionInfo;
	let valueInfo;

	try {
		const mainSolutionData = await MissionSevices.getMissionPageMainData(
			locale ?? "ru"
		);
		mainSolutionInfo = mainSolutionData?.data?.data;

		const valueData = await MissionSevices.getMissionPageValueData(
			locale ?? "ru"
		);
		valueInfo = valueData?.data?.data;

		return {
			props: {
				...(await serverSideTranslations(
					locale,
					["translate"],
					nextI18nextConfig
				)),
				mainSolutionInfo,
				valueInfo,
			},
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
}
