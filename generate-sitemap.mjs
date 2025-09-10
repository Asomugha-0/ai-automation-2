
import fs from 'fs';
const domain = process.env.SITE_DOMAIN || 'https://nova-automations.example';
const routes = ['/', '/services', '/pricing', '/about', '/contact', '/blog'];
const urls = routes.map(r => `  <url><loc>${domain}${r}</loc></url>`).join('\n');
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
if (!fs.existsSync('dist')) fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/sitemap.xml', xml);
console.log('sitemap generated');
