'use client'
import React from 'react';
import { Tags } from '@/types/schemaType'
import { UserInfoType } from '@/types/user';
import { tagColors } from '@/app/profile/page';
import ShinyText from '@/components/reactBits/shinyText';
import { FaSquareCheck } from 'react-icons/fa6';
import { produce } from 'immer';

const tiers = [
  { tier: "Common", label: "Common", color: "#393E46" },
  { tier: "Kinda_Cool", label: "Kinda Cool", color: "#FFD63A" },
  { tier: "Absolute_OG", label: "Absolute OG", color: "#8A0000" },
];

type TagsList = {
    tags: Tags[],
    userInfo: UserInfoType,
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | null>>;
}

export default function TagsList({ tags, userInfo, setUserInfo }: TagsList) {
  const ownedTags = userInfo?.user_atribut?.owned_tags ?? [];
  const usedTags = userInfo?.user_atribut?.tags_used ?? [];

 function handleClickTag(tagId: number) {
  if (!ownedTags.includes(tagId)) return;

  setUserInfo(prev =>
        produce(prev, draft => {
            if (!draft) return;

            if (usedTags.includes(tagId)) {
                draft.user_atribut.tags_used = usedTags.filter(tag => tag !== tagId);
            } else {
                if(usedTags.length < 6) draft.user_atribut.tags_used = [...usedTags, tagId];
            }
            return draft
        })
    );
}


  return (
    <div className="flex flex-col w-full space-y-1">
            {tiers.map(({ tier, label, color }) => (
            <div key={tier} className="flex flex-col w-full space-y-1">
                <p className="font-sans text-xs font-medium" style={{ color }}>
                    {label}
                </p>
                <div className="flex flex-wrap items-center w-full gap-1">
                    {tags
                    ?.filter((t) => t.tier === tier)
                    .map((tag) => {
                        const isOwned = ownedTags.includes(tag.id);
                        const isUsed = usedTags.includes(tag.id);
                        const tagColor = tagColors.find((tc) => tc.tier === tag.tier);

                        return (
                        <button
                            onClick={() => handleClickTag(tag.id)}
                            key={tag.id}
                            style={{
                                backgroundColor: isOwned ? tagColor?.bgColor : "transparent",
                                borderColor: isOwned ? tagColor?.borderColor : "#2c2c2c",
                                color: isOwned ? tagColor?.textColor : "#aaa",
                                filter: isOwned && !isUsed ? "brightness(50%)" : "none"
                            }}
                            className={`px-2 text-center border rounded-full ${
                            isOwned ? "font-medium cursor-pointer" : "opacity-50 cursor-default"
                            } relative`}
                        >
                            {tier === "Absolute_OG" && isOwned ? (
                                <ShinyText
                                    text={tag.name}
                                    className="text-xs text-[#8A0000] font-sans"
                                />
                            ) : (
                                <p className="font-sans text-xs">{tag.name}</p>
                            )}
                            {/* {isUsed && (
                                <FaSquareCheck className="text-[9px] text-green-700 absolute -bottom-0 -right-0" />
                            )} */}
                        </button>
                        );
                    })}
                </div>
            </div>
        ))}
        </div>
    );
}
