import * as React from 'react';
import { Theme, createStyles, makeStyles } from "@material-ui/core";

import { MainImageGroupElement } from "../../../api/Article";
import { config } from '../../../config';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        image: {
            maxWidth: '100%',
        },
    }),
);

export interface ArticleImageProps {
    image: MainImageGroupElement;
}

const getImageUrl = (image: MainImageGroupElement): string => {
    const url = image.value.leadImage.renditions ? image.value.leadImage.renditions.lead.url : '';
    return url ? `${config.host}${url}` : '';
}

const getImageCaption = (image: MainImageGroupElement): string => image.value.leadImageCaption.value


export const ArticleImage: React.FC<ArticleImageProps> = ({ image }) => {
    const styles = useStyles();
    const leadImageUrl = getImageUrl(image);
    const leadImageCaption = getImageCaption(image);

    return leadImageUrl
        ? <img src={leadImageUrl} className={styles.image} alt={leadImageCaption} />
        : null;
}
