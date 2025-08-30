"use client";
import React from "react";
import ReactMarkdown from "react-markdown";

const blogData = [
  {
    title: "Nasze Polskie Kwiaty",
    date: "24 August 2025",
    featured: true,
    text: `
## Nasze Polskie Kwiaty 2025 – Albion
### Hufiec Podhale Melbourne

On the 24th of August, the choir took part in the Melbourne based youth
concert "Nasze Polskie Kwiaty" in the Albion Polish House. We brought
together a couple of light hearted skits with camp fire classics like "Jak
dobrze nam", "Bracia Skaucki" and "Płonie Ognisko w Lesie (_Kanon_)". We then
sung our skit song "O chusto, chusto chusto" and finished up with "Góralskie
Tango" and the song of the Polish scouts of Victoria, "Maszeruje Podhale".
    `,
    media: [
      {
        type: "video",
        url: "https://youtu.be/jSbsmp-IcEU",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250824_nasze_polskie_kwiaty/nasze_polskie_kwiaty_01.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250824_nasze_polskie_kwiaty/nasze_polskie_kwiaty_02.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250824_nasze_polskie_kwiaty/nasze_polskie_kwiaty_03.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250824_nasze_polskie_kwiaty/nasze_polskie_kwiaty_04.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250824_nasze_polskie_kwiaty/nasze_polskie_kwiaty_05.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250824_nasze_polskie_kwiaty/nasze_polskie_kwiaty_06.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250824_nasze_polskie_kwiaty/nasze_polskie_kwiaty_07.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250824_nasze_polskie_kwiaty/nasze_polskie_kwiaty_08.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250824_nasze_polskie_kwiaty/nasze_polskie_kwiaty_09.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250824_nasze_polskie_kwiaty/nasze_polskie_kwiaty_10.jpg",
      },
    ],
  },
  {
    title: "Koncert Stulecia Niepodległości Polski 2018",
    date: "18 sierpnia 2018",
    featured: true,
    text: `
## Koncert Stulecia Niepodległości Polski 2018
### Hufiec Podhale Melbourne

18 sierpnia odwiedzał Melbourne Prezydent RP - Pan Andrzej Duda z małżonką.
Koncert "W Hołdzie Wolności" na których śpiewał na otwarcie Chór Harcerski z
Podhala 3 piosenki

1. Płonie ognisko i szumią knieje
2. Wiązanka pieśni wojskowych
3. Pytali się nas

    [Facebook ZHP Podhale photos](https://www.facebook.com/zhppodhalemelbourne/posts/pfbid037D76xNuwRp4CBctpKyLsnxFoa4aRKvB5LFZr6TYwsbsLfuYLj2km8xZT1WZQBBj4l)`,
    media: [
      {
        type: "video",
        url: "https://youtu.be/PUOgxvI1qcA",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20180907_100_lecie_niepodleglosci/100_years_niepodleglosci_01.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20180907_100_lecie_niepodleglosci/100_years_niepodleglosci_02.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20180907_100_lecie_niepodleglosci/100_years_niepodleglosci_03.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20180907_100_lecie_niepodleglosci/100_years_niepodleglosci_04.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20180907_100_lecie_niepodleglosci/100_years_niepodleglosci_05.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20180907_100_lecie_niepodleglosci/100_years_niepodleglosci_06.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20180907_100_lecie_niepodleglosci/100_years_niepodleglosci_07.jpg",
      },
      {
        type: "image",
        url: "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20180907_100_lecie_niepodleglosci/100_years_niepodleglosci_08.jpg",
      },
    ],
  },
  {
    title: "Koncert  80-tą rocznice Powstania Warszawskiego",
    date: "2024",
    featured: false,
    text: "Harcerze z Melbounre na 80-tą rocznice Powstania Warszawskiego",
    media: [{ type: "video", url: "https://youtu.be/unvtEayvRR0?t=2414" }],
  },
  {
    title: "Koncert Akademii 3-go Maja Essendon",
    date: "2025",
    featured: false,
    text: "Harcerze z Melbourne - Akademia 3-go Maja",
    media: [
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=ojSZpvYzNdI&list=PL-DygijDW3wAjR1V79fuNCia3WeF0ncWn",
      },
    ],
  },
];

function formatDate(dateStr) {
  // Try to parse year or full date
  if (/\d{4}/.test(dateStr) && dateStr.length === 4) return dateStr;
  // Polish date: "18 sierpnia 2018"
  const months = [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "września",
    "października",
    "listopada",
    "grudnia",
  ];
  for (let i = 0; i < months.length; i++) {
    if (dateStr.includes(months[i])) {
      const [day, , year] = dateStr.split(" ");
      return `${year}-${String(i + 1).padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
  return dateStr;
}

export default function ChoirBlogPage() {
  // Separate featured and normal items
  const featured = blogData.filter((e) => e.featured);
  const normal = blogData
    .filter((e) => !e.featured)
    .sort((a, b) => (formatDate(b.date) > formatDate(a.date) ? 1 : -1));

  // Simple carousel for images, videos and links as before
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  function renderMedia(media) {
    if (!media || media.length === 0) return null;
    // If there are images, show as carousel, otherwise fallback to map
    const images = media.filter((m) => m.type === "image");
    const others = media.filter((m) => m.type !== "image");
    let imageCarousel = null;
    if (images.length > 0) {
      const current = images[carouselIndex % images.length];
      imageCarousel = (
        <div
          style={{
            textAlign: "center",
            margin: "1rem 0",
            position: "relative",
            maxWidth: 500,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Left click area */}
            <button
              onClick={() =>
                setCarouselIndex((i) => (i - 1 + images.length) % images.length)
              }
              aria-label="Poprzedni obraz"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: 60,
                background: "rgba(0,0,0,0.08)",
                border: "none",
                outline: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                color: "#333",
                zIndex: 2,
                borderRadius: "8px 0 0 8px",
              }}
            >
              ◀
            </button>
            {/* Image */}
            <img
              src={current.url}
              alt={`Image ${carouselIndex + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: 320,
                borderRadius: 8,
                display: "block",
                margin: "0 auto",
              }}
            />
            {/* Right click area */}
            <button
              onClick={() => setCarouselIndex((i) => (i + 1) % images.length)}
              aria-label="Następny obraz"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: 60,
                background: "rgba(0,0,0,0.08)",
                border: "none",
                outline: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                color: "#333",
                zIndex: 2,
                borderRadius: "0 8px 8px 0",
              }}
            >
              ▶
            </button>
          </div>
          <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>
            {(carouselIndex % images.length) + 1} / {images.length}
          </div>
        </div>
      );
    }
    return (
      <>
        {imageCarousel}
        {others.map(({ type, url }, i) => {
          if (
            type === "video" &&
            (url.includes("youtube.com") || url.includes("youtu.be"))
          ) {
            // Embed YouTube
            const videoId = url.includes("youtu.be")
              ? url.split("/").pop().split("?")[0]
              : url.split("v=")[1]?.split("&")[0];
            return (
              <div key={"video-" + i} style={{ margin: "1rem 0" }}>
                <iframe
                  width="360"
                  height="203"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            );
          }
          // Fallback: link
          return (
            <div key={"other-" + i}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </div>
          );
        })}
      </>
    );
  }

  function renderEntry(entry) {
    return (
      <div className="box" style={{ marginBottom: 24 }} key={entry.title}>
        <h3 className="title is-5">{entry.title}</h3>
        <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>
          {entry.date}
        </div>
        <ReactMarkdown>{entry.text}</ReactMarkdown>
        {entry.media && renderMedia(entry.media)}
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: 700, margin: "2rem auto" }}>
      <h2 className="title is-4">Chór - Wydarzenia i Koncerty</h2>
      {featured.length > 0 && (
        <div style={{ marginBottom: 32 }}>
          <h3 className="title is-5" style={{ color: "#b71c1c" }}>
            Wyróżnione
          </h3>
          {featured.map(renderEntry)}
        </div>
      )}
      <div>{normal.map(renderEntry)}</div>
    </div>
  );
}
