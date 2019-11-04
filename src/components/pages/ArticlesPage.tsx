import GridList from '@material-ui/core/GridList';
import React from "react";

import { Layout } from "../Layout";
import { ArticleTile } from "../contents/article/ArticleTile";
import { ArticlesResource } from "../resources/ArticlesResource";


export const ArticlesPage: React.FC = () => (
    <Layout>
        <ArticlesResource
            query={[]}
            ok={(responce) => (
                <GridList cellHeight={149}>
                    {responce.documents && responce.documents.map((article) => (
                        <ArticleTile key={article.document.id} article={article.document} />
                    ))}
                </GridList>
            )}
        />
    </Layout>
);
