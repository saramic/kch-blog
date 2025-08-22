"use client";
import React from "react";
import ReactMarkdown from "react-markdown";

const blogData = [
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
    media: ["https://youtu.be/PUOgxvI1qcA"],
  },
  {
    title: "Koncert  80-tą rocznice Powstania Warszawskiego",
    date: "2024",
    featured: false,
    text: "Harcerze z Melbounre na 80-tą rocznice Powstania Warszawskiego",
    media: ["https://youtu.be/unvtEayvRR0?t=2414"],
  },
  {
    title: "Koncert Akademii 3-go Maja Essendon",
    date: "2025",
    featured: false,
    text: "Harcerze z Melbourne - Akademia 3-go Maja",
    media: ["https://www.youtube.com/watch?v=ojSZpvYzNdI&list=PL-DygijDW3wAjR1V79fuNCia3WeF0ncWn"],
  },
];

function formatDate(dateStr) {
  // Try to parse year or full date
  if (/\d{4}/.test(dateStr) && dateStr.length === 4) return dateStr;
  // Polish date: "18 sierpnia 2018"
  const months = [
    "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
    "lipca", "sierpnia", "września", "października", "listopada", "grudnia"
  ];
  for (let i = 0; i < months.length; i++) {
    if (dateStr.includes(months[i])) {
      const [day, , year] = dateStr.split(" ");
      return `${year}-${String(i+1).padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
  return dateStr;
}

export default function ChoirBlogPage() {
  // Separate featured and normal items
  const featured = blogData.filter(e => e.featured);
  const normal = blogData.filter(e => !e.featured)
    .sort((a, b) => (formatDate(b.date) > formatDate(a.date) ? 1 : -1));

  function renderMedia(media) {
    return media.map((url, i) => {
      if (url.includes("youtube.com") || url.includes("youtu.be")) {
        // Embed YouTube
        const videoId = url.includes("youtu.be")
          ? url.split("/").pop().split("?")[0]
          : url.split("v=")[1]?.split("&")[0];
        return (
          <div key={i} style={{ margin: "1rem 0" }}>
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
      return <div key={i}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></div>;
    });
  }

  function renderEntry(entry) {
    return (
      <div className="box" style={{ marginBottom: 24 }} key={entry.title}>
        <h3 className="title is-5">{entry.title}</h3>
        <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>{entry.date}</div>
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
          <h3 className="title is-5" style={{ color: "#b71c1c" }}>Wyróżnione</h3>
          {featured.map(renderEntry)}
        </div>
      )}
      <div>
        {normal.map(renderEntry)}
      </div>
    </div>
  );
}
