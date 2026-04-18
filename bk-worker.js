export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/getResourcesWithCover") {
  try {
    const page = parseInt(url.searchParams.get("page") || "1");
    const keyword = url.searchParams.get("keyword") || "";
    const pageSize = 50;
    const offset = (page - 1) * pageSize;

    let total = 0;
    let results = [];

    if (keyword) {
      const totalResult = await env.bk_info
        .prepare("SELECT COUNT(*) as total FROM bk_info WHERE resourceName LIKE ?")
        .bind(`%${keyword}%`)
        .first();

      total = totalResult.total;

      const res = await env.bk_info
        .prepare("SELECT resourceId, resourceName FROM bk_info WHERE resourceName LIKE ? ORDER BY rowid LIMIT ? OFFSET ?")
        .bind(`%${keyword}%`, pageSize, offset)
        .all();

      results = res.results;

    } else {
      const totalResult = await env.bk_info
        .prepare("SELECT COUNT(*) as total FROM bk_info")
        .first();

      total = totalResult.total;

      const res = await env.bk_info
        .prepare("SELECT resourceId, resourceName FROM bk_info ORDER BY rowid LIMIT ? OFFSET ?")
        .bind(pageSize, offset)
        .all();

      results = res.results;
    }

    return new Response(JSON.stringify({
      resources: results,
      total,
      totalPages: Math.ceil(total / pageSize)
    }, null, 2), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response("Database error: " + err.message, { status: 500 });
  }
}

    if (url.pathname === "/api/getYears") {
      const rid = url.searchParams.get("resourceId");
      if (!rid) return new Response("Missing resourceId", { status: 400 });
      try {
        const { results } = await env.bk_data
          .prepare("SELECT years FROM bk_data WHERE resourceId = ?")
          .bind(rid)
          .all();
        return new Response(JSON.stringify(results, null, 2), {
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        return new Response("Database error: " + err.message, { status: 500 });
      }
    }

    if (url.pathname === "/") {
      const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>博览期刊</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=ZCOOL+KuaiLe&family=ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet">
<style>
body {
  margin:0; 
  padding:20px; 
  background: #f8fafc;
  font-family:'Inter',sans-serif;
  min-height: 100vh;
}
#container { 
  max-width:1000px; 
  margin:0 auto; 
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  padding: 30px;
  margin-top: 20px;
}
.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 2rem;
  padding: 20px 0;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 15px;
  margin: -10px -10px 30px -10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  border: 1px solid #e0f2fe;
}
.title-char {
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  font-size: 3.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  animation: glow 2s ease-in-out infinite alternate;
}
@keyframes glow {
  from {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1), 0 0 8px #ff6b6b, 0 0 16px #ff6b6b;
  }
  to {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1), 0 0 12px #4ecdc4, 0 0 20px #4ecdc4;
  }
}
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 15px;
  border: 2px dashed #e2e8f0;
}
#searchBox { 
  width: 350px; 
  padding: 12px 16px; 
  border-radius: 10px; 
  border: 2px solid #e2e8f0;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
}
#searchBox:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  transform: translateY(-2px);
}
#searchBtn {
  padding: 12px 24px;
  border-radius: 10px;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
}
#searchBtn:hover {
  background: linear-gradient(135deg, #4338ca, #6d28d9);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.3);
}
#grid {
  display:grid;
  grid-template-columns:repeat(5,1fr);
  grid-auto-rows:70px;
  gap:15px;
  margin-bottom: 30px;
}
.card {
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:12px;
  border-radius:12px;
  border:2px solid #e2e8f0;
  cursor:pointer;
  transition: all 0.3s ease;
  word-break: break-word;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  position: relative;
  overflow: hidden;
}
/* 奇数行卡片背景色 */
.card:nth-child(odd) {
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  border-color: #e2e8f0;
}
/* 偶数行卡片背景色 */
.card:nth-child(even) {
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  border-color: #e2e8f0;
}
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.5s;
}
.card:hover {
  background: linear-gradient(135deg, #e0e7ff, #dbeafe);
  transform: translateY(-3px) scale(1.02);
  border-color: #4f46e5;
  box-shadow: 0 8px 25px rgba(79, 70, 229, 0.15);
}
.card:hover::before {
  left: 100%;
}
#pagination {
  margin-top:30px; 
  text-align:center; 
  display:flex; 
  justify-content:center; 
  align-items:center; 
  gap:10px; 
  flex-wrap:wrap;
  padding: 20px;
  background: #f8fafc;
  border-radius: 15px;
  border: 1px solid #e2e8f0;
}
.page-btn, #jumpBtn {
  display:inline-block; 
  margin:2px; 
  padding:10px 16px; 
  border-radius:10px; 
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color:white; 
  cursor:pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.2);
}
.page-btn:hover, #jumpBtn:hover {
  background: linear-gradient(135deg, #4338ca, #6d28d9);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}
.page-btn.disabled { 
  background: #9ca3af; 
  cursor:not-allowed;
  transform: none;
  box-shadow: none;
}
#pageInput { 
  width:60px; 
  padding:8px; 
  border-radius:8px; 
  border:2px solid #e2e8f0;
  text-align: center;
  font-weight: 600;
}
#pageInput:focus {
  outline: none;
  border-color: #4f46e5;
}
.loading {
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #6b7280;
  font-weight: 500;
}
</style>
</head>
<body>
<div id="container">
<div class="title-container">
  <span class="title-char" style="color: #ff6b6b;">博</span>
  <span class="title-char" style="color: #4ecdc4;">览</span>
  <span class="title-char" style="color: #45b7d1;">期</span>
  <span class="title-char" style="color: #96ceb4;">刊</span>
</div>
<div class="search-container">
  <input id="searchBox" type="text" placeholder="🔍 搜索期刊名称...">
  <button id="searchBtn">搜索</button>
</div>
<div id="grid"></div>
<div id="pagination"></div>
</div>
<script>
let currentPage=1;
let totalPages=1;
const pageSize=50; // 5列 x 10行
const grid=document.getElementById("grid");
const pagination=document.getElementById("pagination");
const searchBox=document.getElementById("searchBox");
const searchBtn=document.getElementById("searchBtn");

async function loadPage(page, keyword=""){
  currentPage=page;
  grid.innerHTML='<div class="loading">📚 正在加载期刊列表...</div>';
  try{
    const res = await fetch("/api/getResourcesWithCover?page=" + page + "&keyword=" + encodeURIComponent(keyword || ""));
    const data=await res.json();
    let resources = data.resources;
    totalPages = data.totalPages;

    grid.innerHTML="";
    if(resources.length === 0) {
      grid.innerHTML='<div class="loading">🔍 未找到相关期刊</div>';
      return;
    }

    resources.forEach(r=>{
      const div=document.createElement("div");
      div.className="card";
      div.innerText=r.resourceName;
      div.onclick=()=>{
        // 在新窗口打开副页面
        const url = \`/resource?resourceId=\${r.resourceId}&resourceName=\${encodeURIComponent(r.resourceName)}\`;
        window.open(url, '_blank');
      };
      grid.appendChild(div);
    });

    // 分页控件
    pagination.innerHTML="";
    const first=document.createElement("span");
    first.className="page-btn" + (page === 1 ? " disabled" : "");
    first.textContent="首页";
    first.onclick=()=>{ if(page !== 1) loadPage(1, searchBox.value.trim()); };
    pagination.appendChild(first);

    const prev=document.createElement("span");
    prev.className="page-btn" + (page === 1 ? " disabled" : "");
    prev.textContent="上一页";
    prev.onclick=()=>{ if(page > 1) loadPage(page-1, searchBox.value.trim()); };
    pagination.appendChild(prev);

    const next=document.createElement("span");
    next.className="page-btn" + (page === totalPages ? " disabled" : "");
    next.textContent="下一页";
    next.onclick=()=>{ if(page < totalPages) loadPage(page+1, searchBox.value.trim()); };
    pagination.appendChild(next);

    const pageLabel=document.createElement("span");
    pageLabel.textContent="第 " + page + " 页/共" + totalPages + "页";
    pageLabel.style.margin="0 12px";
    pageLabel.style.fontWeight="600";
    pageLabel.style.color="#4b5563";
    pagination.appendChild(pageLabel);

    const pageInput=document.createElement("input");
    pageInput.type="number"; pageInput.id="pageInput"; pageInput.min="1"; pageInput.max=totalPages; pageInput.value=page;
    pagination.appendChild(pageInput);

    const jumpBtn=document.createElement("span");
    jumpBtn.id="jumpBtn"; jumpBtn.textContent="跳转";
    jumpBtn.onclick=()=>{ 
      const val=parseInt(pageInput.value); 
      if(val>0 && val<=totalPages) loadPage(val, searchBox.value.trim()); 
    };
    pagination.appendChild(jumpBtn);

  }catch(e){
    grid.innerHTML='<div class="loading">❌ 获取资源失败，请刷新重试</div>';
    console.error(e);
  }
}

// 搜索功能
function performSearch() {
  loadPage(1, searchBox.value.trim());
}

searchBox.addEventListener("keyup", e=>{
  if(e.key==="Enter"){
    performSearch();
  }
});

searchBtn.addEventListener("click", performSearch);

loadPage(1);
</script>
</body>
</html>`;
      return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }

    // --------------------------
    // 页面路由: 副页面 /resource
    // --------------------------
    if (url.pathname === "/resource") {
      const resourceId = url.searchParams.get("resourceId");
      const resourceName = url.searchParams.get("resourceName") || "";
      if (!resourceId) return new Response("Missing resourceId", { status: 400 });

      const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>${resourceName}</title>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<style>
body { margin:0; padding:20px; background:#f0f4f8; font-family:'Inter',sans-serif; display:flex; justify-content:center; }
#container { max-width:1200px; width:100%; }
#yearGrid { display:grid; grid-template-columns: repeat(6, 1fr); grid-gap:6px; margin-top:10px; }
.year-btn { padding:6px; background:#4f46e5; color:white; border-radius:6px; cursor:pointer; text-align:center; }
.year-btn.selected { background:#10b981; }
#issueGrid { display:grid; grid-template-columns: repeat(5,180px); grid-auto-rows:60px; grid-gap:12px; justify-content:center; margin-top:10px; }
.issue-card { display:flex; align-items:center; justify-content:center; text-align:center; padding:8px; border-radius:6px; border:1px solid #cbd5e1; cursor:pointer; transition: all 0.2s; word-break: break-word; }
.issue-card:hover { background:#e0e7ff; transform: scale(1.03); }
#statusLabel { margin-top:10px; font-weight:600; }
#downloadModal { display:none; position:fixed; inset:0; background:rgba(0,0,0,0.5); justify-content:center; align-items:center; z-index:50; }
#downloadModalContent { background:white; padding:20px; border-radius:12px; width:360px; text-align:center; }
#progressBar { width:0%; height:16px; background:#4f46e5; border-radius:8px; transition:width 0.2s; }
#progressContainer { width:100%; background:#e5e7eb; border-radius:8px; height:16px; margin-top:10px; }
#cancelBtn { margin-top:10px; padding:6px 12px; border-radius:6px; background:#ef4444; color:white; cursor:pointer; }
</style>
</head>
<body>
<div id="container">
<h1 class="text-2xl font-bold mb-4 text-indigo-700">📅 ${resourceName} - 年份列表</h1>
<div id="yearGrid"></div>
<h2 class="mt-6 text-xl font-semibold">期刊列表</h2>
<div id="issueGrid"></div>
<p id="statusLabel"></p>
<div id="downloadModal" class="flex">
  <div id="downloadModalContent">
    <h2 class="text-lg font-bold">下载进度</h2>
    <div id="progressText">正在准备下载...</div>
    <div id="progressContainer"><div id="progressBar"></div></div>
    <button id="cancelBtn">取消下载</button>
  </div>
</div>
<script>
(async function(){
const yearGrid=document.getElementById("yearGrid");
const issueGrid=document.getElementById("issueGrid");
const statusLabel=document.getElementById("statusLabel");
try{
const res=await fetch("/api/getYears?resourceId=${resourceId}");
const data=await res.json();
let years=[]; if(data.length>0 && data[0].years){ years=JSON.parse(data[0].years); }
if(years.length===0){ yearGrid.innerHTML="未获取到年份"; return; }
years.forEach(y=>{
  const btn=document.createElement("div");
  btn.textContent=y;
  btn.className="year-btn";
  btn.onclick=async ()=>{
    document.querySelectorAll("#yearGrid .year-btn").forEach(b=>b.classList.remove("selected"));
    btn.classList.add("selected");
    statusLabel.textContent="正在获取期刊列表...";
    issueGrid.innerHTML="";
    try{
      const apiUrl=\`https://api.bookan.com.cn/resource/yearList?resourceType=1&resourceId=${resourceId}&year=\${y}&month=0&pageNum=1&limitNum=100&instanceId=21283\`;
      const res2=await fetch(apiUrl);
      const data2=await res2.json();
      const issues=data2.data||[];
      if(issues.length===0){ statusLabel.textContent="⚠️ 未获取到期刊"; return; }

      for(const i of issues){
        const div=document.createElement("div");
        div.className="issue-card";
        div.innerText=i.issueName;
        div.onclick=()=>window.downloadPdf(${resourceId},y,i.issueId,i.issueName,'${resourceName}');
        issueGrid.appendChild(div);
      }
      statusLabel.textContent=\`✅ 获取到 \${issues.length} 期期刊\`;
    }catch(e){ statusLabel.textContent="❌ 获取期刊失败"; console.error(e); }
  };
  yearGrid.appendChild(btn);
});
}catch(e){ yearGrid.innerHTML="❌ 获取年份失败"; console.error(e); }

// 测试服务器连通性
async function testServer(serverNum, resourceId, issueId, hash) {
  const testUrl = \`https://img1-qn.bookan.com.cn/jpage\${serverNum}/\${resourceId}/\${resourceId}-\${issueId}/\${hash}_big.jpg\`;
  try {
    const response = await fetch(testUrl, { method: 'HEAD', timeout: 5000 });
    return response.ok;
  } catch (error) {
    return false;
  }
}

window.downloadPdf=async function(resourceId, year, issueId, issueName, resourceName){
  const modal=document.getElementById("downloadModal");
  const progressBar=document.getElementById("progressBar");
  const progressText=document.getElementById("progressText");
  const cancelBtn=document.getElementById("cancelBtn");
  let cancelled=false;
  cancelBtn.onclick=()=>{ cancelled=true; modal.style.display="none"; };
  modal.style.display="flex";
  progressBar.style.width="0%";
  progressText.textContent="";
  try{
    const yearUrl=\`https://api.bookan.com.cn/resource/yearList?resourceType=1&resourceId=\${resourceId}&year=\${year}&month=0&pageNum=1&limitNum=0\`;
    const resYear=await fetch(yearUrl);
    const dataYear=await resYear.json();
    const issues=dataYear.data||[];
    const currentIssue=issues.find(item=>item.issueId===issueId);
    if(!currentIssue) throw new Error("未找到期刊信息");
    const pageCount=parseInt(currentIssue.count);
    progressText.textContent="";
    const hashUrl=\`https://api.bookan.com.cn/resource/getHash?resourceType=1&resourceId=\${resourceId}&issueId=\${issueId}&start=1&end=\${pageCount}\`;
    const resHash=await fetch(hashUrl);
    const dataHash=await resHash.json();
    const pageDataList=dataHash.data||[];
    if(pageDataList.length===0) throw new Error("未获取到页面 hash");
    
    // 测试服务器连通性
    progressText.textContent="正在测试服务器连通性...";
    let workingServer=null;
    
    // 优先测试 
    progressText.textContent="";
    if(await testServer(8, resourceId, issueId, pageDataList[0].hash)) {
      workingServer = "jpage8";
      progressText.textContent="✅ 服务器8连接成功";
    } else {
      progressText.textContent="❌ 服务器8连接失败，正在测试其他服务器...";
      // 测试 jpage15 到 jpage1
      const servers = [15,14,13,12,11,10,9,7,6,5,4,3,2,1];
      for(let i=0; i<servers.length; i++) {
        if(cancelled) throw new Error("用户取消下载");
        const serverNum = servers[i];
        progressText.textContent=\`正在测试 相关服务器\${serverNum} 服务器...\`;
        if(await testServer(serverNum, resourceId, issueId, pageDataList[0].hash)) {
          workingServer = \`jpage\${serverNum}\`;
          progressText.textContent=\`✅ 服务器\${serverNum} 连接成功\`;
          break;
        }
      }
    }
    
    if(!workingServer) throw new Error("未找到可用服务器");
    
    progressText.textContent="正在启动下载程序，请耐心等待...";
    const { jsPDF } = window.jspdf;
    const pdf=new jsPDF();
    let first=true;
    for(let idx=0; idx<pageDataList.length; idx++){
      if(cancelled) throw new Error("用户取消下载");
      const pageData=pageDataList[idx];
      const url=\`https://img1-qn.bookan.com.cn/\${workingServer}/\${resourceId}/\${resourceId}-\${issueId}/\${pageData.hash}_big.jpg\`;
      const imgRes=await fetch(url);
      const blob=await imgRes.blob();
      const reader=new FileReader();
      const imgDataUrl=await new Promise(resolve=>{ reader.onloadend=()=>resolve(reader.result); reader.readAsDataURL(blob); });
      const img=new Image();
      await new Promise((resolve,reject)=>{ img.onload=()=>resolve(); img.onerror=()=>reject(); img.src=imgDataUrl; });
      const pdfWidth=pdf.internal.pageSize.getWidth()-20;
      const pdfHeight=pdf.internal.pageSize.getHeight()-20;
      const ratio=Math.min(pdfWidth/img.width,pdfHeight/img.height);
      const w=img.width*ratio;
      const h=img.height*ratio;
      if(!first) pdf.addPage();
      pdf.addImage(imgDataUrl,'JPEG',(pdf.internal.pageSize.getWidth()-w)/2,(pdf.internal.pageSize.getHeight()-h)/2,w,h);
      first=false;
      const percent=Math.floor(((idx+1)/pageDataList.length)*100);
      progressBar.style.width=percent+'%';
      progressText.textContent=\`下载中：\${idx+1}/\${pageDataList.length}页 (\${percent}%)\`;
    }
    const filename=\`\${resourceName}-\${issueName}.pdf\`.replace(/[\\/\\s]/g,'_');
    pdf.save(filename);
    progressText.textContent=\`✅ 下载完成：\${filename}\`;
    setTimeout(()=>{ modal.style.display="none"; },2000);
  }catch(e){
    console.error(e);
    progressText.textContent=\`❌ 下载失败: \${e.message}\`;
  }
};
})();
</script>
</div>
</body>
</html>`;
      return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }

    return new Response("Not found", { status: 404 });
  },
};
