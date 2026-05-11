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
                                y="-40"
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
                                y="-60"
                                width="220"
                                height="240"
                                preserveAspectRatio="xMidYMid slice"
                            />
                        </pattern>
                    </defs>

                    {/* 1 թիվ */}
                    <text
                        x="177.5"
                        y="210"
                        textAnchor="middle"
                        fontSize="390"
                        fontWeight="900"
                        fontFamily="ArchivoBlack"
                        fontVariant={"all-small-caps"}
                        fill="url(#numberImage)"
                    >
                        1
                    </text>

                    {/* Ատամ (MECACVAC + CENTERED) */}
                    <g transform=" scale(1.25) translate(-30 -80) ">
                        <path
                            d="
      M157 315
      C195 300 245 320 222 380
      C240 410 220 470 190 490
      C175 490 165 470 157 455
      C149 470 139 500 124 490
      C94 480 74 390 92 380
      C89 335 85 315 157 315
      Z
    "
                            fill="url(#toothImage)"
                        />
                    </g>
                </svg>
            </div>
        </div>
    );
}