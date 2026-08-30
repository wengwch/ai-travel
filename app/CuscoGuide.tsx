import HistoricCityGuide, { HistoricCityGuideContent } from "./HistoricCityGuide";

const content: HistoricCityGuideContent = {
  className: "cusco-book", crumb: ["PERÚ", "REGIÓN CUSCO", "QOSQO"], edition: { vintage: "EDICIÓN VIAJERA · VINTAGE", modern: "PHOTO EDITION · 现代影像版" },
  hero: { eyebrow: "石墙把山势折进街巷，高原风替脚步减速", zh: "库斯科", latin: "CUSCO", subtitle: "先适应海拔，再让石墙告诉你方向", image: "cusco-hero", alt: ["复古旅行画风格的库斯科印加石墙、殖民教堂与安第斯山", "生成的现代旅行摄影风格库斯科印加石墙、殖民教堂与安第斯山"], caption: "石墙之城", captionEn: "QOSQO IN THE ANDES", figureNote: "印加石块托住殖民钟声，高原空气让每一步都变得有分量。", paragraphs: ["库斯科位于安第斯高地，印加帝国的街道、墙基与城市观念仍支撑着殖民时期建筑。太阳神殿上方的修道院、哈通鲁米约克街的巨石与主广场教堂，共同显示征服并未抹平旧城。", "这里最重要的旅行技巧不是赶路，而是适应。抵达首日减少爬坡、补充水分，把广场和缓坡留给慢走；当呼吸找到节奏，石墙的接缝、山谷的光线与市场香气才会逐一打开。"], quote: "在库斯科，先调整呼吸，历史才会开口。", quoteEn: "In Cusco, history speaks after you learn to breathe at its pace.", facts: [["最佳步调", "3—5 日"], ["城市气质", "坚实、神圣、明亮"], ["适合时节", "旱季 / 肩季"], ["不可错过", "步行读印加石墙"]] },
  culture: { heading: "人文", subheading: "HERITAGE · 石上之城", feature: { category: "层叠 · PALIMPSEST", title: "太阳神殿", annotation: "Qorikancha · 石墙与修道院的交界", standfirst: "精密的印加石墙与西班牙殖民修道院直接相接，城市历史的断裂与延续在一处墙角同时可见。", paragraphs: ["Qorikancha 曾是印加帝国重要宗教中心，今天圣多明各修道院建立其上。与其只寻找“十二角石”式奇观，不如观察石块如何适应坡地、转角与地震。", "从太阳神殿沿旧街走向主广场，再进入圣布拉斯坡地，能看见印加道路、殖民立面与当代商业如何共享空间。开放与票务请以文化机构官方信息为准。"], visits: [["建议", "抵达次日上午参观"], ["留时", "1.5—2 小时"]], link: "https://whc.unesco.org/en/list/273", linkLabel: "UNESCO 遗产页", noteNo: "3,400 M", note: "UNESCO 资料将库斯科描述为海拔约 3,400 米的安第斯城市。首日若头痛、恶心或呼吸明显不适，应休息并寻求医疗建议。" }, cards: [
    { category: "巨石 · FORTRESS", index: "02", title: "萨克塞华曼", annotation: "Saqsaywaman · 山脊上的锯齿石墙", text: "巨石墙沿山脊折叠，俯瞰库斯科盆地。高海拔与强日照会放大体力消耗，缓慢行走并携水。", tip: "常纳入库斯科旅游套票，项目与有效期以 COSITUC 官方说明为准。", link: "https://cosituc.gob.pe/tarifario-2/", linkLabel: "COSITUC 票务" },
    { category: "街道 · INCA STONE", index: "03", title: "哈通鲁米约克街", annotation: "Hatun Rumiyoc · 墙体转过城市坡度", text: "十二角石最知名，但整面墙的尺寸变化与无灰浆接缝更值得看。街道狭窄，停留时为行人留路。" },
    { category: "广场 · PLAZA", index: "04", title: "武器广场", annotation: "Plaza de Armas · 帝国中心的再书写", text: "印加时期公共空间在殖民时代被重新定义。教堂、拱廊与山坡街区围合出今天仍持续使用的城市客厅。" },
    { category: "街区 · BARRIO", index: "05", title: "圣布拉斯", annotation: "San Blas · 工匠、坡巷与小广场", text: "手工艺作坊与白墙小巷沿坡度展开。慢慢上行，在广场停一停，也尊重居民门前与工作空间。", className: "cusco-stone-card" }
  ] },
  nature: { heading: "山谷", subheading: "NATURE · 高地与河流", image: "cusco-nature", alt: ["复古旅行画风格的圣谷、乌鲁班巴河与安第斯梯田", "生成的现代旅行摄影风格圣谷、乌鲁班巴河、梯田与安第斯山"], caption: "河穿圣谷", captionEn: "THE SACRED VALLEY", category: "山谷 · VALLEY", title: "圣谷", annotation: "Valle Sagrado · 乌鲁班巴河与高地农田", standfirst: "河流、梯田与不同海拔的作物，让“帝国腹地”首先成为一片被精细经营的生活景观。", text: "圣谷范围广，一日只选一条清晰路线。皮萨克、奥扬泰坦博和钦切罗各有遗址、社区与市场，不宜全部匆忙塞入；通过正规交通并尊重农业用地。", time: "FULL DAY", timeTitle: "少选两站，多留时间", timeText: "把车程、海拔与返城光线一起计算", noteNo: "URUBAMBA", note: "乌鲁班巴河贯穿圣谷。雨季可能影响道路与山地活动，出发前确认天气和当地安全信息。", places: [
    { category: "梯田 · TERRACES", title: "皮萨克", annotation: "Písac · 山坡农业与高处遗址", text: "梯田顺山体弧线铺开，遗址与谷地市场形成不同节奏。若体力有限，可根据交通条件取舍高处路段。", tip: "高海拔徒步量力而行，不在遗址边缘冒险拍照。" },
    { title: "奥扬泰坦博", annotation: "Ollantaytambo · 活着的印加街网", text: "石街、水渠和院落仍被居民使用，山坡遗址则控制谷口。至少留半日，不把它只当作换乘站。" },
    { title: "马拉斯与莫雷", annotation: "Maras & Moray · 盐田与环形梯田", text: "两处景观分散且交通条件变化，应选正规运营者、确认开放情况，并避免进入受保护或生产区域。" }
  ] },
  food: { heading: "味道", subheading: "FLAVOURS · 高地作物", image: "cusco-food", alt: ["复古商业画风格的库斯科藜麦汤、大粒玉米、奶酪、玉米粽与紫玉米饮", "生成的现代美食摄影风格库斯科藜麦汤、大粒玉米、奶酪、玉米粽与紫玉米饮"], caption: "高原餐桌", captionEn: "THE ANDEAN TABLE", category: "入席 · AT THE TABLE", title: "玉米粒很大，\n汤碗负责让高地暖起来。", text: "藜麦、马铃薯、玉米与辣椒把海拔变成味道。库斯科餐桌既有温暖朴素的汤，也有节庆时才完整出现的拼盘；先理解季节，再点菜。", script: "热汤下肚，坡路就缓了一点。", note: "首日避免过量酒精与过重餐食，补水并观察身体对海拔的反应。", dishes: [
    { category: "暖汤 · SOUP", index: "01", title: "藜麦汤", annotation: "Sopa de quinua · 高原谷物的温度", text: "藜麦与蔬菜、香草或肉汤慢煮，口感轻却有饱足感，很适合作为抵达高地后的第一顿。" },
    { category: "田野 · MAIZE", index: "02", title: "玉米配奶酪", annotation: "Choclo con queso · 大粒玉米的清甜", text: "圣谷大粒玉米与新鲜白奶酪构成直接组合，甜、咸与奶香不用复杂调味。" },
    { category: "蒸食 · HUMITA", index: "03", title: "玉米粽", annotation: "Humitas · 玉米叶里的柔软面团", text: "新鲜玉米磨浆后包叶蒸熟，可甜可咸。市场早餐摊与家庭餐桌都能见到它的不同版本。" },
    { category: "饮品 · LOCAL RITUAL", index: "17:00", title: "紫玉米饮", annotation: "Chicha morada · 香料与果香的深紫色", text: "紫玉米与水果、肉桂等煮成清凉饮品。它与发酵 chicha 并不相同，点单时可先问清版本。", className: "aperitivo-card cusco-chicha-card" }
  ] },
  itinerary: { heading: "行程", subheading: "ITINERARY · 48 小时", days: [
    { label: "第一日", index: "01", title: "先学会呼吸", stops: [["09:30", "武器广场", "以缓坡适应城市海拔"], ["11:30", "太阳神殿", "看石墙与修道院相接"], ["14:30", "酒店休息", "补水，不安排高强度爬坡"], ["17:00", "圣布拉斯下段", "量力走一段工匠街巷"]] },
    { label: "第二日", index: "02", title: "巨石与山谷", stops: [["08:30", "萨克塞华曼", "沿山脊理解城市地形"], ["11:30", "返回市区午餐", "用藜麦汤恢复体力"], ["14:00", "印加博物馆", "补足考古与帝国背景"], ["17:30", "圣佩德罗市场", "看高地作物进入日常"]] }
  ], phraseTitle: "西班牙语 / 克丘亚语 · LOCAL PHRASES", phrase: "Sulpayki", phraseNote: "克丘亚语中可表达“谢谢”；日常服务场景使用西班牙语也很普遍。", phrases: [["Allillanchu", "你好 / 你好吗（克丘亚语）"], ["Gracias", "谢谢（西班牙语）"], ["¿Cuánto cuesta?", "多少钱？"], ["Despacio, por favor", "请慢一点"]], practical: [["海拔 · ALTITUDE", "约 3,400 米", "首日休息、补水、少饮酒；症状明显或加重时不要硬撑，及时寻求专业医疗帮助。"], ["票务 · TICKETS", "旅游套票分清范围", "COSITUC 套票覆盖项目与有效期不同，购买前按实际路线核对，不因“都包含”而过度赶场。"], ["延伸 · BEYOND", "马丘比丘另做计划", "不要把马丘比丘硬塞进城市 48 小时。火车、入场与路线管理独立且会变化，应另留时间从官方渠道预约。"]] },
  footer: { mark: "Q", title: "库斯科，石墙替你记住了方向。", text: "愿你记住的不只是通往马丘比丘的门户，也有高原呼吸的节奏、石块严密的接缝与一碗藜麦汤的热气。", sources: [["UNESCO · City of Cuzco", "https://whc.unesco.org/en/list/273"], ["COSITUC · 库斯科旅游票", "https://cosituc.gob.pe/tarifario-2/"], ["Peru Travel · Cusco", "https://meetings.peru.travel/destinations/cusco"], ["秘鲁文化部票务平台", "https://tuboleto.cultura.pe/"]] }
};

export default function CuscoGuide({ theme }: { theme: "vintage" | "modern" }) { return <HistoricCityGuide theme={theme} content={content} />; }
