import { ContentItem, SearchResult, SearchResults } from "ibm-wch-sdk-api";

import { config } from "../config";

import { FailResponse } from "./FailResponse";
import { ArticleContentItem } from "./Article";


const apiUrl = `${config.host}/api/${config.contentHubId}/delivery/v1`;


export const fetchJson = async <T>(url: string): Promise<T | FailResponse> => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (errors) {
        return { errors };
    }
};

export type SearchArticlesResult = SearchResults<SearchResult<ArticleContentItem>>;

export const getArticles = () =>
    fetchJson<SearchArticlesResult>(`${apiUrl}/rendering/search?q=type:article&sort=lastModified%20desc&`);


export const getContentItem = <T extends ContentItem>(contentId: string) =>
    fetchJson<T>(`${apiUrl}/content/${contentId}`);

export const getArticle = (articleId: string) =>
    getContentItem<ArticleContentItem>(articleId);
