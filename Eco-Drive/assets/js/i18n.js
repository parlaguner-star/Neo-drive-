const translations = {
    tr: {
        // Navbar
        nav_calc: "Hesaplama",
        nav_team: "Tech4Peace",
        nav_green: "Yeşil Okul",
        nav_project: "Proje",
        nav_alt_title: "Ana Navigasyon",
        nav_logo_alt: "Eco Drive Ana Sayfa",

        // Hero
        hero_h1: "Arabanız Kaç Ağaç İster?",
        hero_p: "Tech4Peace Jr. ve Yeşil Okul Kulübü'nün hazırladığı bu siteyle, aracınız için kaç ağaç dikilmesi gerektiğini hesaplayabilirsiniz. Hesaplama yaptıktan sonra ağaçları ekranda görebilirsiniz!",

        // Calculator Form
        calc_h2: "Karbon Ayak İzi Hesaplayıcı",
        label_brand: "Marka",
        select_brand: "Marka seçin...",
        label_model: "Model",
        select_model_initial: "Önce marka seçin...",
        label_fuel: "Yakıt Tipi",
        select_fuel: "Seçiniz...",
        label_year: "Model Yılı",
        label_km: "Yıllık Kilometre",
        placeholder_km: "Örn: 15000",
        btn_calculate: "Ağaçları Hesapla",

        // Result Section
        result_h2: "Hesaplama Sonucu",
        result_initial: "Hesaplama sonucunuz burada görünecek.",
        result_note: "* Hesaplama değerleri tahmini olup, proje geliştikçe güncellenecektir.",
        result_trees: "AĞAÇ",
        donation_spending_initial: "Küçük adımlarla büyük farklar yaratabiliriz!",
        donation_target: "Hedef: {trees} ağaç dikmek",
        btn_donation: "Birkaç ağaç bağışlayarak bu sayıyı azaltmaya başlamak ister misiniz?",

        // Tree Visualization
        tree_h3: "Ağaçları Gör!",
        tree_represent: "Her ağaç ikonu {count} ağacı temsil ediyor. Toplam {total} ağaç gerekiyor!",
        tree_total: "Toplam {total} ağaç gerekiyor!",

        // Info Cards
        card_team_h3: "Tech4Peace Jr. Takımı",
        card_team_p: "FTC robotik yarışmalarına katılan öğrenci takımımız, teknoloji ile sosyal sorumluluk projelerini bir araya getiriyor.",
        card_green_h3: "Yeşil Okul Kulübü",
        card_green_p: "Okulumuzda sürdürülebilirlik ve çevre bilinci konusunda farkındalık yaratan öğrenci sosyal sorumluluk grubu.",
        card_project_h3: "Eco Drive Projesi",
        card_project_p: "Project Pangea'nın bir parçası olan bu projede, öğrenciler veri topluyor ve sürdürülebilir çözümler geliştiriyor.",
        btn_more_info: "Daha Fazla Bilgi",
        btn_learn_project: "Projeyi Öğren",

        // Footer
        footer_p1: "Bu website, <strong>Tech4Peace Jr. FTC Takımı</strong> ve <strong>Yeşil Okul Kulübü</strong> öğrenciler tarafından geliştirilmiştir.",
        footer_copy: "© 2024 Eco Drive | Project Pangea",
        footer_insta: "Instagram: ",

        // About Team Page
        team_h1: "Biz Kimiz? Tech4Peace Jr. Takımı",
        team_p1: "Merhaba! Biz <strong>Tech4Peace Jr.</strong> takımıyız. Açı Okulları’nda robotik ve teknoloji alanında çalışan bir FTC (FIRST Tech Challenge) öğrenci takımıyız. Robot yapmayı çok seviyoruz ve ulusal–uluslararası robotik yarışmalarına katılıyoruz. Ama sadece robot yapmakla kalmıyoruz; aynı zamanda teknoloji ile çevremize ve dünyaya fayda sağlamayı hedefliyoruz.",
        team_h2_1: "FIRST ve FTC Nedir?",
        team_p2_1: "<strong>FIRST</strong> (For Inspiration and Recognition of Science and Technology), dünyanın her yerinden öğrencilerin robot tasarlayıp yarıştığı uluslararası bir organizasyondur. FIRST, gençleri bilim, teknoloji ve mühendislik alanlarında geliştirmeyi amaçlar.",
        team_p2_2: "Bizim katıldığımız yarışma türü <strong>FTC (FIRST Tech Challenge)</strong>’dır. Bu yarışmada robot tasarlıyor, kodluyor, test ediyor ve takım halinde yarışıyoruz. Her yıl farklı bir görev veriliyor ve biz de yaratıcı çözümler geliştiriyoruz.",
        team_h2_2: "Neden Robot Yapıyoruz?",
        team_p3_1: "Robot yapmak bizim için sadece bir yarışma değil, aynı zamanda öğrenme ve üretme yoludur. Robot yaparken:",
        team_li1_1: "Bilim, teknoloji ve matematik öğreniyoruz",
        team_li1_2: "Takım halinde problem çözmeyi öğreniyoruz",
        team_li1_3: "Gerçek hayattaki sorunlara çözüm üretiyoruz",
        team_li1_4: "Teknolojiyi topluma fayda için kullanıyoruz",
        team_li1_5: "Dünyanın farklı yerlerinden öğrencilerle bağlantı kuruyoruz",
        team_h2_3: "Project Pangea ve Eco Drive",
        team_p4_1: "<strong>Eco Drive</strong> projesi, Tech4Peace takımlarının yürüttüğü <strong>Project Pangea</strong> adlı uluslararası çevre projesinin bir parçasıdır.",
        team_p4_2: "Eco Drive projesinde, araçların ne kadar karbon saldığını hesaplıyor ve bu karbonu dengelemek için kaç ağaç dikilmesi gerektiğini gösteriyoruz. Bu sayede insanların çevresel etkilerini daha iyi anlamalarını hedefliyoruz.",
        team_h2_4: "Yeşil Okul Kulübü ile İş Birliği",
        team_p5_1: "Bu projeyi <strong>Yeşil Okul Kulübü</strong> ile birlikte yürütüyoruz. Birlikte okulumuzdaki araç kullanım verilerini topladık ve en çok kullanılan 20 araba ile 10 motosikleti belirledik. Bu verilerle Eco Drive hesaplama sistemini geliştirdik.",
        team_li2_1: "Okul genelinde araç anketi yaptık",
        team_li2_2: "Karbon emisyon verilerini araştırdık",
        team_li2_3: "Web sitesini birlikte geliştirdik",
        team_li2_4: "Çevre bilinci etkinlikleri düzenledik",
        team_p5_2: "Teknoloji ve doğa sevgisini bir araya getirerek, sürdürülebilir bir gelecek için çalışıyoruz. Birlikte üretmenin daha güçlü olduğuna inanıyoruz.",
        team_h2_5: "Bize Ulaşın",
        team_p6_1: "Takımımız hakkında daha fazla bilgi almak, projelerimizi takip etmek veya iş birliği yapmak için sosyal medya hesaplarımızdan bize ulaşabilirsiniz.",

        // Project Page
        project_h1: "Eco Drive Projesi Nasıl Ortaya Çıktı?",
        project_p1: "Merhaba! <strong>Eco Drive</strong> projesi, biz öğrencilerin doğayı korumak için yaptığımız harika bir proje! Bu proje, <strong>Project Pangea</strong> adlı büyük bir projenin parçası.",
        project_h2_1: "Proje Nasıl Başladı?",
        project_p2_1: "Bir gün Tech4Peace Jr. takımı ve Yeşil Okul Kulübü bir araya geldik ve şunu sorduk: 'Okulumuzda ve çevremizde karbon salımını nasıl azaltabiliriz?'",
        project_li1_1: "Çoğu kişi arabalarının ne kadar karbon saldığını bilmiyor",
        project_li1_2: "Ağaç dikmenin ne kadar önemli olduğunu herkes bilmiyor",
        project_li1_3: "Basit bir hesaplama aracı ile herkesi bilgilendirebiliriz",
        project_li1_4: "Okulumuzun gerçek verileri ile çalışmak daha anlamlı",
        project_p2_2: "İşte bu yüzden Eco Drive projesini yaptık! Bu web sitesi sayesinde, herkes arabasının ne kadar karbon saldığını öğrenebilir ve kaç ağaç dikmesi gerektiğini görebilir.",
        project_h2_2: "Nasıl Veri Topladık?",
        project_p3_1: "Bu projenin en güzel yanı, gerçek verilerle çalışması! Yeşil Okul Kulübü öğrencileri, okul genelinde büyük bir anket yaptı:",
        project_survey_h3: "Anket Süreci",
        project_survey_li1: "Velilere hangi aracı kullandıklarını sorduk",
        project_survey_li2: "Okulumuzda en sık kullanılan 20 araba ve 10 motosikleti belirledik",
        project_survey_li3: "Bu listeyi referans alarak veri doğrulaması yaptık",
        project_survey_li4: "Yapay zekâ desteğiyle farklı marka/model/yıl seçenekleri için emisyon verilerini derledik",
        project_survey_li5: "Kullanıcıya geniş araç havuzunu opsiyon olarak sunduk ve hesaplayıcıya entegre ettik",
        project_p3_2: "Bu sayede web sitesi, okulumuzun gerçek araç kullanımını yansıtıyor. Yani sizin sonuçlarınız, gerçekten okulumuzdaki araçlara dayanıyor!",
        project_h2_3: "Project Pangea Nedir?",
        project_p4_1: "<strong>Project Pangea</strong>, bizim başlattığımız büyük bir proje! Dünyanın her yerinden öğrenciler, doğayı korumak için çalışıyor.",
        project_p4_2: "Project Pangea'nın Amacı",
        project_p4_3: "\"Pangea\" kelimesi, milyonlarca yıl önce tüm kıtaların birleşik olduğu süper kıtayı ifade eder. Biz de bu isimden ilham alarak, dünyanın her yerinden öğrencileri bir araya getirmek istiyoruz!",
        project_p4_4: "Farklı okullardan arkadaşlarımız, kendi çevre projelerini yapıyor. Ama hepimiz aynı amaç için çalışıyoruz: Doğayı korumak! Birlikte çalışınca çok daha güçlü oluyoruz ve dünyayı değiştirebiliyoruz.",
        project_h2_4: "Eco Drive'ın Hedefleri",
        project_p5_1: "Eco Drive projesi ile şunları yapmak istiyoruz:",
        project_goal1_h: "Herkesi Bilgilendirmek",
        project_goal1_p: "Karbon ayak izi ve çevresel etki konusunda herkesi bilgilendirmek",
        project_goal2_h: "Sayılarla Göstermek",
        project_goal2_p: "Arabaların ne kadar karbon saldığını somut sayılarla göstermek",
        project_goal3_h: "Ağaç Dikmek",
        project_goal3_p: "Hesaplanan ağaç sayılarını gerçekten dikmek için kampanyalar yapmak",
        project_goal4_h: "Birlikte Çalışmak",
        project_goal4_p: "Farklı okullardan arkadaşlarla birlikte çalışmak",
        project_h2_5: "Nasıl Hesaplıyoruz?",
        project_p6_1: "Eco Drive hesaplama aracı, bilimsel verilere dayalı basit bir formül kullanır. Çok karmaşık değil, bakalım nasıl çalışıyor:",
        project_step1: "<strong>1. Adım:</strong> Seçtiğiniz araç, her kilometrede ne kadar CO₂ salıyor? (Örnek: Ortalama bir araç ~0.12 kg CO₂/km üretir)",
        project_step2: "<strong>2. Adım:</strong> Yıllık kilometre ile çarpıyoruz (15,000 km x 0.12 kg = 1,800 kg CO₂/yıl)",
        project_step3: "<strong>3. Adım:</strong> Bir ağaç yılda ne kadar CO₂ emiyor? Ona bölüyoruz! (1,800 kg ÷ 21 kg/ağaç = ~86 ağaç gerekir)",
        project_calc_note: "* Not: Bu değerler tahmini. Araç tipi, yakıt türü gibi şeylere göre değişebilir. Proje geliştikçe daha doğru hale getireceğiz!",
        project_h2_6: "Gelecek Adımlar",
        project_p7_1: "Eco Drive projesi sürekli gelişen, dinamik bir çalışmadır. Önümüzdeki dönemde planladığımız geliştirmeler:",
        project_next_li1: "Veri Kaynaklarını Güncelleme: Daha güncel ve detaylı araç emisyon verileri ekleme",
        project_next_li2: "Yakıt Tipi Desteği: Benzin, dizel, hibrit ve elektrikli araçlar için ayrı hesaplamalar",
        project_next_li3: "Ağaç Dikim Ortaklıkları: Açı Ormanı ve diğer ağaç dikim organizasyonları ile işbirliği",
        project_next_li4: "MEB ve Okul İzni: Projenin resmi olarak tanınması ve daha geniş çapta kullanılması",
        project_next_li5: "Diğer Okullara Yayılma: Projenin başka okullarda da kullanılması için çalışmalar",
        project_next_li6: "Mobil Uygulama: iOS ve Android için mobil uygulama geliştirme",
        project_next_li7: "Karbon Offset İzleme: Dikilmiş ağaçların takibi ve kullanıcılara geri bildirim",
        project_next_li8: "Sosyal Medya Entegrasyonu: Sonuçların paylaşılması ve farkındalık kampanyaları",
        project_h2_7: "Geri Bildirim ve Katkı",
        project_p8_1: "Eco Drive, bir öğrenci projesidir ve sürekli gelişmektedir. Sizin de fikirleriniz ve geri bildirimleriniz bu projenin daha iyi hale gelmesine yardımcı olacaktır.",
        project_p8_2: "Proje hakkında önerileriniz, sorularınız veya katkıda bulunmak istiyorsanız, lütfen bizimle iletişime geçin:",
        project_h2_8: "Başarılarımız",
        project_p9_1: "Projeyi başlattığımızdan beri neler oldu:",
        project_success_li1: "200'den fazla öğrenci ve veli projeyi öğrendi",
        project_success_li2: "Okulda doğa koruma konuşmaları arttı",
        project_success_li3: "Birçok aile arabalarını nasıl kullandıklarını düşünmeye başladı",
        project_success_li4: "Daha çok kişi otobüs ve metro kullanmaya başladı",
        project_p9_2: "Bu sadece başlangıç! Birlikte çalışırsak dünyayı değiştirebiliriz!",

        // Green School Page
        green_h1: "Yeşil Okul Kulübü",
        green_h2_1: "Amacımız",
        green_p1: "Yeşil Okul Kulübü olarak temel amacımız; öğrencilerde çevresel sorunlara karşı kalıcı bir bilinç ve sorumluluk duygusu geliştirmek, sürdürülebilir yaşam anlayışını günlük hayatın bir parçası hâline getirmektir. İklim değişikliği, çevre kirliliği, erozyon ve doğal kaynakların hızla tükenmesi gibi küresel sorunların yalnızca çevresel değil; aynı zamanda toplumsal ve ekonomik etkileri olduğunun farkındayız. Bu nedenle sürdürülebilirliği bütüncül bir bakış açısıyla ele alıyor ve çevre sorunlarının neden–sonuç ilişkilerini doğru şekilde anlaşılır kılmayı hedefliyoruz.",
        green_p2: "Kulübümüz, bireysel davranışların çevre üzerindeki etkisini somut örneklerle ortaya koyarak geri dönüşüm, enerji ve su tasarrufu, çevre dostu ulaşım ve bilinçli tüketim alışkanlıklarının yaygınlaştırılmasını amaçlamaktadır. Bu doğrultuda öğrencilerin yalnızca bilgi sahibi olmalarını değil, aynı zamanda çevreyi korumaya yönelik aktif sorumluluk almalarını teşvik ediyoruz. Sahada gerçekleştirilen etkinlikler, eğitim sunumları ve farkındalık çalışmalarıyla öğrenilen bilgilerin kalıcı ve uygulanabilir olmasını önemsiyoruz.",
        green_p3: "Eco Drive projesi kapsamında ise karbon ayak izinin azaltılmasına yönelik farkındalık oluşturmayı, araç kullanımının çevre üzerindeki etkilerini görünür kılmayı ve bireylerin daha bilinçli ulaşım tercihleri yapmalarını sağlamayı hedefliyoruz. Teknoloji ve çevre bilincini bir araya getiren bu proje sayesinde, sürdürülebilir bir geleceğin ancak bilinçli bireylerin ortak çabasıyla mümkün olduğuna inanıyoruz. Yeşil Okul Kulübü olarak amacımız; doğaya saygılı, çözüm odaklı düşünen ve çevresel sorumluluk bilinci gelişmiş bireyler yetiştirerek daha yaşanabilir bir dünya için katkı sağlamaktır.",
        green_h2_2: "Ne Yapıyoruz?",
        green_p4: "Yeşil Okul Kulübü olarak şunları yapıyoruz:",
        green_doing_li1: "Herkese Doğa Sevgisini Aşılıyoruz: Arkadaşlarımıza ve ailelerimize doğayı korumanın önemini anlatıyoruz",
        green_doing_li2: "Günlük Hayatta Çevre Dostu Oluyoruz: Daha az atık, daha çok geri dönüşüm!",
        green_doing_li3: "Farkındalık Yaratıyoruz: Karbon ayak izi, plastik kullanımı, enerji tasarrufu gibi konularda herkesi bilgilendiriyoruz",
        green_doing_li4: "Okulumuzda Aktif Oluyoruz: Etkinlikler düzenliyor, projeler yapıyoruz",
        green_doing_li5: "Öğrendiklerimizi Paylaşıyoruz: Bildiklerimizi başkalarına da öğretiyoruz",
        green_h2_3: "Yaptığımız Etkinlikler",
        green_p5: "Okulumuzda ve çevremizde birçok eğlenceli etkinlik yapıyoruz:",
        green_event1_h: "Geri Dönüşüm Kampanyaları",
        green_event1_p: "Kağıt, plastik ve cam atıkları ayrı topluyoruz. Herkese geri dönüşümün ne kadar önemli olduğunu anlatıyoruz!",
        green_event2_h: "Ağaç Dikme Günleri",
        green_event2_p: "Birlikte ağaç dikiyoruz! Her öğrencinin en az bir ağaç dikmesini sağlıyoruz. Ağaçlar sayesinde havamız daha temiz oluyor!",
        green_event3_h: "Enerji Tasarrufu",
        green_event3_p: "Okulda ve evlerde nasıl daha az enerji kullanabileceğimizi öğreniyoruz. Işıkları kapatmayı, gereksiz elektrik kullanmamayı hatırlatıyoruz!",
        green_event4_h: "Toplu Taşıma ve Bisiklet",
        green_event4_p: "Arabalar çok karbon salıyor. Bunun yerine otobüs, metro veya bisiklet kullanmayı öğreniyoruz. Hem sağlıklı hem de çevre dostu!",
        green_event5_h: "Vakıf ve STK İş Birlikleri",
        green_event5_p: "WWF, TEMA Vakfı gibi çevre kuruluşları ile birlikte çalışıyor, projeler yürütüyoruz.",
        green_event6_h: "Sahil Temizliği",
        green_event6_p: "Denizlerimizi korumak için sahil temizliği etkinlikleri düzenliyoruz.",
        green_h2_4: "Eco Drive'da Rolümüz",
        green_p6: "Eco Drive projesi bizim en sevdiğimiz projelerden biri! Tech4Peace Jr. takımı ile birlikte bu harika web sitesini yaptık.",
        green_p7: "Projede neler yaptık:",
        green_role_li1: "Anket Yaptık: Okuldaki herkese hangi arabayı kullandıklarını sorduk. En çok kullanılan 30 aracı belirledik!",
        green_role_li2: "Herkesi Bilgilendirdik: Arabaların doğaya nasıl zarar verdiğini anlattık",
        green_role_li3: "Web Sitesini Tanıttık: Bu web sitesini okulda herkese gösterdik",
        green_role_li4: "Geri Bildirim Topladık: Projeyi daha iyi hale getirdik",
        green_role_li5: "Ağaç Dikme Planları: Gerçek ağaç dikmek için planlar yaptık",
        green_h2_5: "Oylama Çalışması",
        green_p8: "Eco Drive projesinin temelini oluşturan araç verilerini toplamak için okul genelinde kapsamlı bir oylama çalışması yaptık.",
        green_vote_li1: "200'den fazla öğrenci ve veliye ulaştık",
        green_vote_li2: "Araç modellerini listeledik",
        green_vote_li3: "Yıllık kilometre verilerini derledik",
        green_vote_li4: "En popüler 30 aracı belirledik",
        green_p9: "Bu veriler sayesinde Eco Drive hesaplayıcısı, okulumuzun gerçek verilerine dayalı sonuçlar üretebiliyor.",
        green_h2_6: "Gelecek Planlarımız",
        green_plan_li1: "Projeyi diğer okullara yaymak",
        green_plan_li2: "Gerçek ağaç dikim kampanyaları",
        green_plan_li3: "Karbon azaltma yarışmaları",
        green_plan_li4: "Güçlü işbirlikleri",
        green_plan_li5: "Ödül programları",
        green_h2_7: "Sen de Katıl!",
        green_p10: "Yeşil Okul Kulübü her öğrenciye açıktır. Sürdürülebilir bir gelecek için bize katıl!",
        green_p11: "Birlikte daha yeşil bir dünya için çalışalım!",

        // Common
        btn_calc_return: "← Hesaplama Sayfasına Dön",
        btn_calc_now: "Hemen Hesapla",
        btn_know_team: "Tech4Peace'i Tanı"
    },
    en: {
        // Navbar
        nav_calc: "Calculator",
        nav_team: "Tech4Peace",
        nav_green: "Green School",
        nav_project: "Project",
        nav_alt_title: "Main Navigation",
        nav_logo_alt: "Eco Drive Home",

        // Hero
        hero_h1: "How Many Trees for Your Car?",
        hero_p: "With this site prepared by Tech4Peace Jr. and Green School Club, you can calculate how many trees should be planted for your vehicle. You can see the trees on the screen after calculating!",

        // Calculator Form
        calc_h2: "Carbon Footprint Calculator",
        label_brand: "Brand",
        select_brand: "Select brand...",
        label_model: "Model",
        select_model_initial: "Select brand first...",
        label_fuel: "Fuel Type",
        select_fuel: "Select...",
        label_year: "Model Year",
        label_km: "Yearly Kilometers",
        placeholder_km: "Ex: 15000",
        btn_calculate: "Calculate Trees",

        // Result Section
        result_h2: "Calculation Result",
        result_initial: "Your calculation result will appear here.",
        result_note: "* Calculation values are estimates and will be updated as the project develops.",
        result_trees: "TREES",
        donation_spending_initial: "Small steps can make big differences!",
        donation_target: "Goal: Plant {trees} trees",
        btn_donation: "Would you like to start reducing this number by donating a few trees?",

        // Tree Visualization
        tree_h3: "See the Trees!",
        tree_represent: "Each tree icon represents {count} trees. A total of {total} trees are needed!",
        tree_total: "A total of {total} trees are needed!",

        // Info Cards
        card_team_h3: "Tech4Peace Jr. Team",
        card_team_p: "Our student team participating in FTC robotics competitions combines technology with social responsibility projects.",
        card_green_h3: "Green School Club",
        card_green_p: "A student social responsibility group that raises awareness about sustainability and environmental awareness in our school.",
        card_project_h3: "Eco Drive Project",
        card_project_p: "In this project, which is part of Project Pangea, students collect data and develop sustainable solutions.",
        btn_more_info: "More Information",
        btn_learn_project: "Learn Project",

        // Footer
        footer_p1: "This website was developed by <strong>Tech4Peace Jr. FTC Team</strong> and <strong>Green School Club</strong> students.",
        footer_copy: "© 2024 Eco Drive | Project Pangea",
        footer_insta: "Instagram: ",

        // About Team Page
        team_h1: "Who Are We? Tech4Peace Jr. Team",
        team_p1: "Hello! We are the <strong>Tech4Peace Jr.</strong> team. We are an FTC (FIRST Tech Challenge) student team working in the field of robotics and technology at Açı Schools. We love building robots and participate in national and international robotics competitions. But we don't just build robots; we also aim to benefit our environment and the world with technology.",
        team_h2_1: "What is FIRST and FTC?",
        team_p2_1: "<strong>FIRST</strong> (For Inspiration and Recognition of Science and Technology) is an international organization where students from all over the world design and compete with robots. FIRST aims to develop young people in the fields of science, technology, and engineering.",
        team_p2_2: "The type of competition we participate in is <strong>FTC (FIRST Tech Challenge)</strong>. In this competition, we design, code, test robots, and compete as a team. A different task is given every year, and we develop creative solutions.",
        team_h2_2: "Why Do We Build Robots?",
        team_p3_1: "Building robots is not just a competition for us, but also a way of learning and producing. While building robots:",
        team_li1_1: "We learn science, technology, and mathematics",
        team_li1_2: "We learn to solve problems as a team",
        team_li1_3: "We produce solutions to real-life problems",
        team_li1_4: "We use technology for the benefit of society",
        team_li1_5: "We connect with students from different parts of the world",
        team_h2_3: "Project Pangea and Eco Drive",
        team_p4_1: "The <strong>Eco Drive</strong> project is part of an international environmental project called <strong>Project Pangea</strong> run by Tech4Peace teams.",
        team_p4_2: "In the Eco Drive project, we calculate how much carbon vehicles emit and show how many trees need to be planted to balance this carbon. Thus, we aim for people to better understand their environmental impacts.",
        team_h2_4: "Collaboration with Green School Club",
        team_p5_1: "We are running this project with the <strong>Green School Club</strong>. Together, we collected vehicle usage data in our school and identified the 20 cars and 10 motorcycles most used. We developed the Eco Drive calculation system with this data.",
        team_li2_1: "We conducted a vehicle survey across the school",
        team_li2_2: "We researched carbon emission data",
        team_li2_3: "We developed the website together",
        team_li2_4: "We organized environmental awareness events",
        team_p5_2: "By bringing together technology and love of nature, we work for a sustainable future. We believe that producing together is stronger.",
        team_h2_5: "Contact Us",
        team_p6_1: "To get more information about our team, follow our projects, or collaborate, you can reach us through our social media accounts.",

        // Project Page
        project_h1: "How Did the Eco Drive Project Come About?",
        project_p1: "Hello! The <strong>Eco Drive</strong> project is a wonderful project we students created to protect nature! This project is part of a larger project called <strong>Project Pangea</strong>.",
        project_h2_1: "How Did the Project Start?",
        project_p2_1: "One day, the Tech4Peace Jr. team and the Green School Club came together and asked: 'How can we reduce carbon emissions in our school and surroundings?'",
        project_li1_1: "Most people don't know how much carbon their cars emit",
        project_li1_2: "Not everyone knows how important planting trees is",
        project_li1_3: "We can inform everyone with a simple calculation tool",
        project_li1_4: "Working with our school's real data is more meaningful",
        project_p2_2: "That's why we created the Eco Drive project! Thanks to this website, everyone can learn how much carbon their car emits and see how many trees need to be planted.",
        project_h2_2: "How Did We Collect Data?",
        project_p3_1: "The best part of this project is that it works with real data! Green School Club students conducted a large survey across the school:",
        project_survey_h3: "Survey Process",
        project_survey_li1: "We asked parents which vehicle they use",
        project_survey_li2: "We identified the 20 cars and 10 motorcycles most frequent in our school",
        project_survey_li3: "We performed data verification using this list as a reference",
        project_survey_li4: "We compiled emission data for different brand/model/year options with AI support",
        project_survey_li5: "We offered the wide vehicle pool as an option to the user and integrated it into the calculator",
        project_p3_2: "This way, the website reflects the real vehicle usage of our school. So your results are truly based on the vehicles in our school!",
        project_h2_3: "What is Project Pangea?",
        project_p4_1: "<strong>Project Pangea</strong> is a major project we started! Students from all over the world are working to protect nature.",
        project_p4_2: "Goal of Project Pangea",
        project_p4_3: "The word \"Pangea\" refers to the supercontinent where all continents were joined millions of years ago. Inspired by this name, we want to bring students from all over the world together!",
        project_p4_4: "Our friends from different schools are doing their own environmental projects. But we all work for the same purpose: To protect nature! When we work together, we are much stronger and can change the world.",
        project_h2_4: "Goals of Eco Drive",
        project_p5_1: "With the Eco Drive project, we want to:",
        project_goal1_h: "Inform Everyone",
        project_goal1_p: "Inform everyone about carbon footprint and environmental impact",
        project_goal2_h: "Show with Numbers",
        project_goal2_p: "Show how much carbon cars emit with concrete numbers",
        project_goal3_h: "Plant Trees",
        project_goal3_p: "Launch campaigns to actually plant the calculated number of trees",
        project_goal4_h: "Work Together",
        project_goal4_p: "Work together with friends from different schools",
        project_h2_5: "How Do We Calculate?",
        project_p6_1: "The Eco Drive calculation tool uses a simple formula based on scientific data. It's not very complex, let's see how it works:",
        project_step1: "<strong>Step 1:</strong> How much CO₂ does your chosen vehicle emit per kilometer? (Example: An average car produces ~0.12 kg CO₂/km)",
        project_step2: "<strong>Step 2:</strong> We multiply by annual kilometers (15,000 km x 0.12 kg = 1,800 kg CO₂/year)",
        project_step3: "<strong>Step 3:</strong> How much CO₂ does a tree absorb per year? We divide by that! (1,800 kg ÷ 21 kg/tree = ~86 trees required)",
        project_calc_note: "* Note: These values are estimates. They may vary based on vehicle type, fuel type, etc. We will make them more accurate as the project develops!",
        project_h2_6: "Future Steps",
        project_p7_1: "The Eco Drive project is a constantly evolving, dynamic work. Improvements we plan for the coming period:",
        project_next_li1: "Updating Data Sources: Adding more current and detailed vehicle emission data",
        project_next_li2: "Fuel Type Support: Separate calculations for petrol, diesel, hybrid, and electric vehicles",
        project_next_li3: "Tree Planting Partnerships: Collaboration with Açı Forest and other tree planting organizations",
        project_next_li4: "Ministry and School Approval: Official recognition and wider use of the project",
        project_next_li5: "Expansion to Other Schools: Efforts to use the project in other schools",
        project_next_li6: "Mobile App: Developing mobile apps for iOS and Android",
        project_next_li7: "Carbon Offset Tracking: Tracking planted trees and providing feedback to users",
        project_next_li8: "Social Media Integration: Sharing results and awareness campaigns",
        project_h2_7: "Feedback and Contribution",
        project_p8_1: "Eco Drive is a student project and is constantly evolving. Your ideas and feedback will help make this project better.",
        project_p8_2: "If you have suggestions, questions, or want to contribute to the project, please contact us:",
        project_h2_8: "Our Successes",
        project_p9_1: "What has happened since we started the project:",
        project_success_li1: "More than 200 students and parents learned about the project",
        project_success_li2: "Nature conservation talks increased at school",
        project_success_li3: "Many families started thinking about how they use their cars",
        project_success_li4: "More people started using buses and metro",
        project_p9_2: "This is just the beginning! If we work together, we can change the world!",

        // Green School Page
        green_h1: "Green School Club",
        green_h2_1: "Our Goal",
        green_p1: "As Green School Club, our primary goal is to develop a permanent awareness and sense of responsibility towards environmental problems in students and to make the understanding of sustainable life a part of daily life. We are aware that global problems such as climate change, environmental pollution, erosion, and rapid depletion of natural resources have not only environmental but also social and economic effects. Therefore, we approach sustainability from a holistic perspective and aim to make the cause-effect relationships of environmental problems correctly understood.",
        green_p2: "Our club aims to spread habits such as recycling, energy and water saving, environmentally friendly transportation, and conscious consumption by demonstrating the impact of individual behaviors on the environment with concrete examples. In this direction, we encourage students not only to have knowledge but also to take active responsibility for protecting the environment. We care about the information learned being permanent and applicable through activities carried out in the field, educational presentations, and awareness studies.",
        green_p3: "Within the scope of the Eco Drive project, we aim to raise awareness for reducing the carbon footprint, to make the effects of vehicle use on the environment visible, and to enable individuals to make more conscious transportation choices. Thanks to this project that brings together technology and environmental awareness, we believe that a sustainable future is only possible through the collective effort of conscious individuals. As Green School Club, our goal is to contribute to a more livable world by raising individuals who respect nature, think solution-oriented, and have a developed sense of environmental responsibility.",
        green_h2_2: "What Do We Do?",
        green_p4: "As Green School Club, we do the following:",
        green_doing_li1: "Inculcating Love of Nature: We tell our friends and families about the importance of protecting nature",
        green_doing_li2: "Being Eco-Friendly in Daily Life: Less waste, more recycling!",
        green_doing_li3: "Creating Awareness: Informing everyone about issues such as carbon footprint, plastic use, and energy saving",
        green_doing_li4: "Being Active in Our School: Organizing events and doing projects",
        green_doing_li5: "Sharing What We Learn: Teaching what we know to others",
        green_h2_3: "Our Activities",
        green_p5: "We perform many fun activities in our school and surroundings:",
        green_event1_h: "Recycling Campaigns",
        green_event1_p: "We collect paper, plastic, and glass waste separately. Telling everyone how important recycling is!",
        green_event2_h: "Tree Planting Days",
        green_event2_p: "We plant trees together! Ensuring every student plants at least one tree. Air is cleaner thanks to trees!",
        green_event3_h: "Energy Saving",
        green_event3_p: "Learning how to use less energy at school and at home. Reminding to turn off lights and not use unnecessary electricity!",
        green_event4_h: "Public Transport and Bicycle",
        green_event4_p: "Cars emit a lot of carbon. Instead, we learn to use the bus, metro, or bicycle. Both healthy and eco-friendly!",
        green_event5_h: "NGO Collaborations",
        green_event5_p: "Working with environmental organizations like WWF and TEMA Foundation, running projects.",
        green_event6_h: "Coastal Cleaning",
        green_event6_p: "Organizing coastal cleaning activities to protect our seas.",
        green_h2_4: "Our Role in Eco Drive",
        green_p6: "The Eco Drive project is one of our favorite projects! We made this wonderful website together with the Tech4Peace Jr. team.",
        green_p7: "What we did in the project:",
        green_role_li1: "Conducted Surveys: Asked everyone at school which car they use. Identified the 30 most popular vehicles!",
        green_role_li2: "Informed Everyone: Explained how cars harm nature",
        green_role_li3: "Promoted the Website: Showed this website to everyone at school",
        green_role_li4: "Collected Feedback: Made the project better",
        green_role_li5: "Tree Planting Plans: Made plans to actually plant real trees",
        green_h2_5: "Voting Study",
        green_p8: "We conducted a comprehensive voting study school-wide to collect the vehicle data that forms the basis of the Eco Drive project.",
        green_vote_li1: "Reached more than 200 students and parents",
        green_vote_li2: "Listed vehicle models",
        green_vote_li3: "Compiled annual mileage data",
        green_vote_li4: "Identified the top 30 vehicles",
        green_p9: "Thanks to this data, the Eco Drive calculator can produce results based on our school's real data.",
        green_h2_6: "Our Future Plans",
        green_plan_li1: "Spreading the project to other schools",
        green_plan_li2: "Real tree planting campaigns",
        green_plan_li3: "Carbon reduction competitions",
        green_plan_li4: "Stronger collaborations",
        green_plan_li5: "Award programs",
        green_h2_7: "Join Us!",
        green_p10: "Green School Club is open to every student. Join us for a sustainable future!",
        green_p11: "Let's work together for a greener world!",

        // Common
        btn_calc_return: "← Return to Calculator Page",
        btn_calc_now: "Calculate Now",
        btn_know_team: "Meet Tech4Peace"
    }
};

function setLanguage(lang) {
    localStorage.setItem('eco_drive_lang', lang);
    document.documentElement.lang = lang;
    updateUI();
}

function updateUI() {
    const lang = localStorage.getItem('eco_drive_lang') || 'tr';
    const t = translations[lang];
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });

    // Special handling for dynamic placeholders in JS
    window.currentLang = lang;
    window.t = t;

    // Update active state of language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Re-initialize calculator filters if they exist
    if (typeof initializeFilters === 'function' && typeof vehiclesData !== 'undefined' && vehiclesData.length > 0) {
        initializeFilters();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('eco_drive_lang') || 'tr';
    setLanguage(savedLang);
});
