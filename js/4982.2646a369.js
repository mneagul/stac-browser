"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[4982],{24982:function(e,t,i){i.r(t),i.d(t,{default:function(){return ae}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"queryable-group"},[t("b-row",{staticClass:"queryable-row"},[t("span",{staticClass:"title"},[e._v(" "+e._s(e.title)+" ")]),null!==e.operatorOptions?t("b-form-select",{staticClass:"op",attrs:{size:"sm",value:e.operator,options:e.operatorOptions},on:{input:function(t){return e.updateOperator(t)}}}):e._e(),"selectField"===e.queryableType?t("b-form-select",{staticClass:"value",attrs:{options:e.queryableOptions,size:"sm",value:e.value},on:{input:function(t){return e.updateValue(t)}}}):"textField"===e.queryableType?t("b-form-input",{staticClass:"value",attrs:{size:"sm",value:e.value},on:{input:function(t){return e.updateValue(t)}}}):"numberField"===e.queryableType?t("b-form-input",{staticClass:"value",attrs:{number:"",type:"number",size:"sm",value:e.value},on:{input:function(t){return e.updateValue(t)}}}):"dateField"===e.queryableType?t("date-picker",{staticClass:"value",attrs:{type:"datetime",lang:e.datepickerLang,format:e.datepickerFormat,value:e.value},on:{input:function(t){return e.updateValue(t)}}}):e._e(),t("b-button",{staticClass:"delete",attrs:{size:"sm",variant:"danger"},on:{click:function(t){return e.$emit("remove-queryable")}}},[t("b-icon-x-circle-fill",{attrs:{"aria-hidden":"true"}})],1)],1),e.help?t("b-row",{staticClass:"queryable-help text-muted small"},[t("Description",{attrs:{description:e.help,inline:""}})],1):e._e()],1)},n=[],a=i(27353),l=i(1915),s=i(94689),o=i(63294),u=i(12299),p=i(90494),c=i(11572),h=i(26410),d=i(18735),m=i(33284),b=i(67040),f=i(20451),y=i(32023),v=i(58137),O=i(49035),g=i(95505),j=i(73727),F=i(54602),P=(0,F.l)("value"),w=P.mixin,x=P.props,S=P.prop,q=P.event,z=i(18280),D=i(37668),T=i(77147),C='Setting prop "options" to an object is deprecated. Use the array format instead.',$=(0,f.y2)({disabledField:(0,f.pi)(u.N0,"disabled"),htmlField:(0,f.pi)(u.N0,"html"),options:(0,f.pi)(u.XO,[]),textField:(0,f.pi)(u.N0,"text"),valueField:(0,f.pi)(u.N0,"value")},"formOptionControls"),k=(0,l.l7)({props:$,computed:{formOptions:function(){return this.normalizeOptions(this.options)}},methods:{normalizeOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if((0,m.PO)(e)){var i=(0,D.U)(e,this.valueField),r=(0,D.U)(e,this.textField);return{value:(0,m.o8)(i)?t||r:i,text:(0,d.o)(String((0,m.o8)(r)?t:r)),html:(0,D.U)(e,this.htmlField),disabled:Boolean((0,D.U)(e,this.disabledField))}}return{value:t||e,text:(0,d.o)(String(e)),disabled:!1}},normalizeOptions:function(e){var t=this;return(0,m.kJ)(e)?e.map((function(e){return t.normalizeOption(e)})):(0,m.PO)(e)?((0,T.ZK)(C,this.$options.name),(0,b.XP)(e).map((function(i){return t.normalizeOption(e[i]||{},i)}))):[]}}});function _(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function V(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?_(Object(i),!0).forEach((function(t){N(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):_(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function N(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var U=(0,f.y2)((0,b.GE)(V(V({},$),{},{labelField:(0,f.pi)(u.N0,"label"),optionsField:(0,f.pi)(u.N0,"options")})),"formOptions"),E=(0,l.l7)({mixins:[k],props:U,methods:{normalizeOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if((0,m.PO)(e)){var i=(0,D.U)(e,this.valueField),r=(0,D.U)(e,this.textField),n=(0,D.U)(e,this.optionsField,null);return(0,m.Ft)(n)?{value:(0,m.o8)(i)?t||r:i,text:String((0,m.o8)(r)?t:r),html:(0,D.U)(e,this.htmlField),disabled:Boolean((0,D.U)(e,this.disabledField))}:{label:String((0,D.U)(e,this.labelField)||r),options:this.normalizeOptions(n)}}return{value:t||e,text:String(e),disabled:!1}}}}),I=i(69558),Z=(0,f.y2)({disabled:(0,f.pi)(u.U5,!1),value:(0,f.pi)(u.r1,void 0,!0)},s.vg),B=(0,l.l7)({name:s.vg,functional:!0,props:Z,render:function(e,t){var i=t.props,r=t.data,n=t.children,a=i.value,l=i.disabled;return e("option",(0,I.b)(r,{attrs:{disabled:l},domProps:{value:a}}),n)}});function K(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function L(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?K(Object(i),!0).forEach((function(t){X(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):K(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function X(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var A=(0,f.y2)((0,b.GE)(L(L({},$),{},{label:(0,f.pi)(u.N0,void 0,!0)})),s.Rj),G=(0,l.l7)({name:s.Rj,mixins:[z.Z,k],props:A,render:function(e){var t=this.label,i=this.formOptions.map((function(t,i){var r=t.value,n=t.text,a=t.html,l=t.disabled;return e(B,{attrs:{value:r,disabled:l},domProps:(0,d.U)(a,n),key:"option_".concat(i)})}));return e("optgroup",{attrs:{label:t}},[this.normalizeSlot(p.D$),i,this.normalizeSlot()])}});function J(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function R(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?J(Object(i),!0).forEach((function(t){Q(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):J(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function Q(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var H=(0,f.y2)((0,b.GE)(R(R(R(R(R(R(R({},j.N),x),y.N),v.N),O.N),g.N),{},{ariaInvalid:(0,f.pi)(u.gL,!1),multiple:(0,f.pi)(u.U5,!1),selectSize:(0,f.pi)(u.jg,0)})),s.$S),M=(0,l.l7)({name:s.$S,mixins:[j.t,w,y.X,O.j,g.J,v.i,E,z.Z],props:H,data:function(){return{localValue:this[S]}},computed:{computedSelectSize:function(){return this.plain||0!==this.selectSize?this.selectSize:null},inputClass:function(){return[this.plain?"form-control":"custom-select",this.size&&this.plain?"form-control-".concat(this.size):null,this.size&&!this.plain?"custom-select-".concat(this.size):null,this.stateClass]}},watch:{value:function(e){this.localValue=e},localValue:function(){this.$emit(q,this.localValue)}},methods:{focus:function(){(0,h.KS)(this.$refs.input)},blur:function(){(0,h.Cx)(this.$refs.input)},onChange:function(e){var t=this,i=e.target,r=(0,c.Dp)(i.options).filter((function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));this.localValue=i.multiple?r:r[0],this.$nextTick((function(){t.$emit(o.z2,t.localValue)}))}},render:function(e){var t=this.name,i=this.disabled,r=this.required,n=this.computedSelectSize,a=this.localValue,l=this.formOptions.map((function(t,i){var r=t.value,n=t.label,a=t.options,l=t.disabled,s="option_".concat(i);return(0,m.kJ)(a)?e(G,{props:{label:n,options:a},key:s}):e(B,{props:{value:r,disabled:l},domProps:(0,d.U)(t.html,t.text),key:s})}));return e("select",{class:this.inputClass,attrs:{id:this.safeId(),name:t,form:this.form||null,multiple:this.multiple||null,size:n,disabled:i,required:r,"aria-required":r?"true":null,"aria-invalid":this.computedAriaInvalid},on:{change:this.onChange},directives:[{name:"model",value:a}],ref:"input"},[this.normalizeSlot(p.D$),l,this.normalizeSlot()])}}),W=i(38019),Y=i(38637),ee=i(79879),te={name:"QueryableInput",components:{BFormInput:a.e,BFormSelect:M,BIconXCircleFill:W.aEb,Description:()=>Promise.all([i.e(6723),i.e(4106)]).then(i.bind(i,6723))},mixins:[Y.Z],props:{title:{type:String,required:!0},value:{default:null},operator:{type:String,default:null},schema:{type:Object,default:()=>({})}},computed:{schemaTypes(){return"string"===typeof this.schema.type?[this.schema.type]:Array.isArray(this.schema.type)?this.schema.type:[]},isNumeric(){return this.schemaTypes.includes("number")||this.schemaTypes.includes("integer")},help(){return"LIKE"===this.operator?this.$t("search.likeOperatorDescription"):"dateField"===this.queryableType?this.$t("search.dateDescription"):null},queryableType(){return"enum"in this.schema?"selectField":this.isNumeric?"numberField":this.schemaTypes.includes("string")?"date-time"===this.schema.format?"dateField":"textField":null},operatorOptions(){const e={text:this.$t("search.lessThan"),value:"<"},t={text:this.$t("search.greaterThan"),value:">"},i={text:this.$t("search.equalTo"),value:"="},r={text:this.$t("search.notEqualTo"),value:"<>"},n={text:this.$t("search.matches"),value:"LIKE"};return this.isNumeric||"dateField"===this.queryableType?[e,t,i,r]:"textField"===this.queryableType?[i,r,n]:[i,r]},queryableOptions(){return"selectField"!==this.queryableType?[]:this.schema.enum.map((e=>"string"===typeof e?{value:e,text:e}:e))},selectedOperator(){return null===this.operatorOptions?null:this.operatorOptions.find((e=>e.value===this.operator))}},mounted(){null===this.operator&&(this.queryableVisible=!0),null===this.operator&&this.updateOperator(this.operatorOptions[0].value),null===this.value&&this.updateValue(this.calculateDefaultValue())},methods:{updateValue(e){let t=ee.ZP.isObject(e)&&"target"in e?e.target.value:e;this.$emit("update:value",t)},updateOperator(e){let t=ee.ZP.isObject(e)&&"target"in e?e.target.value:e;this.$emit("update:operator",t)},calculateDefaultValue(){return"undefined"!==typeof this.schema.default?this.schema.default:"textField"===this.queryableType?"":"dateField"===this.queryableType?new Date:"numberField"===this.queryableType?"undefined"!==typeof this.schema.minimum?this.schema.minimum:0:"selectField"===this.queryableType?this.queryableOptions[0].value:void 0}}},ie=te,re=i(1001),ne=(0,re.Z)(ie,r,n,!1,null,null,null),ae=ne.exports}}]);
//# sourceMappingURL=4982.2646a369.js.map