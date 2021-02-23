import Prismic from "prismic-javascript";

export const apiEndpoint = process.env.PRISMIC_URL;
export const client = Prismic.client(apiEndpoint);
