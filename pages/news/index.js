import Articles from "../../app/pages/Articles/Articles";
import Wrapper from "../../app/components/Wrapper/Wrapper";
import nextI18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NewsSevices } from "../../app/services/NewsServices";
import { useEffect } from "react";
import { ConnectedTvOutlined } from "@mui/icons-material";

export default function News({
	mainNewsInfo,
	articlesInfo,
	categoriesInfo,
	locale,
	articlesPages,
}) {
	useEffect(() => console.log(NewsSevices.getNewsPageArticlesData()));
	return (
		<Wrapper>
			<Articles
				mainNewsInfo={mainNewsInfo}
				articlesInfo={articlesInfo}
				categoriesInfo={categoriesInfo}
				locale={locale}
				articlesPages={articlesPages}
			/>
		</Wrapper>
	);
}

export async function getServerSideProps({ locale }) {
	let mainNewsInfo;
	let articlesInfo;
	let categoriesInfo;
	let articlesPages;
	try {
		const mainNewsData = await NewsSevices.getNewsPageMainData(locale ?? "ru");
		mainNewsInfo = mainNewsData?.data?.data;

		const articlesData = await NewsSevices.getNewsPageArticlesData(
			locale ?? "ru"
			// categoriesInfo
		);
		articlesInfo = articlesData?.data?.data;
		articlesPages = articlesData?.data?.meta?.last_page;

		const categoriesData = await NewsSevices.getNewsPageArticleCategories(
			locale ?? "ru"
		);
		categoriesInfo = categoriesData?.data?.data;

		return {
			props: {
				...(await serverSideTranslations(
					locale,
					["translate"],
					nextI18nextConfig
				)),
				mainNewsInfo,
				articlesInfo,
				categoriesInfo,
				locale,
				articlesPages,
			},
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
}
