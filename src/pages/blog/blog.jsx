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
import Link from 'next/link';
import styles from './styles.module.scss';

export default function Home({ page, header, footer, categories, articles }) { 
  const [selectedCategory, setSelectedCategory] = useState(null);

  console.log('Categories data:', categories);
  console.log('Articles data:', articles);

  const { data } = page;

  const filteredArticles = selectedCategory
    ? articles.filter(article => article.data.categorie.id === selectedCategory)
    : articles;

  const getCategoryName = (categoryId) => {
    const category = categories.find(categorie => categorie.id === categoryId);
    return category ? category.data.name : 'Catégorie inconnue';
  };

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
      <div className={styles.blog_main}>
        <div>
          <ul>
            <div className={styles.button_categories_container}>
              <button
                className={`${styles.button_tous} ${selectedCategory === null ? styles.selected : ''}`}
                onClick={() => setSelectedCategory(null)}
              >
                Tous
              </button>
              {categories.map(categorie => (
                <li key={categorie.id}>
                  <button
                    className={`${styles.button_categories} ${selectedCategory === categorie.id ? styles.selected : ''}`}
                    onClick={() => setSelectedCategory(categorie.id)}
                  >
                    {categorie.data.name}
                  </button>
                </li>
              ))}
            </div>
          </ul>
        </div>
        <div>
          <ul>
            {filteredArticles.map(article => (
              <li key={article.id} className={styles.articles_container}>
                <Link href={`/article/${article.uid}`} legacyBehavior>
                  <a>
                    <div className={styles.wrapper}>
                      <p className={styles.articles_title}>{article.data.titlearticle[0].text}</p>
                      <p className={styles.articles_description}>{article.data.descriptionarticle[0].text}</p>
                      <div className={styles.articles_name_categorie_container}>
                        <p className={styles.articles_name_categorie}>{getCategoryName(article.data.categorie.id)}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
