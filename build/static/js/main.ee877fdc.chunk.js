(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__2AnZB",description:"Profile_description__3dkT3",avatar:"Profile_avatar__tzwKc",name:"Profile_name__F8g49",tag:"Profile_tag__AcTB-",location:"Profile_location__2ugYm",stats:"Profile_stats__3rQbE"}},function(e,a,t){e.exports={transactionistory:"Transactions_transactionistory__qRyK7",type:"Transactions_type__1psBk",amount:"Transactions_amount__3bEiP",currency:"Transactions_currency__25mbC",theader:"Transactions_theader__ojOzc"}},function(e,a,t){e.exports={friends:"FriendList_friends__1jPhZ",item:"FriendList_item__2skoX",avatar:"FriendList_avatar__vc8f-",name:"FriendList_name__1FM40",status:"FriendList_status__2SfPv",offLine:"FriendList_offLine__1LU2Y FriendList_status__2SfPv"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__3I7oh",title:"Statistics_title__mjjg7",item:"Statistics_item__3ZVrF",statList:"Statistics_statList__bAVB7",label:"Statistics_label__2wGpW",percentage:"Statistics_percentage__2bbLU"}},,,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(6),r=t.n(s),i=t(1),l=t.n(i),m=function(e){var a=e.user;return c.a.createElement("div",{className:l.a.profile},c.a.createElement("div",{className:l.a.description},c.a.createElement("img",{src:a.avatar,alt:"user avatar",className:l.a.avatar}),c.a.createElement("p",{className:l.a.name},a.name),c.a.createElement("p",{className:l.a.tag},"@",a.tag),c.a.createElement("p",{className:l.a.location},a.location)),c.a.createElement("ul",{className:l.a.stats},c.a.createElement("li",{className:l.a.statsLi},c.a.createElement("span",{className:l.a.label},"Followers"),c.a.createElement("span",{className:l.a.quantity},a.stats.followers)),c.a.createElement("li",{className:l.a.statsLi},c.a.createElement("span",{className:l.a.label},"Views"),c.a.createElement("span",{className:l.a.quantity},a.stats.views)),c.a.createElement("li",{className:l.a.statsLi},c.a.createElement("span",{className:l.a.label},"Stats"),c.a.createElement("span",{className:l.a.quantity},a.stats.likes))))},o=t(7),d=t(8),u=t(4),p=t.n(u),f=function(e){var a=e.title,t=e.stats;return c.a.createElement("section",{className:p.a.statistics},c.a.createElement("h2",{className:p.a.title},a),c.a.createElement("ul",{className:p.a.statList},t.map((function(e){return c.a.createElement("li",{className:p.a.item,key:e.id},c.a.createElement("span",{className:p.a.label},e.label),c.a.createElement("span",{className:p.a.percentage},e.percentage))}))))},b=t(9),_=t(3),y=t.n(_),E=function(e){var a=e.avatar,t=e.name,n=e.isOnline;return c.a.createElement("li",{className:y.a.item},c.a.createElement("span",{className:n?y.a.status:y.a.offLine}),c.a.createElement("img",{className:y.a.avatar,src:a,alt:"",width:"48"}),c.a.createElement("p",{className:y.a.name},t))},N=function(e){var a=e.friends;return c.a.createElement("ul",{className:y.a.friends},a.map((function(e){return c.a.createElement(E,{key:e.id,isOnline:e.isOnline,avatar:e.avatar,name:e.name})})))},w=t(10),v=t(2),g=t.n(v),h=function(e){var a=e.items;return c.a.createElement("table",{className:g.a.transactionistory},c.a.createElement("thead",{className:g.a.theader},c.a.createElement("tr",null,c.a.createElement("th",{className:g.a.type},"Type"),c.a.createElement("th",{className:g.a.amount},"Amount"),c.a.createElement("th",{className:g.a.currency},"Currency"))),c.a.createElement("tbody",null,a.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",{className:g.a.type},e.type),c.a.createElement("td",{className:g.a.amount},e.amount),c.a.createElement("td",{className:g.a.currency},e.currency))}))))},L=function(){return c.a.createElement("div",null,c.a.createElement(m,{user:o}),c.a.createElement(f,{title:"File upload",stats:d}),c.a.createElement(N,{friends:b}),c.a.createElement(h,{items:w}))};r.a.render(c.a.createElement(L,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.ee877fdc.chunk.js.map