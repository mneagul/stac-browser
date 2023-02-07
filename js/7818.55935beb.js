(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[7818],{57818:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return f}});var r=function(){var t=this,e=t._self._c;return e("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.400",value:t.load,expression:"load",modifiers:{400:!0}}],class:t.classes,attrs:{"no-body":"","img-right":t.isList}},[t.hasImage?e("b-card-img-lazy",t._b({staticClass:"thumbnail",attrs:{offset:"200"}},"b-card-img-lazy",t.thumbnail,!1)):t._e(),e("b-card-body",[e("b-card-title",[e("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.catalog]}})],1),t.data&&(t.data.description||t.data.deprecated)?e("b-card-text",{staticClass:"intro"},[t.data.deprecated?e("b-badge",{staticClass:"deprecated",attrs:{variant:"warning"}},[t._v(t._s(t.$t("deprecated")))]):t._e(),t._v(" "+t._s(t._f("stripCommonmark")(t.data.description))+" ")],1):t._e(),t.temporalExtent?e("b-card-text",{staticClass:"datetime"},[e("span",{domProps:{innerHTML:t._s(t.temporalExtent)}})]):t._e()],1)],1)},s=[],i=(a(57658),a(20629)),l=a(83681),n=a(59642),o=a(9342),c=a(43989),h=a(26525),p=a.n(h),d=a(35834),m={name:"Catalog",components:{StacLink:o["default"]},filters:{stripCommonmark(t){return p()(t)}},mixins:[n.Z,(0,l.Z)({formatTemporalExtent:d.formatTemporalExtent})],props:{catalog:{type:Object,required:!0}},computed:{...(0,i.Se)(["getStac"]),classes(){let t=["catalog-card"];return this.data||t.push("queued"),this.data&&this.data.deprecated&&t.push("deprecated"),this.hasImage&&t.push("has-thumbnail"),this.temporalExtent&&t.push("has-extent"),t},data(){return this.getStac(this.catalog)},temporalExtent(){var t,e,a;if(null!==(t=this.data)&&void 0!==t&&t.isCollection()&&(null===(e=this.data.extent)||void 0===e||null===(a=e.temporal)||void 0===a?void 0:a.interval.length)>0){let t=this.data.extent.temporal.interval[0];if(Array.isArray(t)&&("string"===typeof t[0]||"string"===typeof t[1]))return this.formatTemporalExtent(this.data.extent.temporal.interval[0],!0)}return null}},methods:{load(t){this.catalog instanceof c.Z||this.$store.commit(t?"queue":"unqueue",this.catalog.href)}}},u=m,g=a(1001),b=(0,g.Z)(u,r,s,!1,null,null,null),f=b.exports},59642:function(t,e,a){"use strict";var r=a(20629);e["Z"]={props:{showThumbnail:{type:Boolean,default:!0}},computed:{...(0,r.rn)(["cardViewMode","crossOriginMedia","defaultThumbnailSize"]),isList(){return this.data&&!this.data.isItem()&&"list"===this.cardViewMode},hasImage(){return this.showThumbnail&&this.thumbnail},thumbnail(){if(this.data){let t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0){let e,a,r=t[0];return Array.isArray(r["proj:shape"])&&2===r["proj:shape"].length?[a,e]=r["proj:shape"]:Array.isArray(this.defaultThumbnailSize)&&2===this.defaultThumbnailSize.length&&([a,e]=this.defaultThumbnailSize),{src:r.href,alt:r.title,crossorigin:this.crossOriginMedia,right:this.isList,blankColor:"rgba(0, 0, 0, 0.125)",width:e,height:a}}}return null}}}},26525:function(t,e,a){var r=a(25108);t.exports=function(t,e){e=e||{},e.listUnicodeChar=!!e.hasOwnProperty("listUnicodeChar")&&e.listUnicodeChar,e.stripListLeaders=!e.hasOwnProperty("stripListLeaders")||e.stripListLeaders,e.gfm=!e.hasOwnProperty("gfm")||e.gfm,e.useImgAltText=!e.hasOwnProperty("useImgAltText")||e.useImgAltText,e.abbr=!!e.hasOwnProperty("abbr")&&e.abbr,e.replaceLinksWithURL=!!e.hasOwnProperty("replaceLinksWithURL")&&e.replaceLinksWithURL,e.htmlTagsToSkip=e.hasOwnProperty("htmlTagsToSkip")?e.htmlTagsToSkip:[];var a=t||"";a=a.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*/gm,"");try{e.stripListLeaders&&(a=e.listUnicodeChar?a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,e.listUnicodeChar+" $1"):a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),e.gfm&&(a=a.replace(/\n={2,}/g,"\n").replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),e.abbr&&(a=a.replace(/\*\[.*\]:.*\n/,"")),a=a.replace(/<[^>]*>/g,"");var s=new RegExp("<[^>]*>","g");if(e.htmlTagsToSkip.length>0){var i="(?!"+e.htmlTagsToSkip.join("|")+")";s=new RegExp("<"+i+"[^>]*>","ig")}a=a.replace(s,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,e.useImgAltText?"$1":"").replace(/\[([^\]]*?)\][\[\(].*?[\]\)]/g,e.replaceLinksWithURL?"$2":"$1").replace(/^\s{0,3}>\s?/gm,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} #{0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*]+)(\S)(.*?\S)??\1/g,"$2$3").replace(/(^|\W)([_]+)(\S)(.*?\S)??\2($|\W)/g,"$1$3$4$5").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/~(.*?)~/g,"$1")}catch(l){return r.error(l),t}return a}}}]);
//# sourceMappingURL=7818.55935beb.js.map