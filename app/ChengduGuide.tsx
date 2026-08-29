function LocalName({ local, annotation }: { local: string; annotation: string }) {
  return <span className="bilingual-name"><span lang="zh-CN">{local}</span><small>{annotation}</small></span>;
}

function Note({ children, no }: { children: React.ReactNode; no: string }) {
  return <aside className="margin-note"><span>{no}</span><p>{children}</p></aside>;
}

export default function ChengduGuide({ theme }: { theme: "vintage" | "modern" }) {
  return (
    <div className="book-pages chengdu-book">
      <header className="masthead"><div className="crumb"><span>中国</span><i>◆</i><span>西南</span><i>◆</i><b>成都</b></div><p>{theme === "modern" ? "PHOTO EDITION · 现代影像版" : "旅行者版本 · VINTAGE EDITION"}</p></header>

      <section id="prologue" className="chapter hero-chapter">
        <div className="hero-title"><p className="eyebrow">竹影醒得早，茶馆把午后留得很长</p><h2><span lang="zh-CN">成都</span><small>CHENGDU</small></h2><p className="hero-subtitle">先看竹影醒来，再去茶馆等一场闲谈</p></div>
        <figure className="hero-figure"><img src={theme === "modern" ? "/images/chengdu-hero-modern.png" : "/images/chengdu-hero-vintage.png"} alt={theme === "modern" ? "生成的现代旅行摄影风格成都大熊猫与竹林栖息地" : "蜀地复古旅行画风格的成都大熊猫、竹林与城市景致"} /><figcaption><b>图版 I</b><span><i lang="zh-CN">竹林清晨</i> · MORNING IN CHENGDU</span><small>看熊猫要趁早，理解成都却可以慢一点。</small></figcaption></figure>
        <div className="prologue-grid">
          <div className="lead-copy"><span className="drop-cap">成</span><p>都把“安逸”经营得很有层次：熊猫基地的清晨轻声细语，人民公园的午后杯盖叮当，火锅店入夜才真正沸腾。慢并不意味着空白，而是让每件事都有自己的火候。</p><p>城市之外，都江堰把岷江分成可以灌溉成都平原的水脉，青城山则用苔痕、石阶和道观收起喧闹。两千多年的水利智慧与一杯盖碗茶并存，正是成都最迷人的反差。</p></div>
          <blockquote><span>“</span><p lang="zh-CN">成都不催人赶路，它只负责把日子煮开。</p><small>Chengdu never hurries you; it simply brings the day to a simmer.</small></blockquote>
          <div className="fact-card"><p className="fact-label">扉页速览 · AT A GLANCE</p><dl><div><dt>最佳步调</dt><dd>3—5 日</dd></div><div><dt>城市气质</dt><dd>松弛、热辣、灵动</dd></div><div><dt>适合时节</dt><dd>春季 / 秋季</dd></div><div><dt>不可错过</dt><dd>茶馆坐一下午</dd></div></dl></div>
        </div>
      </section>

      <section id="cultura" className="chapter chapter-cultura">
        <div className="chapter-heading"><p>第一章 · CHAPTER ONE</p><h2><span lang="zh-CN">人文</span><small>HERITAGE · 蜀地日常</small></h2><span className="page-no">01</span></div>
        <article className="feature-duomo">
          <div className="feature-number">壹</div>
          <div><p className="category">物种保护 · CONSERVATION</p><h3><LocalName local="成都大熊猫繁育研究基地" annotation="竹林里的保育课堂 · CHENGDU RESEARCH BASE OF GIANT PANDA BREEDING" /></h3><p className="standfirst">真正动人的不只是圆滚滚的身影，也有兽舍、科研、繁育与公众教育共同组成的保护网络。</p><div className="columns"><p>大熊猫在凉爽时通常更活跃，清晨入园也更容易避开人流与午后高温。沿官方开放路线安静观察，不敲玻璃、不投喂，也不要为了拍照长时间堵住通道。</p><p>基地实行实名预约，园区范围和参观规则会随季节调整。高温天气下，动物可能转入室内活动；是否露面由它们的状态决定，而不是一张门票的承诺。</p></div><div className="visit-strip"><span><b>建议</b> 预约早间时段</span><span><b>留时</b> 3—4 小时</span><a href="https://www.panda.org.cn/en/" target="_blank" rel="noreferrer">基地官网 ↗</a></div></div>
          <Note no="EARLY">熊猫先行：先走较远的核心场馆，再按体力折返；出发前以官方地图与当天公告为准。</Note>
        </article>
        <div className="culture-mosaic">
          <article className="art-card last-supper"><p className="category">三国 · THREE KINGDOMS</p><span className="art-index">02</span><h3><LocalName local="武侯祠" annotation="君臣合祀与蜀汉记忆" /></h3><p>祠庙、碑刻与柏木把三国叙事安放进一组层层推进的院落。与其只寻找熟悉人物，不如观察后世如何不断重述忠义、治蜀与地方认同。</p></article>
          <article className="art-card brera-card"><p className="category">考古 · ARCHAEOLOGY</p><span className="art-index">03</span><h3><LocalName local="金沙遗址博物馆" annotation="太阳神鸟与古蜀想象" /></h3><p>遗迹馆保留发掘现场，陈列馆则以金器、玉器和象牙展开古蜀文明。它让成都的城市史远远越过街巷与茶馆，抵达更早的时间层。</p></article>
          <article className="art-card scala-card"><p className="category">舞台 · PERFORMANCE</p><span className="art-index">04</span><h3><LocalName local="川剧" annotation="锣鼓、唱腔与变脸技艺" /></h3><p>变脸只是川剧的一扇门。选一场包含折子戏、唱腔与器乐的演出，比只看几分钟技巧展示更能理解完整舞台传统。</p></article>
          <article className="art-card castle-card chengdu-alley-card"><p className="category">街巷 · ALLEYS</p><span className="art-index">05</span><h3><LocalName local="宽窄巷子之外" annotation="从展示街区走向社区日常" /></h3><p>宽窄巷子适合读建筑尺度，却不是老成都的全部。向周边多走几条街，菜市、社区小店和树荫下的牌局更接近城市自己的语速。</p></article>
        </div>
      </section>

      <section id="natura" className="chapter chapter-natura">
        <div className="chapter-heading"><p>第二章 · CHAPTER TWO</p><h2><span lang="zh-CN">山水</span><small>NATURE · 水润天府</small></h2><span className="page-no">02</span></div>
        <div className="nature-layout">
          <figure className="navigli-figure"><img src={theme === "modern" ? "/images/chengdu-nature-modern.png" : "/images/chengdu-nature-vintage.png"} alt={theme === "modern" ? "生成的现代旅行摄影风格都江堰水利工程、岷江与远山" : "蜀地复古旅行画风格的都江堰水利工程、江流与青城山"} /><figcaption><b>图版 II</b><span><i lang="zh-CN">岷江分水</i> · DUJIANGYAN</span></figcaption></figure>
          <article className="navigli-copy"><p className="category">水利 · WATER ENGINEERING</p><h3><LocalName local="都江堰" annotation="鱼嘴、飞沙堰与宝瓶口" /></h3><p className="standfirst">它没有用一道大坝截住岷江，而是顺着水势分流、排沙、控制流量，至今仍润泽成都平原。</p><p>从高处看水系关系，再走近关键工程，才能把课本里的名字变成立体逻辑。联合国教科文组织将都江堰与青城山共同列入世界遗产；山水、工程与道教文化适合用一整天连接。</p><div className="time-note"><span>FULL DAY</span><p><b lang="zh-CN">水与山同游</b><small>都江堰半日，青城山按体力取舍</small></p></div></article>
          <Note no="256 BC">都江堰肇建于公元前 3 世纪，工程体系持续发挥作用。现场水边湿滑，雨季尤其注意安全。</Note>
        </div>
        <div className="green-index">
          <article className="green-feature"><span className="botanical-mark">✦</span><p className="category">山林 · MOUNTAIN</p><h3><LocalName local="青城山" annotation="道观、石阶与常绿林" /></h3><p>前山以道教文化与古建筑为主，山路湿润幽深。不要把它压缩成赶场式“打卡”，雾气、石阶和林间声音本就是游览内容。</p><p className="green-tip">穿防滑鞋，并按天气与开放公告决定路线。</p></article>
          <article><span className="mini-no">N. 02</span><h3><LocalName local="人民公园" annotation="鹤鸣茶社与城市会客厅" /></h3><p>这里的自然不是荒野，而是树荫、茶桌、舞步和聊天共同构成的公共生活。空出至少两小时，才能坐出一点成都。</p></article>
          <article><span className="mini-no">N. 03</span><h3><LocalName local="望江楼公园" annotation="竹影与薛涛记忆" /></h3><p>各类竹子围绕锦江生长，园林也保存了与唐代女诗人薛涛相关的文化记忆，适合一个安静清晨。</p></article>
        </div>
      </section>

      <section id="sapori" className="chapter chapter-sapori">
        <div className="chapter-heading dark-heading"><p>第三章 · CHAPTER THREE</p><h2><span lang="zh-CN">味道</span><small>FLAVOURS · 麻辣之外</small></h2><span className="page-no">03</span></div>
        <div className="food-spread">
          <figure><img src={theme === "modern" ? "/images/chengdu-food-modern.png" : "/images/chengdu-food-vintage.png"} alt={theme === "modern" ? "生成的现代美食摄影风格成都鸳鸯火锅、麻婆豆腐与担担面" : "蜀地复古商业画风格的成都火锅、麻婆豆腐与担担面"} /><figcaption><b>图版 III</b><span><i lang="zh-CN">红汤开席</i> · A SICHUAN TABLE</span></figcaption></figure>
          <div className="food-intro"><p className="category">入席 · AT THE TABLE</p><h3>麻要有香，<br />辣要有层次。</h3><p>成都味道并非只追求刺激。花椒带来清亮麻香，豆瓣酱铺出发酵深度，红油、醋与蒜泥各自收束口感。凉菜、汤菜和甜味小吃穿插其间，才是一张完整餐桌。</p><p className="script-note" lang="zh-CN">锅开了，日子也热起来。</p><small>不确定辣度时先点微辣或鸳鸯锅，再按口味加蘸料。</small></div>
        </div>
        <div className="dish-grid">
          <article className="dish-primary"><span className="dish-no">01</span><p className="category">火锅 · HOTPOT</p><h3><LocalName local="成都火锅" annotation="牛油、花椒与翻滚红汤" /></h3><p>毛肚、黄喉等脆嫩食材讲究短时间涮煮，根茎与豆制品则要耐心。先确认锅底辣度和计价方式，生熟夹也应分开。</p></article>
          <article><span className="dish-no">02</span><p className="category">家常 · HOME-STYLE</p><h3><LocalName local="麻婆豆腐" annotation="麻、辣、烫、香与酥" /></h3><p>嫩豆腐承担热度，牛肉末和豆瓣酱提供厚度，花椒面最后抬起香气。它是下饭菜，也是一堂关于平衡的课。</p></article>
          <article><span className="dish-no">03</span><p className="category">小吃 · NOODLES</p><h3><LocalName local="担担面" annotation="小碗拌面，一口一层香" /></h3><p>面量不必大，芽菜、肉臊、红油与花椒的比例才决定个性。把它当作小吃，胃口还能留给钟水饺或甜水面。</p></article>
          <article className="aperitivo-card chengdu-tea-card"><span className="dish-no">14:30</span><p className="category">茶馆 · LOCAL RITUAL</p><h3><LocalName local="盖碗茶" annotation="茶盖、茶碗与一把竹椅" /></h3><p>茶盖既能拨叶，也能帮茶水散热。点一碗茶后不必急着安排“项目”，听邻桌聊天、看树影移动，就是这项仪式的正文。</p></article>
        </div>
      </section>

      <section id="itinerario" className="chapter chapter-itinerary">
        <div className="chapter-heading"><p>第四章 · CHAPTER FOUR</p><h2><span lang="zh-CN">行程</span><small>ITINERARY · 48 小时</small></h2><span className="page-no">04</span></div>
        <div className="route-days">
          <article><header><span>第一日</span><b>01</b><small>熊猫与茶碗</small></header><ol><li><time>07:30</time><p><b lang="zh-CN">熊猫基地</b><span>趁清晨观察活动状态</span></p></li><li><time>12:30</time><p><b lang="zh-CN">城市小吃</b><span>担担面配一两样小吃</span></p></li><li><time>14:30</time><p><b lang="zh-CN">人民公园</b><span>在茶馆坐满一个下午</span></p></li><li><time>19:00</time><p><b lang="zh-CN">成都火锅</b><span>让红汤把夜晚煮开</span></p></li></ol></article>
          <article><header><span>第二日</span><b>02</b><small>岷江与青城</small></header><ol><li><time>07:30</time><p><b lang="zh-CN">前往都江堰</b><span>按交通班次提早出发</span></p></li><li><time>09:30</time><p><b lang="zh-CN">都江堰水利工程</b><span>从高处读懂分水逻辑</span></p></li><li><time>13:30</time><p><b lang="zh-CN">青城山</b><span>按天气与体力选择路线</span></p></li><li><time>19:30</time><p><b lang="zh-CN">回城吃川菜</b><span>用麻婆豆腐收尾</span></p></li></ol></article>
        </div>
        <div className="phrasebook"><div><p className="category">成都话 · LOCAL PHRASES</p><h3 lang="zh-CN">巴适得板，慢慢耍。</h3><p>“巴适”表示舒服、合意；“耍”在四川话里常指玩、逛。</p></div><dl><div><dt>好多钱？</dt><dd>多少钱？ · How much?</dd></div><div><dt>要得</dt><dd>好的、可以</dd></div><div><dt>少放点海椒</dt><dd>少放一点辣椒</dd></div><div><dt>不忙</dt><dd>不用急 / 没关系</dd></div></dl></div>
        <div className="practical-grid">
          <div><span>抵达 · ARRIVING</span><h3>双机场 + 高铁</h3><p>天府、双流两座机场服务不同航班，成都东站承担大量高铁班次。订票时先看清抵达点，再计算进城时间。</p></div>
          <div><span>移动 · GETTING AROUND</span><h3>地铁 + 步行</h3><p>市区主要片区适合地铁连接，老街与公园用步行补足。都江堰、青城山需结合铁路或正规接驳单独规划。</p></div>
          <div><span>预约 · BOOKING</span><h3>熊猫基地先预约</h3><p>基地实行实名预约，开放区域、入园时段与动物活动情况都会变化；以<a href="https://www.panda.org.cn/en/service/ticket/" target="_blank" rel="noreferrer">官方票务页 ↗</a>为准。</p></div>
        </div>
      </section>

      <footer>
        <div className="footer-mark">蓉</div><div><p className="footer-title" lang="zh-CN">成都，茶还没有凉。</p><p>愿你记住的不只是一只熊猫和一口红汤，也有水穿过古堰的声音、竹椅留住的午后。</p></div>
        <div className="sources"><span>资料来源 · SOURCES</span><a href="https://www.panda.org.cn/en/" target="_blank" rel="noreferrer">成都大熊猫繁育研究基地</a><a href="https://www.panda.org.cn/en/service/notice/" target="_blank" rel="noreferrer">熊猫基地参观须知</a><a href="https://whc.unesco.org/en/list/1001" target="_blank" rel="noreferrer">UNESCO · 青城山与都江堰</a><a href="https://www.sxd.cn/index.asp" target="_blank" rel="noreferrer">三星堆博物馆</a><a href="https://www.gochengdu.cn/en/news/visitor" target="_blank" rel="noreferrer">GoChengdu 旅行信息</a></div>
        <p className="colophon">策划与插画 · CURATED AND ILLUSTRATED · MMXXVI</p>
      </footer>
    </div>
  );
}
