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
] as const;

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

            <div className="destination-shelf">
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
