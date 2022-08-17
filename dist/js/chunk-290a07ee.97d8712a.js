(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-290a07ee"],{"0065":function(e,t,r){"use strict";var n=r("8e9b"),i=r.n(n);i.a},37906:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Search Page")]),r("b-container",{staticClass:"form"},[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSearch(t)},reset:function(t){return t.preventDefault(),e.onReset(t)}}},[r("b-form-group",{attrs:{id:"input-group-queryS","label-cols-sm":"3",label:"Query to search:","label-for":"queryS"}},[r("b-form-input",{attrs:{id:"queryS",type:"text",state:e.validateState("queryS")},model:{value:e.$v.form.queryS.$model,callback:function(t){e.$set(e.$v.form.queryS,"$model",t)},expression:"$v.form.queryS.$model"}}),e.$v.form.queryS.length?e._e():r("b-form-invalid-feedback",[e._v(" Query length should be at least 2 characters long ")])],1),r("b-form-group",{attrs:{id:"input-group-numOfRes","label-cols-sm":"3",label:"Num Of Results:","label-for":"numOfRes"}},[r("b-form-select",{attrs:{id:"numOfRes",options:e.options},model:{value:e.myNumOfRes,callback:function(t){e.myNumOfRes=t},expression:"myNumOfRes"}})],1),r("b-form-group",{attrs:{id:"input-group-diet","label-cols-sm":"3",label:"Diet:","label-for":"diet"}},[r("b-form-select",{attrs:{id:"diet",options:e.dietOptions},model:{value:e.myDiet,callback:function(t){e.myDiet=t},expression:"myDiet"}})],1),r("b-form-group",{attrs:{id:"input-group-intolerance","label-cols-sm":"3",label:"Intolerance:","label-for":"intolerance"}},[r("b-form-select",{attrs:{id:"intolerance",options:e.intolerances},model:{value:e.myIntolerance,callback:function(t){e.myIntolerance=t},expression:"myIntolerance"}})],1),r("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")]),r("b-button",{staticClass:"ml-5 w-75",staticStyle:{width:"250px"},attrs:{type:"submit",variant:"primary"}},[e._v("Search")])],1)],1)],1),r("div",{staticClass:"container",staticStyle:{display:"none"},attrs:{id:"results"}},[r("Grid",{attrs:{title:"Search Results",recipes:e.recipes,recipeTemplate:e.recipeTemplate}}),r("div",[r("b-row",[r("b-col",[r("h3",[e._v("Sort Results By : ")])]),r("b-col",[r("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"flexRadioDefault",id:"preparation"}}),r("label",{staticClass:"form-check-label",attrs:{for:"preparation"}},[e._v(" preparation time ")]),r("h3"),r("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"flexRadioDefault",id:"popularity",checked:""}}),r("label",{staticClass:"form-check-label",attrs:{for:"popularity"}},[e._v(" popularity ")])]),r("b-col",[r("b-button",{on:{click:e.SortResults}},[e._v("Sort")])],1)],1)],1)],1)])},i=[],a=(r("d81d"),r("4e82"),r("96cf"),r("1da1")),s=r("2909"),o=r("454f"),c=["African","American","British","Cajun","Caribbean","Chinese","Eastern European","European","French","German","Greek","Indian","Irish","Italian","Japanese","Jewish","Korean","Latin American","Mediterranean","Mexican","Middle Eastern","Nordic","Southern","Spanish","Thai","Vietnamese"],l=["Dairy","Egg","Gluten","Grain","Peanut","Seafood","Sesame","Shellfish","Soy","Sulfite","Tree Nut","Wheat"],u=r("b5ae"),p={name:"Search",components:{Grid:o["a"]},data:function(){return{recipes:[],form:{queryS:"",numOfRes:5,cuisine:null,diet:"",intolerance:"",submitError:void 0},dietOptions:[{value:null,text:"",disabled:!0}],intolerances:[{value:null,text:"",disabled:!0}],options:[{value:5,text:"5 results"},{value:10,text:"10 results"},{value:15,text:"15 results"}],errors:[],validated:!1,recipeTemplate:"app"}},computed:{myNumOfRes:{get:function(){return this.form.numOfRes},set:function(e){5!==this.numOfRes&&(this.form.numOfRes=e)}},myDiet:{get:function(){return this.form.diet},set:function(e){""!==this.diet&&(this.form.diet=e)}},myIntolerance:{get:function(){return this.form.intolerance},set:function(e){""!==this.intolerance&&(this.form.intolerance=e)}}},validations:{form:{queryS:{length:function(e){return Object(u["minLength"])(2)(e)}}}},mounted:function(){var e,t;(e=this.dietOptions).push.apply(e,Object(s["a"])(c)),(t=this.intolerances).push.apply(t,Object(s["a"])(l))},methods:{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,n=t.$error;return r?!n:null},Search:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n,i,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/search",{params:{query:e.form.queryS,num:e.form.numOfRes,cuisine:e.form.cuisine,diet:e.form.diet,intolerance:e.form.intolerance}});case 3:n=t.sent,console.log(n),i=n.data,e.recipes=[],(r=e.recipes).push.apply(r,Object(s["a"])(i)),console.log("recipes search",e.recipes),a=i.map((function(e){return e.id})),o=[],console.log("recipesId",a),console.log("full reci",o),document.getElementById("results").style.display="block",t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))()},onSearch:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.Search()},onReset:function(){var e=this;this.form={queryS:"",numOfRes:null,cuisine:"",diet:"",intolerance:""},this.$nextTick((function(){e.$v.$reset()}))},SortResults:function(){if(document.getElementById("popularity").checked){var e=this.recipes.sort((function(e,t){return e.aggregateLikes-t.aggregateLikes}));this.recipes=e,console.log("sort_recipes_likes",e)}else{var t=this.recipes.sort((function(e,t){return e.readyInMinutes-t.readyInMinutes}));this.recipes=t,console.log("sort_recipes_minutes",t)}}}},f=p,m=(r("b5e1"),r("2877")),d=Object(m["a"])(f,n,i,!1,null,"8d00683c",null);t["default"]=d.exports},"454f":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"container"},[r("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),"ourDB"===e.recipeTemplate?r("div",e._l(Math.ceil(e.recipes.length/5),(function(t){return r("b-row",{key:t,attrs:{"align-h":"around"}},e._l(e.recipes.slice(5*(t-1),5*t),(function(e){return r("b-col",{key:e.recipe_id},[r("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)})),1):r("div",e._l(Math.ceil(e.recipes.length/5),(function(t){return r("b-row",{key:t,attrs:{"align-h":"around"}},e._l(e.recipes.slice(5*(t-1),5*t),(function(e){return r("b-col",{key:e.id},[r("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)})),1)])},i=[],a=(r("96cf"),r("1da1")),s=r("832a"),o={name:"Grid",components:{RecipePreview:s["a"]},props:{title:{type:String,required:!0},recipes:{type:Array,required:!0},recipeTemplate:{type:String,required:!0}},data:function(){return{}},mounted:function(){},methods:{saveSeen:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!t.$root.store.username){r.next=4;break}return r.next=3,t.axios.post(t.$root.store.server_domain+"/users/lastWatched",{recipeId:e});case 3:r.sent;case 4:case"end":return r.stop()}}),r)})))()}}},c=o,l=(r("0065"),r("2877")),u=Object(l["a"])(c,n,i,!1,null,"340cacad",null);t["a"]=u.exports},"4e82":function(e,t,r){"use strict";var n=r("23e7"),i=r("1c0b"),a=r("7b0b"),s=r("d039"),o=r("a640"),c=[],l=c.sort,u=s((function(){c.sort(void 0)})),p=s((function(){c.sort(null)})),f=o("sort"),m=u||!p||!f;n({target:"Array",proto:!0,forced:m},{sort:function(e){return void 0===e?l.call(a(this)):l.call(a(this),i(e))}})},"8e9b":function(e,t,r){},b5e1:function(e,t,r){"use strict";var n=r("bc99"),i=r.n(n);i.a},bc99:function(e,t,r){}}]);
//# sourceMappingURL=chunk-290a07ee.97d8712a.js.map