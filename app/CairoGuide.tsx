import HistoricCityGuide, { HistoricCityGuideContent } from "./HistoricCityGuide";

const content: HistoricCityGuideContent = {
  className: "cairo-book", crumb: ["EGYPT", "CAIRO GOVERNORATE", "CAIRO"], edition: { vintage: "TRAVELLER'S EDITION · VINTAGE", modern: "PHOTO EDITION · 现代影像版" },
  hero: { eyebrow: "宣礼声越过屋顶，尼罗河替一天降温", zh: "开罗", latin: "CAIRO", subtitle: "先走进石巷，再让一张白帆带走尘土", image: "cairo-hero", alt: ["复古旅行画风格的历史开罗清真寺与旧城屋顶", "生成的现代旅行摄影风格历史开罗清真寺与旧城街巷"], caption: "千塔之城", captionEn: "HISTORIC CAIRO", figureNote: "石巷没有按年代排队，每一扇门都可能通向另一层时间。", paragraphs: ["开罗的历史并不只在博物馆里。法蒂玛王朝的街道、马穆鲁克时代的穹顶与奥斯曼宅院挤在同一片屋顶下，宣礼声从一座尖塔接到下一座。", "向西几公里，尼罗河把密集的城市突然拉开。坐上一艘三角帆船，看晚风吹散白昼的热度，便能理解这座巨城为什么始终围绕水脉生长。"], quote: "开罗从不按顺序讲故事。", quoteEn: "Cairo never tells its stories in chronological order.", facts: [["最佳步调", "3—4 日"], ["城市气质", "繁复、热烈、绵长"], ["适合时节", "晚秋至早春"], ["不可错过", "尼罗河日落帆船"]] },
  culture: { heading: "人文", subheading: "HERITAGE · 城中千塔", feature: { category: "旧城 · URBAN HERITAGE", title: "历史开罗", annotation: "Historic Cairo · 中世纪街巷群", standfirst: "世界遗产不是一座孤立建筑，而是一整片仍在生活、祈祷与交易的城市肌理。", paragraphs: ["从阿兹哈尔一带走入穆伊兹街，清真寺、学校、陵墓和商栈把中世纪城市的功能一一展开。抬头看木格窗与石刻，也要留意居民、工匠与商贩仍在使用这些街道。", "旧城范围广、交通复杂，清晨进入会更从容。宗教场所应着装得体，礼拜时段尊重现场安排；古迹开放情况会变化，出发前查看官方信息。"], visits: [["建议", "清晨步行穆伊兹街"], ["留时", "半日至一日"]], link: "https://whc.unesco.org/en/list/89/", linkLabel: "UNESCO 遗产页", noteNo: "641", note: "历史开罗于 641 年建立，后来成为伊斯兰世界的重要中心；“千塔之城”更适合被慢慢步行，而不是车窗浏览。" }, cards: [
    { category: "城堡 · CITADEL", index: "02", title: "萨拉丁城堡", annotation: "Cairo Citadel · 山脊上的权力视角", text: "城堡俯瞰旧城，围墙内不同时代的清真寺把统治更迭写在轮廓上。傍晚的斜光最能显出城市层次。", tip: "开放与票务请以埃及旅游和文物部公布为准。", link: "https://egymonuments.gov.eg/archaeological-sites/cairo-citadel/", linkLabel: "官方古迹信息" },
    { category: "建筑 · ARCHITECTURE", index: "03", title: "伊本·图伦清真寺", annotation: "Ibn Tulun Mosque · 回廊与螺旋尖塔", text: "开阔庭院、连绵拱廊和克制砖饰，让目光从装饰转向尺度与光影；它也是感受早期伊斯兰开罗空间秩序的好地方。" },
    { category: "科普特 · COPTIC", index: "04", title: "科普特开罗", annotation: "Coptic Cairo · 教堂、博物馆与旧城墙", text: "悬空教堂、圣塞尔吉乌斯教堂与科普特博物馆在罗马堡垒遗址周围展开，提醒人们开罗的宗教史从来不止一条线。" },
    { category: "街巷 · LANES", index: "05", title: "哈利利市场之外", annotation: "Khan el-Khalili · 从市集走向工匠巷", text: "市集适合感受密度，但不必把脚步困在纪念品店。向金属工坊、香料铺与咖啡馆交错的小巷多走几步，旧城才会显出日常。", className: "cairo-lane-card" }
  ] },
  nature: { heading: "水脉", subheading: "NATURE · 尼罗河风", image: "cairo-nature", alt: ["复古旅行画风格的尼罗河三角帆船与开罗河岸", "生成的现代旅行摄影风格尼罗河三角帆船与开罗河岸"], caption: "白帆过河", captionEn: "FELUCCA ON THE NILE", category: "河流 · RIVER", title: "尼罗河", annotation: "Al-Nīl · 城市最长的轴线", standfirst: "开罗的路面再拥挤，河面仍会留出一块缓慢移动的天空。", text: "日落前从市中心河岸登上传统三角帆船，航程会随风势变化。选择正规运营者、确认时长与价格，晚间注意返程交通。", time: "SUNSET", timeTitle: "顺风而行", timeText: "预留 1—2 小时，不把日落排得太满", noteNo: "6,650 KM", note: "尼罗河系统跨越广阔地域；在开罗，河流既是景观，也是城市交通与生活史的主线。", places: [
    { category: "绿洲 · PARK", title: "阿兹哈尔公园", annotation: "Al-Azhar Park · 旧城边缘的绿台地", text: "从园内高处可以读到旧城密集的穹顶与尖塔。午后入园，等金色斜光落到城墙，是从喧闹切换到开阔的好方法。", tip: "与历史开罗组合，但留意步行距离与入口位置。" },
    { title: "盖济拉岛", annotation: "Gezira · 河心的树荫与步道", text: "岛上的扎马雷克街区有林荫道、画廊与咖啡馆，适合用一个较轻松的上午整理旅程节奏。" },
    { title: "穆卡塔姆山", annotation: "Mokattam · 俯瞰城市边缘", text: "干燥山脊提供另一种开罗尺度。视野开阔，但应通过可靠交通前往，并避开风沙或能见度不佳时段。" }
  ] },
  food: { heading: "味道", subheading: "FLAVOURS · 豆香与香料", image: "cairo-food", alt: ["复古商业画风格的开罗库莎丽、塔米亚与炖蚕豆", "生成的现代美食摄影风格开罗库莎丽、塔米亚与炖蚕豆"], caption: "街头一桌", captionEn: "A CAIRENE TABLE", category: "入席 · AT THE TABLE", title: "把谷物、豆子与香料，\n一层层拌在一起。", text: "开罗的日常食物擅长用平实材料制造丰盛：米饭、面条、扁豆、鹰嘴豆和番茄酱可以叠成一碗库莎丽，豆泥与香草则把早餐变得有香气。", script: "一碗热食，足以安顿一条长街。", note: "选择客流稳定的店，饮用密封瓶装水；辣酱和炸洋葱可先少量添加。", dishes: [
    { category: "国民餐 · STREET BOWL", index: "01", title: "库莎丽", annotation: "Koshari · 谷物、面食与豆子的叠奏", text: "米饭、通心粉、扁豆与鹰嘴豆铺底，番茄醋汁、炸洋葱和辣酱收尾。先尝原味，再按耐辣程度加酱。" },
    { category: "早餐 · BREAKFAST", index: "02", title: "塔米亚", annotation: "Ta'ameya · 蚕豆做的绿色炸饼", text: "埃及版本常以蚕豆和香草制作，外壳酥脆、内里青绿，夹进面饼再配腌菜与芝麻酱。" },
    { category: "慢火 · SLOW COOKED", index: "03", title: "富尔", annotation: "Ful medames · 慢炖蚕豆", text: "橄榄油、柠檬、孜然与蔬菜让炖蚕豆产生不同个性；它既可作早餐，也能成为一顿朴素晚餐。" },
    { category: "咖啡馆 · LOCAL RITUAL", index: "20:00", title: "薄荷茶与阿赫瓦", annotation: "Shai & Ahwa · 把夜晚坐长", text: "老咖啡馆里的茶与土耳其式咖啡是观察城市的座位票。先确认含糖程度，再把时间留给邻桌的谈话声。", className: "aperitivo-card cairo-coffee-card" }
  ] },
  itinerary: { heading: "行程", subheading: "ITINERARY · 48 小时", days: [
    { label: "第一日", index: "01", title: "旧城与河风", stops: [["08:30", "穆伊兹街", "在商铺开门前读建筑细节"], ["11:30", "哈利利市场", "穿过市集去找一杯茶"], ["15:00", "阿兹哈尔公园", "从绿台地俯瞰千塔"], ["17:30", "尼罗河帆船", "让日落替一天降温"]] },
    { label: "第二日", index: "02", title: "多重信仰与收藏", stops: [["09:00", "科普特开罗", "沿旧堡垒与教堂步行"], ["12:30", "库莎丽午餐", "从一碗国民餐补充能量"], ["14:30", "埃及博物馆片区", "按开放馆舍预先选定收藏"], ["18:00", "萨拉丁城堡", "依当天开放安排调整时段"]] }
  ], phraseTitle: "阿拉伯语 · LOCAL PHRASES", phrase: "Shukran · شكراً", phraseNote: "一句“谢谢”与耐心问价，通常比匆忙的手势更有用。", phrases: [["Salam", "你好 / 平安"], ["Min fadlak", "请（对男性）"], ["Bikam?", "多少钱？"], ["La, shukran", "不用，谢谢"]], practical: [["抵达 · ARRIVING", "机场与市中心", "开罗国际机场距核心城区有一段距离，给交通拥堵留足缓冲，并使用正规出租车或官方接驳。"], ["移动 · GETTING AROUND", "地铁 + 正规叫车", "旧城适合分片步行，跨区用地铁或可靠叫车服务；过马路谨慎，不按地图直线估算时间。"], ["礼仪 · RESPECT", "宗教场所", "遮住肩膝、降低音量，并遵从摄影与礼拜时段规定；开放信息以现场和官方公告为准。"]] },
  footer: { mark: "ق", title: "开罗，河风还在翻页。", text: "愿你记住的不只是金字塔的轮廓，也有石巷里的脚步、豆香升起的清晨与尼罗河上的一张白帆。", sources: [["UNESCO · 历史开罗", "https://whc.unesco.org/en/list/89/"], ["埃及旅游和文物部 · 开罗城堡", "https://egymonuments.gov.eg/archaeological-sites/cairo-citadel/"], ["埃及旅游和文物部 · 科普特博物馆", "https://egymonuments.gov.eg/en/museums/the-coptic-museum/"]] }
};

export default function CairoGuide({ theme }: { theme: "vintage" | "modern" }) { return <HistoricCityGuide theme={theme} content={content} />; }
