var dom = document.getElementById("publications");
dom.childNodes[1].childNodes[1].childNodes[3].className="col-xs-12 col-md-12";
// dom.childNodes[1].childNodes[1].childNodes[2].className="col-xs-12 col-md-12"
dom1 = dom.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[7];
var p = document.createElement('p');
p.innerHTML = '<strong>Yifan Jiang*</strong>, Xiaoye Qu*, <a href="https://oyxhust.github.io/" target="view_window">Xi Ouyang</a>, <a href="https://sites.google.com/site/chengyu05/" target="view_window">Yu Cheng</a>, Shiping Wen, Yang Yang, Pan Zhou';
dom1.innerText = "";
dom1.appendChild(p);

dom2 = dom.childNodes[1].childNodes[1].childNodes[3].childNodes[3].childNodes[7];
var p = document.createElement('p');
p.innerHTML = '<a href="https://oyxhust.github.io/" target="view_window">Xi Ouyang*</a>, <a href="https://sites.google.com/site/chengyu05/" target="view_window">Yu Cheng*</a>, <strong>Yifan Jiang</strong>, <a href="http://www.cs.cmu.edu/~chunlial/" target="view_window">Chun-Liang Li</a>, Pan Zhou';
dom2.innerText = "";
dom2.appendChild(p);
// dom1.child = <p><strong>Yifan Jiang*</strong>, Xiaoye Qu*, Xi Ouyang, Yu Cheng, Shiping Wen, Yang Yang, Pan Zhou </p>;