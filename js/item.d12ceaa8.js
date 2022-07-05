"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[178,129],{5129:function(t,e,s){s.r(e),s.d(e,{default:function(){return k}});s(6699);var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"assets mb-4"},[t.displayTitle?e("h2",[t._v(t._s(t.displayTitle))]):t._e(),e("div",{staticClass:"accordion",attrs:{role:"tablist"}},t._l(t.assets,(function(s,a){return e("Asset",{key:t.getId(a),attrs:{asset:s,expand:t.expand,context:t.context,definition:t.definition,shown:t.shown.includes(a),id:a},on:{show:t.show}})})),1)])},i=[],r=function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"asset",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-0",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.uid,expression:"uid"}],staticClass:"p-2 d-flex",attrs:{block:"",variant:"asset",squared:""}},[e("span",{staticClass:"title"},[e("span",{staticClass:"mr-1",attrs:{"aria-hidden":"true"}},[t.expanded?e("b-icon-chevron-down"):e("b-icon-chevron-right")],1),t._v(" "+t._s(t.asset.title||t.id)+" ")]),Array.isArray(t.asset.roles)?e("div",{staticClass:"badges ml-1"},[t.shown?e("b-badge",{staticClass:"shown ml-1 mb-1",attrs:{variant:"success",title:"This is the asset currently shown"}},[e("b-icon-check"),t._v(" shown ")],1):t._e(),t.asset.deprecated?e("b-badge",{staticClass:"deprecated ml-1 mb-1",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e(),t._l(t.asset.roles,(function(s){return e("b-badge",{key:s,staticClass:"role ml-1 mb-1",attrs:{variant:"data"===s?"primary":"secondary"}},[t._v(t._s(s))])})),e("b-badge",{staticClass:"format ml-1 mb-1",attrs:{variant:"dark",title:t.fileFormat}},[e("span",{domProps:{innerHTML:t._s(t.shortFileFormat)}})])],2):t._e()])],1),e("b-collapse",{attrs:{id:t.uid,accordion:"assets",role:"tabpanel"},model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"expanded"}},[e("b-card-body",[e("b-card-title",[e("span",{domProps:{innerHTML:t._s(t.fileFormat)}})]),t.href?e("b-button-group",{staticClass:"actions"},[t.shouldCopy?e("CopyButton",{attrs:{variant:"primary",copyText:t.href}},[t._v(" "+t._s(t.buttonText)+" ")]):e("b-button",{attrs:{href:t.href,target:"_blank",variant:"primary"}},[t.browserCanOpenFile?e("b-icon-box-arrow-up-right"):e("b-icon-download"),t._v(" "+t._s(t.buttonText)+" ")],1),t.canShow&&!t.shown?e("b-button",{attrs:{variant:"primary"},on:{click:t.show}},[e("b-icon-eye"),t.isThumbnail?[t._v(" Show thumbnail")]:[t._v(" Show on map")]],2):t._e()],1):t._e(),t.asset.description?e("b-card-text",{staticClass:"mt-4"},[e("Description",{attrs:{description:t.asset.description,compact:!0}})],1):t._e(),e("Metadata",{staticClass:"mt-4",attrs:{data:t.asset,context:t.context,ignoreFields:t.ignore,title:"",type:"Asset"}})],1)],1)],1)},o=[],n=s(1688),l=s(8019),d=s(5834),c=s(629),p=s(8346),h=s(2259),u=s(9898),b=s(8661);const m=b.yF.concat(b.WI);var f={name:"Asset",components:{BCollapse:n.k,BIconBoxArrowUpRight:l.eK4,BIconCheck:l.PaS,BIconChevronDown:l.VIw,BIconChevronRight:l.xkg,BIconDownload:l.f6I,BIconEye:l.unT,CopyButton:()=>s.e(972).then(s.bind(s,1972)),Description:p.Z,Metadata:h.Z},props:{asset:{type:Object,required:!0},id:{type:String,required:!0},context:{type:Object,default:null},definition:{type:Boolean,default:!1},expand:{type:Boolean,default:null},shown:{type:Boolean,default:!1}},data(){return{expanded:!1,ignore:["href","title","description","type","roles","proj:bbox","proj:geometry","table:storage_options","xarray:open_kwargs","xarray:storage_options"]}},computed:{...(0,c.rn)(["url"]),...(0,c.Se)(["tileRendererType","getRequestUrl"]),uid(){return(this.definition?"item-def-":"asset-")+String(this.id)},isThumbnail(){return Array.isArray(this.asset.roles)&&this.asset.roles.includes("thumbnail")},canShow(){return"string"===typeof this.asset.type&&(!("server"!==this.tileRendererType||!m.includes(this.asset.type))||(!this.isGdalVfs||"client"!==this.tileRendererType)&&(!!this.isBrowserProtocol&&!!m.includes(this.asset.type)))},shouldCopy(){return!!this.isGdalVfs||!this.isBrowserProtocol},fileFormat(){return"string"===typeof this.asset.type&&this.asset.type.length>0?d.Formatters.formatMediaType(this.asset.type):null},shortFileFormat(){return"string"===typeof this.asset.type&&this.asset.type.length>0?d.Formatters.formatMediaType(this.asset.type,null,{shorten:!0}):null},protocol(){if("string"===typeof this.href&&this.href){let t=this.href.match(/^(\w+):\/\//);if(t)return t[1].toLowerCase()}return null},isBrowserProtocol(){return!this.protocol||b.F7.includes(this.protocol)},isGdalVfs(){return b.ZP.isGdalVfsUri(this.asset.href)},href(){if("string"!==typeof this.asset.href)return null;let t=null;return this.context instanceof u.Z&&(t=this.context.getAbsoluteUrl()),this.getRequestUrl(this.asset.href,t)},from(){if(this.isGdalVfs){let t=this.asset.href.match(/^\/vsi([a-z\d]+)(_streaming)?\//);return this.protocolName(t)}return this.protocolName(this.protocol)},browserCanOpenFile(){if(b.ZP.canBrowserDisplayImage(this.asset))return!0;if("string"===typeof this.asset.type)switch(this.asset.type.toLowerCase()){case"text/html":case"application/xhtml+xml":case"text/plain":case"application/pdf":return!0}return!1},buttonText(){if(this.browserCanOpenFile&&this.isBrowserProtocol)return"Open";let t=[],e="for";return this.isGdalVfs?t.push("Copy GDAL VFS URL"):this.shouldCopy?t.push("Copy URL"):(t.push("Download"),e="from"),!this.isBrowserProtocol&&this.from&&(t.push(e),t.push(this.from)),t.join(" ")}},created(){"boolean"===typeof this.expand?this.expanded=this.expand:this.expanded=!1},methods:{show(){let t=Object.assign({},this.asset);this.isGdalVfs||(t.href=this.href),this.$emit("show",t,this.id,this.isThumbnail)},protocolName(t){if("string"!==typeof t)return"";switch(t.toLowerCase()){case"s3":return"Amazon S3";case"abfs":case"abfss":return"Microsoft Azure";case"gcs":return"Google Cloud";case"ftp":return"FTP";case"oss":return"Alibaba Cloud";case"file":return"local file system"}return""}}},y=f,w=s(1001),g=(0,w.Z)(y,r,o,!1,null,null,null),_=g.exports,C={name:"Assets",components:{Asset:_},props:{assets:{type:Object,required:!0},shown:{type:Array,default:()=>[]},context:{type:Object,default:null},definition:{type:Boolean,default:!1},title:{type:String,default:null}},computed:{displayTitle(){return null===this.title?this.definition?"Assets in Items":"Assets":this.title},expand(){return!this.definition&&(!(1!==b.ZP.size(this.assets)||!this.stac||!this.stac.isItem())||null)}},methods:{getId(t){return(this.definition?"item-def-":"asset-")+String(t)},show(t,e,s){this.$emit("showAsset",t,e,s)}}},v=C,x=(0,w.Z)(v,a,i,!1,null,null,null),k=x.exports},2927:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"item"},[e("b-row",[e("b-col",{staticClass:"left"},[e("section",{staticClass:"mb-4"},[e("b-card",{staticClass:"maps-preview",attrs:{"no-body":""}},[e("b-tabs",{ref:"tabs",attrs:{card:"",pills:"",vertical:"",end:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e("b-tab",{attrs:{title:"Map","no-body":""}},[e("Map",{attrs:{stac:t.data,stacLayerData:t.selectedAsset},on:{mapClicked:t.mapClicked,mapChanged:t.mapChanged}})],1),t.thumbnails.length>0?e("b-tab",{attrs:{title:"Thumbnails","no-body":""}},[e("Thumbnails",{attrs:{thumbnails:t.thumbnails}})],1):t._e()],1)],1)],1),t.hasAssets?e("Assets",{attrs:{assets:t.assets,context:t.data,shown:t.shownAssets},on:{showAsset:t.showAsset}}):t._e(),t.additionalLinks.length>0?e("Links",{attrs:{title:"Additional resources",links:t.additionalLinks}}):t._e()],1),e("b-col",{staticClass:"right"},[e("section",{staticClass:"intro"},[t.data.properties.description?e("h2",[t._v("Description")]):t._e(),t.data.properties.deprecated?e("DeprecationNotice",{attrs:{data:t.data}}):t._e(),t.data.properties["anon:warning"]?e("AnonymizedNotice",{attrs:{warning:t.data.properties["anon:warning"]}}):t._e(),t.data.properties.description?e("ReadMore",{key:t.data.properties.description,attrs:{lines:10}},[e("Description",{attrs:{description:t.data.properties.description}})],1):t._e(),Array.isArray(t.data.properties.keywords)&&t.data.properties.keywords.length>0?e("Keywords",{attrs:{keywords:t.data.properties.keywords}}):t._e()],1),t.collection?e("section",{staticClass:"item-collection card-list mb-4"},[e("h2",[t._v("Collection")]),e("Catalog",{attrs:{catalog:t.collection,showThumbnail:!1}})],1):t._e(),t.data.properties.providers?e("Providers",{attrs:{providers:t.data.properties.providers}}):t._e(),e("Metadata",{attrs:{data:t.data,type:"Item",ignoreFields:t.ignoredMetadataFields}})],1)],1)],1)},i=[],r=s(629),o=s(5129),n=s(8346),l=s(2181),d=s(2259),c=s(8907),p=s.n(c),h=s(8028),u=s(2996),b=s(1015),m=s(8661),f={name:"Item",components:{AnonymizedNotice:()=>s.e(596).then(s.bind(s,4596)),Assets:o["default"],BTabs:u.M,BTab:b.L,Catalog:()=>s.e(110).then(s.bind(s,2110)),Description:n.Z,DeprecationNotice:()=>s.e(920).then(s.bind(s,8920)),Links:l.Z,Map:()=>s.e(412).then(s.bind(s,8412)),Metadata:d.Z,Providers:()=>s.e(565).then(s.bind(s,9565)),ReadMore:p(),Thumbnails:()=>s.e(447).then(s.bind(s,7447))},mixins:[h.Z],data(){return{ignoredMetadataFields:["title","description","providers","deprecated","proj:bbox","proj:geometry","anon:warning"]}},computed:{...(0,r.rn)(["data","url"]),...(0,r.Se)(["additionalLinks","collection","collectionLink"])},watch:{collectionLink:{immediate:!0,handler(t){m.ZP.isObject(t)&&this.$store.dispatch("load",{url:t.href})}}},methods:{mapClicked(){}}},y=f,w=s(1001),g=(0,w.Z)(y,a,i,!1,null,null,null),_=g.exports}}]);
//# sourceMappingURL=item.d12ceaa8.js.map