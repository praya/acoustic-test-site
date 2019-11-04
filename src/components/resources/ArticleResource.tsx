import { ArticleContentItem } from "../../api/Article";
import { getArticle } from "../../api/AcousticAPI";

import { createResource } from "./createResouce";


export const ArticleResource = createResource<[string], ArticleContentItem>(getArticle);
