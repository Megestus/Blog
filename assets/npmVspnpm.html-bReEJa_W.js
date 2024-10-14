import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as s,d as a,e as p,f as i,o as c}from"./app-Dabd4gyE.js";const l={};function o(r,n){return c(),t("div",null,[n[0]||(n[0]=s("h3",{id:"npm-node-package-manager-vs-pnpm-package-node-module",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#npm-node-package-manager-vs-pnpm-package-node-module"},[s("span",null,"NPM (Node Package Manager) vs. PNPM (Package Node Module)")])],-1)),n[1]||(n[1]=s("p",null,[s("strong",null,"NPM"),a(" 是 Node.js 的默认包管理器。它用于安装、管理和发布 Node.js 包。NPM 在 Node.js 社区中被广泛使用，并且是许多项目的默认选择。")],-1)),n[2]||(n[2]=s("p",null,[s("strong",null,"PNPM"),a(" 是一个性能优化的包管理器，旨在提供更快的安装速度和更小的磁盘占用空间。PNPM 使用链接树（link tree）来减少重复文件的数量，从而节省磁盘空间。")],-1)),p(" more "),n[3]||(n[3]=i(`<h4 id="主要区别" tabindex="-1"><a class="header-anchor" href="#主要区别"><span>主要区别:</span></a></h4><ol><li><strong>磁盘空间</strong>: PNPM 通过链接共享依赖项，减少了磁盘上的冗余文件。</li><li><strong>安装速度</strong>: PNPM 通常比 NPM 快，因为它并行化了安装过程。</li><li><strong>内存使用</strong>: PNPM 在安装大型项目时通常使用较少的内存。</li><li><strong>全局安装</strong>: NPM 可以全局安装包，而 PNPM 不推荐这样做。</li><li><strong>缓存</strong>: PNPM 使用本地缓存，这有助于加速安装过程。</li><li><strong>版本兼容性</strong>: PNPM 支持所有 NPM 支持的功能，并保持向后兼容性。</li></ol><h3 id="安装方式" tabindex="-1"><a class="header-anchor" href="#安装方式"><span>安装方式</span></a></h3><h4 id="安装-npm" tabindex="-1"><a class="header-anchor" href="#安装-npm"><span>安装 NPM</span></a></h4><p>实际上，安装 Node.js 时，NPM 已经作为 Node.js 的一部分被安装了。可以通过以下命令检查 NPM 是否已安装及版本信息：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>需要更新 NPM 到最新版本，可以使用下面的命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">npm</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="安装-pnpm" tabindex="-1"><a class="header-anchor" href="#安装-pnpm"><span>安装 PNPM</span></a></h4><p>可以通过 NPM 来安装 PNPM：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">pnpm</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者使用 Yarn (如果已经安装了 Yarn)：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">yarn</span> global <span class="token function">add</span> <span class="token function">pnpm</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装完成后，可以在项目目录中使用 <code>pnpm</code> 命令来安装和管理依赖。</p><p>例如，在项目中初始化并安装依赖：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">pnpm</span> init <span class="token comment"># 初始化一个新的项目</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> express <span class="token comment"># 安装 express 框架</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装pnpm" tabindex="-1"><a class="header-anchor" href="#安装pnpm"><span>安装pnpm</span></a></h2><p>要检查 <code>pnpm</code> 是否已经安装在您的系统上，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">pnpm</span> <span class="token parameter variable">--version</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者简写为：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">pnpm</span> <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果 <code>pnpm</code> 已经正确安装，这个命令会输出 <code>pnpm</code> 的版本号。如果没有安装或者路径设置有问题，会看到类似于找不到命令的错误信息。</p><p>一般报错</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>corepack<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>corepack.cjs:22534</span>
<span class="line">    throw new Error<span class="token punctuation">(</span></span>
<span class="line">          ^</span>
<span class="line"></span>
<span class="line">Error: Error when performing the request to https://registry.npmjs.org/pnpm/-/pnpm-9.6.0.tgz<span class="token punctuation">;</span> <span class="token keyword">for</span> troubleshooting help, see https://github.com/nodejs/corepack<span class="token comment">#troubleshooting</span></span>
<span class="line">    at fetch <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>corepack<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>corepack.cjs:22534:11<span class="token punctuation">)</span></span>
<span class="line">    at process.processTicksAndRejections <span class="token punctuation">(</span>node:internal/process/task_queues:95:5<span class="token punctuation">)</span></span>
<span class="line">    at async fetchUrlStream <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>corepack<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>corepack.cjs:22564:20<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">..</span>. <span class="token number">4</span> lines matching cause stack trace <span class="token punctuation">..</span>.</span>
<span class="line">    at async Object.runMain <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>corepack<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>corepack.cjs:24007:5<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>cause<span class="token punctuation">]</span>: TypeError: fetch failed</span>
<span class="line">      at node:internal/deps/undici/undici:13178:13</span>
<span class="line">      at process.processTicksAndRejections <span class="token punctuation">(</span>node:internal/process/task_queues:95:5<span class="token punctuation">)</span></span>
<span class="line">      at async fetch <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>corepack<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>corepack.cjs:22528:16<span class="token punctuation">)</span></span>
<span class="line">      at async fetchUrlStream <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>corepack<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>corepack.cjs:22564:20<span class="token punctuation">)</span></span>
<span class="line">      at async download <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>corepack<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>corepack.cjs:22688:18<span class="token punctuation">)</span></span>
<span class="line">      at async installVersion <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>corepack<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>corepack.cjs:22781:55<span class="token punctuation">)</span></span>
<span class="line">      at async Engine.ensurePackageManager <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>corepack<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>corepack.cjs:23224:32<span class="token punctuation">)</span></span>
<span class="line">      at async Engine.executePackageManagerRequest <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>corepack<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>corepack.cjs:23320:25<span class="token punctuation">)</span></span>
<span class="line">      at async Object.runMain <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>corepack<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>corepack.cjs:24007:5<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">[</span>cause<span class="token punctuation">]</span>: ConnectTimeoutError: Connect Timeout Error <span class="token punctuation">(</span>attempted addresses: <span class="token number">104.16</span>.0.35:443<span class="token punctuation">)</span></span>
<span class="line">        at onConnectTimeout <span class="token punctuation">(</span>node:internal/deps/undici/undici:2331:28<span class="token punctuation">)</span></span>
<span class="line">        at node:internal/deps/undici/undici:2283:50</span>
<span class="line">        at Immediate._onImmediate <span class="token punctuation">(</span>node:internal/deps/undici/undici:2313:37<span class="token punctuation">)</span></span>
<span class="line">        at process.processImmediate <span class="token punctuation">(</span>node:internal/timers:483:21<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      code: <span class="token string">&#39;UND_ERR_CONNECT_TIMEOUT&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">Node.js v20.16.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则是因为尝试从 NPM 仓库下载 <code>pnpm-9.6.0.tgz</code> 文件时发生了连接超时错误。这可能是由于网络问题导致的。</p><h3 id="更改-npm-镜像源" tabindex="-1"><a class="header-anchor" href="#更改-npm-镜像源"><span><strong>更改 NPM 镜像源</strong>：</span></a></h3><ul><li>所在的地区访问 NPM 仓库速度较慢，可以考虑使用国内镜像源。</li><li>对于 <code>npm</code>，使用以下命令更改镜像源：<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>对于 <code>yarn</code>，可以使用以下命令更改镜像源：<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><p>然后就好了，再使用<code>pnpm -v</code>检查安装即可</p><hr><h4 id="查询当前使用的镜像源" tabindex="-1"><a class="header-anchor" href="#查询当前使用的镜像源"><span>查询当前使用的镜像源</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm get registry</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="官方镜像源" tabindex="-1"><a class="header-anchor" href="#官方镜像源"><span>官方镜像源</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm config set registry https://registry.npmjs.org/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>淘宝镜像源是目前国内使用较为广泛的镜像源之一。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm config set registry https://registry.npmmirror.com/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>腾讯云镜像源提供了另一个选择，同样可以提供快速的下载速度。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm config set registry https://mirrors.cloud.tencent.com/npm/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>cnpm是一个基于npm的中国镜像源，，它提供了npm包的完整镜像，并且更新速度较快</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm config set registry https://r.cnpmjs.org/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,39))])}const m=e(l,[["render",o],["__file","npmVspnpm.html.vue"]]),k=JSON.parse('{"path":"/demo/vuepress/npmVspnpm.html","title":"NPM vs. PNPM","lang":"zh-CN","frontmatter":{"title":"NPM vs. PNPM","icon":"fa-brands fa-vuejs","article":false,"date":"2024-08-06T00:00:00.000Z","category":["Vuepress"],"tags":["Markdown","NPM","PNPM"],"description":"NPM (Node Package Manager) vs. PNPM (Package Node Module) NPM 是 Node.js 的默认包管理器。它用于安装、管理和发布 Node.js 包。NPM 在 Node.js 社区中被广泛使用，并且是许多项目的默认选择。 PNPM 是一个性能优化的包管理器，旨在提供更快的安装速度和更小的磁盘占用空...","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/demo/vuepress/npmVspnpm.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"NPM vs. PNPM"}],["meta",{"property":"og:description","content":"NPM (Node Package Manager) vs. PNPM (Package Node Module) NPM 是 Node.js 的默认包管理器。它用于安装、管理和发布 Node.js 包。NPM 在 Node.js 社区中被广泛使用，并且是许多项目的默认选择。 PNPM 是一个性能优化的包管理器，旨在提供更快的安装速度和更小的磁盘占用空..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:tag","content":"NPM"}],["meta",{"property":"article:tag","content":"PNPM"}],["meta",{"property":"article:published_time","content":"2024-08-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"NPM vs. PNPM\\",\\"description\\":\\"NPM (Node Package Manager) vs. PNPM (Package Node Module) NPM 是 Node.js 的默认包管理器。它用于安装、管理和发布 Node.js 包。NPM 在 Node.js 社区中被广泛使用，并且是许多项目的默认选择。 PNPM 是一个性能优化的包管理器，旨在提供更快的安装速度和更小的磁盘占用空...\\"}"]]},"headers":[{"level":3,"title":"NPM (Node Package Manager) vs. PNPM (Package Node Module)","slug":"npm-node-package-manager-vs-pnpm-package-node-module","link":"#npm-node-package-manager-vs-pnpm-package-node-module","children":[]},{"level":3,"title":"安装方式","slug":"安装方式","link":"#安装方式","children":[]},{"level":2,"title":"安装pnpm","slug":"安装pnpm","link":"#安装pnpm","children":[{"level":3,"title":"更改 NPM 镜像源：","slug":"更改-npm-镜像源","link":"#更改-npm-镜像源","children":[]}]}],"git":{"createdTime":1722889957000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":3}]},"filePathRelative":"demo/vuepress/npmVspnpm.md","localizedDate":"2024年8月6日","excerpt":"<h3>NPM (Node Package Manager) vs. PNPM (Package Node Module)</h3>\\n<p><strong>NPM</strong> 是 Node.js 的默认包管理器。它用于安装、管理和发布 Node.js 包。NPM 在 Node.js 社区中被广泛使用，并且是许多项目的默认选择。</p>\\n<p><strong>PNPM</strong> 是一个性能优化的包管理器，旨在提供更快的安装速度和更小的磁盘占用空间。PNPM 使用链接树（link tree）来减少重复文件的数量，从而节省磁盘空间。</p>\\n","autoDesc":true}');export{m as comp,k as data};
