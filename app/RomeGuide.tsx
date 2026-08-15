function LocalName({ local, zh }: { local: string; zh: string }) {
  return (
    <span className="bilingual-name">
      <span lang="it">{local}</span>
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

export default function RomeGuide({ theme }: { theme: "vintage" | "modern" }) {
  return (
    <div className="book-pages rome-book">
      <header className="masthead">
        <div className="crumb"><span>ITALIA</span><i>◆</i><span>LAZIO</span><i>◆</i><b>ROMA</b></div>
        <p>{theme === "modern" ? "PHOTO EDITION · 现代影像版" : "EDIZIONE PER VIAGGIATORI · 旅行者版本"}</p>
      </header>

      <section id="prologue" className="chapter hero-chapter">
        <div className="hero-title">
          <p className="eyebrow">ROMA NON SI VISITA: SI ATTRAVERSA</p>
          <h2><span lang="it">Roma</span><small>罗马</small></h2>
          <p className="hero-subtitle">每一步，都踩在另一个时代的屋顶上</p>
        </div>

        <figure className="hero-figure">
          <img
            src={theme === "modern" ? "/images/rome-hero-modern.png" : "/images/rome-hero-vintage.png"}
            alt={theme === "modern" ? "生成的现代旅行摄影风格罗马斗兽场与古罗马广场" : "大旅行时代手工套色石版画风格的罗马斗兽场与古罗马广场"}
          />
          <figcaption>
            <b>图版 I</b>
            <span><i lang="it">Colosseo e Foro Romano</i> · 斗兽场与古罗马广场</span>
            <small>拱券、断柱与罗马松把帝国留下的巨大尺度，重新放回今天的晨光里。</small>
          </figcaption>
        </figure>

        <div className="prologue-grid">
          <div className="lead-copy">
            <span className="drop-cap">罗</span>
            <p>马不是一座把历史收进展柜的城市。神庙变成教堂，竞技场旁驶过公交，古代柱廊嵌进住宅外墙；你以为自己正在看废墟，转个弯却发现有人在它的阴影里买花、喝咖啡、等朋友。</p>
            <p>别急着把地标连成清单。清晨留给斗兽场的空旷，正午钻进万神殿的圆顶光束，傍晚跟着喷泉声穿过小巷；当石头渐暗、餐桌亮起，罗马才从宏大的过去回到可亲的现在。</p>
          </div>
          <blockquote>
            <span>“</span>
            <p lang="it">Roma cambia secolo a ogni angolo, senza mai cambiare voce.</p>
            <small>罗马每过一个街角就换一个世纪，却始终用同一种声音说话。</small>
          </blockquote>
          <div className="fact-card">
            <p className="fact-label">PRIMA PAGINA · 扉页速览</p>
            <dl>
              <div><dt>最佳步调</dt><dd>3—4 日</dd></div>
              <div><dt>城市气质</dt><dd>恢宏、松弛、戏剧性</dd></div>
              <div><dt>适合时节</dt><dd>春季 / 深秋</dd></div>
              <div><dt>不可错过</dt><dd>黄昏穿过老城</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section id="cultura" className="chapter chapter-cultura">
        <div className="chapter-heading">
          <p>CAPITOLO UNO · 第一章</p>
          <h2><span lang="it">Cultura</span><small>人文 · 城市地层</small></h2>
          <span className="page-no">01</span>
        </div>

        <article className="feature-duomo">
          <div className="feature-number">I</div>
          <div>
            <p className="category">SPETTACOLO & IMPERO · 竞技与帝国</p>
            <h3><LocalName local="Colosseo" zh="罗马斗兽场" /></h3>
            <p className="standfirst">椭圆形看台曾容纳帝国的欢呼；今天，它与古罗马广场、帕拉蒂尼山共同组成一段可以步行进入的城市原点。</p>
            <div className="columns">
              <p><span lang="it">Anfiteatro Flavio</span>（弗拉维圆形剧场）在公元 1 世纪建成。与其只在外墙前停留，不如观察不同层级的拱券、座席组织与地下空间，理解罗马人如何用建筑调度人群、仪式和权力。</p>
              <p>参观后从君士坦丁凯旋门进入古罗马广场，再登帕拉蒂尼山俯瞰遗址。三处连在一起会比孤立的“打卡”更完整，也需要舒适的鞋、饮水和至少半天时间。</p>
            </div>
            <div className="visit-strip">
              <span><b>建议</b> 预约清晨时段</span>
              <span><b>留时</b> 半日</span>
              <a href="https://colosseo.it/en/visit/orari-e-biglietti/" target="_blank" rel="noreferrer">官方票务与开放信息 ↗</a>
            </div>
          </div>
          <Note no="80 AD">斗兽场在弗拉维王朝时期启用。官方票务通常要求预约入场时段，销售窗口与开放时间会随季节调整。</Note>
        </article>

        <div className="culture-mosaic">
          <article className="art-card last-supper">
            <p className="category">LUCE & GEOMETRIA · 光与几何</p>
            <span className="art-index">02</span>
            <h3><LocalName local="Pantheon" zh="万神殿" /></h3>
            <p>直径约 43 米的穹顶只由中央圆洞引入自然光。雨水、阳光与时间都直接进入室内，使这座古代建筑不像遗迹，更像一台仍在运转的宇宙仪。</p>
            <p className="tip">参观提示：这里仍是宗教场所，开放可能受礼仪活动影响；请通过官方渠道确认票务。</p>
            <a href="https://www.turismoroma.it/en/places/pantheon" target="_blank" rel="noreferrer">PANTHEON ↗</a>
          </article>

          <article className="art-card brera-card">
            <p className="category">CAPOLAVORI · 杰作</p>
            <span className="art-index">03</span>
            <h3><LocalName local="Musei Vaticani" zh="梵蒂冈博物馆" /></h3>
            <p>从古典雕塑到拉斐尔画室与西斯廷礼拜堂，这是一条密度极高的艺术长廊。它位于梵蒂冈城，但与圣彼得大教堂常共同构成罗马旅行的重要一天。</p>
            <p className="route-note">只通过梵蒂冈博物馆官方票务网站预约，谨防相似域名与加价渠道。</p>
          </article>

          <article className="art-card scala-card">
            <p className="category">ACQUA & TEATRO · 水与剧场</p>
            <span className="art-index">04</span>
            <h3><LocalName local="Fontana di Trevi" zh="特莱维喷泉" /></h3>
            <p>古老水道在巴洛克立面前完成最后一幕。与其在人群最密集的正午抵达，不如选择清晨或夜晚，先听见水声，再看见整座喷泉。</p>
          </article>

          <article className="art-card castle-card rome-dome-card">
            <p className="category">QUARTIERE · 街区</p>
            <span className="art-index">05</span>
            <h3><LocalName local="Trastevere" zh="特拉斯提弗列" /></h3>
            <p>台伯河西岸的窄街、晾衣绳与小广场保存着更接近日常的罗马。避开只追逐餐厅招牌的路线，清晨看街区醒来，或在晚餐后慢慢走回河边。</p>
          </article>
        </div>
      </section>

      <section id="natura" className="chapter chapter-natura">
        <div className="chapter-heading">
          <p>CAPITOLO DUE · 第二章</p>
          <h2><span lang="it">Natura</span><small>自然 · 古道与松影</small></h2>
          <span className="page-no">02</span>
        </div>

        <div className="nature-layout">
          <figure className="navigli-figure">
            <img
              src={theme === "modern" ? "/images/rome-nature-modern.png" : "/images/rome-nature-vintage.png"}
              alt={theme === "modern" ? "生成的现代旅行摄影风格阿皮亚古道、罗马松与古代水道" : "大旅行时代手工套色石版画风格的阿皮亚古道、罗马松与古代水道"}
            />
            <figcaption><b>图版 II</b><span><i lang="it">Via Appia Antica</i> · 阿皮亚古道</span></figcaption>
          </figure>
          <article className="navigli-copy">
            <p className="category">REGINA VIARUM · 道路女王</p>
            <h3><LocalName local="Via Appia Antica" zh="阿皮亚古道" /></h3>
            <p className="standfirst">玄武岩路面从城墙伸向罗马乡野，墓园、别墅、水道与松树把两千多年的交通史变成一条仍可步行和骑行的路。</p>
            <p>古道始建于公元前 312 年。可从圣塞巴斯蒂亚诺门一带出发，按体力选择卡法雷拉谷、切契莉娅·梅特拉陵墓或水道公园；周日与节假日部分路段更适合慢行。</p>
            <div className="time-note"><span>16:30</span><p><b lang="it">Luce sulla Via Appia</b><small>斜阳落在旧石路上的时刻</small></p></div>
          </article>
          <Note no="312 BC">阿皮亚古道由监察官阿庇乌斯·克劳狄乌斯主持修建，后来一路延伸至意大利南部。</Note>
        </div>

        <div className="green-index">
          <article className="green-feature">
            <span className="botanical-mark">✦</span>
            <p className="category">VILLA URBANA · 城中园林</p>
            <h3><LocalName local="Villa Borghese" zh="博尔盖塞公园" /></h3>
            <p>从博尔盖塞美术馆的巴洛克收藏走到平乔露台，只需穿过松林、湖面与开阔草地。这里适合在密集的教堂和遗址行程之间，留出一段真正无目的的散步。</p>
            <p className="green-tip">从平乔露台看人民广场，再沿台阶回到老城，是很好的黄昏收尾。</p>
          </article>
          <article>
            <span className="mini-no">N. 02</span>
            <h3><LocalName local="Gianicolo" zh="贾尼科洛山" /></h3>
            <p>这座山不属于古罗马“七丘”，却拥有开阔的城市天际线。傍晚可从特拉斯提弗列缓慢上行，在喷泉与梧桐树间看圆顶逐渐亮起。</p>
          </article>
          <article>
            <span className="mini-no">N. 03</span>
            <h3><LocalName local="Villa Doria Pamphilj" zh="多利亚·潘菲利公园" /></h3>
            <p>更宽阔、更接近居民日常的历史园林，有林荫路、草地和长距离步行空间。若在罗马停留较久，它比再排一座博物馆更能恢复体力。</p>
          </article>
        </div>
      </section>

      <section id="sapori" className="chapter chapter-sapori">
        <div className="chapter-heading dark-heading">
          <p>CAPITOLO TRE · 第三章</p>
          <h2><span lang="it">Sapori</span><small>美食 · 罗马餐桌</small></h2>
          <span className="page-no">03</span>
        </div>

        <div className="food-spread">
          <figure>
            <img
              src={theme === "modern" ? "/images/rome-food-modern.png" : "/images/rome-food-vintage.png"}
              alt={theme === "modern" ? "生成的现代美食摄影风格罗马培根蛋面、奶酪胡椒面、炸饭团与朝鲜蓟" : "复古意大利餐饮石版画风格的罗马培根蛋面、奶酪胡椒面、炸饭团与朝鲜蓟"}
            />
            <figcaption><b>图版 III</b><span><i lang="it">A tavola a Roma</i> · 罗马人的餐桌</span></figcaption>
          </figure>
          <div className="food-intro">
            <p className="category">POCHI INGREDIENTI · 少即是多</p>
            <h3>四种面，<br />其实是一套语法。</h3>
            <p>Guanciale、Pecorino Romano、黑胡椒、鸡蛋和番茄轮流登场，便写出 Carbonara、Gricia、Amatriciana 与 Cacio e pepe。罗马菜不靠装饰取胜，而靠火候、乳化和敢于把味道说得直接。</p>
            <p className="script-note" lang="it">Che bontà!</p>
            <small>“太好吃了！” · 一句真诚的餐桌赞叹</small>
          </div>
        </div>

        <div className="dish-grid">
          <article className="dish-primary">
            <span className="dish-no">01</span>
            <p className="category">PASTA · 经典面食</p>
            <h3><LocalName local="Carbonara" zh="罗马培根蛋面" /></h3>
            <p>鸡蛋、Pecorino Romano、黑胡椒与煎香的 guanciale 在离火后包裹面条。传统做法不加奶油，理想状态是浓稠顺滑，而不是炒成蛋花。</p>
          </article>
          <article>
            <span className="dish-no">02</span>
            <p className="category">PECORINO · 奶酪</p>
            <h3><LocalName local="Cacio e pepe" zh="奶酪胡椒面" /></h3>
            <p>看似只有羊奶酪与黑胡椒，真正难点却是用煮面水把它们乳化成细腻酱汁。简单得没有藏拙之处，也因此最考验手艺。</p>
          </article>
          <article>
            <span className="dish-no">03</span>
            <p className="category">FRITTO · 炸物</p>
            <h3><LocalName local="Supplì" zh="罗马炸饭团" /></h3>
            <p>番茄烩饭裹入 mozzarella，再滚上面包糠炸至金黄。趁热掰开时拉出的奶酪丝，解释了它“电话线炸饭团”的昵称。</p>
          </article>
          <article className="aperitivo-card rome-passeggiata-card">
            <span className="dish-no">18:00</span>
            <p className="category">RITUALE · 城市仪式</p>
            <h3><LocalName local="Aperitivo e passeggiata" zh="开胃酒与晚间散步" /></h3>
            <p>黄昏先在广场边喝一杯，再沿喷泉、小巷和台伯河散步，最后才坐下吃晚饭。罗马人的夜晚不急着开始，往往先把一天慢慢走完。</p>
          </article>
        </div>
      </section>

      <section id="itinerario" className="chapter chapter-itinerary">
        <div className="chapter-heading">
          <p>CAPITOLO QUATTRO · 第四章</p>
          <h2><span lang="it">Itinerario</span><small>行程 · 48 小时</small></h2>
          <span className="page-no">04</span>
        </div>

        <div className="route-days">
          <article>
            <header><span>GIORNO</span><b>01</b><small>帝国与老城</small></header>
            <ol>
              <li><time>08:30</time><p><b lang="it">Colosseo</b><span>斗兽场预约时段</span></p></li>
              <li><time>10:30</time><p><b lang="it">Foro Romano e Palatino</b><span>古罗马广场与帕拉蒂尼山</span></p></li>
              <li><time>14:30</time><p><b lang="it">Campidoglio e Pantheon</b><span>从卡比托利欧走进老城</span></p></li>
              <li><time>18:00</time><p><b lang="it">Trevi e Piazza di Spagna</b><span>喷泉、台阶与黄昏散步</span></p></li>
            </ol>
          </article>
          <article>
            <header><span>GIORNO</span><b>02</b><small>圆顶与街区</small></header>
            <ol>
              <li><time>08:00</time><p><b lang="it">Musei Vaticani</b><span>按预约时间入馆</span></p></li>
              <li><time>12:30</time><p><b lang="it">San Pietro</b><span>圣彼得广场与大教堂</span></p></li>
              <li><time>15:30</time><p><b lang="it">Villa Borghese</b><span>松林、湖面与平乔露台</span></p></li>
              <li><time>19:30</time><p><b lang="it">Trastevere</b><span>晚餐后走回台伯河</span></p></li>
            </ol>
          </article>
        </div>

        <div className="phrasebook">
          <div>
            <p className="category">PAROLE IN TASCA · 袖珍会话</p>
            <h3 lang="it">Un tavolo per due, per favore.</h3>
            <p>请给我们一张两人桌。</p>
          </div>
          <dl>
            <div><dt lang="it">Buongiorno</dt><dd>早上好 / 日安</dd></div>
            <div><dt lang="it">Dov’è la fermata?</dt><dd>车站在哪里？</dd></div>
            <div><dt lang="it">Due biglietti, grazie</dt><dd>请给我两张票</dd></div>
            <div><dt lang="it">Il conto, per favore</dt><dd>请结账</dd></div>
          </dl>
        </div>

        <div className="practical-grid">
          <div><span>ARRIVARE</span><h3>抵达</h3><p>从 Fiumicino 机场可乘 Leonardo Express 直达 Roma Termini，也可按住宿位置选择区域列车或巴士。班次与施工变化请查看 <a href="https://www.adr.it/web/aeroporti-di-roma-en/pax-fco-train" target="_blank" rel="noreferrer">机场官方交通信息 ↗</a>。</p></div>
          <div><span>MUOVERSI</span><h3>移动</h3><p>老城最适合步行，跨区再用地铁、公交与电车。票种、线路状态和无障碍信息可能调整，出发前查看 <a href="https://www.atac.roma.it/en" target="_blank" rel="noreferrer">ATAC 罗马公共交通 ↗</a>。</p></div>
          <div><span>PRENOTARE</span><h3>预约</h3><p>斗兽场与梵蒂冈博物馆应优先锁定官方预约；博尔盖塞美术馆、万神殿和特莱维喷泉的安排也可能变化，切勿只凭旧攻略。</p></div>
        </div>
      </section>

      <footer>
        <div className="footer-mark">R</div>
        <div>
          <p className="footer-title" lang="it">Roma, ci vediamo alla prossima curva.</p>
          <p>愿你记住的不只是斗兽场，也有松影落在旧石路上，以及一盘面端上来时升起的胡椒香。</p>
        </div>
        <div className="sources">
          <span>FONTI · 资料来源</span>
          <a href="https://www.turismoroma.it/en" target="_blank" rel="noreferrer">Turismo Roma</a>
          <a href="https://colosseo.it/en/visit/orari-e-biglietti/" target="_blank" rel="noreferrer">Parco archeologico del Colosseo</a>
          <a href="https://www.museivaticani.va/content/museivaticani/en.html" target="_blank" rel="noreferrer">Musei Vaticani</a>
          <a href="https://www.atac.roma.it/en" target="_blank" rel="noreferrer">ATAC Roma</a>
          <a href="https://www.adr.it/web/aeroporti-di-roma-en/pax-fco-train" target="_blank" rel="noreferrer">Aeroporti di Roma</a>
        </div>
        <p className="colophon">CURATED AND ILLUSTRATED · MMXXVI</p>
      </footer>
    </div>
  );
}
