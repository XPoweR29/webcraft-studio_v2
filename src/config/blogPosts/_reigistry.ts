import { PostPageConfig } from '@/types/blog.type';
import { DLACZEGO_TWOJA_FIRMA_POTRZEBUJE_PROFESJONALNEJ_STRONY } from './dlaczego-twoja-firma-potrzebuje-profesjonalnej-strony-internetowej.config';
import { DRUGI_WPIS } from './drugi-wpis.config';
import { TRZECI } from './trzeci.config';

export const BLOG_POSTS: PostPageConfig[] = [
	DLACZEGO_TWOJA_FIRMA_POTRZEBUJE_PROFESJONALNEJ_STRONY,
	DRUGI_WPIS,
	TRZECI
];

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
