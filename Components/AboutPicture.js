import Image from "next/image";

export default function AboutPicture({ className }) {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <Image
      src={`${prefix}/pic.jpg`}
      alt="Profile"
      width={192}
      height={192}
      className={className}
    />
  );
}
