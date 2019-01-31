var dom = document.getElementById("publications");
dom.childNodes[1].childNodes[1].childNodes[3].className="col-xs-12 col-md-12";
// dom.childNodes[1].childNodes[1].childNodes[2].className="col-xs-12 col-md-12"

dom4 = dom.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[5];
var p = document.createElement('p');
p.innerHTML = 'Xinyu Gong, Shiyu Chang, <strong>Yifan Jiang</strong>, <a href="http://www.atlaswang.com/" target="view_window">Zhangyang Wang</a>';
dom4.innerText = "";
dom4.appendChild(p);


dom3 = dom.childNodes[1].childNodes[1].childNodes[3].childNodes[3].childNodes[5];
var p = document.createElement('p');
p.innerHTML = '<strong>Yifan Jiang</strong>, Xinyu Gong, <a href="http://www.atlaswang.com/" target="view_window">Zhangyang Wang</a>, <a href="https://sites.google.com/site/chengyu05/" target="view_window">Yu Cheng</a>';
dom3.innerText = "";
dom3.appendChild(p);

dom2_1 = dom.childNodes[1].childNodes[1].childNodes[3].childNodes[5].childNodes[9];
var p = document.createElement('p');
p.innerHTML = 'IEEE Transaction on Affective Computing (<strong>Major Revision</strong>)';
dom2_1.innerText = "";
dom2_1.appendChild(p);

dom2 = dom.childNodes[1].childNodes[1].childNodes[3].childNodes[5].childNodes[7];
var p = document.createElement('p');
p.innerHTML = '<strong>Yifan Jiang*</strong>, Xiaoye Qu*, <a href="https://oyxhust.github.io/" target="view_window">Xi Ouyang</a>, <a href="https://sites.google.com/site/chengyu05/" target="view_window">Yu Cheng</a>, Shiping Wen, Yang Yang, Pan Zhou';
dom2.innerText = "";
dom2.appendChild(p);

dom1 = dom.childNodes[1].childNodes[1].childNodes[3].childNodes[7].childNodes[7];
var p = document.createElement('p');
p.innerHTML = '<a href="https://oyxhust.github.io/" target="view_window">Xi Ouyang*</a>, <a href="https://sites.google.com/site/chengyu05/" target="view_window">Yu Cheng*</a>, <strong>Yifan Jiang</strong>, <a href="http://www.cs.cmu.edu/~chunlial/" target="view_window">Chun-Liang Li</a>, Pan Zhou';
dom1.innerText = "";
dom1.appendChild(p);
// dom1.child = <p><strong>Yifan Jiang*</strong>, Xiaoye Qu*, Xi Ouyang, Yu Cheng, Shiping Wen, Yang Yang, Pan Zhou </p>;