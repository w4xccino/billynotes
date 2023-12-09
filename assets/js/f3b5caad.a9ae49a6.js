"use strict";(self.webpackChunkbillynotes=self.webpackChunkbillynotes||[]).push([[54],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=o,y=m["".concat(i,".").concat(p)]||m[p]||u[p]||s;return r?n.createElement(y,a(a({ref:t},d),{},{components:r})):n.createElement(y,a({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={slug:"docker",title:"Docker?",authors:"w4xccino",date:new Date("2023-12-09T00:00:00.000Z"),tags:["docker"]},a=void 0,l={permalink:"/blog/docker",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/welcome/Docker.md",source:"@site/blog/welcome/Docker.md",title:"Docker?",description:"Recently I decided to start my path to be a DevOps developer. So, in first instance I've learned Docker; at least the basics. After this, I wanted to dockerize a real project from my company where I currently work. It was kinda easy but some errors and complications suddenly appeared. When I finally was able to dockerize the whole project including:",date:"2023-12-09T00:00:00.000Z",formattedDate:"December 9, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"}],readingTime:3.005,hasTruncateMarker:!1,authors:[{name:"Billy Toledo",title:"Bug Professional Maker",url:"https://github.com/w4xccino",imageURL:"https://github.com/w4xccino.png",key:"w4xccino"}],frontMatter:{slug:"docker",title:"Docker?",authors:"w4xccino",date:"2023-12-09T00:00:00.000Z",tags:["docker"]},nextItem:{title:"Today is Halloween",permalink:"/blog/halloween"}},i={authorsImageUrls:[void 0]},c=[],d={toc:c},m="wrapper";function u(e){let{components:t,...s}=e;return(0,o.kt)(m,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Recently I decided to start my path to be a DevOps developer. So, in first instance I've learned Docker; at least the basics. After this, I wanted to dockerize a real project from my company where I currently work. It was kinda easy but some errors and complications suddenly appeared. When I finally was able to dockerize the whole project including: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PHP"),(0,o.kt)("li",{parentName:"ul"},"NGINX"),(0,o.kt)("li",{parentName:"ul"},"PGSQL"),(0,o.kt)("li",{parentName:"ul"},"NODE")),(0,o.kt)("p",null,"I began to get into Jenkins. I watched a lot of tutorials and try to understand the Jenkins file to set up a Pipeline with Laravel. In consecuence, I create those scripts: ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile"),",  ",(0,o.kt)("inlineCode",{parentName:"p"},"Jenkinsfile")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," a nginx-php ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"."),(0,o.kt)("p",null,"Everything was going over the heels until... UNTIL THE DEVIL APPEARED!! Nah, I'm just kidding. It was something worse, the motherfucker permissions. Curiously, everytime that I would run the pipeline, an error message showed. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Selected Git installation does not exist. Using Default The recommended git tool is: NONE\n")),(0,o.kt)("p",null,"I tried everything, since reinstalling GIT, until changing the git path. Nothing works. But I noticed something more... There was another error message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java.nio.file.AccessDeniedException: /var/lib/jenkins/\n")),(0,o.kt)("p",null,"ACCESS FUCKING DENIED???"),(0,o.kt)("p",null,"What I inmediatly did? ",(0,o.kt)("inlineCode",{parentName:"p"},"cd /var/lib/jenkins/workspace/project-name")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ls -la")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"drwxr-xr-x 13 systemd-network systemd-journal   4096 Dec  9 08:41 .\ndrwxr-xr-x  4 jenkins         jenkins           4096 Dec  8 20:58 ..\ndrwxr-xr-x  9 systemd-network systemd-journal   4096 Dec  8 20:58 app\n-rwxr-xr-x  1 systemd-network systemd-journal   1686 Dec  8 22:07 artisan\ndrwxr-xr-x  3 systemd-network systemd-journal   4096 Dec  8 22:07 bootstrap\n-rwxr-xr-x  1 systemd-network systemd-journal   2309 Dec  8 22:07 composer.json\n-rwxr-xr-x  1 systemd-network systemd-journal 398551 Dec  8 22:07 composer.lock\ndrwxr-xr-x  2 systemd-network systemd-journal   4096 Dec  8 22:07 config\ndrwxr-xr-x  5 systemd-network systemd-journal   4096 Dec  8 22:07 database\n-rwxr-xr-x  1 systemd-network systemd-journal   1199 Dec  8 22:07 default.conf\n-rwxr-xr-x  1 systemd-network systemd-journal    977 Dec  9 08:41 docker-compose.yml\n-rwxr-xr-x  1 systemd-network systemd-journal    527 Dec  9 08:41 Dockerfile\n-rwxr-xr-x  1 systemd-network systemd-journal    258 Dec  8 22:07 .editorconfig\n-rwxr-xr-x  1 systemd-network systemd-journal   1097 Dec  8 22:07 .env.example\ndrwxr-xr-x  8 systemd-network systemd-journal   4096 Dec  9 08:41 .git\n-rwxr-xr-x  1 systemd-network systemd-journal    186 Dec  8 22:07 .gitattributes\n-rwxr-xr-x  1 systemd-network systemd-journal    243 Dec  8 22:07 .gitignore\n-rwxr-xr-x  1 systemd-network systemd-journal   1239 Dec  9 08:41 Jenkinsfile\n-rwxr-xr-x  1 systemd-network systemd-journal    165 Dec  9 08:41 Makefile\n-rwxr-xr-x  1 systemd-network systemd-journal    427 Dec  8 22:07 package.json\n-rwxr-xr-x  1 systemd-network systemd-journal 290297 Dec  8 22:07 package-lock.json\n-rw-r--r--  1 systemd-network systemd-journal    264 Dec  8 21:57 .phpunit.result.cache\n-rwxr-xr-x  1 systemd-network systemd-journal   1084 Dec  8 22:07 phpunit.xml\ndrwxr-xr-x  4 systemd-network systemd-journal   4096 Dec  8 22:07 public\n-rwxr-xr-x  1 systemd-network systemd-journal   1114 Dec  8 22:07 README.md\ndrwxr-xr-x  6 systemd-network systemd-journal   4096 Dec  8 20:58 resources\ndrwxr-xr-x  2 systemd-network systemd-journal   4096 Dec  8 22:07 routes\ndrwxr-xr-x  5 systemd-network systemd-journal   4096 Dec  8 20:58 storage\ndrwxr-xr-x  5 systemd-network systemd-journal   4096 Dec  8 22:07 tests\ndrwxr-xr-x 57 systemd-network systemd-journal   4096 Dec  8 20:59 vendor\n-rwxr-xr-x  1 systemd-network systemd-journal    469 Dec  8 22:07 vite.config.js\n")),(0,o.kt)("p",null,"WTF???\n",(0,o.kt)("inlineCode",{parentName:"p"},"systemd-network")," ???"),(0,o.kt)("p",null,"Yeah I know I know... it's my fault. The ",(0,o.kt)("inlineCode",{parentName:"p"},".git")," directory wasn't being found because the new owner of the volume was another one. Everytime that I executed a docker command the directory owner was being changed."),(0,o.kt)("p",null,"Now... I discored that the group_user_id, user_id, and user_name must be specified when I build the image since the Dockerfile, that is sent by the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file which pulls info from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," file. FUUCK!"),(0,o.kt)("p",null,"I noticed how the flow should work. It'll be explained in the next figure."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"flow",src:r(3262).Z,width:"929",height:"327"})),(0,o.kt)("p",null,"I don't know how to solve it yet. Yesterday I gave up, it was almost mid-night. Today I'll spend all day trying to figure it out. I'll be updating this post. Give me luck."))}u.isMDXComponent=!0},3262:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Untitled-2023-10-09-1139-4599b5aae07f2d00566d276c479065e8.png"}}]);