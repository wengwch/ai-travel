import HistoricCityGuide, { HistoricCityGuideContent } from "./HistoricCityGuide";

const content: HistoricCityGuideContent = {
  className: "samarkand-book", crumb: ["O'ZBEKISTON", "SAMARQAND VILOYATI", "SAMARQAND"], edition: { vintage: "SAYOHATCHI NASHRI · VINTAGE", modern: "PHOTO EDITION · 现代影像版" },
  hero: { eyebrow: "青金砖留住天色，面包香从丝路拐弯", zh: "撒马尔罕", latin: "SAMARKAND", subtitle: "先在广场看光移动，再去巷子里闻一炉面包", image: "samarkand-hero", alt: ["复古旅行画风格的撒马尔罕雷吉斯坦广场与蓝色穹顶", "生成的现代旅行摄影风格撒马尔罕雷吉斯坦广场与蓝色穹顶"], caption: "青金广场", captionEn: "REGISTAN AT FIRST LIGHT", figureNote: "三座经学院围住的不只是广场，也是丝路对知识与尺度的想象。", paragraphs: ["撒马尔罕曾把商旅、学者与手艺人从不同方向带到一起。雷吉斯坦的经学院立面用青金、松石与赭黄把天空裁成几何，沙赫静达的陵墓长廊则把相同色谱变得亲密。", "离开纪念性轴线，锡亚布市场的圆面包、干果与香料又把城市带回日常。这里的丝路并非一条浪漫直线，而是一张关于交换、学习和迁徙的网络。"], quote: "穹门把天空裁成青金，市场用圆面包接住旅人。", quoteEn: "The portals cut the sky into blue; the bazaar welcomes travellers with round bread.", facts: [["最佳步调", "2—3 日"], ["城市气质", "辉煌、温厚、从容"], ["适合时节", "春季 / 秋季"], ["不可错过", "清晨与入夜各看一次雷吉斯坦"]] },
  culture: { heading: "人文", subheading: "HERITAGE · 丝路交汇", feature: { category: "广场 · REGISTAN", title: "雷吉斯坦广场", annotation: "Registon · 三座经学院的城市客厅", standfirst: "当立面被晨光逐层点亮，瓷砖、书法与几何不再只是装饰，而成为知识之城的公开宣言。", paragraphs: ["乌鲁伯格、谢尔多尔与提拉卡利三座经学院围合广场，建造时间不同，却通过尺度和图案形成强烈对话。先退到广场边缘看整体，再靠近观察釉砖修复痕迹。", "日间适合辨认建筑细节，夜间则更像公共舞台。演出、照明与开放区域可能变化，门票和活动以当地官方信息为准，不为拍照翻越围挡。"], visits: [["建议", "开门时与蓝调时刻各来一次"], ["留时", "2—3 小时"]], link: "https://whc.unesco.org/en/list/603/", linkLabel: "UNESCO 遗产页", noteNo: "2001", note: "UNESCO 以“文化交汇之地”将撒马尔罕列入世界遗产，价值覆盖古城遗址、帖木儿时期建筑与城市发展层次。" }, cards: [
    { category: "陵墓 · NECROPOLIS", index: "02", title: "沙赫静达", annotation: "Shohi Zinda · 蓝色陵墓长廊", text: "狭长通道两侧的陵墓像一本以釉砖装订的建筑册。这里仍具宗教意义，衣着、音量和摄影都应保持克制。", tip: "清晨光线柔和，人少时更适合观察不同年代的砖饰。", link: "https://uzbekistan.travel/en/i/samarkand/", linkLabel: "乌兹别克斯坦官方旅游" },
    { category: "纪念 · MAUSOLEUM", index: "03", title: "古尔·埃米尔陵", annotation: "Go‘ri Amir · 帖木儿王朝的穹顶", text: "外部蓝色肋拱穹顶与内部金蓝装饰形成强烈转折。不要只停在主室，院落与入口比例同样关键。" },
    { category: "科学 · ASTRONOMY", index: "04", title: "乌鲁伯格天文台", annotation: "Ulug‘bek Observatory · 把星空变成测量", text: "15 世纪巨型象限仪遗迹提醒人们，撒马尔罕的黄金时代同样属于数学、观测与知识网络。" },
    { category: "城市层 · ARCHAEOLOGY", index: "05", title: "阿弗拉西阿卜", annotation: "Afrosiyob · 比帖木儿更早的撒马尔罕", text: "古城遗址与博物馆把时间推向粟特时代。壁画和地形让丝路交流从建筑传奇回到真实城市层。", className: "samarkand-silk-card" }
  ] },
  nature: { heading: "河谷", subheading: "NATURE · 绿洲边缘", image: "samarkand-nature", alt: ["复古旅行画风格的泽拉夫尚河谷、果园与远山", "生成的现代旅行摄影风格泽拉夫尚河谷、农田与远山"], caption: "河谷绿洲", captionEn: "ZERAFSHAN VALLEY", category: "河谷 · VALLEY", title: "泽拉夫尚河谷", annotation: "Zarafshon · 让古城得以生长的水脉", standfirst: "蓝色古迹之所以能在旱地繁盛，背后是一条河、灌渠与漫长的绿洲农业。", text: "离开核心古迹，果园、葡萄地与田野逐渐显出城市的地理底色。若前往郊区，应通过正规车辆安排，并避免随意进入生产用地。", time: "HALF DAY", timeTitle: "从古城去田野", timeText: "与科尼吉尔村或乡间工坊组合", noteNo: "OASIS", note: "撒马尔罕的历史与泽拉夫尚河流域密不可分。水系、耕作与贸易共同塑造了这座绿洲城市。", places: [
    { category: "工艺 · CRAFT", title: "科尼吉尔村", annotation: "Konigil · 水车与桑皮纸", text: "传统造纸演示把水力、桑树纤维与手工流程连接起来，也让“丝路纸张”不只停在抽象名词。", tip: "确认工坊开放与交通安排，尊重生产空间。" },
    { title: "城市花园", annotation: "Bog‘lar · 树荫里的撒马尔罕", text: "帖木儿时代的花园传统今天以公园、庭院和果树继续存在。午后在树荫里停下，是避开烈日的实用选择。" },
    { title: "锡亚布水脉", annotation: "Siyob · 市场附近的日常绿意", text: "古城北侧的水系与市场相邻，适合把比比哈努姆清真寺、市场和社区步行连成一段。" }
  ] },
  food: { heading: "味道", subheading: "FLAVOURS · 炉火与待客", image: "samarkand-food", alt: ["复古商业画风格的撒马尔罕抓饭、圆面包、烤包子与茶", "生成的现代美食摄影风格撒马尔罕抓饭、圆面包、烤包子与茶"], caption: "丝路饭桌", captionEn: "A SAMARKAND FEAST", category: "入席 · AT THE TABLE", title: "一盘抓饭是主角，\n一只圆面包负责欢迎。", text: "米、胡萝卜、肉与香料在大锅里各自保留形状，又共享油脂与火候。圆面包、茶和新鲜沙拉把丰盛稳稳落到日常。", script: "先掰面包，再慢慢说话。", note: "面包在当地具有敬意，不要倒扣或随意丢弃；集市熟食选择周转快、现场热制的摊位。", dishes: [
    { category: "主食 · PLOV", index: "01", title: "撒马尔罕抓饭", annotation: "Samarqand palovi · 分层呈上的大锅饭", text: "当地版本常将米、黄胡萝卜、肉与鹰嘴豆分层呈现。中午往往是抓饭店最热闹的时段，售完便收。" },
    { category: "面包 · NON", index: "02", title: "撒马尔罕圆面包", annotation: "Samarqand noni · 厚实而带花纹", text: "中心压印、边缘厚实，耐存放也适合分享。市场里先看出炉时间，再选一只仍带余温的。" },
    { category: "烤炉 · TANDOOR", index: "03", title: "烤包子", annotation: "Samsa · 坦都尔炉壁的酥香", text: "洋葱与肉馅包入面皮，贴炉壁烤出脆壳。刚出炉温度很高，配茶慢慢吃。" },
    { category: "待客 · LOCAL RITUAL", index: "15:00", title: "一壶绿茶", annotation: "Choy · 空杯之前先续上", text: "茶馆是休息、聊天与待客的空间。小壶多次斟饮，配干果或甜点，旅程会自然慢下来。", className: "aperitivo-card samarkand-tea-card" }
  ] },
  itinerary: { heading: "行程", subheading: "ITINERARY · 48 小时", days: [
    { label: "第一日", index: "01", title: "青金与星空", stops: [["08:00", "雷吉斯坦", "在旅行团前读清立面"], ["11:00", "古尔·埃米尔", "从院落走入金蓝穹顶"], ["14:30", "乌鲁伯格天文台", "理解丝路上的科学传统"], ["18:30", "雷吉斯坦夜色", "看广场转成公共舞台"]] },
    { label: "第二日", index: "02", title: "陵墓与市场", stops: [["08:00", "沙赫静达", "安静走过蓝色长廊"], ["11:00", "比比哈努姆", "观察纪念建筑的尺度"], ["12:30", "锡亚布市场", "吃抓饭、选一只圆面包"], ["15:30", "阿弗拉西阿卜", "把历史推回粟特时代"]] }
  ], phraseTitle: "乌兹别克语 · LOCAL PHRASES", phrase: "Rahmat", phraseNote: "一句简单的“谢谢”很常用；进入宗教空间前，先观察当地人的做法。", phrases: [["Salom", "你好"], ["Iltimos", "请"], ["Qancha?", "多少钱？"], ["Xayr", "再见"]], practical: [["抵达 · ARRIVING", "铁路连接", "高速列车连接塔什干、布哈拉等城市，热门日期尽早通过官方渠道订票并核对车站。"], ["移动 · GETTING AROUND", "步行 + 正规车辆", "主要古迹并非全部相邻，核心区步行、远点用正规出租车或酒店协助叫车。"], ["季节 · CLIMATE", "昼夜温差", "春秋舒适但早晚偏凉，夏季日照强。带水、防晒，并把室外古迹安排在较凉时段。"]] },
  footer: { mark: "S", title: "撒马尔罕，蓝色还没有褪去。", text: "愿你记住的不只是一座广场，也有市场里温热的圆面包、天文台的刻度与绿洲边缘不断延伸的田野。", sources: [["UNESCO · 撒马尔罕", "https://whc.unesco.org/en/list/603/"], ["Uzbekistan Travel · Samarkand", "https://uzbekistan.travel/en/i/samarkand/"], ["Uzbekistan Travel · Food Tourism", "https://uzbekistan.travel/en/v/food-tourism/"]] }
};

export default function SamarkandGuide({ theme }: { theme: "vintage" | "modern" }) { return <HistoricCityGuide theme={theme} content={content} />; }
