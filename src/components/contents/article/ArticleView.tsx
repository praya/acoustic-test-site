import React from 'react';
import moment from 'moment';

import { ArticleContentItem } from "../../../api/Article";

import { ArticleImage } from "./ArticleImage";


export interface ArticleViewProps {
    article: ArticleContentItem;
}


export const ArticleView: React.FC<ArticleViewProps> =
    ({ article: { elements: { heading, author, date, body, mainImage }, created } }) => {
        return (
            <article>
                <h1>{heading.value || 'Untitled'}</h1>

                <p>
                    <i>
                        {author.value && author.value}
                        {author.value && date.value && ', '}
                        {date.value && moment(date.value).fromNow()}
                    </i>
                </p>

                <p><ArticleImage image={mainImage} /></p>

                {body.values && body.values.map((bodyValue, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: bodyValue }} />
                ))}

            </article>
        );
    }
