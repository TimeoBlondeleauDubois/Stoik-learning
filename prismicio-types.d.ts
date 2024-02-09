// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Cookie documents
 */
interface CookieDocumentData {
  /**
   * Title field in *Cookie*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: cookie.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Text field in *Cookie*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cookie.txt
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  txt: prismic.RichTextField;

  /**
   * Button - Text field in *Cookie*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cookie.btntxt
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  btntxt: prismic.KeyTextField;
}

/**
 * Cookie document from Prismic
 *
 * - **API ID**: `cookie`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CookieDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<CookieDocumentData>,
    "cookie",
    Lang
  >;

interface FooterDocumentData {}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<FooterDocumentData>, "footer", Lang>;

interface HeaderDocumentData {}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HeaderDocumentData>, "header", Lang>;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

type LegalsDocumentDataSlicesSlice = HeroLegalsSlice | BrunoTextSlice;

/**
 * Content for Legals documents
 */
interface LegalsDocumentData {
  /**
   * Slice Zone field in *Legals*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: legals.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<LegalsDocumentDataSlicesSlice> /**
   * Meta Description field in *Legals*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: legals.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Legals*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: legals.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Legals*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: legals.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Legals document from Prismic
 *
 * - **API ID**: `legals`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LegalsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<LegalsDocumentData>, "legals", Lang>;

type P404DocumentDataSlicesSlice = Hero404Slice;

/**
 * Content for p404 documents
 */
interface P404DocumentData {
  /**
   * Slice Zone field in *p404*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: p404.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<P404DocumentDataSlicesSlice> /**
   * Meta Title field in *p404*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: p404.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *p404*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: p404.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *p404*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: p404.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * p404 document from Prismic
 *
 * - **API ID**: `p404`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type P404Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<P404DocumentData>, "p404", Lang>;

/**
 * Item in *Redirect → Redirect*
 */
export interface RedirectDocumentDataRedirectItem {
  /**
   * Source field in *Redirect → Redirect*
   *
   * - **Field Type**: Text
   * - **Placeholder**: /lang/page
   * - **API ID Path**: redirect.redirect[].source
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  source: prismic.KeyTextField;

  /**
   * Destination field in *Redirect → Redirect*
   *
   * - **Field Type**: Text
   * - **Placeholder**: /lang/page
   * - **API ID Path**: redirect.redirect[].destination
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  destination: prismic.KeyTextField;
}

/**
 * Content for Redirect documents
 */
interface RedirectDocumentData {
  /**
   * Redirect field in *Redirect*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: redirect.redirect[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  redirect: prismic.GroupField<Simplify<RedirectDocumentDataRedirectItem>>;
}

/**
 * Redirect document from Prismic
 *
 * - **API ID**: `redirect`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type RedirectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<RedirectDocumentData>,
    "redirect",
    Lang
  >;

export type AllDocumentTypes =
  | CookieDocument
  | FooterDocument
  | HeaderDocument
  | HomeDocument
  | LegalsDocument
  | P404Document
  | RedirectDocument;

/**
 * Primary content in *Text → Primary*
 */
export interface TextSliceDefaultPrimary {
  /**
   * Text field in *Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.primary.txt
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  txt: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;

/**
 * Primary content in *BrunoText → Primary*
 */
export interface BrunoTextSliceDefaultPrimary {
  /**
   * Text field in *BrunoText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bruno_text.primary.txt
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  txt: prismic.RichTextField;
}

/**
 * Default variation for BrunoText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BrunoTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BrunoTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BrunoText*
 */
type BrunoTextSliceVariation = BrunoTextSliceDefault;

/**
 * BrunoText Shared Slice
 *
 * - **API ID**: `bruno_text`
 * - **Description**: BrunoText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BrunoTextSlice = prismic.SharedSlice<
  "bruno_text",
  BrunoTextSliceVariation
>;

/**
 * Primary content in *Hero404 → Primary*
 */
export interface Hero404SliceDefaultPrimary {
  /**
   * Image field in *Hero404 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero404.primary.img
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  img: prismic.ImageField<never>;

  /**
   * Title field in *Hero404 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero404.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Button - Text field in *Hero404 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero404.primary.btntxt
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  btntxt: prismic.KeyTextField;

  /**
   * Button - Link field in *Hero404 → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero404.primary.btnlnk
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  btnlnk: prismic.LinkField;
}

/**
 * Default variation for Hero404 Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Hero404SliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<Hero404SliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero404*
 */
type Hero404SliceVariation = Hero404SliceDefault;

/**
 * Hero404 Shared Slice
 *
 * - **API ID**: `hero404`
 * - **Description**: Hero404
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Hero404Slice = prismic.SharedSlice<
  "hero404",
  Hero404SliceVariation
>;

/**
 * Primary content in *HeroHome → Primary*
 */
export interface HeroHomeSliceDefaultPrimary {
  /**
   * Title field in *HeroHome → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Default variation for HeroHome Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroHomeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroHomeSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroHome*
 */
type HeroHomeSliceVariation = HeroHomeSliceDefault;

/**
 * HeroHome Shared Slice
 *
 * - **API ID**: `hero_home`
 * - **Description**: HeroHome
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroHomeSlice = prismic.SharedSlice<
  "hero_home",
  HeroHomeSliceVariation
>;

/**
 * Primary content in *HeroLegals → Primary*
 */
export interface HeroLegalsSliceDefaultPrimary {
  /**
   * Title field in *HeroLegals → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_legals.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/**
 * Default variation for HeroLegals Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroLegalsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroLegalsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroLegals*
 */
type HeroLegalsSliceVariation = HeroLegalsSliceDefault;

/**
 * HeroLegals Shared Slice
 *
 * - **API ID**: `hero_legals`
 * - **Description**: HeroLegals
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroLegalsSlice = prismic.SharedSlice<
  "hero_legals",
  HeroLegalsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      CookieDocument,
      CookieDocumentData,
      FooterDocument,
      FooterDocumentData,
      HeaderDocument,
      HeaderDocumentData,
      HomeDocument,
      HomeDocumentData,
      LegalsDocument,
      LegalsDocumentData,
      LegalsDocumentDataSlicesSlice,
      P404Document,
      P404DocumentData,
      P404DocumentDataSlicesSlice,
      RedirectDocument,
      RedirectDocumentData,
      RedirectDocumentDataRedirectItem,
      AllDocumentTypes,
      TextSlice,
      TextSliceDefaultPrimary,
      TextSliceVariation,
      TextSliceDefault,
      BrunoTextSlice,
      BrunoTextSliceDefaultPrimary,
      BrunoTextSliceVariation,
      BrunoTextSliceDefault,
      Hero404Slice,
      Hero404SliceDefaultPrimary,
      Hero404SliceVariation,
      Hero404SliceDefault,
      HeroHomeSlice,
      HeroHomeSliceDefaultPrimary,
      HeroHomeSliceVariation,
      HeroHomeSliceDefault,
      HeroLegalsSlice,
      HeroLegalsSliceDefaultPrimary,
      HeroLegalsSliceVariation,
      HeroLegalsSliceDefault,
    };
  }
}
