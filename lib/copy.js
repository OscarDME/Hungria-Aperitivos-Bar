// lib/copy.js
// Única fuente de copy de la landing. Cero texto debe vivir en componentes.
export const copy = {
  metadata: {
    title: "+500 Kocsmai Snack Recept",
    description:
      "Ropogós, gyors és egyszerű snackek otthonra. Több mint 500 recept + 3 exkluzív bónusz. Azonnali hozzáférés.",
  },

  promoBar: {
    text: "Ez az ajánlat ma lejár:",
    icon: "Flame",
  },

  hero: {
    eyebrow: "Különleges kiadás · Azonnali hozzáférés",
    titleEmoji: "🍻",
    headline: "Több mint 500 Kocsmai Snack Recept!",
    subheadline: "A tökéletes lazításhoz és élvezethez egész évben",
    paragraphPrefix: "Felejtsd el a mindig ugyanolyan,",
    paragraphHighlight:
      "unalmas és íztelen rágcsákat. Változtass ezen még ma a könyvünkkel!",
    imageAlt: "A Több mint 500 Recept e-könyv borítója",
    badge: "Élettartam hozzáférés",
    regularPriceLabel: "Helyett:",
    regularPrice: "34 990 Ft",
    offerPrefix: "most csak",
    offerPrice: "2990 Ft",
    cta: "KÉREM A RECEPTEKET!",
    stats: [
      { value: "500+", label: "Exkluzív recept" },
      { value: "3", label: "Szuper bónusz" },
      { value: "100%", label: "Digitális hozzáférés" },
    ],
  },

  benefits: {
    eyebrow: "Miért fogod imádni",
    headline: "Mitől olyan különleges ez a könyv?",
    items: [
      { title: "Több mint 500 klasszikus és modern kocsmai snack", icon: "BookOpen" },
      { title: "Hatalmas receptválaszték minden ízléshez", icon: "Sparkles" },
      { title: "Gyors, ropogós és macera nélküli falatok", icon: "Zap" },
      { title: "Tökéletes választás vendégekhez, bulikhoz és lazításhoz", icon: "Users" },
      { title: "Egészséges, olajmentes változatok Airfryerhez", icon: "Wind" },
      { title: "Könnyen beszerezhető, hétköznapi hozzávalók", icon: "Carrot" },
      { title: "Azonnali online hozzáférés vagy nyomtatási lehetőség", icon: "Printer" },
    ],
  },

  carouselSection: {
    eyebrow: "Kukkants bele",
    headline: "Ropogós, gyors és maszatmentes snackek – egyenesen az otthonodba.",
    paragraph1:
      "Ez a digitális könyv egyszer és mindenkorra leszámol az unalmas, drága és bonyolult rágcsálnivalókkal.",
    paragraph2:
      "A több mint 500 recepttel megtanulhatod, hogyan készíts ellenállhatatlan klasszikusokat, ropogós falatokat és tökéletes mártogatósokat. Külön gondoltunk azokra is, akik a hagyományos ízeket keresik, de a könnyedebb, olajmentes Airfryer verziókat részesítik előnyben.",
    closingLines: [
      "Minden egyszerű, praktikus és megúszod a konyhai káoszt.",
      "Ha már ma este valami ropogósra vágysz, ez a tökéletes megoldás."
    ],
    images: [
      { src: "/carousel/slide-1.webp", alt: "Betekintés a receptkönyvbe — 1. dia" },
      { src: "/carousel/slide-2.webp", alt: "Betekintés a receptkönyvbe — 2. dia" },
    ],
    chips: [
      { icon: "CheckCircle2", label: "MACERAMENTES snackek" },
      { icon: "Clock", label: "Finomságok PERCEK ALATT" },
      { icon: "BookOpen", label: "Több mint 500 RECEPT" },
    ],
    cta: "KÉREM A RECEPTEKET!",
    a11y: {
      prev: "Előző",
      next: "Következő",
      goToSlide: "Ugrás a diára",
    },
  },

  features: {
    eyebrow: "Vége az íztelen, drága és tocsogós snackeknek",
    headline: "Ropogós, gyors és pofonegyszerű elkészíteni",
    badge: "Nézd meg, mit kapsz a digitális könyvben (PDF):",
    ingredientsLabel: "Hozzáv.",
    timeLabel: "Idő:",
    items: [
      {
        title: "Ropogós húsgolyók",
        description:
          "Kívül ropogós, belül szaftos. Ellenállhatatlan klasszikus, amiből mindenki repetát kér.",
        image: "/recipes/bolitas-carne.webp",
        ingredients: 3,
        time: "10 perc",
      },
      {
        title: "Kocsmai fokhagymás garnéla",
        description:
          "Szaftos, fűszeres és villámgyors. Egy falat, ami egyszerűségével és ízével hódít.",
        image: "/recipes/camarones-bar.webp",
        ingredients: 2,
        time: "8 perc",
      },
      {
        title: "Kolbászkák Airfryerben",
        description:
          "Kívül ropog, belül omlik, és percek alatt kész. A tökéletes vendégváró falat.",
        image: "/recipes/chorizo-airfryer.webp",
        ingredients: 3,
        time: "7 perc",
      },
      {
        title: "Óriás kocsmai tál",
        description:
          "Változatos, ropogós és hamisítatlan kocsmai hangulat egyetlen tálon. Minden vendéget azonnal lenyűgöz.",
        image: "/recipes/tabla-bar.webp",
        ingredients: 7,
        time: "18 perc",
      },
      {
        title: "Cheddaros-baconös krumpli",
        description:
          "Ropogós, krémes és brutálisan finom. Az a klasszikus, aminek senki sem tud ellenállni.",
        image: "/recipes/papas-cheddar.webp",
        ingredients: 3,
        time: "8 perc",
      },
      {
        title: "Fokhagymás-fűszeres bagett",
        description:
          "Belül puha, kívül ropogós és tele van ízzel. Az a rágcsa, ami elsőként tűnik el az asztalról.",
        image: "/recipes/pan-ajo.webp",
        ingredients: 3,
        time: "6 perc",
      },
      {
        title: "Pikáns burgonya (Patatas bravas)",
        description:
          "Ropogós, fűszeres és addiktív. Olyan finom, hogy észre sem veszed, és már el is fogyott.",
        image: "/recipes/papas-bravas.webp",
        ingredients: 3,
        time: "10 perc",
      },
      {
        title: "Ropogós csirkefalatok",
        description:
          "Fűszeres, szaftos és ropogós, méghozzá teljesen olajmentesen. A társaság kedvence lesz.",
        image: "/recipes/pollo-frito.webp",
        ingredients: 2,
        time: "5 perc",
      },
      {
        title: "Vegyes snack tál",
        description:
          "Gyors, laktató és tökéletes indítója bármilyen beszélgetésnek. Hideg sör mellé kötelező.",
        image: "/recipes/aperitivos-variados.webp",
        ingredients: 5,
        time: "12 perc",
      },
      {
        title: "Rántott sajtfalatok",
        description:
          "Kívül ropogós piskóta, belül olvadt sajt. Egyszerű, gyors, és képtelenség csak egyet enni belőle.",
        image: "/recipes/queso-bar.webp",
        ingredients: 2,
        time: "6 perc",
      },
    ],
    moreBlock: {
      title: "ÉS MÉG SOK MÁS...",
      text: "Több mint 500 recept vár rád, tökéletes azoknak, akik imádják a kocsmai finomságokat, de szeretik az otthon kényelmét.",
    },
    cta: "KÉREM A RECEPTEKET!",
  },

  bonuses: {
    eyebrowMain: "A bónuszok, amiket megkapsz",
    eyebrowSuffix: "ha még ma megrendeled:",
    freeLabel: "MA INGYENES",
    items: [
      {
        badge: "1. Bónusz",
        title: "A legjobb kocsmai szószok és fűszerkeverékek listája",
        subtext: "Titkos hozzávalók, kombók és alapvető fűszerek",
        image: "/bonuses/bonus-1-salsas.webp",
        imageAlt: "1. Bónusz — Szószok és fűszerek listája",
        price: "3490 Ft",
      },
      {
        badge: "2. Bónusz",
        title: "Heti snack menü Airfryerhez",
        subtext: "A hét minden napjára beosztott rágcsálnivalók",
        image: "/bonuses/bonus-2-menu-airfryer.webp",
        imageAlt: "2. Bónusz — Heti menü",
        price: "2190 Ft",
      },
      {
        badge: "3. Bónusz",
        title: "Villámgyors köretek kézikönyve",
        subtext: "Panírok, mártogatósok és saláták nagyobb társaságoknak",
        image: "/bonuses/bonus-3-acompanamientos.webp",
        imageAlt: "3. Bónusz — Villámgyors köretek",
        price: "2990 Ft",
      },
    ],
  },

  finalCta: {
    eyebrow: "A Te Ajánlatod",
    headline: "Azonnali hozzáférés — egyszer fizetsz, örökké a tiéd marad",
    subheadline: "Minden, amire szükséged lehet, egyetlen helyen.",
    plans: [
      {
        kind: "super",
        ribbon: "Szuper Ajánlat",
        popularLabel: "🔥 LEGNÉPSZERŰBB",
        title: "Több mint 500 Kocsmai Snack Recept",
        bullets: [
          "Több mint 500 kocsmai snack recept",
          "Kifejezetten Airfryerhez fejlesztett receptek",
          "Hagyományos és olajmentes változatok",
          "Élettartam hozzáférés PDF formátumban",
          "Azonnali kézbesítés e-mailben"
        ],
        bonusBullets: [
          "A legjobb kocsmai szószok és fűszerkeverékek listája",
          "Heti snack menü Airfryerhez",
          "Okos és pénztárcabarát alapanyag-helyettesítők",
        ],
        regularPrice: "34 990 Ft",
        discountTag: "-90%",
        offerPrice: "2990 Ft",
        priceFootnote: "Egyszeri fizetés",
        cta: "MEGVESZEM MOST",
        analyticsId: "aperitivos_bar_super",
        analyticsName: "Szuper Ajanlat - +500 Recept + Bonuszok",
        priceValue: 2990,
      },
    ],
    trust: {
      secure: "Biztonságos fizetés",
      guarantee: "30 napos garancia",
    },
  },

  testimonials: {
    eyebrow: "Közösség",
    headline: "Ezt mondják a vásárlóink",
    actions: ["Tetszik", "Hozzászólás", "Megosztás"],
    items: [
      {
        name: "Kovács Mária",
        time: "2 órája",
        content:
          "Nagyon jó receptek! Megcsináltam a ropogós húsgolyókat, és valami brutál finomak lettek 🔥",
        likes: 23,
        avatar: "/testimonials/maria.webp",
      },
      {
        name: "Tóth Gábor",
        time: "5 órája",
        content:
          "Hű, elképesztő receptek! Tegnap kipróbáltam a garnélát, és a feleségem teljesen odáig volt érte.",
        likes: 34,
        avatar: "/testimonials/juan.webp",
      },
      {
        name: "Szabó Ilona",
        time: "1 napja",
        content:
          "Emberek, sosem gondoltam volna, hogy ennyiféle snacket lehet otthon összedobni. Már 3 receptet is kipróbáltam, és mind egytől egyig zseniális volt! ❤️",
        likes: 45,
        avatar: "/testimonials/ana.webp",
      },
      {
        name: "Németh László",
        time: "1 napja",
        content:
          "Minden forintot megért. Már hónapok óta nem kellett ugyanazt a rágcsát csinálnom. A családom egyenesen imádja.",
        likes: 28,
        avatar: "/testimonials/carlos.webp",
      },
      {
        name: "Kiss Szilvia",
        time: "2 napja",
        content:
          "Tegnap vettem meg, és azonnal kipróbáltam pár kocsmai receptet... valami isteni finomak lettek. Csak ajánlani tudom!",
        likes: 52,
        avatar: "/testimonials/lucia.webp",
      },
    ],
    cta: "KÉREM A RECEPTEKET!",
  },

  story: {
    eyebrow: "A SZERZŐRŐL",
    headline: "HORVÁTH JÁNOS SÉF",
    image: "/chef-juan-carlos.webp",
    imageAlt: "Horváth János Séf",
    paragraphs: [
      { text: "Sziasztok, Horváth János séf vagyok!", style: "bold" },
      {
        text: "Mindig is hittem abban, hogy a jó falatok adják meg a baráti összejövetelek lelkét. Nem kell túlbonyolítani, csak legyen baromi finom.",
        style: "default",
      },
      {
        text: "Miután éveket töltöttem profi konyhák élén, és láttam, mennyire imádják az emberek a hideg sör mellé a jóízű falatokat, rájöttem: otthon sokan csak a bolti chipsekkel vagy az unalmas sült krumplival próbálkoznak, pusztán azért, mert nincs jobb ötletük.",
        style: "default",
      },
      {
        text: "Így született meg a kézikönyv ötlete: szerettem volna összegyűjteni több mint 500 különböző módszert a kocsmai snackek elkészítésére — olyanokat, amik praktikusak, piszkosul finomak, és nem ürítik ki a pénztárcádat.",
        style: "highlight",
      },
      {
        text: "Mindent hatalmas gonddal állítottam össze, hogy megmutassam: igenis lehetséges minden áldott nap a saját otthonodba varázsolni a hamisítatlan kocsmai ízélményt.",
        style: "default",
      },
      { text: "Belevágunk együtt?", style: "bold-accent" },
    ],
    cta: "KÉREM A RECEPTEKET!",
  },

  faq: {
    eyebrow: "GYIK",
    headline: "GYAKRAN ISMÉTELT KÉRDÉSEK",
    items: [
      {
        q: "Hogyan kapom meg az anyagokat?",
        a: "Az e-könyvhöz és a bónuszokhoz a fizetés sikeres visszaigazolása után azonnal, e-mailben küldjük a hozzáférést.",
      },
      {
        q: "Ki tudom nyomtatni a könyvet?",
        a: "Igen! A fájl egy kiváló minőségű PDF, ami tökéletes telefonra, tabletre és gépre is, de nyugodtan ki is nyomtathatod.",
      },
      {
        q: "Vannak receptek teljesen kezdőknek is?",
        a: "Persze! Minden receptet lépésről lépésre, pofonegyszerűen magyarázunk el. Tökéletes választás még akkor is, ha sosem főztél korábban.",
      },
      {
        q: "Találok benne olajmentes recepteket?",
        a: "Hogyne! Rengeteg receptet kifejezetten Airfryerre vagy sütőre alakítottunk át, így megmarad a zseniális íz, de a felesleges olajat megspórolod.",
      },
      {
        q: "Tényleg könnyűek és praktikusak a receptek?",
        a: "Teljes mértékben! A fókusz pont azon van, hogy ne kelljen órákat a konyhában rostokolnod.",
      },
      {
        q: "Ha nem vagyok egy konyhatündér... akkor is nekem való ez a könyv?",
        a: "Minden kétséget kizáróan. Az utasítások kristálytiszták, a hozzávalókat pedig a legkisebb sarki boltban is megtalálod.",
      },
      {
        q: "Telefonról is tudom olvasni?",
        a: "Igen, a formátum 100%-ban kompatibilis minden okostelefonnal.",
      },
      {
        q: "Mi van, ha nem tetszik? Van rá garancia?",
        a: "Feltétel nélküli, 30 napos pénzvisszafizetési garanciát vállalunk. Ha nem jön be, csak dobj egy e-mailt, és kérdés nélkül visszautaljuk az árát.",
      },
    ],
  },

  closing: {
    eyebrow: "Utolsó esély",
    headline: "Hozd el a kocsma ízeit az otthonodba még ma",
    paragraph:
      "A hozzáférés azonnali, egyszer kell kifizetni, a garancia pedig 30 napig véd. Nincs semmi kockázat: csakis ropogós, praktikus és felejthetetlen falatok várnak rád.",
    cta: "KÉREM A RECEPTEKET!",
  },

  footer: {
    brand: "Több mint 500 Kocsmai Snack Recept",
    tagline: "A kocsmai ízvilág — egyenesen a saját konyhádban.",
    rightsPrefix: "Minden jog fenntartva ©",
    disclaimer:
      "Ez az oldal nem része a Facebook weboldalnak vagy a Facebook Inc.-nek. Továbbá, ezt az oldalt a Facebook semmilyen módon nem támogatja. A FACEBOOK a FACEBOOK, Inc. bejegyzett védjegye.",
  },
};