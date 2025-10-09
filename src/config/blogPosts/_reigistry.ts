import { PostPageConfig } from '@/types/blog.type';
import { FIRST_POST } from './wprowadzenie-do-moich-postow.config';
import { SECOND_POST } from './po-co-ci-strona-internetowa.config';
import { THIRD_POST } from './poprawne-pozycjonowanie-online.config';
import { FIRST_POST as I } from './wprowadzenie-do-moich-postow.config';
import { SECOND_POST as II } from './po-co-ci-strona-internetowa.config';
import { THIRD_POST as III } from './poprawne-pozycjonowanie-online.config';
import { GMB_POST } from './pokaz-swoja-pozycje-w-google-maps.config';
import { FIRST_POST as i } from './wprowadzenie-do-moich-postow.config';
import { SECOND_POST as ii } from './po-co-ci-strona-internetowa.config';
import { THIRD_POST as iii } from './poprawne-pozycjonowanie-online.config';
import { GMB_POST as iv } from './pokaz-swoja-pozycje-w-google-maps.config';
import { THIRD_POST as v } from './poprawne-pozycjonowanie-online.config';
import { GMB_POST as vi } from './pokaz-swoja-pozycje-w-google-maps.config';
import { KIJAS } from './kijas.config';

export const BLOG_POSTS: PostPageConfig[] = [FIRST_POST, SECOND_POST, THIRD_POST, I, II, III, GMB_POST,i,ii,iii,iv, v, vi, KIJAS];

//NOTE Dodawanie klejnego wpisu: 
// 1 - dodaj nowy plik .tsx do /blogPosts
// 2 - uzupełnij odpowiednio configa
// 3 - dodaj nową stronę do rejestru
/**
 * 🧭 ZASADA DZIAŁANIA BLOGA (Next.js App Router)
 * ----------------------------------------------
 *
 * 1️⃣ STRUKTURA
 * - /config/blogPosts/ → pojedyncze wpisy (.config.tsx)
 * - /config/reigistry.ts → lista wszystkich wpisów (BLOG_POSTS)
 * - /utils/getBlogData.ts → helpery (pseudo-API)
 * - /app/blog/page.tsx → lista wpisów (grid)
 * - /app/blog/[slug]/page.tsx → pojedynczy wpis
 *
 * 2️⃣ GENEROWANIE (SSG)
 * - `generateStaticParams()` pobiera wszystkie slugi z BLOG_POSTS.
 * - Next.js generuje statycznie każdą stronę `/blog/[slug]` + `/blog`.
 * ✅ szybkie ładowanie, SEO-friendly, bez runtime fetchy.
 *
 * 3️⃣ RENDEROWANIE
 * - `/blog` → `getAllBlogPreviews()` → render kart z danych preview.
 * - `/blog/[slug]` → `getBlogPostBySlug(slug)` → render pełnego wpisu.
 *
 * 4️⃣ METADANE (opcjonalnie)
 * - `generateMetadata()` może zwracać `title` i `description` z `post.metadata`.
 * - Można dodać schema.org typu `"BlogPosting"` dla rich snippets.
 *
 * 5️⃣ ROZBUDOWA / MIGRACJA
 * - Obecnie dane lokalne (configi).
 * - Później wystarczy podmienić helpery → zapytania do API / MySQL.
 * ✅ bez zmian w strukturze i komponentach frontu.
 */

