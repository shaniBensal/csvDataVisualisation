webpackJsonp([1],{FrdQ:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")({name:"App"},n,!1,function(t){e("gsu9")},null,null).exports,l=e("/ocq"),o={props:["data","labels"],extends:e("UlOv").a,mounted:function(){this.renderScatterChart()},computed:{chartData:function(){return this.data}},methods:{renderScatterChart:function(){this.renderChart({labels:this.labels,datasets:[{label:"Customer Value",backgroundColor:"#f87979",data:this.chartData}]},{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{scaleLabel:{display:!0,labelString:this.labels[0]}}],yAxes:[{scaleLabel:{display:!0,labelString:this.labels[1]}}]}})}},watch:{data:function(){this.renderScatterChart()},labels:function(){this.renderScatterChart()}}};var i=e("VU/8")(o,null,!1,function(t){e("rMmq")},null,null).exports,c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("table",[e("thead",[e("th",[t._v("Gender")]),t._v(" "),e("th",[t._v("Segment")]),t._v(" "),e("th",[t._v("Years Customer")]),t._v(" "),e("th",[t._v("\n        Complains Amount\n        "),e("button",{on:{click:t.sortDataByComplains}},[t._v("Sort")])]),t._v(" "),e("th",[t._v("Contract Value")])]),t._v(" "),e("tbody",t._l(t.dataToShow,function(s){return e("tr",{key:s.id},[e("td",[t._v(t._s(s.gender))]),t._v(" "),e("td",[t._v(t._s(s.segment))]),t._v(" "),e("td",[t._v(t._s(s.yearsCustomer))]),t._v(" "),e("td",[t._v(t._s(s.noOfComplaints))]),t._v(" "),e("td",[t._v(t._s(s.contractValue))])])}),0)])])},staticRenderFns:[]};var u=e("VU/8")({props:["data"],created:function(){this.updateData()},data:function(){return{dataToShow:[]}},methods:{updateData:function(){this.dataToShow=this.data},sortDataByComplains:function(){this.dataToShow=this.dataToShow.sort(function(t,s){return t.noOfComplaints-s.noOfComplaints})}},watch:{data:function(){this.updateData()}}},c,!1,function(t){e("esfO")},null,null).exports,h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"select-div"},[e("label",[t._v("Values on Graph")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedLables,expression:"selectedLables"}],attrs:{name:"labelsToShow"},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedLables=s.target.multiple?e:e[0]}}},t._l(t.labelsOptions,function(s,a){return e("option",{key:t.keys[a+5],domProps:{value:s}},[t._v("x: "+t._s(s[0])+", y: "+t._s(s[1]))])}),0)]),t._v(" "),e("div",{staticClass:"select-div"},[e("label",[t._v("Segments to show")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedSegments,expression:"selectedSegments"}],attrs:{name:"segmentsToShow"},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedSegments=s.target.multiple?e:e[0]}}},t._l(t.segmentsOptions,function(s,a){return e("option",{key:t.keys[a],domProps:{value:s}},[t._v(t._s(s))])}),0)])])},staticRenderFns:[]};var d=e("VU/8")({data:function(){return{segmentsOptions:["All","1","2","3","4","5"],keys:["A","B","C","D","E","a","b","c"],labelsOptions:[["noOfComplaints","contractValue"],["yearsCustomer","noOfComplaints"],["yearsCustomer","contractValue"]],selectedLables:["yearsCustomer","contractValue"],selectedSegments:"All"}},watch:{selectedLables:function(){this.$emit("changeDisplay","labels",this.selectedLables)},selectedSegments:function(){this.$emit("changeDisplay","segments",this.selectedSegments)}}},h,!1,function(t){e("QxzC")},null,null).exports,j=(e("mtWM"),e("mvHQ")),m=e.n(j);var v={loadFromStorage:function(t){var s=localStorage.getItem(t);return s?JSON.parse(s):null},saveToStorage:function(t,s){localStorage[t]=m()(s)}};var p={name:"List",data:function(){return{list:[],dataOnChart:["yearsCustomer","contractValue"],segments:"All"}},created:function(){var t=v.loadFromStorage("JSON_LIST");t?this.list=t:this.getList()},computed:{dataTable:function(){var t=this;return"All"===this.segments?this.list:this.list.filter(function(s){return s.segment===t.segments})},dataToShowGraph:function(){for(var t=[],s=0;s<this.dataTable.length;s++)t.push({x:this.dataTable[s][this.dataOnChart[0]],y:this.dataTable[s][this.dataOnChart[1]]});return t}},methods:{getList:function(){var t=this;this.service.getData().then(function(s){return t.list=s})},changeDataDisplay:function(t,s){"labels"===t?this.dataOnChart=s:this.segments=s}},components:{scatterChart:i,tableCMP:u,selectCMP:d}},f={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"list"},[s("div",{staticClass:"chart-cmp"},[s("scatter-chart",{attrs:{data:this.dataToShowGraph,labels:this.dataOnChart}}),this._v(" "),s("selectCMP",{on:{changeDisplay:this.changeDataDisplay}})],1),this._v(" "),s("div",[s("tableCMP",{attrs:{data:this.dataTable}})],1)])},staticRenderFns:[]};var g=e("VU/8")(p,f,!1,function(t){e("FrdQ")},"data-v-e05aa534",null).exports;a.a.use(l.a);var b=new l.a({routes:[{path:"/",name:"List",component:g}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:b,components:{App:r},template:"<App/>"})},QxzC:function(t,s){},esfO:function(t,s){},gsu9:function(t,s){},rMmq:function(t,s){},uslO:function(t,s,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return e(r(t))}function r(t){var s=a[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.ffd87ae5e88258ed5d03.js.map