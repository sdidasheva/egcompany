import http from "../utils/http";

const getAboutPageMainData = (Language) => {
	return http.get(`about-companies/main`, {
		headers: { "Accept-Language": Language },
	});
};

const getAboutPageAdvantagesData = (Language) => {
	return http.get(`about-companies/digits`, {
		headers: { "Accept-Language": Language },
	});
};

const getAboutPageSolutionsData = (Language) => {
	return http.get(`about-companies/unique-solutions`, {
		headers: { "Accept-Language": Language },
	});
};

export const AboutSevices = {
	getAboutPageMainData,
	getAboutPageAdvantagesData,
	getAboutPageSolutionsData,
};
