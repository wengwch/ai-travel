function LocalName({ local, annotation }: { local: string; annotation: string }) {
  return (
    <span className="bilingual-name">
      <span lang="zh-CN">{local}</span>
      <small>{annotation}</small>
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

export default function BeijingGuide({ theme }: { theme: "vintage" | "modern" }) {
  return (
    <div className="book-pages beijing-book">
      <header className="masthead">
        <div className="crumb"><span>中国</span><i>◆</i><span>华北</span><i>◆</i><b>北京</b></div>
        <p>{theme === "modern" ? "PHOTO EDITION · 现代影像版" : "旅行者版本 · VINTAGE EDITION"}</p>
      </header>

      <section id="prologue" className="chapter hero-chapter">
        <div className="hero-title">
          <p className="eyebrow">一条中轴，半部中国城市史</p>
          <h2><span lang="zh-CN">北京</span><small>BEIJING</small></h2>
          <p className="hero-subtitle">城门打开历史，胡同接住日常</p>
        </div>

        <figure className="hero-figure">
          <img
            src={theme === "modern" ? "/images/beijing-hero-modern.png" : "/images/beijing-hero-vintage.png"}
            alt={theme === "modern" ? "生成的现代实景摄影风格故宫太和门与宫殿中轴线" : "复古旅行石版画风格的故宫太和门与宫殿中轴线"}
          />
          <figcaption>
            <b>图版 I</b>
            <span><i lang="zh-CN">紫禁城中轴</i> · THE IMPERIAL AXIS</span>
            <small>红墙、金瓦与层层院落，把一座都城的秩序推向北方天际。</small>
          </figcaption>
        </figure>

        <div className="prologue-grid">
          <div className="lead-copy">
            <span className="drop-cap">北</span>
            <p>京的尺度常让初来者误判距离：地图上相邻的两座门，可能隔着一段漫长城墙；一条笔直中轴，又能把祭坛、宫城、市井与钟鼓楼收进同一套秩序。</p>
            <p>游北京像调焦：清晨在故宫把镜头拉远，看宫殿沿中轴层层铺开；午后转进胡同贴近灰砖门楼；傍晚登景山或散步什刹海，让院墙树影与饭馆烟火重新填满画面。</p>
          </div>
          <blockquote>
            <span>“</span>
            <p lang="zh-CN">北京要慢慢走：先看见它的轴线，再听见院子里的风。</p>
            <small>Walk slowly: first see the axis, then hear the wind inside the courtyards.</small>
          </blockquote>
          <div className="fact-card">
            <p className="fact-label">扉页速览 · AT A GLANCE</p>
            <dl>
              <div><dt>最佳步调</dt><dd>3—4 日</dd></div>
              <div><dt>城市气质</dt><dd>恢宏、沉静、鲜活</dd></div>
              <div><dt>适合时节</dt><dd>春末 / 金秋</dd></div>
              <div><dt>不可错过</dt><dd>从中轴读老城</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section id="cultura" className="chapter chapter-cultura">
        <div className="chapter-heading">
          <p>第一章 · CHAPTER ONE</p>
          <h2><span lang="zh-CN">人文</span><small>HERITAGE · 城市记忆</small></h2>
          <span className="page-no">01</span>
        </div>

        <article className="feature-duomo">
          <div className="feature-number">壹</div>
          <div>
            <p className="category">宫城 · IMPERIAL PALACE</p>
            <h3><LocalName local="故宫博物院" annotation="紫禁城 · THE PALACE MUSEUM" /></h3>
            <p className="standfirst">一座沿南北轴线铺开的宫城，也是一部由院落、门与屋顶写成的礼制史。</p>
            <div className="columns">
              <p>紫禁城始建于明永乐年间，宫殿群以太和殿为礼仪核心，红墙与黄色琉璃瓦构成最鲜明的视觉秩序。真正值得留意的不只是宏伟殿宇，还有檐角脊兽、门钉、石雕与庭院比例。</p>
              <p>参观实行由南向北的单向路线：从午门进入，经外朝与内廷，最后由神武门或东华门离开。热门展馆与特展可能另需预约，路线应为脚力和停留兴趣留出余地。</p>
            </div>
            <div className="visit-strip">
              <span><b>建议</b> 预约最早时段</span>
              <span><b>留时</b> 4—6 小时</span>
              <a href="https://www.dpm.org.cn/Visit.html" target="_blank" rel="noreferrer">故宫官方导览 ↗</a>
            </div>
          </div>
          <Note no="1420">明代北京宫城与都城核心格局在永乐年间完成，之后历经明清两代沿用与修缮。</Note>
        </article>

        <div className="culture-mosaic">
          <article className="art-card last-supper">
            <p className="category">祭天 · RITUAL</p>
            <span className="art-index">02</span>
            <h3><LocalName local="天坛" annotation="祈年殿与圜丘 · TEMPLE OF HEAVEN" /></h3>
            <p>建于明永乐年间的祭天建筑群，以圜丘、皇穹宇和祈年殿组织出圆与方、天与地的象征关系。清晨入园，先看市民锻炼的松柏林，再走向蓝瓦重檐的祈年殿。</p>
            <p className="tip">参观提示：公园大门与坛内景点开放安排不同，季节与节假日也可能调整。</p>
            <a href="https://www.tiantanpark.cn/" target="_blank" rel="noreferrer">天坛公园官网 ↗</a>
          </article>

          <article className="art-card brera-card">
            <p className="category">街巷 · NEIGHBOURHOOD</p>
            <span className="art-index">03</span>
            <h3><LocalName local="胡同与四合院" annotation="老城生活 · HUTONGS" /></h3>
            <p>胡同不是单一景点，而是老城街巷肌理。与其追逐“最网红”的一条，不如从鼓楼向东或向西缓慢步行，留意门墩、影壁、树冠与仍在使用的社区空间。</p>
            <p className="route-note">建议路线：钟鼓楼 → 烟袋斜街 → 什刹海 → 恭王府一带</p>
          </article>

          <article className="art-card scala-card">
            <p className="category">轴线 · URBAN ORDER</p>
            <span className="art-index">04</span>
            <h3><LocalName local="北京中轴线" annotation="理想都城秩序 · CENTRAL AXIS" /></h3>
            <p>从永定门向北延伸至钟鼓楼，祭祀、宫殿、园林、城门与公共建筑沿轴线展开。它在 2024 年列入《世界遗产名录》，仍是理解北京城市结构最清楚的一条线索。</p>
          </article>

          <article className="art-card castle-card beijing-axis-card">
            <p className="category">登高 · OVERLOOK</p>
            <span className="art-index">05</span>
            <h3><LocalName local="景山公园" annotation="万春亭 · JINGSHAN PARK" /></h3>
            <p>神武门外的一座城市山丘，把故宫屋顶与老城轴线收进同一视野。晴朗傍晚登万春亭，能直观看见紫禁城如何嵌入北京的城市肌理。</p>
          </article>
        </div>
      </section>

      <section id="natura" className="chapter chapter-natura">
        <div className="chapter-heading">
          <p>第二章 · CHAPTER TWO</p>
          <h2><span lang="zh-CN">山水</span><small>NATURE · 城市呼吸</small></h2>
          <span className="page-no">02</span>
        </div>

        <div className="nature-layout">
          <figure className="navigli-figure">
            <img
              src={theme === "modern" ? "/images/beijing-nature-modern.png" : "/images/beijing-nature-vintage.png"}
              alt={theme === "modern" ? "生成的现代实景摄影风格颐和园昆明湖、十七孔桥与万寿山" : "复古旅行石版画风格的颐和园昆明湖、十七孔桥与万寿山"}
            />
            <figcaption><b>图版 II</b><span><i lang="zh-CN">昆明湖秋光</i> · KUNMING LAKE</span></figcaption>
          </figure>
          <article className="navigli-copy">
            <p className="category">皇家园林 · IMPERIAL GARDEN</p>
            <h3><LocalName local="颐和园" annotation="昆明湖与万寿山 · SUMMER PALACE" /></h3>
            <p className="standfirst">北京最舒展的水面，把北方山林的尺度与江南园林的借景方法放在一起。</p>
            <p>颐和园以万寿山与昆明湖为骨架。长廊、佛香阁、十七孔桥和西堤各有节奏；若只追逐建筑会很累，不妨把半天留给湖岸步行，在开阔水面与密集殿宇之间换气。</p>
            <div className="time-note"><span>16:30</span><p><b lang="zh-CN">西堤慢行</b><small>看湖面由银白转为暖金</small></p></div>
          </article>
          <Note no="3/4">颐和园约四分之三的面积为水面，昆明湖决定了整座园林的视野与步调。</Note>
        </div>

        <div className="green-index">
          <article className="green-feature">
            <span className="botanical-mark">✦</span>
            <p className="category">湖园 · LAKESIDE PARK</p>
            <h3><LocalName local="北海公园" annotation="白塔与琼华岛 · BEIHAI PARK" /></h3>
            <p>北京保存最完整的古代皇家园林之一。白塔、琼华岛与湖岸柳树构成紧凑的山水画面，也适合与景山、故宫北门串成一天的尾声。</p>
            <p className="green-tip">从东门入园，绕琼华岛后向北岸散步，避开匆忙打卡的节奏。</p>
          </article>
          <article>
            <span className="mini-no">N. 02</span>
            <h3><LocalName local="什刹海" annotation="前海、后海与西海" /></h3>
            <p>三片相连水域嵌在胡同之间。清晨适合看居民散步，傍晚则可沿银锭桥与后海北沿慢走。</p>
          </article>
          <article>
            <span className="mini-no">N. 03</span>
            <h3><LocalName local="奥林匹克森林公园" annotation="城市北部绿肺" /></h3>
            <p>从古都轴线向北延伸出的现代公共绿地，湖泊、湿地与跑步路径提供另一种观看北京尺度的方式。</p>
          </article>
        </div>
      </section>

      <section id="sapori" className="chapter chapter-sapori">
        <div className="chapter-heading dark-heading">
          <p>第三章 · CHAPTER THREE</p>
          <h2><span lang="zh-CN">味道</span><small>FLAVOURS · 北京餐桌</small></h2>
          <span className="page-no">03</span>
        </div>

        <div className="food-spread">
          <figure>
            <img
              src={theme === "modern" ? "/images/beijing-food-modern.png" : "/images/beijing-food-vintage.png"}
              alt={theme === "modern" ? "生成的现代美食摄影风格北京烤鸭、炸酱面与传统小吃餐桌" : "复古商业石版画风格的北京烤鸭、炸酱面与传统小吃餐桌"}
            />
            <figcaption><b>图版 III</b><span><i lang="zh-CN">北京席面</i> · A BEIJING TABLE</span></figcaption>
          </figure>
          <div className="food-intro">
            <p className="category">入席 · AT THE TABLE</p>
            <h3>酥、香、热，<br />还有一口蒜。</h3>
            <p>北京味道既有宴席的讲究，也有胡同小馆的直接。烤鸭讲刀工与火候，炸酱面靠菜码调节浓淡，铜锅涮肉则让一桌人在滚汤与麻酱之间共享节奏。</p>
            <p className="script-note" lang="zh-CN">您吃了吗？</p>
            <small>旧日北京常见的日常问候，也把关心落在一顿饭上。</small>
          </div>
        </div>

        <div className="dish-grid">
          <article className="dish-primary">
            <span className="dish-no">01</span>
            <p className="category">名菜 · SIGNATURE</p>
            <h3><LocalName local="北京烤鸭" annotation="薄饼、葱丝与甜面酱" /></h3>
            <p>片好的鸭皮要酥而不硬，鸭肉保持汁水，以薄饼卷葱丝、黄瓜与甜面酱。完整体验通常包括现场片鸭，人数少时先确认份量。</p>
          </article>
          <article>
            <span className="dish-no">02</span>
            <p className="category">家常 · EVERYDAY</p>
            <h3><LocalName local="老北京炸酱面" annotation="菜码与酱香" /></h3>
            <p>面条拌入肉丁炸酱，再按喜好加入黄瓜、豆芽、萝卜等菜码。每家酱的咸甜与油润程度都不同。</p>
          </article>
          <article>
            <span className="dish-no">03</span>
            <p className="category">冬日 · WINTER TABLE</p>
            <h3><LocalName local="铜锅涮肉" annotation="清汤、羊肉与麻酱" /></h3>
            <p>炭火铜锅里的清汤不抢味，薄切羊肉快速涮熟，再蘸芝麻酱。冬夜里，蒸汽本身就是餐桌气氛的一部分。</p>
          </article>
          <article className="aperitivo-card beijing-breakfast-card">
            <span className="dish-no">07:00</span>
            <p className="category">早食 · LOCAL RITUAL</p>
            <h3><LocalName local="豆汁儿与焦圈" annotation="老北京早餐" /></h3>
            <p>豆汁儿带有鲜明的发酵酸香，并非人人第一次都能习惯。配焦圈与咸菜丝慢慢尝，比把它当成“挑战”更接近本地早餐的日常。</p>
          </article>
        </div>
      </section>

      <section id="itinerario" className="chapter chapter-itinerary">
        <div className="chapter-heading">
          <p>第四章 · CHAPTER FOUR</p>
          <h2><span lang="zh-CN">行程</span><small>ITINERARY · 48 小时</small></h2>
          <span className="page-no">04</span>
        </div>

        <div className="route-days">
          <article>
            <header><span>第一日</span><b>01</b><small>沿中轴读城</small></header>
            <ol>
              <li><time>08:30</time><p><b lang="zh-CN">天安门与故宫</b><span>从午门向北穿过宫城</span></p></li>
              <li><time>14:30</time><p><b lang="zh-CN">景山公园</b><span>登高回望紫禁城</span></p></li>
              <li><time>16:30</time><p><b lang="zh-CN">钟鼓楼与胡同</b><span>从轴线转入街巷</span></p></li>
              <li><time>19:00</time><p><b lang="zh-CN">什刹海</b><span>沿水岸散步与晚餐</span></p></li>
            </ol>
          </article>
          <article>
            <header><span>第二日</span><b>02</b><small>坛庙与湖山</small></header>
            <ol>
              <li><time>07:30</time><p><b lang="zh-CN">天坛公园</b><span>松柏林与祈年殿</span></p></li>
              <li><time>11:30</time><p><b lang="zh-CN">前门午餐</b><span>烤鸭或炸酱面</span></p></li>
              <li><time>14:00</time><p><b lang="zh-CN">颐和园</b><span>长廊、万寿山与昆明湖</span></p></li>
              <li><time>17:30</time><p><b lang="zh-CN">西堤或十七孔桥</b><span>把黄昏留给湖面</span></p></li>
            </ol>
          </article>
        </div>

        <div className="phrasebook">
          <div>
            <p className="category">袖珍会话 · POCKET PHRASES</p>
            <h3 lang="zh-CN">请问，地铁站怎么走？</h3>
            <p lang="en">Excuse me, how do I get to the subway?</p>
          </div>
          <dl>
            <div><dt lang="zh-CN">您好</dt><dd>Nín hǎo · Hello</dd></div>
            <div><dt lang="zh-CN">请给我一张票</dt><dd>Qǐng gěi wǒ yì zhāng piào · One ticket, please</dd></div>
            <div><dt lang="zh-CN">这个怎么卖？</dt><dd>Zhège zěnme mài? · How much is this?</dd></div>
            <div><dt lang="zh-CN">麻烦结账</dt><dd>Máfan jiézhàng · The bill, please</dd></div>
          </dl>
        </div>

        <div className="practical-grid">
          <div><span>抵达 · ARRIVING</span><h3>机场进城</h3><p>首都机场与大兴机场都有轨道交通接入市区；落地前先确认住宿靠近哪条线路，再比较机场线、出租车与网约车。</p></div>
          <div><span>移动 · GETTING AROUND</span><h3>地铁 + 步行</h3><p>核心景点之间用地铁衔接最稳定，老城内部仍需大量步行。支付与购票方式可能变化，可查看 <a href="https://english.beijing.gov.cn/travellinginbeijing/transportation/" target="_blank" rel="noreferrer">北京市政府交通指南 ↗</a>。</p></div>
          <div><span>预约 · BOOKING</span><h3>先锁定故宫</h3><p>故宫不售当日票并实行实名预约；天安门区域、热门博物馆和公园也可能有各自规则。务必通过官方渠道核对日期、证件与入口。</p></div>
        </div>
      </section>

      <footer>
        <div className="footer-mark">京</div>
        <div>
          <p className="footer-title" lang="zh-CN">北京，再会。</p>
          <p>愿你记住的不只是朱墙金瓦，也有树荫下的一碗面与晚风。</p>
        </div>
        <div className="sources">
          <span>资料来源 · SOURCES</span>
          <a href="https://www.dpm.org.cn/Visit.html" target="_blank" rel="noreferrer">故宫博物院</a>
          <a href="https://www.tiantanpark.cn/" target="_blank" rel="noreferrer">天坛公园</a>
          <a href="https://english.beijing.gov.cn/specials/parktours/guidevisitors/summerpalace/index.html" target="_blank" rel="noreferrer">颐和园官方指南</a>
          <a href="https://whc.unesco.org/en/list/1714" target="_blank" rel="noreferrer">UNESCO 北京中轴线</a>
        </div>
        <p className="colophon">策划与插画 · CURATED AND ILLUSTRATED · MMXXVI</p>
      </footer>
    </div>
  );
}
