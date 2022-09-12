import http from "../utils/http";

const getNewsPageMainData = (Language) => {
	return http.get(`/whats-new/main`, {
		headers: { "Accept-Language": Language },
	});
};

const getNewsPageArticlesData = (
	Language,
	Category = "",
	perPage = 3,
	page = null
) => {
	return http.get(
		`whats-new/records?record_category_id=${Category}&per_page=${perPage}&page=${page}`,
		{
			headers: { "Accept-Language": Language },
		}
	);
};

const getNewsPageArticleData = (Language, id) => {
	return http.get(`/whats-new/records/${id}`, {
		headers: { "Accept-Language": Language },
	});
};

const getNewsPageArticleCategories = (Language) => {
	return http.get(`whats-new/records/categories`, {
		headers: { "Accept-Language": Language },
	});
};

export const NewsSevices = {
	getNewsPageMainData,
	getNewsPageArticlesData,
	getNewsPageArticleData,
	getNewsPageArticleCategories,
};
