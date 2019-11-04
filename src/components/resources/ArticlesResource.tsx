import { SearchArticlesResult, getArticles } from "../../api/AcousticAPI";

import { createResource } from "./createResouce";


export const ArticlesResource = createResource<[], SearchArticlesResult>(getArticles);
