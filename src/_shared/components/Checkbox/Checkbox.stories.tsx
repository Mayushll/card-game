import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Checkbox } from "./Checkbox"

export default {
    title: "Checkbox",
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const Primary: ComponentStory<typeof Checkbox> = (args) => {
    return <Checkbox {...args} />
}

Primary.args = {
    checked: true,
    label: "Чекбокс",
    outlineColor: "black",
}
