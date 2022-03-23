export default function GradientLine2({ grds }) {
  return (
    // <div className="flex w-[100%] mb-[6%] h-[8%]">
    <div className="flex w-[100%] h-[10%]">
      {grds.map((gr) => (
        <div
          key={gr.line}
          className="rounded-full"
          style={{
            background: gr.color,
            width: gr.line,
            marginRight: "3px",
          }}
        ></div>
      ))}
    </div>
  );
}
