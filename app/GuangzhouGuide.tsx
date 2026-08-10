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

export default function GuangzhouGuide({ theme }: { theme: "vintage" | "modern" }) {
  return (
    <div className="book-pages guangzhou-book">
      <header className="masthead">
        <div className="crumb"><span>中国</span><i>◆</i><span>华南</span><i>◆</i><b>广州</b></div>
        <p>{theme === "modern" ? "PHOTO EDITION · 现代影像版" : "旅行者版本 · VINTAGE EDITION"}</p>
      </header>

      <section id="prologue" className="chapter hero-chapter">
        <div className="hero-title">
          <p className="eyebrow">云山珠水，骑楼与茶香相逢</p>
          <h2><span lang="zh-CN">广州</span><small>GUANGZHOU</small></h2>
          <p className="hero-subtitle">早茶未散，珠江晚风已经在路上</p>
        </div>

        <figure className="hero-figure">
          <img
            src={theme === "modern" ? "/images/guangzhou-hero-modern.png" : "/images/guangzhou-hero-vintage.png"}
            alt={theme === "modern" ? "生成的现代旅行摄影风格广州陈家祠陶塑屋脊与木棉花" : "岭南复古商业石版画风格的广州陈家祠陶塑屋脊与木棉花"}
          />
          <figcaption>
            <b>图版 I</b>
            <span><i lang="zh-CN">陈氏书院</i> · A ROOFLINE OF LINGNAN</span>
            <small>陶塑、灰塑与木雕把故事安放在屋脊和梁架上，木棉花则替城市点亮春天。</small>
          </figcaption>
        </figure>

        <div className="prologue-grid">
          <div className="lead-copy">
            <span className="drop-cap">广</span>
            <p>州的开放不是一句新口号。两千多年的商贸往来、珠江潮汐和南来北往的人群，早已把这座城塑造成一张善于吸收、又坚持本味的餐桌。骑楼替行人挡雨遮阳，茶楼让一顿早餐慢慢延伸到中午。</p>
            <p>在广州，胃口也可以当指南针。用“一盅两件”开启早晨，再去陈家祠抬头看屋脊、沿恩宁路寻找趟栊门与满洲窗；午后登白云山消食，傍晚回到珠江边，让旧码头和新天际线一起上桌。</p>
          </div>
          <blockquote>
            <span>“</span>
            <p lang="zh-CN">广州把日子过在廊下，也把世界请进一壶茶里。</p>
            <small>Guangzhou lives beneath its arcades and welcomes the world over tea.</small>
          </blockquote>
          <div className="fact-card">
            <p className="fact-label">扉页速览 · AT A GLANCE</p>
            <dl>
              <div><dt>最佳步调</dt><dd>3—4 日</dd></div>
              <div><dt>城市气质</dt><dd>务实、开放、鲜活</dd></div>
              <div><dt>适合时节</dt><dd>深秋 / 春季</dd></div>
              <div><dt>不可错过</dt><dd>完整吃一次早茶</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section id="cultura" className="chapter chapter-cultura">
        <div className="chapter-heading">
          <p>第一章 · CHAPTER ONE</p>
          <h2><span lang="zh-CN">人文</span><small>HERITAGE · 岭南匠心</small></h2>
          <span className="page-no">01</span>
        </div>

        <article className="feature-duomo">
          <div className="feature-number">壹</div>
          <div>
            <p className="category">建筑工艺 · ARCHITECTURAL CRAFT</p>
            <h3><LocalName local="陈家祠" annotation="陈氏书院 · CHEN CLAN ANCESTRAL HALL" /></h3>
            <p className="standfirst">一座祠堂式书院，把岭南木雕、砖雕、石雕、陶塑、灰塑、铸铁和彩绘集中在院落与屋脊之间。</p>
            <div className="columns">
              <p>陈氏书院落成于清光绪十九年（1893）。进入院落后，先不要急着看展柜：屋脊上的陶塑人物、梁架间的木雕故事和门墙上的砖石纹样，本身就是最重要的展品。</p>
              <p>今天这里也是广东民间工艺博物馆。广彩、广绣、石湾陶等收藏把建筑之外的岭南手艺继续展开。光线最柔和的上午，更适合观察层层叠叠的雕刻与塑饰。</p>
            </div>
            <div className="visit-strip">
              <span><b>建议</b> 先看屋脊，再进展厅</span>
              <span><b>留时</b> 2 小时</span>
              <a href="https://www.gz.gov.cn/zlgz/gzly/wzgz/wbcg/content/mpost_9587900.html" target="_blank" rel="noreferrer">广州政府介绍 ↗</a>
            </div>
          </div>
          <Note no="1893">陈家祠落成之年。它被誉为“岭南建筑艺术明珠”，也是广州最具代表性的传统建筑之一。</Note>
        </article>

        <div className="culture-mosaic">
          <article className="art-card last-supper">
            <p className="category">王城遗址 · ANCIENT KINGDOM</p>
            <span className="art-index">02</span>
            <h3><LocalName local="南越王博物院" annotation="王墓与王宫展区 · NAN YUE KING MUSEUM" /></h3>
            <p>南越国遗存把广州作为岭南都会的历史向前推至两千多年前。王墓出土文物与宫署遗址分处不同展区，适合按当天开放信息选择其一深入参观。</p>
            <p className="tip">参观提示：两处展区地址不同，预约、开放和临展安排应在出发前通过官方渠道确认。</p>
            <a href="https://www.nywmuseum.org.cn/News/VisitIndex/Visit" target="_blank" rel="noreferrer">南越王博物院参观指南 ↗</a>
          </article>

          <article className="art-card brera-card">
            <p className="category">街区 · NEIGHBOURHOOD</p>
            <span className="art-index">03</span>
            <h3><LocalName local="恩宁路与永庆坊" annotation="西关大屋、粤剧与旧街生活" /></h3>
            <p>骑楼、青砖屋、趟栊门和粤剧艺术博物馆共同构成西关漫步的骨架。商业更新之外，仍值得留意巷口小店、老字号和居民阳台上的日常。</p>
            <p className="route-note">建议路线：陈家祠 → 荔枝湾 → 泮塘 → 恩宁路 → 永庆坊</p>
          </article>

          <article className="art-card scala-card">
            <p className="category">江岸 · RIVER HERITAGE</p>
            <span className="art-index">04</span>
            <h3><LocalName local="沙面" annotation="树荫下的近代建筑岛" /></h3>
            <p>珠江旧航道边的沙面保存着成片近代建筑。清晨或傍晚沿林荫道缓行，比正午追逐单个“打卡点”更能感受岛屿尺度和江岸气息。</p>
          </article>

          <article className="art-card castle-card guangzhou-arcade-card">
            <p className="category">骑楼 · ARCADES</p>
            <span className="art-index">05</span>
            <h3><LocalName local="北京路与老城中轴" annotation="城门遗迹、商街与寺观" /></h3>
            <p>从越秀山向南，经中山纪念堂、北京路至珠江，一条老城轴线串起不同年代。商铺脚下的道路遗迹提醒人们，繁华街面之下仍压着层层城市时间。</p>
          </article>
        </div>
      </section>

      <section id="natura" className="chapter chapter-natura">
        <div className="chapter-heading">
          <p>第二章 · CHAPTER TWO</p>
          <h2><span lang="zh-CN">云水</span><small>NATURE · 城市呼吸</small></h2>
          <span className="page-no">02</span>
        </div>

        <div className="nature-layout">
          <figure className="navigli-figure">
            <img
              src={theme === "modern" ? "/images/guangzhou-nature-modern.png" : "/images/guangzhou-nature-vintage.png"}
              alt={theme === "modern" ? "生成的现代旅行摄影风格广州白云山雨后林径、亭台与城市远景" : "岭南复古旅行版画风格的广州白云山林径、亭台与珠江远景"}
            />
            <figcaption><b>图版 II</b><span><i lang="zh-CN">白云晚望</i> · BAIYUN MOUNTAIN AFTER RAIN</span></figcaption>
          </figure>
          <article className="navigli-copy">
            <p className="category">城市山林 · URBAN MOUNTAIN</p>
            <h3><LocalName local="白云山" annotation="林径、鸣春谷与摩星岭" /></h3>
            <p className="standfirst">三十多座山峰在广州东北部连成绿色背景，雨后云气贴近山腰，也让“白云”二字有了具体形状。</p>
            <p>白云山面积广阔，不必一次走遍。可以从南门进入，沿林荫路和支线慢行，再按体力决定是否前往摩星岭。广州政府资料记载主峰海拔 382 米，登高可俯瞰城区并遥望珠江。</p>
            <div className="time-note"><span>16:30</span><p><b lang="zh-CN">白云晚望</b><small>避开午后暑气，留意末班交通</small></p></div>
          </article>
          <Note no="382 M">摩星岭海拔约 382 米。山区入口与游览区较多，出发前应按路线确认开放和交通。</Note>
        </div>

        <div className="green-index">
          <article className="green-feature">
            <span className="botanical-mark">✦</span>
            <p className="category">江风 · RIVERFRONT</p>
            <h3><LocalName local="珠江两岸" annotation="从白鹅潭到二沙岛" /></h3>
            <p>珠江是广州最自然的方向线。白鹅潭连接老城与艺术新馆，二沙岛留出绿荫与文化场馆，海心桥和花城广场一带则展示城市的新天际线。</p>
            <p className="green-tip">傍晚挑一段步行或乘渡轮，不必把“夜游”限定为一艘观光船。</p>
          </article>
          <article>
            <span className="mini-no">N. 02</span>
            <h3><LocalName local="海珠国家湿地公园" annotation="城央水网与果林" /></h3>
            <p>河涌、垛基果林与候鸟栖息地保存了珠三角湿地的另一种城市尺度。参观范围和预约方式可能变化，应提前确认。</p>
          </article>
          <article>
            <span className="mini-no">N. 03</span>
            <h3><LocalName local="华南国家植物园" annotation="南亚热带植物收藏" /></h3>
            <p>高大的棕榈、温室与专类园适合安排半日。广州漫长炎热的季节，在这里被转化成丰富而具体的植物层次。</p>
          </article>
        </div>
      </section>

      <section id="sapori" className="chapter chapter-sapori">
        <div className="chapter-heading dark-heading">
          <p>第三章 · CHAPTER THREE</p>
          <h2><span lang="zh-CN">味道</span><small>FLAVOURS · 广府餐桌</small></h2>
          <span className="page-no">03</span>
        </div>

        <div className="food-spread">
          <figure>
            <img
              src={theme === "modern" ? "/images/guangzhou-food-modern.png" : "/images/guangzhou-food-vintage.png"}
              alt={theme === "modern" ? "生成的现代美食摄影风格广州虾饺、烧卖、烧鹅、云吞面与茶具" : "广府复古商业石版画风格的广州虾饺、烧卖、烧鹅、云吞面与茶具"}
            />
            <figcaption><b>图版 III</b><span><i lang="zh-CN">一盅两件</i> · A CANTONESE TEA TABLE</span></figcaption>
          </figure>
          <div className="food-intro">
            <p className="category">入席 · AT THE TABLE</p>
            <h3>鲜、爽、清润，<br />还要慢慢饮茶。</h3>
            <p>广州菜重视食材本味，也迷恋火候、口感和汤水之间的细微差别。虾饺要皮薄而透，烧鹅要皮脆肉润，云吞面则讲究汤清、面爽。真正的广府餐桌从不只有名菜，也有一盅茶和足够的时间。</p>
            <p className="script-note" lang="yue-Hans">得闲饮茶。</p>
            <small>粤语里既是“有空喝茶”，也是一句亲切的再会与邀约。</small>
          </div>
        </div>

        <div className="dish-grid">
          <article className="dish-primary">
            <span className="dish-no">01</span>
            <p className="category">点心 · DIM SUM</p>
            <h3><LocalName local="虾饺与烧卖" annotation="薄皮、鲜虾与蒸笼热气" /></h3>
            <p>虾饺看似简单，透明而有韧性的澄面皮、完整弹牙的虾肉和恰到好处的蒸制时间缺一不可。配一笼干蒸烧卖，便是“一盅两件”的经典起点。</p>
          </article>
          <article>
            <span className="dish-no">02</span>
            <p className="category">烧味 · ROAST MEATS</p>
            <h3><LocalName local="广式烧鹅" annotation="脆皮、肉香与酸梅酱" /></h3>
            <p>炉温把鹅皮收紧成焦糖色，肉汁则留在骨肉之间。好烧鹅不必被浓酱覆盖，少量酸梅酱只负责提亮油香。</p>
          </article>
          <article>
            <span className="dish-no">03</span>
            <p className="category">面食 · NOODLES</p>
            <h3><LocalName local="鲜虾云吞面" annotation="竹升面、清汤与大地鱼香" /></h3>
            <p>细而弹的面条卷在碗中，云吞皮薄馅鲜，汤底清澈却有层次。分量通常不大，正适合留出胃口继续走街串巷。</p>
          </article>
          <article className="aperitivo-card guangzhou-yumcha-card">
            <span className="dish-no">08:00</span>
            <p className="category">早茶 · LOCAL RITUAL</p>
            <h3><LocalName local="饮早茶" annotation="开茶、洗杯与慢慢点心" /></h3>
            <p>早茶不是赶时间的早餐。先选茶，再从蒸点、煎炸、粥粉面和甜品里慢慢加单。热门老店周末常需等位，若想感受从容，工作日早一点到更合适。</p>
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
            <header><span>第一日</span><b>01</b><small>西关与珠水</small></header>
            <ol>
              <li><time>08:00</time><p><b lang="zh-CN">西关早茶</b><span>一盅茶与两三笼点心</span></p></li>
              <li><time>10:00</time><p><b lang="zh-CN">陈家祠</b><span>屋脊、雕刻与民间工艺</span></p></li>
              <li><time>13:30</time><p><b lang="zh-CN">荔枝湾至永庆坊</b><span>沿水与骑楼慢行</span></p></li>
              <li><time>17:00</time><p><b lang="zh-CN">沙面与白鹅潭</b><span>江风、树荫与黄昏</span></p></li>
            </ol>
          </article>
          <article>
            <header><span>第二日</span><b>02</b><small>古城与云山</small></header>
            <ol>
              <li><time>09:00</time><p><b lang="zh-CN">南越王博物院</b><span>按展区确认当天行程</span></p></li>
              <li><time>12:30</time><p><b lang="zh-CN">北京路</b><span>老城轴线与午餐</span></p></li>
              <li><time>15:30</time><p><b lang="zh-CN">白云山</b><span>林径与城市远望</span></p></li>
              <li><time>19:30</time><p><b lang="zh-CN">珠江新城</b><span>花城广场与江畔夜景</span></p></li>
            </ol>
          </article>
        </div>

        <div className="phrasebook">
          <div>
            <p className="category">广州话 · LOCAL PHRASES</p>
            <h3 lang="yue-Hans">唔该，地铁站点行？</h3>
            <p>“唔该”既可表示劳驾，也可用于感谢别人提供服务。</p>
          </div>
          <dl>
            <div><dt lang="yue-Hans">早晨</dt><dd>早上好 · Good morning</dd></div>
            <div><dt lang="yue-Hans">唔该晒</dt><dd>非常感谢 · Thank you</dd></div>
            <div><dt lang="yue-Hans">呢个几钱？</dt><dd>这个多少钱？ · How much?</dd></div>
            <div><dt lang="yue-Hans">埋单，唔该</dt><dd>请结账 · The bill, please</dd></div>
          </dl>
        </div>

        <div className="practical-grid">
          <div><span>抵达 · ARRIVING</span><h3>机场 + 高铁</h3><p>白云机场各航站楼的轨道接驳正在随新设施调整，广州南站、广州白云站和广州东站也服务不同方向。落地前按实际航站楼或车站查看最新换乘。</p></div>
          <div><span>移动 · GETTING AROUND</span><h3>地铁 + 步行 + 渡轮</h3><p>跨区优先地铁，西关和老城适合步行，珠江两岸可加入渡轮。出发前通过 <a href="https://www.gzmtr.com/" target="_blank" rel="noreferrer">广州地铁官网 ↗</a> 核对线路与运营信息。</p></div>
          <div><span>预约 · BOOKING</span><h3>先看官方公告</h3><p>陈家祠、南越王博物院、白云山和热门展览的票务与预约可能变化；夏季也要留意高温、雷雨和景区临时安排。</p></div>
        </div>
      </section>

      <footer>
        <div className="footer-mark">穗</div>
        <div>
          <p className="footer-title" lang="yue-Hans">广州，得闲再饮茶。</p>
          <p>愿你记住的不只是早茶与江景，也有骑楼下躲过的一阵雨和屋脊上讲不完的故事。</p>
        </div>
        <div className="sources">
          <span>资料来源 · SOURCES</span>
          <a href="https://www.gz.gov.cn/zlgz/gzly/wzgz/wbcg/content/mpost_9587900.html" target="_blank" rel="noreferrer">广州市政府 · 陈家祠</a>
          <a href="https://www.gz.gov.cn/zlgz/gzly/wzgz/ylgy/content/mpost_9497810.html" target="_blank" rel="noreferrer">广州市政府 · 白云山</a>
          <a href="https://www.gz.gov.cn/zt/jrshts/2026n/nwzgz/nwgz/content/post_10686807.html" target="_blank" rel="noreferrer">广州西关漫步指南</a>
          <a href="https://www.nywmuseum.org.cn/News/VisitIndex/Visit" target="_blank" rel="noreferrer">南越王博物院</a>
          <a href="https://www.gdmoa.org/visitor_guide/?show=ershadao" target="_blank" rel="noreferrer">广东美术馆参观指南</a>
          <a href="https://www.gz.gov.cn/zwfw/zxfw/jtfw/content/post_10690829.html" target="_blank" rel="noreferrer">广州机场交通提示</a>
        </div>
        <p className="colophon">策划与插画 · CURATED AND ILLUSTRATED · MMXXVI</p>
      </footer>
    </div>
  );
}
