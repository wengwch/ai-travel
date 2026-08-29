function LocalName({ local, annotation }: { local: string; annotation: string }) {
  return <span className="bilingual-name"><span lang="zh-CN">{local}</span><small>{annotation}</small></span>;
}

function Note({ children, no }: { children: React.ReactNode; no: string }) {
  return <aside className="margin-note"><span>{no}</span><p>{children}</p></aside>;
}

export default function XianGuide({ theme }: { theme: "vintage" | "modern" }) {
  return (
    <div className="book-pages xian-book">
      <header className="masthead">
        <div className="crumb"><span>中国</span><i>◆</i><span>西北</span><i>◆</i><b>西安</b></div>
        <p>{theme === "modern" ? "PHOTO EDITION · 现代影像版" : "旅行者版本 · VINTAGE EDITION"}</p>
      </header>

      <section id="prologue" className="chapter hero-chapter">
        <div className="hero-title">
          <p className="eyebrow">城墙之内，长安仍在日常里回响</p>
          <h2><span lang="zh-CN">西安</span><small>XI&apos;AN</small></h2>
          <p className="hero-subtitle">登上城墙，先把十三朝放到地平线上</p>
        </div>
        <figure className="hero-figure">
          <img src={theme === "modern" ? "/images/xian-hero-modern.png" : "/images/xian-hero-vintage.png"} alt={theme === "modern" ? "生成的现代旅行摄影风格西安城墙、城楼与钟楼" : "长安复古旅行石版画风格的西安城墙、城楼与钟楼"} />
          <figcaption><b>图版 I</b><span><i lang="zh-CN">城垣暮色</i> · TWILIGHT OVER CHANG&apos;AN</span><small>砖城把老城的尺度围拢，钟楼在街道交会处标记今天的中心。</small></figcaption>
        </figure>
        <div className="prologue-grid">
          <div className="lead-copy"><span className="drop-cap">西</span><p>安的历史并不安静地躺在展柜里。城门仍然调度着街道，雁塔仍在城市天际线上辨认方向，面馆里的一碗热汤又把宏大叙事拉回寻常生活。来到这里，最好的方法不是追赶朝代，而是让脚步适应城墙的长度。</p><p>清晨从南门上城，午后把时间交给博物馆与碑刻，夜里去回坊听案板与铁锅合奏。第二天再向东越过灞水，兵马俑与骊山把视野从一座城推向更辽阔的秦帝国。</p></div>
          <blockquote><span>“</span><p lang="zh-CN">年代不是背景，而是脚下仍可行走的路。</p><small>History here is not a backdrop, but a road still underfoot.</small></blockquote>
          <div className="fact-card"><p className="fact-label">扉页速览 · AT A GLANCE</p><dl><div><dt>最佳步调</dt><dd>3—4 日</dd></div><div><dt>城市气质</dt><dd>厚重、爽朗、热烈</dd></div><div><dt>适合时节</dt><dd>春末 / 秋季</dd></div><div><dt>不可错过</dt><dd>城墙黄昏</dd></div></dl></div>
        </div>
      </section>

      <section id="cultura" className="chapter chapter-cultura">
        <div className="chapter-heading"><p>第一章 · CHAPTER ONE</p><h2><span lang="zh-CN">人文</span><small>HERITAGE · 长安回声</small></h2><span className="page-no">01</span></div>
        <article className="feature-duomo">
          <div className="feature-number">壹</div>
          <div><p className="category">帝国考古 · IMPERIAL ARCHAEOLOGY</p><h3><LocalName local="秦始皇帝陵博物院" annotation="兵马俑与丽山园 · EMPEROR QINSHIHUANG'S MAUSOLEUM SITE MUSEUM" /></h3><p className="standfirst">成列的陶俑令人屏息，真正值得观察的却是每张不同的脸、铠甲结构和修复留下的时间痕迹。</p><div className="columns"><p>博物院由兵马俑博物馆与秦始皇帝陵遗址公园（丽山园）组成，两处之间设有接驳。先看一号坑理解军阵规模，再把视线移向较小展厅里的细节，会比只追求全景更有收获。</p><p>这里实行实名预约，票务与开放安排会调整。宜从官方渠道购票，并为交通、安检与两处园区预留大半天；讲解也应选择馆方认可的服务。</p></div><div className="visit-strip"><span><b>建议</b> 先看总览，再看甲胄与面孔</span><span><b>留时</b> 半日</span><a href="https://www.bmy.com.cn/index.html" target="_blank" rel="noreferrer">博物院官网 ↗</a></div></div>
          <Note no="221 BC">秦统一六国的年代。兵马俑只是陵园体系的一部分，丽山园能帮助理解其更完整的空间尺度。</Note>
        </article>
        <div className="culture-mosaic">
          <article className="art-card last-supper"><p className="category">城垣 · CITY WALL</p><span className="art-index">02</span><h3><LocalName local="西安城墙" annotation="城门、马道与完整环线" /></h3><p>现存城墙以明代格局为基础。步行一段比匆忙环骑更能读懂城门、瓮城和街区关系；黄昏从南门附近登城，光线会把砖色与城市轮廓一起托高。</p><a href="https://www.chinaxiancitywall.com/" target="_blank" rel="noreferrer">西安城墙官网 ↗</a></article>
          <article className="art-card brera-card"><p className="category">博物馆 · MUSEUM</p><span className="art-index">03</span><h3><LocalName local="陕西历史博物馆" annotation="周秦汉唐的文明长卷" /></h3><p>青铜器、陶俑、壁画与金银器把“十三朝古都”拆成具体器物。实行实名预约，免费不等于免票；热门日期应尽早关注官方放票公告。</p><a href="https://www.sxhm.com/Site/Index/index.html" target="_blank" rel="noreferrer">陕西历史博物馆 ↗</a></article>
          <article className="art-card scala-card"><p className="category">丝路 · SILK ROAD</p><span className="art-index">04</span><h3><LocalName local="大雁塔" annotation="玄奘、佛经与唐长安" /></h3><p>这座唐代佛塔与玄奘译经事业相连，也见证长安作为丝路都会的开放。围着塔基走一圈，再向北看现代城市如何沿轴线展开。</p><a href="https://en.xa.gov.cn/CultureTravel/Attractions/1691691504798126082.html" target="_blank" rel="noreferrer">西安市政府介绍 ↗</a></article>
          <article className="art-card castle-card xian-gate-card"><p className="category">碑石 · CALLIGRAPHY</p><span className="art-index">05</span><h3><LocalName local="西安碑林" annotation="在石头上阅读书法史" /></h3><p>从经籍碑刻到历代名家书迹，碑林要求人把速度放慢。留意字形，也看捶拓、收藏与建筑院落如何共同保存文字。</p></article>
        </div>
      </section>

      <section id="natura" className="chapter chapter-natura">
        <div className="chapter-heading"><p>第二章 · CHAPTER TWO</p><h2><span lang="zh-CN">山河</span><small>NATURE · 秦岭北麓</small></h2><span className="page-no">02</span></div>
        <div className="nature-layout">
          <figure className="navigli-figure"><img src={theme === "modern" ? "/images/xian-nature-modern.png" : "/images/xian-nature-vintage.png"} alt={theme === "modern" ? "生成的现代旅行摄影风格秦岭北麓秋日山谷与溪流" : "长安复古旅行版画风格的秦岭北麓群峰与溪谷"} /><figcaption><b>图版 II</b><span><i lang="zh-CN">终南秋径</i> · QINLING FOOTHILLS</span></figcaption></figure>
          <article className="navigli-copy"><p className="category">山脉 · MOUNTAIN RANGE</p><h3><LocalName local="秦岭北麓" annotation="从城市南缘走进山谷" /></h3><p className="standfirst">在西安南望，秦岭不是遥远布景，而是一道决定气候、水系与城市方向的巨大边界。</p><p>从市区出发可按季节选择成熟景区与短线步道。山中天气与城内不同，雨雪、落石和临时封闭都可能改变路线；不要为追求“秘境”离开开放步道，也不要把一张风景照当作导航。</p><div className="time-note"><span>08:00</span><p><b lang="zh-CN">进山要早</b><small>核对天气、开放区域与返程交通</small></p></div></article>
          <Note no="E–W">秦岭东西绵延。对短途旅行者而言，挑一段可靠线路深走，胜过仓促收集多个山口。</Note>
        </div>
        <div className="green-index">
          <article className="green-feature"><span className="botanical-mark">✦</span><p className="category">水岸 · URBAN WATER</p><h3><LocalName local="曲江池" annotation="雁塔以南的城市水面" /></h3><p>曲江的历史意象与当代公园在此重叠。傍晚绕水步行，能从密集古迹之间切换到更松弛的城市尺度。</p><p className="green-tip">把它安排在大雁塔之后，让夜色自然接管行程。</p></article>
          <article><span className="mini-no">N. 02</span><h3><LocalName local="兴庆宫公园" annotation="唐代宫苑旧址上的日常" /></h3><p>湖面、树荫和晨练者让遗址地名重新成为生活空间，适合观察西安不那么“景点化”的一面。</p></article>
          <article><span className="mini-no">N. 03</span><h3><LocalName local="浐灞河岸" annotation="两河之间的湿地走廊" /></h3><p>浐河与灞河在城市东北部形成开阔水岸。挑一小段散步即可，不必为了距离牺牲老城的从容。</p></article>
        </div>
      </section>

      <section id="sapori" className="chapter chapter-sapori">
        <div className="chapter-heading dark-heading"><p>第三章 · CHAPTER THREE</p><h2><span lang="zh-CN">味道</span><small>FLAVOURS · 碳水江湖</small></h2><span className="page-no">03</span></div>
        <div className="food-spread">
          <figure><img src={theme === "modern" ? "/images/xian-food-modern.png" : "/images/xian-food-vintage.png"} alt={theme === "modern" ? "生成的现代美食摄影风格西安羊肉泡馍、肉夹馍与面食" : "长安复古商业石版画风格的羊肉泡馍、肉夹馍与面食"} /><figcaption><b>图版 III</b><span><i lang="zh-CN">馍与汤</i> · A TABLE OF SHAANXI</span></figcaption></figure>
          <div className="food-intro"><p className="category">入席 · AT THE TABLE</p><h3>馍要掰细，<br />面要扯宽。</h3><p>西安的餐桌很懂得把小麦变出性格：烤过的馍吸饱汤汁，白吉馍夹住腊汁肉，宽面裹上辣子与醋。味道豪爽，工序却一点也不马虎。</p><p className="script-note" lang="zh-CN">汤宽，馍筋，辣子香。</p><small>先少量调味，尝过原汤再决定是否继续加辣加醋。</small></div>
        </div>
        <div className="dish-grid">
          <article className="dish-primary"><span className="dish-no">01</span><p className="category">汤馍 · SOUP</p><h3><LocalName local="牛羊肉泡馍" annotation="亲手掰馍，再交给后厨煮制" /></h3><p>馍块大小决定吸汤程度。慢慢掰得如黄豆大小，是用餐的一部分；汤上桌后从边缘“蚕食”，更能保持馍与汤的层次。</p></article>
          <article><span className="dish-no">02</span><p className="category">馍夹肉 · FLATBREAD</p><h3><LocalName local="腊汁肉夹馍" annotation="白吉馍与软烂肉香" /></h3><p>外壳微酥、内部柔韧的馍夹进剁碎腊汁肉，肥瘦与汤汁比例比“塞得多”更重要。</p></article>
          <article><span className="dish-no">03</span><p className="category">面食 · NOODLES</p><h3><LocalName local="油泼面与裤带面" annotation="热油唤醒辣椒和葱蒜" /></h3><p>宽面承担嚼劲，热油负责香气，醋把厚重收紧。不同馆子各有配菜与面宽，不必执着一种标准答案。</p></article>
          <article className="aperitivo-card xian-night-card"><span className="dish-no">20:30</span><p className="category">夜食 · LOCAL RITUAL</p><h3><LocalName local="回坊慢尝" annotation="清真饮食与街巷烟火" /></h3><p>不要只沿最热闹的一条街直线穿过。尊重清真饮食习惯，分量从小处点起，在支巷里辨认糕点、烤肉与酸甜饮品各自的节奏。</p></article>
        </div>
      </section>

      <section id="itinerario" className="chapter chapter-itinerary">
        <div className="chapter-heading"><p>第四章 · CHAPTER FOUR</p><h2><span lang="zh-CN">行程</span><small>ITINERARY · 48 小时</small></h2><span className="page-no">04</span></div>
        <div className="route-days">
          <article><header><span>第一日</span><b>01</b><small>城墙与长安</small></header><ol><li><time>08:30</time><p><b lang="zh-CN">西安城墙</b><span>从南门读懂古城尺度</span></p></li><li><time>11:00</time><p><b lang="zh-CN">碑林与书院门</b><span>从石刻走进街巷</span></p></li><li><time>14:00</time><p><b lang="zh-CN">陕西历史博物馆</b><span>按预约时段入馆</span></p></li><li><time>18:30</time><p><b lang="zh-CN">大雁塔与曲江</b><span>等天色沉进塔影</span></p></li></ol></article>
          <article><header><span>第二日</span><b>02</b><small>秦陵与烟火</small></header><ol><li><time>08:00</time><p><b lang="zh-CN">前往临潼</b><span>为交通与安检留余量</span></p></li><li><time>09:30</time><p><b lang="zh-CN">兵马俑博物馆</b><span>军阵、细节与修复</span></p></li><li><time>13:30</time><p><b lang="zh-CN">丽山园</b><span>理解陵园完整尺度</span></p></li><li><time>19:00</time><p><b lang="zh-CN">回坊夜食</b><span>用汤馍结束一天</span></p></li></ol></article>
        </div>
        <div className="phrasebook"><div><p className="category">西安话 · LOCAL PHRASES</p><h3 lang="zh-CN">咥一碗，再慢慢逛。</h3><p>“咥”在本地口语里常有痛快吃、尽兴吃的意味。</p></div><dl><div><dt>师傅，城墙咋走？</dt><dd>请问城墙怎么走？</dd></div><div><dt>美得很</dt><dd>很好、很棒</dd></div><div><dt>少放些辣子</dt><dd>少放一点辣椒</dd></div><div><dt>麻烦结账</dt><dd>The bill, please</dd></div></dl></div>
        <div className="practical-grid">
          <div><span>抵达 · ARRIVING</span><h3>高铁 + 飞机</h3><p>西安北站承担大量高铁班次，咸阳机场位于市区西北。落地后按实际车次、航站楼与住宿位置选择轨道交通或正规接驳。</p></div>
          <div><span>移动 · GETTING AROUND</span><h3>地铁 + 步行</h3><p>城内主轴和主要片区可用地铁连接，城墙内适合分段步行。临潼与秦岭方向路程更长，应单独核算往返时间。</p></div>
          <div><span>预约 · BOOKING</span><h3>热门馆提前约</h3><p>秦始皇帝陵博物院、陕西历史博物馆等实行实名预约，政策与开放时间可能变化，只通过官方页面核对和购票。</p></div>
        </div>
      </section>

      <footer>
        <div className="footer-mark">安</div><div><p className="footer-title" lang="zh-CN">长安很远，西安正好。</p><p>愿你带走的不只是朝代与城门，也有掰馍时的一点耐心、登城后的一场风。</p></div>
        <div className="sources"><span>资料来源 · SOURCES</span><a href="https://www.bmy.com.cn/index.html" target="_blank" rel="noreferrer">秦始皇帝陵博物院</a><a href="https://www.sxhm.com/Site/Index/index.html" target="_blank" rel="noreferrer">陕西历史博物馆</a><a href="https://www.chinaxiancitywall.com/" target="_blank" rel="noreferrer">西安城墙</a><a href="https://en.xa.gov.cn/CultureTravel/Attractions/1691691504798126082.html" target="_blank" rel="noreferrer">西安市政府 · 大雁塔</a><a href="https://en.xa.gov.cn/CultureTravel/Attractions/1.html" target="_blank" rel="noreferrer">西安官方文旅信息</a></div>
        <p className="colophon">策划与插画 · CURATED AND ILLUSTRATED · MMXXVI</p>
      </footer>
    </div>
  );
}
