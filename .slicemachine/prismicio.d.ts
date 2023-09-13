// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Event documents */
interface EventDocumentData {
    /**
     * Title field in *Event*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Speaker field in *Event*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: event.speaker
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    speaker: prismicT.LinkField;
    /**
     * Image field in *Event*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: event.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Start Time field in *Event*
     *
     * - **Field Type**: Timestamp
     * - **Placeholder**: *None*
     * - **API ID Path**: event.start_time
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
     *
     */
    start_time: prismicT.TimestampField;
    /**
     * End Time field in *Event*
     *
     * - **Field Type**: Timestamp
     * - **Placeholder**: *None*
     * - **API ID Path**: event.end_time
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
     *
     */
    end_time: prismicT.TimestampField;
    /**
     * Description field in *Event*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Recording field in *Event*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: event.recording
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    recording: prismicT.LinkField;
}
/**
 * Event document from Prismic
 *
 * - **API ID**: `event`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<EventDocumentData>, "event", Lang>;
/** Content for Innovator documents */
interface InnovatorDocumentData {
    /**
     * Name field in *Innovator*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: innovator.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Description field in *Innovator*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: innovator.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Image field in *Innovator*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: innovator.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Innovators field in *Innovator*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: innovator.innovators[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    innovators: prismicT.GroupField<Simplify<InnovatorDocumentDataInnovatorsItem>>;
    /**
     * Slice Zone field in *Innovator*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: innovator.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<InnovatorDocumentDataSlicesSlice>;
}
/**
 * Item in Innovator → Innovators
 *
 */
export interface InnovatorDocumentDataInnovatorsItem {
    /**
     * Image field in *Innovator → Innovators*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: innovator.innovators[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Name field in *Innovator → Innovators*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: innovator.innovators[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Individual Tagline field in *Innovator → Innovators*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: innovator.innovators[].individual_tagline
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    individual_tagline: prismicT.KeyTextField;
}
/**
 * Slice for *Innovator → Slice Zone*
 *
 */
type InnovatorDocumentDataSlicesSlice = never;
/**
 * Innovator document from Prismic
 *
 * - **API ID**: `innovator`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type InnovatorDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<InnovatorDocumentData>, "innovator", Lang>;
/** Content for Speaker documents */
interface SpeakerDocumentData {
    /**
     * Name field in *Speaker*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: speaker.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Title field in *Speaker*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: speaker.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *Speaker*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: speaker.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Image field in *Speaker*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: speaker.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Links field in *Speaker*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: speaker.links[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    links: prismicT.GroupField<Simplify<SpeakerDocumentDataLinksItem>>;
}
/**
 * Item in Speaker → Links
 *
 */
export interface SpeakerDocumentDataLinksItem {
    /**
     * Text field in *Speaker → Links*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: speaker.links[].text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    text: prismicT.KeyTextField;
    /**
     * Link field in *Speaker → Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: speaker.links[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Speaker document from Prismic
 *
 * - **API ID**: `speaker`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SpeakerDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<SpeakerDocumentData>, "speaker", Lang>;
export type AllDocumentTypes = EventDocument | InnovatorDocument | SpeakerDocument;
/**
 * Primary content in Person → Primary
 *
 */
interface PersonSliceDefaultPrimary {
    /**
     * Title field in *Person → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: person.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Person → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: person.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for Person Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Person`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PersonSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<PersonSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Person*
 *
 */
type PersonSliceVariation = PersonSliceDefault;
/**
 * Person Shared Slice
 *
 * - **API ID**: `person`
 * - **Description**: `Person`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PersonSlice = prismicT.SharedSlice<"person", PersonSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { EventDocumentData, EventDocument, InnovatorDocumentData, InnovatorDocumentDataInnovatorsItem, InnovatorDocumentDataSlicesSlice, InnovatorDocument, SpeakerDocumentData, SpeakerDocumentDataLinksItem, SpeakerDocument, AllDocumentTypes, PersonSliceDefaultPrimary, PersonSliceDefault, PersonSliceVariation, PersonSlice };
    }
}
