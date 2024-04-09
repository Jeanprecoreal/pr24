// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Lista → Item*
 */
export interface ListaDocumentDataItemItem {}

/**
 * Content for Lista documents
 */
interface ListaDocumentData {
  /**
   * Item field in *Lista*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: lista.item[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  item: prismic.GroupField<Simplify<ListaDocumentDataItemItem>>;
}

/**
 * Lista document from Prismic
 *
 * - **API ID**: `lista`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ListaDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ListaDocumentData>, "lista", Lang>;

type ListasDocumentDataSlicesSlice = never;

/**
 * Content for Listas documents
 */
interface ListasDocumentData {
  /**
   * Slice Zone field in *Listas*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: listas.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ListasDocumentDataSlicesSlice> /**
   * Meta Description field in *Listas*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: listas.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Listas*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: listas.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Listas*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: listas.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Listas document from Prismic
 *
 * - **API ID**: `listas`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ListasDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ListasDocumentData>, "listas", Lang>;

export type AllDocumentTypes = ListaDocument | ListasDocument;

/**
 * Primary content in *Lista → Primary*
 */
export interface ListaSliceDefaultPrimary {
  /**
   * nome field in *Lista → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: lista.primary.nome
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nome: prismic.KeyTextField;
}

/**
 * Default variation for Lista Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ListaSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Lista*
 */
type ListaSliceVariation = ListaSliceDefault;

/**
 * Lista Shared Slice
 *
 * - **API ID**: `lista`
 * - **Description**: Lista
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListaSlice = prismic.SharedSlice<"lista", ListaSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ListaDocument,
      ListaDocumentData,
      ListaDocumentDataItemItem,
      ListasDocument,
      ListasDocumentData,
      ListasDocumentDataSlicesSlice,
      AllDocumentTypes,
      ListaSlice,
      ListaSliceDefaultPrimary,
      ListaSliceVariation,
      ListaSliceDefault,
    };
  }
}