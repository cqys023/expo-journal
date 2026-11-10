export default{async fetch(request,env,ctx){var _0x661a2e;const url=new URL(request['\u0075\u0072\u006C']);_0x661a2e=(599228^599225)+(610035^610034);if(url['\u0070\u0061\u0074\u0068\u006E\u0061\u006D\u0065']['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0028\u0072\u0065\u0073\u006F\u0075\u0072\u0063\u0065\u0029")||url['\u0070\u0061\u0074\u0068\u006E\u0061\u006D\u0065']['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0072\u0065\u0073\u006F\u0075\u0072\u0063\u0065\u005F\u0063\u0061\u0074\u0065\u0067\u006F\u0072\u0079\u0049\u0073\u0073\u0075\u0065\u0073")||url['\u0070\u0061\u0074\u0068\u006E\u0061\u006D\u0065']['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u002F\u0072\u0065\u0073\u006F\u0075\u0072\u0063\u0065\u002F\u0070\u0061\u0073\u0074\u0059\u0065\u0061\u0072\u004C\u0069\u0073\u0074")||url['\u0070\u0061\u0074\u0068\u006E\u0061\u006D\u0065']['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u002F\u0072\u0065\u0073\u006F\u0075\u0072\u0063\u0065\u002F\u0079\u0065\u0061\u0072\u004C\u0069\u0073\u0074")||url['\u0070\u0061\u0074\u0068\u006E\u0061\u006D\u0065']['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u002F\u0072\u0065\u0073\u006F\u0075\u0072\u0063\u0065\u002F\u0067\u0065\u0074\u0048\u0061\u0073\u0068")){var _0xa83ca=(518067^518074)+(163905^163912);const targetUrl=url['\u0070\u0061\u0074\u0068\u006E\u0061\u006D\u0065']['\u0073\u0074\u0061\u0072\u0074\u0073\u0057\u0069\u0074\u0068']("\u002F\u0072\u0065\u0073\u006F\u0075\u0072\u0063\u0065\u002F")?`https://api.bookan.com.cn${url['\u0070\u0061\u0074\u0068\u006E\u0061\u006D\u0065']}${url['\u0073\u0065\u0061\u0072\u0063\u0068']}`:`https://apidata.bookan.com.cn${url['\u0070\u0061\u0074\u0068\u006E\u0061\u006D\u0065']}${url['\u0073\u0065\u0061\u0072\u0063\u0068']}`;_0xa83ca=948150^948147;if(request['\u006D\u0065\u0074\u0068\u006F\u0064']==="SNOITPO".split("").reverse().join("")){return new Response(null,{'\u0068\u0065\u0061\u0064\u0065\u0072\u0073':{"\u0041\u0063\u0063\u0065\u0073\u0073\u002D\u0043\u006F\u006E\u0074\u0072\u006F\u006C\u002D\u0041\u006C\u006C\u006F\u0077\u002D\u004F\u0072\u0069\u0067\u0069\u006E":"\u002A","Access-Control-Allow-Methods":"\u0047\u0045\u0054\u002C\u0020\u0050\u004F\u0053\u0054\u002C\u0020\u004F\u0050\u0054\u0049\u004F\u004E\u0053","\u0041\u0063\u0063\u0065\u0073\u0073\u002D\u0043\u006F\u006E\u0074\u0072\u006F\u006C\u002D\u0041\u006C\u006C\u006F\u0077\u002D\u0048\u0065\u0061\u0064\u0065\u0072\u0073":"\u002A"}});}try{const response=await fetch(targetUrl,{"method":request['\u006D\u0065\u0074\u0068\u006F\u0064'],"headers":{"User-Agent":"\u004D\u006F\u007A\u0069\u006C\u006C\u0061\u002F\u0035\u002E\u0030\u0020\u0028\u0057\u0069\u006E\u0064\u006F\u0077\u0073\u0020\u004E\u0054\u0020\u0031\u0030\u002E\u0030\u003B\u0020\u0057\u0069\u006E\u0036\u0034\u003B\u0020\u0078\u0036\u0034\u0029\u0020\u0041\u0070\u0070\u006C\u0065\u0057\u0065\u0062\u004B\u0069\u0074\u002F\u0035\u0033\u0037\u002E\u0033\u0036\u0020\u0028\u004B\u0048\u0054\u004D\u004C\u002C\u0020\u006C\u0069\u006B\u0065\u0020\u0047\u0065\u0063\u006B\u006F\u0029\u0020\u0043\u0068\u0072\u006F\u006D\u0065\u002F\u0031\u0032\u0030\u002E\u0030\u002E\u0030\u002E\u0030\u0020\u0053\u0061\u0066\u0061\u0072\u0069\u002F\u0035\u0033\u0037\u002E\u0033\u0036","\u0052\u0065\u0066\u0065\u0072\u0065\u0072":"\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u007A\u0071\u0035\u002E\u0062\u006F\u006F\u006B\u0061\u006E\u002E\u0063\u006F\u006D\u002E\u0063\u006E\u002F"}});const data=await response['\u0061\u0072\u0072\u0061\u0079\u0042\u0075\u0066\u0066\u0065\u0072']();var _0x3f73d=(278286^278281)+(242230^242226);const newHeaders=new Headers(response['\u0068\u0065\u0061\u0064\u0065\u0072\u0073']);_0x3f73d=294181^294176;newHeaders['\u0073\u0065\u0074']("nigirO-wollA-lortnoC-sseccA".split("").reverse().join(""),"\u002A");return new Response(data,{'\u0073\u0074\u0061\u0074\u0075\u0073':response['\u0073\u0074\u0061\u0074\u0075\u0073'],'\u0068\u0065\u0061\u0064\u0065\u0072\u0073':newHeaders});}catch(err){return new Response(JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079']({"code":500,"msg":err['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}),{"status":500,"headers":{"Content-Type":"\u0061\u0070\u0070\u006C\u0069\u0063\u0061\u0074\u0069\u006F\u006E\u002F\u006A\u0073\u006F\u006E","\u0041\u0063\u0063\u0065\u0073\u0073\u002D\u0043\u006F\u006E\u0074\u0072\u006F\u006C\u002D\u0041\u006C\u006C\u006F\u0077\u002D\u004F\u0072\u0069\u0067\u0069\u006E":"\u002A"}});}}return new Response(HTML_CONTENT,{'\u0068\u0065\u0061\u0064\u0065\u0072\u0073':{"\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u002D\u0054\u0079\u0070\u0065":"text/html; charset=utf-8"}});}};var _0xc3beb=(247950^247947)+(304553^304555);const HTML_CONTENT=`
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>博览数字资源导航站</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .reader-img-container img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: block;
            cursor: pointer;
        }
        #reader-single-img {
            transform-origin: center center;
            transition: transform 0.05s ease-out;
            cursor: grab;
            display: block;
            margin: auto;
        }
        #reader-single-img:active {
            cursor: grabbing;
        }
        #single-view-container {
            overflow: auto;
            flex-direction: column;
            align-items: center;
        }
        .single-scroll-spacer {
            flex: 0 0 50vh;
            width: 100%;
            pointer-events: none;
        }
    </style>
</head>
<body class="bg-gray-50 min-h-screen flex flex-col relative select-none">

    <!-- 顶部导航栏 -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <span class="text-2xl">📚</span>
                <h1 class="text-xl font-bold text-gray-900">博览数字资源库</h1>
            </div>
            <div class="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200 font-medium">
                ● 单页默认居中 & 拖动已就绪
            </div>
        </div>
    </header>

    <!-- 主体内容区 -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        <section class="mb-6">
            <h2 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">资源大类导航</h2>
            <div id="tabs-container" class="flex flex-wrap gap-2">
                <div class="animate-pulse bg-gray-200 h-10 w-24 rounded-full"></div>
                <div class="animate-pulse bg-gray-200 h-10 w-28 rounded-full"></div>
            </div>
        </section>

        <section id="sub-tabs-section" class="mb-6 hidden">
            <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">子分类筛选</h3>
            <div id="sub-tabs-container" class="flex flex-wrap gap-2"></div>
        </section>

        <section>
            <div class="flex justify-between items-center mb-4">
                <h2 id="current-category-title" class="text-lg font-bold text-gray-800">全部资源</h2>
                <span id="resource-count" class="text-sm text-gray-500 font-medium"></span>
            </div>
            
            <div id="resource-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div class="col-span-full text-center py-20 text-gray-400">正在初始化分类数据...</div>
            </div>

            <div id="pagination-container" class="flex flex-wrap justify-center items-center gap-3 mt-10 hidden">
                <button id="prev-btn" onclick="changePage(-1)" class="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed">上一页</button>
                <span id="page-info" class="text-sm text-gray-600 font-medium px-2">第 1 / 1 页</span>
                <button id="next-btn" onclick="changePage(1)" class="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition">下一页</button>

                <div class="flex items-center space-x-2 ml-4">
                    <span class="text-sm text-gray-500">跳转到</span>
                    <input type="number" id="jump-input" min="1" class="w-16 px-2 py-1.5 text-center text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="页码" onkeydown="if(event.key==='Enter') jumpToPage()">
                    <button onclick="jumpToPage()" class="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">确定</button>
                </div>
            </div>
        </section>
    </main>

    <!-- 期刊详情与年份选择弹窗 -->
    <div id="year-modal" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center hidden p-4">
        <div class="bg-white rounded-2xl w-full max-w-3xl p-6 shadow-2xl transform transition-all max-h-[90vh] flex flex-col">
            <div class="flex justify-between items-center mb-4 border-b pb-3 flex-shrink-0">
                <h3 id="modal-title" class="text-lg font-bold text-gray-900">期刊详情</h3>
                <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none">&times;</button>
            </div>
            
            <div class="flex-1 overflow-y-auto space-y-5 pr-1">
                <div id="modal-meta-box" class="bg-gray-50 rounded-xl p-4 border border-gray-200 flex flex-col sm:flex-row gap-4">
                    <img id="modal-cover" src="" class="w-24 h-32 object-cover rounded-lg shadow-sm border bg-white flex-shrink-0 mx-auto sm:mx-0">
                    <div class="flex-1 space-y-2 text-xs">
                        <div class="flex flex-wrap items-center gap-2">
                            <span id="modal-press" class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-semibold"></span>
                            <span id="modal-issn" class="bg-gray-200 text-gray-700 px-2 py-0.5 rounded"></span>
                        </div>
                        <div id="modal-text-wrapper" class="text-gray-600 leading-relaxed text-xs">
                            <p id="modal-text" class="line-clamp-3 whitespace-pre-line"></p>
                            <button id="toggle-text-btn" onclick="toggleTextExpand()" class="text-blue-600 font-medium hover:underline mt-1 hidden">展开全部简介 ∨</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">切换出版年份</h4>
                    <div id="year-list-container" class="flex flex-wrap gap-2">
                        <span class="text-gray-400 text-sm">正在获取年份...</span>
                    </div>
                </div>

                <hr class="border-gray-100">

                <div>
                    <h4 id="issue-section-title" class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">对应年份期数列表</h4>
                    <div id="issue-list-container" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        <span class="text-gray-400 text-sm col-span-full">请选择上方年份查看具体期数</span>
                    </div>
                </div>
            </div>

            <div class="mt-4 pt-3 border-t flex justify-end flex-shrink-0">
                <button onclick="closeModal()" class="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">关闭</button>
            </div>
        </div>
    </div>

    <!-- 沉浸式阅读器 (Reader Modal) -->
    <div id="reader-modal" class="fixed inset-0 bg-black z-50 flex flex-col hidden">
        <!-- 顶部控制栏 -->
        <div class="bg-gray-900/90 backdrop-blur text-white px-6 h-12 flex items-center justify-between border-b border-gray-800 flex-shrink-0 z-20">
            <div class="flex items-center space-x-3">
                <span class="text-xl">📖</span>
                <h2 id="reader-title" class="text-sm font-bold truncate max-w-md">正在加载阅读器...</h2>
            </div>
            <div class="flex items-center space-x-4">
                <span id="single-zoom-scale" class="text-xs text-blue-400 font-medium bg-blue-950 px-2 py-0.5 rounded border border-blue-800 hidden">缩放: 100%</span>
                <span id="reader-page-indicator" class="text-xs text-gray-400">页码: 1-2 / 1</span>
                <button onclick="closeReader()" class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-xs font-medium transition">退出阅读</button>
            </div>
        </div>

        <!-- 主体视图 -->
        <div id="reader-viewport" class="flex-1 flex items-center justify-center relative overflow-hidden bg-zinc-950">
            <button onclick="prevReaderPage()" class="absolute left-4 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur transition text-lg font-bold">‹</button>
            
            <div class="h-full w-full flex items-center justify-center">
                <!-- 双页模式容器 -->
                <div id="dual-view-container" class="h-full max-w-full flex items-center justify-center gap-0 overflow-hidden shadow-2xl">
                    <div class="reader-img-container h-full flex-1 flex items-center justify-end bg-black" onclick="toggleSingleView(0)">
                        <img id="reader-left-img" src="" class="max-h-full w-auto object-contain" alt="左侧页面" title="点击单页独占显示">
                    </div>
                    <div class="reader-img-container h-full flex-1 flex items-center justify-start bg-black" onclick="toggleSingleView(1)">
                        <img id="reader-right-img" src="" class="max-h-full w-auto object-contain" alt="右侧页面" title="点击单页独占显示">
                    </div>
                </div>

                <!-- 单页独占模式容器 -->
                <div id="single-view-container" class="h-full w-full hidden shadow-2xl bg-black relative">
                    <div class="single-scroll-spacer"></div>
                    <img id="reader-single-img" src="" class="max-h-[85vh] object-contain select-none" alt="单页独占页面">
                    <div class="single-scroll-spacer"></div>
                </div>
            </div>

            <button onclick="nextReaderPage()" class="absolute right-4 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur transition text-lg font-bold">›</button>
        </div>

        <!-- 底部控制栏 -->
        <div class="bg-gray-900/90 backdrop-blur text-white h-12 px-6 flex items-center justify-center space-x-4 border-t border-gray-800 flex-shrink-0 z-20">
            <button onclick="prevReaderPage()" class="px-4 py-1 bg-gray-800 hover:bg-gray-700 rounded text-xs font-medium transition">上一页 (左翻)</button>
            <span id="reader-footer-info" class="text-xs text-gray-400">点击单页独占显示 | 滚轮缩放 & 鼠标上下左右无死角拖动 | 再点一次图片退出</span>
            <button onclick="nextReaderPage()" class="px-4 py-1 bg-gray-800 hover:bg-gray-700 rounded text-xs font-medium transition">下一页 (右翻)</button>
        </div>
    </div>

    <!-- 底部版权 -->
    <footer class="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-400 mt-auto">
        博览网数字资源导航系统 &copy; 2026
    </footer>

    <script>
        const INSTANCE_ID = "24043";
        let currentCategoryId = null; 
        let currentPage = 1;         
        let totalPages = 1;          
        const limitNum = 20;         
        let isTextExpanded = false;

        let currentReaderPages = []; 
        let currentReaderIndex = 0;  
        let activeReaderContext = {}; 
        let isSingleMode = false; 
        let singleZoomLevel = 1.0; 

        // 鼠标拖拽平移状态变量
        let isDragging = false;
        let startX = 0, startY = 0;
        let scrollLeftStart = 0, scrollTopStart = 0;
        let hasMoved = false;

        const getCategoryApiUrl = () => \`/(resource)_(categoryList)__(instanceId)_(\${INSTANCE_ID})_(libraryType)_(1)_(categoryId)_()_(statusType)_(1)_(resourceType)_()_(voice_referer)_()_(lang)_()\`;
        const getResourceApiUrl = (categoryId, pageNum) => \`/resource_categoryIssues__instanceId_\${INSTANCE_ID}_libraryType__categoryId_\${categoryId}_pageNum_\${pageNum}_limitNum_\${limitNum}_onlyEpub__resourceType_1_sort__lang_\`;
        const getPastYearApiUrl = (resourceId, resourceType = 1) => \`/resource/pastYearList?resourceType=\${resourceType}&resourceId=\${resourceId}\`;
        const getYearIssuesApiUrl = (resourceId, year, resourceType = 1) => \`/resource/yearList?resourceType=\${resourceType}&resourceId=\${resourceId}&year=\${year}&month=0&pageNum=1&limitNum=0&instanceId=\${INSTANCE_ID}\`;
        const getHashApiUrl = (resourceId, issueId, count = 246, resourceType = 1) => \`/resource/getHash?resourceType=\${resourceType}&resourceId=\${resourceId}&issueId=\${issueId}&start=1&end=\${count}\`;

        function getCoverUrl(item) {
            const resourceId = item.resourceId || '';
            const issueId = item.issueId || '';
            const jpgServer = item.jpg || '8';
            if (resourceId && issueId) {
                return \`https://img1-qn.bookan.com.cn/page\${jpgServer}/\${resourceId}/\${resourceId}-\${issueId}/cover_small.mg\`;
            }
            return 'https://via.placeholder.com/150x200?text=No+Cover';
        }

        async function initApp() {
            const tabsContainer = document.getElementById('tabs-container');
            try {
                const res = await fetch(getCategoryApiUrl());
                const result = await res.json();
                if (result.code === 0 && result.data?.length > 0) {
                    renderTabs(result.data);
                } else {
                    tabsContainer.innerHTML = '<p class="text-red-500 text-sm">未能加载分类数据</p>';
                }
            } catch (err) {
                console.error(err);
                tabsContainer.innerHTML = '<p class="text-red-500 text-sm">网络请求异常</p>';
            }
        }

        function renderTabs(categories) {
            const tabsContainer = document.getElementById('tabs-container');
            tabsContainer.innerHTML = '';

            categories.forEach((cat, index) => {
                const btn = document.createElement('button');
                const targetId = cat.id;

                btn.className = \`px-4 py-2 rounded-full text-sm font-medium transition shadow-sm \${
                    index === 0 
                        ? 'bg-blue-600 text-white shadow-blue-100' 
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }\`;
                btn.innerText = cat.name;

                btn.onclick = () => {
                    document.querySelectorAll('#tabs-container button').forEach(b => {
                        b.className = 'px-4 py-2 rounded-full text-sm font-medium transition shadow-sm bg-white text-gray-700 hover:bg-gray-100 border border-gray-200';
                    });
                    btn.className = 'px-4 py-2 rounded-full text-sm font-medium transition shadow-sm bg-blue-600 text-white shadow-blue-100';
                    
                    document.getElementById('current-category-title').innerText = cat.name;
                    handleSublevels(cat.sublevels);
                    
                    currentCategoryId = targetId;
                    currentPage = 1;
                    loadResources(currentCategoryId, currentPage);
                };
                tabsContainer.appendChild(btn);
            });

            if (categories.length > 0) {
                const first = categories[0];
                document.getElementById('current-category-title').innerText = first.name;
                handleSublevels(first.sublevels);
                currentCategoryId = first.id;
                currentPage = 1;
                loadResources(currentCategoryId, currentPage);
            }
        }

        function handleSublevels(sublevels) {
            const subSection = document.getElementById('sub-tabs-section');
            const subContainer = document.getElementById('sub-tabs-container');
            subContainer.innerHTML = '';

            if (sublevels && sublevels.length > 0) {
                subSection.classList.remove('hidden');
                sublevels.forEach(sub => {
                    const subBtn = document.createElement('button');
                    subBtn.className = 'px-3 py-1.5 rounded-md text-xs font-medium bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition border border-gray-200';
                    subBtn.innerText = sub.name;
                    subBtn.onclick = () => {
                        document.getElementById('current-category-title').innerText = sub.name;
                        currentCategoryId = sub.id;
                        currentPage = 1;
                        loadResources(currentCategoryId, currentPage);
                    };
                    subContainer.appendChild(subBtn);
                });
            } else {
                subSection.classList.add('hidden');
            }
        }

        async function loadResources(categoryId, pageNum) {
            const grid = document.getElementById('resource-grid');
            const countTag = document.getElementById('resource-count');
            const pagination = document.getElementById('pagination-container');
            
            grid.innerHTML = '<div class="col-span-full text-center py-20 text-gray-400">正在加载第 ' + pageNum + ' 页资源...</div>';
            countTag.innerText = '';
            pagination.classList.add('hidden');

            try {
                const res = await fetch(getResourceApiUrl(categoryId, pageNum));
                const result = await res.json();
                
                if (result.code === 0 && result.data) {
                    if (result.data.length > 0) {
                        renderResources(result.data);
                        if (result.data.length < limitNum) {
                            totalPages = pageNum; 
                        } else {
                            totalPages = Math.max(currentPage + 1, totalPages);
                        }
                        countTag.innerText = \`当前第 \${currentPage} 页\`;
                        pagination.classList.remove('hidden');
                    } else {
                        if (pageNum > 1) {
                            totalPages = pageNum - 1;
                            currentPage = totalPages;
                            loadResources(currentCategoryId, currentPage);
                            return;
                        } else {
                            grid.innerHTML = '<div class="col-span-full text-center py-20 text-gray-400">该分类下暂无资源内容</div>';
                            totalPages = 1;
                        }
                    }
                    document.getElementById('page-info').innerText = \`第 \${currentPage} / \${totalPages} 页\`;
                    document.getElementById('prev-btn').disabled = (currentPage <= 1);
                    document.getElementById('next-btn').disabled = (result.data.length < limitNum);
                } else {
                    grid.innerHTML = '<div class="col-span-full text-center py-20 text-red-400">数据加载失败</div>';
                }
            } catch (err) {
                console.error(err);
                grid.innerHTML = '<div class="col-span-full text-center py-20 text-red-400">网络请求失败</div>';
            }
        }

        function changePage(direction) {
            if (currentCategoryId === null) return;
            const newPage = currentPage + direction;
            if (newPage < 1 || newPage > totalPages) return;
            currentPage = newPage;
            loadResources(currentCategoryId, currentPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function jumpToPage() {
            const input = document.getElementById('jump-input');
            const targetPage = parseInt(input.value);
            if (isNaN(targetPage) || targetPage < 1 || targetPage > totalPages) {
                alert(\`请输入 1 ~ \${totalPages} 之间的有效页码\`);
                return;
            }
            currentPage = targetPage;
            input.value = ''; 
            loadResources(currentCategoryId, currentPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function renderResources(items) {
            const grid = document.getElementById('resource-grid');
            grid.innerHTML = '';

            items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'bg-white rounded-xl shadow-sm border border-gray-200 p-3 flex flex-col justify-between hover:shadow-md transition cursor-pointer group';
                const resourceName = item.resourceName || '未命名刊物';
                const issueName = item.issueName || '最新期';
                const coverUrl = getCoverUrl(item);

                card.onclick = () => openYearModal(item);

                card.innerHTML = \`
                    <div>
                        <div class="aspect-[3/4] w-full bg-gray-100 rounded-lg mb-2 overflow-hidden shadow-inner">
                            <img src="\${coverUrl}" alt="\${resourceName}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" onerror="this.src='https://via.placeholder.com/150x200?text=Cover+Error'">
                        </div>
                        <h3 class="text-xs font-bold text-gray-900 line-clamp-2 mb-1" title="\${resourceName}">\${resourceName}</h3>
                    </div>
                    <div class="pt-2 border-t border-gray-100 flex items-center justify-between">
                        <span class="text-[11px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">\${issueName}</span>
                        <span class="text-[10px] text-blue-500 group-hover:underline">浏览往期 →</span>
                    </div>
                \`;
                grid.appendChild(card);
            });
        }

        async function openYearModal(item) {
            const resourceId = item.resourceId || '';
            const resourceName = item.resourceName || '未命名刊物';
            const resourceType = item.resourceType || 1;
            const press = item.press ? \`出版社：\${item.press}\` : '出版单位未知';
            const issn = item.issn ? \`ISSN: \${item.issn}\` : '';
            const textDesc = item.text || '暂无详细介绍说明。';

            const modal = document.getElementById('year-modal');
            document.getElementById('modal-title').innerText = \`《\${resourceName}》\`;
            document.getElementById('modal-cover').src = getCoverUrl(item);
            document.getElementById('modal-press').innerText = press;
            
            const issnTag = document.getElementById('modal-issn');
            if (issn) { issnTag.innerText = issn; issnTag.classList.remove('hidden'); } else { issnTag.classList.add('hidden'); }

            const textEl = document.getElementById('modal-text');
            const toggleBtn = document.getElementById('toggle-text-btn');
            textEl.innerText = textDesc;
            isTextExpanded = false;
            textEl.className = 'line-clamp-3 whitespace-pre-line';
            if (textDesc.length > 100) { toggleBtn.classList.remove('hidden'); toggleBtn.innerText = '展开全部简介 ∨'; } else { toggleBtn.classList.add('hidden'); }

            const yearContainer = document.getElementById('year-list-container');
            const issueContainer = document.getElementById('issue-list-container');
            yearContainer.innerHTML = '<span class="text-gray-400 text-sm">正在查询可用年份...</span>';
            issueContainer.innerHTML = '<span class="text-gray-400 text-sm col-span-full">请先选择上方年份</span>';
            modal.classList.remove('hidden');

            try {
                const res = await fetch(getPastYearApiUrl(resourceId, resourceType));
                const result = await res.json();
                const years = result.data || result;

                if (Array.isArray(years) && years.length > 0) {
                    yearContainer.innerHTML = '';
                    years.forEach((yearItem, idx) => {
                        const yearStr = typeof yearItem === 'object' ? (yearItem.year || yearItem.issueYear) : yearItem;
                        const btn = document.createElement('button');
                        btn.className = \`px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium transition year-btn \${idx === 0 ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-50 hover:bg-gray-100 text-gray-700'}\`;
                        btn.innerText = \`\${yearStr}年\`;
                        btn.onclick = () => {
                            document.querySelectorAll('.year-btn').forEach(b => b.className = 'px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium transition year-btn bg-gray-50 hover:bg-gray-100 text-gray-700');
                            btn.className = 'px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium transition year-btn bg-blue-600 text-white shadow-sm';
                            fetchIssuesByYear(resourceId, yearStr, resourceType, resourceName);
                        };
                        yearContainer.appendChild(btn);
                    });
                    const defaultYear = typeof years[0] === 'object' ? (years[0].year || years[0].issueYear) : years[0];
                    fetchIssuesByYear(resourceId, defaultYear, resourceType, resourceName);
                } else {
                    yearContainer.innerHTML = '<span class="text-gray-500 text-sm py-2">暂无往年数据</span>';
                }
            } catch (err) {
                console.error(err);
                yearContainer.innerHTML = '<span class="text-red-400 text-sm py-2">获取年份列表失败</span>';
            }
        }

        function toggleTextExpand() {
            const textEl = document.getElementById('modal-text');
            const toggleBtn = document.getElementById('toggle-text-btn');
            isTextExpanded = !isTextExpanded;
            textEl.className = isTextExpanded ? 'whitespace-pre-line' : 'line-clamp-3 whitespace-pre-line';
            toggleBtn.innerText = isTextExpanded ? '收起简介 ∧' : '展开全部简介 ∨';
        }

        async function fetchIssuesByYear(resourceId, year, resourceType, resourceName) {
            const issueContainer = document.getElementById('issue-list-container');
            const issueTitle = document.getElementById('issue-section-title');
            
            issueTitle.innerText = \`\${year} 年期数列表\`;
            issueContainer.innerHTML = '<span class="text-gray-400 text-sm col-span-full py-4">正在获取期数...</span>';

            try {
                const res = await fetch(getYearIssuesApiUrl(resourceId, year, resourceType));
                const result = await res.json();
                
                if (result.code === 0 && result.data?.length > 0) {
                    issueContainer.innerHTML = '';
                    result.data.forEach(issue => {
                        const issueCard = document.createElement('div');
                        issueCard.className = 'bg-gray-50 border border-gray-200 rounded-lg p-2.5 flex items-center gap-2 hover:bg-blue-50 hover:border-blue-200 transition cursor-pointer';

                        const issueName = issue.issueName || \`\${year}年第\${issue.issueNo}期\`;
                        const coverUrl = getCoverUrl(issue);

                        issueCard.onclick = () => {
                            closeModal();
                            openReader(resourceId, issue.issueId, resourceName, issueName, issue.count || 100, resourceType, issue.jpg || '8');
                        };

                        issueCard.innerHTML = \`
                            <img src="\${coverUrl}" class="w-10 h-14 object-cover rounded shadow-sm border bg-gray-100" onerror="this.src='https://via.placeholder.com/150x200?text=Err'">
                            <div class="overflow-hidden">
                                <p class="text-xs font-bold text-gray-800 truncate">\${issueName}</p>
                                <p class="text-[10px] text-blue-600 font-medium mt-0.5">在线阅读 →</p>
                            </div>
                        \`;
                        issueContainer.appendChild(issueCard);
                    });
                } else {
                    issueContainer.innerHTML = '<span class="text-gray-400 text-sm col-span-full py-4">该年份下暂无期数数据</span>';
                }
            } catch (err) {
                console.error(err);
                issueContainer.innerHTML = '<span class="text-red-400 text-sm col-span-full py-4">获取期数列表失败</span>';
            }
        }

        async function openReader(resourceId, issueId, resourceName, issueName, count, resourceType, jpgServer) {
            const readerModal = document.getElementById('reader-modal');
            const readerTitle = document.getElementById('reader-title');
            
            activeReaderContext = { resourceId, issueId, jpgServer };
            readerTitle.innerText = \`《\${resourceName}》 - \${issueName}\`;
            document.getElementById('reader-page-indicator').innerText = '正在解析页面哈希...';
            
            isSingleMode = false;
            document.getElementById('dual-view-container').classList.remove('hidden');
            document.getElementById('single-view-container').classList.add('hidden');
            document.getElementById('single-zoom-scale').classList.add('hidden');
            
            readerModal.classList.remove('hidden');

            try {
                const res = await fetch(getHashApiUrl(resourceId, issueId, count, resourceType));
                const result = await res.json();
                
                const pages = result.data || result.list || result;
                if (Array.isArray(pages) && pages.length > 0) {
                    currentReaderPages = pages;
                    currentReaderIndex = 0; 
                    renderReaderPages();
                } else {
                    alert("未能获取到该期刊的正文页面数据");
                    closeReader();
                }
            } catch (err) {
                console.error(err);
                alert("请求阅读页面出错");
                closeReader();
            }
        }

        function renderReaderPages() {
            if (currentReaderPages.length === 0) return;
            
            const { resourceId, issueId, jpgServer } = activeReaderContext;
            const leftImg = document.getElementById('reader-left-img');
            const rightImg = document.getElementById('reader-right-img');

            if (currentReaderIndex === 0) {
                const coverHash = typeof currentReaderPages[0] === 'string' ? currentReaderPages[0] : (currentReaderPages[0].hash || currentReaderPages[0].name || currentReaderPages[0].url || '');
                const coverUrl = \`https://img1-qn.bookan.com.cn/jpage\${jpgServer || '8'}/\${resourceId}/\${resourceId}-\${issueId}/\${coverHash}_big.jpg\`;
                
                leftImg.src = coverUrl;
                rightImg.src = coverUrl;
                document.getElementById('reader-page-indicator').innerText = \`封面 (1) / 共 \${currentReaderPages.length} 页\`;
            } else {
                const leftData = currentReaderPages[currentReaderIndex];
                const leftHash = typeof leftData === 'string' ? leftData : (leftData.hash || leftData.name || leftData.url || '');
                leftImg.src = \`https://img1-qn.bookan.com.cn/jpage\${jpgServer || '8'}/\${resourceId}/\${resourceId}-\${issueId}/\${leftHash}_big.jpg\`;

                if (currentReaderIndex + 1 < currentReaderPages.length) {
                    const rightData = currentReaderPages[currentReaderIndex + 1];
                    const rightHash = typeof rightData === 'string' ? rightData : (rightData.hash || rightData.name || rightData.url || '');
                    rightImg.src = \`https://img1-qn.bookan.com.cn/jpage\${jpgServer || '8'}/\${resourceId}/\${resourceId}-\${issueId}/\${rightHash}_big.jpg\`;
                    
                    document.getElementById('reader-page-indicator').innerText = \`页码: \${currentReaderIndex + 1} - \${currentReaderIndex + 2} / \${currentReaderPages.length}\`;
                } else {
                    rightImg.src = '';
                    document.getElementById('reader-page-indicator').innerText = \`页码: \${currentReaderIndex + 1} / \${currentReaderPages.length}\`;
                }
            }
        }

        function toggleSingleView(side) {
            if (currentReaderPages.length === 0) return;
            
            let targetPageIndex = currentReaderIndex;
            if (side === 1 && currentReaderIndex !== 0) {
                if (currentReaderIndex + 1 < currentReaderPages.length) {
                    targetPageIndex = currentReaderIndex + 1;
                } else {
                    return; 
                }
            }

            const { resourceId, issueId, jpgServer } = activeReaderContext;
            const pageData = currentReaderPages[targetPageIndex];
            const hashVal = typeof pageData === 'string' ? pageData : (pageData.hash || pageData.name || pageData.url || '');
            const imgUrl = \`https://img1-qn.bookan.com.cn/jpage\${jpgServer || '8'}/\${resourceId}/\${resourceId}-\${issueId}/\${hashVal}_big.jpg\`;

            singleZoomLevel = 1.0;
            updateSingleZoom();

            const singleImg = document.getElementById('reader-single-img');
            singleImg.src = imgUrl;

            document.getElementById('dual-view-container').classList.add('hidden');
            document.getElementById('single-view-container').classList.remove('hidden');
            document.getElementById('single-view-container').classList.add('flex');
            document.getElementById('single-zoom-scale').classList.remove('hidden');
            
            isSingleMode = true;
            document.getElementById('reader-page-indicator').innerText = \`单页展示: 第 \${targetPageIndex + 1} 页 / 共 \${currentReaderPages.length} 页\`;

            // 使用 setTimeout 确保 DOM 渲染完成后，精准滚动居中定位到上下 Spacer 的正中央
            setTimeout(() => {
                const scrollBox = document.getElementById('single-view-container');
                scrollBox.scrollTop = (scrollBox.scrollHeight - scrollBox.clientHeight) / 2;
                scrollBox.scrollLeft = (scrollBox.scrollWidth - scrollBox.clientWidth) / 2;
            }, 10);
        }

        // 鼠标拖拽平移 & 单击退出交互绑定
        const singleImgEl = document.getElementById('reader-single-img');
        const scrollBoxEl = document.getElementById('single-view-container');

        singleImgEl.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return; 
            isDragging = true;
            hasMoved = false;
            startX = e.clientX;
            startY = e.clientY;
            scrollLeftStart = scrollBoxEl.scrollLeft;
            scrollTopStart = scrollBoxEl.scrollTop;
            singleImgEl.style.cursor = 'grabbing';
            e.preventDefault();
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
                hasMoved = true; 
            }
            scrollBoxEl.scrollLeft = scrollLeftStart - dx;
            scrollBoxEl.scrollTop = scrollTopStart - dy;
        });

        window.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            singleImgEl.style.cursor = 'grab';
        });

        singleImgEl.addEventListener('click', () => {
            if (!hasMoved) {
                exitSingleView();
            }
        });

        function exitSingleView() {
            document.getElementById('single-view-container').classList.add('hidden');
            document.getElementById('single-view-container').classList.remove('flex');
            document.getElementById('dual-view-container').classList.remove('hidden');
            document.getElementById('single-zoom-scale').classList.add('hidden');
            isSingleMode = false;
            renderReaderPages();
        }

        // 单页状态下鼠标滚轮缩放逻辑
        scrollBoxEl.addEventListener('wheel', (e) => {
            if (!isSingleMode) return;
            e.preventDefault();
            const delta = e.deltaY < 0 ? 0.15 : -0.15;
            singleZoomLevel = Math.min(Math.max(singleZoomLevel + delta, 0.8), 4.0);
            updateSingleZoom();
        }, { passive: false });

        function updateSingleZoom() {
            const singleImg = document.getElementById('reader-single-img');
            const scaleInfo = document.getElementById('single-zoom-scale');
            singleImg.style.transform = \`scale(\${singleZoomLevel})\`;
            scaleInfo.innerText = \`缩放: \${Math.round(singleZoomLevel * 100)}%\`;
        }

        function prevReaderPage() {
            if (isSingleMode) exitSingleView();
            if (currentReaderIndex > 0) {
                if (currentReaderIndex <= 2) {
                    currentReaderIndex = 0;
                } else {
                    currentReaderIndex -= 2;
                }
                renderReaderPages();
            }
        }

        function nextReaderPage() {
            if (isSingleMode) exitSingleView();
            if (currentReaderIndex === 0) {
                currentReaderIndex = 1;
                renderReaderPages();
            } else if (currentReaderIndex + 2 < currentReaderPages.length) {
                currentReaderIndex += 2;
                renderReaderPages();
            }
        }

        function closeReader() {
            document.getElementById('reader-modal').classList.add('hidden');
            currentReaderPages = [];
            isSingleMode = false;
        }

        document.addEventListener('keydown', (e) => {
            const readerModal = document.getElementById('reader-modal');
            if (!readerModal.classList.contains('hidden')) {
                if (isSingleMode) {
                    if (e.key === 'Escape') exitSingleView();
                    return;
                }
                if (e.key === 'ArrowLeft') prevReaderPage();
                if (e.key === 'ArrowRight') nextReaderPage();
                if (e.key === 'Escape') closeReader();
            }
        });

        function closeModal() {
            document.getElementById('year-modal').classList.add('hidden');
        }

        initApp();
    </script>
</body>
</html>
`;_0xc3beb=411490^411489;
