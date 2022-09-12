import http from "../utils/http";
const postContactInfo = (data) => {
	return http.post(`/contact-us`, data);
};

export const ContactSevices = {
	postContactInfo,
};
