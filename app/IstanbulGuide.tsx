import HistoricCityGuide, { HistoricCityGuideContent } from "./HistoricCityGuide";

const content: HistoricCityGuideContent = {
  className: "istanbul-book", crumb: ["TÜRKİYE", "MARMARA", "İSTANBUL"], edition: { vintage: "GEZGİN BASKISI · VINTAGE", modern: "PHOTO EDITION · 现代影像版" },
  hero: { eyebrow: "渡轮把两洲缝合，茶杯替航程计时", zh: "伊斯坦布尔", latin: "ISTANBUL", subtitle: "上船以后，帝国天际线才开始移动", image: "istanbul-hero", alt: ["复古旅行画风格的伊斯坦布尔渡轮与历史半岛天际线", "生成的现代旅行摄影风格伊斯坦布尔渡轮与历史半岛天际线"], caption: "两洲之间", captionEn: "BETWEEN TWO CONTINENTS", figureNote: "海鸥跟着渡轮，穹顶与尖塔在水面上缓慢换位。", paragraphs: ["伊斯坦布尔的历史半岛把拜占庭与奥斯曼帝国留在同一条步行线上：圣索菲亚、地下水宫和托普卡帕宫之间，时间不是前后关系，而是一组彼此注视的空间。", "但城市真正的节拍在水上。通勤渡轮把欧洲与亚洲当作日常两岸，乘客端起郁金香形茶杯，海峡风就替地图重新确定方向。"], quote: "这里的方向，不由道路决定，而由水面决定。", quoteEn: "Here, direction is decided by water rather than roads.", facts: [["最佳步调", "4—5 日"], ["城市气质", "流动、壮阔、亲密"], ["适合时节", "春季 / 秋季"], ["不可错过", "通勤渡轮看日落"]] },
  culture: { heading: "人文", subheading: "HERITAGE · 帝国重影", feature: { category: "穹顶 · PALIMPSEST", title: "圣索菲亚", annotation: "Ayasofya · 建筑史的多层回声", standfirst: "一座建筑先后承担教堂、清真寺与博物馆等角色，穹顶下的时间因此从不单声道。", paragraphs: ["圣索菲亚建成于 6 世纪，巨型穹顶和光线设计深刻影响后来城市轮廓。进入前先理解其当前宗教功能，参观区域、着装与开放安排都应以现场规定为准。", "将它与蓝色清真寺、古竞技场和地下水宫连成一段步行，可以看见拜占庭公共空间如何被奥斯曼城市重新解释。避开礼拜高峰，并为安检排队留时间。"], visits: [["建议", "开门后尽早抵达"], ["留时", "2—3 小时"]], link: "https://whc.unesco.org/en/list/356/", linkLabel: "UNESCO 遗产页", noteNo: "537", note: "现存主体由查士丁尼一世时期重建，于 537 年落成；进入活跃宗教场所时应尊重礼拜秩序。" }, cards: [
    { category: "宫廷 · PALACE", index: "02", title: "托普卡帕宫", annotation: "Topkapı Sarayı · 庭院通往海峡", text: "宫门、庭院、议政空间与收藏逐层收紧视线，直到临海平台把城市重新打开。展区多，先按兴趣排序。", tip: "热门附加区域可能单独管理，票务与开放以官方博物馆平台为准。", link: "https://muze.gov.tr/muzeler", linkLabel: "Türkiye Museums" },
    { category: "水下 · CISTERN", index: "03", title: "地下水宫", annotation: "Yerebatan Sarnıcı · 石柱托起城市蓄水记忆", text: "昏暗水面与密集石柱把古代基础设施变成一座地下剧场。空间湿滑且常排队，提前查看官方时段。" },
    { category: "清真寺 · MOSQUE", index: "04", title: "苏莱曼尼耶清真寺", annotation: "Süleymaniye · 山丘上的城市尺度", text: "建筑师希南用院落、穹顶与周边慈善建筑组成完整城市综合体，外院还可俯瞰金角湾。" },
    { category: "街区 · QUARTERS", index: "05", title: "巴拉特到芬内尔", annotation: "Balat & Fener · 坡道、宗教与社区", text: "彩色立面只是表层。教堂、清真寺、学校与仍在生活的社区沿陡坡交错，拍照时别把居民门前当布景。", className: "istanbul-ferry-card" }
  ] },
  nature: { heading: "海峡", subheading: "NATURE · 风与水路", image: "istanbul-nature", alt: ["复古旅行画风格的博斯普鲁斯海峡渡轮与木屋", "生成的现代旅行摄影风格博斯普鲁斯海峡渡轮与滨水木屋"], caption: "海峡航线", captionEn: "BOSPHORUS PASSAGE", category: "水路 · STRAIT", title: "博斯普鲁斯海峡", annotation: "Boğaziçi · 一条流动的城市大道", standfirst: "最好的观景台会鸣笛、靠岸，并把你送到另一洲。", text: "优先选择日常公共渡轮，而不是只追求景点清单。沿线可见宫殿、木构滨水宅邸、堡垒与桥梁；风大时甲板体感温度会明显下降。", time: "VAPUR", timeTitle: "坐一段通勤航线", timeText: "Eminönü、Karaköy、Kadıköy 可灵活组合", noteNo: "32 KM", note: "博斯普鲁斯海峡连接黑海与马尔马拉海。班次和码头可能调整，出发前查询城市渡轮公司。", places: [
    { category: "公园 · PARK", title: "埃米尔甘公园", annotation: "Emirgan Korusu · 海峡北段的春日绿坡", text: "坡地树林与海峡视线适合春季慢行，郁金香季人流旺；平日清晨更能感受林地与水面的关系。", tip: "园内坡度明显，安排舒适鞋履。" },
    { title: "金角湾", annotation: "Haliç · 城市内部的水弯", text: "沿岸公园、船厂遗存与街区更新并置。乘渡轮或电车分段观察，比一次走完全程更从容。" },
    { title: "王子群岛", annotation: "Adalar · 松林与无车慢日", text: "适合额外一天搭船离城。岛上以步行、自行车和公共电动车移动，旺季需预留返航候船时间。" }
  ] },
  food: { heading: "味道", subheading: "FLAVOURS · 炉火与海风", image: "istanbul-food", alt: ["复古商业画风格的伊斯坦布尔芝麻圈、皮德与梅泽", "生成的现代美食摄影风格伊斯坦布尔芝麻圈、皮德、烤肉与梅泽"], caption: "海峡餐桌", captionEn: "AN ISTANBUL TABLE", category: "入席 · AT THE TABLE", title: "一张桌子，\n从芝麻香铺到海风。", text: "早餐可以从街边芝麻圈开始，午间让皮德与汤填饱胃口，夜晚再把梅泽一小碟一小碟铺开。伊斯坦布尔的丰盛不靠一道主菜独占舞台。", script: "茶续上，故事就还没有结束。", note: "海鲜与烤肉先确认时价和份量；繁忙区域看清菜单再落座。", dishes: [
    { category: "街头 · STREET", index: "01", title: "芝麻圈", annotation: "Simit · 渡轮边的酥脆圆环", text: "外层芝麻烤出坚果香，搭配白奶酪、番茄或一杯红茶，就是轻快早餐。不同烘焙店的软硬程度各有性格。" },
    { category: "烤炉 · OVEN", index: "02", title: "皮德", annotation: "Pide · 船形面饼的热气", text: "长形面团承接奶酪、肉末或蔬菜，边缘焦脆、中心柔软。刚出炉时最适合分享。" },
    { category: "小碟 · MEZE", index: "03", title: "梅泽", annotation: "Meze · 把晚餐铺成一场交谈", text: "茄子、酸奶、豆类、海鲜与香草组成冷暖小碟。少量多选，留一点空间给当日鱼获。" },
    { category: "渡轮 · LOCAL RITUAL", index: "17:30", title: "红茶与海峡", annotation: "Çay · 郁金香杯里的航程", text: "在渡轮上端一杯深色红茶，靠窗看码头轮换。杯子不大，足够丈量一次跨洲通勤。", className: "aperitivo-card istanbul-tea-card" }
  ] },
  itinerary: { heading: "行程", subheading: "ITINERARY · 48 小时", days: [
    { label: "第一日", index: "01", title: "穹顶与水下", stops: [["08:30", "圣索菲亚片区", "错峰阅读历史半岛"], ["11:30", "托普卡帕宫", "按兴趣选择庭院与收藏"], ["15:30", "地下水宫", "走入城市的蓄水记忆"], ["18:00", "加拉塔桥", "看渔线与渡轮交错"]] },
    { label: "第二日", index: "02", title: "两洲与市场", stops: [["08:30", "苏莱曼尼耶", "从山丘看金角湾"], ["11:00", "香料市场", "辨认茶叶、香料与甜点"], ["14:00", "渡轮去卡德柯伊", "把午后交给亚洲岸"], ["19:00", "梅泽晚餐", "用小碟慢慢收尾"]] }
  ], phraseTitle: "土耳其语 · LOCAL PHRASES", phrase: "Teşekkürler", phraseNote: "“谢谢”之外，一句 kolay gelsin 也常用来向正在工作的人致意。", phrases: [["Merhaba", "你好"], ["Lütfen", "请"], ["Ne kadar?", "多少钱？"], ["Kolay gelsin", "祝工作顺利"]], practical: [["交通 · TRANSIT", "交通卡 + 渡轮", "轨道交通负责跨区，渡轮负责理解城市；班次以 Şehir Hatları 官方信息为准。"], ["地形 · WALKING", "坡道很多", "老城、加拉塔与巴拉特都有明显坡度，穿防滑鞋，并把地图上的短距离当作立体路线。"], ["礼仪 · RESPECT", "清真寺参观", "避开礼拜时段、着装得体并保持安静；部分区域可能因宗教活动临时调整。"]] },
  footer: { mark: "İ", title: "伊斯坦布尔，下一班渡轮正要靠岸。", text: "愿你记住的不只是穹顶和宫殿，也有茶杯的热度、海鸥的弧线，以及从一洲去往另一洲的日常航程。", sources: [["UNESCO · 伊斯坦布尔历史区", "https://whc.unesco.org/en/list/356/"], ["Türkiye Museums", "https://muze.gov.tr/muzeler"], ["Şehir Hatları · 城市渡轮", "https://www.sehirhatlari.istanbul/en"]] }
};

export default function IstanbulGuide({ theme }: { theme: "vintage" | "modern" }) { return <HistoricCityGuide theme={theme} content={content} />; }
