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

/**
 * Item in *Footer → Socials*
 */
export interface FooterDocumentDataSocialsItem {
  /**
   * SocialsLogo field in *Footer → Socials*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[].socialslogo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  socialslogo: prismic.ImageField<never>;

  /**
   * SocialsLink field in *Footer → Socials*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[].socialslink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  socialslink: prismic.LinkField;
}

type FooterDocumentDataSlices1Slice = FooterSlice;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * StoikLogo field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.stoiklogo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  stoiklogo: prismic.ImageField<never>;

  /**
   * StoikLink field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.stoiklink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  stoiklink: prismic.LinkField;

  /**
   * Socials field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socials: prismic.GroupField<Simplify<FooterDocumentDataSocialsItem>>;

  /**
   * Paragraph field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.paragraph
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * logos field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logos
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logos: prismic.ImageField<never> /**
   * Slice Zone field in *Footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices1[]
   * - **Tab**: ColumnSection
   * - **Documentation**: https://prismic.io/docs/field#slices
   */;
  slices1: prismic.SliceZone<FooterDocumentDataSlices1Slice>;
}

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

/**
 * Item in *Header → ButtonChoice*
 */
export interface HeaderDocumentDataButtonchoiceItem {
  /**
   * LinkButtonChoice field in *Header → ButtonChoice*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.buttonchoice[].linkbuttonchoice
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkbuttonchoice: prismic.LinkField;

  /**
   * LinkLabelChoice field in *Header → ButtonChoice*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.buttonchoice[].linklabelchoice
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  linklabelchoice: prismic.RichTextField;
}

/**
 * Item in *Header → LowTitle*
 */
export interface HeaderDocumentDataLowtitleItem {
  /**
   * LowTitleLink field in *Header → LowTitle*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.lowtitle[].lowtitlelink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  lowtitlelink: prismic.LinkField;

  /**
   * LowTitleTitle field in *Header → LowTitle*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.lowtitle[].lowtitletitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  lowtitletitle: prismic.RichTextField;
}

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * LogoLink field in *Header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.logolink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  logolink: prismic.LinkField;

  /**
   * Logo field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Language field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.language
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  language: prismic.ImageField<never>;

  /**
   * ButtonLabel field in *Header*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.buttonlabel
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  buttonlabel: prismic.RichTextField;

  /**
   * ButtonArrow field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.buttonarrow
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  buttonarrow: prismic.ImageField<never>;

  /**
   * ButtonChoice field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.buttonchoice[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  buttonchoice: prismic.GroupField<
    Simplify<HeaderDocumentDataButtonchoiceItem>
  >;

  /**
   * LowTitle field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.lowtitle[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  lowtitle: prismic.GroupField<Simplify<HeaderDocumentDataLowtitleItem>>;
}

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

/**
 * Item in *Logo bank → Logo bank - Group*
 */
export interface LogoBankDocumentDataGrpItem {
  /**
   * Logo field in *Logo bank → Logo bank - Group*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: logo_bank.grp[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Content for Logo bank documents
 */
interface LogoBankDocumentData {
  /**
   * Logo bank - Group field in *Logo bank*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: logo_bank.grp[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  grp: prismic.GroupField<Simplify<LogoBankDocumentDataGrpItem>>;
}

/**
 * Logo bank document from Prismic
 *
 * - **API ID**: `logo_bank`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LogoBankDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<LogoBankDocumentData>,
    "logo_bank",
    Lang
  >;

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

/**
 * Item in *Share article → Share article - Group*
 */
export interface ShareArticleDocumentDataGrpItem {
  /**
   * Icon field in *Share article → Share article - Group*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: share_article.grp[].icn
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icn: prismic.ImageField<never>;

  /**
   * Link (base url) field in *Share article → Share article - Group*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: share_article.grp[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;
}

/**
 * Content for Share article documents
 */
interface ShareArticleDocumentData {
  /**
   * Title field in *Share article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: share_article.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Share article - Group field in *Share article*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: share_article.grp[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  grp: prismic.GroupField<Simplify<ShareArticleDocumentDataGrpItem>>;
}

/**
 * Share article document from Prismic
 *
 * - **API ID**: `share_article`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ShareArticleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ShareArticleDocumentData>,
    "share_article",
    Lang
  >;

/**
 * Item in *Social Media → Social media - Group*
 */
export interface SocialMediaDocumentDataGrpItem {
  /**
   * Icon field in *Social Media → Social media - Group*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: social_media.grp[].icn
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icn: prismic.ImageField<never>;

  /**
   * Link field in *Social Media → Social media - Group*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: social_media.grp[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Social Media documents
 */
interface SocialMediaDocumentData {
  /**
   * Title field in *Social Media*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: social_media.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Social media - Group field in *Social Media*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: social_media.grp[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  grp: prismic.GroupField<Simplify<SocialMediaDocumentDataGrpItem>>;
}

/**
 * Social Media document from Prismic
 *
 * - **API ID**: `social_media`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SocialMediaDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SocialMediaDocumentData>,
    "social_media",
    Lang
  >;

export type AllDocumentTypes =
  | CookieDocument
  | FooterDocument
  | HeaderDocument
  | HomeDocument
  | LegalsDocument
  | LogoBankDocument
  | P404Document
  | RedirectDocument
  | ShareArticleDocument
  | SocialMediaDocument;

/**
 * Primary content in *Footer → Primary*
 */
export interface FooterSliceDefaultPrimary {
  /**
   * Title field in *Footer → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Primary content in *Footer → Items*
 */
export interface FooterSliceDefaultItem {
  /**
   * Label field in *Footer → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.items[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;

  /**
   * Link field in *Footer → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FooterSliceDefaultPrimary>,
  Simplify<FooterSliceDefaultItem>
>;

/**
 * Slice variation for *Footer*
 */
type FooterSliceVariation = FooterSliceDefault;

/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: Footer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSlice = prismic.SharedSlice<"footer", FooterSliceVariation>;

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
   * Title field in *BrunoText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bruno_text.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Text field in *BrunoText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bruno_text.primary.txt
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  txt: prismic.RichTextField;

  /**
   * LastUpdate field in *BrunoText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bruno_text.primary.lastupdate
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  lastupdate: prismic.RichTextField;
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
   * Title field in *Hero404 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero404.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Paragraph field in *Hero404 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero404.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

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

  /**
   * Image field in *Hero404 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero404.primary.img
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  img: prismic.ImageField<never>;
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
      FooterDocumentDataSocialsItem,
      FooterDocumentDataSlices1Slice,
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataButtonchoiceItem,
      HeaderDocumentDataLowtitleItem,
      HomeDocument,
      HomeDocumentData,
      LegalsDocument,
      LegalsDocumentData,
      LegalsDocumentDataSlicesSlice,
      LogoBankDocument,
      LogoBankDocumentData,
      LogoBankDocumentDataGrpItem,
      P404Document,
      P404DocumentData,
      P404DocumentDataSlicesSlice,
      RedirectDocument,
      RedirectDocumentData,
      RedirectDocumentDataRedirectItem,
      ShareArticleDocument,
      ShareArticleDocumentData,
      ShareArticleDocumentDataGrpItem,
      SocialMediaDocument,
      SocialMediaDocumentData,
      SocialMediaDocumentDataGrpItem,
      AllDocumentTypes,
      FooterSlice,
      FooterSliceDefaultPrimary,
      FooterSliceDefaultItem,
      FooterSliceVariation,
      FooterSliceDefault,
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
