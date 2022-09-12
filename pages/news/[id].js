import Wrapper from "../../app/components/Wrapper/Wrapper";
import Image from "next/image";
import articleImg1 from "../../public/assets/images/article-image1.jpg";
import ArrowLeft from "../../app/icons/ArrowLeft";
import Link from "next/link";
import nextI18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NewsSevices } from "../../app/services/NewsServices";
import { useEffect } from "react";

export default function OneArticle({ articleInfo }) {
	useEffect(() => console.log(articleInfo));
	return (
		<Wrapper>
			<section className="one-article container">
				<Link href="/news">
					<button className="one-article-button">
						<ArrowLeft />
						<span>Назад</span>
					</button>
				</Link>
				<div className="one-article__content">
					<small className="one-article__content-date">
						{articleInfo.created_at}
					</small>
					<h4 className="one-article__content-title">{articleInfo.title}</h4>
					<div className="one-article__image">
						<img src={articleInfo.image} width="1260" height="660" />
					</div>
					<div
						className="one-article__content-text"
						dangerouslySetInnerHTML={{ __html: articleInfo.description }}
					></div>
				</div>
			</section>
		</Wrapper>
	);
}

export async function getServerSideProps({ locale, query }) {
	console.log(query);
	const { id } = query;
	let articleInfo;
	try {
		const articleData = await NewsSevices.getNewsPageArticleData(
			locale ?? "ru",
			id
		);
		articleInfo = articleData?.data?.data;
		return {
			props: {
				...(await serverSideTranslations(
					locale,
					["translate"],
					nextI18nextConfig
				)),
				articleInfo,
			},
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
}
