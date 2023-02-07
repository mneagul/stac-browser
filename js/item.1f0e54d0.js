"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[8178,6521,4106],{6521:function(t,e,s){s.r(e),s.d(e,{default:function(){return k}});var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"assets mb-4"},[t.displayTitle?e("h2",[t._v(t._s(t.displayTitle))]):t._e(),e("div",{staticClass:"accordion",attrs:{role:"tablist"}},t._l(t.assets,(function(s,a){return e("Asset",{key:a,attrs:{asset:s,expand:t.expand,context:t.context,definition:t.definition,shown:t.shown.includes(a),id:a},on:{show:t.show}})})),1)])},i=[],r=function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"asset",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-0",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.uid,expression:"uid"}],staticClass:"p-2 d-flex",attrs:{block:"",variant:"asset",squared:""}},[e("span",{staticClass:"title"},[e("span",{staticClass:"mr-1",attrs:{"aria-hidden":"true"}},[t.expanded?e("b-icon-chevron-down"):e("b-icon-chevron-right")],1),t._v(" "+t._s(t.asset.title||t.id)+" ")]),Array.isArray(t.asset.roles)?e("div",{staticClass:"badges ml-1"},[t.shown?e("b-badge",{staticClass:"shown ml-1 mb-1",attrs:{variant:"success",title:t.$t("assets.currentlyShown")}},[e("b-icon-check"),t._v(" "+t._s(t.$t("assets.shown"))+" ")],1):t._e(),t.asset.deprecated?e("b-badge",{staticClass:"deprecated ml-1 mb-1",attrs:{variant:"warning"}},[t._v(t._s(t.$t("deprecated")))]):t._e(),t._l(t.asset.roles,(function(s){return e("b-badge",{key:s,staticClass:"role ml-1 mb-1",attrs:{variant:"data"===s?"primary":"secondary"}},[t._v(t._s(t.displayRole(s)))])})),t.shortFileFormat?e("b-badge",{staticClass:"format ml-1 mb-1",attrs:{variant:"dark",title:t.fileFormat}},[e("span",{domProps:{innerHTML:t._s(t.shortFileFormat)}})]):t._e()],2):t._e()])],1),e("b-collapse",{attrs:{id:t.uid,accordion:t.type,role:"tabpanel"},on:{input:t.collapseToggled},model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"expanded"}},[e("b-card-body",[e("b-card-title",[e("span",{domProps:{innerHTML:t._s(t.fileFormat)}})]),t.href?e("b-button-group",{staticClass:"actions"},[t.shouldCopy?e("CopyButton",{attrs:{variant:"primary",copyText:t.href}},[t._v(" "+t._s(t.buttonText)+" ")]):e("b-button",{attrs:{href:t.href,target:"_blank",variant:"primary"}},[t.browserCanOpenFile?e("b-icon-box-arrow-up-right"):e("b-icon-download"),t._v(" "+t._s(t.buttonText)+" ")],1),t.canShow&&!t.shown?e("b-button",{attrs:{variant:"primary"},on:{click:t.show}},[e("b-icon-eye"),t._v("  "),t.isThumbnail?[t._v(t._s(t.$t("assets.showThumbnail")))]:[t._v(t._s(t.$t("assets.showOnMap")))]],2):t._e()],1):t._e(),t.asset.description?e("b-card-text",{staticClass:"mt-4"},[e("Description",{attrs:{description:t.asset.description,compact:""}})],1):t._e(),e("Metadata",{staticClass:"mt-4",attrs:{data:t.asset,context:t.context,ignoreFields:t.ignore,title:"",type:"Asset"}})],1)],1)],1)},o=[],n=s(11688),l=s(38019),d=s(35834),c=s(20629),p=s(6723),h=s(25025),u=s(43989),b=s(79879),m=s(83681),f={name:"Asset",components:{BCollapse:n.k,BIconBoxArrowUpRight:l.eK4,BIconCheck:l.PaS,BIconChevronDown:l.VIw,BIconChevronRight:l.xkg,BIconDownload:l.f6I,BIconEye:l.unT,CopyButton:()=>s.e(8209).then(s.bind(s,28209)),Description:p["default"],Metadata:h.Z},mixins:[(0,m.Z)({formatMediaType:d.formatMediaType})],props:{asset:{type:Object,required:!0},id:{type:String,required:!0},context:{type:Object,default:null},definition:{type:Boolean,default:!1},expand:{type:Boolean,default:null},shown:{type:Boolean,default:!1}},data(){return{expanded:!1,ignore:["href","title","description","type","roles","proj:bbox","proj:geometry","table:storage_options","xarray:open_kwargs","xarray:storage_options"]}},computed:{...(0,c.rn)(["url","stateQueryParameters"]),...(0,c.Se)(["tileRendererType","getRequestUrl"]),type(){return this.definition?"itemdef":"asset"},uid(){return`${this.type}-${this.id}`},isThumbnail(){return Array.isArray(this.asset.roles)&&this.asset.roles.includes("thumbnail")},canShow(){return"string"===typeof this.asset.type&&(!("server"!==this.tileRendererType||!b.Uz.includes(this.asset.type))||(!this.isGdalVfs||"client"!==this.tileRendererType)&&(!!this.isBrowserProtocol&&!!b.CF.includes(this.asset.type)))},shouldCopy(){return!!this.isGdalVfs||!this.isBrowserProtocol},fileFormat(){return"string"===typeof this.asset.type&&this.asset.type.length>0?this.formatMediaType(this.asset.type):null},shortFileFormat(){return"string"===typeof this.asset.type&&this.asset.type.length>0?this.formatMediaType(this.asset.type,null,{shorten:!0}):null},protocol(){if("string"===typeof this.href&&this.href){let t=this.href.match(/^(\w+):\/\//);if(t)return t[1].toLowerCase()}return null},isBrowserProtocol(){return!this.protocol||b.F7.includes(this.protocol)},isGdalVfs(){return b.ZP.isGdalVfsUri(this.asset.href)},href(){if("string"!==typeof this.asset.href)return null;let t=null;return this.context instanceof u.Z&&(t=this.context.getAbsoluteUrl()),this.getRequestUrl(this.asset.href,t)},from(){if(this.isGdalVfs){let t=this.asset.href.match(/^\/vsi([a-z\d]+)(_streaming)?\//);return this.protocolName(t)}return this.protocolName(this.protocol)},browserCanOpenFile(){if(b.ZP.canBrowserDisplayImage(this.asset))return!0;if("string"===typeof this.asset.type)switch(this.asset.type.toLowerCase()){case"text/html":case"application/xhtml+xml":case"text/plain":case"application/pdf":return!0}return!1},buttonText(){if(this.browserCanOpenFile&&this.isBrowserProtocol)return this.$t("open");let t="download";this.isGdalVfs?t="copyGdalVfsUrl":this.shouldCopy&&(t="copyUrl");let e=!this.isBrowserProtocol&&this.from?"withSource":"generic";return this.$t(`assets.${t}.${e}`,{source:this.from})}},created(){this.stateQueryParameters[this.type].indexOf(this.uid)>-1?this.expanded=!0:"boolean"===typeof this.expand?this.expanded=this.expand:this.expanded=!1},methods:{displayRole(t){let e=`assets.role.${t}`;return this.$te(e)?this.$t(e):t},show(){let t=Object.assign({},this.asset);this.isGdalVfs||(t.href=this.href),this.$emit("show",t,this.id,this.isThumbnail)},protocolName(t){if("string"!==typeof t)return"";switch(t.toLowerCase()){case"s3":return this.$t("protocol.s3");case"abfs":case"abfss":return this.$t("protocol.azure");case"gcs":return this.$t("protocol.gcs");case"ftp":return this.$t("protocol.ftp");case"oss":return this.$t("protocol.oss");case"file":return this.$t("protocol.file")}return""},collapseToggled(t){let e=t?"openCollapsible":"closeCollapsible";this.$store.commit(e,{type:this.type,uid:this.uid})}}},y=f,g=s(1001),w=(0,g.Z)(y,r,o,!1,null,null,null),_=w.exports,x={name:"Assets",components:{Asset:_},props:{assets:{type:Object,required:!0},shown:{type:Array,default:()=>[]},context:{type:Object,default:null},definition:{type:Boolean,default:!1},title:{type:String,default:null}},computed:{count(){return b.ZP.size(this.assets)},displayTitle(){if(null===this.title){let t=this.definition?"assets.inItems":"stacAssets";return this.$tc(t,this.count)}return this.title},expand(){return!this.definition&&(!(1!==this.count||!this.stac||!this.stac.isItem())||null)}},methods:{show(t,e,s){this.$emit("showAsset",t,e,s)}}},C=x,v=(0,g.Z)(C,a,i,!1,null,null,null),k=v.exports},70594:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var a=function(){var t=this,e=t._self._c;return e("div",{key:t.data.id,staticClass:"item"},[e("b-row",[e("b-col",{staticClass:"left"},[e("section",{staticClass:"mb-4"},[e("b-card",{staticClass:"maps-preview",attrs:{"no-body":""}},[e("b-tabs",{ref:"tabs",attrs:{card:"",pills:"",vertical:"",end:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e("b-tab",{attrs:{title:t.$t("map"),"no-body":""}},[e("Map",{attrs:{stac:t.data,stacLayerData:t.selectedAsset,scrollWheelZoom:""},on:{mapClicked:t.mapClicked,dataChanged:t.dataChanged}})],1),t.thumbnails.length>0?e("b-tab",{attrs:{title:t.$t("thumbnails"),"no-body":""}},[e("Thumbnails",{attrs:{thumbnails:t.thumbnails}})],1):t._e()],1)],1)],1),t.hasAssets?e("Assets",{attrs:{assets:t.assets,context:t.data,shown:t.shownAssets},on:{showAsset:t.showAsset}}):t._e(),t.additionalLinks.length>0?e("Links",{attrs:{title:t.$t("additionalResources"),links:t.additionalLinks}}):t._e()],1),e("b-col",{staticClass:"right"},[e("section",{staticClass:"intro"},[t.data.properties.description?e("h2",[t._v(t._s(t.$t("description")))]):t._e(),t.data.properties.deprecated?e("DeprecationNotice",{attrs:{data:t.data}}):t._e(),t.data.properties["anon:warning"]?e("AnonymizedNotice",{attrs:{warning:t.data.properties["anon:warning"]}}):t._e(),t.data.properties.description?e("ReadMore",{attrs:{lines:10,text:t.$t("read.more"),"text-less":t.$t("read.less")}},[e("Description",{attrs:{description:t.data.properties.description}})],1):t._e(),Array.isArray(t.data.properties.keywords)&&t.data.properties.keywords.length>0?e("Keywords",{attrs:{keywords:t.data.properties.keywords}}):t._e()],1),t.collection?e("section",{staticClass:"item-collection card-list mb-4"},[e("h2",[t._v(t._s(t.$tc("stacCollection")))]),e("Catalog",{attrs:{catalog:t.collection,showThumbnail:!1}})],1):t._e(),t.data.properties.providers?e("Providers",{attrs:{providers:t.data.properties.providers}}):t._e(),e("Metadata",{attrs:{data:t.data,type:"Item",ignoreFields:t.ignoredMetadataFields}})],1)],1)],1)},i=[],r=s(20629),o=s(6521),n=s(6723),l=s(1911),d=s(25025),c=s(78907),p=s.n(c),h=s(40691),u=s(82996),b=s(51015),m=s(79879),f={name:"Item",components:{AnonymizedNotice:()=>s.e(6553).then(s.bind(s,96553)),Assets:o["default"],BTabs:u.M,BTab:b.L,Catalog:()=>s.e(7818).then(s.bind(s,57818)),Description:n["default"],DeprecationNotice:()=>s.e(891).then(s.bind(s,80891)),Links:l.Z,Map:()=>Promise.all([s.e(7075),s.e(7450),s.e(6518)]).then(s.bind(s,46518)),Metadata:d.Z,Providers:()=>s.e(7992).then(s.bind(s,7992)),ReadMore:p(),Thumbnails:()=>s.e(5998).then(s.bind(s,55998))},mixins:[h.Z],data(){return{ignoredMetadataFields:["title","description","providers","deprecated","proj:bbox","proj:geometry","anon:warning"]}},computed:{...(0,r.rn)(["data","url"]),...(0,r.Se)(["additionalLinks","collectionLink","getStac"]),collection(){return this.getStac(this.collectionLink)}},watch:{collectionLink:{immediate:!0,handler(t){m.ZP.isObject(t)&&this.$store.dispatch("load",{url:t.href})}}},methods:{mapClicked(){}}},y=f,g=s(1001),w=(0,g.Z)(y,a,i,!1,null,null,null),_=w.exports}}]);
//# sourceMappingURL=item.1f0e54d0.js.map