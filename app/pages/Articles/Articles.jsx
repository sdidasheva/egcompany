import React, { useState } from "react";
import Article from "./Article";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { NewsSevices } from "../../services/NewsServices";
export default function Articles({
	mainNewsInfo,
	articlesInfo,
	categoriesInfo,
	locale,
	articlesPages,
}) {
	const { t } = useTranslation();
	const [active, setActive] = useState();
	const [blogList, setBlogList] = useState(articlesInfo);
	const [page, setPage] = useState(1);
	const [pagesCount, setPagesCount] = useState(articlesPages);

	const filterResult = (id) => {
		NewsSevices.getNewsPageArticlesData(locale ?? "ru", id).then((res) => {
			setBlogList(res.data.data);
			setPagesCount(res.data.meta.last_page);
		});
		setActive(id);
	};
	const handlePageChange = (e, page) => {
		NewsSevices.getNewsPageArticlesData(locale ?? "ru", active, 3, page).then(
			(res) => setBlogList(res.data.data)
		);
		setPage(page);
	};

	return (
		<section className="articles">
			<div className="articles__info container-fluid">
				<h2 className="articles__info-title">{mainNewsInfo.title}</h2>
				<p className="articles__info-text">{mainNewsInfo.subtitle}</p>
			</div>
			<div className="articles__buttons container-fluid">
				{categoriesInfo.map((category) => (
					<button
						className={`articles__buttons-btn
							${active === category.id ? "articles__buttons-btn-active" : ""}
						`}
						onClick={() => filterResult(category.id)}
					>
						{category.name}
					</button>
				))}
			</div>
			<div className="articles__content row  container-fluid">
				{blogList &&
					blogList.map((article) => (
						<Link href={`/news/${article.id}`}>
							<a
								key={article.id}
								className="articles__content-wrapper col-lg-4 col-sm-6 col-12 container-fluid"
							>
								<Article
									image={article.image}
									title={article.title}
									text={article.description}
									date={article.created_at}
								/>
							</a>
						</Link>
					))}
			</div>

			{pagesCount > 1 && (
				<Stack spacing={2}>
					<Pagination
						page={page}
						onChange={handlePageChange}
						count={pagesCount}
						size="large"
						renderItem={(item) => (
							<PaginationItem
								components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
								{...item}
							/>
						)}
					/>
				</Stack>
			)}
		</section>
	);
}
