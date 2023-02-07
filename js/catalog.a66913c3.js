(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[701,7818,5259,4106],{57818:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return f}});var s=function(){var t=this,e=t._self._c;return e("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.400",value:t.load,expression:"load",modifiers:{400:!0}}],class:t.classes,attrs:{"no-body":"","img-right":t.isList}},[t.hasImage?e("b-card-img-lazy",t._b({staticClass:"thumbnail",attrs:{offset:"200"}},"b-card-img-lazy",t.thumbnail,!1)):t._e(),e("b-card-body",[e("b-card-title",[e("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.catalog]}})],1),t.data&&(t.data.description||t.data.deprecated)?e("b-card-text",{staticClass:"intro"},[t.data.deprecated?e("b-badge",{staticClass:"deprecated",attrs:{variant:"warning"}},[t._v(t._s(t.$t("deprecated")))]):t._e(),t._v(" "+t._s(t._f("stripCommonmark")(t.data.description))+" ")],1):t._e(),t.temporalExtent?e("b-card-text",{staticClass:"datetime"},[e("span",{domProps:{innerHTML:t._s(t.temporalExtent)}})]):t._e()],1)],1)},i=[],r=(a(57658),a(20629)),n=a(83681),o=a(59642),l=a(9342),c=a(43989),p=a(26525),d=a.n(p),m=a(35834),h={name:"Catalog",components:{StacLink:l["default"]},filters:{stripCommonmark(t){return d()(t)}},mixins:[o.Z,(0,n.Z)({formatTemporalExtent:m.formatTemporalExtent})],props:{catalog:{type:Object,required:!0}},computed:{...(0,r.Se)(["getStac"]),classes(){let t=["catalog-card"];return this.data||t.push("queued"),this.data&&this.data.deprecated&&t.push("deprecated"),this.hasImage&&t.push("has-thumbnail"),this.temporalExtent&&t.push("has-extent"),t},data(){return this.getStac(this.catalog)},temporalExtent(){var t,e,a;if(null!==(t=this.data)&&void 0!==t&&t.isCollection()&&(null===(e=this.data.extent)||void 0===e||null===(a=e.temporal)||void 0===a?void 0:a.interval.length)>0){let t=this.data.extent.temporal.interval[0];if(Array.isArray(t)&&("string"===typeof t[0]||"string"===typeof t[1]))return this.formatTemporalExtent(this.data.extent.temporal.interval[0],!0)}return null}},methods:{load(t){this.catalog instanceof c.Z||this.$store.commit(t?"queue":"unqueue",this.catalog.href)}}},u=h,g=a(1001),b=(0,g.Z)(u,s,i,!1,null,null,null),f=b.exports},45259:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.400",value:t.load,expression:"load",modifiers:{400:!0}}],staticClass:"item-card",class:{queued:!t.data,deprecated:t.isDeprecated},attrs:{"no-body":""}},[t.hasImage?e("b-card-img-lazy",t._b({staticClass:"thumbnail",attrs:{offset:"200"}},"b-card-img-lazy",t.thumbnail,!1)):t._e(),e("b-card-body",[e("b-card-title",[e("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.item]}})],1),e("b-card-text",[e("small",{staticClass:"text-muted"},[t.extent?[t._v(t._s(t._f("formatTemporalExtent")(t.extent)))]:t.data&&t.data.properties.datetime?[t._v(t._s(t._f("formatTimestamp")(t.data.properties.datetime)))]:[t._v(t._s(t.$t("items.noTime")))]],2)]),t.fileFormats.length>0||t.isDeprecated?e("b-card-text",[t._l(t.fileFormats,(function(a){return e("b-badge",{key:a,staticClass:"mr-1 mt-1 fileformat",attrs:{variant:"secondary"}},[t._v(t._s(t._f("formatMediaType")(a)))])})),t.isDeprecated?e("b-badge",{staticClass:"mr-1 mt-1 deprecated",attrs:{variant:"warning"}},[t._v(t._s(t.$t("deprecated")))]):t._e()],2):t._e()],1)],1)},i=[],r=a(20629),n=a(59642),o=a(9342),l=a(43989),c=a(35834),p={name:"Item",components:{StacLink:o["default"]},filters:{formatMediaType:c.formatMediaType,formatTemporalExtent:c.formatTemporalExtent,formatTimestamp:c.formatTimestamp},mixins:[n.Z],props:{item:{type:Object,required:!0}},computed:{...(0,r.Se)(["getStac"]),data(){return this.getStac(this.item)},extent(){return this.data&&(this.data.properties.start_datetime||this.data.properties.end_datetime)?[this.data.properties.start_datetime,this.data.properties.end_datetime]:null},fileFormats(){return this.data?Object.values(this.data.assets).filter((t=>Array.isArray(t.roles)&&t.roles.includes("data")&&"string"===typeof t.type)).map((t=>t.type)).filter(((t,e,a)=>a.indexOf(t)===e)):[]},isDeprecated(){return this.data instanceof l.Z&&Boolean(this.data.properties.deprecated)}},methods:{load(t){this.item instanceof l.Z||this.$store.commit(t?"queue":"unqueue",this.item.href)}}},d=p,m=a(1001),h=(0,m.Z)(d,s,i,!1,null,null,null),u=h.exports},97447:function(t,e,a){"use strict";a.d(e,{Z:function(){return x}});var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"items mb-4"},[e("h2",[e("span",{staticClass:"title"},[t._v(t._s(t.$tc("stacItem",t.items.length)))]),!t.api&&t.items.length>1?e("b-badge",{attrs:{pill:"",variant:"secondary ml-2"}},[t._v(t._s(t.items.length))]):t._e(),t.api?t._e():e("SortButtons",{staticClass:"ml-4",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),t.showPagination?e("Pagination",{ref:"topPagination",attrs:{pagination:t.pagination,placement:"top"},on:{paginate:t.paginate}}):t._e(),t.allowFilter?[t.api?e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.itemFilter",modifiers:{itemFilter:!0}}],staticClass:"mb-4 mt-2",class:{"ml-3":t.showPagination},attrs:{pressed:t.filtersOpen,variant:"outline-primary"}},[e("b-icon-search"),t._v(" "+t._s(t.$t("items.filter"))+" ")],1):t._e(),e("b-collapse",{attrs:{id:"itemFilter"},model:{value:t.filtersOpen,callback:function(e){t.filtersOpen=e},expression:"filtersOpen"}},[t.filtersOpen?e("ItemFilter",t._b({attrs:{stac:t.stac,value:t.apiFilters,collectionOnly:!0},on:{input:t.emitFilter}},"ItemFilter",t.filterComponentProps,!1)):t._e()],1)]:t._e(),e("section",{staticClass:"list"},[t.loading?e("Loading",{attrs:{fill:"",top:""}}):t._e(),t.chunkedItems.length>0?e("b-card-group",{attrs:{columns:""}},t._l(t.chunkedItems,(function(t){return e("Item",{key:t.href,attrs:{item:t}})})),1):e("b-alert",{attrs:{variant:t.hasFilters?"warning":"info",show:""}},[t.hasFilters?[t._v(t._s(t.$t("search.noItemsFound")))]:[t._v(t._s(t.$t("items.noneAvailableForCollection")))]],2)],1),t.showPagination?e("Pagination",{attrs:{pagination:t.pagination},on:{paginate:t.paginate}}):t.hasMore?e("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.300",value:t.showMore,expression:"showMore",modifiers:{300:!0}}],attrs:{variant:"primary"},on:{click:t.showMore}},[t._v(t._s(t.$t("showMore")))]):t._e()],2)},i=[],r=a(45259),n=a(79091),o=function(){var t=this,e=t._self._c;return e("b-button-group",{class:t.classes},[e("b-button",{attrs:{disabled:!t.pagination.first,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.first)}}},[t._v(t._s(t.$t("pagination.first")))]),e("b-button",{attrs:{disabled:!t.pagination.prev,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.prev)}}},[t._v(t._s(t.$t("pagination.previous")))]),e("b-button",{attrs:{disabled:!t.pagination.next,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.next)}}},[t._v(t._s(t.$t("pagination.next")))]),t.pagination.last?e("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.last)}}},[t._v(t._s(t.$t("pagination.last")))]):t._e()],1)},l=[],c={name:"Pagination",props:{pagination:{type:Object,default:()=>({})},placement:{type:String,default:"bottom"}},computed:{classes(){return"top"===this.placement?"mb-4 mt-2":"mb-2 mt-2"}},methods:{paginate(t){this.$emit("paginate",t,this.placement)}}},p=c,d=a(1001),m=(0,d.Z)(p,o,l,!1,null,null,null),h=m.exports,u=a(11688),g=a(38019),b=a(79879),f=a(43989),v=a(37677),_=a(20629),w={name:"Items",components:{BCollapse:u.k,BIconSearch:g.Lln,Item:r["default"],ItemFilter:()=>Promise.all([a.e(7353),a.e(7075),a.e(4240),a.e(1487),a.e(9468),a.e(7320)]).then(a.bind(a,79468)),Loading:n.Z,Pagination:h,SortButtons:()=>a.e(2968).then(a.bind(a,2968))},mixins:[(0,v.ZP)(!0)],props:{items:{type:Array,required:!0},loading:{type:Boolean,default:!1},stac:{type:Object,required:!0},api:{type:Boolean,default:!1},allowFilter:{type:Boolean,default:!0},apiFilters:{type:Object,default:()=>({})},pagination:{type:Object,default:()=>({})},chunkSize:{type:Number,default:90}},data(){return{shownItems:this.chunkSize,filtersOpen:!1,sort:0}},computed:{...(0,_.rn)(["uiLanguage"]),hasMore(){return this.items.length>this.shownItems},hasFilters(){return Object.values(this.apiFilters).filter((t=>!(null===t||0===b.ZP.size(t)))).length>1},chunkedItems(){let t=this.items;return 0!==this.sort&&(t=t.slice(0).sort(((t,e)=>f.Z.getDisplayTitle(t).localeCompare(f.Z.getDisplayTitle(e),this.uiLanguage))),-1===this.sort&&(t=t.reverse())),!this.api&&this.items.length>this.chunkSize?t.slice(0,this.shownItems):t},showPagination(){if(this.api){if(this.hasFilters)return!0;if(this.items.length>0)return Object.values(this.pagination).some((t=>!!t))}return!1}},methods:{emitFilter(t,e){this.$emit("filterItems",t,e)},showMore(){this.shownItems+=this.chunkSize},paginate(t,e){"bottom"===e&&this.$refs.topPagination&&b.ZP.scrollTo(this.$refs.topPagination.$el),this.$emit("paginate",t)}}},y=w,C=(0,d.Z)(y,s,i,!1,null,"7dd728ca",null),x=C.exports},13144:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return q}});var s=function(){var t=this,e=t._self._c;return e("div",{key:t.data.id,class:{cc:!0,[t.data.type.toLowerCase()]:!0,mixed:t.hasCatalogs&&t.hasItems,empty:!t.hasCatalogs&&!t.hasItems}},[e("b-row",[e("b-col",{staticClass:"meta"},[e("section",{staticClass:"intro"},[e("h2",[t._v(t._s(t.$t("description")))]),t.data.deprecated?e("DeprecationNotice",{attrs:{data:t.data}}):t._e(),t.data["anon:warning"]?e("AnonymizedNotice",{attrs:{warning:t.data["anon:warning"]}}):t._e(),t.data.description?e("ReadMore",{attrs:{lines:10,text:t.$t("read.more"),"text-less":t.$t("read.less")}},[e("Description",{attrs:{description:t.data.description}})],1):t._e(),Array.isArray(t.data.keywords)&&t.data.keywords.length>0?e("Keywords",{attrs:{keywords:t.data.keywords}}):t._e(),t.isCollection?e("section",{staticClass:"metadata mb-4"},[t.licenses?e("b-row",[e("b-col",{staticClass:"label",attrs:{md:"4"}},[t._v(t._s(t.$t("catalog.license")))]),e("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:t._s(t.licenses)}})],1):t._e(),t.temporalExtents?e("b-row",[e("b-col",{staticClass:"label",attrs:{md:"4"}},[t._v(t._s(t.$t("catalog.temporalExtent")))]),e("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:t._s(t.temporalExtents)}})],1):t._e()],1):t._e()],1),t.isCollection||t.thumbnails.length>0?e("section",{staticClass:"mb-4"},[e("b-card",{staticClass:"maps-preview",attrs:{"no-body":""}},[e("b-tabs",{ref:"tabs",attrs:{pills:"",card:"",vertical:"",end:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t.isCollection?e("b-tab",{attrs:{title:t.$t("map"),"no-body":""}},[e("Map",{attrs:{stac:t.data,stacLayerData:t.catalogAsFc,popover:""},on:{mapClicked:t.mapClicked,dataChanged:t.dataChanged}})],1):t._e(),t.thumbnails.length>0?e("b-tab",{attrs:{title:t.$t("thumbnails"),"no-body":""}},[e("Thumbnails",{attrs:{thumbnails:t.thumbnails}})],1):t._e()],1)],1)],1):t._e(),t.hasAssets?e("Assets",{attrs:{assets:t.assets,context:t.data,shown:t.shownAssets},on:{showAsset:t.showAsset}}):t._e(),t.hasItemAssets&&!t.hasItems?e("Assets",{attrs:{assets:t.data.item_assets,definition:!0}}):t._e(),t.hasProviders?e("Providers",{attrs:{providers:t.data.providers}}):t._e(),e("Metadata",{staticClass:"mb-4",attrs:{title:t.$t("metadata.title"),type:t.data.type,data:t.data,ignoreFields:t.ignoredMetadataFields}}),t.additionalLinks.length>0?e("Links",{attrs:{title:t.$t("additionalResources"),links:t.additionalLinks}}):t._e()],1),t.hasCatalogs?e("b-col",{staticClass:"catalogs-container"},[e("Catalogs",{attrs:{catalogs:t.catalogs,hasMore:t.hasMoreCollections},on:{loadMore:t.loadMoreCollections}})],1):t._e(),t.hasItems?e("b-col",{staticClass:"items-container"},[e("Items",{attrs:{stac:t.data,items:t.items,api:t.isApi,apiFilters:t.filters,pagination:t.itemPages,loading:t.apiItemsLoading},on:{paginate:t.paginateItems,filterItems:t.filterItems}}),t.hasItemAssets?e("Assets",{attrs:{assets:t.data.item_assets,definition:!0}}):t._e()],1):t._e()],1)],1)},i=[],r=a(20629),n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"catalogs mb-4"},[e("h2",[e("span",{staticClass:"title"},[t._v(t._s(t.$tc("stacCatalog",t.catalogs.length)))]),t.hasMultiple?e("b-badge",{attrs:{pill:"",variant:"secondary ml-2"}},[t._v(t._s(t.catalogs.length))]):t._e(),e("ViewButtons",{staticClass:"ml-4",model:{value:t.view,callback:function(e){t.view=e},expression:"view"}}),t.hasMultiple?e("SortButtons",{staticClass:"ml-2",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}}):t._e()],1),t.hasMultiple?e("SearchBox",{staticClass:"mt-3 mb-2",attrs:{placeholder:t.$t("catalogs.filterByTitle")},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}}):t._e(),t.searchTerm&&0===t.catalogView.length?e("b-alert",{attrs:{variant:"warning",show:""}},[t._v(t._s(t.$t("catalogs.noMatches")))]):t._e(),e(t.cardsComponent,t._b({tag:"component"},"component",t.cardsComponentProps,!1),t._l(t.catalogView,(function(t){return e("Catalog",{key:t.href,attrs:{catalog:t}})})),1),t.hasMore?e("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.300",value:t.loadMore,expression:"loadMore",modifiers:{300:!0}}],attrs:{variant:"primary"},on:{click:t.loadMore}},[t._v(t._s(t.$t("catalogs.loadMore")))]):t._e()],1)},o=[],l=(a(57658),a(57818)),c=a(43989),p=function(){var t=this,e=t._self._c;return e("b-button-group",{attrs:{title:t.$t("view.title"),size:"sm"}},[e("b-button",{attrs:{title:t.$t("view.tiles.title"),variant:"outline-primary",pressed:"cards"===t.value},on:{click:function(e){return t.toggle("cards")}}},[e("b-icon-bricks"),t._v(" "),e("span",{staticClass:"button-label"},[t._v(t._s(t.$t("view.tiles.label")))])],1),e("b-button",{attrs:{title:t.$t("view.list.title"),variant:"outline-primary",pressed:"list"===t.value},on:{click:function(e){return t.toggle("list")}}},[e("b-icon-list-task"),t._v(" "),e("span",{staticClass:"button-label"},[t._v(t._s(t.$t("view.list.label")))])],1)],1)},d=[],m=a(38019),h={id:"SortButtons",components:{BIconBricks:m.S3S,BIconListTask:m.WPR},props:{value:{type:String,default:"cards"}},methods:{toggle(t){this.value!==t&&this.$emit("input",t)}}},u=h,g=a(1001),b=(0,g.Z)(u,p,d,!1,null,null,null),f=b.exports,v={components:{ViewButtons:f},computed:{cardsComponent(){return"list"===this.view?"div":"b-card-group"},cardsComponentProps(){return"list"===this.view?{class:["card-list"]}:{columns:!0}},view:{get(){return this.$store.state.cardViewMode},set(t){this.$store.commit("config",{cardViewMode:t})}}}},_=a(79879),w={name:"Catalogs",components:{Catalog:l["default"],SearchBox:()=>Promise.all([a.e(7353),a.e(624)]).then(a.bind(a,40624)),SortButtons:()=>a.e(2968).then(a.bind(a,2968))},mixins:[v],props:{catalogs:{type:Array,required:!0},hasMore:{type:Boolean,default:!1}},data(){return{searchTerm:"",sort:0}},computed:{...(0,r.rn)(["uiLanguage"]),...(0,r.Se)(["getStac"]),hasMultiple(){return!this.hasMore&&this.catalogs.length>1},catalogView(){if(this.hasMore)return this.catalogs;let t=this.catalogs.map((t=>{let e=this.getStac(t);return e||t}));return this.searchTerm&&(t=t.filter((t=>{let e=[t.title];return t instanceof c.Z?(e.push(t.id),Array.isArray(t.keywords)&&(e=e.concat(t.keywords))):e.push(t.href),_.ZP.search(this.searchTerm,e)}))),this.hasMore||0===this.sort||(t=t.slice(0).sort(((t,e)=>c.Z.getDisplayTitle(t).localeCompare(c.Z.getDisplayTitle(e),this.uiLanguage))),-1===this.sort&&(t=t.reverse())),t}},methods:{loadMore(t=!0){t&&this.$emit("loadMore")}}},y=w,C=(0,g.Z)(y,n,o,!1,null,"f27a1074",null),x=C.exports,k=a(6723),$=a(97447),I=a(1911),T=a(25025),L=a(78907),M=a.n(L),S=a(40691),A=a(83681),P=a(35834),F=a(82996),Z=a(51015),O={name:"Catalog",components:{AnonymizedNotice:()=>a.e(6553).then(a.bind(a,96553)),Assets:()=>a.e(6521).then(a.bind(a,6521)),BTabs:F.M,BTab:Z.L,Catalogs:x,DeprecationNotice:()=>a.e(891).then(a.bind(a,80891)),Description:k["default"],Items:$.Z,Keywords:()=>a.e(7245).then(a.bind(a,77245)),Links:I.Z,Map:()=>Promise.all([a.e(7075),a.e(7450),a.e(6518)]).then(a.bind(a,46518)),Metadata:T.Z,Providers:()=>a.e(7992).then(a.bind(a,7992)),ReadMore:M(),Thumbnails:()=>a.e(5998).then(a.bind(a,55998))},mixins:[S.Z,(0,A.Z)({formatLicense:P.formatLicense,formatTemporalExtents:P.formatTemporalExtents})],data(){return{filters:{},ignoredMetadataFields:["stac_version","stac_extensions","id","type","title","description","keywords","providers","license","extent","summaries","links","assets","item_assets","proj:bbox","proj:geometry","conformsTo","deprecated","anon:warning","stac_browser"]}},computed:{...(0,r.rn)(["data","url","apiItems","apiItemsLink","apiItemsPagination","uiLanguage"]),...(0,r.Se)(["additionalLinks","catalogs","isCollection","items","hasMoreCollections","getApiItemsLoading"]),apiItemsLoading(){return this.getApiItemsLoading(this.data)},licenses(){return this.isCollection&&this.data.license?this.formatLicense(this.data.license,null,null,this.data):null},hasProviders(){return this.isCollection&&Array.isArray(this.data.providers)&&this.data.providers.length>0},temporalExtents(){if(this.data&&this.data.isCollection()&&this.data.extent.temporal.interval.length>0){let t=this.data.extent.temporal.interval;return t.length>1&&(t=t.slice(1)),this.formatTemporalExtents(t)}return null},hasItemAssets(){var t;return _.ZP.size(null===(t=this.data)||void 0===t?void 0:t.item_assets)>0},itemPages(){let t=Object.assign({},this.apiItemsPagination);return!t.first&&this.data&&this.apiItemsLink&&"items"!==this.apiItemsLink.rel&&(t.first=_.ZP.addFiltersToLink(this.data.getApiItemsLink(),this.filters)),t},isApi(){return Boolean(this.apiItemsLink)},hasItems(){return this.items.length>0||this.isApi},hasCatalogs(){return this.catalogs.length>0},catalogAsFc(){return{type:"FeatureCollection",features:this.items}}},methods:{loadMoreCollections(){this.$store.dispatch("loadNextApiCollections",{show:!0})},async paginateItems(t){try{await this.$store.dispatch("loadApiItems",{link:t,show:!0,filters:this.filters})}catch(e){this.$root.$emit("error",e,this.$t("errors.loadItems"))}},async filterItems(t,e){this.filters=t,e&&this.$store.commit("resetApiItems");try{await this.$store.dispatch("loadApiItems",{link:this.apiItemsLink,show:!0,filters:t})}catch(a){let t=e?this.$t("errors.loadItems"):this.$t("errors.loadFilteredItems");this.$root.$emit("error",a,t)}},mapClicked(){}}},B=O,E=(0,g.Z)(B,s,i,!1,null,null,null),q=E.exports},37677:function(t,e,a){"use strict";a(57658);var s=a(20629);const i=["http://www.opengis.net/spec/ogcapi-features-1/1.*/conf/core"],r=["http://www.opengis.net/spec/cql2/1.*/conf/cql2-text"],n=["http://www.opengis.net/spec/cql2/1.*/conf/cql2-json"],o=["https://api.stacspec.org/v1.*/item-search#sort"],l=["https://api.stacspec.org/v1.*/ogcapi-features#sort","http://www.opengis.net/spec/ogcapi-records-1/1.*/conf/sorting"],c=["https://api.stacspec.org/v1.*/item-search#filter*"],p=["http://www.opengis.net/spec/ogcapi-features-3/1.*/*/features-filter"];e["ZP"]=t=>({computed:{...(0,s.Se)(["supportsConformance"]),canSort(){return this.supportsConformance(t?l:o)},canFilterExtents(){return!t||this.supportsConformance(i)},canFilterCql(){return this.supportsConformance(t?p:c)&&this.cqlModes.includes("Text")},cqlModes(){let t=[];return this.supportsConformance(r)&&t.push("Text"),this.supportsConformance(n)&&t.push("JSON"),t},filterComponentProps(){return{canSort:this.canSort,canFilterCql:this.canFilterCql,canFilterExtents:this.canFilterExtents}}}})},59642:function(t,e,a){"use strict";var s=a(20629);e["Z"]={props:{showThumbnail:{type:Boolean,default:!0}},computed:{...(0,s.rn)(["cardViewMode","crossOriginMedia","defaultThumbnailSize"]),isList(){return this.data&&!this.data.isItem()&&"list"===this.cardViewMode},hasImage(){return this.showThumbnail&&this.thumbnail},thumbnail(){if(this.data){let t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0){let e,a,s=t[0];return Array.isArray(s["proj:shape"])&&2===s["proj:shape"].length?[a,e]=s["proj:shape"]:Array.isArray(this.defaultThumbnailSize)&&2===this.defaultThumbnailSize.length&&([a,e]=this.defaultThumbnailSize),{src:s.href,alt:s.title,crossorigin:this.crossOriginMedia,right:this.isList,blankColor:"rgba(0, 0, 0, 0.125)",width:e,height:a}}}return null}}}},26525:function(t,e,a){var s=a(25108);t.exports=function(t,e){e=e||{},e.listUnicodeChar=!!e.hasOwnProperty("listUnicodeChar")&&e.listUnicodeChar,e.stripListLeaders=!e.hasOwnProperty("stripListLeaders")||e.stripListLeaders,e.gfm=!e.hasOwnProperty("gfm")||e.gfm,e.useImgAltText=!e.hasOwnProperty("useImgAltText")||e.useImgAltText,e.abbr=!!e.hasOwnProperty("abbr")&&e.abbr,e.replaceLinksWithURL=!!e.hasOwnProperty("replaceLinksWithURL")&&e.replaceLinksWithURL,e.htmlTagsToSkip=e.hasOwnProperty("htmlTagsToSkip")?e.htmlTagsToSkip:[];var a=t||"";a=a.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*/gm,"");try{e.stripListLeaders&&(a=e.listUnicodeChar?a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,e.listUnicodeChar+" $1"):a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),e.gfm&&(a=a.replace(/\n={2,}/g,"\n").replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),e.abbr&&(a=a.replace(/\*\[.*\]:.*\n/,"")),a=a.replace(/<[^>]*>/g,"");var i=new RegExp("<[^>]*>","g");if(e.htmlTagsToSkip.length>0){var r="(?!"+e.htmlTagsToSkip.join("|")+")";i=new RegExp("<"+r+"[^>]*>","ig")}a=a.replace(i,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,e.useImgAltText?"$1":"").replace(/\[([^\]]*?)\][\[\(].*?[\]\)]/g,e.replaceLinksWithURL?"$2":"$1").replace(/^\s{0,3}>\s?/gm,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} #{0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*]+)(\S)(.*?\S)??\1/g,"$2$3").replace(/(^|\W)([_]+)(\S)(.*?\S)??\2($|\W)/g,"$1$3$4$5").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/~(.*?)~/g,"$1")}catch(n){return s.error(n),t}return a}}}]);
//# sourceMappingURL=catalog.a66913c3.js.map