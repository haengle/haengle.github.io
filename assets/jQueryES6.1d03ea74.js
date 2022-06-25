import{p as c}from"./project.7dc9534e.js";import{e as d,o as e,f as u,w as h,g as s,c as n,a as t}from"./index.2c9eb7f3.js";const p=t("h3",null,"Mobile-friendly tables",-1),f=t("code",{class:"javascript"},null,-1),g=[f],b=t("code",{class:"javascript"},null,-1),v=[b],m=t("h3",null,"Clickable containers",-1),w=t("p",null,'Leveraged the built-in "stretched link" feature of Bootstrap 5 instead of using a custom function to accomplish the same thing.',-1),_=t("code",{class:"javascript"},null,-1),y=[_],k=t("code",{class:"javascript"},null,-1),j=[k],E={__name:"jQueryES6",setup(L){const i=`
    // jQuery
    function setupTables() {
        var tables = $f('div.table.split, table.split');
        tables.each(function(){
    
            var newLayout = $f('<table class="msplit table"><tbody></tbody></table>');
    
            // Split the rows up into the header row (<th/>) and data rows (<td/>).
            var table = $f(this);
            var rows = table.find('tr');
            var headings = rows.eq(0).children();
            var dataRows = rows.slice(1);
    
            dataRows.each(function(){
                var row = $f(this);
                var columns = row.children();
    
                columns.each(function(index){
                    var heading = headings.eq(index).html();
                    var data = $f(this).html();
                    if( index % headings.length === 0 ) {
                        // new "column"
                        newLayout.append('<tr><th colspan="2">' + data + '</th></tr>');
                    }
                    else {
                        newLayout.append('<tr><td>' + heading + '</td><td>' + data + '</td></tr>');
                    }
                });
            });
    
            // Display new headings and data
            table.after(newLayout);
        });
    }
    `,r=`
    // vanilla JS
    function setupTables() {
        var tables = document.querySelectorAll('div.table.split, table.split');
        [...tables].forEach(table => {
            // find first row
            allRows = table.getElementsByTagName('tr');
            firstRow = allRows[0];
            const [, ...dataRows] = allRows;
    
            dataRows.forEach(data => {
                cells = data.getElementsByTagName('td');
                for (let i = 0; i < cells.length; i++) {
                    cells[i].setAttribute('data-label', firstRow.children[i].textContent)
                }
            });
        });
    }`,o=`
    // jQuery
    function clickableContainer(target){
        target.on('click', function(e) {
            var self = $f(this);
            var a = self.find('a');
            var href = a.attr('href');
    
            if (a && a.hasClass("confirm")) {
                initBb(href, alertText);
            } else if (a && a.hasClass("warn")) {
                initBb(href, warnText);
            } else if( href.indexOf('.pdf') >= 0 || a.attr('target') == '_blank') {
                window.open(href);
            } else if (a) {
                window.location = href;
            }
    
        }).addClass('clickable');
    
        target.find('a').on('click', function(e) {
            e.stopPropagation();
        });
    }`,l=`
    // vanilla JS
    function clickableContainer(target){
        var targets = document.querySelectorAll(target);
        [...targets].forEach(target => {
            const posValue = getComputedStyle(target);
            const targetLink = target.getElementsByTagName('a')[0];
            if (posValue.position == 'static') { target.style.position = "relative"; }
            targetLink.classList.add('stretched-link');
            targetLink.style.position = "static";
            target.classList.add('clickable');
    
            var targetLinkContentWrapper = document.createElement('span');
            targetLinkContentWrapper.append(...targetLink.childNodes);
            targetLink.appendChild(targetLinkContentWrapper);
        });
    
    }
    `;return(C,B)=>{const a=d("highlightjs");return e(),u(c,{title:"jQuery -> Javascript",summary:`As the owner of the FIRSTBranch codebase, I constantly sought out opportunities to improve and modernize functions and
                reduce dependencies on 3rd party libraries. A security vulnerability in jQuery required a special project to upgrade all sites using 
                any version of jQuery to be updated to at least version 3.3. To prevent a similar issue in the future, I decided
                to update our entire codebase to remove jQuery as a dependency.`},{code:h(()=>[p,s((e(),n("pre",null,g)),[[a,i]]),s((e(),n("pre",null,v)),[[a,r]]),m,w,s((e(),n("pre",null,y)),[[a,o]]),s((e(),n("pre",null,j)),[[a,l]])]),_:1})}}};export{E as default};
