import { defineConfig } from 'astro/config';

export default defineConfig({
  // 改成你的 GitHub 仓库名，例如仓库名为 "pages" 则为 '/pages/'
  // 如果是 <用户名>.github.io 仓库（根路径部署），改为 '/'
  site: 'https://你的用户名.github.io',
  base: '/pages/',
});
