export function Video() {
  return (
    <div>
      <iframe
        width="460"
        height="250"
        src="https://www.youtube.com/embed/Nu8kIIL-CDA?si=uSQmHjOdWZ7a3zRB"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-4xl"
      ></iframe>
    </div>
  );
}
