(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["posts"],{"671e":function(t,a,e){"use strict";var s=e("c8a4"),o=e.n(s);o.a},"6c78":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"posts flex-row pd-1"},[e("div",{staticClass:"posts-left flex-column"},[e("button",{staticClass:"pure-button"},[e("router-link",{attrs:{to:"/add/post"}},[t._v("\n        发帖\n      ")])],1),e("ul",{staticClass:"mt-5 post-category-list",on:{click:t.toCategory}},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4)])]),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"posts-right ml-1 flex-1 flex-column relative"},[e("div",{staticClass:"flex-row pd-1"},[e("input",{staticClass:"pure-input ml-auto",attrs:{type:"text",id:"posts-search",placeholder:"Search"}}),e("button",{staticClass:"ml-1 pure-button pure-button-primary",on:{click:function(a){return a.preventDefault(),t.toSearch(a)}}},[t._v("搜索")])]),0!==t.posts.length||t.loading?e("ul",{staticClass:"flex-1"},t._l(t.posts,function(t){return e("li",{key:t.title},[e("post-card",{attrs:{post:t}})],1)})):e("no-data",{staticClass:"flex-1"}),e("pager",{attrs:{len:t.pager.limit,active:t.pager.page,total:t.pager.total},on:{click:t.toPage}})],1)])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{attrs:{"data-category":""}},[e("span",{staticClass:"category-label category-label--all"}),t._v("\n        所有\n      ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{attrs:{"data-category":"general"}},[e("span",{staticClass:"category-label category-label--general"}),t._v("\n        一般\n      ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{attrs:{"data-category":"advice"}},[e("span",{staticClass:"category-label category-label--advice"}),t._v("\n        建议\n      ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{attrs:{"data-category":"bugs"}},[e("span",{staticClass:"category-label category-label--bug"}),t._v("\n        bugs\n      ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{attrs:{"data-category":"help"}},[e("span",{staticClass:"category-label category-label--help"}),t._v("\n        帮助\n      ")])}],n=(e("cadf"),e("551c"),e("097d"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post-card",on:{click:t.toPost}},[e("img",{staticClass:"post-card__avatar",attrs:{src:"/logo.png"}}),e("div",{staticClass:"post-card__body"},[t._v("\n    "+t._s(t.post.title)+"\n  ")]),e("div",{staticClass:"post-card__meta"},[e("span",{staticClass:"post-label",class:"post-label--"+t.post.category},[t._v("\n    "+t._s(t.post.category)+"\n    ")]),e("i",{staticClass:"ml-1 far fa-comment"},[t._v("\n      "+t._s(t.post.replys)+"\n    ")])])])}),l=[],r={props:{post:{type:Object,required:!0}},methods:{toPost:function(){this.$router.push("/posts/".concat(this.post.title))}}},c=r,i=(e("671e"),e("2877")),p=Object(i["a"])(c,n,l,!1,null,"2bb2a106",null);p.options.__file="post-card.vue";var u=p.exports,g={components:{PostCard:u},data:function(){return{posts:[],loading:!1,category:"",keyword:"",pager:{page:1,limit:10,total:0}}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.loading||(this.loading=!0,this.$axios.get("".concat(this.$url.posts,"?category=").concat(this.category,"&keyword=").concat(this.keyword,"&page=").concat(this.pager.page,"&limit=").concat(this.pager.limit)).then(function(a){t.posts=a.data.results,t.pager.total=a.data.total,t.loading=!1}))},toPage:function(t){this.pager.page=t,this.getData()},toSearch:function(){var t=document.getElementById("posts-search"),a=t.value.trim();this.keyword=a,this.getData()},toCategory:function(t){var a=t.target.getAttribute("data-category");this.category=a,this.getData()}}},d=g,f=(e("b31c"),Object(i["a"])(d,s,o,!1,null,"ca61faf6",null));f.options.__file="index.vue";a["default"]=f.exports},"98aa":function(t,a,e){},b31c:function(t,a,e){"use strict";var s=e("98aa"),o=e.n(s);o.a},c8a4:function(t,a,e){}}]);
//# sourceMappingURL=posts.996b1aec.js.map