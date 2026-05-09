"use client";
import {
  BadgePercent,
  Wrench,
  ShieldCheck,
  Clock,
  Users,
  ThumbsUp,
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Paintbrush,
  Home,
  Sparkles,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function Page() {
  const [iletisimAcik, setIletisimAcik] = useState(false);

  const kisiler = [
    {
      isim: "Ferman Akbulak",
      tel: "905432548097",
    },
    {
      isim: "Baran Temel",
      tel: "905308773672",
    },
    {
      isim: "Feyat Akbulak",
      tel: "905324526501",
    },
  ];
  return (
    <section className="relative w-full min-h-screen bg-[#f5f5f5] flex items-start md:items-center justify-center overflow-x-hidden">

      {/* GÖRSEL */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <img
          src="/gorsel.jpg"
          alt="Ferhat duvar kağıdı uygulama ve satış"
          className="
            h-[420px] md:h-full
            w-full md:w-[45%]
            object-cover
            object-center md:object-right
          "
        />

        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/5 via-[#f5f5f5]/35 md:via-transparent to-[#f5f5f5]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-5 text-left pt-[280px] md:pt-10 pb-28">

        <div className="max-w-3xl bg-white/92 backdrop-blur-md border border-white/80 shadow-2xl rounded-[28px] md:rounded-[32px] p-5 md:p-10">

          {/* ÜST BADGE */}
          <div className="inline-flex items-center gap-2 bg-black border border-yellow-400 px-4 py-2 rounded-full shadow-lg">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

            <span className="text-yellow-400 text-[11px] md:text-xs font-bold tracking-wide">
              DUVAR KAĞIDI SATIŞ • UYGULAMA • USTA HİZMETİ
            </span>
          </div>

          {/* LOGO */}
          <div className="flex justify-center items-center text-center mt-5">
            <h1 className="text-4xl md:text-6xl font-black leading-none tracking-tight">
              <span className="block text-black">Dekorasyoncum</span>

              <div className="flex items-center justify-center gap-3 mt-2">
                <div className="w-10 md:w-16 h-[3px] bg-yellow-500 rounded-full" />

                <span className="text-yellow-500 drop-shadow-sm">
                  Duvar Kağıdı
                </span>

                <div className="w-10 md:w-16 h-[3px] bg-yellow-500 rounded-full" />
              </div>
            </h1>
          </div>

          {/* ALT YAZI */}
          <p className="mt-4 text-sm md:text-lg text-gray-700 max-w-xl leading-relaxed font-medium">
            Dekorasyoncum Duvar Kağıdı; ev, ofis, mağaza ve iş yerleri için duvar kağıdı satışı
            ve profesyonel uygulama hizmeti sunar. Modern, dekoratif ve kaliteli duvar
            kağıdı seçenekleriyle yaşam alanlarınızı yeniler.
          </p>

          {/* BAŞLIK */}
          <h2 className="mt-7 md:mt-8 text-3xl md:text-5xl font-extrabold leading-tight text-black max-w-2xl">
            Duvar Kağıdı Satışı ve
            <span className="text-yellow-500 block mt-2">
              Profesyonel Uygulama
            </span>
          </h2>

          {/* METİN */}
          <div className="mt-6 space-y-3 max-w-xl">

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-[2px] shrink-0" />
              <p className="text-gray-800 text-sm md:text-base font-medium">
                Duvar kağıdı satışı ve yerinde uygulama hizmeti
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-[2px] shrink-0" />
              <p className="text-gray-800 text-sm md:text-base font-medium">
                Ev, ofis, salon, çocuk odası ve iş yerleri için dekoratif çözümler
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-[2px] shrink-0" />
              <p className="text-gray-800 text-sm md:text-base font-medium">
                Temiz işçilik, düzgün kesim ve profesyonel uygulama desteği
              </p>
            </div>

          </div>

          {/* KARTLAR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 md:mt-10 max-w-3xl">

            {[
              {
                icon: <BadgePercent className="w-5 h-5 text-yellow-500" />,
                title: "Uygun Fiyat",
                desc: "Net teklif",
              },
              {
                icon: <Paintbrush className="w-5 h-5 text-yellow-500" />,
                title: "Temiz İşçilik",
                desc: "Özenli uygulama",
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-yellow-500" />,
                title: "Kaliteli Ürün",
                desc: "Şık modeller",
              },
              {
                icon: <Clock className="w-5 h-5 text-yellow-500" />,
                title: "Hızlı Hizmet",
                desc: "Yerinde destek",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black border border-yellow-500/30 rounded-2xl p-4 shadow-xl"
              >
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center mb-3">
                  {item.icon}
                </div>

                <p className="text-white font-semibold text-sm">
                  {item.title}
                </p>

                <p className="text-gray-300 text-xs mt-1">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

    

{/* SLAYT GÖRSEL ALANI */}
<div className="mt-8 w-full max-w-3xl mx-auto">
  <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-200 bg-black h-[240px] md:h-[420px]">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((numara) => (
      <img
        key={numara}
        src={`/slayt${numara}.jpg`}
        alt={`Duvar kağıdı ${numara}`}
        className={`fade-slide fade-slide-${numara}`}
      />
    ))}
  </div>
</div>

        {/* CTA */}
        <div className="mt-10 w-full max-w-md mx-auto space-y-4">

          <div className="flex items-center gap-3 bg-yellow-100 text-yellow-800 p-4 rounded-2xl border border-yellow-200 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-white rounded-full shrink-0">
              <Phone className="w-5 h-5" />
            </div>

            <div className="text-left">
              <p className="font-semibold text-sm">
                Duvar kağıdı için hemen ulaşın
              </p>

              <p className="text-xs text-yellow-800">
                Model, fiyat ve uygulama bilgisi için telefon veya WhatsApp üzerinden yazabilirsiniz.
              </p>
            </div>
          </div>

         <div className="space-y-4">

  {[
    {
      isim: "Ferman Akbulak",
      tel: "905432548097",
    },
    {
      isim: "Baran Temel",
      tel: "905308773672",
    },
    {
      isim: "Feyat Akbulak",
      tel: "905324526501",
    },
  ].map((kisi, i) => (
    <div
      key={i}
      className="bg-white border border-gray-200 rounded-2xl p-4 shadow-lg"
    >
      <div className="flex items-center justify-between gap-3 flex-col md:flex-row">

        <div className="text-center md:text-left">
          <p className="font-bold text-black text-lg">{kisi.isim}</p>
          <p className="text-sm text-gray-500">
            Satış & Bilgi Destek
          </p>
        </div>

        <div className="flex gap-3 w-full md:w-auto">

          <a
            href={`tel:+${kisi.tel}`}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            <Phone className="w-4 h-4" />
            Ara
          </a>

          <a
            href={`https://wa.me/${kisi.tel}?text=Merhaba%20Dekorasyoncum,%20duvar%20ka%C4%9F%C4%B1d%C4%B1%20modelleri%20ve%20uygulama%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-bold hover:bg-[#1ebe5d] transition"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>

        </div>
      </div>
    </div>
  ))}

</div>

         <div className="mt-2">
<a
  href="https://www.instagram.com/dekorasyoncum65?igsh=MWppdXhnenJ5MGF4Zg%3D%3D"
  target="_blank"
  rel="noreferrer"
  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 py-5 rounded-2xl font-bold text-white shadow-xl hover:scale-[1.02] transition"
>
  <FaInstagram className="w-6 h-6" />
  Instagram'da İncele
</a>
</div>

          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/20">

            <div className="rounded-xl bg-white/80 backdrop-blur-md border border-white/70 px-2 py-3 text-center shadow-md">
              <div className="w-8 h-8 mx-auto rounded-xl bg-yellow-400/10 flex items-center justify-center mb-2">
                <Home className="w-4 h-4 text-yellow-500" />
              </div>

              <p className="font-bold text-[11px] md:text-[13px] text-black leading-tight">
                Ev & Ofis
              </p>

              <span className="text-[9px] md:text-[11px] text-gray-600 leading-tight block mt-1">
                Uygulama
              </span>
            </div>

            <div className="rounded-xl bg-white/80 backdrop-blur-md border border-white/70 px-2 py-3 text-center shadow-md">
              <div className="w-8 h-8 mx-auto rounded-xl bg-yellow-400/10 flex items-center justify-center mb-2">
                <Users className="w-4 h-4 text-yellow-500" />
              </div>

              <p className="font-bold text-[11px] md:text-[13px] text-black leading-tight">
                Deneyimli
              </p>

              <span className="text-[9px] md:text-[11px] text-gray-600 leading-tight block mt-1">
                Usta işi
              </span>
            </div>

            <div className="rounded-xl bg-white/80 backdrop-blur-md border border-white/70 px-2 py-3 text-center shadow-md">
              <div className="w-8 h-8 mx-auto rounded-xl bg-yellow-400/10 flex items-center justify-center mb-2">
                <Sparkles className="w-4 h-4 text-yellow-500" />
              </div>

              <p className="font-bold text-[11px] md:text-[13px] text-black leading-tight">
                Şık
              </p>

              <span className="text-[9px] md:text-[11px] text-gray-600 leading-tight block mt-1">
                Dekoratif
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* YÜZEN BUTONLAR */}
     {/* YÜZEN İLETİŞİM */}
<div className="fixed right-3 bottom-4 z-50 flex flex-col items-end gap-3">

  {iletisimAcik && (
    <div className="w-[290px] rounded-3xl bg-white border border-gray-200 shadow-2xl p-3 space-y-3 animate-in fade-in slide-in-from-bottom-3 duration-300">
      {kisiler.map((kisi, i) => (
        <div
          key={i}
          className="rounded-2xl bg-gray-50 border border-gray-200 p-3"
        >
          <p className="text-sm font-bold text-black mb-2">
            {kisi.isim}
          </p>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:+${kisi.tel}`}
              className="flex items-center justify-center gap-1 bg-black text-white py-2 rounded-xl text-xs font-bold"
            >
              <Phone className="w-4 h-4" />
              Ara
            </a>

            <a
              href={`https://wa.me/${kisi.tel}?text=Merhaba%20Dekorasyoncum,%20duvar%20ka%C4%9F%C4%B1d%C4%B1%20modelleri%20ve%20uygulama%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1 bg-[#25D366] text-white py-2 rounded-xl text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      ))}
    </div>
  )}

  <button
    onClick={() => setIletisimAcik(!iletisimAcik)}
    className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-full shadow-2xl border border-yellow-500/30 hover:scale-105 transition"
  >
    <span className="w-9 h-9 rounded-full bg-yellow-500 text-black flex items-center justify-center">
      <MessageCircle className="w-5 h-5" />
    </span>

    <span className="font-bold text-sm">
      İletişim
    </span>
  </button>

</div>

    </section>
  );
}