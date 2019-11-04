import React from 'react';
import GridListTile from "@material-ui/core/GridListTile";
import { Link } from "react-router-dom";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import { ArticleContentItem, MainImageGroupElement } from "../../../api/Article";
import { config } from '../../../config';


export interface ArticleViewProps {
    article: ArticleContentItem;
}


const getImageUrl = (image: MainImageGroupElement): string => {
    const url = image.value.leadImage.renditions ? image.value.leadImage.renditions.card.url : '';
    return url ? `${config.host}${url}` : 'https://via.placeholder.com/640x360/999999/bbbbbb?text=No%20Photo';
}

export const ArticleTile: React.FC<ArticleViewProps> = ({ article, ...attrs }) => (
    <GridListTile key={article.id} {...attrs}>
        <Link to={`/articles/${article.id}`}>
            <img style={{ width: '100%'}} src={getImageUrl(article.elements.mainImage)} alt="" />

            <GridListTileBar
                title={article.elements.heading.value || 'Untitled'}
                subtitle={article.elements.author.value ? <span>by: {article.elements.author.value}</span> : null}
            />
        </Link>
    </GridListTile>
);
