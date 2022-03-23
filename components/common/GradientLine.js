export default function GradientLine({ gr }) {
  return (
    <div
      className="rounded-full h-[13%] mb-[10%]"
      style={{
        background: gr.color,
        width: gr.line,
      }}
    ></div>
  );
}
