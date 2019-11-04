import React from "react";
import { RouteComponentProps } from "react-router";

import { ArticleResource } from "../resources/ArticleResource";
import { ArticleView } from "../contents/article/ArticleView";
import { Layout } from "../Layout";


export const ArticlePage: React.FC<RouteComponentProps<{articleId: string }>> = (props) => (
    <Layout>
        <ArticleResource
            query={[props.match.params.articleId]}
            ok={(article) => <ArticleView article={article} />}
        />
    </Layout>
);
