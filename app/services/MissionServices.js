import http from "../utils/http";

const getMissionPageMainData = (Language) => {
	return http.get(`/our-missions/main`, {
		headers: { "Accept-Language": Language },
	});
};

const getMissionPageValueData = (Language) => {
	return http.get(`/our-missions/values`, {
		headers: { "Accept-Language": Language },
	});
};

export const MissionSevices = {
	getMissionPageMainData,
	getMissionPageValueData,
};
