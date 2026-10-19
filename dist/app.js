const exhibits = {
  chen: {
    number:'01', title:'陈觉致赵云霄', year:'1928', relation:'写给妻子赵云霄', date:'1928 年 10 月 10 日',
    brief:'一封写给伴侣的诀别信。文字连接着共同的经历、未出生的孩子与对父母的牵挂。',
    letter:'陈觉与赵云霄在莫斯科中山大学学习期间相识、结为夫妻，1927 年一同回国。两人后来先后被捕。陈觉在牺牲前写下给妻子的信，其中谈及家人与尚未出生的孩子。本展不将未经逐字核定的网络转录当作原件全文。',
    question:'读这封信，可以同时追问：一封写给妻子的家书，为什么也提到父母与孩子？',
    bio:[['1903','陈觉出生于湖南醴陵。'],['1925','加入中国共产党，赴莫斯科中山大学学习；与赵云霄相识并结为夫妻。'],['1927','与赵云霄回国，参与相关革命工作。'],['1928','两人先后被捕。陈觉于 10 月牺牲，赵云霄于次年 3 月牺牲。']],
    people:'陈觉与赵云霄既是夫妻，也是共同经历时代变局的同行者。这个人物档案把两人的经历放在一起理解，但主展品仍是陈觉写给赵云霄的一封信。',
    image:'展图为陈觉遗书复制件的四页公开图片，不是原件。图片清晰度以来源网站公布版本为准。',
    imageCredit:'陈觉致赵云霄遗书复制件｜三湘风纪网（湖南省纪委监委官网；原报道湖南日报，通讯员摄）',
    wallCredit:'图源：三湘风纪网｜遗书复制件',
    imagePage:'https://www.sxfj.gov.cn/gong_zuo_dong_tai/yao_wen/222254686.shtml',
    images:[1,2,3,4].map(n=>`assets/historical/chen-jue-letter-p${String(n).padStart(2,'0')}.png`),
    portrait:'assets/people/chen-jue.jpg',
    portraitCredit:'陈觉像与遗书展陈拼版｜新华社发；上图为陈觉像，下图为遗书展陈',
    portraitPage:'https://www.xinhuanet.com/2021-09/29/c_1127918556.htm',
    sources:[['三湘风纪网：遗书复制件展图与报道','https://www.sxfj.gov.cn/gong_zuo_dong_tai/yao_wen/222254686.shtml'],['教育部：革命伉俪陈觉、赵云霄夫妇','https://www.moe.gov.cn/jyb_xwfb/xw_zt/moe_357/s3579/moe_433/moe_494/tnull_6516.html']]
  },
  zhao: {
    number:'02', title:'赵一曼致宁儿', year:'1936', relation:'写给儿子宁儿', date:'1936 年 8 月 2 日',
    brief:'一位母亲写给孩子的最后叮咛，留下了私人牵挂，也留下抗日斗争的时代印记。',
    letter:'赵一曼投身东北抗日斗争，长期与儿子分离。1936 年 8 月 2 日，赴牺牲地途中，她为儿子宁儿留下遗言。观展时须区分当年的遗言、后来的公开转录和展出的誊写件。',
    question:'这封信为何迟到多年才到达孩子身边？保存、转录与誊写各自改变了什么？',
    bio:[['1905','赵一曼出生于四川宜宾。'],['1926','加入中国共产党。'],['1931 后','赴东北参与抗日斗争。'],['1935','在战斗中受伤被俘。'],['1936','8 月 2 日留下写给宁儿的遗言，随后牺牲。']],
    people:'赵一曼既是东北抗日斗争的参与者，也是一位与孩子长期分离的母亲。人物生平与书信内容在同一展位呈现，避免只以一段感人的文字概括她的全部经历。',
    image:'此图为七一网公开报道配图，原页注明图片来源为光明日报。常见展图涉及后人誊写版本，不能仅凭图片判断为赵一曼亲笔原件。',
    imageCredit:'赵一曼遗书相关展图｜七一网（原页注明：图片来源光明日报）；请勿视为亲笔原件',
    wallCredit:'图源：七一网｜遗书相关展图，非亲笔原件',
    imagePage:'https://www.12371.gov.cn/web/article/1438316125964075008/web/content_1438316125964075008.html',
    images:['assets/historical/zhao-yiman-letter.jpg'],
    portrait:'assets/people/zhao-yiman.jpg',
    portraitCredit:'赵一曼像｜新华社发，新华网发布',
    portraitPage:'https://www.xinhuanet.com/20250804/c177b4ec15894f1cb782eac8a187d823/c.html',
    sources:[['共产党员网：赵一曼生平','https://www.12371.cn/2021/05/18/ARTI1621346437072108.shtml'],['新华社：展出誊写件的身份说明','https://www.xinhuanet.com/politics/20250626/463ac6d58f0844329e793d7e90a35555/c.html'],['国家档案局：赵一曼——迟到的诀别','https://www.saac.gov.cn/daj/yfjs/202104/eee1ec6379d74a26a6779ece70ae75be.shtml']]
  },
  jiang: {
    number:'03', title:'江竹筠致谭竹安', year:'1949', relation:'托付照料幼子的亲人', date:'1949 年',
    brief:'一页写给亲人的遗书，把对幼子的关切与对未来的期待留在了纸上。',
    letter:'江竹筠被关押期间，幼子由亲友照顾。她写信给谭竹安，牵挂孩子的成长。重庆中国三峡博物馆将这封一页亲笔遗书列为馆藏一级文物。馆方不同页面分别表述为“1949 年秋”与“1949 年 8 月”，本站因此只标“1949 年”，待进一步核对。',
    question:'为什么关于孩子的家书，是写给照料孩子的亲人？从这层关系可读出哪些现实处境？',
    bio:[['1920','江竹筠出生于四川自贡。'],['1939','加入中国共产党。'],['1947','与丈夫彭咏梧在下川东开展工作。'],['1948','彭咏梧牺牲；江竹筠于 6 月被捕。'],['1949','留下家书，于 11 月牺牲。']],
    people:'江竹筠、谭竹安、彭云之间的关系，是理解这封信的关键。她并不是直接给孩子写信，而是将对孩子生活和成长的嘱托交给照顾他的亲人。',
    image:'重庆中国三峡博物馆公开的一页亲笔遗书馆藏图。网页显示为馆方发布版本，未作 AI 修复或重绘。',
    imageCredit:'江竹筠烈士亲笔遗书｜重庆中国三峡博物馆藏，图源：馆藏页面',
    wallCredit:'图源：重庆中国三峡博物馆｜馆藏亲笔遗书',
    imagePage:'https://www.3gmuseum.cn/web/article/1430011797078773760/web/content_1430011797078773760.html',
    images:['assets/historical/jiang-zhuyun-letter.jpg'],
    portrait:'assets/people/jiang-zhuyun.png',
    portraitCredit:'江竹筠照片｜共产党员网供稿，广州市司法局网站发布',
    portraitPage:'https://sfj.gz.gov.cn/ztlm/dsxx/content/post_7264993.html',
    sources:[['重庆中国三峡博物馆：1949 年江竹筠烈士遗书','https://www.3gmuseum.cn/web/article/1430011797078773760/web/content_1430011797078773760.html'],['重庆中国三峡博物馆：江竹筠烈士的遗书','https://www.3gmuseum.cn/web/article/1432473509990563840/web/content_1432473509990563840.html']]
  }
};

const stations = [
  {id:'chen-letter',type:'letter',key:'chen',name:'陈觉的家书',x:-7.38,z:5.4,side:'left'},
  {id:'zhao-letter',type:'letter',key:'zhao',name:'赵一曼的家书',x:7.38,z:10.5,side:'right'},
  {id:'jiang-letter',type:'letter',key:'jiang',name:'江竹筠的家书',x:-7.38,z:15.6,side:'left'},
  {id:'timeline',type:'timeline',name:'时代时间线',x:0,z:21.38,side:'end'}
];
const wallImages={}, panelCache={};
for(const [key,item] of Object.entries(exhibits)){
  const image=new Image();
  image.onload=image.onerror=()=>{delete panelCache[key];requestRender()};
  image.src=item.images[0];wallImages[key]=image;
}

const canvas=document.getElementById('museum-canvas'), ctx=canvas.getContext('2d'), panelLayer=document.getElementById('panel-layer');
const usedPanels=new Set();
const camera={x:0,z:.7,yaw:0,pitch:0};
const entrySign={x:0,z:4.65,halfWidth:.55,bottom:.56,top:2.72,clearanceX:.94,clearanceZ:.72};
const keys=new Set();
const joystick={x:0,forward:0,pointerId:null};
let viewW=0,viewH=0,dpr=1,active=null,lastFocusId=null,renderMarkers=[],lastDraw=0,framePending=false,dragStart=null,dragMoved=false,modalSource=null,activeTab='letter';
let visualMode='historical',imagePage=0;
const intro=document.getElementById('intro'), contentDialog=document.getElementById('content-dialog'), indexDialog=document.getElementById('index-dialog');
const aiDialog=document.getElementById('ai-dialog');
const readKey='xinhuo-museum-read-v2';let read=new Set();
try{let saved=JSON.parse(localStorage.getItem(readKey)||'[]');if(Array.isArray(saved))read=new Set(saved.filter(x=>exhibits[x]));}catch(_){}
function updateProgress(){document.getElementById('progress').textContent=`${read.size} / 3`;}
updateProgress();
function resize(){viewW=canvas.clientWidth;viewH=canvas.clientHeight;const pixelBudget=3200000;dpr=Math.min(1.6,Math.max(.6,Math.sqrt(pixelBudget/Math.max(1,viewW*viewH))));canvas.width=Math.max(1,Math.round(viewW*dpr));canvas.height=Math.max(1,Math.round(viewH*dpr));ctx.setTransform(dpr,0,0,dpr,0,0);lastDraw=0;requestRender()}
window.addEventListener('resize',resize);resize();
function cameraPoint(p){let dx=p.x-camera.x,dz=p.z-camera.z,c=Math.cos(camera.yaw),s=Math.sin(camera.yaw);return{x:dx*c-dz*s,y:p.y-1.62,z:dx*s+dz*c}}
function clipPolygon(points){let out=[];for(let i=0;i<points.length;i++){let a=points[i],b=points[(i+1)%points.length],insideA=a.z>.12,insideB=b.z>.12;if(insideA)out.push(a);if(insideA!==insideB){let t=(.12-a.z)/(b.z-a.z);out.push({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t,z:.12})}}return out}
function projection(v){const focal=Math.min(viewW*.86,viewH*1.28);return{x:viewW/2+v.x/v.z*focal,y:viewH*(.55+camera.pitch)-v.y/v.z*focal}}
function worldProjection(p){let c=cameraPoint(p);return c.z>.12?{...projection(c),depth:c.z}:null}
function quad(points,fill,stroke,kind='surface',label=''){let v=points.map(cameraPoint);if(v.every(p=>p.z<=.12)||v.every(p=>p.z>28))return null;let clipped=clipPolygon(v);if(clipped.length<3)return null;let screen=clipped.map(projection);if(screen.every(p=>p.x<0)||screen.every(p=>p.x>viewW)||screen.every(p=>p.y<0)||screen.every(p=>p.y>viewH))return null;return{points:screen,depth:v.reduce((s,p)=>s+p.z,0)/v.length,fill,stroke,kind,label}}
function rectWall(x,z1,z2,y1,y2,fill,stroke){return quad([{x,y:y1,z:z1},{x,y:y1,z:z2},{x,y:y2,z:z2},{x,y:y2,z:z1}],fill,stroke)}
function rectEnd(x1,x2,z,y1,y2,fill,stroke){return quad([{x:x1,y:y1,z},{x:x2,y:y1,z},{x:x2,y:y2,z},{x:x1,y:y2,z}],fill,stroke)}
function drawShape(sh){if(!sh)return;let ps=sh.points;ctx.beginPath();ctx.moveTo(ps[0].x,ps[0].y);for(let i=1;i<ps.length;i++)ctx.lineTo(ps[i].x,ps[i].y);ctx.closePath();ctx.fillStyle=sh.fill;ctx.fill();if(sh.stroke){ctx.strokeStyle=sh.stroke;ctx.lineWidth=1.1;ctx.stroke()}if(sh.label){let cx=ps.reduce((a,p)=>a+p.x,0)/ps.length,cy=ps.reduce((a,p)=>a+p.y,0)/ps.length;let w=Math.max(...ps.map(p=>p.x))-Math.min(...ps.map(p=>p.x));if(w>65){ctx.fillStyle=sh.kind==='frame'?'#ead7b0':'#3b3831';ctx.font=`600 ${Math.max(11,Math.min(w*.12,20))}px 'Noto Serif SC',serif`;ctx.textAlign='center';ctx.fillText(sh.label,cx,cy+3,Math.max(40,w-12))}}}
function textureCanvas(w,h){const c=document.createElement('canvas'),scale=1.5;c.width=Math.round(w*scale);c.height=Math.round(h*scale);const g=c.getContext('2d');g.scale(scale,scale);return[c,g]}
function wrapText(g,text,x,y,width,lineHeight,maxLines=5){let line='',count=0;for(const char of text){if(g.measureText(line+char).width>width&&line){g.fillText(line,x,y+count*lineHeight);line=char;count++;if(count>=maxLines)return}else line+=char}if(line&&count<maxLines)g.fillText(line,x,y+count*lineHeight)}
function letterTexture(key){if(panelCache[key])return panelCache[key];const item=exhibits[key],img=wallImages[key],[c,g]=textureCanvas(1200,700);
  g.fillStyle='#e8dfcb';g.fillRect(0,0,1200,700);g.strokeStyle='#9a805b';g.lineWidth=10;g.strokeRect(5,5,1190,690);
  g.fillStyle='#263b3d';g.fillRect(24,24,1152,98);g.fillStyle='#f0dfbb';g.font='600 27px Microsoft YaHei,sans-serif';g.fillText(`档案 ${item.number}  /  RED LETTER`,54,84);
  g.font='600 25px Microsoft YaHei,sans-serif';g.textAlign='right';g.fillText(item.year,1140,84);g.textAlign='left';
  g.fillStyle='#d8ccb2';g.fillRect(50,154,385,468);g.strokeStyle='#a69070';g.lineWidth=2;g.strokeRect(50,154,385,468);
  if(img?.complete&&img.naturalWidth){const scale=Math.min(355/img.naturalWidth,438/img.naturalHeight),w=img.naturalWidth*scale,h=img.naturalHeight*scale;g.drawImage(img,50+(385-w)/2,154+(468-h)/2,w,h)}
  else{g.fillStyle='#7b6f5d';g.textAlign='center';g.font='600 29px Microsoft YaHei,sans-serif';g.fillText('史料展图',242,362);g.font='21px Microsoft YaHei,sans-serif';g.fillText('原图请在展品档案中查看',242,410);g.textAlign='left'}
  g.fillStyle='#6e6456';g.font='19px Microsoft YaHei,sans-serif';g.fillText(item.wallCredit,55,660);
  g.fillStyle='#a25543';g.fillRect(480,158,56,8);g.fillStyle='#273739';g.font='700 55px Microsoft YaHei,sans-serif';g.fillText(item.title,480,246);
  g.fillStyle='#806e53';g.font='600 26px Microsoft YaHei,sans-serif';g.fillText(`${item.date}  ·  ${item.relation}`,483,306);
  g.strokeStyle='#b7a785';g.lineWidth=2;g.beginPath();g.moveTo(482,341);g.lineTo(1134,341);g.stroke();
  g.fillStyle='#343a37';g.font='28px Microsoft YaHei,sans-serif';wrapText(g,item.brief,482,401,635,46,4);
  g.fillStyle='#645d51';g.font='24px Microsoft YaHei,sans-serif';wrapText(g,item.question,482,545,630,38,3);
  g.fillStyle='#263b3d';g.fillRect(875,622,266,48);g.fillStyle='#f1e6ca';g.font='600 22px Microsoft YaHei,sans-serif';g.fillText('走近展板 · 点击阅读',892,654);
  panelCache[key]=c;return c;
}
const decorPanels=[
  {side:'right',z:3.5,no:'导览  /  01',title:'从一封家书开始',body:'沿展厅前行，读见写信者的牵挂，也读见文字背后的时代。'},
  {side:'left',z:10.5,no:'资料说明  /  02',title:'图片来源',lines:['01 陈觉遗书复制件｜三湘风纪网','02 赵一曼遗书展图｜七一网','03 江竹筠亲笔遗书｜重庆中国三峡博物馆']},
  {side:'right',z:16.4,no:'策展线索  /  03',title:'家与时代相连',body:'三个家庭，不同的处境。展览以人物、书信和时间线串起真实史料。'},
  {side:'right',z:19.8,no:'观展方法  /  04',title:'带着问题离开',body:'谁收到了信？谁保存了信？今天的我们又怎样理解这些文字？'}
];
function decorTexture(item){if(item.texture)return item.texture;const[c,g]=textureCanvas(900,400);g.fillStyle='#334548';g.fillRect(0,0,900,400);g.strokeStyle='#c3aa78';g.lineWidth=8;g.strokeRect(12,12,876,376);g.fillStyle='#d7bc8b';g.font='600 28px Microsoft YaHei,sans-serif';g.fillText(item.no,50,77);g.fillRect(52,102,115,5);g.fillStyle='#f4e9d0';g.font='700 51px Microsoft YaHei,sans-serif';g.fillText(item.title,52,item.lines?177:194);if(item.lines){g.font='26px Microsoft YaHei,sans-serif';item.lines.forEach((line,i)=>g.fillText(line,52,238+i*48))}else{g.font='30px Microsoft YaHei,sans-serif';wrapText(g,item.body,52,258,790,47,2)}item.texture=c;return c}
function entryTexture(){
  if(panelCache.entry)return panelCache.entry;
  const[c,g]=textureCanvas(480,1100);
  // 牌面和外框绘制在同一张不透明纹理上，避免边框与后方展板分层穿插。
  g.fillStyle='#594c39';g.fillRect(0,0,480,1100);
  g.strokeStyle='#d1b786';g.lineWidth=10;g.strokeRect(8,8,464,1084);
  g.fillStyle='#263b3d';g.fillRect(25,25,430,1050);
  g.strokeStyle='#d1b786';g.lineWidth=5;g.strokeRect(34,34,412,1032);
  g.fillStyle='#d1b786';g.fillRect(65,98,100,8);
  g.fillStyle='#f5e8c8';g.font='600 40px Microsoft YaHei,sans-serif';g.fillText('入口导览',64,177);
  g.font='700 58px Microsoft YaHei,sans-serif';g.fillText('参观方向',64,282);
  g.font='700 235px Microsoft YaHei,sans-serif';g.textAlign='center';g.fillText('→',240,564);g.textAlign='left';
  g.font='700 46px Microsoft YaHei,sans-serif';g.fillText('先从右侧',64,704);g.fillText('向前参观',64,782);
  g.strokeStyle='#a98e61';g.lineWidth=3;g.beginPath();g.moveTo(64,838);g.lineTo(416,838);g.stroke();
  g.fillStyle='#d7c4a1';g.font='30px Microsoft YaHei,sans-serif';g.fillText('沿展厅浏览家书',64,915);g.fillText('可用地图快速定位',64,965);
  panelCache.entry=c;return c;
}
function timelineTexture(){if(panelCache.timeline)return panelCache.timeline;const[c,g]=textureCanvas(1200,650);g.fillStyle='#5d5244';g.fillRect(0,0,1200,650);g.strokeStyle='#c6a872';g.lineWidth=10;g.strokeRect(12,12,1176,626);g.fillStyle='#e9d6ae';g.font='600 24px Microsoft YaHei,sans-serif';g.textAlign='center';g.fillText('CHRONOLOGY  ·  1928—1949',600,86);g.font='700 66px Microsoft YaHei,sans-serif';g.fillText('信火 · 时空档案',600,176);g.fillStyle='#d1c1a3';g.font='30px Microsoft YaHei,sans-serif';g.fillText('三封家书，三段人生，一条穿过时代的线索',600,236);g.strokeStyle='#d2b57e';g.lineWidth=4;g.beginPath();g.moveTo(140,352);g.lineTo(1060,352);g.stroke();[['1928','陈觉致赵云霄'],['1936','赵一曼致宁儿'],['1949','江竹筠致谭竹安']].forEach(([year,title],i)=>{const x=190+i*410;g.fillStyle='#d2b57e';g.beginPath();g.arc(x,352,12,0,Math.PI*2);g.fill();g.fillStyle='#f4e7cd';g.font='700 46px Microsoft YaHei,sans-serif';g.fillText(year,x,434);g.font='27px Microsoft YaHei,sans-serif';g.fillText(title,x,487)});g.fillStyle='#d8c7a8';g.font='24px Microsoft YaHei,sans-serif';g.fillText('走近时间线，查看事件与资料说明',600,577);g.textAlign='left';panelCache.timeline=c;return c}
function drawTextureOnPlane(texture,pointAt){
  const tl=worldProjection(pointAt(0,1)),tr=worldProjection(pointAt(1,1)),br=worldProjection(pointAt(1,0)),bl=worldProjection(pointAt(0,0));
  if(!tl||!tr||!br||!bl)return;
  const corners=[tl,tr,br,bl];
  if(corners.every(p=>p.depth>27)||corners.every(p=>p.x<-20)||corners.every(p=>p.x>viewW+20)||corners.every(p=>p.y<-20)||corners.every(p=>p.y>viewH+20))return;
  // 把整张展板作为单个平面透视变换，避免逐条绘制时切开汉字。
  const dx1=tr.x-br.x,dy1=tr.y-br.y,dx2=bl.x-br.x,dy2=bl.y-br.y;
  const dx3=tl.x-tr.x+br.x-bl.x,dy3=tl.y-tr.y+br.y-bl.y;
  const determinant=dx1*dy2-dx2*dy1;
  if(Math.abs(determinant)<1e-8)return;
  const g=(dx3*dy2-dx2*dy3)/determinant,h=(dx1*dy3-dx3*dy1)/determinant;
  const a=tr.x-tl.x+g*tr.x,b=bl.x-tl.x+h*bl.x;
  const d=tr.y-tl.y+g*tr.y,e=bl.y-tl.y+h*bl.y;
  const values=[a/texture.width,d/texture.width,0,g/texture.width,b/texture.height,e/texture.height,0,h/texture.height,0,0,1,0,tl.x,tl.y,0,1];
  if(!values.every(Number.isFinite))return;
  texture.style.width=`${texture.width}px`;
  texture.style.height=`${texture.height}px`;
  texture.style.transform=`matrix3d(${values.map(value=>value.toFixed(10)).join(',')})`;
  texture.style.zIndex=String(Math.round(1000-corners.reduce((sum,p)=>sum+p.depth,0)*2.5));
  if(texture.parentNode!==panelLayer)panelLayer.appendChild(texture);
  usedPanels.add(texture);
}
function drawWallPanel(texture,side,z,halfWidth,y1,y2){const x=side==='left'?-7.37:7.37;drawTextureOnPlane(texture,(u,top)=>({x,y:top?y2:y1,z:z+(side==='left'?-halfWidth+u*halfWidth*2:halfWidth-u*halfWidth*2)}))}
function scene(){usedPanels.clear();let shapes=[];const push=x=>{if(x)shapes.push(x)};
  push(quad([{x:-7.5,y:0,z:-2},{x:7.5,y:0,z:-2},{x:7.5,y:0,z:21.5},{x:-7.5,y:0,z:21.5}],'#79756c'));
  push(quad([{x:-7.5,y:3.7,z:-2},{x:7.5,y:3.7,z:-2},{x:7.5,y:3.7,z:21.5},{x:-7.5,y:3.7,z:21.5}],'#d5d0c3'));
  push(rectWall(-7.5,-2,21.5,0,3.7,'#c7c4b9'));push(rectWall(7.5,-2,21.5,0,3.7,'#c0c0b7'));push(rectEnd(-7.5,7.5,21.5,0,3.7,'#cfccc2'));
  for(const x of [-7.48,7.48]){push(rectWall(x,-2,21.5,0,.16,'#494840'));push(rectWall(x,-2,21.5,3.42,3.48,'#a4967b'));push(rectWall(x,-2,21.5,.43,.49,'#a89d85'))}
  push(rectEnd(-7.48,7.48,21.48,0,.16,'#494840'));
  for(const item of stations){if(item.side==='end')continue;push(rectWall(item.x,item.z-2.12,item.z+2.12,.47,3.23,'#5b5143','#bca57d'))}
  for(const item of decorPanels){const x=item.side==='left'?-7.38:7.38,half=item.lines?1.73:1.38;push(rectWall(x,item.z-half,item.z+half,1.02,2.6,'#75674f','#c6ae7f'))}
  // 中央竖牌的底座独立于墙面；完整牌面及外框由同一纹理覆盖。
  push(rectEnd(-.37,.37,entrySign.z+.04,.02,.13,'#40392f','#a98d60'));
  push(rectEnd(-.11,.11,entrySign.z+.04,.12,entrySign.bottom,'#514637','#a98d60'));
  push(rectEnd(-4.7,4.7,21.4,.53,3.16,'#655744','#d2b678'));
  shapes.sort((a,b)=>b.depth-a.depth);for(const s of shapes)drawShape(s);
  for(const item of decorPanels)drawWallPanel(decorTexture(item),item.side,item.z,item.lines?1.67:1.32,1.08,2.54);
  for(const item of stations){if(item.type==='letter')drawWallPanel(letterTexture(item.key),item.side,item.z,2.03,.55,3.15)}
  drawTextureOnPlane(timelineTexture(),(u,top)=>({x:-4.58+u*9.16,y:top?3.09:.6,z:21.36}));
  drawTextureOnPlane(entryTexture(),(u,top)=>({x:entrySign.x-entrySign.halfWidth+u*entrySign.halfWidth*2,y:top?entrySign.top:entrySign.bottom,z:entrySign.z}));
  for(const panel of [...panelLayer.children])if(!usedPanels.has(panel))panel.remove();
}
function stationMarker(item){let p=worldProjection({x:item.x+(item.side==='left'?.09:item.side==='right'?-.09:0),y:item.type==='letter'?2.18:1.88,z:item.z});if(!p||p.depth>24)return null;let dx=item.x-camera.x,dz=item.z-camera.z,dist=Math.hypot(dx,dz),radius=Math.max(18,Math.min(31,220/p.depth));return{item,x:p.x,y:p.y,radius,dist,visible:p.x>-100&&p.x<viewW+100&&p.y>-80&&p.y<viewH+80}}
function drawMarkers(){renderMarkers=[];for(const item of stations){const marker=stationMarker(item);if(marker?.visible)renderMarkers.push(marker)}}
function pickFocus(){let best=null,bestScore=Infinity;for(const item of stations){let m=stationMarker(item);if(!m||!m.visible||m.dist>5.5)continue;let screen=Math.hypot((m.x-viewW/2)/viewW,(m.y-viewH*.49)/viewH);if(screen<.37){let score=screen+m.dist*.012;if(score<bestScore){best=m;bestScore=score}}}active=best?.item||null;if((active?.id||null)===lastFocusId)return;lastFocusId=active?.id||null;let el=document.getElementById('focus-prompt');el.hidden=!active;if(active){document.getElementById('focus-kind').textContent=active.type==='letter'?'家书展品':'时间线';document.getElementById('focus-title').textContent=active.name}}
function updateMap(){let e=document.getElementById('map-you');e.style.left=`${Math.max(4,Math.min(95,(camera.x+7.5)/15*100))}%`;e.style.top=`${Math.max(4,Math.min(95,(21.5-camera.z)/23.5*100))}%`;document.getElementById('compass-arrow').style.transform=`rotate(${-camera.yaw}rad)`}
function blockedByEntrySign(x,z){return Math.abs(x-entrySign.x)<entrySign.clearanceX&&Math.abs(z-entrySign.z)<entrySign.clearanceZ}
function move(dt){
  const speed=(keys.has('shift')?5:3.25)*dt;
  // WASD 沿展厅固定坐标行走，与当前镜头朝向无关；转向只由方向键和鼠标负责。
  const turnDirection=Number(keys.has('arrowright')||keys.has('turnRight'))-Number(keys.has('arrowleft')||keys.has('turnLeft'));
  camera.yaw+=turnDirection*1.8*dt;
  let forward=Number(keys.has('w')||keys.has('arrowup'))-Number(keys.has('s')||keys.has('arrowdown'))+joystick.forward;
  let strafe=Number(keys.has('d'))-Number(keys.has('a'))+joystick.x;
  if(!forward&&!strafe)return;
  const length=Math.max(1,Math.hypot(forward,strafe));forward/=length;strafe/=length;
  const nextX=Math.max(-6.2,Math.min(6.2,camera.x+strafe*speed));
  const nextZ=Math.max(.25,Math.min(20.2,camera.z+forward*speed));
  if(!blockedByEntrySign(nextX,nextZ)){camera.x=nextX;camera.z=nextZ}
  else if(!blockedByEntrySign(nextX,camera.z))camera.x=nextX;
  else if(!blockedByEntrySign(camera.x,nextZ))camera.z=nextZ;
}
function hasMotion(){return Math.hypot(joystick.x,joystick.forward)>.01||[...keys].some(k=>['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright'].includes(k))}
function requestRender(){if(!framePending){framePending=true;requestAnimationFrame(frame)}}
function frame(now){framePending=false;const moving=intro.hidden&&!contentDialog.open&&!indexDialog.open&&!aiDialog.open&&hasMotion();if(moving&&lastDraw&&now-lastDraw<32){requestRender();return}let dt=lastDraw?Math.min((now-lastDraw)/1000,.065):0;lastDraw=now;if(moving)move(dt);ctx.clearRect(0,0,viewW,viewH);let sky=ctx.createLinearGradient(0,0,0,viewH);sky.addColorStop(0,'#b4b0a5');sky.addColorStop(.55,'#b3ada1');sky.addColorStop(1,'#373d3b');ctx.fillStyle=sky;ctx.fillRect(0,0,viewW,viewH);scene();pickFocus();drawMarkers();updateMap();if(moving)requestRender()}
function toast(message){let el=document.getElementById('toast');el.textContent=message;el.hidden=false;clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.hidden=true,2300)}
function showDialog(el){if(el===contentDialog)el.classList.toggle('special-dialog',!modalSource);if(typeof el.showModal==='function')el.showModal();else el.setAttribute('open','')}
function closeDialog(el){if(typeof el.close==='function')el.close();else el.removeAttribute('open')}
function sourceList(item){return `<ul>${item.sources.map(([name,url])=>`<li><a href="${url}" target="_blank" rel="noopener noreferrer">${name} ↗</a></li>`).join('')}</ul>`}
function bioList(item){return `<ol>${item.bio.map(([year,event])=>`<li><strong>${year}</strong>　${event}</li>`).join('')}</ol>`}
function letterPanel(item){return `<h3>关于这封信</h3><p>${item.letter}</p><div class="evidence-note">策展提问：${item.question}</div><h3>展图说明</h3><p>${item.image}</p>`}
function bioPanel(item){return `<p>${item.people}</p><h3>生平节点</h3>${bioList(item)}<div class="evidence-note">人物经历依据公开机构资料整理。时间线只记录当前资料能够支持的节点，不以推测补齐空白。</div>`}
function sourcesPanel(item){return `<h3>资料来源</h3>${sourceList(item)}<h3>史料展图出处</h3><p><a href="${item.imagePage}" target="_blank" rel="noopener noreferrer">${item.imageCredit} ↗</a></p><h3>人物照片出处</h3><p><a href="${item.portraitPage}" target="_blank" rel="noopener noreferrer">${item.portraitCredit} ↗</a></p><h3>我们如何区分材料</h3><p>书信原件、复制件、后人誊写、公开转录、人物照片与本站讲解并不相同。史料展图和人物照片已随作品保存；来源链接可用于核对出处。开场 AI 图仅作虚拟展厅情境示意，绝非历史照片。</p><div class="evidence-note">若资料之间出现差异，页面优先使用保守表述。图片版权归原权利人；正式公开发布或扩大传播前，仍需核对使用授权。</div>`}
function renderVisual(){const item=exhibits[modalSource],img=document.getElementById('dialog-image'),fallback=document.getElementById('image-fallback'),source=document.getElementById('dialog-image-source'),pager=document.getElementById('image-pages');fallback.hidden=true;img.hidden=false;for(const button of document.querySelectorAll('[data-visual]'))button.setAttribute('aria-pressed',String(button.dataset.visual===visualMode));if(!item){img.hidden=true;source.hidden=true;pager.hidden=true;return}if(visualMode==='portrait'){img.src=item.portrait;img.alt=`${item.title}相关人物照片`;document.getElementById('dialog-art-note').textContent=item.portraitCredit;source.href=item.portraitPage;source.hidden=false;pager.hidden=true;return}img.src=item.images[imagePage];img.alt=`${item.title}相关史料展图，第 ${imagePage+1} 页`;document.getElementById('dialog-art-note').textContent=item.imageCredit;source.href=item.imagePage;source.hidden=false;pager.hidden=item.images.length===1;document.getElementById('image-count').textContent=`${imagePage+1} / ${item.images.length}`;document.getElementById('image-prev').disabled=imagePage===0;document.getElementById('image-next').disabled=imagePage===item.images.length-1}
function openExhibit(key,tab='letter'){let item=exhibits[key];if(!item)return;modalSource=key;activeTab=tab;visualMode='historical';imagePage=0;document.getElementById('visual-switch').hidden=false;for(const b of document.querySelectorAll('[data-tab]'))b.hidden=false;document.getElementById('mark-visited').hidden=false;document.getElementById('exhibit-ai-button').hidden=false;document.getElementById('dialog-kicker').textContent=`EXHIBIT ${item.number} / ${item.year}`;document.getElementById('dialog-category').textContent=tab==='bio'?'人物档案 / BIOGRAPHY':'红色家书 / THE LETTER';document.getElementById('dialog-title').textContent=item.title;document.getElementById('dialog-subtitle').textContent=`${item.date} · ${item.relation}`;renderVisual();setTab(tab);showDialog(contentDialog)}
function setTab(tab){activeTab=tab;let item=exhibits[modalSource];if(!item)return;for(const b of document.querySelectorAll('[data-tab]'))b.setAttribute('aria-selected',String(b.dataset.tab===tab));document.getElementById('dialog-panel').innerHTML=tab==='letter'?letterPanel(item):tab==='bio'?bioPanel(item):sourcesPanel(item);let mark=document.getElementById('mark-visited');mark.disabled=read.has(modalSource);mark.innerHTML=read.has(modalSource)?'已阅 ✓':'标记已阅 <span aria-hidden="true">✓</span>'}
function openSpecial(which){
  modalSource=null;visualMode='historical';
  document.getElementById('visual-switch').hidden=true;
  document.getElementById('dialog-kicker').textContent=which==='timeline'?'CHRONOLOGY / 1928—1949':'SOURCES & METHOD';
  document.getElementById('dialog-category').textContent=which==='timeline'?'时代线索 / TIMELINE':'展览说明 / METHODOLOGY';
  document.getElementById('dialog-title').textContent=which==='timeline'?'三封家书的时间线':'资料与创作说明';
  document.getElementById('dialog-subtitle').textContent=which==='timeline'?'以写信年份为序，将人物置回历史情境':'图片、文字与 AI 的使用边界';
  renderVisual();document.getElementById('mark-visited').hidden=true;document.getElementById('exhibit-ai-button').hidden=true;
  for(const b of document.querySelectorAll('[data-tab]'))b.hidden=true;
  document.getElementById('dialog-panel').innerHTML=which==='timeline'
    ?`<h3>沿时间线参观</h3><ol><li><strong>1925—1928</strong>　陈觉、赵云霄求学、回国，陈觉于 1928 年写下给妻子的信。</li><li><strong>1931—1936</strong>　赵一曼参与东北抗日斗争，1936 年留下给宁儿的遗言。</li><li><strong>1947—1949</strong>　江竹筠在下川东开展工作，被捕后于 1949 年留下给亲人的遗书。</li></ol><div class="evidence-note">时间线是策展整理，不表示三位人物曾有直接交往。</div>`
    :`<h3>内容与素材边界</h3><p>三封家书的人物经历和文物性质依据公开机构资料整理；网页解读为团队策展文字，并非历史原话。定制路线、分层讲解、图像辨识小游戏、参观小结采用预置资料与规则，不提供实时 AI 自由问答。AI 生成的图像只用于情境展示和纪念卡视觉，不能代替真实史料；正式参赛前仍需团队人工审阅内容。</p><p>展厅为程序绘制的虚拟空间；开场背景的 AI 情境图不是真实展馆或历史场景。三封史料展图和三张人物照片均已随作品保存，并标注发布机构、图像身份和原网页；陈觉展图为复制件，赵一曼展图不能认作本人亲笔，江竹筠展图为馆藏亲笔遗书。图片版权归原权利人，正式公开发布或扩大传播前仍需核对授权。</p><h3>主要资料入口</h3>${Object.values(exhibits).map(item=>sourceList(item)).join('')}`;
  showDialog(contentDialog)
}
function activate(item){if(!item)return;if(item.type==='letter'||item.type==='bio')openExhibit(item.key,item.type==='bio'?'bio':'letter');else openSpecial(item.type)}
document.getElementById('enter-button').addEventListener('click',()=>{intro.hidden=true;lastDraw=0;requestRender();canvas.focus()});
document.getElementById('guide-button').addEventListener('click',()=>{intro.hidden=false;keys.clear()});
document.getElementById('help-button').addEventListener('click',()=>{intro.hidden=false;keys.clear()});
document.getElementById('index-button').addEventListener('click',()=>showDialog(indexDialog));
document.getElementById('dialog-close').addEventListener('click',()=>closeDialog(contentDialog));
document.getElementById('dialog-image').addEventListener('error',()=>{document.getElementById('dialog-image').hidden=true;document.getElementById('image-fallback').hidden=false});
for(const button of document.querySelectorAll('[data-visual]'))button.addEventListener('click',()=>{visualMode=button.dataset.visual;imagePage=0;renderVisual()});
document.getElementById('image-prev').addEventListener('click',()=>{if(imagePage>0){imagePage--;renderVisual()}});
document.getElementById('image-next').addEventListener('click',()=>{if(modalSource&&imagePage<exhibits[modalSource].images.length-1){imagePage++;renderVisual()}});
document.querySelector('[data-close-index]').addEventListener('click',()=>closeDialog(indexDialog));
contentDialog.addEventListener('click',e=>{if(e.target===contentDialog)closeDialog(contentDialog)});indexDialog.addEventListener('click',e=>{if(e.target===indexDialog)closeDialog(indexDialog)});
for(const b of document.querySelectorAll('[data-tab]'))b.addEventListener('click',()=>setTab(b.dataset.tab));
document.getElementById('mark-visited').addEventListener('click',()=>{if(!modalSource)return;read.add(modalSource);try{localStorage.setItem(readKey,JSON.stringify([...read]))}catch(_){}updateProgress();setTab(activeTab);toast('已记录这封家书的参观进度')});
for(const b of document.querySelectorAll('[data-open-special]'))b.addEventListener('click',()=>{closeDialog(indexDialog);openSpecial(b.dataset.openSpecial)});
let indexGrid=document.getElementById('index-grid');for(const [key,item] of Object.entries(exhibits)){let b=document.createElement('button');b.type='button';b.className='index-card';b.innerHTML=`<small>EXHIBIT ${item.number} / ${item.year}</small><b>${item.title}</b><span>${item.brief}</span><em>打开家书与人物档案 ↗</em>`;b.addEventListener('click',()=>{closeDialog(indexDialog);openExhibit(key)});indexGrid.append(b)}
function jump(item){if(item.side==='left'){camera.x=-3.45;camera.z=item.z;camera.yaw=-Math.PI/2}else if(item.side==='right'){camera.x=3.45;camera.z=item.z;camera.yaw=Math.PI/2}else{camera.x=0;camera.z=17.5;camera.yaw=0}lastDraw=0;requestRender();toast(`已到达${item.name}附近，点击展位打开`);canvas.focus()}
for(const b of document.querySelectorAll('[data-jump]'))b.addEventListener('click',()=>jump(stations.find(s=>s.id===b.dataset.jump)));
const keyboardControls={KeyW:'w',KeyA:'a',KeyS:'s',KeyD:'d',ArrowUp:'arrowup',ArrowDown:'arrowdown',ArrowLeft:'arrowleft',ArrowRight:'arrowright',ShiftLeft:'shift',ShiftRight:'shift',KeyE:'e'};
window.addEventListener('keydown',e=>{
  const key=keyboardControls[e.code];
  if(intro.hidden&&!contentDialog.open&&!indexDialog.open&&!aiDialog.open&&key){
    e.preventDefault();
    if(key==='e'){if(active)activate(active);else toast('请面向并走近一个展位');return}
    keys.add(key);requestRender();
  }
});
window.addEventListener('keyup',e=>{const key=keyboardControls[e.code];if(key)keys.delete(key)});
const joystickBase=document.getElementById('move-joystick'),joystickThumb=document.getElementById('joystick-thumb');
function resetJoystick(){joystick.pointerId=null;joystick.x=0;joystick.forward=0;joystickThumb.style.transform='translate(-50%, -50%)';requestRender()}
function updateJoystick(e){const rect=joystickBase.getBoundingClientRect(),radius=rect.width*.32,dx=e.clientX-(rect.left+rect.width/2),dy=e.clientY-(rect.top+rect.height/2),scale=Math.min(1,radius/Math.max(radius,Math.hypot(dx,dy))),x=dx*scale,y=dy*scale;joystick.x=Math.abs(x/radius)<.08?0:x/radius;joystick.forward=Math.abs(y/radius)<.08?0:-y/radius;joystickThumb.style.transform=`translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;requestRender()}
joystickBase.addEventListener('pointerdown',e=>{if(joystick.pointerId!==null)return;e.preventDefault();joystick.pointerId=e.pointerId;joystickBase.setPointerCapture(e.pointerId);updateJoystick(e)});
joystickBase.addEventListener('pointermove',e=>{if(e.pointerId===joystick.pointerId){e.preventDefault();updateJoystick(e)}});
for(const event of ['pointerup','pointercancel','lostpointercapture'])joystickBase.addEventListener(event,e=>{if(e.pointerId===joystick.pointerId)resetJoystick()});
window.addEventListener('blur',()=>{keys.clear();resetJoystick();dragStart=null});
document.addEventListener('visibilitychange',()=>{if(document.hidden){keys.clear();resetJoystick();dragStart=null}});
canvas.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0||dragStart)return;dragStart={x:e.clientX,y:e.clientY,originX:e.clientX,originY:e.clientY,pointerId:e.pointerId};dragMoved=false;canvas.setPointerCapture(e.pointerId)});
canvas.addEventListener('pointermove',e=>{if(!dragStart||e.pointerId!==dragStart.pointerId||!intro.hidden)return;if(e.pointerType==='mouse'&&!(e.buttons&1)){dragStart=null;return}if(!dragMoved&&Math.hypot(e.clientX-dragStart.originX,e.clientY-dragStart.originY)<(e.pointerType==='touch'?8:2))return;const dx=e.clientX-dragStart.x,dy=e.clientY-dragStart.y;camera.yaw+=dx*.006;if(e.pointerType!=='mouse')camera.pitch=Math.max(-.28,Math.min(.28,camera.pitch-dy/Math.max(300,viewH)*.48));dragStart.x=e.clientX;dragStart.y=e.clientY;dragMoved=true;requestRender()});
canvas.addEventListener('pointerup',e=>{if(!dragStart||e.pointerId!==dragStart.pointerId)return;dragStart=null;if(dragMoved){dragMoved=false;return}if(!intro.hidden)return;let p=renderMarkers.filter(m=>Math.hypot(m.x-e.clientX,m.y-e.clientY)<m.radius+13).sort((a,b)=>a.dist-b.dist)[0];if(p){if(p.dist<5.7)activate(p.item);else toast('走近展位后再打开档案')}else if(active)activate(active)});
canvas.addEventListener('pointercancel',e=>{if(e.pointerId===dragStart?.pointerId){dragStart=null;dragMoved=false}});
canvas.addEventListener('lostpointercapture',e=>{if(e.pointerId===dragStart?.pointerId){dragStart=null;dragMoved=false}});

