"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[678],{3996:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var r=t(7294),c=t(4195),l=t(6125),n=t(8285),i=t(1974),s=t(7655),m=function(e){var a=(0,r.useContext)(s.Z).theme,t=e.accent,c=e.title,n=e.description,m=e.links,d=e.display,p=d.light,f=d.dark,o="light"===a?p:f;return r.createElement("div",{className:"card "+t},r.createElement("div",{className:"titlebar"},r.createElement("span",{className:"title"},c)),r.createElement("div",{className:"window"},r.createElement("div",{className:"display"},r.createElement(l.G,{alt:"Project screenshot",image:o.childImageSharp.gatsbyImageData})),r.createElement("p",{className:"description"},n),r.createElement("div",{className:"links"},m.map((function(e,a){var c=e.type,l=e.url;return r.createElement(i.Qj,{key:a,accent:t,type:c,link:l,target:"_blank",rel:"noreferrer"})})))))},d=t(2001),p=function(e){var a=e.data;return r.createElement("main",null,r.createElement("title",null,"Home Page - Faraaz Biyabani"),r.createElement(c.Z,null,r.createElement("div",{id:"about",className:"home-container"},r.createElement("div",{id:"home"},r.createElement("div",{className:"hello"},r.createElement("h1",{className:"header-1"},n.oU.F),r.createElement("p",{className:"subtitle-1"},n.oU.O),r.createElement("div",{className:"links"},r.createElement(i.Qj,{type:"Mail",link:n.PX.X5}),r.createElement("a",{className:"link",href:n.PX.bW,target:"_blank",rel:"noreferrer",title:"GitHub"},d.fZ),r.createElement("a",{className:"link",href:n.PX.kG,target:"_blank",rel:"noreferrer",title:"LinkedIn"},d.e2))),r.createElement("div",{className:"photo"},r.createElement(l.S,{src:"../static/images/faraaz.png",alt:"profile-picture",imgClassName:"profile-picture",loading:"lazy",placeholder:"blurred",__imageData:t(6482)})))),r.createElement("div",{id:"skills",className:"skills-container"},r.createElement("h2",{className:"header-2"},"Skills"),r.createElement("ul",{className:"skills"},n.nb.map((function(e,a){var t=e.label,c=e.icon,l=e.mono;return r.createElement("li",{key:a,className:"skill"},r.createElement("span",{className:"li-icon "+(l?"mono":"")},d.ci[c]),t)})))),r.createElement("div",{id:"projects",className:"projects-container"},r.createElement("h2",{className:"header-2"},"Projects"),r.createElement("div",{className:"projects"},a.content.projects.map((function(e,a){var t=e.accent,c=e.title,l=e.description,n=e.display,i=e.links;return r.createElement(m,{key:a,accent:t,title:c,description:l,links:i,display:n})}))))))}},6482:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAADo0lEQVQ4y2N4jwHevXv3/v2HHz++v3r58tGDB+/evv3x4ydMHAUwYOr89OnTl8+flyxY4Ovqaq6r7WVvu3Lxwu/fv3348AFNPwOazo+fPj57+jQ3J19FRVtJVk5KUFCQm1uYm7MwMx2iE1k/iua3b9/++vWzu7tXX0u3ISGiP9Krxdc2wVRDX0ZchI/34P6933/8ePv2LU6bv379mpGaNqMi79P2pYcrU7dnh80Ota9x1TeSFZk9c+bfv3/fvHmDXfOH9+/ffvjQVlN1ecXca8tn767K2FUQMzfOo9RZL1RXdsbUKf/+/3/9+jU2ze/effj48fXTJyunTlrSUpPv7xFjZZrvYumuo2qhouhjqL50xuRv377hcPa7d+8/f3l1/cr5ab0XV89f01zWHhfSnRjiqCQbZm4YZ6PXlxj+Aa4SS1R9+PD+zeubS2e/3r3p6pz+MxNb9jYW5Zup1nmaZ5kpb5s95fvvP29x+Rnk8k+fnt28/nTL2gM9TeurSsrdXSL0VMttNCbnxr988QItqhkw09fbj5/enTuxra1md0dLn79PqI5KuK7CyZ2b0azFmsLefvj0afuqFQcndV1aNLPC3z1EWy7D1fL50yfv8aSwt2/fvX7z5vevHxev3IwOjtozras4MkRPVVVHVspbS3b5kiX/wfGEHtrvwODbt68/fny//+BhRd0Ea4fww3N6nmxb3BLunmWl6qIuaWPrePzY8a9fv/78+fPDx48QJzC8e/fu8+dPX79+OXb8VHP7FHffFA1dJwuXRHtLp9n5cT3hzoHaMopyCsLCElKScnGx8Zs2bXr27Nn379/fvn3L8O3b16vXbheWNmnrWsspmemZemvrO1k4Rmmb+qgr60bpypurqAiLyoqLSYkIS/DxCooKi1tb2Z44fvz3798MZ89fdfNLlVYwVlYzU9ey0jV21zf3MTD3k1PUVdN3jrIw1JCV4+IRFBeTEheTkpKUlZKUFRKSUFPV2rJ5C0NITImqjpuusbuqppWatq2alq2GnqOuiae6rr2mvrO2urGYkLiwsLiYqKSEuIy0tJKcvKaKupGwiIy2li6DuWOcjrGXmradlqGbqqa1pp6Thp6jhp6jjpGHromnjIK2kKCopISsjKyKkrKekqqRqqalioaZmKi0pIQsg75FkLFtuKS0io6Jl46Rp5q2rZa+i7aRu7aRm46xh6y8hqSEnLyijqKakZKasZKqsZahi5yirrCQiISkDACmwNHC5a7tzwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/e4d6f3599a79ec5c2dee7c244ae4b41d/12a6a/faraaz.png","srcSet":"/static/e4d6f3599a79ec5c2dee7c244ae4b41d/19b99/faraaz.png 170w,\\n/static/e4d6f3599a79ec5c2dee7c244ae4b41d/c5fad/faraaz.png 341w,\\n/static/e4d6f3599a79ec5c2dee7c244ae4b41d/12a6a/faraaz.png 681w","sizes":"(min-width: 681px) 681px, 100vw"},"sources":[{"srcSet":"/static/e4d6f3599a79ec5c2dee7c244ae4b41d/5376c/faraaz.webp 170w,\\n/static/e4d6f3599a79ec5c2dee7c244ae4b41d/2bf7d/faraaz.webp 341w,\\n/static/e4d6f3599a79ec5c2dee7c244ae4b41d/18a87/faraaz.webp 681w","type":"image/webp","sizes":"(min-width: 681px) 681px, 100vw"}]},"width":681,"height":681}')}}]);
//# sourceMappingURL=component---src-pages-index-js-236a17c8fdb6a81b54d2.js.map