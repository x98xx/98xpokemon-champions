const pokemonDatabase = [
  {
    "name": "妙蛙花",
    "t1": "草",
    "t2": "毒",
    "image": "images/pokemon/妙蛙花.png"
  },
  {
    "name": "超級妙蛙花",
    "t1": "草",
    "t2": "毒",
    "image": "images/pokemon/妙蛙花.png"
  },
  {
    "name": "噴火龍",
    "t1": "火",
    "t2": "飛行",
    "image": "images/pokemon/噴火龍.png"
  },
  {
    "name": "超級噴火龍Ｘ",
    "t1": "火",
    "t2": "龍",
    "image": "images/pokemon/超級噴火龍Ｘ.png"
  },
  {
    "name": "超級噴火龍Ｙ",
    "t1": "火",
    "t2": "飛行",
    "image": "images/pokemon/超級噴火龍Y.png"
  },
  {
    "name": "水箭龜",
    "t1": "水",
    "t2": "",
    "image": "images/pokemon/水箭龜.png"
  },
  {
    "name": "超級水箭龜",
    "t1": "水",
    "t2": "",
    "image": "images/pokemon/超級水箭龜.png"
  },
  {
    "name": "大針蜂",
    "t1": "蟲",
    "t2": "毒",
    "image": "images/pokemon/大針蜂.png"
  },
  {
    "name": "超級大針蜂",
    "t1": "蟲",
    "t2": "毒",
    "image": "images/pokemon/超級大針蜂.png"
  },
  {
    "name": "大比鳥",
    "t1": "一般",
    "t2": "飛行",
    "image": "images/pokemon/大比鳥.png"
  },
  {
    "name": "超級大比鳥",
    "t1": "一般",
    "t2": "飛行",
    "image": "images/pokemon/超級大比鳥.png"
  },
  {
    "name": "阿柏怪",
    "t1": "毒",
    "t2": "",
    "image": "images/pokemon/阿柏怪.png"
  },
  {
    "name": "皮卡丘",
    "t1": "電",
    "t2": "",
    "image": "images/pokemon/皮卡丘.png"
  },
  {
    "name": "雷丘",
    "t1": "電",
    "t2": "",
    "image": "images/pokemon/雷丘.png"
  },
  {
    "name": "雷丘-阿羅拉的樣子",
    "t1": "電",
    "t2": "超能力",
    "image": "images/pokemon/雷丘-阿羅拉的樣子.png"
  },
  {
    "name": "皮可西",
    "t1": "妖精",
    "t2": "",
    "image": "images/pokemon/皮可西.png"
  },
  {
    "name": "超級皮可西",
    "t1": "妖精",
    "t2": "飛行",
    "image": "images/pokemon/超級皮可西.png"
  },
  {
    "name": "九尾",
    "t1": "火",
    "t2": "",
    "image": "images/pokemon/九尾.png"
  },
  {
    "name": "九尾-阿羅拉的樣子",
    "t1": "冰",
    "t2": "妖精",
    "image": "images/pokemon/九尾-阿羅拉的樣子.png"
  },
  {
    "name": "風速狗",
    "t1": "火",
    "t2": "",
    "image": "images/pokemon/風速狗.png"
  },
  {
    "name": "風速狗-洗翠的樣子",
    "t1": "火",
    "t2": "岩石",
    "image": "images/pokemon/風速狗-洗翠的樣子.png"
  },
  {
    "name": "胡地",
    "t1": "超能力",
    "t2": "",
    "image": "images/pokemon/胡地.png"
  },
  {
    "name": "超級胡地",
    "t1": "超能力",
    "t2": "",
    "image": "images/pokemon/超級胡地.png"
  },
  {
    "name": "怪力",
    "t1": "格鬥",
    "t2": "",
    "image": "images/pokemon/怪力.png"
  },
  {
    "name": "大食花",
    "t1": "草",
    "t2": "毒",
    "image": "images/pokemon/大食花.png"
  },
  {
    "name": "超級大食花",
    "t1": "草",
    "t2": "毒",
    "image": "images/pokemon/超級大食花.png"
  },
  {
    "name": "呆殼獸",
    "t1": "水",
    "t2": "超能力",
    "image": "images/pokemon/呆殼獸.png"
  },
  {
    "name": "呆殼獸-伽勒爾的樣子",
    "t1": "毒",
    "t2": "超能力",
    "image": "images/pokemon/呆殼獸-伽勒爾的樣子.png"
  },
  {
    "name": "超級呆殼獸",
    "t1": "水",
    "t2": "超能力",
    "image": "images/pokemon/超級呆殼獸.png"
  },
  {
    "name": "耿鬼",
    "t1": "幽靈",
    "t2": "毒",
    "image": "images/pokemon/耿鬼.png"
  },
  {
    "name": "超級耿鬼",
    "t1": "幽靈",
    "t2": "毒",
    "image": "images/pokemon/超級耿鬼.png"
  },
  {
    "name": "袋獸",
    "t1": "一般",
    "t2": "",
    "image": "images/pokemon/袋獸.png"
  },
  {
    "name": "超級袋獸",
    "t1": "一般",
    "t2": "",
    "image": "images/pokemon/超級袋獸.png"
  },
  {
    "name": "寶石海星",
    "t1": "水",
    "t2": "超能力",
    "image": "images/pokemon/寶石海星.png"
  },
  {
    "name": "超級寶石海星",
    "t1": "水",
    "t2": "超能力",
    "image": "images/pokemon/超級寶石海星.png"
  },
  {
    "name": "凱羅斯",
    "t1": "蟲",
    "t2": "",
    "image": "images/pokemon/凱羅斯.png"
  },
  {
    "name": "超級凱羅斯",
    "t1": "蟲",
    "t2": "飛行",
    "image": "images/pokemon/超級凱羅斯.png"
  },
  {
    "name": "肯泰羅",
    "t1": "一般",
    "t2": "",
    "image": "images/pokemon/肯泰羅.png"
  },
  {
    "name": "肯泰羅-水瀾種",
    "t1": "格鬥",
    "t2": "水",
    "image": "images/pokemon/肯泰羅-水瀾種.png"
  },
  {
    "name": "肯泰羅-火熾種",
    "t1": "格鬥",
    "t2": "火",
    "image": "images/pokemon/肯泰羅-火熾種.png"
  },
  {
    "name": "肯泰羅-鬥戰種",
    "t1": "格鬥",
    "t2": "",
    "image": "images/pokemon/肯泰羅-鬥戰種.png"
  },
  {
    "name": "暴鯉龍",
    "t1": "水",
    "t2": "飛行",
    "image": "images/pokemon/暴鯉龍.png"
  },
  {
    "name": "超級暴鯉龍",
    "t1": "水",
    "t2": "惡",
    "image": "images/pokemon/超級暴鯉龍.png"
  },
  {
    "name": "百變怪",
    "t1": "一般",
    "t2": "",
    "image": "images/pokemon/百變怪.png"
  },
  {
    "name": "水伊布",
    "t1": "水",
    "t2": "",
    "image": "images/pokemon/水伊布.png"
  },
  {
    "name": "雷伊布",
    "t1": "電",
    "t2": "",
    "image": "images/pokemon/雷伊布.png"
  },
  {
    "name": "火伊布",
    "t1": "火",
    "t2": "",
    "image": "images/pokemon/火伊布.png"
  },
  {
    "name": "化石翼龍",
    "t1": "岩石",
    "t2": "飛行",
    "image": "images/pokemon/化石翼龍.png"
  },
  {
    "name": "超級化石翼龍",
    "t1": "岩石",
    "t2": "飛行",
    "image": "images/pokemon/超級化石翼龍.png"
  },
  {
    "name": "卡比獸",
    "t1": "一般",
    "t2": "",
    "image": "images/pokemon/卡比獸.png"
  },
  {
    "name": "快龍",
    "t1": "龍",
    "t2": "飛行",
    "image": "images/pokemon/快龍.png"
  },
  {
    "name": "超級快龍",
    "t1": "龍",
    "t2": "飛行",
    "image": "images/pokemon/超級快龍.png"
  },
  {
    "name": "大竺葵",
    "t1": "草",
    "t2": "",
    "image": "images/pokemon/大竺葵.png"
  },
  {
    "name": "超級大竺葵",
    "t1": "草",
    "t2": "妖精",
    "image": "images/pokemon/超級大竺葵.png"
  },
  {
    "name": "火爆獸",
    "t1": "火",
    "t2": "",
    "image": "images/pokemon/火爆獸.png"
  },
  {
    "name": "火爆獸-洗翠的樣子",
    "t1": "火",
    "t2": "幽靈",
    "image": "images/pokemon/火爆獸-洗翠的樣子.png"
  },
  {
    "name": "大力鱷",
    "t1": "水",
    "t2": "",
    "image": "images/pokemon/大力鱷.png"
  },
  {
    "name": "超級大力鱷",
    "t1": "水",
    "t2": "龍",
    "image": "images/pokemon/超級大力鱷.png"
  },
  {
    "name": "阿利多斯",
    "t1": "蟲",
    "t2": "毒",
    "image": "images/pokemon/阿利多斯.png"
  },
  {
    "name": "電龍",
    "t1": "電",
    "t2": "",
    "image": "images/pokemon/電龍.png"
  },
  {
    "name": "超級電龍",
    "t1": "電",
    "t2": "龍",
    "image": "images/pokemon/超級電龍.png"
  },
  {
    "name": "瑪力露麗",
    "t1": "水",
    "t2": "妖精",
    "image": "images/pokemon/瑪力露麗.png"
  },
  {
    "name": "蚊香蛙皇",
    "t1": "水",
    "t2": "",
    "image": "images/pokemon/蚊香蛙皇.png"
  },
  {
    "name": "太陽伊布",
    "t1": "超能力",
    "t2": "",
    "image": "images/pokemon/太陽伊布.png"
  },
  {
    "name": "月亮伊布",
    "t1": "惡",
    "t2": "",
    "image": "images/pokemon/月亮伊布.png"
  },
  {
    "name": "呆呆王",
    "t1": "水",
    "t2": "超能力",
    "image": "images/pokemon/呆呆王.png"
  },
  {
    "name": "呆呆王-伽勒爾的樣子",
    "t1": "毒",
    "t2": "超能力",
    "image": "images/pokemon/呆呆王-伽勒爾的樣子.png"
  },
  {
    "name": "佛烈托斯",
    "t1": "蟲",
    "t2": "鋼",
    "image": "images/pokemon/佛烈托斯.png"
  },
  {
    "name": "大鋼蛇",
    "t1": "鋼",
    "t2": "地面",
    "image": "images/pokemon/大鋼蛇.png"
  },
  {
    "name": "超級大鋼蛇",
    "t1": "鋼",
    "t2": "地面",
    "image": "images/pokemon/超級大鋼蛇.png"
  },
  {
    "name": "巨鉗螳螂",
    "t1": "蟲",
    "t2": "鋼",
    "image": "images/pokemon/巨鉗螳螂.png"
  },
  {
    "name": "超級巨鉗螳螂",
    "t1": "蟲",
    "t2": "鋼",
    "image": "images/pokemon/超級巨鉗螳螂.png"
  },
  {
    "name": "赫拉克羅斯",
    "t1": "蟲",
    "t2": "格鬥",
    "image": "images/pokemon/赫拉克羅斯.png"
  },
  {
    "name": "超級赫拉克羅斯",
    "t1": "蟲",
    "t2": "格鬥",
    "image": "images/pokemon/超級赫拉克羅斯.png"
  },
  {
    "name": "盔甲鳥",
    "t1": "鋼",
    "t2": "飛行",
    "image": "images/pokemon/盔甲鳥.png"
  },
  {
    "name": "超級盔甲鳥",
    "t1": "鋼",
    "t2": "飛行",
    "image": "images/pokemon/超級盔甲鳥.png"
  },
  {
    "name": "黑魯加",
    "t1": "惡",
    "t2": "火",
    "image": "images/pokemon/黑魯加.png"
  },
  {
    "name": "超級黑魯加",
    "t1": "惡",
    "t2": "火",
    "image": "images/pokemon/超級黑魯加.png"
  },
  {
    "name": "班基拉斯",
    "t1": "岩石",
    "t2": "惡",
    "image": "images/pokemon/班基拉斯.png"
  },
  {
    "name": "超級班基拉斯",
    "t1": "岩石",
    "t2": "惡",
    "image": "images/pokemon/超級班基拉斯.png"
  },
  {
    "name": "大嘴鷗",
    "t1": "水",
    "t2": "飛行",
    "image": "images/pokemon/大嘴鷗.png"
  },
  {
    "name": "沙奈朵",
    "t1": "超能力",
    "t2": "妖精",
    "image": "images/pokemon/沙奈朵.png"
  },
  {
    "name": "超級沙奈朵",
    "t1": "超能力",
    "t2": "妖精",
    "image": "images/pokemon/超級沙奈朵.png"
  },
  {
    "name": "勾魂眼",
    "t1": "惡",
    "t2": "幽靈",
    "image": "images/pokemon/勾魂眼.png"
  },
  {
    "name": "超級勾魂眼",
    "t1": "惡",
    "t2": "幽靈",
    "image": "images/pokemon/超級勾魂眼.png"
  },
  {
    "name": "波士可多拉",
    "t1": "鋼",
    "t2": "岩石",
    "image": "images/pokemon/波士可多拉.png"
  },
  {
    "name": "超級波士可多拉",
    "t1": "鋼",
    "t2": "",
    "image": "images/pokemon/超級波士可多拉.png"
  },
  {
    "name": "恰雷姆",
    "t1": "格鬥",
    "t2": "超能力",
    "image": "images/pokemon/恰雷姆.png"
  },
  {
    "name": "超級恰雷姆",
    "t1": "格鬥",
    "t2": "超能力",
    "image": "images/pokemon/超級恰雷姆.png"
  },
  {
    "name": "雷電獸",
    "t1": "電",
    "t2": "",
    "image": "images/pokemon/雷電獸.png"
  },
  {
    "name": "超級雷電獸",
    "t1": "電",
    "t2": "",
    "image": "images/pokemon/超級雷電獸.png"
  },
  {
    "name": "巨牙鯊",
    "t1": "水",
    "t2": "惡",
    "image": "images/pokemon/巨牙鯊.png"
  },
  {
    "name": "超級巨牙鯊",
    "t1": "水",
    "t2": "惡",
    "image": "images/pokemon/超級巨牙鯊.png"
  },
  {
    "name": "噴火駝",
    "t1": "火",
    "t2": "地面",
    "image": "images/pokemon/噴火駝.png"
  },
  {
    "name": "超級噴火駝",
    "t1": "火",
    "t2": "地面",
    "image": "images/pokemon/超級噴火駝.png"
  },
  {
    "name": "煤炭龜",
    "t1": "火",
    "t2": "",
    "image": "images/pokemon/煤炭龜.png"
  },
  {
    "name": "七夕青鳥",
    "t1": "龍",
    "t2": "飛行",
    "image": "images/pokemon/七夕青鳥.png"
  },
  {
    "name": "超級七夕青鳥",
    "t1": "龍",
    "t2": "妖精",
    "image": "images/pokemon/超級七夕青鳥.png"
  },
  {
    "name": "美納斯",
    "t1": "水",
    "t2": "",
    "image": "images/pokemon/美納斯.png"
  },
  {
    "name": "飄浮泡泡-飄浮泡泡的樣子",
    "t1": "一般",
    "t2": "",
    "image": "images/pokemon/飄浮泡泡-飄浮泡泡的樣子.png"
  },
  {
    "name": "飄浮泡泡-雨水的樣子",
    "t1": "水",
    "t2": "",
    "image": "images/pokemon/飄浮泡泡-雨水的樣子.png"
  },
  {
    "name": "飄浮泡泡-太陽的樣子",
    "t1": "火",
    "t2": "",
    "image": "images/pokemon/飄浮泡泡-太陽的樣子.png"
  },
  {
    "name": "飄浮泡泡-雪雲的樣子",
    "t1": "冰",
    "t2": "",
    "image": "images/pokemon/飄浮泡泡-雪雲的樣子.png"
  },
  {
    "name": "詛咒娃娃",
    "t1": "幽靈",
    "t2": "",
    "image": "images/pokemon/詛咒娃娃.png"
  },
  {
    "name": "超級詛咒娃娃",
    "t1": "幽靈",
    "t2": "",
    "image": "images/pokemon/超級詛咒娃娃.png"
  },
  {
    "name": "風鈴鈴",
    "t1": "超能力",
    "t2": "",
    "image": "images/pokemon/風鈴鈴.png"
  },
  {
    "name": "超級風鈴鈴",
    "t1": "超能力",
    "t2": "鋼",
    "image": "images/pokemon/超級風鈴鈴.png"
  },
  {
    "name": "阿勃梭魯",
    "t1": "惡",
    "t2": "",
    "image": "images/pokemon/阿勃梭魯.png"
  },
  {
    "name": "超級阿勃梭魯",
    "t1": "惡",
    "t2": "",
    "image": "images/pokemon/超級阿勃梭魯.png"
  },
  {
    "name": "冰鬼護",
    "t1": "冰",
    "t2": "",
    "image": "images/pokemon/冰鬼護.png"
  },
  {
    "name": "超級冰鬼護",
    "t1": "冰",
    "t2": "",
    "image": "images/pokemon/超級冰鬼護.png"
  },
  {
    "name": "土台龜",
    "t1": "草",
    "t2": "地面",
    "image": "images/pokemon/土台龜.png"
  },
  {
    "name": "烈焰猴",
    "t1": "火",
    "t2": "格鬥",
    "image": "images/pokemon/烈焰猴.png"
  },
  {
    "name": "帝王拿波",
    "t1": "水",
    "t2": "鋼",
    "image": "images/pokemon/帝王拿波.png"
  },
  {
    "name": "倫琴貓",
    "t1": "電",
    "t2": "",
    "image": "images/pokemon/倫琴貓.png"
  },
  {
    "name": "羅絲雷朵",
    "t1": "草",
    "t2": "毒",
    "image": "images/pokemon/羅絲雷朵.png"
  },
  {
    "name": "戰槌龍",
    "t1": "岩石",
    "t2": "",
    "image": "images/pokemon/戰槌龍.png"
  },
  {
    "name": "護城龍",
    "t1": "岩石",
    "t2": "鋼",
    "image": "images/pokemon/護城龍.png"
  },
  {
    "name": "長耳兔",
    "t1": "一般",
    "t2": "",
    "image": "images/pokemon/長耳兔.png"
  },
  {
    "name": "超級長耳兔",
    "t1": "一般",
    "t2": "格鬥",
    "image": "images/pokemon/超級長耳兔.png"
  },
  {
    "name": "花岩怪",
    "t1": "幽靈",
    "t2": "惡",
    "image": "images/pokemon/花岩怪.png"
  },
  {
    "name": "烈咬陸鯊",
    "t1": "龍",
    "t2": "地面",
    "image": "images/pokemon/烈咬陸鯊.png"
  },
  {
    "name": "超級烈咬陸鯊",
    "t1": "龍",
    "t2": "地面",
    "image": "images/pokemon/超級烈咬陸鯊.png"
  },
  {
    "name": "路卡利歐",
    "t1": "格鬥",
    "t2": "鋼",
    "image": "images/pokemon/路卡利歐.png"
  },
  {
    "name": "超級路卡利歐",
    "t1": "格鬥",
    "t2": "鋼",
    "image": "images/pokemon/超級路卡利歐.png"
  },
  {
    "name": "河馬獸",
    "t1": "地面",
    "t2": "",
    "image": "images/pokemon/河馬獸.png"
  },
  {
    "name": "毒骷蛙",
    "t1": "毒",
    "t2": "格鬥",
    "image": "images/pokemon/毒骷蛙.png"
  },
  {
    "name": "暴雪王",
    "t1": "草",
    "t2": "冰",
    "image": "images/pokemon/暴雪王.png"
  },
  {
    "name": "超級暴雪王",
    "t1": "草",
    "t2": "冰",
    "image": "images/pokemon/超級暴雪王.png"
  },
  {
    "name": "瑪狃拉",
    "t1": "惡",
    "t2": "冰",
    "image": "images/pokemon/瑪狃拉.png"
  },
  {
    "name": "超甲狂犀",
    "t1": "地面",
    "t2": "岩石",
    "image": "images/pokemon/超甲狂犀.png"
  },
  {
    "name": "葉伊布",
    "t1": "草",
    "t2": "",
    "image": "images/pokemon/葉伊布.png"
  },
  {
    "name": "冰伊布",
    "t1": "冰",
    "t2": "",
    "image": "images/pokemon/冰伊布.png"
  },
  {
    "name": "天蠍王",
    "t1": "地面",
    "t2": "飛行",
    "image": "images/pokemon/天蠍王.png"
  },
  {
    "name": "象牙豬",
    "t1": "冰",
    "t2": "地面",
    "image": "images/pokemon/象牙豬.png"
  },
  {
    "name": "艾路雷朵",
    "t1": "超能力",
    "t2": "格鬥",
    "image": "images/pokemon/艾路雷朵.png"
  },
  {
    "name": "超級艾路雷朵",
    "t1": "超能力",
    "t2": "格鬥",
    "image": "images/pokemon/超級艾路雷朵.png"
  },
  {
    "name": "雪妖女",
    "t1": "冰",
    "t2": "幽靈",
    "image": "images/pokemon/雪妖女.png"
  },
  {
    "name": "超級雪妖女",
    "t1": "冰",
    "t2": "幽靈",
    "image": "images/pokemon/超級雪妖女.png"
  },
  {
    "name": "洛托姆",
    "t1": "電",
    "t2": "幽靈",
    "image": "images/pokemon/洛托姆.png"
  },
  {
    "name": "結霜洛托姆",
    "t1": "電",
    "t2": "冰",
    "image": "images/pokemon/結霜洛托姆.png"
  },
  {
    "name": "旋轉洛托姆",
    "t1": "電",
    "t2": "飛行",
    "image": "images/pokemon/旋轉洛托姆.png"
  },
  {
    "name": "加熱洛托姆",
    "t1": "電",
    "t2": "火",
    "image": "images/pokemon/加熱洛托姆.png"
  },
  {
    "name": "切割洛托姆",
    "t1": "電",
    "t2": "草",
    "image": "images/pokemon/切割洛托姆.png"
  },
  {
    "name": "清洗洛托姆",
    "t1": "電",
    "t2": "水",
    "image": "images/pokemon/清洗洛托姆.png"
  },
  {
    "name": "君主蛇",
    "t1": "草",
    "t2": "",
    "image": "images/pokemon/君主蛇.png"
  },
  {
    "name": "炎武王",
    "t1": "火",
    "t2": "格鬥",
    "image": "images/pokemon/炎武王.png"
  },
  {
    "name": "超級炎武王",
    "t1": "火",
    "t2": "格鬥",
    "image": "images/pokemon/超級炎武王.png"
  },
  {
    "name": "大劍鬼",
    "t1": "水",
    "t2": "",
    "image": "images/pokemon/大劍鬼.png"
  },
  {
    "name": "大劍鬼-洗翠的樣子",
    "t1": "水",
    "t2": "惡",
    "image": "images/pokemon/大劍鬼-洗翠的樣子.png"
  },
  {
    "name": "步哨鼠",
    "t1": "一般",
    "t2": "",
    "image": "images/pokemon/步哨鼠.png"
  },
  {
    "name": "酷豹",
    "t1": "惡",
    "t2": "",
    "image": "images/pokemon/酷豹.png"
  },
  {
    "name": "花椰猿",
    "t1": "草",
    "t2": "",
    "image": "images/pokemon/花椰猿.png"
  },
  {
    "name": "爆香猿",
    "t1": "火",
    "t2": "",
    "image": "images/pokemon/爆香猿.png"
  },
  {
    "name": "冷水猿",
    "t1": "水",
    "t2": "",
    "image": "images/pokemon/冷水猿.png"
  },
  {
    "name": "龍頭地鼠",
    "t1": "地面",
    "t2": "鋼",
    "image": "images/pokemon/龍頭地鼠.png"
  },
  {
    "name": "超級龍頭地鼠",
    "t1": "地面",
    "t2": "鋼",
    "image": "images/pokemon/超級龍頭地鼠.png"
  },
  {
    "name": "差不多娃娃",
    "t1": "一般",
    "t2": "",
    "image": "images/pokemon/差不多娃娃.png"
  },
  {
    "name": "超級差不多娃娃",
    "t1": "一般",
    "t2": "妖精",
    "image": "images/pokemon/超級差不多娃娃.png"
  },
  {
    "name": "修建老匠",
    "t1": "格鬥",
    "t2": "",
    "image": "images/pokemon/修建老匠.png"
  },
  {
    "name": "風妖精",
    "t1": "草",
    "t2": "妖精",
    "image": "images/pokemon/風妖精.png"
  },
  {
    "name": "流氓鱷",
    "t1": "地面",
    "t2": "惡",
    "image": "images/pokemon/流氓鱷.png"
  },
  {
    "name": "死神棺",
    "t1": "幽靈",
    "t2": "",
    "image": "images/pokemon/死神棺.png"
  },
  {
    "name": "灰塵山",
    "t1": "毒",
    "t2": "",
    "image": "images/pokemon/灰塵山.png"
  },
  {
    "name": "索羅亞克",
    "t1": "惡",
    "t2": "",
    "image": "images/pokemon/索羅亞克.png"
  },
  {
    "name": "索羅亞克-洗翠的樣子",
    "t1": "一般",
    "t2": "幽靈",
    "image": "images/pokemon/索羅亞克-洗翠的樣子.png"
  },
  {
    "name": "人造細胞卵",
    "t1": "超能力",
    "t2": "",
    "image": "images/pokemon/人造細胞卵.png"
  },
  {
    "name": "雙倍多多冰",
    "t1": "冰",
    "t2": "",
    "image": "images/pokemon/雙倍多多冰.png"
  },
  {
    "name": "電飛鼠",
    "t1": "電",
    "t2": "飛行",
    "image": "images/pokemon/電飛鼠.png"
  },
  {
    "name": "水晶燈火靈",
    "t1": "幽靈",
    "t2": "火",
    "image": "images/pokemon/水晶燈火靈.png"
  },
  {
    "name": "超級水晶燈火靈",
    "t1": "幽靈",
    "t2": "火",
    "image": "images/pokemon/超級水晶燈火靈.png"
  },
  {
    "name": "凍原熊",
    "t1": "冰",
    "t2": "",
    "image": "images/pokemon/凍原熊.png"
  },
  {
    "name": "泥巴魚",
    "t1": "地面",
    "t2": "電",
    "image": "images/pokemon/泥巴魚.png"
  },
  {
    "name": "泥巴魚-伽勒爾的樣子",
    "t1": "地面",
    "t2": "鋼",
    "image": "images/pokemon/泥巴魚-伽勒爾的樣子.png"
  },
  {
    "name": "泥偶巨人",
    "t1": "地面",
    "t2": "幽靈",
    "image": "images/pokemon/泥偶巨人.png"
  },
  {
    "name": "超級泥偶巨人",
    "t1": "地面",
    "t2": "幽靈",
    "image": "images/pokemon/超級泥偶巨人.png"
  },
  {
    "name": "三首惡龍",
    "t1": "惡",
    "t2": "龍",
    "image": "images/pokemon/三首惡龍.png"
  },
  {
    "name": "火神蛾",
    "t1": "蟲",
    "t2": "火",
    "image": "images/pokemon/火神蛾.png"
  },
  {
    "name": "布里卡隆",
    "t1": "草",
    "t2": "格鬥",
    "image": "images/pokemon/布里卡隆.png"
  },
  {
    "name": "超級布里卡隆",
    "t1": "草",
    "t2": "格鬥",
    "image": "images/pokemon/超級布里卡隆.png"
  },
  {
    "name": "妖火紅狐",
    "t1": "火",
    "t2": "超能力",
    "image": "images/pokemon/妖火紅狐.png"
  },
  {
    "name": "超級妖火紅狐",
    "t1": "火",
    "t2": "超能力",
    "image": "images/pokemon/超級妖火紅狐.png"
  },
  {
    "name": "甲賀忍蛙",
    "t1": "水",
    "t2": "惡",
    "image": "images/pokemon/甲賀忍蛙.png"
  },
  {
    "name": "超級甲賀忍蛙",
    "t1": "水",
    "t2": "惡",
    "image": "images/pokemon/超級甲賀忍蛙.png"
  },
  {
    "name": "掘地兔",
    "t1": "一般",
    "t2": "地面",
    "image": "images/pokemon/掘地兔.png"
  },
  {
    "name": "烈箭鷹",
    "t1": "火",
    "t2": "飛行",
    "image": "images/pokemon/烈箭鷹.png"
  },
  {
    "name": "彩粉蝶",
    "t1": "蟲",
    "t2": "飛行",
    "image": "images/pokemon/彩粉蝶.png"
  },
  {
    "name": "花葉蒂 永恆之花",
    "t1": "妖精",
    "t2": "",
    "image": "images/pokemon/花葉蒂 永恆之花.png"
  },
  {
    "name": "超級花葉蒂",
    "t1": "妖精",
    "t2": "",
    "image": "images/pokemon/超級花葉蒂.png"
  },
  {
    "name": "花潔夫人",
    "t1": "妖精",
    "t2": "",
    "image": "images/pokemon/花潔夫人.png"
  },
  {
    "name": "流氓熊猫",
    "t1": "格鬥",
    "t2": "惡",
    "image": "images/pokemon/流氓熊猫.png"
  },
  {
    "name": "多麗米亞",
    "t1": "一般",
    "t2": "",
    "image": "images/pokemon/多麗米亞.png"
  },
  {
    "name": "超能妙喵-雄性的樣子",
    "t1": "超能力",
    "t2": "",
    "image": "images/pokemon/超能妙喵-雄性的樣子.png"
  },
  {
    "name": "超能妙喵-雌性的樣子",
    "t1": "超能力",
    "t2": "",
    "image": "images/pokemon/超能妙喵-雌性的樣子.png"
  },
  {
    "name": "超級超能妙喵",
    "t1": "超能力",
    "t2": "",
    "image": "images/pokemon/超級超能妙喵.png"
  },
  {
    "name": "堅盾劍怪-盾牌形態",
    "t1": "鋼",
    "t2": "幽靈",
    "image": "images/pokemon/堅盾劍怪-盾牌形態.png"
  },
  {
    "name": "堅盾劍怪-刀劍形態",
    "t1": "鋼",
    "t2": "幽靈",
    "image": "images/pokemon/堅盾劍怪-刀劍形態.png"
  },
  {
    "name": "芳香精",
    "t1": "妖精",
    "t2": "",
    "image": "images/pokemon/芳香精.png"
  },
  {
    "name": "胖甜妮",
    "t1": "妖精",
    "t2": "",
    "image": "images/pokemon/胖甜妮.png"
  },
  {
    "name": "鋼炮臂蝦",
    "t1": "水",
    "t2": "",
    "image": "images/pokemon/鋼炮臂蝦.png"
  },
  {
    "name": "光電傘蜥",
    "t1": "電",
    "t2": "一般",
    "image": "images/pokemon/光電傘蜥.png"
  },
  {
    "name": "怪顎龍",
    "t1": "岩石",
    "t2": "龍",
    "image": "images/pokemon/怪顎龍.png"
  },
  {
    "name": "冰雪巨龍",
    "t1": "岩石",
    "t2": "冰",
    "image": "images/pokemon/冰雪巨龍.png"
  },
  {
    "name": "仙子伊布",
    "t1": "妖精",
    "t2": "",
    "image": "images/pokemon/仙子伊布.png"
  },
  {
    "name": "摔角鷹人",
    "t1": "格鬥",
    "t2": "飛行",
    "image": "images/pokemon/摔角鷹人.png"
  },
  {
    "name": "超級摔角鷹人",
    "t1": "格鬥",
    "t2": "飛行",
    "image": "images/pokemon/超級摔角鷹人.png"
  },
  {
    "name": "咚咚鼠",
    "t1": "電",
    "t2": "妖精",
    "image": "images/pokemon/咚咚鼠.png"
  },
  {
    "name": "黏美龍",
    "t1": "龍",
    "t2": "",
    "image": "images/pokemon/黏美龍.png"
  },
  {
    "name": "黏美龍-洗翠的樣子",
    "t1": "鋼",
    "t2": "龍",
    "image": "images/pokemon/黏美龍-洗翠的樣子.png"
  },
  {
    "name": "鑰圈兒",
    "t1": "鋼",
    "t2": "妖精",
    "image": "images/pokemon/鑰圈兒.png"
  },
  {
    "name": "朽木妖",
    "t1": "幽靈",
    "t2": "草",
    "image": "images/pokemon/朽木妖.png"
  },
  {
    "name": "南瓜怪人",
    "t1": "幽靈",
    "t2": "草",
    "image": "images/pokemon/南瓜怪人.png"
  },
  {
    "name": "冰岩怪",
    "t1": "冰",
    "t2": "",
    "image": "images/pokemon/冰岩怪.png"
  },
  {
    "name": "冰岩怪-洗翠的樣子",
    "t1": "冰",
    "t2": "岩石",
    "image": "images/pokemon/冰岩怪-洗翠的樣子.png"
  },
  {
    "name": "音波龍",
    "t1": "飛行",
    "t2": "龍",
    "image": "images/pokemon/音波龍.png"
  },
  {
    "name": "狙射樹梟",
    "t1": "草",
    "t2": "幽靈",
    "image": "images/pokemon/狙射樹梟.png"
  },
  {
    "name": "狙射樹梟-洗翠的樣子",
    "t1": "草",
    "t2": "格鬥",
    "image": "images/pokemon/狙射樹梟-洗翠的樣子.png"
  },
  {
    "name": "熾焰咆哮虎",
    "t1": "火",
    "t2": "惡",
    "image": "images/pokemon/熾焰咆哮虎.png"
  },
  {
    "name": "西獅海壬",
    "t1": "水",
    "t2": "妖精",
    "image": "images/pokemon/西獅海壬.png"
  },
  {
    "name": "銃嘴大鳥",
    "t1": "一般",
    "t2": "飛行",
    "image": "images/pokemon/銃嘴大鳥.png"
  },
  {
    "name": "好勝毛蟹",
    "t1": "格鬥",
    "t2": "冰",
    "image": "images/pokemon/好勝毛蟹.png"
  },
  {
    "name": "超級好勝毛蟹",
    "t1": "格鬥",
    "t2": "冰",
    "image": "images/pokemon/超級好勝毛蟹.png"
  },
  {
    "name": "鬃岩狼人-白晝的樣子",
    "t1": "岩石",
    "t2": "",
    "image": "images/pokemon/鬃岩狼人-白晝的樣子.png"
  },
  {
    "name": "鬃岩狼人-黑夜的樣子",
    "t1": "岩石",
    "t2": "",
    "image": "images/pokemon/鬃岩狼人-黑夜的樣子.png"
  },
  {
    "name": "鬃岩狼人-黃昏的樣子",
    "t1": "岩石",
    "t2": "",
    "image": "images/pokemon/鬃岩狼人-黃昏的樣子.png"
  },
  {
    "name": "超壞星",
    "t1": "毒",
    "t2": "水",
    "image": "images/pokemon/超壞星.png"
  },
  {
    "name": "重泥挽馬",
    "t1": "地面",
    "t2": "",
    "image": "images/pokemon/重泥挽馬.png"
  },
  {
    "name": "滴蛛霸",
    "t1": "水",
    "t2": "蟲",
    "image": "images/pokemon/滴蛛霸.png"
  },
  {
    "name": "焰后蜥",
    "t1": "毒",
    "t2": "火",
    "image": "images/pokemon/焰后蜥.png"
  },
  {
    "name": "甜冷美后",
    "t1": "草",
    "t2": "",
    "image": "images/pokemon/甜冷美后.png"
  },
  {
    "name": "智揮猩",
    "t1": "一般",
    "t2": "超能力",
    "image": "images/pokemon/智揮猩.png"
  },
  {
    "name": "投擲猴",
    "t1": "格鬥",
    "t2": "",
    "image": "images/pokemon/投擲猴.png"
  },
  {
    "name": "謎擬Q",
    "t1": "幽靈",
    "t2": "妖精",
    "image": "images/pokemon/謎擬Q.png"
  },
  {
    "name": "老翁龍",
    "t1": "一般",
    "t2": "龍",
    "image": "images/pokemon/老翁龍.png"
  },
  {
    "name": "超級老翁龍",
    "t1": "一般",
    "t2": "龍",
    "image": "images/pokemon/超級老翁龍.png"
  },
  {
    "name": "杖尾鱗甲龍",
    "t1": "龍",
    "t2": "格鬥",
    "image": "images/pokemon/杖尾鱗甲龍.png"
  },
  {
    "name": "鋼鎧鴉",
    "t1": "飛行",
    "t2": "鋼",
    "image": "images/pokemon/鋼鎧鴉.png"
  },
  {
    "name": "蘋裹龍",
    "t1": "草",
    "t2": "龍",
    "image": "images/pokemon/蘋裹龍.png"
  },
  {
    "name": "豐蜜龍",
    "t1": "草",
    "t2": "龍",
    "image": "images/pokemon/豐蜜龍.png"
  },
  {
    "name": "沙螺蟒",
    "t1": "地面",
    "t2": "",
    "image": "images/pokemon/沙螺蟒.png"
  },
  {
    "name": "怖思壶-贗品形態",
    "t1": "幽靈",
    "t2": "",
    "image": "images/pokemon/怖思壶-贗品形態.png"
  },
  {
    "name": "怖思壶-真品形態",
    "t1": "幽靈",
    "t2": "",
    "image": "images/pokemon/怖思壶-真品形態.png"
  },
  {
    "name": "布莉姆溫",
    "t1": "超能力",
    "t2": "妖精",
    "image": "images/pokemon/布莉姆溫.png"
  },
  {
    "name": "踏冰人偶",
    "t1": "冰",
    "t2": "超能力",
    "image": "images/pokemon/踏冰人偶.png"
  },
  {
    "name": "死神板",
    "t1": "地面",
    "t2": "幽靈",
    "image": "images/pokemon/死神板.png"
  },
  {
    "name": "霜奶仙",
    "t1": "妖精",
    "t2": "",
    "image": "images/pokemon/霜奶仙.png"
  },
  {
    "name": "莫魯貝可-滿腹花紋",
    "t1": "電",
    "t2": "惡",
    "image": "images/pokemon/莫魯貝可-滿腹花紋.png"
  },
  {
    "name": "莫魯貝可-空腹花紋",
    "t1": "電",
    "t2": "惡",
    "image": "images/pokemon/莫魯貝可-空腹花紋.png"
  },
  {
    "name": "多龍巴魯托",
    "t1": "龍",
    "t2": "幽靈",
    "image": "images/pokemon/多龍巴魯托.png"
  },
  {
    "name": "詭角鹿",
    "t1": "一般",
    "t2": "超能力",
    "image": "images/pokemon/詭角鹿.png"
  },
  {
    "name": "劈斧螳螂",
    "t1": "蟲",
    "t2": "岩石",
    "image": "images/pokemon/劈斧螳螂.png"
  },
  {
    "name": "幽尾玄魚-雄性的樣子",
    "t1": "水",
    "t2": "幽靈",
    "image": "images/pokemon/幽尾玄魚-雄性的樣子.png"
  },
  {
    "name": "幽尾玄魚-雌性的樣子",
    "t1": "水",
    "t2": "幽靈",
    "image": "images/pokemon/幽尾玄魚-雌性的樣子.png"
  },
  {
    "name": "大狃拉",
    "t1": "格鬥",
    "t2": "毒",
    "image": "images/pokemon/大狃拉.png"
  },
  {
    "name": "魔幻假面喵",
    "t1": "草",
    "t2": "惡",
    "image": "images/pokemon/魔幻假面喵.png"
  },
  {
    "name": "骨紋巨聲鱷",
    "t1": "火",
    "t2": "幽靈",
    "image": "images/pokemon/骨紋巨聲鱷.png"
  },
  {
    "name": "狂歡浪舞鴨",
    "t1": "水",
    "t2": "格鬥",
    "image": "images/pokemon/狂歡浪舞鴨.png"
  },
  {
    "name": "巴布土撥",
    "t1": "電",
    "t2": "格鬥",
    "image": "images/pokemon/巴布土撥.png"
  },
  {
    "name": "一家鼠-四隻家庭",
    "t1": "一般",
    "t2": "",
    "image": "images/pokemon/一家鼠-四隻家庭.png"
  },
  {
    "name": "一家鼠-三隻家庭",
    "t1": "一般",
    "t2": "",
    "image": "images/pokemon/一家鼠-三隻家庭.png"
  },
  {
    "name": "鹽石巨靈",
    "t1": "岩石",
    "t2": "",
    "image": "images/pokemon/鹽石巨靈.png"
  },
  {
    "name": "紅蓮鎧騎",
    "t1": "火",
    "t2": "超能力",
    "image": "images/pokemon/紅蓮鎧騎.png"
  },
  {
    "name": "蒼炎刃鬼",
    "t1": "火",
    "t2": "幽靈",
    "image": "images/pokemon/蒼炎刃鬼.png"
  },
  {
    "name": "電肚蛙",
    "t1": "電",
    "t2": "",
    "image": "images/pokemon/電肚蛙.png"
  },
  {
    "name": "狠辣椒",
    "t1": "草",
    "t2": "火",
    "image": "images/pokemon/狠辣椒.png"
  },
  {
    "name": "超級狠辣椒",
    "t1": "草",
    "t2": "火",
    "image": "images/pokemon/超級狠辣椒.png"
  },
  {
    "name": "超能豔鴕",
    "t1": "超能力",
    "t2": "",
    "image": "images/pokemon/超能豔鴕.png"
  },
  {
    "name": "巨鍛匠",
    "t1": "妖精",
    "t2": "鋼",
    "image": "images/pokemon/巨鍛匠.png"
  },
  {
    "name": "海豚俠-平凡形態",
    "t1": "水",
    "t2": "",
    "image": "images/pokemon/海豚俠-平凡形態.png"
  },
  {
    "name": "海豚俠-全能形態",
    "t1": "水",
    "t2": "",
    "image": "images/pokemon/海豚俠-全能形態.png"
  },
  {
    "name": "拖拖蚓",
    "t1": "鋼",
    "t2": "",
    "image": "images/pokemon/拖拖蚓.png"
  },
  {
    "name": "晶光花",
    "t1": "岩石",
    "t2": "毒",
    "image": "images/pokemon/晶光花.png"
  },
  {
    "name": "超級晶光花",
    "t1": "岩石",
    "t2": "毒",
    "image": "images/pokemon/超級晶光花.png"
  },
  {
    "name": "奇麒麟",
    "t1": "一般",
    "t2": "超能力",
    "image": "images/pokemon/奇麒麟.png"
  },
  {
    "name": "仆斬將軍",
    "t1": "惡",
    "t2": "鋼",
    "image": "images/pokemon/仆斬將軍.png"
  },
  {
    "name": "來悲粗茶",
    "t1": "草",
    "t2": "幽靈",
    "image": "images/pokemon/來悲粗茶.png"
  },
  {
    "name": "鋁鋼橋龍",
    "t1": "鋼",
    "t2": "龍",
    "image": "images/pokemon/鋁鋼橋龍.png"
  },
  {
    "name": "蜜集大蛇",
    "t1": "草",
    "t2": "龍",
    "image": "images/pokemon/蜜集大蛇.png"
  },
  {
    "name": "超級雷丘Ｘ",
    "t1": "電",
    "t2": "",
    "image": "images/pokemon/超級雷丘Ｘ.png"
  },
  {
    "name": "超級雷丘Ｙ",
    "t1": "電",
    "t2": "",
    "image": "images/pokemon/超級雷丘Ｙ.png"
  },
  {
    "name": "霸王花",
    "t1": "草",
    "t2": "毒",
    "image": "images/pokemon/霸王花.png"
  },
  {
    "name": "千針魚",
    "t1": "水",
    "t2": "毒",
    "image": "images/pokemon/千針魚.png"
  },
  {
    "name": "蜥蜴王",
    "t1": "草",
    "t2": "",
    "image": "images/pokemon/蜥蜴王.png"
  },
  {
    "name": "超級蜥蜴王",
    "t1": "草",
    "t2": "龍",
    "image": "images/pokemon/超級蜥蜴王.png"
  },
  {
    "name": "火焰鸡",
    "t1": "火",
    "t2": "格鬥",
    "image": "images/pokemon/火焰鸡.png"
  },
  {
    "name": "超級火焰鸡",
    "t1": "火",
    "t2": "格鬥",
    "image": "images/pokemon/超級火焰鸡.png"
  },
  {
    "name": "巨沼怪",
    "t1": "水",
    "t2": "地面",
    "image": "images/pokemon/巨沼怪.png"
  },
  {
    "name": "超級巨沼怪",
    "t1": "水",
    "t2": "地面",
    "image": "images/pokemon/超級巨沼怪.png"
  },
  {
    "name": "大嘴娃",
    "t1": "鋼",
    "t2": "妖精",
    "image": "images/pokemon/大嘴娃.png"
  },
  {
    "name": "超級大嘴娃",
    "t1": "鋼",
    "t2": "妖精",
    "image": "images/pokemon/超級大嘴娃.png"
  },
  {
    "name": "巨金怪",
    "t1": "鋼",
    "t2": "超能力",
    "image": "images/pokemon/巨金怪.png"
  },
  {
    "name": "超級巨金怪",
    "t1": "鋼",
    "t2": "超能力",
    "image": "images/pokemon/超級巨金怪.png"
  },
  {
    "name": "姆克鹰",
    "t1": "一般",
    "t2": "飛行",
    "image": "images/pokemon/姆克鹰.png"
  },
  {
    "name": "超級姆克鹰",
    "t1": "格鬥",
    "t2": "飛行",
    "image": "images/pokemon/超級姆克鹰.png"
  },
  {
    "name": "梦梦蚀",
    "t1": "超能力",
    "t2": "",
    "image": "images/pokemon/梦梦蚀.png"
  },
  {
    "name": "蜈蚣王",
    "t1": "蟲",
    "t2": "毒",
    "image": "images/pokemon/蜈蚣王.png"
  },
  {
    "name": "超級蜈蚣王",
    "t1": "蟲",
    "t2": "毒",
    "image": "images/pokemon/超級蜈蚣王.png"
  },
  {
    "name": "頭巾混混",
    "t1": "惡",
    "t2": "格鬥",
    "image": "images/pokemon/頭巾混混.png"
  },
  {
    "name": "超級頭巾混混",
    "t1": "惡",
    "t2": "格鬥",
    "image": "images/pokemon/超級頭巾混混.png"
  },
  {
    "name": "麻麻鳗魚王",
    "t1": "電",
    "t2": "",
    "image": "images/pokemon/麻麻鳗魚王.png"
  },
  {
    "name": "超級麻麻鳗魚王",
    "t1": "電",
    "t2": "",
    "image": "images/pokemon/超級麻麻鳗魚王.png"
  },
  {
    "name": "火炎狮-雄性的樣子",
    "t1": "火",
    "t2": "一般",
    "image": "images/pokemon/火炎狮-雄性的樣子.png"
  },
  {
    "name": "火炎狮-雌性的樣子",
    "t1": "火",
    "t2": "一般",
    "image": "images/pokemon/火炎狮-雌性的樣子.png"
  },
  {
    "name": "超級火炎狮",
    "t1": "火",
    "t2": "一般",
    "image": "images/pokemon/超級火炎狮.png"
  },
  {
    "name": "乌賊王",
    "t1": "惡",
    "t2": "超能力",
    "image": "images/pokemon/乌賊王.png"
  },
  {
    "name": "超級乌賊王",
    "t1": "惡",
    "t2": "超能力",
    "image": "images/pokemon/超級乌賊王.png"
  },
  {
    "name": "龜足巨铠",
    "t1": "岩石",
    "t2": "水",
    "image": "images/pokemon/龜足巨铠.png"
  },
  {
    "name": "超級龜足巨铠",
    "t1": "岩石",
    "t2": "格鬥",
    "image": "images/pokemon/超級龜足巨铠.png"
  },
  {
    "name": "毒藻龍",
    "t1": "毒",
    "t2": "龍",
    "image": "images/pokemon/毒藻龍.png"
  },
  {
    "name": "超級毒藻龍",
    "t1": "毒",
    "t2": "龍",
    "image": "images/pokemon/超級毒藻龍.png"
  },
  {
    "name": "長毛巨魔",
    "t1": "惡",
    "t2": "妖精",
    "image": "images/pokemon/長毛巨魔.png"
  },
  {
    "name": "列陣兵",
    "t1": "格鬥",
    "t2": "",
    "image": "images/pokemon/列陣兵.png"
  },
  {
    "name": "超級列陣兵",
    "t1": "格鬥",
    "t2": "",
    "image": "images/pokemon/超級列陣兵.png"
  },
  {
    "name": "萬針魚",
    "t1": "惡",
    "t2": "毒",
    "image": "images/pokemon/萬針魚.png"
  },
  {
    "name": "墓揚犬",
    "t1": "幽靈",
    "t2": "",
    "image": "images/pokemon/墓揚犬.png"
  },
  {
    "name": "棄世猴",
    "t1": "格鬥",
    "t2": "幽靈",
    "image": "images/pokemon/棄世猴.png"
  },
  {
    "name": "賽富豪",
    "t1": "鋼",
    "t2": "幽靈",
    "image": "images/pokemon/賽富豪.png"
  }
];
