import{p as r}from"./project.7dc9534e.js";import{e as c,o as a,f as l,w as h,g as t,c as s,a as e}from"./index.2c9eb7f3.js";const m=e("h3",null,"SVG Animation",-1),p=e("p",null,"To randomly animate the polygons in the SVG, I used javascript to assign a number to a CSS variable, then accessed the variable for the animation-delay property.",-1),d=e("h4",null,"Sass",-1),g=e("code",{class:"scss"},null,-1),f=[g],u=e("h4",null,"jQuery",-1),_=e("code",{class:"javascript"},null,-1),y=[_],T={__name:"Tifb",setup(v){const o=`
        @keyframes fade100 {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        @keyframes fadein-scale {
            0% { 
                opacity: 0; 
                transform: scale(0.6) translateY(8px); 
                transform-origin: right; 
            }
            100% { opacity: 1; }
        }

        .banner-wrapper {
            opacity: 0;
            position: relative;
            z-index: 400;
            animation: fade100 1.2s ease-in-out 1 forwards;
            > svg {
                opacity: 0;
                position: absolute;
                z-index: 50;
                mix-blend-mode: multiply;
                animation: fade100 1.5s ease-in-out 1s 1 forwards;
                polygon {
                    animation-name: fadein-scale;
                    animation-duration: 250ms;
                    animation-delay: calc(var(--animation-order) * 70ms);
                    animation-fill-mode: both;
                    animation-timing-function: ease-in-out;
                }
            }
        }`,n=`
    var polygons = $f('.page-header-img svg polygon, .banner-wrapper > svg polygon').length;
    $f('.page-header-img svg polygon, .banner-wrapper > svg polygon').each(function(i) {
        var random = Math.floor(Math.random() * (polygons - 1) + 1);
        $f(this).attr('style', '--animation-order: '+random);
    `;return(b,w)=>{const i=c("highlightjs");return a(),l(r,{title:"This is FIRSTBranch",summary:"'This is FIRSTBranch' is the customer-facing marketing site used to drive sales for Kasasa's website product, FIRSTBranch. As the lead engineer, I worked with internal stakeholders to bring the approved design mockups to life by leveraging custom SVG animations and scroll interaction.",image:"tifb.png",imageDesc:"This is Firstbranch homepage",siteLink:"https://www.thisisfirstbranch.com"},{code:h(()=>[m,p,d,t((a(),s("pre",null,f)),[[i,o]]),u,t((a(),s("pre",null,y)),[[i,n]])]),_:1})}}};export{T as default};
