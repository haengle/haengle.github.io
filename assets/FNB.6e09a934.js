import{p as n}from"./project.7537a623.js";import{e as s,o as e,f as a,w as r,g as l,c as _,a as t}from"./index.53b52483.js";const h=t("h4",null,"Javascript",-1),c=t("code",{class:"javascript"},null,-1),m=[c],v={__name:"FNB",setup(w){const i=`
    var el = $f('.slideContent');
el.on('load', hintBrowser);
el.on('animationEnd', removeHint);

function hintBrowser() { this.style.willChange = 'transform'; }

function removeHint() { this.style.willChange = 'auto'; }

var animation_elements = $f('.fp-image, .fp-image-large');
var the_window = $f(window);

function check_if_in_view() {
    var window_height = the_window.height();
    var window_top_position = the_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    
    $f.each(animation_elements, function() {
        var element = $f(this);
        var element_height = element.outerHeight();
        var element_top_position = element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            element.addClass('in-view');
        } else {
            element.addClass('out-view');
        }
    });
}

the_window.on('scroll resize', check_if_in_view);
the_window.trigger('scroll');`;return(p,d)=>{const o=s("highlightjs");return e(),a(n,{title:"First National Bank",summary:"I created a custom CSS-based animation for the homepage banner and a jQuery/CSS solution for features that fade in as the user scrolls.",image:"henning.jpg",imageDesc:"FNB homepage",siteLink:"https://www.fnbhenning.com"},{code:r(()=>[h,l((e(),_("pre",null,m)),[[o,i]])]),_:1})}}};export{v as default};
