"use client";

import Image from "next/image";

export default function OneYearCard() {
    return (
        <div className="min-h-dvh flex items-center justify-center bg-[#f5f5f5]">
            <div
                className="relative w-full h-dvh overflow-hidden"
                style={{
                    backgroundImage: "url('/mask.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Վերևի ուղղահայաց տեքստ */}
                <div className="absolute top-[7%] right-[22%] [writing-mode:vertical-rl] rotate-180 text-[#7a4d4d] text-[24px] italic z-10">
                    1 տարեկան
                </div>

                {/* Անուն */}
                <div className="absolute top-[47%] left-1/2 -translate-x-1/2 text-[#7a4d4d] text-[24px] italic z-10 whitespace-nowrap">
                    Ատամհատիկ
                </div>

                {/* SVG */}
                <svg
                    viewBox="0 0 315 520"
                    className="absolute inset-0 w-full h-full"
                >
                    <defs>
                        {/* 1-ի նկար */}
                        <pattern
                            id="numberImage"
                            patternUnits="objectBoundingBox"
                            width="1"
                            height="1"
                        >
                            <image
                                href="/mek.jpg"
                                x="-90"
                                y="-30"
                                width="315"
                                height="520"
                                preserveAspectRatio="xMidYMid slice"
                            />
                        </pattern>

                        {/* Ատամի նկար */}
                        <pattern
                            id="toothImage"
                            patternUnits="objectBoundingBox"
                            width="1"
                            height="1"
                        >
                            <image
                                href="/atam.jpg"
                                x="0"
                                y="-100"
                                width="320"
                                height="340"
                                preserveAspectRatio="xMidYMid slice"
                            />
                        </pattern>
                    </defs>

                    {/* 1 թիվ */}
                    <text
                    className="left-1/2   translate-x-[50%] top-1/2 translate-y-[45%]"
                        transform="scale(1.2) "
                        textAnchor="middle"
                        fontSize="390"
                        fontWeight="900"
                        fontFamily="ArchivoBlack"
                        fontVariant={"all-small-caps"}
                        fill="url(#numberImage)"
                    >
                        1
                    </text>
{/* Ատամ (Ավելի գեղեցիկ և բնական ձև) */}
<g transform="scale(1.1) translate(-20 -35)">
  <path
    d="
      M200 300
      C240 285 265 320 258 360
      C252 395 238 430 228 465
      C223 482 214 500 202 500

      C190 500 184 470 176 450
      C170 435 160 432 152 448

      C142 470 135 500 120 500
      C108 500 100 482 95 462

      C84 425 72 392 68 355
      C63 310 90 285 120 295

      C140 300 130 300 134 300
      C142 310 190 310 200 300
      Z
    "
    fill="url(#toothImage)"
    strokeWidth="4"
  />
</g>
                </svg>
            </div>
        </div>
    );
}