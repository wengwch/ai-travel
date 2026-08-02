function LocalName({ local, zh }: { local: string; zh: string }) {
  return (
    <span className="bilingual-name">
      <span lang="en-GB">{local}</span>
      <small>{zh}</small>
    </span>
  );
}

function Note({ children, no }: { children: React.ReactNode; no: string }) {
  return (
    <aside className="margin-note">
      <span>{no}</span>
      <p>{children}</p>
    </aside>
  );
}

export default function LondonGuide({ theme }: { theme: "vintage" | "modern" }) {
  return (
    <div className="book-pages london-book">
      <header className="masthead">
        <div className="crumb"><span>UNITED KINGDOM</span><i>◆</i><span>ENGLAND</span><i>◆</i><b>LONDON</b></div>
        <p>{theme === "modern" ? "PHOTO EDITION · 现代实景版" : "EDITION FOR CURIOUS TRAVELLERS · 旅行者版本"}</p>
      </header>

      <section id="prologue" className="chapter hero-chapter">
        <div className="hero-title">
          <p className="eyebrow">THE CITY OF FOG, RIVER AND STORIES</p>
          <h2><span lang="en-GB">London</span><small>伦敦</small></h2>
          <p className="hero-subtitle">在雾、河流与故事之间</p>
        </div>

        <figure className="hero-figure">
          <img
            src={theme === "modern" ? "/images/london-westminster-modern.png" : "/images/london-westminster.png"}
            alt={theme === "modern" ? "现代实景摄影风格的伦敦威斯敏斯特与红色双层巴士" : "复古石版画风格的伦敦威斯敏斯特与红色双层巴士"}
          />
          <figcaption>
            <b>图版 I</b>
            <span><i lang="en-GB">Westminster Bridge</i> · 威斯敏斯特桥</span>
            <small>钟楼、河风与红色巴士，把伦敦的时间叠在同一幅街景里。</small>
          </figcaption>
        </figure>

        <div className="prologue-grid">
          <div className="lead-copy">
            <span className="drop-cap">伦</span>
            <p>敦是一座由许多村庄、时代与口音拼成的城市。王室仪典与街头市场只隔几站地铁，罗马城墙的残迹旁升起玻璃高楼，而泰晤士河始终把这些碎片串在一起。</p>
            <p>阅读伦敦，最好跟着河流与街区移动：清晨从威斯敏斯特出发，午后走进博物馆与书店，傍晚越过桥去南岸，最后在一间有木吧台的老酒馆里结束一天。</p>
          </div>
          <blockquote>
            <span>“</span>
            <p lang="en-GB">London is a world by itself, made of a thousand neighbourhoods.</p>
            <small>伦敦自成一个世界，由千百个街区共同写成。</small>
          </blockquote>
          <div className="fact-card">
            <p className="fact-label">AT A GLANCE · 扉页速览</p>
            <dl>
              <div><dt>最佳步调</dt><dd>3—4 日</dd></div>
              <div><dt>城市气质</dt><dd>多元、克制、戏剧性</dd></div>
              <div><dt>适合时节</dt><dd>暮春 / 初秋</dd></div>
              <div><dt>不可错过</dt><dd>沿泰晤士河步行</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section id="cultura" className="chapter chapter-cultura">
        <div className="chapter-heading">
          <p>CHAPTER ONE · 第一章</p>
          <h2><span lang="en-GB">Heritage</span><small>人文 · 城市记忆</small></h2>
          <span className="page-no">01</span>
        </div>

        <article className="feature-duomo">
          <div className="feature-number">I</div>
          <div>
            <p className="category">CEREMONY & TIME · 仪典与时间</p>
            <h3><LocalName local="Westminster" zh="威斯敏斯特" /></h3>
            <p className="standfirst">近一千年的王权、议会与信仰，在泰晤士河北岸共享同一片天际线。</p>
            <div className="columns">
              <p><span lang="en-GB">Palace of Westminster</span>（威斯敏斯特宫）是英国议会所在地。最醒目的钟楼正式名称是 <span lang="en-GB">Elizabeth Tower</span>（伊丽莎白塔）；<span lang="en-GB">Big Ben</span>（大本钟）严格来说指塔内的大钟。</p>
              <p>街对面的 <span lang="en-GB">Westminster Abbey</span>（威斯敏斯特教堂）见证加冕、婚礼与国家纪念仪式。向西步行，可经 <span lang="en-GB">St James’s Park</span>（圣詹姆斯公园）抵达白金汉宫。</p>
            </div>
            <div className="visit-strip">
              <span><b>建议</b> 工作日上午抵达</span>
              <span><b>留时</b> 半日</span>
              <a href="https://www.visitlondon.com/things-to-do/london-areas/westminster" target="_blank" rel="noreferrer">官方指南 ↗</a>
            </div>
          </div>
          <Note no="1066">自征服者威廉以来，英国君主的加冕礼传统上在威斯敏斯特教堂举行。</Note>
        </article>

        <div className="culture-mosaic">
          <article className="art-card last-supper">
            <p className="category">COLLECTION · 收藏</p>
            <span className="art-index">02</span>
            <h3><LocalName local="The British Museum" zh="英国博物馆" /></h3>
            <p>从罗塞塔石碑到帕特农雕塑，这座启蒙时代诞生的博物馆浓缩了人类文明，也不断提醒参观者重新思考收藏、帝国与归还的关系。</p>
            <p className="tip">参观提示：常设展通常免费，热门时段建议提前查看官网并预留入场安排。</p>
            <a href="https://www.britishmuseum.org/visit" target="_blank" rel="noreferrer">BRITISH MUSEUM ↗</a>
          </article>

          <article className="art-card brera-card">
            <p className="category">FORTRESS · 城堡</p>
            <span className="art-index">03</span>
            <h3><LocalName local="Tower of London" zh="伦敦塔" /></h3>
            <p>诺曼征服后的王权堡垒，曾是宫殿、监狱与铸币厂。今日最著名的是王冠珠宝，以及身着传统制服的 <span lang="en-GB">Yeoman Warders</span>（伦敦塔守卫）。</p>
            <p className="route-note">适合路线：Tower Hill → Tower of London → Tower Bridge</p>
          </article>

          <article className="art-card scala-card">
            <p className="category">STAGE · 舞台</p>
            <span className="art-index">04</span>
            <h3><LocalName local="The West End" zh="伦敦西区" /></h3>
            <p>从莎士比亚传统到当代音乐剧，剧院让伦敦的夜晚拥有另一套时间。若没有明确剧目，也值得沿 <span lang="en-GB">Shaftesbury Avenue</span> 看霓虹招牌亮起。</p>
          </article>

          <article className="art-card castle-card">
            <p className="category">CITY · 老城</p>
            <span className="art-index">05</span>
            <h3><LocalName local="St Paul’s Cathedral" zh="圣保罗大教堂" /></h3>
            <p><span lang="en-GB">Christopher Wren</span>（克里斯托弗·雷恩）在伦敦大火后重建的圆顶地标。从教堂越过千禧桥，正对泰特现代美术馆与南岸。</p>
          </article>
        </div>
      </section>

      <section id="natura" className="chapter chapter-natura">
        <div className="chapter-heading">
          <p>CHAPTER TWO · 第二章</p>
          <h2><span lang="en-GB">Nature</span><small>自然 · 城市呼吸</small></h2>
          <span className="page-no">02</span>
        </div>

        <div className="nature-layout">
          <figure className="navigli-figure">
            <img
              src={theme === "modern" ? "/images/london-thames-modern.png" : "/images/london-thames.png"}
              alt={theme === "modern" ? "现代实景摄影风格的泰晤士河与伦敦塔桥蓝调时刻" : "复古版画风格的泰晤士河与伦敦塔桥黄昏"}
            />
            <figcaption><b>图版 II</b><span><i lang="en-GB">The Thames at dusk</i> · 暮色中的泰晤士河</span></figcaption>
          </figure>
          <article className="navigli-copy">
            <p className="category">THE RIVER · 河流</p>
            <h3><LocalName local="The River Thames" zh="泰晤士河" /></h3>
            <p className="standfirst">伦敦的历史不是沿道路展开，而是沿潮汐展开：码头、桥梁、市场与剧院都把正面朝向这条河。</p>
            <p>从 <span lang="en-GB">Westminster Bridge</span> 步行至 <span lang="en-GB">Tower Bridge</span>，南岸串联伦敦眼、国家剧院、泰特现代美术馆、莎士比亚环球剧场与博罗市场。</p>
            <div className="time-note"><span>17:30</span><p><b lang="en-GB">Riverside walk</b><small>傍晚沿河步行的理想时刻</small></p></div>
          </article>
          <Note no="346 KM">泰晤士河全长约 346 公里，伦敦段仍受北海潮汐影响。</Note>
        </div>

        <div className="green-index">
          <article className="green-feature">
            <span className="botanical-mark">✦</span>
            <p className="category">ROYAL PARK · 皇家公园</p>
            <h3><LocalName local="Hyde Park" zh="海德公园" /></h3>
            <p>从蛇形湖到演说角，这片广阔绿地既有王室园林的秩序，也保留城市公共生活的开放感。可与肯辛顿花园串成半日步行。</p>
            <p className="green-tip">从 <i lang="en-GB">Marble Arch</i> 进入，沿蛇形湖走向肯辛顿宫。</p>
          </article>
          <article>
            <span className="mini-no">N. 02</span>
            <h3><LocalName local="St James’s Park" zh="圣詹姆斯公园" /></h3>
            <p>白金汉宫与威斯敏斯特之间的绿色缓冲带。湖畔视野开阔，也是看礼仪大道与水鸟的好地方。</p>
          </article>
          <article>
            <span className="mini-no">N. 03</span>
            <h3><LocalName local="Richmond Park" zh="里士满公园" /></h3>
            <p>远离中心区的古老鹿园，以开阔草地、橡树与野生鹿群闻名。观赏动物时应保持距离，不投喂、不靠近。</p>
          </article>
        </div>
      </section>

      <section id="sapori" className="chapter chapter-sapori">
        <div className="chapter-heading dark-heading">
          <p>CHAPTER THREE · 第三章</p>
          <h2><span lang="en-GB">Flavours</span><small>美食 · 英伦餐桌</small></h2>
          <span className="page-no">03</span>
        </div>

        <div className="food-spread">
          <figure>
            <img
              src={theme === "modern" ? "/images/london-table-modern.png" : "/images/london-table.png"}
              alt={theme === "modern" ? "炸鱼薯条、周日烤肉与下午茶的现代实景美食摄影" : "炸鱼薯条、英式肉派和下午茶的复古美食插画"}
            />
            <figcaption><b>图版 III</b><span><i lang="en-GB">A London table</i> · 伦敦人的餐桌</span></figcaption>
          </figure>
          <div className="food-intro">
            <p className="category">AT THE TABLE · 入席</p>
            <h3>酥脆、温热，<br />以及下午四点。</h3>
            <p>伦敦不是一种菜系，而是一张世界地图。传统英式餐桌提供安稳底色，移民社区则让咖喱、点心、烤肉与面包进入城市日常。真正的伦敦味道，往往藏在市场和街区里。</p>
            <p className="script-note" lang="en-GB">Lovely!</p>
            <small>“真不错！” · 英式日常赞叹</small>
          </div>
        </div>

        <div className="dish-grid">
          <article className="dish-primary">
            <span className="dish-no">01</span>
            <p className="category">CLASSIC · 经典</p>
            <h3><LocalName local="Fish and chips" zh="炸鱼薯条" /></h3>
            <p>白肉鱼裹面糊炸至酥脆，配粗薯条、麦芽醋和豌豆泥。海边小店与伦敦老字号各有风格，最好趁热吃。</p>
          </article>
          <article>
            <span className="dish-no">02</span>
            <p className="category">SUNDAY · 星期日</p>
            <h3><LocalName local="Sunday roast" zh="周日烤肉" /></h3>
            <p>烤肉、约克郡布丁、烤蔬菜与肉汁组成周末仪式。热门酒馆通常需要预约。</p>
          </article>
          <article>
            <span className="dish-no">03</span>
            <p className="category">TEA · 茶点</p>
            <h3><LocalName local="Afternoon tea" zh="英式下午茶" /></h3>
            <p>三明治、司康、凝脂奶油与甜点按层摆放。它更像一段被正式留出的下午，而不只是饮品。</p>
          </article>
          <article className="aperitivo-card london-pub-card">
            <span className="dish-no">17:00</span>
            <p className="category">LOCAL RITUAL · 城市仪式</p>
            <h3><LocalName local="The pub" zh="英式酒馆" /></h3>
            <p>伦敦酒馆是客厅、餐厅与社区公告栏的结合。点一品脱本地艾尔或无酒精饮品，找一处靠窗座位，听城市从下班时刻慢慢进入夜晚。</p>
          </article>
        </div>
      </section>

      <section id="itinerario" className="chapter chapter-itinerary">
        <div className="chapter-heading">
          <p>CHAPTER FOUR · 第四章</p>
          <h2><span lang="en-GB">Itinerary</span><small>行程 · 48 小时</small></h2>
          <span className="page-no">04</span>
        </div>

        <div className="route-days">
          <article>
            <header><span>DAY</span><b>01</b><small>王城与西区</small></header>
            <ol>
              <li><time>08:30</time><p><b lang="en-GB">Westminster</b><span>议会大厦与教堂</span></p></li>
              <li><time>11:30</time><p><b lang="en-GB">St James’s & Buckingham Palace</b><span>皇家公园与白金汉宫</span></p></li>
              <li><time>14:00</time><p><b lang="en-GB">The British Museum</b><span>英国博物馆</span></p></li>
              <li><time>19:00</time><p><b lang="en-GB">The West End</b><span>西区剧院或苏活区</span></p></li>
            </ol>
          </article>
          <article>
            <header><span>DAY</span><b>02</b><small>老城与河岸</small></header>
            <ol>
              <li><time>09:00</time><p><b lang="en-GB">Tower of London</b><span>伦敦塔</span></p></li>
              <li><time>11:30</time><p><b lang="en-GB">Tower Bridge</b><span>塔桥</span></p></li>
              <li><time>13:00</time><p><b lang="en-GB">Borough Market</b><span>博罗市场午餐</span></p></li>
              <li><time>15:30</time><p><b lang="en-GB">South Bank walk</b><span>泰特现代至威斯敏斯特</span></p></li>
            </ol>
          </article>
        </div>

        <div className="phrasebook">
          <div>
            <p className="category">POCKET PHRASES · 袖珍会话</p>
            <h3 lang="en-GB">Could you say that again, please?</h3>
            <p>可以请你再说一遍吗？</p>
          </div>
          <dl>
            <div><dt lang="en-GB">Morning!</dt><dd>早上好</dd></div>
            <div><dt lang="en-GB">A return ticket, please</dt><dd>请给我一张往返票</dd></div>
            <div><dt lang="en-GB">Which platform is it?</dt><dd>是哪个站台？</dd></div>
            <div><dt lang="en-GB">Could we have the bill?</dt><dd>请结账</dd></div>
          </dl>
        </div>

        <div className="practical-grid">
          <div><span>ARRIVING</span><h3>抵达</h3><p><b lang="en-GB">Heathrow</b> 可通过 <b lang="en-GB">Elizabeth line</b> 或地铁进入市区；不同线路在时间、票价与行李空间上各有取舍。</p></div>
          <div><span>GETTING AROUND</span><h3>移动</h3><p>地铁、公交与步行组合最实用。刷卡规则与封顶票价可能调整，出发前查看 <a href="https://tfl.gov.uk/" target="_blank" rel="noreferrer">Transport for London ↗</a>。</p></div>
          <div><span>BOOKING</span><h3>预约</h3><p>热门剧目、伦敦塔与正式下午茶建议预订；大型博物馆虽常设展免费，也应查看当日入场安排。</p></div>
        </div>
      </section>

      <footer>
        <div className="footer-mark">L</div>
        <div>
          <p className="footer-title" lang="en-GB">Until next time, London.</p>
          <p>愿你记住的不只是钟声，也有雨后石板路与河面的颜色。</p>
        </div>
        <div className="sources">
          <span>SOURCES · 资料来源</span>
          <a href="https://www.visitlondon.com/" target="_blank" rel="noreferrer">Visit London</a>
          <a href="https://www.britishmuseum.org/" target="_blank" rel="noreferrer">British Museum</a>
          <a href="https://www.royalparks.org.uk/" target="_blank" rel="noreferrer">The Royal Parks</a>
          <a href="https://tfl.gov.uk/" target="_blank" rel="noreferrer">TfL</a>
        </div>
        <p className="colophon">CURATED AND ILLUSTRATED · MMXXVI</p>
      </footer>
    </div>
  );
}
