(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t(21)},18:function(e,a,t){},2:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(10),i=t.n(r),l=(t(18),t(3)),u=t(4),c=t(6),s=t(5),d=t(7),m=t(1),h=(t(2),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(s.a)(a).call(this,e))).state={count:t.props.population},t.launchCounter(),t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"launchCounter",value:function(){var e=this;setInterval(function(){e.setState({count:e.state.count+1})},1e3)}},{key:"render",value:function(){return o.a.createElement("p",{className:"tickerItem1"},"Current Global Population: ",this.state.count.toLocaleString())}}]),a}(n.Component)),p=function(e){var a=e.total_population[0].population,t=e.total_population[1].population,n=t>a?"+":"-",r="+"===n?"\ud83d\udc76\ud83c\udffd\ud83d\udc76\ud83d\udc76\ud83c\udfff\ud83d\udc76\ud83c\udffb":"\u2620\ufe0f\u2620\ufe0f\u2620\ufe0f\u2620\ufe0f";return o.a.createElement("div",{className:"worldPopContainer"},o.a.createElement("div",{className:"worldPop"},o.a.createElement("div",{className:"tickerGridContainer"},e.total_population.map(function(e,a){return 0===a?"+"===n?o.a.createElement(h,{key:a,population:parseInt(e.population)}):o.a.createElement("p",{key:e,className:"tickerItem1"},"Today's Global Population: ",e.population.toLocaleString()):o.a.createElement("p",{key:e,className:"tickerItem2"},"Tomorrow's Global Population: ",e.population.toLocaleString())}),o.a.createElement("p",{className:"tickerItem3"},"Difference: ",n,(t-a).toLocaleString()," ",r))))},b=t(11),v=t(8),y=function(e){var a=e.children,t=e.width,n=e.height;return o.a.createElement("svg",{className:"gridChart",viewBox:"0 0 ".concat(t," ").concat(n),width:t,height:n,display:"block"},a)},f=function(e){var a=e.x,t=e.y,n=e.width,r=e.height,i=e.country,l=e.population,u=e.color,c=t+r+5,s="rotate(-90 ".concat(a-5," ").concat(c,")");return o.a.createElement("g",null,o.a.createElement("text",{x:a,y:c,className:"barText",transform:s},o.a.createElement("tspan",null,i)),o.a.createElement("text",{x:a,y:t-5,className:"barNums"},l.toLocaleString()),o.a.createElement("rect",{x:a,y:t,width:n,height:r,fill:u}))},g=function(e){var a=e.populations.length,t=v.a(e.populations,function(e){return e.population}),n=v.b().domain([0,t]).range([0,470]),r=v.b().domain([0,t]).range(["#c19898","#4a4a48"]);return o.a.createElement("div",null,o.a.createElement(y,{width:130*a,height:500},e.populations.map(function(e,a){var t=e.population;return o.a.createElement(f,{key:e.name,country:e.name,population:e.population,color:r(e.population),x:130*a+20,y:500-n(t),width:100,height:n(t)})})))},C=["Afghanistan","Albania","Algeria","Angola","Antigua and Barbuda","Arab Rep of Egypt","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","The Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cote-d-Ivoire","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Channel Islands","Chile","China","Hong Kong SAR-China","Macao SAR China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Dem Peoples Rep of Korea","Dem Rep of Congo","Denmark","Djibouti","Dominican Republic","Ecuador","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Federated States of Micronesia","Fiji","Finland","France","French Guiana","French Polynesia","FYR Macedonia","Gabon","The Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Islamic Republic of Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyz Republic","Lao PDR","Latvia","Lebanon","Lesotho","Liberia","Libya","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Martinique","Mauritania","Mauritius","Mayotte","Melanesia","Mexico","Micronesia","Moldova","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nepal","The Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Polynesia","Portugal","Puerto Rico","Qatar","Reunion","RB-de-Venezuela","Rep of Korea","Rep of Yemen","Romania","Russian Federation","Rwanda","St-Lucia","St-Vincent and the Grenadines","Samoa","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovak Republic","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","West Bank and Gaza","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syrian Arab Rep","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","US Virgin Islands","Uruguay","Uzbekistan","Vanuatu","Vietnam","Zambia","Zimbabwe"],E=function(e){function a(e){var t;Object(l.a)(this,a);for(var n=[],o=0;o<4;o++)n.push(C[Math.floor(Math.random()*C.length)]);return(t=Object(c.a)(this,Object(s.a)(a).call(this,e))).state={countries:C,selectedCountries:n,populations:[],countryAndPop:[],formSubmitted:!1},t.handleSubmit=t.handleSubmit.bind(Object(m.a)(Object(m.a)(t))),t.handleChangeCountry=t.handleChangeCountry.bind(Object(m.a)(Object(m.a)(t))),t.handleHTTPErrors=t.handleHTTPErrors.bind(Object(m.a)(Object(m.a)(t))),t.handleAddCountry=t.handleAddCountry.bind(Object(m.a)(Object(m.a)(t))),t.handleRemoveCountry=t.handleRemoveCountry.bind(Object(m.a)(Object(m.a)(t))),t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"handleChangeCountry",value:function(e){var a=this.state.selectedCountries.slice();a[e.target.id]=e.target.value,this.setState({selectedCountries:a})}},{key:"handleAddCountry",value:function(e){e.preventDefault();var a=Math.floor(Math.random()*this.state.countries.length),t=this.state.countries[a];this.setState({selectedCountries:[].concat(Object(b.a)(this.state.selectedCountries),[t])})}},{key:"handleRemoveCountry",value:function(e){e.preventDefault();var a=this.state.selectedCountries;a.pop(),this.setState({selectedCountries:a})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t=new Date,n=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),o=[],r=!0,i=!1,l=void 0;try{for(var u,c=this.state.selectedCountries[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var s=u.value,d="/population/".concat(s,"/").concat(n),m=fetch("".concat("http://cors-anywhere.deploy.cs.camosun.bc.ca/").concat("http://api.population.io:80/1.0").concat(d)).then(function(e){return a.handleHTTPErrors(e)}).then(function(e){return e.json()});o.push(m)}}catch(h){i=!0,l=h}finally{try{r||null==c.return||c.return()}finally{if(i)throw l}}Promise.all(o).then(function(e){var t=[],n=!0,o=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var u=i.value;t.push(u.total_population.population)}}catch(h){o=!0,r=h}finally{try{n||null==l.return||l.return()}finally{if(o)throw r}}a.setState({populations:t});var c=a.state.selectedCountries,s=a.state.populations,d=c.map(function(e,a){return Object.assign({name:e,population:s[a]})});a.setState({countryAndPop:d,formSubmitted:!0})}).catch(function(e){console.log(e)})}},{key:"handleHTTPErrors",value:function(e){if(!e.ok)throw Error(e.status+": "+e.statusText);return e}},{key:"render",value:function(){var e,a,t=this,n=o.a.createElement("button",{id:"addButton",onClick:this.handleAddCountry},"Add"),r=o.a.createElement("button",{id:"removeButton",onClick:this.handleRemoveCountry},"Remove");return this.state.formSubmitted&&(e=o.a.createElement(g,{populations:this.state.countryAndPop,width:500,height:500})),a=this.state.selectedCountries.length<=2?o.a.createElement("div",{className:"addRemoveButtons"},n):this.state.selectedCountries.length>2&&this.state.selectedCountries.length<6?o.a.createElement("div",{className:"addRemoveButtons"},n,r):o.a.createElement("div",{className:"addRemoveButtons"},r),o.a.createElement("div",null,o.a.createElement("div",{className:"spacer"}),o.a.createElement("div",{className:"mainGridContainer"},o.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},o.a.createElement("h3",null,"Compare current populations"),o.a.createElement("div",{className:"countryDropdownWrapper"},o.a.createElement("div",{className:"addRemoveButtons"}),a,this.state.selectedCountries.map(function(e,a){return o.a.createElement("select",{className:"countryDropdown",key:a,id:a,value:e,onChange:t.handleChangeCountry},t.state.countries.map(function(e){return o.a.createElement("option",{key:e,country:e},e)}))})),o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("input",{value:"Submit",type:"submit",className:"submitButton"}))),e))}}]),a}(n.Component),S=function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("p",null,"Created Dec 2018 \xa9",o.a.createElement("a",{href:"https://andrewnbishop.com",target:"blank"},"Andrew Bishop"),"\xa0\xa0\xa0View"," ",o.a.createElement("a",{href:"https://github.com/a-bishop/population-stats",target:"blank"},"the code")))},w=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(s.a)(a).call(this,e)))._isMounted=!1,t.state={total_population:[]},t.handleHTTPErrors=t.handleHTTPErrors.bind(Object(m.a)(Object(m.a)(t))),t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,fetch("".concat("http://cors-anywhere.deploy.cs.camosun.bc.ca/").concat("http://api.population.io:80/1.0").concat("/population/World/today-and-tomorrow")).then(function(a){return e.handleHTTPErrors(a)}).then(function(e){return e.json()}).then(function(a){e.setState({total_population:a.total_population})}).catch(function(e){console.log(e)})}},{key:"handleHTTPErrors",value:function(e){if(!e.ok)throw Error(e.status+": "+e.statusText);return e}},{key:"render",value:function(){return this._isMounted?o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"content"},o.a.createElement(p,this.state),o.a.createElement(E,null)),o.a.createElement(S,null)):null}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.43e88309.chunk.js.map