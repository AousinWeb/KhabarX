// ================= HAMARA NEWS DATABASE (newsData.js) =================

var newsDatabase = [
    {
        id: 1,
        category: "Technology",
        status: 0,
        date: "2026-11-16T18:30:00", // YYYY-MM-DDTHH:MM:SS (Sab se nayi khabar)
        image: "https://unsplash.com",
        english: {
            title: "Pakistan mein AI aur IT sector ki tezi se taraqqi",
            summary: "Naye startups aur freelancers ki wajah se mulk mein record izafa hua hai.",
            content: "Pakistan ke IT sector mein is saal tareekhi izafa dekha gaya hai. Nojawan ab ghar baithe international companies ke saath kaam kar rahe hain."
        },
        urdu: {
            title: "پاکستان میں اے آئی اور آئی ٹی سیکٹر کی تیزی سے ترقی",
            summary: "نئے اسٹارٹ اپس اور فری لانسرز کی وجہ سے ملک میں ریکارڈ اضافہ ہوا ہے۔",
            content: "پاکستان کے آئی ٹی سیکٹر میں اس سال تاریخی اضافہ دیکھا گیا ہے۔ نوجوان اب گھر بیٹھے بین الاقوامی کمپنیوں کے ساتھ کام کر رہے ہیں۔"
        },
        roman: {
            title: "Rapid growth of AI and IT sector in Pakistan",
            summary: "Record increase seen in the country due to new startups and freelancers.",
            content: "Pakistan's IT sector has witnessed a historic surge this year. Youth are now working with international companies from home."
        }
    },
    {
        id: 2,
        category: "Sports",
        status: 2, 
        date: "2026-11-15T14:15:00", // Kal ki khabar
        image: "https://unsplash.com",
        english: {
            title: "Cricket match mein shandar jeet, awam ka jashn",
            summary: "Aakhri over mein dilchasp muqable ke baad team ne match jeet liya.",
            content: "Stadium mein hazaron tamashaiyon ke samne team ne behtareen khel ka muzahira karte hue series apne naam kar li."
        },
        urdu: {
            title: "کرکٹ میچ میں شاندار جیت، عوام کا جشن",
            summary: "آخری اوور میں دلچسپ مقابلے کے بعد ٹیم نے میچ جیت لیا۔",
            content: "اسٹیڈیم میں ہزاروں تماشائیوں کے سامنے ٹیم نے بہترین کھیل کا مظاہرہ کرتے ہوئے سیریز اپنے نام کر لی۔"
        },
        roman: {
            title: "Glorious victory in cricket match, public celebrates",
            summary: "The team won the match after a thrilling contest in the final over.",
            content: "In front of thousands of spectators in the stadium, the team displayed great game and clinched the series."
        }
    },
    {
        id: 3,
        category: "Weather",
        status: 1,
        date: "2026-11-14T09:00:00", // Purani khabar
        image: "https://unsplash.com",
        english: {
            title: "Shumali ilaqon mein barfbari ka naya silsila shuru",
            summary: "Sardi ki shiddat mein izafa, sayyahon ki bari tadad pahari ilaqon ka rukh karne lagi.",
            content: "Mahkma-e-Mausamiyat ke mutabiq agle chand roz tak paharon par barfbari aur maidan mein thandi hawayein chalne ka imkan hai."
        },
        urdu: {
            title: "شمالی علاقوں میں برفباری کا نیا سلسلہ شروع",
            summary: "سردی کی شدت میں اضافہ، سیاحوں کی بڑی تعداد پہاڑی علاقوں کا رخ کرنے لگی۔",
            content: "محکمہ موسمیات کے مطابق اگلے چند روز تک پہاڑوں پر برفباری اور میدانوں میں ٹھنڈی ہوائیں چلنے کا امکان ہے۔"
        },
        roman: {
            title: "New spell of snowfall begins in northern areas",
            summary: "Cold intensity increases as a large number of tourists head towards mountainous regions.",
            content: "According to the Meteorological Department, snowfall on mountains and cold winds in plains are expected for the next few days."
        }
    },
    {
        id: 4,
        category: "Business",
        status: 1,
        date: "2026-11-14T09:00:00", // Purani khabar
        image: "https://unsplash.com",
        english: {
            title: "Shumali ilaqon mein barfbari ka naya silsila shuru",
            summary: "Sardi ki shiddat mein izafa, sayyahon ki bari tadad pahari ilaqon ka rukh karne lagi.",
            content: "Mahkma-e-Mausamiyat ke mutabiq agle chand roz tak paharon par barfbari aur maidan mein thandi hawayein chalne ka imkan hai."
        },
        urdu: {
            title: "شمالی علاقوں میں برفباری کا نیا سلسلہ شروع",
            summary: "سردی کی شدت میں اضافہ، سیاحوں کی بڑی تعداد پہاڑی علاقوں کا رخ کرنے لگی۔",
            content: "محکمہ موسمیات کے مطابق اگلے چند روز تک پہاڑوں پر برفباری اور میدانوں میں ٹھنڈی ہوائیں چلنے کا امکان ہے۔"
        },
        roman: {
            title: "New spell of snowfall begins in northern areas",
            summary: "Cold intensity increases as a large number of tourists head towards mountainous regions.",
            content: "According to the Meteorological Department, snowfall on mountains and cold winds in plains are expected for the next few days."
        }
    },
    {
        id: 1,
        category: "Sports",
        date: "2026-11-21T20:15:00",
        status: 1, // Full Popular
        image: "https://unsplash.com",
        roman: {
            title: "PCB ne naye central contracts ka elan kar diya, Rizwan aur Shan Masood bahar",
            summary: "Pakistan Cricket Board ne 38 khilariyon ko naye contracts diye hain jabke Babar Azam aur Salman Agha top category mein shamil hain.",
            content: "Pakistan Cricket Board (PCB) ne 2026-27 season ke liye central contracts mein bari tabdeeli karte hue 38 khilariyon ki fehrist jari kar di hai. Naye nizam ke tehat sabiq kaptan Mohammad Rizwan, Shan Masood aur Saim Ayub ko contracts se bahar kar diya gaya hai, jabke Babar Azam aur Salman Ali Agha ko Test aur ODI ki top category mein barqarar rakha gaya hai. Selector Aaqib Javed ke mutabiq yeh faisla har format ke liye alag specialist khilari tayyar karne ke liye kiya gaya hai."
        },
        urdu: {
            title: "پی سی بی نے نئے سینٹرل کنٹریکٹس کا اعلان کر دیا، رضوان اور شان مسعود باہر",
            summary: "پاکستان کرکٹ بورڈ نے 38 کھلاڑیوں کو نئے کنٹریکٹس دیے ہیں جبکہ بابر اعظم اور سلمان آغا ٹاپ کیٹیگری میں شامل ہیں۔",
            content: "پاکستان کرکٹ بورڈ (پی سی بی) نے 2026-27 سیزن کے لیے سینٹرل کنٹریکٹس میں بڑی تبدیلی کرتے ہوئے 38 کھلاڑیوں کی فہرست جاری کر دی ہے۔ نئے نظام کے تحت سابق کپتان محمد رضوان، شان مسعود اور صائم ایوب کو کنٹریکٹس سے باہر کر دیا گیا ہے، جبکہ بابر اعظم اور سلمان علی آغا کو ٹیسٹ اور ون ڈے کی ٹاپ کیٹیگری میں برقرار رکھا گیا ہے۔ سلیکٹر عاقب جاوید کے مطابق یہ فیصلہ ہر فارمیٹ کے لیے الگ اسپیشلسٹ کھلاڑی تیار کرنے کے لیے کیا گیا ہے۔"
        },
        english: {
            title: "PCB announces new central contracts, drops Rizwan and Shan Masood",
            summary: "The Pakistan Cricket Board has awarded contracts to 38 players while keeping Babar Azam and Salman Agha in top categories.",
            content: "In a major overhaul for the 2026-27 season, the Pakistan Cricket Board (PCB) has released a list of 38 centrally contracted players. Former captains Mohammad Rizwan, Shan Masood, and opener Saim Ayub have been left out, while Babar Azam and Salman Ali Agha retain top spots. Selector Aaqib Javed stated that the new structure aims to help players specialize in specific formats."
        }
    },
    {
        id: 2,
        category: "Pakistan",
        date: "2026-11-21T18:40:00",
        status: 1, // Full Popular
        image: "https://unsplash.com",
        roman: {
            title: "Lahore ek baar phir duniya ke alooda tareen shehron mein pehle number par",
            summary: "Smog ki shiddat mein izafay ke baad Lahore ne air quality index mein Delhi aur Kabul ko peeche chhor diya.",
            content: "Punjab ke darul hukumat Lahore mein smog aur fizai aloodgi ek baar phir khatarnak had tak barh gayi hai, jis ke baad shehar aalmi darja bandi mein pehle number par aa gaya hai. Mahireen-e-sehat ne shehriyon ko ghair zaroori safar se gurez karne aur mask istemal karne ki hidayat ki hai. Doosri janib Wifaqi Wazeer-e-Mausamiyati Tabdeeli Dr. Musadik Malik SCO tahzeebi mukalmay mein shirkat ke liye New Delhi pahunch gaye hain."
        },
        urdu: {
            title: "لاہور ایک بار پھر دنیا کے آلودہ ترین شہروں میں پہلے نمبر پر",
            summary: "اسموگ کی شدت میں اضافے کے بعد لاہور نے ایئر کوالٹی انڈیکس میں دہلی اور کابل کو پیچھے چھوڑ دیا۔",
            content: "پنجاب کے دارالحکومت لاہور میں اسموگ اور فضائی آلودگی ایک بار پھر خطرناک حد تک بڑھ گئی ہے، جس کے بعد شہر عالمی درجہ بندی میں پہلے نمبر پر آ گیا ہے۔ ماہرین صحت نے شہریوں کو غیر ضروری سفر سے گریز کرنے اور ماسک استعمال کرنے کی ہدایت کی ہے۔ دوسری جانب وفاقی وزیر موسمیاتی تبدیلی ڈاکٹر مصدق ملک شنگھائی تعاون تنظیم کے مکالمے میں شرکت کے لیے نئی دہلی پہنچ گئے ہیں۔"
        },
        english: {
            title: "Lahore ranks first among world's most polluted cities once again",
            summary: "Worsening smog pushes Lahore ahead of Delhi and Kabul on the global air quality index.",
            content: "Air pollution and smog levels in Lahore have surged to hazardous levels once again, placing the city at the top of global pollution rankings. Health experts have advised citizens to wear masks and limit outdoor travel. Meanwhile, Federal Minister for Climate Change Dr. Musadik Malik arrived in New Delhi to attend the SCO cultural dialogue."
        }
    },
    {
        id: 3,
        category: "Business",
        date: "2026-11-21T16:10:00",
        status: 1, // Full Popular
        image: "https://unsplash.com",
        roman: {
            title: "Bijli ke nizam ki behtari ke liye 100 arab rupay ke Sukuk program ka mansooba",
            summary: "National Grid Company hukoomati guarantee ke bagair apni mali sakh par sarmayakari hasil karegi.",
            content: "Pakistan mein bijli ki tarseel ke nizam ko jadeed banane ke liye National Grid Company ne 100 arab rupay tak ke Sukuk program ka mansooba tayyar kar liya hai. Ibtidai marhalay mein 20 arab rupay ke Sukuk jari kiye jayenge. Mahireen ke mutabiq is iqdam se na sirf mulki capital market ko farogh milega balki hukoomati khazanay par bojh bhi kam hoga."
        },
        urdu: {
            title: "بجلی کے نظام کی بہتری کے لیے 100 ارب روپے کے صکوک پروگرام کا منصوبہ",
            summary: "نیشنل گرڈ کمپنی حکومتی گارنٹی کے بغیر اپنی مالی ساکھ پر سرمایہ کاری حاصل کرے گی۔",
            content: "پاکستان میں بجلی کی ترسیل کے نظام کو جدید بنانے کے لیے نیشنل گرڈ کمپنی نے 100 ارب روپے تک کے صکوک پروگرام کا منصوبہ تیار کر لیا ہے۔ ابتدائی مرحلے میں 20 ارب روپے کے صکوک جاری کیے جائیں گے۔ ماہرین کے مطابق اس اقدام سے نہ صرف ملکی کیپیٹل مارکیٹ کو فروغ ملے گا بلکہ حکومتی خزانے پر بوجھ بھی کم ہوگا۔"
        },
        english: {
            title: "Rs 100 billion Sukuk program planned to upgrade power transmission",
            summary: "National Grid Company aims to raise funds on its own financial strength without sovereign guarantees.",
            content: "To modernize Pakistan's electricity transmission network, the National Grid Company has drafted a Rs 100 billion Sukuk issuance plan, starting with an initial tranche of Rs 20 billion. Financial analysts say the move will deepen local capital markets while reducing fiscal pressure on the federal government."
        }
    },
    {
        id: 4,
        category: "World",
        date: "2026-11-21T14:30:00",
        status: 1, // Full Popular
        image: "https://unsplash.com",
        roman: {
            title: "Brexit ke 10 saal baad Europe aur Bartania ke darmiyan naya tijarati muahida tay",
            summary: "Khurak, talba ki fees aur aamad-o-raft ke naye usoolon par dono fareeqain mutafiq ho gaye.",
            content: "Brexit ke das saal baad European Union aur Bartania ne apne talluqat ko naye sire se ustuwar karne ke liye aik ahem muahida kar liya hai. Is muahiday ke tehat zarai ashya ki tijarat, nojawanon ke safar aur university talba ki feeson mein aasaniyan paida ki jayengi. Dono janib ke rehnumaon ne isay aalmi maishat ke liye khush-aayind qarar diya hai."
        },
        urdu: {
            title: "بریگزٹ کے 10 سال بعد یورپ اور برطانیہ کے درمیان نیا تجارتی معاہدہ طے",
            summary: "خوراک، طلبہ کی فیس اور آمد و رفت کے نئے اصولوں پر دونوں فریقین متفق ہو گئے۔",
            content: "بریگزٹ کے دس سال بعد یورپی یونین اور برطانیہ نے اپنے تعلقات کو نئے سرے سے استوار کرنے کے لیے ایک اہم معاہدہ کر لیا ہے۔ اس معاہدے کے تحت زرعی اشیا کی تجارت، نوجوانوں کے سفر اور یونیورسٹی طلبہ کی فیسوں میں آسانیاں پیدا کی جائیں گی۔ دونوں جانب کے رہنماؤں نے اسے عالمی معیشت کے لیے خوش آئند قرار دیا ہے۔"
        },
        english: {
            title: "EU and UK agree on historic reset deal 10 years after Brexit",
            summary: "New agreements reached on food trade, youth mobility, and university student fees.",
            content: "Ten years after the Brexit vote, the European Union and the United Kingdom have struck a landmark agreement to reset bilateral relations. The framework covers smoother agricultural trade, youth mobility schemes, and lower university tuition hurdles, signaling closer cooperation ahead."
        }
    },
    {
        id: 5,
        category: "Technology",
        date: "2026-11-21T12:00:00",
        status: 1, // Full Popular
        image: "https://unsplash.com",
        roman: {
            title: "Jadeed AI chips ki baramad par sakht pabandiyon ke liye America mein naya qanoon",
            summary: "Aalmi AI muqablay ke paish-e-nazar advanced processors tak remote rasai mehdood karne ki tajweez.",
            content: "America ke qanoon saaz idaron ne jadeed Artificial Intelligence (AI) chips ki baramad aur un tak remote rasai ko mazeed sakht banane ke liye naye qawaneen par kaam shuru kar diya hai. Technology mahireen ka kehna hai ke is iqdam se aalmi data centers aur cloud computing companies ki supply chain par gehra asar par sakta hai."
        },
        urdu: {
            title: "جدید اے آئی چپس کی برآمد پر سخت پابندیوں کے لیے امریکہ میں نیا قانون",
            summary: "عالمی اے آئی مقابلے کے پیش نظر ایڈوانسڈ پروسیسرز تک ریموٹ رسائی محدود کرنے کی تجویز۔",
            content: "امریکہ کے قانون ساز اداروں نے جدید آرٹیفیشل انٹیلی جنس (اے آئی) چپس کی برآمد اور ان تک ریموٹ رسائی کو مزید سخت بنانے کے لیے نئے قوانین پر کام شروع کر دیا ہے۔ ٹیکنالوجی ماہرین کا کہنا ہے کہ اس اقدام سے عالمی ڈیٹا سینٹرز اور کلاؤڈ کمپیوٹنگ کمپنیوں کی سپلائی چین پر گہرا اثر پڑ سکتا ہے۔"
        },
        english: {
            title: "US lawmakers push for stricter controls on advanced AI chip access",
summary: "New proposals aim to tighten remote cloud access and export rules amid global AI competition.",
content: "Lawmakers in Washington are pushing for tougher regulations governing the export and remote cloud access of high-end AI processors. Industry analysts note that stricter hardware controls could reshape global datacenter investments and cloud computing partnerships."
}
},
{
id: 6,
category: "Weather",
date: "2026-11-20T21:00:00",
status: 2, // Normal
image: "unsplash.com",
roman: {
title: "Gilgit-Baltistan aur shumali ilaqon mein sardi ki shiddat mein izafa, barfbari ka imkan",
summary: "Skardu, Khaplu aur Hunza mein darja-e-hararat nuqta-e-injimad se neeche gir gaya.",
content: "Gilgit-Baltistan samait mulk ke balai ilaqon mein sardi ne apna rang dikhana shuru kar diya hai. Skardu, Khaplu aur Hunza ki wadiyon mein subah aur raat ke auqat mein shadeed thand par rahi hai. Mahkma-e-Mausamiyat ne agle chand roz mein pahari silsilon par mazeed barfbari ki paishgoi karte hue musafiron ko ehtiyat baratne ki hidayat ki hai."
},
urdu: {
title: "گلگت بلتستان اور شمالی علاقوں میں سردی کی شدت میں اضافہ، برفباری کا امکان",
summary: "اسکردو، خپلو اور ہنزہ میں درجہ حرارت نقطہ انجماد سے نیچے گر گیا۔",
content: "گلگت بلتستان سمیت ملک کے بالائی علاقوں میں سردی نے اپنا رنگ دکھانا شروع کر دیا ہے۔ اسکردو، خپلو اور ہنزہ کی وادیوں میں صبح اور رات کے اوقات میں شدید ٹھنڈ پڑ رہی ہے۔ محکمہ موسمیات نے اگلے چند روز میں پہاڑی سلسلوں پر مزید برفباری کی پیشگوئی کرتے ہوئے مسافروں کو احتیاط برتنے کی ہدایت کی ہے۔"
},
english: {
title: "Cold wave intensifies across Gilgit-Baltistan and northern valleys",
summary: "Temperatures drop below freezing in Skardu, Khaplu, and Hunza as fresh snowfall nears.",
content: "Winter chill has tightened its grip across Gilgit-Baltistan and upper mountainous regions, with nighttime temperatures dipping below freezing in Skardu, Khaplu, and Hunza. The Meteorological Department forecasts fresh snowfall over high peaks in the coming days and advises travelers to take precautions."
}
},
{
id: 7,
category: "Business",
date: "2026-11-20T19:15:00",
status: 2, // Normal
image: "unsplash.com",
roman: {
title: "Tax ka daira barhaye bagair maashi istehkam barqarar rakhna mushkil hoga: IMF",
summary: "IMF numainday ne Pakistan mein infrastructure aur awami falah par sarmayakari barhane par zor diya.",
content: "International Monetary Fund (IMF) ke Pakistan mein muqeem numainday ne kaha hai ke mulk ne maashi istehkam zaroor hasil kiya hai lekin yeh abhi nazuk hai. Unhon ne wazeh kiya ke darmiyani muddat mein mali halat ko mazboot rakhne ke liye tax net ko wasee karna aur ghair zaroori akhrajat par qaboo pana behad zaroori hai."
},
urdu: {
title: "ٹیکس کا دائرہ بڑھائے بغیر معاشی استحکام برقرار رکھنا مشکل ہوگا: آئی ایم ایف",
summary: "آئی ایم ایف نمائندے نے پاکستان میں انفراسٹرکچر اور عوامی فلاح پر سرمایہ کاری بڑھانے پر زور دیا۔",
content: "انٹرنیشنل مانیٹری فنڈ (آئی ایم ایف) کے پاکستان میں مقیم نمائندے نے کہا ہے کہ ملک نے معاشی استحکام ضرور حاصل کیا ہے لیکن یہ ابھی نازک ہے۔ انہوں نے واضح کیا کہ درمیانی مدت میں مالی حالات کو مضبوط رکھنے کے لیے ٹیکس نیٹ کو وسیع کرنا اور غیر ضروری اخراجات پر قابو پانا بے حد ضروری ہے۔"
},
english: {
title: "Economic stability remains fragile without widening tax base: IMF",
summary: "IMF representative urges higher revenue collection to fund infrastructure and public welfare.",
content: "The IMF's resident representative in Pakistan noted that while macroeconomic stability has been achieved, it remains fragile over the medium term. Speaking at an economic forum, the official emphasized expanding the narrow tax base to support vital infrastructure and social spending."
}
},
{
id: 8,
category: "Sports",
date: "2026-11-20T17:30:00",
status: 2, // Normal
image: "unsplash.com",
roman: {
title: "Rawalpindi Test mein Sri Lanka ko shikast, Pakistan ne do saal baad home series jeet li",
summary: "Shandar bowling aur zimedarana batting ki badolat green shirts ne maidan maar liya.",
content: "Rawalpindi Cricket Stadium mein khele gaye doosre Test match mein Pakistan ne Sri Lanka ko shikast de kar do saal ke taweel intezar ke baad apni pehli home Test series jeet li hai. Shaiqeen-e-cricket ne is kamyabi par khushi ka izhar kiya hai aur team ki karkardagi ko saraha hai."
},
urdu: {
title: "راولپنڈی ٹیسٹ میں سری لنکا کو شکست، پاکستان نے دو سال بعد ہوم سیریز جیت لی",
summary: "شاندار بولنگ اور ذمہ دارانہ بیٹنگ کی بدولت گرین شرٹس نے میدان مار لیا۔",
content: "راولپنڈی کرکٹ اسٹیڈیم میں کھیلے گئے دوسرے ٹیسٹ میچ میں پاکستان نے سری لنکا کو شکست دے کر دو سال کے طویل انتظار کے بعد اپنی پہلی ہوم ٹیسٹ سیریز جیت لی ہے۔ شائقین کرکٹ نے اس کامیابی پر خوشی کا اظہار کیا ہے اور ٹیم کی کارکردگی کو سراہا ہے۔"
},
english: {
title: "Pakistan defeat Sri Lanka in Rawalpindi to clinch first home Test series in two years",
summary: "Disciplined bowling and steady batting help the hosts end their home series drought.",
content: "Pakistan secured a memorable victory against Sri Lanka in the second Test at Rawalpindi Cricket Stadium, winning their first home Test series in two years. Fans celebrated the turnaround following a period of major squad changes."
}
},
{
id: 9,
category: "Technology",
date: "2026-11-20T15:00:00",
status: 2, // Normal
image: "unsplash.com",
roman: {
title: "Australia ne AI aur jadeed science ki tehqeeq ke liye 81 million dollar ka fund jari kar diya",
summary: "Sehat, mausamiyat aur sasti tameerat ke 30 naye projects ko mali madad di jayegi.",
content: "Australian hukoomat ne mulk mein Artificial Intelligence aur jadeed technology ko farogh dene ke liye 81 million dollar ke naye grants ka elan kiya hai. Is program ke tehat aise 30 mansoobon ki madad ki jayegi jo AI ke zariye beemariyon ki jald tashkhees, satellites se mausam ki nigrani aur saste ghar banane par kaam kar rahe hain."
},
urdu: {
title: "آسٹریلیا نے اے آئی اور جدید سائنس کی تحقیق کے لیے 81 ملین ڈالر کا فنڈ جاری کر دیا",
summary: "صحت، موسمیات اور سستی تعمیرات کے 30 نئے پروجیکٹس کو مالی مدد دی جائے گی۔",
content: "آسٹریلوی حکومت نے ملک میں آرٹیفیشل انٹیلی جنس اور جدید ٹیکنالوجی کو فروغ دینے کے لیے 81 ملین ڈالر کے نئے گرانٹس کا اعلان کیا ہے۔ اس پروگرام کے تحت ایسے 30 منصوبوں کی مدد کی جائے گی جو اے آئی کے ذریعے بیماریوں کی جلد تشخیص، سیٹلائٹس سے موسم کی نگرانی اور سستے گھر بنانے پر کام کر رہے ہیں۔"
},
english: {
title: "Australia announces $81 million boost for AI and industrial innovation",
summary: "Funding will support 30 collaborative research projects across healthcare, weather, and housing.",
content: "The Australian government has unveiled $81 million in new research grants under its AI Accelerator initiative. The funding backs 30 industry-led projects developing AI diagnostic tools, satellite weather sensors, and cost-effective modular housing."
}
},
{
id: 10,
category: "Pakistan",
date: "2026-11-20T11:45:00",
status: 2, // Normal
image: "unsplash.com",
roman: {
title: "Wazeer-e-Dakhla Mohsin Naqvi ki Hafiz Naeem-ur-Rehman se mulaqat, awami relief par guftagu",
summary: "Mulk ki majmooi aman-o-aman ki soorat-e-haal aur siyasi mushawarat jari rakhne par ittefaq.",
content: "Wifaqi Wazeer-e-Dakhla Mohsin Naqvi ne Ameer Jamaat-e-Islami Hafiz Naeem-ur-Rehman se mulaqat ki jis mein mulk ko darpaish challenges aur awam ko relief dene ke iqdamat par tafseeli tabadla-e-khyal kiya gaya. Dono rehnumaon ne aainda bhi rabtay aur mushawarat ka silsila jari rakhne par ittefaq kiya."
},
urdu: {
title: "وزیر داخلہ محسن نقوی کی حافظ نعیم الرحمان سے ملاقات، عوامی ریلیف پر گفتگو",
summary: "ملک کی مجموعی امن و امان کی صورتحال اور سیاسی مشاورت جاری رکھنے پر اتفاق۔",
content: "وفاقی وزیر داخلہ محسن نقوی نے امیر جماعت اسلامی حافظ نعیم الرحمان سے ملاقات کی جس میں ملک کو درپیش چیلنجز اور عوام کو ریلیف دینے کے اقدامات پر تفصیلی تبادلہ خیال کیا گیا۔ دونوں رہنماؤں نے آئندہ بھی رابطے اور مشاورت کا سلسلہ جاری رکھنے پر اتفاق کیا۔"
},
english: {
title: "Interior Minister Mohsin Naqvi meets Hafiz Naeem-ur-Rehman to discuss public relief",
summary: "Both leaders agree to continue consultations on national security and economic challenges.",
content: "Federal Interior Minister Mohsin Naqvi held a detailed meeting with Jamaat-e-Islami chief Hafiz Naeem-ur-Rehman to discuss law and order and measures to provide economic relief to citizens. Both sides agreed to maintain ongoing dialogue on key national issues."
}
},
{
id: 11,
category: "Business",
date: "2026-11-19T16:20:00",
status: 0, // Less Popular
image: "unsplash.com",
roman: {
title: "Aalmi stock markets mein tech shares ki qeematon mein utar charhao jari",
summary: "AI data centers par barhte hue qarz aur akhrajat ne sarmayakaaron ko mohtat kar diya.",
content: "Aalmi stock markets mein bari technology aur cloud computing companies ke shares mein mandi dekhi ja rahi hai. Maliyati tajziyakaaron ke mutabiq AI infrastructure par arboun dollar ki sarmayakari ke baad ab sarmayakaar fori munafay ka mutalba kar rahe hain."
},
urdu: {
title: "عالمی اسٹاک مارکیٹس میں ٹیک شیئرز کی قیمتوں میں اتار چڑھاؤ جاری",
summary: "اے آئی ڈیٹا سینٹرز پر بڑھتے ہوئے قرض اور اخراجات نے سرمایہ کاروں کو محتاط کر دیا۔",
content: "عالمی اسٹاک مارکیٹس میں بڑی ٹیکنالوجی اور کلاؤڈ کمپیوٹنگ کمپنیوں کے شیئرز میں مندی دیکھی جا رہی ہے۔ مالیاتی تجزیہ کاروں کے مطابق اے آئی انفراسٹرکچر پر اربوں ڈالر کی سرمایہ کاری کے بعد اب سرمایہ کار فوری منافع کا مطالبہ کر رہے ہیں۔"
},
english: {
title: "Global tech stocks face volatility as investors scrutinize AI datacenter debt",
summary: "Rising infrastructure costs prompt cautious sentiment across major technology markets.",
content: "Major technology and cloud computing stocks have experienced renewed volatility as investors weigh heavy borrowing against long-term returns in the AI datacenter boom. Analysts suggest markets are shifting focus toward sustainable profitability."
}
},
{
id: 12,
category: "World",
date: "2026-11-19T13:10:00",
status: 0, // Less Popular
image: "unsplash.com",
roman: {
title: "Aalmi Adalat-e-Insaf ke faislay ke baad Rohingya panah guzeeno ki ba-izzat wapsi ka mutalba",
summary: "Insani huqooq ki tanzeemon ne aalmi biradari se amli iqdamat karne ki appeal kar di.",
content: "International Court of Justice (ICJ) ke tareekhi faislay ke baad aalmi satah par Rohingya mutasireen ko insaf aur shehriyat ke huqooq dilane ke mutalbat zor pakar gaye hain. Mahireen-e-qanoon ka kehna hai ke ab aalmi taqaton ko is faislay par amal daramad yaqeeni banana hoga."
},
urdu: {
title: "عالمی عدالت انصاف کے فیصلے کے بعد روہنگیا پناہ گزینوں کی باعزت واپسی کا مطالبہ",
summary: "انسانی حقوق کی تنظیموں نے عالمی برادری سے عملی اقدامات کرنے کی اپیل کر دی۔",
content: "انٹرنیشنل کورٹ آف جسٹس (آئی سی جے) کے تاریخی فیصلے کے بعد عالمی سطح پر روہنگیا متاثرین کو انصاف اور شہریت کے حقوق دلانے کے مطالبات زور پکڑ گئے ہیں۔ ماہرین قانون کا کہنا ہے کہ اب عالمی طاقتوں کو اس فیصلے پر عمل درآمد یقینی بنانا ہوگا۔"
},
english: {
title: "Global calls mount for safe repatriation following ICJ Rohingya ruling",
summary: "Human rights advocates urge international action to ensure citizenship and justice.",
content: "Following the landmark ruling by the International Court of Justice (ICJ), human rights advocates and legal experts are calling on world powers to move beyond words and guarantee safe return, citizenship, and reparations for the Rohingya."
}
},
{
id: 13,
category: "Technology",
date: "2026-11-18T17:45:00",
status: 0, // Less Popular
image: "unsplash.com",
roman: {
title: "Pakistani freelancers aur IT startups ki baramadat mein musalsal izafa",
summary: "Web development, AI tools aur digital marketing mein nojawanon ne naye sang-e-meel uboor kar liye.",
content: "Pakistan ke chote shehron aur qasbon se talluq rakhne wale nojawan ab internet ke zariye aalmi clients ko apni khidmat faraham kar ke qeemti zar-e-mubadla kama rahe hain. IT mahireen ke mutabiq agar fast internet aur digital training par mazeed tawajjah di jaye to yeh shoba mulki maishat ki reerh ki haddi ban sakta hai."
},
urdu: {
title: "پاکستانی فری لانسرز اور آئی ٹی اسٹارٹ اپس کی برآمدات میں مسلسل اضافہ",
summary: "ویب ڈویلپمنٹ، اے آئی ٹولز اور ڈیجیٹل مارکیٹنگ میں نوجوانوں نے نئے سنگ میل عبور کر لیے۔",
content: "پاکستان کے چھوٹے شہروں اور قصبوں سے تعلق رکھنے والے نوجوان اب انٹرنیٹ کے ذریعے عالمی کلائنٹس کو اپنی خدمات فراہم کر کے قیمتی زرمبادلہ کما رہے ہیں۔ آئی ٹی ماہرین کے مطابق اگر تیز انٹرنیٹ اور ڈیجیٹل ٹریننگ پر مزید توجہ دی جائے تو یہ شعبہ ملکی معیشت کی ریڑھ کی ہڈی بن سکتا ہے۔"
},
english: {
title: "Pakistani freelancers and digital startups post steady export growth",
summary: "Young developers specializing in web platforms and AI tools drive remote service revenues.",
content: "Freelancers and independent software developers across Pakistan—including emerging talent from smaller towns—continue to boost IT export earnings. Industry leaders say reliable connectivity and modern coding skills are opening global opportunities."
}
},
{
id: 14,
category: "Sports",
date: "2026-11-18T12:30:00",
status: 0, // Less Popular
image: "unsplash.com",
roman: {
title: "Khawateen cricket ke farogh ke liye barabar mawaqay zaroori hain: Fatima Sana",
summary: "Pakistan women team ki kaptan ne domestic tournaments aur grassroots level par sarmayakari par zor diya.",
content: "Pakistan women cricket team ki kaptan Fatima Sana ne kaha hai ke mulk mein khawateen cricket mein beshumar talent maujood hai, bas unhein school aur college ki satah par behtar facilities aur zyada matches dene ki zaroorat hai."
},
urdu: {
title: "خواتین کرکٹ کے فروغ کے لیے برابر مواقع ضروری ہیں: فاطمہ ثناء",
summary: "پاکستان ویمن ٹیم کی کپتان نے ڈومیسٹک ٹورنامنٹس اور گراس روٹ لیول پر سرمایہ کاری پر زور دیا۔",
content: "پاکستان ویمن کرکٹ ٹیم کی کپتان فاطمہ ثناء نے کہا ہے کہ ملک میں خواتین کرکٹ میں بے شمار ٹیلنٹ موجود ہے، بس انہیں اسکول اور کالج کی سطح پر بہتر سہولیات اور زیادہ میچز دینے کی ضرورت ہے۔"
},
english: {
title: "Equal opportunities at grassroots level vital for women's cricket: Fatima Sana",
summary: "Pakistan women's captain calls for expanded domestic tournaments and youth facilities.",
content: "Pakistan women's cricket captain Fatima Sana has emphasized the need for stronger grassroots investment and regular domestic tournaments to nurture emerging female athletes across the country."
}
},
{
id: 15,
category: "Weather",
date: "2026-11-17T09:15:00",
status: 0, // Less Popular
image: "unsplash.com",
roman: {
title: "Mulk ke maidan ilaqon mein subah ke auqat mein dhund parne ka silsila shuru",
summary: "Motorway police ne drivers ko fog lights istemal karne aur raftar kam rakhne ki hidayat kar di.",
content: "Sardi barhne ke saath hi Punjab aur Khyber Pakhtunkhwa ke maidan ilaqon mein subah sawere dhund chhane lagi hai. Motorway police ne drivers ko hidayat ki hai ke safar shuru karne se pehle helpline se mausam ki soorat-e-haal maloom kar lein."
},
urdu: {
title: "ملک کے میدانی علاقوں میں صبح کے اوقات میں دھند پڑنے کا سلسلہ شروع",
summary: "موٹروے پولیس نے ڈرائیورز کو فوگ لائٹس استعمال کرنے اور رفتار کم رکھنے کی ہدایت کر دی۔",
content: "سردی بڑھنے کے ساتھ ہی پنجاب اور خیبر پختونخوا کے میدانی علاقوں میں صبح سویرے دھند چھانے لگی ہے۔ موٹروے پولیس نے ڈرائیورز کو ہدایت کی ہے کہ سفر شروع کرنے سے پہلے ہیلپ لائن سے موسم کی صورتحال معلوم کر لیں۔"
},
english: {
title: "Early morning fog begins blanketing plains across Punjab and KP",
summary: "Motorway police advise motorists to use fog lights and maintain safe speeds.",
content: "As temperatures dip across the plains of Punjab and Khyber Pakhtunkhwa, dense morning fog has started affecting visibility on major highways. Motorway authorities have urged drivers to use fog lights and check route updates before traveling."
}
}
];


// ================= 1. ELEMENTS KO SELECT KARNA =================
var searchBtn = document.getElementById('search-btn');
var langBtn = document.getElementById('lang-btn');
var menuBtn = document.getElementById('menu-btn');

var searchPanel = document.getElementById('search-panel');
var langPanel = document.getElementById('lang-panel');
var menuPanel = document.getElementById('menu-panel');

var submitSearch = document.getElementById('submit-search');
var closeSearch = document.getElementById('close-search');
var closeMenu = document.getElementById('close-menu');
var searchInput = document.getElementById('search-input');
var langOptions = document.querySelectorAll('.lang-option');

var newsContainer = document.getElementById('news-container');

// Current State Variables
var currentLang = 'roman';
var activeNewsId = null; // Yaad rakhega ke abhi konsi news khuli hui hai
var originalPageHTML = newsContainer ? newsContainer.innerHTML : "";

// ================= 2. SAB PANELS BAND KARNE KA FUNCTION =================
function closeAllPanels() {
    if (searchPanel) searchPanel.classList.remove('active');
    if (langPanel) langPanel.classList.remove('active');
    if (menuPanel) menuPanel.classList.remove('active');
}

// ================= 3. SEARCH ENGINE ALGORITHM =================
function performSearch() {
    var query = searchInput.value.trim().toLowerCase();
    activeNewsId = null; // Search mode mein koi single news khuli nahi hai

    if (query === "") {
        searchInput.focus();
        return;
    }

    if (typeof newsDatabase === "undefined") {
        console.error("Error: newsData.js load nahi hui!");
        return;
    }

    var matchedNews = newsDatabase.filter(function(item) {
        var inCategory = item.category.toLowerCase().includes(query);
        var inRoman = item.roman.title.toLowerCase().includes(query) || item.roman.summary.toLowerCase().includes(query);
        var inUrdu = item.urdu.title.includes(query) || item.urdu.summary.includes(query);
        var inEnglish = item.english.title.toLowerCase().includes(query) || item.english.summary.toLowerCase().includes(query);

        return inCategory || inRoman || inUrdu || inEnglish;
    });

    // Latest News First
    matchedNews.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    renderNewsCards(matchedNews, query);
}

// ================= 4. NEWS CARDS RENDER KARNA =================
function renderNewsCards(results, query) {
    newsContainer.innerHTML = "";
    var rtlClass = (currentLang === 'urdu') ? 'rtl-text' : '';

    if (results.length > 0) {
        var htmlContent = `
            <div class="search-status-bar">
                <span><strong>"${query}"</strong> Related <strong>${results.length}</strong> info found</span>
                <button class="reset-btn" onclick="resetToMainPage()">
                    <i class="fa-solid fa-arrow-left"></i> Return Back to Home
                </button>
            </div>
            <div class="news-grid">
        `;

        results.forEach(function(news) {
            var newsText = news[currentLang];
            var formattedDate = new Date(news.date).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short', year: 'numeric'
            });

            // Card par click karne se openNewsDetail(news.id) chalega
            htmlContent += `
                <article class="news-card ${rtlClass}" onclick="openNewsDetail(${news.id})">
                    <img src="${news.image}" alt="${newsText.title}">
                    <div class="news-card-body">
                        <span class="news-badge">${news.category}</span>
                        <h3>${newsText.title}</h3>
                        <p>${newsText.summary}</p>
                        <div class="news-date">
                            <i class="fa-regular fa-clock"></i> ${formattedDate}
                        </div>
                    </div>
                </article>
            `;
        });

        htmlContent += `</div>`;
        newsContainer.innerHTML = htmlContent;

    } else {
        newsContainer.innerHTML = `
            <div class="oops-box">
                <i class="fa-solid fa-face-frown-open"></i>
                <h2>Oops! Try again </h2>
                <p>Sorry, <strong>"${query}"</strong> Related No info found in our database.</p>
                <button class="reset-btn" onclick="resetToMainPage()">
                    <i class="fa-solid fa-house"></i> Return back to Home page
                </button>
            </div>
        `;
    }
}

// ================= 5. FULL NEWS + CATEGORY PAGE KHOLNA =================
function openNewsDetail(newsId) {
    activeNewsId = newsId; // Save karein ke konsi news khuli hai
    closeAllPanels();

    // Database se wo specific news dhoondhein
    var selectedNews = newsDatabase.find(function(item) {
        return item.id === newsId;
    });

    if (!selectedNews) return;

    // Usi category ki saari khabrein nikalen (Latest First)
    var categoryNews = newsDatabase.filter(function(item) {
        return item.category.toLowerCase() === selectedNews.category.toLowerCase();
    }).sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    var newsText = selectedNews[currentLang];
    var rtlClass = (currentLang === 'urdu') ? 'rtl-text' : '';
    var formattedDate = new Date(selectedNews.date).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric'
    });

    // 1. Poori Khabar ka HTML
    var detailHTML = `
        <div class="full-article-box ${rtlClass}">
            <div class="article-top-bar">
                <span class="news-badge">${selectedNews.category}</span>
                <button class="reset-btn" onclick="resetToMainPage()">
                    <i class="fa-solid fa-arrow-left"></i> Home Par Wapas
                </button>
            </div>
            
            <h1>${newsText.title}</h1>
            
            <div class="article-meta">
                <span><i class="fa-regular fa-calendar"></i> ${formattedDate}</span>
                <span><i class="fa-solid fa-folder-open"></i> ${selectedNews.category}</span>
            </div>

            <img src="${selectedNews.image}" alt="${newsText.title}" class="article-hero-img">
            
            <div class="article-full-content">
                <p>${newsText.content}</p>
            </div>
        </div>

        <!-- 2. Usi Category Ki Saari Khabrein -->
        <div class="related-category-section">
            <h2>More in ${selectedNews.category}</h2>
            <div class="news-grid">
    `;

    categoryNews.forEach(function(catItem) {
        var catText = catItem[currentLang];
        var catDate = new Date(catItem.date).toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric'
        });

        detailHTML += `
            <article class="news-card ${rtlClass}" onclick="openNewsDetail(${catItem.id})">
                <img src="${catItem.image}" alt="${catText.title}">
                <div class="news-card-body">
                    <span class="news-badge">${catItem.category}</span>
                    <h3>${catText.title}</h3>
                    <p>${catText.summary}</p>
                    <div class="news-date">
                        <i class="fa-regular fa-clock"></i> ${catDate}
                    </div>
                </div>
            </article>
        `;
    });

    detailHTML += `</div></div>`;

    newsContainer.innerHTML = detailHTML;
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Page ko bilkul upar scroll kar dega
}

// Wapas purane page par jane ka function
function resetToMainPage() {
    activeNewsId = null;
    searchInput.value = "";
    newsContainer.innerHTML = originalPageHTML;
    closeAllPanels();
}

// ================= 6. BUTTONS EVENT LISTENERS =================
if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        var isAlreadyOpen = searchPanel.classList.contains('active');
        closeAllPanels();
        if (!isAlreadyOpen) {
            searchPanel.classList.add('active');
            searchInput.focus();
        }
    });
}

if (submitSearch) submitSearch.addEventListener('click', performSearch);

if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
}

if (closeSearch) closeSearch.addEventListener('click', resetToMainPage);

if (langBtn) {
    langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        var isAlreadyOpen = langPanel.classList.contains('active');
        closeAllPanels();
        if (!isAlreadyOpen) langPanel.classList.add('active');
    });
}

langOptions.forEach(function(button) {
    button.addEventListener('click', function() {
        langOptions.forEach(function(btn) { btn.classList.remove('active'); });
        button.classList.add('active');
        currentLang = button.getAttribute('data-lang');
        langPanel.classList.remove('active');
        
        // Agar koi single news khuli hui hai to usay nayi zaban mein update karein
        if (activeNewsId !== null) {
            openNewsDetail(activeNewsId);
        } else if (searchInput.value.trim() !== "") {
            performSearch();
        }
    });
});

if (menuBtn) {
    menuBtn.addEventListener('click', function() {
        closeAllPanels();
        menuPanel.classList.add('active');
    });
}

if (closeMenu) {
    closeMenu.addEventListener('click', function() {
        menuPanel.classList.remove('active');
    });
}

document.addEventListener('click', function(e) {
    if (langPanel && langBtn && !langPanel.contains(e.target) && !langBtn.contains(e.target)) {
        langPanel.classList.remove('active');
    }
});

















// ================= 7. CATEGORY PAGE ALGORITHM (LATEST 10 NEWS) =================
function loadCategoryPage() {
    // Check karein ke URL mein '?cat=' maujood hai ya nahi
    var urlParams = new URLSearchParams(window.location.search);
    var selectedCategory = urlParams.get('cat');

    // Agar yeh category page nahi hai to function ruk jaye
    if (!selectedCategory || typeof newsDatabase === "undefined") {
        return;
    }

    // Page ka browser tab title update karein
    document.title = selectedCategory + " News - KhabarX";

    // 1. Database se is category ki saari news filter karein
    var categoryNews = newsDatabase.filter(function(item) {
        return item.category.toLowerCase() === selectedCategory.toLowerCase();
    });

    // 2. Latest News First ke hisab se sort karein
    categoryNews.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    // 3. Sirf Latest 10 News cut karke rakhein (.slice(0, 10))
    var latestTenNews = categoryNews.slice(0, 10);

    var rtlClass = (currentLang === 'urdu') ? 'rtl-text' : '';

    // 4. Screen par Category Header aur Latest 10 News dikhayein
    if (latestTenNews.length > 0) {
        var catHTML = `
            <div class="search-status-bar">
                <h2><i class="fa-solid fa-layer-group" style="color: var(--accent-color);"></i> ${selectedCategory} — Latest News (${latestTenNews.length})</h2>
                <a href="index.html" class="reset-btn" style="text-decoration: none;">
                    <i class="fa-solid fa-house"></i> Home
                </a>
            </div>
            <div class="news-grid">
        `;

        latestTenNews.forEach(function(news) {
            var newsText = news[currentLang];
            var formattedDate = new Date(news.date).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short', year: 'numeric'
            });

            catHTML += `
                <article class="news-card ${rtlClass}" onclick="openNewsDetail(${news.id})">
                    <img src="${news.image}" alt="${newsText.title}">
                    <div class="news-card-body">
                        <span class="news-badge">${news.category}</span>
                        <h3>${newsText.title}</h3>
                        <p>${newsText.summary}</p>
                        <div class="news-date">
                            <i class="fa-regular fa-clock"></i> ${formattedDate}
                        </div>
                    </div>
                </article>
            `;
        });

        catHTML += `</div>`;
        newsContainer.innerHTML = catHTML;

    } else {
        // Agar is category mein abhi koi news nahi dali gayi
        newsContainer.innerHTML = `
            <div class="oops-box">
                <i class="fa-solid fa-folder-open"></i>
                <h2>${selectedCategory} is  not ready at this time</h2>
                <p>Very Soon info will be upload  .</p>
                <a href="index.html" class="reset-btn" style="text-decoration: none; display: inline-block;">
                    <i class="fa-solid fa-house"></i> Return Back To Home
                </a>
            </div>
        `;
    }

    // Backup update karein taake agar user yahan search karke close kare to wapas category page dikhe
    originalPageHTML = newsContainer.innerHTML;
}

// Page load hote hi Category function ko check karein
window.addEventListener('DOMContentLoaded', loadCategoryPage);


// ================= 8. HOME PAGE: OVERALL LATEST 5 NEWS =================
function loadHomeLatestNews() {
    var latestGrid = document.getElementById('home-latest-news-grid');

    // Agar yeh index page nahi hai ya database load nahi hua to ruk jayein
    if (!latestGrid || typeof newsDatabase === "undefined") {
        return;
    }

    // 1. Pooray database ki copy bana kar Latest Date ke hisab se sort karein
    var overallLatest = newsDatabase.slice().sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    // 2. Sirf top 5 latest news cut karein
    var topFiveNews = overallLatest.slice(0, 5);
    var rtlClass = (currentLang === 'urdu') ? 'rtl-text' : '';

    var latestHTML = "";

    topFiveNews.forEach(function(news) {
        var newsText = news[currentLang];
        var formattedDate = new Date(news.date).toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric'
        });

        latestHTML += `
            <article class="news-card ${rtlClass}" onclick="openNewsDetail(${news.id})">
                <img src="${news.image}" alt="${newsText.title}">
                <div class="news-card-body">
                    <span class="news-badge">${news.category}</span>
                    <h3>${newsText.title}</h3>
                    <p>${newsText.summary}</p>
                    <div class="news-date">
                        <i class="fa-regular fa-clock"></i> ${formattedDate}
                    </div>
                </div>
            </article>
        `;
    });

    latestGrid.innerHTML = latestHTML;

    // Home page ka updated backup save karein (taake search ke baad wapas aane par yeh dikhe)
    originalPageHTML = newsContainer.innerHTML;
}

// Page load hote hi Home Latest 5 News chalayein
window.addEventListener('DOMContentLoaded', loadHomeLatestNews);




// ================= 10. MOST POPULAR 10 NEWS (STATUS: 1 -> 2 -> 0) =================
function loadMostPopularNews() {
    var popularGrid = document.getElementById('popular-news-grid');

    if (!popularGrid || typeof newsDatabase === "undefined") {
        return;
    }

    // Priority order set karna: 1 (Full Popular) sab se pehle, phir 2 (Normal), phir 0 (Less)
    function getStatusPriority(status) {
        if (status === 1) return 1; // Highest Priority
        if (status === 2) return 2; // Medium Priority
        return 3;                   // 0 (Lowest Priority)
    }

    // 1. Database ki copy bana kar Status Priority aur Date ke hisab se sort karein
    var popularSorted = newsDatabase.slice().sort(function(a, b) {
        var priorityA = getStatusPriority(a.status);
        var priorityB = getStatusPriority(b.status);

        // Agar status alag hain to priority (1 -> 2 -> 0) ke hisab se lagayein
        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }
        // Agar status same hain to jo khabar nayi hai usay upar rakhein
        return new Date(b.date) - new Date(a.date);
    });

    // 2. Sirf Top 10 News cut karein
    var topTenPopular = popularSorted.slice(0, 10);
    var rtlClass = (currentLang === 'urdu') ? 'rtl-text' : '';

    var popularHTML = "";

    topTenPopular.forEach(function(news, index) {
        var newsText = news[currentLang];
        var rankNumber = index + 1;

        // Status ke hisab se chota tag text
        var statusLabel = "Normal";
        if (news.status === 1) statusLabel = "Trending";
        else if (news.status === 0) statusLabel = "General";

        popularHTML += `
            <article class="popular-card ${rtlClass}" onclick="openNewsDetail(${news.id})">
                <span class="rank-badge">#${rankNumber}</span>
                <img src="${news.image}" alt="${newsText.title}">
                <div class="popular-card-body">
                    <span class="news-badge">${news.category}</span>
                    <h3>${newsText.title}</h3>
                    <p>${newsText.summary}</p>
                    <div class="popular-meta">
                        <span><i class="fa-solid fa-fire" style="color: var(--accent-color);"></i> ${statusLabel}</span>
                        <span>Parhein <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
            </article>
        `;
    });

    popularGrid.innerHTML = popularHTML;
}

// Page load hote hi Most Popular 10 News chalayein
window.addEventListener('DOMContentLoaded', loadMostPopularNews);










// ================= FULL-WIDTH 5-SLIDE AUTO & MANUAL LOGIC =================
(function() {
    function initFullWidthSlider() {
        var fwSlides = document.querySelectorAll('.fw-slide');
        var fwDots = document.querySelectorAll('.fw-dot');
        var fwPrevBtn = document.getElementById('fw-prev-btn');
        var fwNextBtn = document.getElementById('fw-next-btn');
        var currentFwIndex = 0;
        var autoSlideTimer = null;

        if (fwSlides.length === 0) return;

        function showFwSlide(index) {
            if (index >= fwSlides.length) currentFwIndex = 0;
            else if (index < 0) currentFwIndex = fwSlides.length - 1;
            else currentFwIndex = index;

            for (var i = 0; i < fwSlides.length; i++) {
                fwSlides[i].classList.remove('active');
            }
            for (var j = 0; j < fwDots.length; j++) {
                fwDots[j].classList.remove('active');
            }

            fwSlides[currentFwIndex].classList.add('active');
            if (fwDots[currentFwIndex]) {
                fwDots[currentFwIndex].classList.add('active');
            }
        }

        function startAutoSlide() {
            if (autoSlideTimer) clearInterval(autoSlideTimer);
            autoSlideTimer = setInterval(function() {
                showFwSlide(currentFwIndex + 1);
            }, 4000);
        }

        if (fwPrevBtn) {
            fwPrevBtn.addEventListener('click', function() {
                showFwSlide(currentFwIndex - 1);
                startAutoSlide();
            });
        }

        if (fwNextBtn) {
            fwNextBtn.addEventListener('click', function() {
                showFwSlide(currentFwIndex + 1);
                startAutoSlide();
            });
        }

        for (var k = 0; k < fwDots.length; k++) {
            fwDots[k].addEventListener('click', function() {
                var slideNum = parseInt(this.getAttribute('data-slide'), 10);
                showFwSlide(slideNum);
                startAutoSlide();
            });
        }

        startAutoSlide();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFullWidthSlider);
    } else {
        initFullWidthSlider();
    }
})();







// ================= HELP PAGE FAQ ACCORDION LOGIC =================
document.addEventListener('click', function(e) {
    var questionBtn = e.target.closest('.faq-question');
    if (questionBtn) {
        var faqItem = questionBtn.parentElement;
        faqItem.classList.toggle('active');
    }
});












// ================= CONTACT US FORM SUBMISSION HANDLER =================
document.addEventListener('submit', function(e) {
    if (e.target && e.target.id === 'contact-page-form') {
        e.preventDefault(); // Page reload hone se rokega

        var userName = document.getElementById('contact-name').value.trim();
        var userSubject = document.getElementById('contact-subject').value;
        var formEl = document.getElementById('contact-page-form');
        var successBox = document.getElementById('contact-success-box');
        var successText = document.getElementById('contact-success-text');

        if (formEl && successBox) {
            formEl.style.display = 'none';
            successText.innerHTML = 'Thank you, <strong>' + userName + '</strong>! Your message regarding <strong>"' + userSubject + '"</strong> has been received by our team.';
            successBox.style.display = 'block';
        }
    }
});

// "Send Another Message" button par click karne se form wapas khul jaye
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'send-another-btn') {
        var formEl = document.getElementById('contact-page-form');
        var successBox = document.getElementById('contact-success-box');
        if (formEl && successBox) {
            formEl.reset();
            successBox.style.display = 'none';
            formEl.style.display = 'block';
        }
    }
});




