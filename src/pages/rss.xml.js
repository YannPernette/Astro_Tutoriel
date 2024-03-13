import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Blog Tutoriel Astro',
    description: "Le tutoriel d'apprentissage Astro par blog",
    site: 'https://astro-tutoriel.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>fr-fr</language>`,
  });
}