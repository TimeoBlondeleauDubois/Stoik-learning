import React, { useState } from 'react';
import Layout from '@/components/layout';
import { SliceZone } from '@prismicio/react';
import { ApiService } from '@/services/api.service';
import { PageService } from '@/services/page.service';
import { CustomService } from '@/services/custom.service';
import { getLangFromLocale } from '@/utils/get-lang-from-locale';
import { components as componentsHeros } from '@/sections/heros';
import { components as componentsSlices } from '@/sections/slices';
import { components as componentsBruno } from '@/sections/bruno';
/* import styles from './styles.module.scss' */

export default function Home({ page, header, footer, categories, articles }) { 
  const [selectedCategory, setSelectedCategory] = useState(null);

  console.log('Categories data:', categories);
  console.log('Articles data:', articles);

  const { data } = page;

  const filteredArticles = selectedCategory
    ? articles.filter(article => article.data.categorie.id === selectedCategory)
    : articles;

  return (
    <Layout header={header} footer={footer} currentPage="blog">
      <SliceZone
        slices={data.slices}
        components={{
          ...componentsHeros,
          ...componentsSlices,
          ...componentsBruno,
        }}
      />
      <div>
        <ul>
          <button onClick={() => setSelectedCategory(null)}>
            Tous
          </button>
          {categories.map(categorie => (
            <li key={categorie.id}>
              <button onClick={() => setSelectedCategory(categorie.id)}>
                {categorie.data.name}
              </button>
            </li>
          ))}
          <li>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          {filteredArticles.map(article => (
            <li key={article.id}>
              <p>id de l'article: {article.uid}</p>
              <p>id de la catégorie présent dans l'article: {article.data.categorie.id}</p>
              <p>nom de la catégorie présent dans l'article: {article.data.categorie.slug}</p>
              <p>titre de l'article: {article.data.titlearticle[0].text}</p>
              <p>description de l'article: {article.data.descriptionarticle[0].text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale, previewData }) {
  const lang = getLangFromLocale(locale);

  ApiService.setPreviewData({ previewData });
  const pageService = new PageService(lang);
  const customService = new CustomService(lang);
  const [page, header, footer, categories, articles] = await Promise.all([
    pageService.getBlog(),
    customService.getHeader(),
    customService.getFooter(),
    pageService.getAllCategories(),
    pageService.getAllArticle()
  ]);

  return {
    props: {
      page,
      header,
      footer,
      categories,
      articles,
    },
  };
}
