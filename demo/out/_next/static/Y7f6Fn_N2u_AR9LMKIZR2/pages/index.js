(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+IV6":function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"+Sw5":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},"5WRv":function(e,t,n){var a=n("iNmH"),o=n("Qatm"),r=n("Zhxd"),i=n("kluZ");e.exports=function(e){return a(e)||o(e)||r(e)||i()}},"9fEB":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a=s(n("mXGw")),o=s(n("GlZI")),r=n("9rrO"),i=n("bxxT"),l=n("vI6Y");function s(e){return e&&e.__esModule?e:{default:e}}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(o){var r=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?r=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?r=!1:t.add(o.type);break;case"meta":for(var l=0,s=h.length;l<s;l++){var u=h[l];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?r=!1:n.add(u);else{var p=o.props[u],d=a[u]||new Set;d.has(p)?r=!1:(d.add(p),a[u]=d)}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var m=(0,o.default)();function c(e){var t=e.children;return(a.default.createElement(r.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(m,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,l.isInAmpMode)(e)},t)}))})))}c.rewind=m.rewind;var f=c;t.default=f},"9rrO":function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var o=((a=n("mXGw"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=o},GlZI:function(e,t,n){"use strict";var a=n("SDJZ"),o=n("T1e2"),r=n("NToG"),i=n("eef+"),l=n("K4DB"),s=n("+IV6"),u=n("5WRv");function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return l(this,n)}}t.__esModule=!0,t.default=void 0;var h=n("mXGw"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(l){i(u,l);var s=p(u);function u(e){var r;return a(this,u),r=s.call(this,e),d&&(t.add(o(r)),n(o(r))),r}return r(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),r(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(h.Component))}},K4DB:function(e,t,n){var a=n("e+GP"),o=n("T1e2");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?o(e):t}},NToG:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}},Qatm:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"config",(function(){return N}));var a=n("mXGw"),o=n.n(a),r=n("9fEB"),i=n.n(r),l=o.a.createElement,s=function(e){var t=e.meta,n=e.children;return l("div",{className:"antialiased text-gray-900"},l(i.a,null,l("title",null,t.title)),l("div",{className:"px-6 py-12"},n))};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=o.a.createContext({}),d=function(e){var t=o.a.useContext(h),n=t;return e&&(n="function"===typeof e?e(t):Object.assign({},t,e)),n};var m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,p=s[i+"."+u]||s[u]||c[u]||r;return n?o.a.createElement(p,Object.assign({},{ref:t},l,{components:n})):o.a.createElement(p,Object.assign({},{ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"===typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement";o.a.createElement;var g={},b="wrapper";function w(e){var t=e.components,n=p(e,["components"]);return y(b,u({},g,n,{components:t,mdxType:"MDXLayout"}),y("h1",null,"Tailwind CSS Typography"),y("p",null,y("a",u({parentName:"p"},{href:"https://github.com/tailwindcss/typography"}),"View on GitHub")),y("p",{className:"lead"},"Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS."),y("p",null,"By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you ",y("em",{parentName:"p"},"really are")," just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive."),y("p",null,"We get lots of complaints about it actually, with people regularly asking us things like:"),y("blockquote",null,y("p",{parentName:"blockquote"},"Why is Tailwind removing the default styles on my ",y("inlineCode",{parentName:"p"},"h1")," elements? How do I disable this? What do you mean I lose all the other base styles too?")),y("p",null,"We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a ",y("inlineCode",{parentName:"p"},"p")," element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either \u2014 you want them to look ",y("em",{parentName:"p"},"awesome"),", not awful."),y("p",null,"The ",y("inlineCode",{parentName:"p"},"@tailwindcss/typography")," plugin is our attempt to give you what you ",y("em",{parentName:"p"},"actually")," want, without any of the downside of doing something stupid like disabling our base styles."),y("p",null,"It adds a new ",y("inlineCode",{parentName:"p"},"prose")," class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:"),y("pre",null,y("code",u({parentName:"pre"},{className:"language-html"}),'<article class="prose">\n  <h1>Garlic bread with cheese: What the science tells us</h1>\n  <p>\n    For years parents have espoused the health benefits of eating garlic bread with cheese to their\n    children, with the food earning such an iconic status in our culture that kids will often dress\n    up as warm, cheesy loaf for Halloween.\n  </p>\n  <p>\n    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases\n    springing up around the country.\n  </p>\n  \x3c!-- ... --\x3e\n</article>\n')),y("p",null,"For more information about how to use the plugin and the features it includes, ",y("a",u({parentName:"p"},{href:"#"}),"read the documentation"),"."),y("hr",null),y("h2",null,"What to expect from here on out"),y("p",null,"What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like ",y("strong",{parentName:"p"},"bold text"),", unordered lists, ordered lists, code blocks, block quotes, ",y("em",{parentName:"p"},"and even italics"),"."),y("p",null,"It's important to cover all of these use cases for a few reasons:"),y("ol",null,y("li",{parentName:"ol"},"We want everything to look good out of the box."),y("li",{parentName:"ol"},"Really just the first reason, that's the whole point of the plugin."),y("li",{parentName:"ol"},"Here's a third pretend reason though a list with three items looks more realistic than a list with two items.")),y("p",null,"Now we're going to try out another header style."),y("h3",null,"Typography should be easy"),y("p",null,"So that's a header for you \u2014 with any luck if we've done our job correctly that will look pretty reasonable."),y("p",null,"Something a wise person once told me about typography is:"),y("blockquote",null,y("p",{parentName:"blockquote"},"Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.")),y("p",null,"It's probably important that images look okay here by default as well:"),y("figure",null,y("img",{src:"https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",alt:""}),y("figcaption",null,"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.")),y("p",null,"Now I'm going to show you an example of an unordered list to make sure that looks good, too:"),y("ul",null,y("li",{parentName:"ul"},"So here is the first item in this list."),y("li",{parentName:"ul"},"In this example we're keeping the items short."),y("li",{parentName:"ul"},"Later, we'll use longer, more complex list items.")),y("p",null,"And that's the end of this section."),y("h2",null,"What if we stack headings?"),y("h3",null,"We should make sure that looks good, too."),y("p",null,"Sometimes you have headings directly underneath each other. In those cases you have often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be."),y("h3",null,"When a heading comes after a paragraph..."),y("p",null,"When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like."),y("ul",null,y("li",{parentName:"ul"},y("p",{parentName:"li"},y("strong",{parentName:"p"},"I often do this thing where list items have headings.")),y("p",{parentName:"li"},"For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right."),y("p",{parentName:"li"},"I often have two or three paragraphs in these list items too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way.")),y("li",{parentName:"ul"},y("p",{parentName:"li"},y("strong",{parentName:"p"},"Since this is a list, I need at least two items.")),y("p",{parentName:"li"},"I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles.")),y("li",{parentName:"ul"},y("p",{parentName:"li"},y("strong",{parentName:"p"},"It's not a bad idea to add a third item either.")),y("p",{parentName:"li"},"I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it."))),y("p",null,"After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading."),y("h2",null,"Code should look okay by default."),y("p",null,"I think most people are going to use ",y("a",u({parentName:"p"},{href:"https://highlightjs.org/"}),"highlight.js")," or ",y("a",u({parentName:"p"},{href:"https://prismjs.com/"}),"Prism")," or something if they want to style their code blocks but it wouldn't hurt to make them look ",y("em",{parentName:"p"},"okay")," out of the box, even with no syntax highlighting."),y("p",null,"Here's what a default ",y("inlineCode",{parentName:"p"},"tailwind.config.js")," file looks like at the time of writing:"),y("pre",null,y("code",u({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  purge: [],\n  theme: {\n    extend: {},\n  },\n  variants: {},\n  plugins: [],\n}\n")),y("p",null,"Hopefully that looks good enough to you."),y("h3",null,"What about nested lists?"),y("p",null,"Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work."),y("ol",null,y("li",{parentName:"ol"},y("strong",{parentName:"li"},"Nested lists are rarely a good idea."),y("ul",{parentName:"li"},y("li",{parentName:"ul"},'You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.'),y("li",{parentName:"ul"},"Nested navigation in UIs is a bad idea too, keep things as flat as possible."),y("li",{parentName:"ul"},"Nesting tons of folders in your source code is also not helpful."))),y("li",{parentName:"ol"},y("strong",{parentName:"li"},"Since we need to have more items, here's another one."),y("ul",{parentName:"li"},y("li",{parentName:"ul"},"I'm not sure if we'll bother styling more than two levels deep."),y("li",{parentName:"ul"},"Two is already too much, three is guaranteed to be a bad idea."),y("li",{parentName:"ul"},"If you nest four levels deep you belong in prison."))),y("li",{parentName:"ol"},y("strong",{parentName:"li"},"Two items isn't really a list, three is good though."),y("ul",{parentName:"li"},y("li",{parentName:"ul"},"Again please don't nest lists if you want people to actually read your content."),y("li",{parentName:"ul"},"Nobody wants to look at this."),y("li",{parentName:"ul"},"I'm upset that we even have to bother styling this.")))),y("p",null,"The most annoying thing about lists in Markdown is that ",y("inlineCode",{parentName:"p"},"<li>")," elements aren't given a child ",y("inlineCode",{parentName:"p"},"<p>")," tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too."),y("ul",null,y("li",{parentName:"ul"},y("p",{parentName:"li"},y("strong",{parentName:"p"},"For example, here's another nested list.")),y("p",{parentName:"li"},"But this time with a second paragraph."),y("ul",{parentName:"li"},y("li",{parentName:"ul"},"These list items won't have ",y("inlineCode",{parentName:"li"},"<p>")," tags"),y("li",{parentName:"ul"},"Because they are only one line each"))),y("li",{parentName:"ul"},y("p",{parentName:"li"},y("strong",{parentName:"p"},"But in this second top-level list item, they will.")),y("p",{parentName:"li"},"This is especially annoying because of the spacing on this paragraph."),y("ul",{parentName:"li"},y("li",{parentName:"ul"},y("p",{parentName:"li"},"As you can see here, because I've added a second line, this list item now has a ",y("inlineCode",{parentName:"p"},"<p>")," tag."),y("p",{parentName:"li"},"This is the second line I'm talking about by the way.")),y("li",{parentName:"ul"},y("p",{parentName:"li"},"Finally here's another list item so it's more like a list.")))),y("li",{parentName:"ul"},y("p",{parentName:"li"},"A closing list item, but with no nested list, because why not?"))),y("p",null,"And finally a sentence to close off this section."),y("h2",null,"There are other elements we need to style"),y("p",null,"I almost forgot to mention links, like ",y("a",u({parentName:"p"},{href:"https://tailwindcss.com"}),"this link to the Tailwind CSS website"),". We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier."),y("p",null,"We even included table styles, check it out:"),y("table",null,y("thead",{parentName:"table"},y("tr",{parentName:"thead"},y("th",u({parentName:"tr"},{align:null}),"Wrestler"),y("th",u({parentName:"tr"},{align:null}),"Origin"),y("th",u({parentName:"tr"},{align:null}),"Finisher"),y("th",u({parentName:"tr"},{align:"right"}),"Championships"))),y("tbody",{parentName:"table"},y("tr",{parentName:"tbody"},y("td",u({parentName:"tr"},{align:null}),'Bret "The Hitman" Hart'),y("td",u({parentName:"tr"},{align:null}),"Calgary, AB"),y("td",u({parentName:"tr"},{align:null}),"Sharpshooter"),y("td",u({parentName:"tr"},{align:"right"}),"32")),y("tr",{parentName:"tbody"},y("td",u({parentName:"tr"},{align:null}),"Stone Cold Steve Austin"),y("td",u({parentName:"tr"},{align:null}),"Austin, TX"),y("td",u({parentName:"tr"},{align:null}),"Stone Cold Stunner"),y("td",u({parentName:"tr"},{align:"right"}),"19")),y("tr",{parentName:"tbody"},y("td",u({parentName:"tr"},{align:null}),"Randy Savage"),y("td",u({parentName:"tr"},{align:null}),"Sarasota, FL"),y("td",u({parentName:"tr"},{align:null}),"Elbow Drop"),y("td",u({parentName:"tr"},{align:"right"}),"29")),y("tr",{parentName:"tbody"},y("td",u({parentName:"tr"},{align:null}),"Vader"),y("td",u({parentName:"tr"},{align:null}),"Boulder, CO"),y("td",u({parentName:"tr"},{align:null}),"Vader Bomb"),y("td",u({parentName:"tr"},{align:"right"}),"6")),y("tr",{parentName:"tbody"},y("td",u({parentName:"tr"},{align:null}),"Razor Ramon"),y("td",u({parentName:"tr"},{align:null}),"Chuluota, FL"),y("td",u({parentName:"tr"},{align:null}),"Razor's Edge"),y("td",u({parentName:"tr"},{align:"right"}),"18")))),y("p",null,"We also need to make sure inline code looks good, like if I wanted to talk about ",y("inlineCode",{parentName:"p"},"<span>")," elements or tell you the good news about ",y("inlineCode",{parentName:"p"},"@tailwindcss/typography"),"."),y("h3",null,"Sometimes I even use ",y("inlineCode",{parentName:"h3"},"code")," in headings"),y("p",null,"Even though it's probably a bad idea, and historically I've had a hard time making it look good. This ",y("em",{parentName:"p"},'"wrap the code blocks in tildes"')," trick works pretty well though really."),y("p",null,"Another thing I've done in the past is put a ",y("inlineCode",{parentName:"p"},"code")," tag inside of a link, like if I wanted to tell you about the ",y("a",u({parentName:"p"},{href:"https://github.com/tailwindcss/docs"}),y("inlineCode",{parentName:"a"},"tailwindcss/docs"))," repository. I don't love that there is an underline below the tildes but it is absolutely not worth the madness it would require to avoid it."),y("h4",null,"We haven't used an ",y("inlineCode",{parentName:"h4"},"h4")," yet"),y("p",null,"But now we have. Please don't use ",y("inlineCode",{parentName:"p"},"h5")," or ",y("inlineCode",{parentName:"p"},"h6")," in your content, Medium only supports two heading levels for a reason you animals. I honestly considered using a ",y("inlineCode",{parentName:"p"},"before")," pseudo-element to scream at you if you use an ",y("inlineCode",{parentName:"p"},"h5")," or ",y("inlineCode",{parentName:"p"},"h6"),"."),y("p",null,"We don't style them at all out of the box because ",y("inlineCode",{parentName:"p"},"h4")," elements are already so small that they are the same size as the body copy. What are we supposed to do with an ",y("inlineCode",{parentName:"p"},"h5"),", make it ",y("em",{parentName:"p"},"smaller")," than the body copy? No thanks."),y("h3",null,"We still need to think about stacked headings though."),y("h4",null,"Let's make sure we don't screw that up with ",y("inlineCode",{parentName:"h4"},"h4")," elements, either."),y("p",null,"Phew, with any luck we have styled the headings above this text and they look pretty good."),y("p",null,"Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document."),y("p",null,"What I've written here is probably long enough, but adding this final sentence can't hurt."))}w.isMDXComponent=!0;var v=o.a.createElement,N=(t.default=function(){return v(s,{meta:{title:"Tailwind CSS Typography"}},v("div",{className:"prose mx-auto"},v(w,null)))},{unstable_runtimeJS:!1})},SDJZ:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},T1e2:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},TqC3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},WI9V:function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},Zhxd:function(e,t,n){var a=n("+Sw5");e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},bxxT:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((a=n("mXGw"))&&a.__esModule?a:{default:a}).default.createContext(null);t.HeadManagerContext=o},"e+GP":function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},"eef+":function(e,t,n){var a=n("WI9V");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},iNmH:function(e,t,n){var a=n("+Sw5");e.exports=function(e){if(Array.isArray(e))return a(e)}},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},vI6Y:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(r.AmpStateContext))};var a,o=(a=n("mXGw"))&&a.__esModule?a:{default:a},r=n("9rrO");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,o=void 0!==a&&a,r=e.hasQuery;return n||o&&(void 0!==r&&r)}},x9yg:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports}},[["TqC3",0,1]]]);