export interface WeddingConfig {
  couple: {
    groom: {
      fullName: string;
      shortName: string;
      title?: string;
      fatherName: string;
      motherName: string;
      orderInFamily: string; // e.g. "Putra pertama dari"
      bio: string;
      instagram?: string;
      photo: string;
    };
    bride: {
      fullName: string;
      shortName: string;
      title?: string;
      fatherName: string;
      motherName: string;
      orderInFamily: string; // e.g. "Putri kedua dari"
      bio: string;
      instagram?: string;
      photo: string;
    };
    monogram: string; // e.g. "A & R"
  };
  date: {
    dayName: string; // "Minggu"
    fullDate: string; // "24 Oktober 2026"
    isoDate: string; // "2026-10-24T08:00:00+07:00"
    countdownTarget: string; // "2026-10-24T08:00:00"
    timeDisplay: string; // "08.00 WIB - Selesai"
  };
  quote: {
    text: string;
    source: string;
    translation?: string;
  };
  events: {
    ceremony: {
      title: string;
      subtitle: string;
      date: string;
      time: string;
      venue: string;
      address: string;
      mapsUrl: string;
      mapsEmbedUrl?: string;
      dressCode?: string;
      note?: string;
    };
    reception: {
      title: string;
      subtitle: string;
      date: string;
      time: string;
      venue: string;
      address: string;
      mapsUrl: string;
      mapsEmbedUrl?: string;
      dressCode?: string;
      note?: string;
    };
  };
  loveStory: Array<{
    year: string;
    title: string;
    description: string;
    image: string;
    tag: string;
  }>;
  gallery: Array<{
    id: string;
    url: string;
    alt: string;
    caption: string;
    span: "normal" | "tall" | "wide";
  }>;
  gifts: {
    banks: Array<{
      bankName: string;
      accountNumber: string;
      accountHolder: string;
      logoText?: string;
    }>;
    qris?: {
      imageUrl: string;
      description: string;
    };
    physicalGiftAddress: {
      recipient: string;
      phone: string;
      address: string;
      notes: string;
    };
  };
  music: {
    title: string;
    artist: string;
    src: string; // MP3 URL or fallback
  };
  closingMessage: {
    lead: string;
    body: string;
    salutation: string;
  };
  ogImage: string;
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      fullName: "Raden Arya Pradipta, S.T., M.Sc.",
      shortName: "Arya",
      title: "M.Sc.",
      fatherName: "Bpk. Bambang Pradipta",
      motherName: "Ibu Sri Sulastri",
      orderInFamily: "Putra pertama dari",
      bio: "Sosok hangat, penuh dedikasi, dan pecinta alam yang menemukan pelabuhan hatinya dalam ketulusan Amanda.",
      instagram: "aryapradipta",
      // Realistic Indonesian groom in tailored bespoke navy tuxedo with boutonniere
      photo: "https://images.unsplash.com/photo-1509112552557-8eb3dab85cfc?auto=format&fit=crop&w=900&q=85",
    },
    bride: {
      fullName: "Amanda Kirana Saraswati, S.Ked.",
      shortName: "Amanda",
      title: "S.Ked.",
      fatherName: "Bpk. Dr. H. Hendra Saraswati, Sp.A",
      motherName: "Ibu Hj. Ratna Juwita, M.Pd",
      orderInFamily: "Putri kedua dari",
      bio: "Jiwa yang lembut, periang, dan penuh kasih yang melihat keteduhan serta masa depan dalam senyuman Arya.",
      instagram: "amandakirana",
      // Realistic Indonesian bride in elegant bridal lace veil with serene expression
      photo: "https://images.unsplash.com/photo-1673073180049-9ef7846f28dd?auto=format&fit=crop&w=900&q=85",
    },
    monogram: "A & A",
  },
  date: {
    dayName: "Sabtu",
    fullDate: "12 Desember 2026",
    isoDate: "2026-12-12T08:00:00+07:00",
    countdownTarget: "2026-12-12T08:00:00",
    timeDisplay: "08.00 WIB s/d Selesai",
  },
  quote: {
    text: "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    source: "QS. Ar-Rum: 21",
    translation: "Cinta sejati bukanlah tentang menemukan seseorang yang sempurna, melainkan tentang belajar melihat seseorang yang tidak sempurna secara sempurna.",
  },
  events: {
    ceremony: {
      title: "Akad Nikah",
      subtitle: "The Holy Matrimony",
      date: "Sabtu, 12 Desember 2026",
      time: "08.00 - 10.00 WIB",
      venue: "Glass House Pavilion - Plataran Dharmawangsa",
      address: "Jl. Dharmawangsa Raya No. 6, Kebayoran Baru, Jakarta Selatan",
      mapsUrl: "https://maps.google.com/?q=Plataran+Dharmawangsa+Jakarta",
      mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.230784941913!2d106.7972046!3d-6.2570087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a26ad01c0b%3A0xe54d9c7333a59d81!2sPlataran%20Dharmawangsa!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
      dressCode: "Tradisional / Formal Pastel & Sage Green",
      note: "Diharapkan hadir 15 menit sebelum prosesi sakral dimulai.",
    },
    reception: {
      title: "Resepsi Pernikahan",
      subtitle: "The Wedding Celebration",
      date: "Sabtu, 12 Desember 2026",
      time: "11.30 - 15.00 WIB",
      venue: "Grand Ballroom Plataran Dharmawangsa",
      address: "Jl. Dharmawangsa Raya No. 6, Kebayoran Baru, Jakarta Selatan",
      mapsUrl: "https://maps.google.com/?q=Plataran+Dharmawangsa+Jakarta",
      mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.230784941913!2d106.7972046!3d-6.2570087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a26ad01c0b%3A0xe54d9c7333a59d81!2sPlataran%20Dharmawangsa!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
      dressCode: "Formal Attire / Earth Tone / Champagne / Dusty Rose",
      note: "Merupakan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.",
    },
  },
  loveStory: [
    {
      year: "2021",
      title: "Pertemuan Pertama",
      description: "Berawal dari sebuah konferensi akademis di Yogyakarta. Secangkir kopi di sudut Malioboro membuka obrolan panjang yang tak pernah terasa ingin kami sudahi.",
      // Natural warm couple moment laughing and enjoying coffee
      image: "https://images.unsplash.com/photo-1525272149490-82288cb110a0?auto=format&fit=crop&w=800&q=85",
      tag: "The First Gaze",
    },
    {
      year: "2023",
      title: "Merajut Cerita Bersama",
      description: "Dua tahun berlalu dengan berbagai tawa, doa, dan perjalanan melintasi kota. Kami belajar bahwa saling mencintai adalah memilih untuk selalu berjalan berdampingan.",
      // Prewedding stroll in lush green nature holding hands
      image: "https://images.unsplash.com/photo-1541700513212-79f419c0221d?auto=format&fit=crop&w=800&q=85",
      tag: "Growing Closer",
    },
    {
      year: "2025",
      title: "Ikrar Pertunangan",
      description: "Di bawah langit senja Danau Como yang tenang, Arya berlutut dengan sebuah cincin dan janji suci. Dengan penuh haru dan keyakinan, Amanda menjawab 'Ya'.",
      // Close up of engagement ring being placed gently on bride's hand
      image: "https://images.unsplash.com/photo-1678782086537-0cefd87257b6?auto=format&fit=crop&w=800&q=85",
      tag: "She Said Yes",
    },
    {
      year: "2026",
      title: "Menuju Keabadian",
      description: "Kini, dengan restu kedua orang tua dan doa tulus seluruh keluarga, kami melangkah mantap menyempurnakan ibadah dalam ikatan pernikahan yang suci.",
      // Newlywed couple in wedding attire walking forward into sunny future
      image: "https://images.unsplash.com/photo-1579227638706-d1e85cb8960f?auto=format&fit=crop&w=800&q=85",
      tag: "Happily Ever After",
    },
  ],
  gallery: [
    {
      id: "gal-1",
      // Editorial portrait of couple in formal wedding attire
      url: "https://images.unsplash.com/photo-1667353931393-7cf46f3d0649?auto=format&fit=crop&w=1200&q=85",
      alt: "Raden Arya dan Amanda Kirana dalam balutan busana pengantin formal",
      caption: "Dua hati yang berjanji melangkah bersama menatap masa depan yang cerah.",
      span: "tall",
    },
    {
      id: "gal-2",
      // Bride bridal gown and veil detail
      url: "https://images.unsplash.com/photo-1673073206031-5294044a9433?auto=format&fit=crop&w=1200&q=85",
      alt: "Detail anggun gaun pengantin dan veil mempelai wanita",
      caption: "Keanggunan yang terpancar dari ketulusan dan doa yang tak putus.",
      span: "normal",
    },
    {
      id: "gal-3",
      // Two gold wedding rings resting on fine cotton paper
      url: "https://images.unsplash.com/photo-1637616919953-5943e10bd4bf?auto=format&fit=crop&w=1200&q=85",
      alt: "Sepasang cincin emas pernikahan di atas kertas bertekstur",
      caption: "Lambang ikatan suci yang terukir dari ketulusan dan janji sehidup semati.",
      span: "normal",
    },
    {
      id: "gal-4",
      // Romantic couple walking together in golden sunlight
      url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=85",
      alt: "Momen romantis pasangan pengantin di bawah hangatnya mentari senja",
      caption: "Setiap tawa dan langkah bersamamu adalah berkah terindah.",
      span: "wide",
    },
    {
      id: "gal-5",
      // Couple hands holding over bridal bouquet
      url: "https://images.unsplash.com/photo-1684244276932-6ae853774c4d?auto=format&fit=crop&w=1200&q=85",
      alt: "Genggaman tangan kedua mempelai di atas buket bunga mawar",
      caption: "Saling menggenggam dalam suka maupun duka sepanjang masa.",
      span: "normal",
    },
    {
      id: "gal-6",
      // Close up of intertwined hands and wedding rings
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85",
      alt: "Kehangatan genggaman tangan dan detail busana pernikahan",
      caption: "Terima kasih telah memilihku menjadi teman seperjalanan seumur hidupmu.",
      span: "tall",
    },
  ],
  gifts: {
    banks: [
      {
        bankName: "Bank Central Asia (BCA)",
        accountNumber: "8730492811",
        accountHolder: "Raden Arya Pradipta",
        logoText: "BCA",
      },
      {
        bankName: "Bank Mandiri",
        accountNumber: "1370019283741",
        accountHolder: "Amanda Kirana Saraswati",
        logoText: "MANDIRI",
      },
    ],
    qris: {
      imageUrl: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=00020101021126570011ID.WEDDING.AMANDA.ARYA5204581253033605802ID5919AMANDA%20ARYA%20WEDDING6007JAKARTA6304A1B2",
      description: "Pindai QRIS melalui aplikasi Mobile Banking atau E-Wallet (GoPay, OVO, ShopeePay, Dana, dll)",
    },
    physicalGiftAddress: {
      recipient: "Amanda Kirana & Raden Arya",
      phone: "+62 812-3456-7890",
      address: "Kediaman Mempelai Wanita: Jl. Brawijaya Raya No. 18, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12160",
      notes: "Konfirmasi pengiriman kado fisik dapat dilakukan melalui WhatsApp mempelai.",
    },
  },
  music: {
    title: "Canon in D (Romantic Piano Solo)",
    artist: "Lee Galloway / Johann Pachelbel",
    src: "/audio/wedding-song.mp3",
  },
  closingMessage: {
    lead: "Ungkapan Terima Kasih",
    body: "Merupakan suatu kehormatan dan kebahagiaan yang tak terhingga bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu bagi lembaran baru kehidupan kami.",
    salutation: "Kami yang berbahagia,",
  },
  // High-res Indonesian wedding couple for social Open Graph cards
  ogImage: "https://images.unsplash.com/photo-1650377509454-1bbd8392e122?auto=format&fit=crop&w=1200&q=85",
};
