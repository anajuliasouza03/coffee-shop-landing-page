type Props = {
  children: React.ReactNode;
  variant?: "solid" | "outlined";
  onClick?: () => void;
};

export function Button({ children, variant = "solid", onClick }: Props) {
  const base = "py-2 px-4 rounded-full cursor-pointer hover:opacity-80";
  const solid = "bg-[#3E2723] text-white ";
  const outlined = "border text-[#3E2723] border-[#3E2723] ";

  const style =
    variant === "solid" ? `${base} ${solid}` : `${base} ${outlined}`;

  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}
