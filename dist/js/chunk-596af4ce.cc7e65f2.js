(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-596af4ce"],{"08eb":function(e,t,i){},9002:function(e,t,i){"use strict";var r=i("9dfb"),c=i.n(r);c.a},"9dfb":function(e,t,i){},f611:function(e,t,i){"use strict";var r=i("08eb"),c=i.n(r);c.a},f98e:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-container",[i("h3",[e._v(" Family Recipes ")]),i("b-row",e._l(e.recipes,(function(e){return i("b-col",{key:e.recipe_id},[i("FamilyRecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},c=[],a=i("2909"),n=(i("96cf"),i("1da1")),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"familyRecipe",params:{recipe:e.recipe}}}},[i("div",{staticClass:"recipe-body"},[i("img",{staticClass:"recipe-image",attrs:{src:e.recipe.imageUrl}})]),i("div",{staticClass:"recipe-footer"},[i("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),i("ul",{staticClass:"recipe-overview"},[i("li",[e._v(" recipe owner: "+e._s(e.recipe.recipeOwner))]),i("li",[e._v("preparation time in:"+e._s(e.recipe.preparationTime))])]),i("div")])])],1)},p=[],o={data:function(){return{}},props:{recipe:{type:Object,required:!0}}},l=o,u=(i("f611"),i("2877")),f=Object(u["a"])(l,s,p,!1,null,"7b300d8b",null),v=f.exports,d={name:"Family",components:{FamilyRecipePreview:v},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var i,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/familyRecipes");case 3:r=t.sent,console.log(r),c=r.data,e.recipes=[],(i=e.recipes).push.apply(i,Object(a["a"])(c)),console.log(e.recipes),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}}},m=d,b=(i("9002"),Object(u["a"])(m,r,c,!1,null,"5b58eaa5",null));t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-596af4ce.cc7e65f2.js.map