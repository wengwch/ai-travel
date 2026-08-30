import HistoricCityGuide, { HistoricCityGuideContent } from "./HistoricCityGuide";

const content: HistoricCityGuideContent = {
  className: "mexico-city-book", crumb: ["MÉXICO", "VALLE DE MÉXICO", "CIUDAD DE MÉXICO"], edition: { vintage: "EDICIÓN VIAJERA · VINTAGE", modern: "PHOTO EDITION · 现代影像版" },
  hero: { eyebrow: "城下还藏着一座城，玉米香从街角升起", zh: "墨西哥城", latin: "MEXICO CITY", subtitle: "沿着石层下行，才看见这座城真正的高度", image: "mexico-city-hero", alt: ["复古旅行画风格的墨西哥城历史中心、大教堂与大神庙遗址", "生成的现代旅行摄影风格墨西哥城历史中心、大教堂与大神庙遗址"], caption: "层层中心", captionEn: "A CITY BUILT IN LAYERS", figureNote: "特诺奇蒂特兰没有消失，它在街道、考古探方与水的记忆里继续存在。", paragraphs: ["墨西哥城的中心叠在古代湖床与特诺奇蒂特兰之上。大神庙遗址紧邻殖民时期大教堂，国家宫与广场又承接独立国家的叙事，一次步行便会穿过多重世界。", "城市也以更轻快的方式继续生长：市场里的玉米面团不断变形，街头壁画把政治与色彩铺上墙面，公园、博物馆和音乐让巨大的都市保持可亲近的节奏。"], quote: "这座城不是建在过去之上，而是与过去一起生活。", quoteEn: "The city is not merely built over the past; it lives alongside it.", facts: [["最佳步调", "4—6 日"], ["城市气质", "层叠、浓烈、创造力十足"], ["适合时节", "旱季 / 春秋"], ["不可错过", "大神庙与大教堂同框"]] },
  culture: { heading: "人文", subheading: "HERITAGE · 城市层理", feature: { category: "考古 · ARCHAEOLOGY", title: "大神庙", annotation: "Templo Mayor · 特诺奇蒂特兰的中心", standfirst: "几步之隔，大教堂与阿兹特克神庙遗址同时进入视野，城市历史在这里公开叠放。", paragraphs: ["遗址与博物馆展示历次扩建的神庙层、祭祀文物与城市考古发现。先从室外遗址理解空间，再进入展厅辨认雨神特拉洛克与战神维齐洛波奇特利相关叙事。", "历史中心海拔高、步行密度大，别在一天塞入过多博物馆。票务、免费日与临时闭馆信息可能变化，应以 INAH 官方页面为准。"], visits: [["建议", "上午先看室外遗址"], ["留时", "2—3 小时"]], link: "https://templomayor.inah.gob.mx/english", linkLabel: "INAH 官方信息", noteNo: "1325", note: "特诺奇蒂特兰约建于 1325 年。今天看到的遗址来自持续的城市考古，仍可能因研究与保护调整动线。" }, cards: [
    { category: "收藏 · MUSEUM", index: "02", title: "国家人类学博物馆", annotation: "Museo Nacional de Antropología · 多元文明的入口", text: "展厅覆盖墨西哥众多文明与当代原住民族文化。不要试图一次看完，先选墨西加、玛雅或与你路线相关的区域。", tip: "馆藏宏大，预留半日并查看 INAH 官方开放信息。", link: "https://mna.inah.gob.mx/", linkLabel: "博物馆官网" },
    { category: "壁画 · MURALISM", index: "03", title: "壁画之城", annotation: "Murales · 公共墙面的历史辩论", text: "里维拉、奥罗斯科与西凯罗斯等艺术家让历史、劳动与革命进入公共建筑。根据开放情况选择国家宫或艺术宫等地点。" },
    { category: "表演 · STAGE", index: "04", title: "美术宫", annotation: "Palacio de Bellas Artes · 大理石与幕布", text: "建筑外部的新古典轮廓与内部装饰艺术细节并置，展览、壁画和演出各有开放安排。" },
    { category: "街区 · BARRIOS", index: "05", title: "从中心到社区", annotation: "Centro, Roma & Coyoacán · 三种城市语速", text: "历史中心浓密，罗马区善于把旧宅变成当代空间，科约阿坎则保留广场与庭院。分天体验，比匆匆跨区更好。", className: "mexico-layer-card" }
  ] },
  nature: { heading: "水土", subheading: "NATURE · 湖城记忆", image: "mexico-city-nature", alt: ["复古旅行画风格的霍奇米尔科运河、花田与彩色船只", "生成的现代旅行摄影风格霍奇米尔科运河、奇南帕田地与船只"], caption: "湖城余脉", captionEn: "XOCHIMILCO CANALS", category: "湿地 · WETLAND", title: "霍奇米尔科", annotation: "Xochimilco · 运河与奇南帕农田", standfirst: "彩船之外，真正珍贵的是古代湖区农业仍在运河之间延续。", text: "选择强调生态与农业的正规行程，观察奇南帕浮田、苗圃和湿地物种。周末派对航段与安静生态航段体验不同，提前确认码头、时长和运营者。", time: "MORNING", timeTitle: "早晨进入运河", timeText: "光线柔和，也更容易看见生产中的田地", noteNo: "UNESCO", note: "霍奇米尔科与历史中心共同构成世界遗产。湿地生态脆弱，不购买野生动物、不向水中丢弃垃圾。", places: [
    { category: "森林 · PARK", title: "查普尔特佩克", annotation: "Bosque de Chapultepec · 博物馆之间的城市森林", text: "林地、湖面、城堡与博物馆组成巨大的公共文化景观。把人类学博物馆与公园散步组合，可避免一整天困在室内。", tip: "园区很大，先选一片区域，不追求一次走完。" },
    { title: "墨西哥谷", annotation: "Valle de México · 火山盆地的尺度", text: "天气晴朗时，远山让城市的高海拔盆地格外清晰。空气质量与雨季午后雷雨会影响视野和安排。" },
    { title: "墨西哥国立大学生态保护区", annotation: "Pedregal · 熔岩地貌上的生命", text: "城南火山岩地貌保存独特植被。进入校园与保护区域时遵循开放规定，不离开指定道路。" }
  ] },
  food: { heading: "味道", subheading: "FLAVOURS · 玉米的万千形态", image: "mexico-city-food", alt: ["复古商业画风格的墨西哥城塔可、玉米粽、波索莱汤与特拉科约", "生成的现代美食摄影风格墨西哥城塔可、玉米粽、波索莱汤与特拉科约"], caption: "玉米变奏", captionEn: "MAIZE IN MANY FORMS", category: "入席 · AT THE TABLE", title: "一团玉米面，\n每天都能换一种形状。", text: "玉米饼可以托住炭烤肉、仙人掌或慢炖内脏，也能变成厚实的特拉科约；玉米粽和波索莱又让同一种谷物进入完全不同的时间与口感。", script: "先闻炭火，再决定加多少辣酱。", note: "街头摊位优先选择客流稳定、食材遮盖且现点现做者；辣酱从少量开始。", dishes: [
    { category: "街头 · TACOS", index: "01", title: "牧羊人塔可", annotation: "Tacos al pastor · 炉火、菠萝与玉米饼", text: "旋转烤肉切薄片落在小玉米饼上，洋葱、香菜和菠萝提供清亮对比。一次点两三个，再继续尝下一摊。" },
    { category: "蒸食 · TAMAL", index: "02", title: "玉米粽", annotation: "Tamales · 清晨蒸汽里的馅料", text: "玉米面包住辣酱、肉或甜馅，以玉米叶蒸熟。配一杯热阿托莱，是通勤清晨的完整组合。" },
    { category: "汤锅 · POZOLE", index: "03", title: "波索莱汤", annotation: "Pozole · 玉米粒与一桌配菜", text: "碱化玉米粒、汤肉与香料构成底味，生菜、萝卜、青柠和辣椒由食客自己完成最后一层。" },
    { category: "街角 · LOCAL RITUAL", index: "13:30", title: "站着吃一轮", annotation: "Antojitos · 把午餐拆成几站", text: "先看摊主如何落饼、翻面和收钱，再加入队伍。一站只吃一种，城市会用不同玉米香带你走路。", className: "aperitivo-card mexico-snack-card" }
  ] },
  itinerary: { heading: "行程", subheading: "ITINERARY · 48 小时", days: [
    { label: "第一日", index: "01", title: "城下之城", stops: [["08:30", "主广场", "在街区醒来前读城市尺度"], ["10:00", "大神庙", "沿考古层进入特诺奇蒂特兰"], ["13:30", "街头塔可", "把午餐拆成两三站"], ["16:00", "美术宫", "以壁画与建筑收束中心区"]] },
    { label: "第二日", index: "02", title: "森林与湖田", stops: [["09:00", "人类学博物馆", "只选两三个重点展厅"], ["13:00", "查普尔特佩克", "在城市森林里换气"], ["15:30", "霍奇米尔科", "按预约进入运河与田地"], ["20:00", "社区餐桌", "用波索莱结束一天"]] }
  ], phraseTitle: "西班牙语 · LOCAL PHRASES", phrase: "Muchas gracias", phraseNote: "问路时先问候，再明确地点；市场里礼貌询价比直接还价更自然。", phrases: [["Buenos días", "早上好"], ["Por favor", "请"], ["¿Cuánto cuesta?", "多少钱？"], ["Sin picante", "不要辣"]], practical: [["海拔 · ALTITUDE", "约 2,240 米", "首日放慢节奏、多补水，酒精与高强度运动都留到适应之后；若持续不适及时就医。"], ["移动 · GETTING AROUND", "地铁 + 快速公交", "公共交通覆盖广，高峰拥挤。保管随身物品，夜间与不熟悉区域使用可靠叫车服务。"], ["博物馆 · MUSEUMS", "周一常见闭馆", "不同机构休馆日各异，先查官方页面再排路线，不把所有热门馆压在同一天。"]] },
  footer: { mark: "M", title: "墨西哥城，下一层还在脚下。", text: "愿你记住的不只是广场与壁画，也有玉米饼落上烤盘的声音、查普尔特佩克的树荫与运河边正在耕作的田。", sources: [["UNESCO · 历史中心与霍奇米尔科", "https://whc.unesco.org/en/list/412"], ["INAH · 大神庙", "https://templomayor.inah.gob.mx/english"], ["国家人类学博物馆", "https://mna.inah.gob.mx/"], ["墨西哥城地铁", "https://www.metro.cdmx.gob.mx/"]] }
};

export default function MexicoCityGuide({ theme }: { theme: "vintage" | "modern" }) { return <HistoricCityGuide theme={theme} content={content} />; }
