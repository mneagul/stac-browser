(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4134b42c"],{"556b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"catalog-card",class:{queued:!this.data},attrs:{"no-body":"","img-right":t.isList}},[t.showThumbnail&&t.thumbnail&&t.thumbnailVisible?a("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia,right:t.isList}}):t._e(),a("b-card-body",[a("b-card-title",[a("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.catalog]}})],1),t.data&&(t.data.description||t.data.deprecated)?a("b-card-text",{staticClass:"intro"},[t.data.deprecated?a("b-badge",{staticClass:"deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e(),t._v(" "+t._s(t._f("stripCommonmark")(t.data.description))+" ")],1):t._e(),t.temporalExtent?a("b-card-text",{staticClass:"datetime"},[a("span",{domProps:{innerHTML:t._s(t.temporalExtent)}})]):t._e()],1)],1)},i=[],s=a("5530"),n=a("2f62"),l=a("b701"),c=a("2a32"),o=a("b5c1"),d=a.n(o),u=a("6057"),p={name:"Catalog",components:{StacLink:l["default"]},props:{catalog:{type:Object,required:!0},showThumbnail:{type:Boolean,default:!0}},data:function(){return{thumbnailVisible:!1}},filters:{stripCommonmark:function(t){return d()(t)}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(n["c"])(["crossOriginMedia","cardViewMode"])),Object(n["b"])(["getStac"])),{},{isList:function(){return"list"===this.cardViewMode},data:function(){return this.catalog instanceof c["a"]?this.catalog:this.getStac(this.catalog.href)},thumbnail:function(){if(this.data){var t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return null},temporalExtent:function(){var t,e,a;if(null!==(t=this.data)&&void 0!==t&&t.isCollection()&&(null===(e=this.data.extent)||void 0===e||null===(a=e.temporal)||void 0===a?void 0:a.interval.length)>0){var r=this.data.extent.temporal.interval[0];if(Array.isArray(r)&&("string"===typeof r[0]||"string"===typeof r[1]))return u["Formatters"].formatTemporalExtent(this.data.extent.temporal.interval[0],!0)}return null}}),methods:{load:function(t){t&&(this.thumbnailVisible=!0),this.catalog instanceof c["a"]||this.$store.commit(t?"queue":"unqueue",this.catalog.href)}}},g=p,m=(a("b18e"),a("2877")),h=Object(m["a"])(g,r,i,!1,null,null,null);e["default"]=h.exports},8665:function(t,e,a){},b18e:function(t,e,a){"use strict";a("8665")},b5c1:function(t,e){t.exports=function(t,e){e=e||{},e.listUnicodeChar=!!e.hasOwnProperty("listUnicodeChar")&&e.listUnicodeChar,e.stripListLeaders=!e.hasOwnProperty("stripListLeaders")||e.stripListLeaders,e.gfm=!e.hasOwnProperty("gfm")||e.gfm,e.useImgAltText=!e.hasOwnProperty("useImgAltText")||e.useImgAltText;var a=t||"";a=a.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm,"");try{e.stripListLeaders&&(a=e.listUnicodeChar?a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,e.listUnicodeChar+" $1"):a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),e.gfm&&(a=a.replace(/\n={2,}/g,"\n").replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),a=a.replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,e.useImgAltText?"$1":"").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,"\n\n")}catch(r){return console.error(r),t}return a}}}]);
//# sourceMappingURL=chunk-4134b42c.16e7d818.js.map