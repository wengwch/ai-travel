"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const catalogue = [
  {
    code: "01",
    local: "Italia",
    zh: "意大利",
    note: "ARTE · PIAZZE · SAPORI",
    cities: [
      {
        slug: "milan",
        local: "Milano",
        zh: "米兰",
        region: "Lombardia · 伦巴第",
        description: "尖塔、运河与藏红花香气，一册关于克制与现代的城市读本。",
        vintageImage: "/images/milano-duomo.png",
        modernImage: "/images/milano-duomo-modern.png",
        alt: "米兰主教座堂与黄色电车",
        volume: "TACCUINO № 07",
      },
    ],
  },
  {
    code: "02",
    local: "United Kingdom",
    zh: "英国",
    note: "HERITAGE · RIVER · TEA",
    cities: [
      {
        slug: "london",
        local: "London",
        zh: "伦敦",
        region: "England · 英格兰",
        description: "钟声、泰晤士河与下午茶时光，在古老仪典与多元街区之间行走。",
        vintageImage: "/images/london-westminster.png",
        modernImage: "/images/london-westminster-modern.png",
        alt: "伦敦威斯敏斯特与红色双层巴士",
        volume: "TRAVEL BOOK № 08",
      },
    ],
  },
  {
    code: "03",
    local: "Zhōngguó",
    zh: "中国",
    note: "AXIS · RIVERS · FLAVOURS",
    cities: [
      {
        slug: "beijing",
        local: "Běijīng",
        zh: "北京",
        region: "北京市 · 华北",
        description: "城门、胡同与皇家园林，一册在宏大轴线和日常烟火之间展开的城市读本。",
        vintageImage: "/images/beijing-hero-vintage.png",
        modernImage: "/images/beijing-hero-modern.png",
        alt: "北京故宫宫殿中轴线与朱墙金瓦",
        volume: "TRAVEL BOOK № 09",
      },
      {
        slug: "shanghai",
        local: "Shànghǎi",
        zh: "上海",
        region: "上海市 · 华东",
        description: "江河、里弄与天际线，一册在海派旧梦和当代节奏之间穿行的城市读本。",
        vintageImage: "/images/shanghai-hero-vintage.png",
        modernImage: "/images/shanghai-hero-modern.png",
        alt: "上海外滩、黄浦江与浦东天际线",
        volume: "TRAVEL BOOK № 10",
      },
    ],
  },
] as const;

type Country = (typeof catalogue)[number];

function DestinationShelf({ country }: { country: Country }) {
  const shelfRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<number | null>(null);
  const hoverTurnTimerRef = useRef<number | null>(null);
  const hoverDirectionRef = useRef<-1 | 1 | null>(null);
  const lastHoverTurnAtRef = useRef(0);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [controlsVisible, setControlsVisible] = useState(true);

  const updateNavigation = useCallback(() => {
    const shelf = shelfRef.current;
    if (!shelf) return;

    const items = shelf.querySelectorAll<HTMLElement>(
      ".destination-volume, .future-volume",
    );
    const lastItem = items[items.length - 1];
    const lastItemLeft = lastItem
      ? lastItem.getBoundingClientRect().left -
        shelf.getBoundingClientRect().left +
        shelf.scrollLeft
      : 0;

    setCanPrevious(shelf.scrollLeft > 4);
    setCanNext(shelf.scrollLeft < lastItemLeft - 4);
  }, []);

  const wakeControls = useCallback(() => {
    setControlsVisible(true);
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
    }
    hideTimerRef.current = window.setTimeout(() => {
      setControlsVisible(false);
    }, 1800);
  }, []);

  const pinControlsVisible = useCallback(() => {
    setControlsVisible(true);
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const stopHoverTurning = useCallback(() => {
    if (hoverTurnTimerRef.current !== null) {
      window.clearInterval(hoverTurnTimerRef.current);
      hoverTurnTimerRef.current = null;
    }
    hoverDirectionRef.current = null;
    wakeControls();
  }, [wakeControls]);

  useEffect(() => {
    updateNavigation();
    wakeControls();
    window.addEventListener("resize", updateNavigation);

    return () => {
      window.removeEventListener("resize", updateNavigation);
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
      }
      if (hoverTurnTimerRef.current !== null) {
        window.clearInterval(hoverTurnTimerRef.current);
      }
    };
  }, [updateNavigation, wakeControls]);

  const turnPage = (direction: -1 | 1) => {
    const shelf = shelfRef.current;
    if (!shelf) return;

    const items = Array.from(
      shelf.querySelectorAll<HTMLElement>(".destination-volume, .future-volume"),
    );
    if (!items.length) return;

    const shelfLeft = shelf.getBoundingClientRect().left;
    const itemLeft = (item: HTMLElement) =>
      item.getBoundingClientRect().left - shelfLeft + shelf.scrollLeft;
    const currentIndex = items.reduce((closest, item, index) => {
      const currentDistance = Math.abs(itemLeft(items[closest]) - shelf.scrollLeft);
      const nextDistance = Math.abs(itemLeft(item) - shelf.scrollLeft);
      return nextDistance < currentDistance ? index : closest;
    }, 0);
    const targetIndex = Math.min(
      items.length - 1,
      Math.max(0, currentIndex + direction),
    );

    shelf.scrollTo({ left: itemLeft(items[targetIndex]), behavior: "smooth" });
    wakeControls();
  };

  const startHoverTurning = (direction: -1 | 1) => {
    if (hoverTurnTimerRef.current !== null) {
      window.clearInterval(hoverTurnTimerRef.current);
    }

    const triggerHoverTurn = () => {
      const now = Date.now();
      if (now - lastHoverTurnAtRef.current < 500) return;

      lastHoverTurnAtRef.current = now;
      turnPage(direction);
    };

    hoverDirectionRef.current = direction;
    triggerHoverTurn();
    pinControlsVisible();
    hoverTurnTimerRef.current = window.setInterval(() => {
      triggerHoverTurn();
      pinControlsVisible();
    }, 1500);
  };

  useEffect(() => {
    const reachedHoverEdge =
      (hoverDirectionRef.current === -1 && !canPrevious) ||
      (hoverDirectionRef.current === 1 && !canNext);

    if (reachedHoverEdge) stopHoverTurning();
  }, [canPrevious, canNext, stopHoverTurning]);

  return (
    <div
      className={`destination-carousel${controlsVisible ? " controls-visible" : ""}`}
      onPointerMove={wakeControls}
      onPointerDown={wakeControls}
      onFocusCapture={wakeControls}
    >
      <button
        type="button"
        className="shelf-turn shelf-turn-previous"
        onPointerEnter={(event) => {
          if (event.pointerType !== "touch") startHoverTurning(-1);
        }}
        onPointerLeave={stopHoverTurning}
        onPointerUp={(event) => {
          if (event.pointerType === "touch") turnPage(-1);
        }}
        onClick={(event) => {
          if (event.detail === 0) turnPage(-1);
        }}
        disabled={!canPrevious}
        aria-label={`查看${country.zh}上一个目的地`}
      >
        <span aria-hidden="true">‹</span>
      </button>

      <div
        ref={shelfRef}
        className="destination-shelf"
        role="region"
        aria-label={`${country.zh}目的地横向列表`}
        tabIndex={0}
        onScroll={() => {
          updateNavigation();
          if (hoverDirectionRef.current === null) {
            wakeControls();
          } else {
            pinControlsVisible();
          }
        }}
      >
        {country.cities.map((city) => (
          <article
            className={`destination-volume volume-${city.slug}`}
            key={city.slug}
          >
            <figure className="volume-preview">
              <div><img src={city.vintageImage} alt={`${city.alt}的复古插画版本`} /><span>VINTAGE</span></div>
              <div><img src={city.modernImage} alt={`${city.alt}的现代实景摄影版本`} /><span>MODERN</span></div>
              <figcaption>{city.volume}</figcaption>
            </figure>
            <div className="volume-copy">
              <p>{city.region}</p>
              <h3><span>{city.local}</span><small>{city.zh}</small></h3>
              <p>{city.description}</p>
              <div className="style-entry" aria-label={`选择${city.zh}攻略页面风格`}>
                <a href={`/guide?city=${city.slug}&style=vintage`}>
                  <b>VINTAGE</b><small>复古书页</small><i>→</i>
                </a>
                <a href={`/guide?city=${city.slug}&style=modern`}>
                  <b>MODERN</b><small>实景影像</small><i>→</i>
                </a>
              </div>
            </div>
          </article>
        ))}
        <div className="future-volume" aria-label={`${country.zh}未来目的地预留位置`}>
          <span>＋</span>
          <p><b>NEXT DESTINATION</b><small>为下一座城市预留</small></p>
        </div>
      </div>

      <button
        type="button"
        className="shelf-turn shelf-turn-next"
        onPointerEnter={(event) => {
          if (event.pointerType !== "touch") startHoverTurning(1);
        }}
        onPointerLeave={stopHoverTurning}
        onPointerUp={(event) => {
          if (event.pointerType === "touch") turnPage(1);
        }}
        onClick={(event) => {
          if (event.detail === 0) turnPage(1);
        }}
        disabled={!canNext}
        aria-label={`查看${country.zh}下一个目的地`}
      >
        <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}

export default function CataloguePage() {
  const cityCount = catalogue.reduce((sum, country) => sum + country.cities.length, 0);

  return (
    <main className="library-page">
      <header className="library-hero">
        <div className="library-topline">
          <span>COLLEZIONE DI VIAGGIO · TRAVEL COLLECTION</span>
          <b>MMXXVI</b>
        </div>
        <div className="library-title-block">
          <p className="library-kicker">A SHELF OF CITIES, READ SLOWLY</p>
          <h1><span>THE TRAVEL LIBRARY</span><small>世界漫游志</small></h1>
          <p>按国家翻开城市。每一册收录当地的人文、自然、餐桌与步行路线，并提供复古书页与现代影像两种版本。</p>
        </div>
        <div className="library-summary" aria-label="旅行目录统计">
          <div><b>{String(catalogue.length).padStart(2, "0")}</b><span>COUNTRIES<br />国家</span></div>
          <i />
          <div><b>{String(cityCount).padStart(2, "0")}</b><span>CITY BOOKS<br />城市读本</span></div>
          <p>先选择城市，再选择复古书页或现代实景版本；正文内可随时切换风格或返回这里。</p>
        </div>
      </header>

      <div className="library-catalogue">
        {catalogue.map((country) => (
          <section className="country-shelf" key={country.code}>
            <header className="country-heading">
              <span className="country-no">{country.code}</span>
              <div>
                <p>{country.note}</p>
                <h2><span>{country.local}</span><small>{country.zh}</small></h2>
              </div>
              <b>{country.cities.length} {country.cities.length === 1 ? "VOLUME" : "VOLUMES"}</b>
            </header>

            <DestinationShelf country={country} />
          </section>
        ))}
      </div>

      <footer className="library-footer">
        <span className="library-monogram">W</span>
        <div><b>ARCHIVIO IN CRESCITA</b><p>一座不断扩充的旅行书架</p></div>
        <p>COUNTRIES → REGIONS → CITY BOOKS</p>
      </footer>
    </main>
  );
}
