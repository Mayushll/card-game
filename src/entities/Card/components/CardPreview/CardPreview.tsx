import { L10n } from "_shared/locale/locale"
import { TCardInfo, selectPreview, useChangePreview } from "entities/Card"
import { useTSelector } from "app/store"
import { SIcon, SInfo, SInfoWrapper, SName, SOutline, SPicture, SWrapper } from "./CardPreview.styles"

export const CardPreview = () => {
    const changePreview = useChangePreview()
    const card: TCardInfo | null = useTSelector(selectPreview)
    if (!card) {
        return <></>
    }
    const iconSrc = require(`assets/classes/${card.hero_class}/icon.webp`)
    const pictureSrc = require(`assets/characters/${card.name}/preview-picture.webp`)
    const background = require(`assets/review-back.webp`)
    const card_class = card.hero_class[0].toUpperCase() + card.hero_class.slice(1)

    return (
        <SOutline onClick={() => changePreview(null)}>
            <SWrapper background={background} onClick={(e) => e.stopPropagation()}>
                <SInfoWrapper>
                    <SName>
                        <SIcon src={iconSrc} alt={"icon"} />
                        <div>{L10n.Cards[card.name]}</div>
                    </SName>
                    <SInfo>
                        <p>HP: {card.max_hp}</p>
                        <p>Damage: {card.base_dmg}</p>
                        <p>Range: {card.base_range}</p>
                        <p>Class: {card_class}</p>
                        {card.fraction ? <p>Fraction: {card.fraction}</p> : <></>}
                        {card.abilities.length ? <p>Abilities: {card.abilities.join(", ")}</p> : <></>}
                        <p>Price: {card.price}</p>
                    </SInfo>
                </SInfoWrapper>
                <SPicture draggable="false" src={pictureSrc} alt={card.name} />
            </SWrapper>
        </SOutline>
    )
}
