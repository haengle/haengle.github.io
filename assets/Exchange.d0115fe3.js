import{p as i}from"./project.7537a623.js";import{e as c,o as e,f as n,w as s,g as r,c as h,a as t}from"./index.53b52483.js";const p=t("h4",null,"Sass",-1),l=t("code",{class:"scss"},null,-1),d=[l],f={__name:"Exchange",setup(g){const a=`
    .bg {
        width: 50vw;
        background-size: cover;
        background-position: center top;
        transition: opacity .25s;
        &.fp-1 { z-index: 4; opacity: 1; }
        &.fp-2 { z-index: 3; opacity: 0; }
        &.fp-3 { z-index: 2; opacity: 0; }
        &.fp-4 { z-index: 1; opacity: 0; }
    }
    
    .fp {
        z-index: 5;
        .icon {
            background: $darkBlue;
            transition: background-color .25s;
        }
    
        &:hover {
            h3 a { color: $tan; }
            .icon { background-color: $tan; }
            + .bg { z-index: 4; opacity: 1; }
        }
    }`;return(u,m)=>{const o=c("highlightjs");return e(),n(i,{title:"Exchange Bank",summary:"This custom promotional area displays a different image when each feature is interacted with, I created a CSS-only solution for the transitions while keeping the area client-editable in the CMS.",image:"exchange.jpg",imageDesc:"Exchange bank homepage",siteLink:"https://www.myexchangebank.com"},{code:s(()=>[p,r((e(),h("pre",null,d)),[[o,a]])]),_:1})}}};export{f as default};
