(this.webpackJsonptcf=this.webpackJsonptcf||[]).push([[0],{175:function(e,t,o){},186:function(e,t,o){},187:function(e,t,o){},391:function(e,t,o){},392:function(e,t,o){},393:function(e,t,o){},394:function(e,t,o){},412:function(e,t,o){},413:function(e,t,o){},415:function(e,t,o){"use strict";o.r(t);var n=o(0),c=o(1),s=o.n(c),a=o(69),i=o.n(a),r=(o(175),o(33)),l=o(3),d=o(42),u=function(){var e=Object(d.b)().logout;return Object(n.jsx)("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e()},children:"Logout"})};var j=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(n.jsx)(r.b,{className:"navbar-brand",to:"/",children:"TC - Food Share"}),Object(n.jsx)("ul",{className:"navbar-nav",children:Object(n.jsx)(u,{})})]})})};o(186);var b=function(){return Object(n.jsx)("footer",{className:"footer",children:"\xa9 Twin Cities Foodshare Copyright 2020"})},h=(o(187),function(){var e=Object(d.b)().loginWithRedirect;return Object(n.jsx)("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e()},children:"Donate"})});var m=function(){return Object(n.jsxs)("body",{className:"containerPage",children:[Object(n.jsx)(j,{}),Object(n.jsxs)("div",{className:"about-text-box",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"bold",children:"Twin Cities Food Share strives to create a bridge between individuals or families who are in need of food items and those who are wanting to donate food directly to the community."}),Object(n.jsx)("p",{children:"If you would like to see where and what type of food is available around the Twin Cities through this network, please click on the Search button.  The page will bring up a Google Map with list of locations to left displaying address, food category, and description of food available at each location."}),Object(n.jsx)("p",{children:"If you have food items to share and would like to donate to the community utilizing this website, please click on the Donate button.  For first-time donors, a page will be brought up where you can Sign Up as a site donor by creating a user (email address) and password.  For returning donors, simply log in with your user (email address) and password.  Once logged in, the page presented will allow you to input address of food location, choose categories of food available, and provide a description of items available for those seeking food."})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(r.b,{to:"/map",children:Object(n.jsxs)("button",{type:"button",className:"btn btn-primary btn-md",children:["Search"," "]})}),Object(n.jsx)(r.b,{to:"/input",children:Object(n.jsx)(h,{})})]})]}),Object(n.jsx)(b,{})]})},O=o(28),p=o(70),g=o(71),x=o(73),f=o(72),v=o(26),y=o(27),k=o.n(y),C=o(49),N=o.n(C);o(391);o(392);function w(e){return Object(n.jsxs)("div",{className:"listGroup",children:["Address: ",e.address," ",Object(n.jsx)("br",{}),"Foods: ",e.food,Object(n.jsx)("br",{}),"Description: ",e.description,Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{type:"button",className:"btn btn-primary btn-sm",children:"Share"}),Object(n.jsx)("button",{type:"button",className:"btn btn-success btn-sm",children:"Direction"}),Object(n.jsxs)("button",{onClick:function(){console.log("current location")},children:[" ","Show Location"]})]}),Object(n.jsx)("hr",{color:"red"})]})}o(393);var L=function(e){return Object(n.jsx)("div",{className:"listContainer",children:e.children})},S=o(29),F=(o(394),o(104)),P=o.n(F),D=function(e){return P.a.post("/api/input",e)},I=function(){return P.a.get("api/input")};var M=function(){var e=Object(c.useState)(""),t=Object(S.a)(e,2),o=t[0],s=t[1],a=Object(c.useState)(""),i=Object(S.a)(a,2),r=i[0],l=i[1],d=Object(c.useState)(""),u=Object(S.a)(d,2),j=u[0],b=u[1],h=Object(c.useState)(""),m=Object(S.a)(h,2),O=m[0],p=m[1],g=Object(c.useState)(""),x=Object(S.a)(g,2),f=x[0],v=x[1],y=Object(c.useState)(""),k=Object(S.a)(y,2),C=k[0],w=(k[1],Object(c.useState)("")),L=Object(S.a)(w,2),F=L[0],P=(L[1],function(e){e.preventDefault(),D({address:o,category:r,item_description:j,lat:O,lng:f}),s(""),l(""),b(""),console.log(o,r,j)}),I=function(e){p(e.coords.latitude),v(e.coords.longitude),s(e.coords.latitude+", "+e.coords.longitude),console.log("CurrentLngLat",C,F)};return Object(n.jsxs)("container",{className:"card inputCard",children:[Object(n.jsx)("span",{className:"title",children:Object(n.jsx)("h5",{children:"Please add details below"})}),Object(n.jsxs)("form",{onSubmit:P,children:[Object(n.jsxs)("div",{className:"row address",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("input",{required:"true",name:"address",placeholder:"Enter Donating  Address",type:"text",className:"form-control","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:(N.a.fromAddress(o).then((function(e){var t=e.results[0].geometry.location,n=t.lat,c=t.lng;p(n),v(c),console.log(n,c,"Input Address",o)}),(function(e){console.error(e)})),function(e){return s(e.target.value)})})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("button",{type:"button",className:"btn useMyLocation btn-success btn-md",onClick:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(I):console.log("Geolocation is not supported by this browser.")},children:"Use My Location"})})]}),Object(n.jsx)("b",{children:"Please Choose Food Category:"}),Object(n.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(n.jsx)("input",{name:"category",value:"Canned Foods",type:"checkbox",className:"custom-control-input",id:"customCheck1",onChange:function(e){return l(e.target.value)}}),Object(n.jsx)("label",{className:"custom-control-label",for:"customCheck1",children:"Canned Foods"})]}),Object(n.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(n.jsx)("input",{name:"category",value:"Breads/Grains",type:"checkbox",className:"custom-control-input",id:"customCheck2",onChange:function(e){return l(r+"-- "+e.target.value)}}),Object(n.jsx)("label",{className:"custom-control-label",for:"customCheck2",children:"Breads/Grains"})]}),Object(n.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(n.jsx)("input",{name:"category",value:"Vegetables/Fruits",type:"checkbox",className:"custom-control-input",id:"customCheck3",onChange:function(e){return l(r+"-- "+e.target.value)}}),Object(n.jsx)("label",{className:"custom-control-label",for:"customCheck3",children:"Vegetables/Fruits"})]}),Object(n.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(n.jsx)("input",{name:"category",value:"Drink",type:"checkbox",className:"custom-control-input",id:"customCheck4",onChange:function(e){return l(r+"-- "+e.target.value)}}),Object(n.jsx)("label",{className:"custom-control-label",for:"customCheck4",children:"Drinks"})]}),Object(n.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(n.jsx)("input",{name:"category",value:"Other",type:"checkbox",className:"custom-control-input",id:"customCheck5",onChange:function(e){return l(r+"-- "+e.target.value)}}),Object(n.jsx)("label",{className:"custom-control-label",for:"customCheck5",children:"Other"})]}),Object(n.jsx)("textarea",{name:"description",className:"textarea",rows:"4",cols:"32",placeholder:"Description / Comment",onChange:function(e){return b(e.target.value)}})," ",Object(n.jsx)("br",{}),Object(n.jsxs)("button",{type:"button",className:"btn btn-primary btn-md",onClick:P,children:["Submit"," "]})]})]})};o(412),s.a.Component;N.a.setApiKey("AIzaSyD812o98-5qpcViO3kCoUa8mpd4eyflbPo");var A=function(e){Object(x.a)(o,e);var t=Object(f.a)(o);function o(){var e;Object(p.a)(this,o);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={locations:[],address:"",city:"",area:"",state:"",zoom:50,height:400,mapPosition:{lat:44.986656,lng:-93.258133},markerPosition:{lat:44.986656,lng:-93.258133},filter:!1,filteredLocation:[]},e.loadLocations=function(){I().then((function(t){console.log("Location list",e.state.locations),e.setState({locations:t.data})})).catch((function(e){return console.log(e)}))},e.onMarkerDragEnd=function(e){var t=e.latLng.lat(),o=e.latLng.lng();console.log(e),N.a.fromLatLng(t,o).then(console.log("Latitude",t,"Longitude",o))},e.handleChange=function(t){e.setState({address:t}),e.setState({filter:!!t}),e.setState({filteredLocation:e.state.locations.filter((function(t){return t.address.toLocaleLowerCase().includes(e.state.address.toLocaleLowerCase())}))})},e.handleSelect=function(t){Object(y.geocodeByAddress)(t).then((function(e){return Object(y.getLatLng)(e[0])})).then((function(t){console.log("Success",t),e.setState({mapPosition:t,markerPosition:t})})).catch((function(e){return console.error("Error",e)}))},e}return Object(g.a)(o,[{key:"componentDidMount",value:function(){this.loadLocations()}},{key:"render",value:function(){var e=this,t=Object(v.withScriptjs)(Object(v.withGoogleMap)((function(t){return Object(n.jsxs)(v.GoogleMap,{defaultZoom:12,defaultCenter:{lat:e.state.markerPosition.lat,lng:e.state.markerPosition.lng},children:[Object(n.jsx)(v.Marker,{draggable:!1,onDragEnd:e.onMarkerDragEnd,position:{lat:e.state.markerPosition.lat,lng:e.state.markerPosition.lng},children:Object(n.jsx)(v.InfoWindow,{children:Object(n.jsx)("div",{children:e.state.address})})}),e.state.locations.length?(console.log("Location Object",e.state.locations),Object(n.jsx)("div",{children:e.state.locations.map((function(e,t){return console.log(parseInt(e.lat)),Object(n.jsx)(v.Marker,{position:{lat:parseFloat(e.lat),lng:parseFloat(e.lng)}},t)}))})):Object(n.jsx)("h5",{children:"There is no Food Sharing Location here"})]})})));return this.loadLocations,Object(n.jsxs)("div",{className:"mapContainer",children:[Object(n.jsx)(j,{}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{style:{textAlign:"left"},children:Object(n.jsx)("h3",{children:Object(n.jsx)("b",{children:"Food Sharing Locations"})})}),Object(n.jsxs)("div",{className:"row lg-12",children:[Object(n.jsx)("div",{className:"col-xs-6 col-md-6",children:Object(n.jsx)(L,{children:this.state.filter?0===this.state.filteredLocation.length?Object(n.jsx)("h4",{children:"Sorry no Locations found in this area"}):this.state.filteredLocation.map((function(e,t){return console.log("filtered filteredLocation",e),Object(n.jsx)(w,{onClick:function(){console.log("List onclick")},address:e.address,food:e.FoodItems[0].category,description:e.FoodItems[0].item_description},t)})):this.state.locations.map((function(e,t){return Object(n.jsx)(w,{onClick:function(){console.log("List onclick")},address:e.address,food:e.FoodItems[0].category,description:e.FoodItems[0].item_description},t)}))})}),Object(n.jsxs)("div",{className:"col-xs-12 col-md-6",children:[Object(n.jsx)(k.a,{searchOptions:["cities"],value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect,style:{justifyItems:"center"},children:function(e){var t=e.getInputProps,o=e.suggestions,c=e.getSuggestionItemProps,s=e.loading;return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",Object(O.a)({},t({placeholder:"Search Places ...",className:"location-search-input"}))),Object(n.jsxs)("div",{className:"autocomplete-dropdown-container",children:[s&&Object(n.jsx)("div",{children:"Loading..."}),o.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",o=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return Object(n.jsx)("div",Object(O.a)(Object(O.a)({},c(e,{className:t,style:o})),{},{children:Object(n.jsx)("span",{children:e.description})}))}))]})]})}}),Object(n.jsx)(t,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyD812o98-5qpcViO3kCoUa8mpd4eyflbPo&v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(n.jsx)("div",{style:{height:"100%"}}),containerElement:Object(n.jsx)("div",{style:{height:"600px",width:"100%"}}),mapElement:Object(n.jsx)("div",{style:{height:"100%",width:"100%"}})})]})]})]}),Object(n.jsx)(b,{})]})}}]),o}(s.a.Component);var E=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(j,{})})};o(413);var G=function(){return Object(n.jsxs)("div",{className:"inputPage",children:[Object(n.jsx)(E,{}),Object(n.jsx)(M,{}),Object(n.jsx)(b,{})]})};var T=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(r.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"container"}),Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(m,{})}),Object(n.jsx)(l.a,{path:"/map",children:Object(n.jsx)(A,{})}),Object(n.jsx)(l.a,{path:"/input",children:Object(n.jsx)(G,{})}),Object(n.jsx)(l.a,{path:"/"})]})]})})})};o(414);i.a.render(Object(n.jsx)(d.a,{domain:"dev-0x0j5vkr.us.auth0.com",clientId:"EGDfULsRjQoT0K7yGeHNncOrla10fnsL",redirectUri:"http://localhost:3000/input",children:Object(n.jsx)(T,{})}),document.getElementById("root"))}},[[415,1,2]]]);
//# sourceMappingURL=main.0225d680.chunk.js.map