import HistoricCityGuide, { HistoricCityGuideContent } from "./HistoricCityGuide";

const content: HistoricCityGuideContent = {
  className: "athens-book", crumb: ["GREECE", "ATTICA", "ATHENS"], edition: { vintage: "TRAVELLER'S EDITION · VINTAGE", modern: "PHOTO EDITION · 现代影像版" },
  hero: { eyebrow: "大理石记得烈日，山丘负责把海找回来", zh: "雅典", latin: "ATHENS", subtitle: "从卫城下来，别错过山脚正在发生的生活", image: "athens-hero", alt: ["复古旅行画风格的雅典卫城、普拉卡与城市山丘", "生成的现代旅行摄影风格雅典卫城、普拉卡街区与城市"], caption: "山丘与石柱", captionEn: "THE ACROPOLIS AND THE CITY", figureNote: "古典并没有离开日常，它只是站得比咖啡桌更高。", paragraphs: ["雅典最著名的纪念物集中在一座岩石山丘上，但城市的性格并不只属于高处。古代市集、拜占庭教堂、现代公寓和深夜仍亮着灯的咖啡馆在山脚相互接续。", "上午把体力留给遗址与博物馆，下午穿过普拉卡和莫纳斯提拉奇，傍晚再登一座较低的山丘看海。这样，古典不再是单独的章节，而会回到今天的街道。"], quote: "石柱在正午失去阴影，街区却把咖啡喝到很晚。", quoteEn: "At noon the columns lose their shadows; the neighbourhoods keep drinking coffee late.", facts: [["最佳步调", "3—4 日"], ["城市气质", "明亮、坦率、松弛"], ["适合时节", "春季 / 深秋"], ["不可错过", "卫城开门即入"]] },
  culture: { heading: "人文", subheading: "HERITAGE · 城邦与日常", feature: { category: "世界遗产 · ACROPOLIS", title: "雅典卫城", annotation: "Acropolis of Athens · 岩丘上的文明坐标", standfirst: "帕特农神庙并非孤立雕塑，而是宗教、政治、地形与城市视线共同构成的整体。", paragraphs: ["尽早上山可以避开正午热度，也更容易读清山门、雅典娜胜利神庙、伊瑞克提翁神庙与帕特农神庙之间的空间关系。遗址石面光滑，务必穿防滑鞋。", "下山后进入卫城博物馆，把散落的构件、雕塑与考古层重新放回语境。票务、开放与暑热措施会调整，应通过官方入口提前确认。"], visits: [["建议", "首个时段登山"], ["留时", "3—4 小时"]], link: "https://whc.unesco.org/en/list/404", linkLabel: "UNESCO 遗产页", noteNo: "5 C BC", note: "卫城主要古典建筑群形成于公元前 5 世纪。山顶遮阴有限，夏季要携水并遵循高温临时措施。" }, cards: [
    { category: "考古 · MUSEUM", index: "02", title: "卫城博物馆", annotation: "Acropolis Museum · 让构件回到光线里", text: "玻璃地板下是发掘现场，顶层展厅按帕特农神庙方向布置雕带，是连接遗址与文物的关键一站。", tip: "馆方时段、票务与入场规定请看官方访客页。", link: "https://www.theacropolismuseum.gr/en/node/793", linkLabel: "官方访客信息" },
    { category: "公共生活 · AGORA", index: "03", title: "古代市集", annotation: "Ancient Agora · 民主、商业与日常", text: "柱廊、神庙与公共建筑遗址让“城邦”从抽象概念变成可步行的地理。留时间给阿塔罗斯柱廊博物馆。" },
    { category: "剧场 · THEATRE", index: "04", title: "狄俄尼索斯剧场", annotation: "Theatre of Dionysus · 戏剧发生的坡面", text: "坐席顺山势展开，古希腊悲喜剧曾在此成为公共经验。把它与卫城南坡遗迹一起走，更能理解节庆路线。" },
    { category: "街区 · QUARTER", index: "05", title: "普拉卡与阿纳菲奥提卡", annotation: "Plaka & Anafiotika · 山脚的生活尺度", text: "窄巷、低房与台阶将纪念性山丘重新缩回人的尺度。清晨或傍晚来访，并尊重仍在居住的门窗与庭院。", className: "athens-stoa-card" }
  ] },
  nature: { heading: "山海", subheading: "NATURE · 城市的地形课", image: "athens-nature", alt: ["复古旅行画风格的雅典山丘、城市与萨罗尼克湾", "生成的现代旅行摄影风格雅典山丘、城市与远处海面"], caption: "山丘望海", captionEn: "HILLS TO THE SEA", category: "地形 · TOPOGRAPHY", title: "雅典山丘", annotation: "The Hills of Athens · 城市的天然观景层", standfirst: "换一座山丘，卫城就会从主角变成城市坐标，海也会在屋顶尽头出现。", text: "菲洛帕普山适合把卫城、城市与远处海面放进同一视野。路径多为土石路，日落后照明有限；结伴、穿稳固鞋，并在天黑前确认下山路线。", time: "GOLDEN HOUR", timeTitle: "把日落留给山丘", timeText: "提前 45 分钟上山，避开正午暴晒", noteNo: "7 HILLS", note: "雅典常以群丘理解自身。它们既提供防御与信仰空间，也让高密城市保持视野与风。", places: [
    { category: "花园 · GARDEN", title: "国家花园", annotation: "National Garden · 市中心的阴影", text: "棕榈、松柏与曲折小径紧邻议会和宪法广场，是炎热午后最实际的一段降温路线。", tip: "与扎皮翁宫及泛雅典体育场顺路连接。" },
    { title: "利卡维多斯山", annotation: "Lycabettus · 俯瞰白色城市", text: "山顶视野更高，可步行或按当天运营选择交通。风大且日落时人多，往返都要预留余量。" },
    { title: "雅典海滨", annotation: "Athens Riviera · 从电车去海边", text: "从市中心搭公共交通即可到法利罗、格利法达等海岸段；它让古城行程多出一页盐味与晚风。" }
  ] },
  food: { heading: "味道", subheading: "FLAVOURS · 橄榄油与炭火", image: "athens-food", alt: ["复古商业画风格的雅典希腊沙拉、烤鱼与菠菜派", "生成的现代美食摄影风格雅典希腊沙拉、烤鱼、菠菜派与酿葡萄叶"], caption: "阳光餐桌", captionEn: "THE ATHENIAN TABLE", category: "入席 · AT THE TABLE", title: "酸度、草香与炭火，\n把夏日放进一只盘子。", text: "成熟番茄、羊奶酪、橄榄油和牛至建立清亮底色，烤鱼与酥皮带来温度。比起追逐“必吃榜”，更值得看当天蔬菜与海鲜写在菜单上什么。", script: "面包负责把最后一滴橄榄油带走。", note: "海鲜先询问计价单位；小馆晚餐开得较晚，不妨顺着当地节奏。", dishes: [
    { category: "沙拉 · SALAD", index: "01", title: "乡村沙拉", annotation: "Horiatiki · 番茄、羊奶酪与牛至", text: "传统组合强调原料成熟度，通常不靠复杂调味。面包蘸盘底橄榄油和番茄汁，是这道菜的收尾。" },
    { category: "酥皮 · PIE", index: "02", title: "菠菜派", annotation: "Spanakopita · 绿叶与菲洛薄皮", text: "菠菜、香草与羊奶酪藏在层层酥皮中，适合早餐或途中小食；刚出炉时香气最完整。" },
    { category: "海味 · SEAFOOD", index: "03", title: "炭烤鲜鱼", annotation: "Psari sta karvouna · 柠檬收束海味", text: "鱼获、重量和时价决定一餐，点单前先确认。简单炭火、橄榄油与柠檬已足够。" },
    { category: "咖啡 · LOCAL RITUAL", index: "16:00", title: "慢咖啡", annotation: "Kafés · 把一杯喝成一个下午", text: "希腊咖啡浓小，冰咖啡则适合炎热白昼。选一张街边桌，看城市从午休重新进入夜生活。", className: "aperitivo-card athens-coffee-card" }
  ] },
  itinerary: { heading: "行程", subheading: "ITINERARY · 48 小时", days: [
    { label: "第一日", index: "01", title: "岩丘与古城", stops: [["08:00", "雅典卫城", "趁光线柔和登上岩丘"], ["11:30", "卫城博物馆", "让构件回到历史语境"], ["15:00", "普拉卡", "在台阶与小巷里慢行"], ["18:30", "菲洛帕普山", "看卫城转入金色"]] },
    { label: "第二日", index: "02", title: "市集与今日雅典", stops: [["09:00", "古代市集", "沿公共建筑理解城邦"], ["12:30", "中央市场", "在日常食材里找午餐"], ["15:30", "国家花园", "用树荫避开午后热度"], ["19:30", "社区小馆", "以梅泽和烤鱼收尾"]] }
  ], phraseTitle: "希腊语 · LOCAL PHRASES", phrase: "Efcharistó · Ευχαριστώ", phraseNote: "发音不必完美，放慢语速并先说你好，交流会更轻松。", phrases: [["Yássas", "你好（礼貌用语）"], ["Parakaló", "请 / 不客气"], ["Póso kánei?", "多少钱？"], ["Neró, parakaló", "请给我水"]], practical: [["票务 · TICKETS", "卫城提前预约", "使用官方电子票务入口，并在出发前核对暑热措施、开放时段和可进入区域。"], ["移动 · GETTING AROUND", "地铁 + 山路步行", "核心遗址可步行串联，地铁连接较远片区；石路易滑，夏季避免正午连续爬坡。"], ["海岸 · COAST", "留一个傍晚", "若行程允许，可搭电车去海滨看日落；班次和线路调整以 OASA 官方信息为准。"]] },
  footer: { mark: "Α", title: "雅典，石头还留着太阳的温度。", text: "愿你记住的不只是帕特农神庙，也有山脚的咖啡声、橄榄油的清香，以及屋顶尽头忽然出现的海。", sources: [["UNESCO · 雅典卫城", "https://whc.unesco.org/en/list/404"], ["卫城博物馆 · 访客信息", "https://www.theacropolismuseum.gr/en/node/793"], ["OASA · 雅典公共交通", "https://www.oasa.gr/en/"]] }
};

export default function AthensGuide({ theme }: { theme: "vintage" | "modern" }) { return <HistoricCityGuide theme={theme} content={content} />; }
