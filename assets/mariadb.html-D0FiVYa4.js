import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as a,d as n,f as s,o as d}from"./app-DGPZyimh.js";const r={},t=n("p",null,"简单理解数据库和使用。",-1),l=s(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>在使用Docker时，经常碰到要为了一个容器，从而重新部署一个数据库，这样比较分散,不便于管理。可以使用MariaDB，搭配adminer进行数据库管理。</p><p>MariaDB数据库管理系统是MySQL的一个分支，主要由开源社区在维护，采用GPL授权许可 MariaDB的目的是完全兼容MySQL，包括API和命令行。</p><ul><li>数据库结构可以理解为- 文件夹和Excel表格文件的关系<br> 层级如下：</li></ul><div class="language-file line-numbers-mode" data-ext="file" data-title="file"><pre class="language-file"><code>.
├── .MariaDB
│    └── MySQL   (Excel表格-数据库1)
│    └── MySQL2  (Excel表格-数据库2)
.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个数据库都可以为其添加用户和密码，这样就能单独访问某一个数据库。</p><p> </p><h2 id="安装mariadb-adminer" tabindex="-1"><a class="header-anchor" href="#安装mariadb-adminer"><span>安装MariaDB+Adminer</span></a></h2><h3 id="mariadb-adminer-stack" tabindex="-1"><a class="header-anchor" href="#mariadb-adminer-stack"><span>MariaDB+Adminer Stack</span></a></h3><blockquote><p>将配置中的 ROOT_ACCESS_PASSWORD 替换成要给 root 用户设置的密码。</p></blockquote><div class="language-compose line-numbers-mode" data-ext="compose" data-title="compose"><pre class="language-compose"><code>---
version: &quot;2&quot;
services:
  mariadb:
    image: linuxserver/mariadb
    container_name: mariadb
    environment:
      - PUID=1000
      - PGID=1000
      - MYSQL_ROOT_PASSWORD=ROOT_ACCESS_PASSWORD 
      - TZ=Asia/Shanghai
    volumes:
      - /volume1/docker/mariadb/mariadb_data:/config
    ports:
      - 3306:3306
    networks:
      - mynet
    restart: unless-stopped
  
  adminer:
    image: adminer
    container_name: adminer
    environment:
      - ADMINER_DEFAULT_SERVER=mariadb
    ports:
      - 9090:8080
    networks:
      - mynet
    restart: unless-stopped

networks:
  mynet:
    external:
      name: mynet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p> </p><h2 id="adminer管理数据库" tabindex="-1"><a class="header-anchor" href="#adminer管理数据库"><span>Adminer管理数据库</span></a></h2><p>一键部署完成后，使用 <code>http://nas-ip:8080</code> , 访问 adminer 的应用界面。 (<code>nas-ip</code>换成你的本地ip)</p><p>初次登录信息如下：</p><ul><li>系统：MYSQL</li><li>服务器：mariadb</li><li>用户名：root</li><li>密码：配置文件中 MYSQL_ROOT_PASSWORD 项的值</li></ul><h3 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库"><span>创建数据库</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240224203741.png" style="width:95% !important;"></div><p>校对： utf8mb4_general_cI （可存储表情数据）</p><h3 id="创建数据库用户" tabindex="-1"><a class="header-anchor" href="#创建数据库用户"><span>创建数据库用户</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240224175241.png" style="width:95% !important;"></div><h3 id="password-hash-should-be-a-41-digit-hexadecimal-number" tabindex="-1"><a class="header-anchor" href="#password-hash-should-be-a-41-digit-hexadecimal-number"><span>Password hash should be a 41-digit hexadecimal number</span></a></h3><p>在设置密码时以上报错：Password hash should be a 41-digit hexadecimal number 原因是：输入的密码是明文，它要求你输入十六进制数字。</p><p>解决方法：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>select password(&#39;密码&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用上方代码-替换<code>密码</code>,然后使用SQL命令-执行<br> 得到对应的十六进制码,再用十六进制码代替明文密码。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240224180420.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240224180126.png" style="width:95% !important;"></div><p> </p><h2 id="docker-compose遇到容器需要绑定的数据库环境描述" tabindex="-1"><a class="header-anchor" href="#docker-compose遇到容器需要绑定的数据库环境描述"><span>docker compose遇到容器需要绑定的数据库环境描述</span></a></h2><p>那么就按下方注释的信息去创建数据库和用户与密码</p><div class="language-compose line-numbers-mode" data-ext="compose" data-title="compose"><pre class="language-compose"><code>容器A:
xxx...
    environment:
        - MYSQL_HOST=mysql                  #登陆主机名称-也就是容器的名称
        - MYSQL_DATABASE=lsky-pro           #下方容器新建的数据库名称
        - MYSQL_USER=lsky-pro               #下方容器新建的数据库的用户
        - MYSQL_PASSWORD=lsky-pro           #下方容器新建的数据库的密码
    networks:
      - mynet

mysql:
xxx...
    environment:
        - MYSQL_DATABASE=lsky-pro           #新建数据库的名称
        - MYSQL_USER=lsky-pro               #新建数据库的用户
        - MYSQL_PASSWORD=lsky-pro           #新建数据库的密码
        - MYSQL_ROOT_PASSWORD=lsky-pro      #容器-数据库的root账号密码
    networks:
      - mynet

networks:
  mynet:
    external:
      name: mynet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>注意的是，其他要使用这个数据库的容器应用，需要都加入到你创建的network中。这样容器之间才可以相互访问。如上方所示·</p></div>`,33);function m(c,o){return d(),i("div",null,[t,a(" more "),l])}const u=e(r,[["render",m],["__file","mariadb.html.vue"]]),h=JSON.parse('{"path":"/server/docker/mariadb.html","title":"MariaDB数据库+Adminer轻量数据库管理工具","lang":"zh-CN","frontmatter":{"title":"MariaDB数据库+Adminer轻量数据库管理工具","description":"简单理解数据库和使用。","icon":"iconfont alicon-MariaDB-","category":"docker","tags":["docker","Mariadb","adminer","MySQL"],"date":"2024-02-24T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240224211909.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/server/docker/mariadb.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"MariaDB数据库+Adminer轻量数据库管理工具"}],["meta",{"property":"og:description","content":"简单理解数据库和使用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240224211909.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240224211909.png"}],["meta",{"name":"twitter:image:alt","content":"MariaDB数据库+Adminer轻量数据库管理工具"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"Mariadb"}],["meta",{"property":"article:tag","content":"adminer"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-02-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MariaDB数据库+Adminer轻量数据库管理工具\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240224211909.png\\"],\\"datePublished\\":\\"2024-02-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-07T17:21:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"安装MariaDB+Adminer","slug":"安装mariadb-adminer","link":"#安装mariadb-adminer","children":[{"level":3,"title":"MariaDB+Adminer Stack","slug":"mariadb-adminer-stack","link":"#mariadb-adminer-stack","children":[]}]},{"level":2,"title":"Adminer管理数据库","slug":"adminer管理数据库","link":"#adminer管理数据库","children":[{"level":3,"title":"创建数据库","slug":"创建数据库","link":"#创建数据库","children":[]},{"level":3,"title":"创建数据库用户","slug":"创建数据库用户","link":"#创建数据库用户","children":[]},{"level":3,"title":"Password hash should be a 41-digit hexadecimal number","slug":"password-hash-should-be-a-41-digit-hexadecimal-number","link":"#password-hash-should-be-a-41-digit-hexadecimal-number","children":[]}]},{"level":2,"title":"docker compose遇到容器需要绑定的数据库环境描述","slug":"docker-compose遇到容器需要绑定的数据库环境描述","link":"#docker-compose遇到容器需要绑定的数据库环境描述","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":3}]},"filePathRelative":"server/docker/mariadb.md","localizedDate":"2024年2月24日","excerpt":"<p>简单理解数据库和使用。</p>\\n","autoDesc":true}');export{u as comp,h as data};
