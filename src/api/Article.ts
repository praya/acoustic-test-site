import {
    ContentItem,
    MultiFormattedTextElement, Rendition, SingleDateElement,
    SingleGroupElement,
    SingleImageElement,
    SingleTextElement
} from "ibm-wch-sdk-api";


export interface Thumbnail {
    id: string;
    url: string;
}

export interface LeadImageElement extends SingleImageElement {
    renditions: {
        card: Rendition;
        default: Rendition;
        lead: Rendition;
    }
}

export interface MainImageGroupElement extends SingleGroupElement {
    value: {
        leadImage: LeadImageElement;
        leadImageCaption: SingleTextElement;
        leadImageCredit: SingleTextElement;
    };
}

export interface ArticleContentItem extends ContentItem {
    type: 'Article';
    thumbnail: Thumbnail;
    elements: {
        heading: SingleTextElement;
        author: SingleTextElement;
        body: MultiFormattedTextElement;
        date: SingleDateElement;
        mainImage: MainImageGroupElement;
    }
}
