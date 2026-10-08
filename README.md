# World Flags — PWA paketi

## GitHub Pages-də yerləşdirmə
1. GitHub-da yeni repo yarat (məs. `world-flags`), **bütün faylları və qovluqları** (`index.html`, `manifest.json`, `service-worker.js`, `icons/`, `splash/`, `.nojekyll`) repo-nun kökünə yüklə.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save.
3. 1–2 dəqiqədən sonra `https://<istifadəçi>.github.io/world-flags/` açılır (HTTPS avtomatikdir).

## Telefona yükləmə
- iPhone: linki **Safari**-də aç → Paylaş → "Ana ekrana əlavə et".
- Android: **Chrome**-da aç → ⋮ → "Tətbiqi yüklə" / "Ana ekrana əlavə et".
Bir dəfə internetlə açandan sonra oyun oflayn işləyir.

## Qeydlər
- Proqres (`localStorage`, açar `wf1`) saytın ünvanına bağlıdır. claude.ai-dakı proqres bu ünvana avtomatik köçmür.
- Eyni `istifadəçi.github.io` altındakı başqa layihələr eyni localStorage-ı paylaşır; `wf1` açarı ilə toqquşma ehtimalı azdır.
- Yeni buraxılışda `service-worker.js` içindəki `CACHE` adını dəyiş (`wf-pwa-v2`). Ondan sonra istifadəçilər tətbiqi bağlayıb yenidən açanda yeni versiya gəlir.
- iPhone açılış (splash) şəkilləri yalnız portret iPhone ölçüləri üçündür; iPad üçün yoxdur. Android açılış ekranı manifestdən (rəng + ikon) avtomatik yaranır.
