function LocalName({ local, zh }: { local: string; zh: string }) {
  return <span className="bilingual-name"><span lang="en-GB">{local}</span><small>{zh}</small></span>;
}

function Note({ children, no }: { children: React.ReactNode; no: string }) {
  return <aside className="margin-note"><span>{no}</span><p>{children}</p></aside>;
}

export default function EdinburghGuide({ theme }: { theme: "vintage" | "modern" }) {
  return (
    <div className="book-pages edinburgh-book">
      <header className="masthead">
        <div className="crumb"><span>UNITED KINGDOM</span><i>◆</i><span>SCOTLAND</span><i>◆</i><b>EDINBURGH</b></div>
        <p>{theme === "modern" ? "PHOTO EDITION · 现代影像版" : "EDITION FOR CURIOUS TRAVELLERS · 旅行者版本"}</p>
      </header>

      <section id="prologue" className="chapter hero-chapter">
        <div className="hero-title">
          <p className="eyebrow">A CITY WRITTEN IN STONE AND WEATHER</p>
          <h2><span lang="en-GB">Edinburgh</span><small>爱丁堡</small></h2>
          <p className="hero-subtitle">风把山脊吹醒，石巷替故事回声</p>
        </div>
        <figure className="hero-figure">
          <img src={theme === "modern" ? "/images/edinburgh-hero-modern.png" : "/images/edinburgh-hero-vintage.png"} alt={theme === "modern" ? "生成的现代旅行摄影风格爱丁堡城堡与老城" : "复古石版画风格的爱丁堡城堡、老城与亚瑟王座"} />
          <figcaption><b>图版 I</b><span><i lang="en-GB">Castle Rock and the Old Town</i> · 城堡岩与老城</span><small>火山岩托起城堡，烟囱和尖塔把山风切成一条条街巷。</small></figcaption>
        </figure>
        <div className="prologue-grid">
          <div className="lead-copy"><span className="drop-cap">爱</span><p>丁堡像一本不肯合上的小说：城堡占据最险峻的开篇，皇家英里一路铺陈王权、宗教与市井，层层叠叠的旧城小巷则负责留下伏笔。风一吹，深色砂岩便有了舞台布景般的明暗。</p><p>别只沿着山脊前进。清晨登城堡岩，午后拐进新城的秩序与花园，傍晚再把脚步交给亚瑟王座或卡尔顿山。夜色降下时，一间有壁炉的酒馆会替这座城市写好句号。</p></div>
          <blockquote><span>“</span><p lang="en-GB">Edinburgh keeps its stories close, then lets the weather read them aloud.</p><small>爱丁堡把故事藏在石头里，再让天气大声朗读。</small></blockquote>
          <div className="fact-card"><p className="fact-label">AT A GLANCE · 扉页速览</p><dl><div><dt>最佳步调</dt><dd>2—3 日</dd></div><div><dt>城市气质</dt><dd>峻峭、文学、温暖</dd></div><div><dt>适合时节</dt><dd>暮春 / 初秋</dd></div><div><dt>不可错过</dt><dd>山脊上的黄昏</dd></div></dl></div>
        </div>
      </section>

      <section id="cultura" className="chapter chapter-cultura">
        <div className="chapter-heading"><p>CHAPTER ONE · 第一章</p><h2><span lang="en-GB">Heritage</span><small>人文 · 山脊上的故事</small></h2><span className="page-no">01</span></div>
        <article className="feature-duomo">
          <div className="feature-number">I</div><div><p className="category">FORTRESS & CROWN · 城堡与王权</p><h3><LocalName local="Edinburgh Castle" zh="爱丁堡城堡" /></h3><p className="standfirst">一座火山岩上的堡垒，用近千年的王室、战争与城市记忆守住天际线。</p><div className="columns"><p>城堡位于陡峭的 Castle Rock，最古老的建筑圣玛格丽特礼拜堂约建于 1130 年。王冠珠宝、命运之石与军事遗迹彼此相邻，让这座堡垒不只是观景台。</p><p>从城堡顺皇家英里向东，可一路抵达荷里路德宫。石板路长度约为一“苏格兰里”，支巷、教堂和旧宅让下坡路不断偏离原计划——这恰是它最好玩的部分。</p></div><div className="visit-strip"><span><b>建议</b> 预订上午时段</span><span><b>留时</b> 2—3 小时</span><a href="https://www.historicenvironment.scot/visit-a-place/places/edinburgh-castle/" target="_blank" rel="noreferrer">官方参观信息 ↗</a></div></div>
          <Note no="1130">圣玛格丽特礼拜堂约建于 1130 年，是城堡内现存最古老的建筑。</Note>
        </article>
        <div className="culture-mosaic">
          <article className="art-card last-supper"><p className="category">THE OLD TOWN · 老城</p><span className="art-index">02</span><h3><LocalName local="The Royal Mile" zh="皇家英里" /></h3><p>从城堡到荷里路德宫，四段老街把权力与日常压缩在同一条山脊。真正值得寻找的是两侧的 closes：狭窄通道会突然打开成庭院、台阶或另一层城市。</p><p className="tip">步行提示：石板路坡度明显，雨后湿滑；穿防水且抓地力好的鞋。</p><a href="https://edinburgh.org/neighbourhoods/the-royal-mile/" target="_blank" rel="noreferrer">THE ROYAL MILE ↗</a></article>
          <article className="art-card brera-card"><p className="category">COLLECTION · 收藏</p><span className="art-index">03</span><h3><LocalName local="National Museum of Scotland" zh="苏格兰国家博物馆" /></h3><p>自然、科技、设计与苏格兰历史在明亮大厅里交汇。天气忽然转坏时，这里不是备选，而是理解这片土地如何看待自己的主场。</p></article>
          <article className="art-card scala-card"><p className="category">PALACE · 宫殿</p><span className="art-index">04</span><h3><LocalName local="Palace of Holyroodhouse" zh="荷里路德宫" /></h3><p>皇家英里的东端仍是英国君主在苏格兰的官方居所。宫殿、修道院遗址与议会大厦把旧王权和当代政治放在同一片山脚。</p></article>
          <article className="art-card castle-card edinburgh-close-card"><p className="category">TWO TOWNS · 双城</p><span className="art-index">05</span><h3><LocalName local="New Town & Dean Village" zh="新城与迪恩村" /></h3><p>乔治亚新城用方格、广场和新古典立面回应旧城的拥挤；再沿坡下到利斯河谷，石桥与旧磨坊让城市突然安静。</p></article>
        </div>
      </section>

      <section id="natura" className="chapter chapter-natura">
        <div className="chapter-heading"><p>CHAPTER TWO · 第二章</p><h2><span lang="en-GB">Nature</span><small>自然 · 风与火山岩</small></h2><span className="page-no">02</span></div>
        <div className="nature-layout">
          <figure className="navigli-figure"><img src={theme === "modern" ? "/images/edinburgh-nature-modern.png" : "/images/edinburgh-nature-vintage.png"} alt={theme === "modern" ? "生成的现代旅行摄影风格荷里路德公园与索尔兹伯里峭壁" : "复古旅行版画风格的亚瑟王座、索尔兹伯里峭壁与爱丁堡"} /><figcaption><b>图版 II</b><span><i lang="en-GB">Holyrood Park</i> · 荷里路德公园</span></figcaption></figure>
          <article className="navigli-copy"><p className="category">VOLCANO & WIND · 火山与风</p><h3><LocalName local="Arthur’s Seat" zh="亚瑟王座" /></h3><p className="standfirst">从皇家英里的尽头直接走进荒野，城市在背后缩成一幅由尖塔、海湾与远山组成的地图。</p><p>亚瑟王座与索尔兹伯里峭壁位于荷里路德公园。天气晴朗时可登高看老城与福斯湾；大风、低云或结冰时则应缩短路线，不把城市山地当成普通公园步道。</p><div className="time-note"><span>07:30</span><p><b lang="en-GB">The ridge before breakfast</b><small>早餐前看第一束山脊光</small></p></div></article>
          <Note no="360°">山顶视野开阔，也完全暴露在风里；出发前查看天气并带防水外层。</Note>
        </div>
        <div className="green-index"><article className="green-feature"><span className="botanical-mark">✦</span><p className="category">RIVER WALK · 河谷步道</p><h3><LocalName local="Water of Leith" zh="利斯河步道" /></h3><p>河流从城市西侧穿过迪恩村、斯托克布里奇与利斯，把旧磨坊、树林和社区串成一条低调的慢行线。</p><p className="green-tip">从 Dean Village 向 Stockbridge 步行，适合与新城半日组合。</p></article><article><span className="mini-no">N. 02</span><h3><LocalName local="Royal Botanic Garden" zh="皇家植物园" /></h3><p>植物收藏、开阔草地与城市天际线组成轻松半日；温室开放状态可能变化，出发前查看官网。</p></article><article><span className="mini-no">N. 03</span><h3><LocalName local="Calton Hill" zh="卡尔顿山" /></h3><p>比亚瑟王座更易抵达，日落时可同时看见老城、城堡、海湾与纪念碑剪影。</p></article></div>
      </section>

      <section id="sapori" className="chapter chapter-sapori">
        <div className="chapter-heading dark-heading"><p>CHAPTER THREE · 第三章</p><h2><span lang="en-GB">Flavours</span><small>美食 · 壁炉边的餐桌</small></h2><span className="page-no">03</span></div>
        <div className="food-spread"><figure><img src={theme === "modern" ? "/images/edinburgh-food-modern.png" : "/images/edinburgh-food-vintage.png"} alt={theme === "modern" ? "生成的现代美食摄影风格哈吉斯、萝卜泥、土豆泥与苏格兰汤" : "复古美食插画风格的爱丁堡酒馆餐桌"} /><figcaption><b>图版 III</b><span><i lang="en-GB">An Edinburgh table</i> · 爱丁堡餐桌</span></figcaption></figure><div className="food-intro"><p className="category">HEARTH & HIGHLANDS · 壁炉与高地</p><h3>胡椒先暖胃，<br />壁炉再留住夜晚。</h3><p>苏格兰食物擅长把寒冷变成食欲：燕麦、根茎、熏鱼与内脏在朴素做法中建立深味。今天的爱丁堡餐桌也不拘传统，海产、时令蔬菜与新派小馆让老菜有了更轻盈的讲法。</p><p className="script-note" lang="en-GB">Slàinte mhath!</p><small>“祝你健康！” · 常见盖尔语祝酒词</small></div></div>
        <div className="dish-grid"><article className="dish-primary"><span className="dish-no">01</span><p className="category">SCOTTISH CLASSIC · 经典</p><h3><LocalName local="Haggis, neeps and tatties" zh="哈吉斯配萝卜泥与土豆泥" /></h3><p>香料调味的羊杂与燕麦带来浓郁谷物香，甜润萝卜泥和绵密土豆泥负责平衡。第一次尝试，不妨选一份做法朴素的小份。</p></article><article><span className="dish-no">02</span><p className="category">SOUP · 汤</p><h3><LocalName local="Cullen skink" zh="卡伦熏鱼汤" /></h3><p>熏黑线鳕、土豆与牛奶煮成稠汤，烟熏味柔和而扎实，尤其适合风雨后的午餐。</p></article><article><span className="dish-no">03</span><p className="category">SWEET · 甜点</p><h3><LocalName local="Cranachan" zh="克拉纳坎" /></h3><p>奶油、烤燕麦、覆盆子与少量威士忌层层叠起，把高地风味做成清爽甜点。</p></article><article className="aperitivo-card edinburgh-pub-card"><span className="dish-no">18:00</span><p className="category">LOCAL RITUAL · 城市仪式</p><h3><LocalName local="A dram by the fire" zh="壁炉边的一杯" /></h3><p>挑一间保留木吧台的老酒馆，先问当日桶啤或单一麦芽，再让聊天决定离席时间。点威士忌时不必装懂，描述喜欢的烟熏、果香或柔和口感即可。</p></article></div>
      </section>

      <section id="itinerario" className="chapter chapter-itinerary">
        <div className="chapter-heading"><p>CHAPTER FOUR · 第四章</p><h2><span lang="en-GB">Itinerary</span><small>行程 · 48 小时</small></h2><span className="page-no">04</span></div>
        <div className="route-days"><article><header><span>DAY</span><b>01</b><small>山脊与旧城</small></header><ol><li><time>09:00</time><p><b lang="en-GB">Edinburgh Castle</b><span>按预约时段入场</span></p></li><li><time>12:00</time><p><b lang="en-GB">The Royal Mile</b><span>沿 closes 慢慢下坡</span></p></li><li><time>15:00</time><p><b lang="en-GB">National Museum</b><span>从收藏读懂苏格兰</span></p></li><li><time>18:30</time><p><b lang="en-GB">Calton Hill</b><span>看老城进入暮色</span></p></li></ol></article><article><header><span>DAY</span><b>02</b><small>山野与新城</small></header><ol><li><time>08:00</time><p><b lang="en-GB">Arthur’s Seat</b><span>按天气选择登高路线</span></p></li><li><time>12:30</time><p><b lang="en-GB">Stockbridge</b><span>午餐与社区小店</span></p></li><li><time>15:00</time><p><b lang="en-GB">Water of Leith</b><span>沿河走向 Dean Village</span></p></li><li><time>18:00</time><p><b lang="en-GB">New Town</b><span>晚餐与酒馆收尾</span></p></li></ol></article></div>
        <div className="phrasebook"><div><p className="category">WORDS IN YOUR POCKET · 袖珍会话</p><h3 lang="en-GB">A table for two, please.</h3><p>请给我们一张两人桌。</p></div><dl><div><dt lang="en-GB">Cheers!</dt><dd>谢谢 / 干杯</dd></div><div><dt lang="en-GB">Is this the way to the castle?</dt><dd>这是去城堡的路吗？</dd></div><div><dt lang="en-GB">A return ticket, please</dt><dd>请给我一张往返票</dd></div><div><dt lang="en-GB">Could we have the bill?</dt><dd>请结账</dd></div></dl></div>
        <div className="practical-grid"><div><span>ARRIVAL</span><h3>抵达</h3><p>机场电车停靠航站楼外，可通往市中心；班次与运营安排会变化，请查看 <a href="https://www.edinburghairport.com/transport-links/trams" target="_blank" rel="noreferrer">机场官方交通信息 ↗</a>。</p></div><div><span>GETTING AROUND</span><h3>移动</h3><p>旧城和新城适合步行，跨区使用公交或电车。实时线路与票务以 <a href="https://www.lothianbuses.com/" target="_blank" rel="noreferrer">Lothian Buses ↗</a> 为准。</p></div><div><span>WEATHER</span><h3>天气</h3><p>短时间内出现风、雨和日照很常见。轻便防水外层、抓地鞋和可随时增减的衣物，比厚重雨伞更实用。</p></div></div>
      </section>

      <footer><div className="footer-mark">E</div><div><p className="footer-title" lang="en-GB">Edinburgh always leaves one more close unexplored.</p><p>愿你记住的不只是城堡，也有风掠过草坡的声音，以及酒馆门后突然亮起的暖光。</p></div><div className="sources"><span>SOURCES · 资料来源</span><a href="https://edinburgh.org/" target="_blank" rel="noreferrer">Forever Edinburgh</a><a href="https://www.historicenvironment.scot/visit-a-place/places/edinburgh-castle/" target="_blank" rel="noreferrer">Edinburgh Castle</a><a href="https://www.edinburghairport.com/transport-links/trams" target="_blank" rel="noreferrer">Edinburgh Airport</a><a href="https://www.lothianbuses.com/" target="_blank" rel="noreferrer">Lothian Buses</a></div><p className="colophon">CURATED AND ILLUSTRATED · MMXXVI</p></footer>
    </div>
  );
}
