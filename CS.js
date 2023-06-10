auto.waitFor();
// console.show()
// x = device.width
// y = device.height
// if (x == 0) {
//     x = 721
//     y = 1281
// }
// toastLog('2022070401');
// toastLog(x);
// toastLog(y);

var r = http.get("v2.jinrishici.com/sentence",{
  headers: {
      'Accept-Language': 'zh-cn,zh;q=0.5',
      'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11',
      'X-User-Token':'IGdjfOgHkqTuo1PJT9ijxYDkkVuSQJCp'

  }
});
// log("code = " + r.statusCode);
// log("html = " + r.body.string());
// aa=eval("(" + r.body.string() + ")")
// log(aa)
log(r.body.json());
log(r.body.json().data.origin.content.length);
log(r.body.json().data.origin.title)
log(r.body.json().data.origin.dynasty)
log(r.body.json().data.origin.author)
for (i = 0; i < r.body.json().data.origin.content.length; i++) {//3kaishi
  log(r.body.json().data.origin.content[i])
 
}


//log(r.body.json().data.origin.content);
log('------')
//log(r.body.json().data.content)