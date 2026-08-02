"use client";

import { useEffect, useRef, useState } from "react";
import LondonGuide from "./LondonGuide";

type DestinationKey = "milan" | "london";
type ThemeKey = "vintage" | "modern";

const chapterSets = {
  milan: [
    { id: "prologue", no: "00", local: "Prologo", zh: "序章" },
    { id: "cultura", no: "01", local: "Cultura", zh: "人文" },
    { id: "natura", no: "02", local: "Natura", zh: "自然" },
    { id: "sapori", no: "03", local: "Sapori", zh: "美食" },
    { id: "itinerario", no: "04", local: "Itinerario", zh: "行程" },
  ],
  london: [
    { id: "prologue", no: "00", local: "Foreword", zh: "序章" },
    { id: "cultura", no: "01", local: "Heritage", zh: "人文" },
    { id: "natura", no: "02", local: "Nature", zh: "自然" },
    { id: "sapori", no: "03", local: "Flavours", zh: "美食" },
    { id: "itinerario", no: "04", local: "Itinerary", zh: "行程" },
  ],
} as const;

const destinationMeta = {
  milan: {
    edition: "TACCUINO № 07",
    kicker: "Viaggio in Italia",
    city: "MILANO",
    cityZh: "米兰漫游志",
    copy: <>一册关于尖塔、运河<br />与藏红花香气的城市读本</>,
    coordinates: ["45.4642° N", "9.1900° E"],
    region: "Lombardia · Italia",
    slug: "milano",
  },
  london: {
    edition: "TRAVEL BOOK № 08",
    kicker: "Journey through Britain",
    city: "LONDON",
    cityZh: "伦敦漫游志",
    copy: <>一册关于钟声、河流<br />与下午茶时光的城市读本</>,
    coordinates: ["51.5072° N", "0.1276° W"],
    region: "England · United Kingdom",
    slug: "london",
  },
} as const;

function BilingualName({ it, zh }: { it: string; zh: string }) {
  return (
    <span className="bilingual-name">
      <span lang="it">{it}</span>
      <small>{zh}</small>
    </span>
  );
}

function MarginNote({ children, no }: { children: React.ReactNode; no: string }) {
  return (
    <aside className="margin-note">
      <span>{no}</span>
      <p>{children}</p>
    </aside>
  );
}

export default function Home() {
  const [destination, setDestination] = useState<DestinationKey>("milan");
  const [theme, setTheme] = useState<ThemeKey>("vintage");
  const [transitionTarget, setTransitionTarget] = useState<ThemeKey | null>(null);
  const [active, setActive] = useState("prologue");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageExportState, setImageExportState] = useState<"idle" | "working" | "done" | "error">("idle");
  const [imageExportProgress, setImageExportProgress] = useState(0);
  const [longExportState, setLongExportState] = useState<"idle" | "working" | "done" | "error">("idle");
  const themeSwapTimer = useRef<number | null>(null);
  const themeEndTimer = useRef<number | null>(null);
  const currentDestination = destinationMeta[destination];
  const currentChapters = chapterSets[destination];

  useEffect(() => {
    const readGuideOptions = () => {
      const params = new URLSearchParams(window.location.search);
      const city = params.get("city");
      setDestination(city === "london" ? "london" : "milan");
      setTheme(params.get("style") === "modern" ? "modern" : "vintage");
    };
    readGuideOptions();
    window.addEventListener("popstate", readGuideOptions);
    return () => window.removeEventListener("popstate", readGuideOptions);
  }, []);

  useEffect(() => {
    const cityTitle = destination === "london" ? "London · 伦敦漫游志" : "Milano · 米兰漫游志";
    document.title = `${cityTitle} · ${theme === "modern" ? "现代影像版" : "复古版"}`;
  }, [destination, theme]);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      let current = "prologue";
      for (const item of currentChapters) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.38) {
          current = item.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentChapters]);

  useEffect(() => () => {
    if (themeSwapTimer.current !== null) window.clearTimeout(themeSwapTimer.current);
    if (themeEndTimer.current !== null) window.clearTimeout(themeEndTimer.current);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const switchTheme = (next: ThemeKey) => {
    if (next === theme || transitionTarget !== null) return;

    const applyTheme = () => {
      const url = new URL(window.location.href);
      url.searchParams.set("style", next);
      window.history.pushState({ theme: next }, "", `${url.pathname}${url.search}${url.hash}`);
      setTheme(next);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyTheme();
      return;
    }

    setTransitionTarget(next);
    themeSwapTimer.current = window.setTimeout(() => {
      applyTheme();
      themeEndTimer.current = window.setTimeout(() => setTransitionTarget(null), 700);
    }, 520);
  };

  const exportAsImage = async () => {
    if (imageExportState === "working") return;
    setImageExportState("working");
    setImageExportProgress(0);

    try {
      const book = document.querySelector<HTMLElement>(".book-pages");
      if (!book) throw new Error("Guide content was not found");

      const pageDefinitions = [
        { id: "prologue", file: `01-${currentDestination.slug}-${theme}-prologue.png` },
        { id: "cultura", file: `02-${currentDestination.slug}-${theme}-culture.png` },
        { id: "natura", file: `03-${currentDestination.slug}-${theme}-nature.png` },
        { id: "sapori", file: `04-${currentDestination.slug}-${theme}-flavours.png` },
        { id: "itinerario", file: `05-${currentDestination.slug}-${theme}-itinerary.png` },
      ];

      await document.fonts?.ready;
      const images = Array.from(book.querySelectorAll<HTMLImageElement>("img"));
      await Promise.all(images.map((image) => {
        if (image.complete) return Promise.resolve();
        return new Promise<void>((resolve) => {
          image.addEventListener("load", () => resolve(), { once: true });
          image.addEventListener("error", () => resolve(), { once: true });
        });
      }));

      const { toBlob } = await import("html-to-image");
      const { default: JSZip } = await import("jszip");
      const zip = new JSZip();

      for (let index = 0; index < pageDefinitions.length; index += 1) {
        const definition = pageDefinitions[index];
        const page = document.getElementById(definition.id);
        if (!page) throw new Error(`Page ${definition.id} was not found`);

        setImageExportProgress(index + 1);
        const rect = page.getBoundingClientRect();
        const width = Math.ceil(rect.width);
        const height = page.scrollHeight;
        const blob = await toBlob(page, {
          backgroundColor: theme === "modern" ? "#f4f5f6" : definition.id === "sapori" ? "#34332e" : "#e8dcc0",
          width,
          height,
          pixelRatio: 1.5,
          cacheBust: true,
          skipFonts: true,
          skipAutoScale: true,
          style: {
            width: `${width}px`,
            height: `${height}px`,
            margin: "0",
            boxSizing: "border-box",
          },
        });
        if (!blob) throw new Error("Image creation failed");
        zip.file(definition.file, blob);
      }

      const archive = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(archive);
      const download = document.createElement("a");
      download.href = url;
      download.download = `${currentDestination.slug}-${theme}-travel-guide-pages.zip`;
      document.body.appendChild(download);
      download.click();
      download.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setImageExportState("done");
      window.setTimeout(() => setImageExportState("idle"), 2500);
    } catch (error) {
      console.error(error);
      setImageExportState("error");
    }
  };

  const exportAsLongImage = async () => {
    if (longExportState === "working") return;
    setLongExportState("working");

    try {
      const book = document.querySelector<HTMLElement>(".book-pages");
      if (!book) throw new Error("Guide content was not found");

      await document.fonts?.ready;
      const images = Array.from(book.querySelectorAll<HTMLImageElement>("img"));
      await Promise.all(images.map((image) => {
        if (image.complete) return Promise.resolve();
        return new Promise<void>((resolve) => {
          image.addEventListener("load", () => resolve(), { once: true });
          image.addEventListener("error", () => resolve(), { once: true });
        });
      }));

      const { toBlob } = await import("html-to-image");
      const rect = book.getBoundingClientRect();
      const width = Math.ceil(rect.width);
      const height = book.scrollHeight;
      const blob = await toBlob(book, {
        backgroundColor: theme === "modern" ? "#f4f5f6" : "#e8dcc0",
        width,
        height,
        pixelRatio: 1.25,
        cacheBust: true,
        skipFonts: true,
        skipAutoScale: true,
        style: {
          width: `${width}px`,
          height: `${height}px`,
          margin: "0",
          boxSizing: "border-box",
        },
      });
      if (!blob) throw new Error("Long image creation failed");

      const url = URL.createObjectURL(blob);
      const download = document.createElement("a");
      download.href = url;
      download.download = `${currentDestination.slug}-${theme}-travel-guide-long.png`;
      document.body.appendChild(download);
      download.click();
      download.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setLongExportState("done");
      window.setTimeout(() => setLongExportState("idle"), 2500);
    } catch (error) {
      console.error(error);
      setLongExportState("error");
    }
  };

  return (
    <main
      className={`destination-${destination} theme-${theme}${transitionTarget ? " is-theme-transitioning" : ""}`}
      aria-busy={transitionTarget !== null}
    >
      <div className="reading-progress" style={{ width: `${progress}%` }} />
      <div className={`theme-transition-layer transition-to-${transitionTarget ?? theme}`} aria-hidden="true">
        <span>{transitionTarget === "modern" ? "PHOTO EDITION" : "VINTAGE EDITION"}</span>
        <small>{transitionTarget === "modern" ? "现代实景版" : "复古书页版"}</small>
      </div>

      <button
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="book-index"
      >
        <span>INDICE · 目录</span>
        <b>{menuOpen ? "×" : "☰"}</b>
      </button>

      <aside className={`book-index ${menuOpen ? "is-open" : ""}`} id="book-index">
        <div className="index-brand">
          <span className="edition">{currentDestination.edition}</span>
          <p className="brand-kicker">{currentDestination.kicker}</p>
          <h1>{currentDestination.city}</h1>
          <p className="brand-cn">{currentDestination.cityZh}</p>
          <div className="brand-rule"><i /></div>
          <p className="brand-copy">{currentDestination.copy}</p>
        </div>

        <a className="library-return" href="/" aria-label="返回旅行目的地入口页">
          <span aria-hidden="true">←</span>
          <b>{destination === "london" ? "Travel library" : "Archivio di viaggio"}</b>
          <small>返回旅行书架</small>
        </a>

        <div className="theme-switcher" role="group" aria-label="切换页面与插图风格">
          <button type="button" disabled={transitionTarget !== null} className={theme === "vintage" ? "active" : ""} onClick={() => switchTheme("vintage")}>
            <b>VINTAGE</b><small>复古书页</small>
          </button>
          <button type="button" disabled={transitionTarget !== null} className={theme === "modern" ? "active" : ""} onClick={() => switchTheme("modern")}>
            <b>PHOTO</b><small>现代实景</small>
          </button>
        </div>

        <nav aria-label="页面目录">
          <p className="nav-label">{destination === "london" ? "INDEX · 目录" : "INDICE · 目录"}</p>
          {currentChapters.map((item) => (
            <button
              key={item.id}
              className={active === item.id ? "active" : ""}
              onClick={() => goTo(item.id)}
            >
              <span className="nav-no">{item.no}</span>
              <span><em>{item.local}</em><small>{item.zh}</small></span>
            </button>
          ))}
        </nav>

        <button
          className="export-button"
          type="button"
          onClick={() => window.print()}
          aria-label={`导出${currentDestination.cityZh}为 PDF 或打印`}
        >
          <span className="export-icon" aria-hidden="true">⇩</span>
          <span>
            <em lang={destination === "london" ? "en-GB" : "it"}>
              {destination === "london" ? "Export the book" : "Esporta il libro"}
            </em>
            <small>导出 PDF · 打印</small>
          </span>
        </button>

        <button
          className="export-button image-export-button"
          type="button"
          onClick={exportAsImage}
          disabled={imageExportState === "working"}
          aria-label={`将${currentDestination.cityZh}按章节导出为分页 PNG 压缩包`}
        >
          <span className="export-icon image-icon" aria-hidden="true">▣</span>
          <span>
            <em lang={destination === "london" ? "en-GB" : "it"}>
              {destination === "london" ? "Export pages" : "Esporta immagine"}
            </em>
            <small>
              {imageExportState === "working" && `正在生成第 ${imageExportProgress}/5 页…`}
              {imageExportState === "done" && "分页 PNG 已下载"}
              {imageExportState === "error" && "导出失败，请重试"}
              {imageExportState === "idle" && "按页导出 · PNG ZIP"}
            </small>
          </span>
        </button>

        <button
          className="export-button image-export-button"
          type="button"
          onClick={exportAsLongImage}
          disabled={longExportState === "working"}
          aria-label={`将${currentDestination.cityZh}导出为完整 PNG 长图`}
        >
          <span className="export-icon image-icon" aria-hidden="true">▥</span>
          <span>
            <em lang={destination === "london" ? "en-GB" : "it"}>
              {destination === "london" ? "Long image" : "Immagine lunga"}
            </em>
            <small>
              {longExportState === "working" && "正在生成长图…"}
              {longExportState === "done" && "长图 PNG 已下载"}
              {longExportState === "error" && "导出失败，请重试"}
              {longExportState === "idle" && "导出长图 · PNG"}
            </small>
          </span>
        </button>

        <div className="index-foot">
          <p><span>{currentDestination.coordinates[0]}</span><span>{currentDestination.coordinates[1]}</span></p>
          <p>{currentDestination.region}</p>
        </div>
      </aside>

      {destination === "milan" ? (
      <div className="book-pages">
        <header className="masthead">
          <div className="crumb"><span>ITALIA</span><i>◆</i><span>LOMBARDIA</span><i>◆</i><b>MILANO</b></div>
          <p>{theme === "modern" ? "PHOTO EDITION · 现代实景版" : "EDIZIONE PER VIAGGIATORI · 旅行者版本"}</p>
        </header>

        <section id="prologue" className="chapter hero-chapter">
          <div className="hero-title">
            <p className="eyebrow">LA CITTÀ CHE CORRE E CONSERVA</p>
            <h2><span lang="it">Milano</span><small>米兰</small></h2>
            <p className="hero-subtitle">疾行，也珍藏的城市</p>
          </div>

          <figure className="hero-figure">
            <img
              src={theme === "modern" ? "/images/milano-duomo-modern.png" : "/images/milano-duomo.png"}
              alt={theme === "modern" ? "现代实景摄影风格的米兰主教座堂与黄色电车" : "复古石版画风格的米兰主教座堂与黄色电车"}
            />
            <figcaption>
              <b>图版 I</b>
              <span><i lang="it">Piazza del Duomo</i> · 主教座堂广场</span>
              <small>尖塔像一片凝固的石林；黄色电车从城市的旧日穿行至今。</small>
            </figcaption>
          </figure>

          <div className="prologue-grid">
            <div className="lead-copy">
              <span className="drop-cap">米</span>
              <p>兰很少把全部魅力交给匆匆过客。它的表面是时装周、玻璃幕墙与准点抵达的电车，内里却保存着哥特尖塔、文艺复兴的餐厅壁画，以及午后吧台上轻响的瓷杯。</p>
              <p>读这座城，最好从中心向外缓慢展开：先抬头看大教堂，再走入布雷拉的窄街；傍晚沿运河散步，让一杯 <i lang="it">aperitivo</i> 把白昼交给夜色。</p>
            </div>
            <blockquote>
              <span>“</span>
              <p lang="it">Milano non si visita soltanto: si legge, strato dopo strato.</p>
              <small>米兰不只用来参观，更要一层一层地阅读。</small>
            </blockquote>
            <div className="fact-card">
              <p className="fact-label">PRIMA PAGINA · 扉页速览</p>
              <dl>
                <div><dt>最佳步调</dt><dd>2—3 日</dd></div>
                <div><dt>城市气质</dt><dd>克制、精确、现代</dd></div>
                <div><dt>适合时节</dt><dd>春末 / 初秋</dd></div>
                <div><dt>不可错过</dt><dd>登上大教堂屋顶</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section id="cultura" className="chapter chapter-cultura">
          <div className="chapter-heading">
            <p>CAPITOLO PRIMO · 第一章</p>
            <h2><span lang="it">Cultura</span><small>人文 · 城市记忆</small></h2>
            <span className="page-no">01</span>
          </div>

          <article className="feature-duomo">
            <div className="feature-number">I</div>
            <div>
              <p className="category">ARCHITETTURA · 建筑</p>
              <h3><BilingualName it="Duomo di Milano" zh="米兰主教座堂" /></h3>
              <p className="standfirst">六个世纪，将一座粉白色大理石山雕进城市中心。</p>
              <div className="columns">
                <p>始建于 1386 年，<span lang="it">Duomo</span> 是意大利规模最大、结构最复杂的哥特式建筑之一。来自 <span lang="it">Candoglia</span>（坎多利亚）的粉白大理石，在日光里从冷灰转为淡金。</p>
                <p>真正不能略过的是 <span lang="it">Terrazze del Duomo</span>（主教座堂屋顶平台）。行走于飞扶壁与尖塔之间，抬头可见最高处的金色 <span lang="it">Madonnina</span>（小圣母像），远处则是现代米兰的天际线。</p>
              </div>
              <div className="visit-strip">
                <span><b>建议</b> 开门后尽早登顶</span>
                <span><b>留时</b> 2—3 小时</span>
                <a href="https://www.duomomilano.it/en/" target="_blank" rel="noreferrer">官方信息 ↗</a>
              </div>
            </div>
            <MarginNote no="1386">由米兰公爵 <span lang="it">Gian Galeazzo Visconti</span>（吉安·加莱亚佐·维斯孔蒂）推动开工。</MarginNote>
          </article>

          <div className="culture-mosaic">
            <article className="art-card last-supper">
              <p className="category">CAPOLAVORO · 杰作</p>
              <span className="art-index">02</span>
              <h3><BilingualName it="L’Ultima Cena" zh="《最后的晚餐》" /></h3>
              <p>在 <span lang="it">Santa Maria delle Grazie</span>（圣母恩宠教堂）修道院餐厅里，<span lang="it">Leonardo da Vinci</span>（莱奥纳多·达·芬奇）把一瞬间的惊愕与人性铺展在墙面上。</p>
              <p className="tip">预约提示：参观名额严格受限，尽量提前预约，并以官网时段为准。</p>
              <a href="https://cenacolovinciano.org/en/" target="_blank" rel="noreferrer">MUSEO DEL CENACOLO VINCIANO ↗</a>
            </article>

            <article className="art-card brera-card">
              <p className="category">QUARTIERE · 街区</p>
              <span className="art-index">03</span>
              <h3><BilingualName it="Brera" zh="布雷拉" /></h3>
              <p>石板路、赭色墙面、画廊与小型设计店组成米兰最具艺术气息的街区。<span lang="it">Pinacoteca di Brera</span>（布雷拉画廊）收藏拉斐尔、卡拉瓦乔等人的作品。</p>
              <p className="route-note">适合路线：<span lang="it">Via Brera → Orto Botanico → Pinacoteca</span></p>
            </article>

            <article className="art-card scala-card">
              <p className="category">MUSICA · 音乐</p>
              <span className="art-index">04</span>
              <h3><BilingualName it="Teatro alla Scala" zh="斯卡拉歌剧院" /></h3>
              <p>1778 年启幕的歌剧圣殿，外表克制，内部却是红绒、鎏金与声学奇迹。即使无票看演出，也可参观剧院博物馆。</p>
            </article>

            <article className="art-card castle-card">
              <p className="category">STORIA · 历史</p>
              <span className="art-index">05</span>
              <h3><BilingualName it="Castello Sforzesco" zh="斯福尔扎城堡" /></h3>
              <p>曾是防御工事与公爵居所，如今容纳多座市立博物馆。米开朗基罗未完成的 <span lang="it">Pietà Rondanini</span>（《隆达尼尼圣殇》）在此安静地留下凿痕。</p>
            </article>
          </div>
        </section>

        <section id="natura" className="chapter chapter-natura">
          <div className="chapter-heading">
            <p>CAPITOLO SECONDO · 第二章</p>
            <h2><span lang="it">Natura</span><small>自然 · 城市呼吸</small></h2>
            <span className="page-no">02</span>
          </div>

          <div className="nature-layout">
            <figure className="navigli-figure">
              <img
                src={theme === "modern" ? "/images/milano-navigli-modern.png" : "/images/milano-navigli.png"}
                alt={theme === "modern" ? "现代实景摄影风格的米兰纳维利运河蓝调时刻" : "复古版画风格的米兰纳维利运河黄昏"}
              />
              <figcaption><b>图版 II</b><span><i lang="it">Navigli al crepuscolo</i> · 暮色中的纳维利运河</span></figcaption>
            </figure>
            <article className="navigli-copy">
              <p className="category">ACQUA · 水脉</p>
              <h3><BilingualName it="Navigli" zh="纳维利运河区" /></h3>
              <p className="standfirst">米兰并非海港，却曾借一张运河网络运来大教堂的石材，也把城市与伦巴第平原连接起来。</p>
              <p>今天最适合沿 <span lang="it">Naviglio Grande</span>（大运河）和 <span lang="it">Darsena</span>（旧港）步行。日落前抵达，看旧式栏杆公寓的倒影在水面变深，等酒吧亮起第一盏灯。</p>
              <div className="time-note"><span>18:30</span><p><b lang="it">Passeggiata serale</b><small>傍晚散步的理想时刻</small></p></div>
            </article>
            <MarginNote no="90 KM">15—16 世纪，米兰一度拥有约 90 公里的可航行运河。</MarginNote>
          </div>

          <div className="green-index">
            <article className="green-feature">
              <span className="botanical-mark">✦</span>
              <p className="category">PARCO · 公园</p>
              <h3><BilingualName it="Parco Sempione" zh="森皮奥内公园" /></h3>
              <p>从斯福尔扎城堡后门向西展开，是市中心最舒展的一片绿地。草坪、小湖、林荫道与 <span lang="it">Arco della Pace</span>（和平门）连成适合午后散步的轴线。</p>
              <p className="green-tip">带一份 <i lang="it">panino</i>，从城堡步行至和平门约 20 分钟。</p>
            </article>
            <article>
              <span className="mini-no">N. 02</span>
              <h3><BilingualName it="Orto Botanico di Brera" zh="布雷拉植物园" /></h3>
              <p>藏在布雷拉宫墙后的静谧花园，小径、药草与温室让喧闹的艺术区忽然慢下来。</p>
            </article>
            <article>
              <span className="mini-no">N. 03</span>
              <h3><BilingualName it="Bosco Verticale" zh="垂直森林" /></h3>
              <p>在 <span lang="it">Porta Nuova</span>（新门区），树木与灌木攀上住宅塔楼，构成米兰面向未来的城市自然实验。</p>
            </article>
          </div>
        </section>

        <section id="sapori" className="chapter chapter-sapori">
          <div className="chapter-heading dark-heading">
            <p>CAPITOLO TERZO · 第三章</p>
            <h2><span lang="it">Sapori</span><small>美食 · 伦巴第餐桌</small></h2>
            <span className="page-no">03</span>
          </div>

          <div className="food-spread">
            <figure>
              <img
                src={theme === "modern" ? "/images/milano-tavola-modern.png" : "/images/milano-tavola.png"}
                alt={theme === "modern" ? "米兰烩饭、炸牛排、潘妮托尼与开胃酒的现代实景美食摄影" : "米兰烩饭、炸牛排、潘妮托尼与开胃酒的复古美食插画"}
              />
              <figcaption><b>图版 III</b><span><i lang="it">La tavola milanese</i> · 米兰人的餐桌</span></figcaption>
            </figure>
            <div className="food-intro">
              <p className="category">A TAVOLA · 入席</p>
              <h3>金黄、酥脆，<br />以及傍晚六点。</h3>
              <p>米兰菜不靠繁复取胜。黄油、米、牛肉与藏红花构成温厚底色；现代城市生活则发明了另一种仪式——下班后以一杯酒和几碟小食，给夜晚留出序言。</p>
              <p className="script-note" lang="it">Buon appetito!</p>
              <small>“祝你胃口好！” · 用餐前的常用祝语</small>
            </div>
          </div>

          <div className="dish-grid">
            <article className="dish-primary">
              <span className="dish-no">01</span>
              <p className="category">PRIMO · 第一道</p>
              <h3><BilingualName it="Risotto alla milanese" zh="米兰藏红花烩饭" /></h3>
              <p>米粒以高汤慢慢煮开，用藏红花染成明亮金色，最后拌入黄油与奶酪。常与 <span lang="it">ossobuco</span>（炖小牛膝）同食。</p>
            </article>
            <article>
              <span className="dish-no">02</span>
              <p className="category">SECONDO · 主菜</p>
              <h3><BilingualName it="Cotoletta alla milanese" zh="米兰式炸牛排" /></h3>
              <p>带骨小牛排裹面包屑，以澄清黄油煎至金黄；边缘酥脆，中心仍柔嫩。</p>
            </article>
            <article>
              <span className="dish-no">03</span>
              <p className="category">DOLCE · 甜点</p>
              <h3><BilingualName it="Panettone" zh="潘妮托尼甜面包" /></h3>
              <p>高耸圆顶里藏着葡萄干与糖渍果皮。虽是圣诞传统，今日在老牌糕点店常年可见。</p>
            </article>
            <article className="aperitivo-card">
              <span className="dish-no">18:00</span>
              <p className="category">RITO · 城市仪式</p>
              <h3><BilingualName it="Aperitivo" zh="开胃酒时光" /></h3>
              <p>它不是“喝一杯”那么简单，而是工作与晚餐之间的社交缓冲。点一杯苦味酒，佐以橄榄、奶酪或小食，在 <span lang="it">Navigli</span> 或 <span lang="it">Brera</span> 看城市慢下来。</p>
            </article>
          </div>
        </section>

        <section id="itinerario" className="chapter chapter-itinerary">
          <div className="chapter-heading">
            <p>CAPITOLO QUARTO · 第四章</p>
            <h2><span lang="it">Itinerario</span><small>行程 · 48 小时</small></h2>
            <span className="page-no">04</span>
          </div>

          <div className="route-days">
            <article>
              <header><span>GIORNO</span><b>01</b><small>石与画的一天</small></header>
              <ol>
                <li><time>08:30</time><p><b lang="it">Duomo & Terrazze</b><span>大教堂与屋顶</span></p></li>
                <li><time>11:30</time><p><b lang="it">Galleria Vittorio Emanuele II</b><span>埃马努埃莱二世长廊</span></p></li>
                <li><time>14:00</time><p><b lang="it">Brera</b><span>街区漫步与画廊</span></p></li>
                <li><time>17:30</time><p><b lang="it">Castello & Parco Sempione</b><span>城堡与公园</span></p></li>
              </ol>
            </article>
            <article>
              <header><span>GIORNO</span><b>02</b><small>达·芬奇与运河</small></header>
              <ol>
                <li><time>09:00</time><p><b lang="it">Santa Maria delle Grazie</b><span>《最后的晚餐》</span></p></li>
                <li><time>11:30</time><p><b lang="it">Sant’Ambrogio</b><span>圣安布罗焦圣殿</span></p></li>
                <li><time>15:00</time><p><b lang="it">Porta Ticinese</b><span>提契内塞门街区</span></p></li>
                <li><time>18:30</time><p><b lang="it">Navigli & Aperitivo</b><span>运河与开胃酒</span></p></li>
              </ol>
            </article>
          </div>

          <div className="phrasebook">
            <div>
              <p className="category">PICCOLO FRASARIO · 袖珍会话</p>
              <h3 lang="it">Parla piano, per favore.</h3>
              <p>请说慢一点。</p>
            </div>
            <dl>
              <div><dt lang="it">Buongiorno</dt><dd>你好 / 早上好</dd></div>
              <div><dt lang="it">Un biglietto, per favore</dt><dd>请给我一张票</dd></div>
              <div><dt lang="it">Dov’è la metro?</dt><dd>地铁在哪里？</dd></div>
              <div><dt lang="it">Il conto, per favore</dt><dd>请结账</dd></div>
            </dl>
          </div>

          <div className="practical-grid">
            <div><span>ARRIVARE</span><h3>抵达</h3><p><b lang="it">Malpensa Express</b> 连接马尔彭萨机场与市区；选择车次时留意终点是 <b lang="it">Cadorna</b> 还是 <b lang="it">Milano Centrale</b>。</p></div>
            <div><span>MUOVERSI</span><h3>移动</h3><p>历史中心适合步行，较远街区用地铁与电车衔接。购票与刷卡规则可能调整，出发前查看 <a href="https://www.atm.it/en/Pages/default.aspx" target="_blank" rel="noreferrer">ATM Milano ↗</a>。</p></div>
            <div><span>PRENOTARE</span><h3>预约</h3><p>《最后的晚餐》与大教堂屋顶是优先预约项；歌剧季与设计周期间，住宿也应尽早安排。</p></div>
          </div>
        </section>

        <footer>
          <div className="footer-mark">M</div>
          <div>
            <p className="footer-title" lang="it">Arrivederci, Milano.</p>
            <p>愿你记住的不只是尖塔，也有石板路被雨打湿后的颜色。</p>
          </div>
          <div className="sources">
            <span>FONTI · 资料来源</span>
            <a href="https://www.italia.it/en/lombardy/milan" target="_blank" rel="noreferrer">Italia.it</a>
            <a href="https://www.duomomilano.it/en/" target="_blank" rel="noreferrer">Duomo di Milano</a>
            <a href="https://cenacolovinciano.org/en/" target="_blank" rel="noreferrer">Cenacolo Vinciano</a>
          </div>
          <p className="colophon">CURATO E ILLUSTRATO · MMXXVI</p>
        </footer>
      </div>
      ) : (
        <LondonGuide theme={theme} />
      )}
    </main>
  );
}
