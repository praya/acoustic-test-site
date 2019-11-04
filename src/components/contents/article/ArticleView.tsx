import React from 'react';

import { ArticleContentItem } from "../../../api/Article";

import { ArticleImage } from "./ArticleImage";


export interface ArticleViewProps {
    article: ArticleContentItem;
}


export const ArticleView: React.FC<ArticleViewProps> =
    ({ article: { elements: { heading, author, body, mainImage }, created } }) => {
        const createdAt = created ? created.replace(/T.+/, '') : null;

        return (
            <article>
                <h1>{heading.value || 'Untitled'}</h1>

                {author.value && <p><i>{author.value}, {createdAt}</i></p>}

                <p><ArticleImage image={mainImage} /></p>

                {body.values && body.values.map((bodyValue, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: bodyValue }} />
                ))}

            </article>
        );
    }
