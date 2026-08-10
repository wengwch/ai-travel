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

export default function ShanghaiGuide({ theme }: { theme: "vintage" | "modern" }) {
  return (
    <div className="book-pages shanghai-book">
      <header className="masthead">
        <div className="crumb"><span>中国</span><i>◆</i><span>华东</span><i>◆</i><b>上海</b></div>
        <p>{theme === "modern" ? "PHOTO EDITION · 现代影像版" : "旅行者版本 · VINTAGE EDITION"}</p>
      </header>

      <section id="prologue" className="chapter hero-chapter">
        <div className="hero-title">
          <p className="eyebrow">江海相逢，旧街与天际线并行</p>
          <h2><span lang="zh-CN">上海</span><small>SHANGHAI</small></h2>
          <p className="hero-subtitle">江潮翻页，霓虹落款</p>
        </div>

        <figure className="hero-figure">
          <img
            src={theme === "modern" ? "/images/shanghai-hero-modern.png" : "/images/shanghai-hero-vintage.png"}
            alt={theme === "modern" ? "生成的现代实景摄影风格上海外滩、黄浦江与浦东天际线" : "海派复古石版画风格的上海外滩、黄浦江与浦东天际线"}
          />
          <figcaption>
            <b>图版 I</b>
            <span><i lang="zh-CN">黄浦江两岸</i> · TWO FACES OF SHANGHAI</span>
            <small>一边是百年建筑立面，一边是垂直生长的天际线，渡轮仍在水面穿梭。</small>
          </figcaption>
        </figure>

        <div className="prologue-grid">
          <div className="lead-copy">
            <span className="drop-cap">上</span>
            <p>海最动人的地方，不在于“新”或“旧”哪一边胜出，而在于它们总在同一条街、同一段河岸上彼此映照。外滩的石材立面望向陆家嘴玻璃塔群，石库门里弄转角又接上一间小咖啡馆。</p>
            <p>把行程交给一张交通卡和一双好走的鞋：清晨钻进老城厢，午后沿梧桐树影穿过衡复风貌区，傍晚随便挑苏州河或黄浦江的一岸，看灯光在潮湿空气里一盏盏醒来。</p>
          </div>
          <blockquote>
            <span>“</span>
            <p lang="zh-CN">上海的时间不是一条直线，而是弄堂、码头与高楼叠成的倒影。</p>
            <small>Shanghai keeps time in reflections of lanes, docks and towers.</small>
          </blockquote>
          <div className="fact-card">
            <p className="fact-label">扉页速览 · AT A GLANCE</p>
            <dl>
              <div><dt>最佳步调</dt><dd>3—4 日</dd></div>
              <div><dt>城市气质</dt><dd>开放、精细、流动</dd></div>
              <div><dt>适合时节</dt><dd>暮春 / 深秋</dd></div>
              <div><dt>不可错过</dt><dd>坐一次过江轮渡</dd></div>
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
            <p className="category">滨江建筑 · WATERFRONT ARCHITECTURE</p>
            <h3><LocalName local="外滩建筑群" annotation="万国建筑博览 · THE BUND" /></h3>
            <p className="standfirst">从海关大楼的钟声到银行、饭店与会馆立面，一段河岸保存了上海成为国际都市的空间记忆。</p>
            <div className="columns">
              <p>外滩西侧的历史建筑集中形成连续街墙，古典主义、哥特复兴与装饰艺术等风格并置。走近看柱式、穹顶、门厅与石材细节，比隔江拍一张全景更能读出城市的层次。</p>
              <p>外滩也是理解上海方向感的起点：黄浦江对岸是陆家嘴，北端接苏州河与外白渡桥，向南可步行至十六铺和老城厢。清晨适合看建筑，夜晚适合看两岸灯光。</p>
            </div>
            <div className="visit-strip">
              <span><b>建议</b> 早晨先看建筑细部</span>
              <span><b>留时</b> 2—3 小时</span>
              <a href="https://www.shanghai.gov.cn/huangpu/index.html" target="_blank" rel="noreferrer">黄浦区官方指南 ↗</a>
            </div>
          </div>
          <Note no="33">外滩滨水区综合改造曾重点保护沿线 33 幢历史建筑及相关重要设施。</Note>
        </article>

        <div className="culture-mosaic">
          <article className="art-card last-supper">
            <p className="category">江南园林 · CLASSICAL GARDEN</p>
            <span className="art-index">02</span>
            <h3><LocalName local="豫园" annotation="老城厢里的山水 · YUYUAN GARDEN" /></h3>
            <p>始建于明嘉靖三十八年（1559），亭台、曲廊、池水与太湖石在有限空间里制造出层层转折。园外商城热闹，园内却应放慢脚步看漏窗与借景。</p>
            <p className="tip">参观提示：开放时间与票务可能按季节调整，出发前以景区官方信息为准。</p>
            <a href="https://www.meet-in-shanghai.net/en/tourist-attraction/yuyuan-garden-998246/" target="_blank" rel="noreferrer">上海官方旅游指南 ↗</a>
          </article>

          <article className="art-card brera-card">
            <p className="category">里弄 · NEIGHBOURHOOD</p>
            <span className="art-index">03</span>
            <h3><LocalName local="石库门与里弄" annotation="门楣之后的城市日常" /></h3>
            <p>石库门把江南住宅的院落观念与近代联排住宅结合起来。比起只看改造后的商业街，更值得留意仍有生活痕迹的弄堂尺度、门牌和晾衣架。</p>
            <p className="route-note">建议路线：新天地 → 复兴公园 → 思南公馆 → 瑞金二路</p>
          </article>

          <article className="art-card scala-card">
            <p className="category">收藏 · COLLECTIONS</p>
            <span className="art-index">04</span>
            <h3><LocalName local="上海博物馆" annotation="人民广场馆与东馆 · SHANGHAI MUSEUM" /></h3>
            <p>青铜器、陶瓷、书画与工艺收藏构成理解中国艺术史的清晰入口。两座馆舍的开放日期、预约方式与特展票务并不完全相同，应先确认当天安排。</p>
          </article>

          <article className="art-card castle-card shanghai-lane-card">
            <p className="category">风貌区 · HISTORIC STREETS</p>
            <span className="art-index">05</span>
            <h3><LocalName local="衡复历史文化风貌区" annotation="梧桐、花园住宅与街角小店" /></h3>
            <p>武康路、湖南路、复兴西路一带适合无目的步行。这里的魅力不只在单栋名宅，更在树冠、院墙、转角和街道尺度共同形成的连续氛围。</p>
          </article>
        </div>
      </section>

      <section id="natura" className="chapter chapter-natura">
        <div className="chapter-heading">
          <p>第二章 · CHAPTER TWO</p>
          <h2><span lang="zh-CN">水岸</span><small>NATURE · 城市呼吸</small></h2>
          <span className="page-no">02</span>
        </div>

        <div className="nature-layout">
          <figure className="navigli-figure">
            <img
              src={theme === "modern" ? "/images/shanghai-nature-modern.png" : "/images/shanghai-nature-vintage.png"}
              alt={theme === "modern" ? "生成的现代实景摄影风格上海苏州河、钢桥与滨水步道" : "海派复古石版画风格的上海苏州河、钢桥与滨水步道"}
            />
            <figcaption><b>图版 II</b><span><i lang="zh-CN">苏州河缓行</i> · ALONG SUZHOU CREEK</span></figcaption>
          </figure>
          <article className="navigli-copy">
            <p className="category">城市河流 · URBAN RIVER</p>
            <h3><LocalName local="苏州河" annotation="桥梁、仓库与滨水生活" /></h3>
            <p className="standfirst">这条河保存着上海从水运、工业到公共滨水空间的变化，也给密集城区留下一条会呼吸的缝隙。</p>
            <p>从外白渡桥向西，河岸串起历史建筑、仓库、桥梁与新开放空间。无需走完整段，选择两三公里慢行，便能看见城市如何把生产岸线重新还给日常生活。</p>
            <div className="time-note"><span>17:00</span><p><b lang="zh-CN">河畔散步</b><small>从外滩源走向四行仓库一带</small></p></div>
          </article>
          <Note no="125 KM">苏州河全长约 125 公里，其中五十余公里流经上海境内，最终汇入黄浦江。</Note>
        </div>

        <div className="green-index">
          <article className="green-feature">
            <span className="botanical-mark">✦</span>
            <p className="category">滨江 · RIVERFRONT</p>
            <h3><LocalName local="徐汇滨江" annotation="工业遗产与公共岸线 · WEST BUND" /></h3>
            <p>旧码头、厂房、跑道与美术馆被一条连续步行岸线串起。这里没有外滩的密集人潮，更适合骑行、看展或在草坡上等一次黄浦江日落。</p>
            <p className="green-tip">龙美术馆、油罐艺术中心与滨江步道可按展览开放情况自由组合。</p>
          </article>
          <article>
            <span className="mini-no">N. 02</span>
            <h3><LocalName local="世纪公园" annotation="浦东的开阔绿地" /></h3>
            <p>湖面、草坪与林荫路为高密度城市提供舒展空间，适合把博物馆或陆家嘴行程之间的半天留给慢走。</p>
          </article>
          <article>
            <span className="mini-no">N. 03</span>
            <h3><LocalName local="崇明东滩" annotation="长江口湿地" /></h3>
            <p>远离中心城区的潮滩与候鸟栖息地，代表上海面向江海的另一种尺度。前往前应确认保护区与生态园的开放范围。</p>
          </article>
        </div>
      </section>

      <section id="sapori" className="chapter chapter-sapori">
        <div className="chapter-heading dark-heading">
          <p>第三章 · CHAPTER THREE</p>
          <h2><span lang="zh-CN">味道</span><small>FLAVOURS · 本帮餐桌</small></h2>
          <span className="page-no">03</span>
        </div>

        <div className="food-spread">
          <figure>
            <img
              src={theme === "modern" ? "/images/shanghai-food-modern.png" : "/images/shanghai-food-vintage.png"}
              alt={theme === "modern" ? "生成的现代美食摄影风格上海小笼馒头、生煎馒头、葱油拌面与本帮小菜" : "海派复古商业石版画风格的上海小笼馒头、生煎馒头、葱油拌面与本帮小菜"}
            />
            <figcaption><b>图版 III</b><span><i lang="zh-CN">上海点心桌</i> · A SHANGHAI TABLE</span></figcaption>
          </figure>
          <div className="food-intro">
            <p className="category">入席 · AT THE TABLE</p>
            <h3>鲜、甜、浓油赤酱，<br />还要一点耐心。</h3>
            <p>上海味道既细巧也家常。小笼馒头把汤汁藏进薄皮，生煎靠锅底焦香取胜，葱油拌面则用最少材料把香气推到最前面。本帮菜的甜并非单独出现，常与酱油、酒香和火候一起工作。</p>
            <p className="script-note" lang="zh-CN">慢慢吃，勿着急。</p>
            <small>小笼第一口先轻轻开窗，别让滚烫汤汁抢走余下味道。</small>
          </div>
        </div>

        <div className="dish-grid">
          <article className="dish-primary">
            <span className="dish-no">01</span>
            <p className="category">点心 · DIM SUM</p>
            <h3><LocalName local="南翔小笼馒头" annotation="薄皮、汤汁与肉馅" /></h3>
            <p>提起褶顶，轻咬小口，先尝汤再蘸少量香醋。好的小笼皮薄而有韧性，汤汁鲜而不腻，不必让姜丝和醋盖过本味。</p>
          </article>
          <article>
            <span className="dish-no">02</span>
            <p className="category">锅气 · PAN-FRIED</p>
            <h3><LocalName local="生煎馒头" annotation="焦底、芝麻与葱花" /></h3>
            <p>厚薄适中的面皮包住肉馅和汤汁，底部煎得金黄酥脆。刚出锅时最香，也最需要小心温度。</p>
          </article>
          <article>
            <span className="dish-no">03</span>
            <p className="category">面食 · NOODLES</p>
            <h3><LocalName local="葱油拌面" annotation="焦葱与酱油香" /></h3>
            <p>葱段慢炸至深色，把香气留在油里，再与酱油和细面拌匀。看似简单，却最能分辨火候与比例。</p>
          </article>
          <article className="aperitivo-card shanghai-breakfast-card">
            <span className="dish-no">07:00</span>
            <p className="category">早食 · LOCAL RITUAL</p>
            <h3><LocalName local="四大金刚" annotation="大饼、油条、粢饭与豆浆" /></h3>
            <p>传统上海早餐讲究快而扎实：油条可夹进大饼或粢饭，配一杯甜或咸豆浆。今天不必执着一次凑齐，在街坊早餐店选两样，站着吃也很上海。</p>
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
            <header><span>第一日</span><b>01</b><small>老城与两岸</small></header>
            <ol>
              <li><time>08:30</time><p><b lang="zh-CN">豫园与老城厢</b><span>园林、街巷与早点</span></p></li>
              <li><time>11:30</time><p><b lang="zh-CN">外滩建筑漫步</b><span>从十六铺向外白渡桥</span></p></li>
              <li><time>14:30</time><p><b lang="zh-CN">过江轮渡</b><span>从水面理解两岸关系</span></p></li>
              <li><time>16:00</time><p><b lang="zh-CN">陆家嘴</b><span>高楼、滨江与夜景</span></p></li>
            </ol>
          </article>
          <article>
            <header><span>第二日</span><b>02</b><small>收藏与街区</small></header>
            <ol>
              <li><time>10:00</time><p><b lang="zh-CN">上海博物馆</b><span>按馆舍与展览安排参观</span></p></li>
              <li><time>13:30</time><p><b lang="zh-CN">衡复风貌区</b><span>武康路与复兴西路慢行</span></p></li>
              <li><time>16:30</time><p><b lang="zh-CN">石库门与里弄</b><span>新天地至思南路一带</span></p></li>
              <li><time>18:30</time><p><b lang="zh-CN">苏州河</b><span>桥梁、仓库与黄昏</span></p></li>
            </ol>
          </article>
        </div>

        <div className="phrasebook">
          <div>
            <p className="category">上海闲话 · LOCAL PHRASES</p>
            <h3 lang="zh-CN">到地铁站哪能走？</h3>
            <p>上海话里的“哪能”就是“怎么”。</p>
          </div>
          <dl>
            <div><dt lang="zh-CN">侬好</dt><dd>你好 · Hello</dd></div>
            <div><dt lang="zh-CN">谢谢侬</dt><dd>谢谢你 · Thank you</dd></div>
            <div><dt lang="zh-CN">这个多少钞票？</dt><dd>这个多少钱？ · How much?</dd></div>
            <div><dt lang="zh-CN">麻烦买单</dt><dd>请结账 · The bill, please</dd></div>
          </dl>
        </div>

        <div className="practical-grid">
          <div><span>抵达 · ARRIVING</span><h3>两座机场</h3><p>浦东机场和虹桥机场都有轨道交通连接市区，两机场间已有市域机场联络线。落地前按住宿位置比较地铁、磁浮、市域线与出租车。</p></div>
          <div><span>移动 · GETTING AROUND</span><h3>地铁 + 轮渡 + 步行</h3><p>跨区移动优先地铁，黄浦江两岸可加入轮渡，外滩、衡复与老城厢则适合步行。查看 <a href="https://english.shanghai.gov.cn/en-Transportation/index_3.html" target="_blank" rel="noreferrer">上海市政府交通指南 ↗</a> 获取最新信息。</p></div>
          <div><span>预约 · BOOKING</span><h3>先确认馆舍</h3><p>上海博物馆不同馆舍、日期和特展可能采用不同预约或购票方式；热门展览与高空观景项目也应通过官方渠道提前核对。</p></div>
        </div>
      </section>

      <footer>
        <div className="footer-mark">沪</div>
        <div>
          <p className="footer-title" lang="zh-CN">上海，下趟再会。</p>
          <p>愿你记住的不只是天际线，也有雨后梧桐叶与蒸笼揭开时的白雾。</p>
        </div>
        <div className="sources">
          <span>资料来源 · SOURCES</span>
          <a href="https://www.shanghaimuseum.net/mu/frontend/pg/service/admission" target="_blank" rel="noreferrer">上海博物馆</a>
          <a href="https://www.meet-in-shanghai.net/en/tourist-attraction/yuyuan-garden-998246/" target="_blank" rel="noreferrer">上海官方旅游网 · 豫园</a>
          <a href="https://www.meet-in-shanghai.net/en/guide/come-with-me-for-a-stroll-along-my-favorite-part-of-shanghais-suzhou-creek-451150/" target="_blank" rel="noreferrer">上海官方旅游网 · 苏州河</a>
          <a href="https://english.shanghai.gov.cn/en-Transportation/20231214/649e06ea38f74aaeb573fa2debbe97d3.html" target="_blank" rel="noreferrer">上海机场交通</a>
        </div>
        <p className="colophon">策划与插画 · CURATED AND ILLUSTRATED · MMXXVI</p>
      </footer>
    </div>
  );
}
