export type HistoricCityGuideContent = {
  className: string;
  crumb: [string, string, string];
  edition: { vintage: string; modern: string };
  hero: {
    eyebrow: string; zh: string; latin: string; subtitle: string; image: string;
    alt: [string, string]; caption: string; captionEn: string; figureNote: string;
    paragraphs: [string, string]; quote: string; quoteEn: string;
    facts: [string, string][];
  };
  culture: {
    heading: string; subheading: string;
    feature: Place & { category: string; standfirst: string; paragraphs: [string, string]; visits: [string, string][]; link: string; linkLabel: string; noteNo: string; note: string };
    cards: (Place & { category: string; index: string; text: string; className?: string; tip?: string; link?: string; linkLabel?: string })[];
  };
  nature: {
    heading: string; subheading: string; image: string; alt: [string, string]; caption: string; captionEn: string;
    category: string; title: string; annotation: string; standfirst: string; text: string;
    time: string; timeTitle: string; timeText: string; noteNo: string; note: string;
    places: (Place & { category?: string; text: string; tip?: string })[];
  };
  food: {
    heading: string; subheading: string; image: string; alt: [string, string]; caption: string; captionEn: string;
    category: string; title: string; text: string; script: string; note: string;
    dishes: (Place & { category: string; index: string; text: string; className?: string })[];
  };
  itinerary: {
    heading: string; subheading: string;
    days: { label: string; index: string; title: string; stops: [string, string, string][] }[];
    phraseTitle: string; phrase: string; phraseNote: string; phrases: [string, string][];
    practical: [string, string, string][];
  };
  footer: { mark: string; title: string; text: string; sources: [string, string][] };
};

type Place = { title: string; annotation: string };

function LocalName({ title, annotation }: Place) {
  return <span className="bilingual-name"><span>{title}</span><small>{annotation}</small></span>;
}

function Note({ children, no }: { children: React.ReactNode; no: string }) {
  return <aside className="margin-note"><span>{no}</span><p>{children}</p></aside>;
}

export default function HistoricCityGuide({ theme, content }: { theme: "vintage" | "modern"; content: HistoricCityGuideContent }) {
  const modern = theme === "modern";
  const image = (base: string) => `/images/${base}-${modern ? "modern" : "vintage"}.png`;

  return (
    <div className={`book-pages ${content.className}`}>
      <header className="masthead"><div className="crumb"><span>{content.crumb[0]}</span><i>◆</i><span>{content.crumb[1]}</span><i>◆</i><b>{content.crumb[2]}</b></div><p>{modern ? content.edition.modern : content.edition.vintage}</p></header>

      <section id="prologue" className="chapter hero-chapter">
        <div className="hero-title"><p className="eyebrow">{content.hero.eyebrow}</p><h2><span lang="zh-CN">{content.hero.zh}</span><small>{content.hero.latin}</small></h2><p className="hero-subtitle">{content.hero.subtitle}</p></div>
        <figure className="hero-figure"><img src={image(content.hero.image)} alt={modern ? content.hero.alt[1] : content.hero.alt[0]} /><figcaption><b>图版 I</b><span><i lang="zh-CN">{content.hero.caption}</i> · {content.hero.captionEn}</span><small>{content.hero.figureNote}</small></figcaption></figure>
        <div className="prologue-grid">
          <div className="lead-copy"><span className="drop-cap">{content.hero.zh[0]}</span><p>{content.hero.paragraphs[0]}</p><p>{content.hero.paragraphs[1]}</p></div>
          <blockquote><span>“</span><p lang="zh-CN">{content.hero.quote}</p><small>{content.hero.quoteEn}</small></blockquote>
          <div className="fact-card"><p className="fact-label">扉页速览 · AT A GLANCE</p><dl>{content.hero.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
        </div>
      </section>

      <section id="cultura" className="chapter chapter-cultura">
        <div className="chapter-heading"><p>第一章 · CHAPTER ONE</p><h2><span lang="zh-CN">{content.culture.heading}</span><small>{content.culture.subheading}</small></h2><span className="page-no">01</span></div>
        <article className="feature-duomo">
          <div className="feature-number">壹</div>
          <div><p className="category">{content.culture.feature.category}</p><h3><LocalName {...content.culture.feature} /></h3><p className="standfirst">{content.culture.feature.standfirst}</p><div className="columns"><p>{content.culture.feature.paragraphs[0]}</p><p>{content.culture.feature.paragraphs[1]}</p></div><div className="visit-strip">{content.culture.feature.visits.map(([label, value]) => <span key={label}><b>{label}</b> {value}</span>)}<a href={content.culture.feature.link} target="_blank" rel="noreferrer">{content.culture.feature.linkLabel} ↗</a></div></div>
          <Note no={content.culture.feature.noteNo}>{content.culture.feature.note}</Note>
        </article>
        <div className="culture-mosaic">{content.culture.cards.map((card, index) => <article key={card.title} className={`art-card ${index === 0 ? "last-supper" : index === 1 ? "brera-card" : index === 2 ? "scala-card" : `castle-card ${card.className ?? ""}`}`}><p className="category">{card.category}</p><span className="art-index">{card.index}</span><h3><LocalName {...card} /></h3><p>{card.text}</p>{card.tip && <p className="tip">{card.tip}</p>}{card.link && <a href={card.link} target="_blank" rel="noreferrer">{card.linkLabel} ↗</a>}</article>)}</div>
      </section>

      <section id="natura" className="chapter chapter-natura">
        <div className="chapter-heading"><p>第二章 · CHAPTER TWO</p><h2><span lang="zh-CN">{content.nature.heading}</span><small>{content.nature.subheading}</small></h2><span className="page-no">02</span></div>
        <div className="nature-layout">
          <figure className="navigli-figure"><img src={image(content.nature.image)} alt={modern ? content.nature.alt[1] : content.nature.alt[0]} /><figcaption><b>图版 II</b><span><i lang="zh-CN">{content.nature.caption}</i> · {content.nature.captionEn}</span></figcaption></figure>
          <article className="navigli-copy"><p className="category">{content.nature.category}</p><h3><LocalName title={content.nature.title} annotation={content.nature.annotation} /></h3><p className="standfirst">{content.nature.standfirst}</p><p>{content.nature.text}</p><div className="time-note"><span>{content.nature.time}</span><p><b>{content.nature.timeTitle}</b><small>{content.nature.timeText}</small></p></div></article>
          <Note no={content.nature.noteNo}>{content.nature.note}</Note>
        </div>
        <div className="green-index">{content.nature.places.map((place, index) => <article key={place.title} className={index === 0 ? "green-feature" : undefined}>{index === 0 ? <span className="botanical-mark">✦</span> : <span className="mini-no">N. 0{index + 1}</span>}{place.category && <p className="category">{place.category}</p>}<h3><LocalName {...place} /></h3><p>{place.text}</p>{place.tip && <p className="green-tip">{place.tip}</p>}</article>)}</div>
      </section>

      <section id="sapori" className="chapter chapter-sapori">
        <div className="chapter-heading dark-heading"><p>第三章 · CHAPTER THREE</p><h2><span lang="zh-CN">{content.food.heading}</span><small>{content.food.subheading}</small></h2><span className="page-no">03</span></div>
        <div className="food-spread"><figure><img src={image(content.food.image)} alt={modern ? content.food.alt[1] : content.food.alt[0]} /><figcaption><b>图版 III</b><span><i lang="zh-CN">{content.food.caption}</i> · {content.food.captionEn}</span></figcaption></figure><div className="food-intro"><p className="category">{content.food.category}</p><h3 style={{ whiteSpace: "pre-line" }}>{content.food.title}</h3><p>{content.food.text}</p><p className="script-note" lang="zh-CN">{content.food.script}</p><small>{content.food.note}</small></div></div>
        <div className="dish-grid">{content.food.dishes.map((dish, index) => <article key={dish.title} className={`${index === 0 ? "dish-primary" : ""} ${dish.className ?? ""}`}><span className="dish-no">{dish.index}</span><p className="category">{dish.category}</p><h3><LocalName {...dish} /></h3><p>{dish.text}</p></article>)}</div>
      </section>

      <section id="itinerario" className="chapter chapter-itinerary">
        <div className="chapter-heading"><p>第四章 · CHAPTER FOUR</p><h2><span lang="zh-CN">{content.itinerary.heading}</span><small>{content.itinerary.subheading}</small></h2><span className="page-no">04</span></div>
        <div className="route-days">{content.itinerary.days.map(day => <article key={day.index}><header><span>{day.label}</span><b>{day.index}</b><small>{day.title}</small></header><ol>{day.stops.map(([time, title, text]) => <li key={`${time}-${title}`}><time>{time}</time><p><b>{title}</b><span>{text}</span></p></li>)}</ol></article>)}</div>
        <div className="phrasebook"><div><p className="category">{content.itinerary.phraseTitle}</p><h3>{content.itinerary.phrase}</h3><p>{content.itinerary.phraseNote}</p></div><dl>{content.itinerary.phrases.map(([term, meaning]) => <div key={term}><dt>{term}</dt><dd>{meaning}</dd></div>)}</dl></div>
        <div className="practical-grid">{content.itinerary.practical.map(([label, title, text]) => <div key={label}><span>{label}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>

      <footer><div className="footer-mark">{content.footer.mark}</div><div><p className="footer-title" lang="zh-CN">{content.footer.title}</p><p>{content.footer.text}</p></div><div className="sources"><span>资料来源 · SOURCES</span>{content.footer.sources.map(([label, link]) => <a key={link} href={link} target="_blank" rel="noreferrer">{label}</a>)}</div><p className="colophon">策划与插画 · CURATED AND ILLUSTRATED · MMXXVI</p></footer>
    </div>
  );
}
