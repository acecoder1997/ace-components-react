import React from "react";
import {fireEvent, render, RenderResult,cleanup} from "@testing-library/react";

import Menu, {MenuProps} from "./index";
import MenuItem from "./Item";

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test'
}

const verticalProps: MenuProps = {
    defaultIndex: 0,
    mode: "vertical"
}

const renderMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem>active</MenuItem>
            <MenuItem disabled>disabled</MenuItem>
            <MenuItem>normal</MenuItem>
        </Menu>
    )
}
let wrapper: RenderResult, menuEl: HTMLElement, activeEl: HTMLElement, disabledEl: HTMLElement
describe('menu testing', () => {
    beforeEach(() => {
        wrapper = render(renderMenu(testProps))
        menuEl = wrapper.getByTestId('menu')
        activeEl = wrapper.getByText('active')
        disabledEl = wrapper.getByText('disabled')
    })
    it('test default props', () => {
        expect(menuEl).toBeInTheDocument()
        expect(menuEl).toHaveClass('ace-menu test')
        expect(menuEl.getElementsByTagName('li').length).toEqual(3)
        expect(activeEl).toHaveClass('ace-menu-item is-active')
        expect(disabledEl).toHaveClass('ace-menu-item is-disabled')
    })

    it('click third item to be active', () => {
        const thirdItem = wrapper.getByText('normal')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('ace-menu-item is-active')
        expect(activeEl).not.toHaveClass('ace-menu-item is-active')
        expect(testProps.onSelect).toBeCalledWith(2)
        fireEvent.click(disabledEl)
        expect(disabledEl).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toBeCalledWith(1)
    })

    it('vertical mode',()=>{
        cleanup()
        const wrapper = render(renderMenu(verticalProps))
        const menuEl = wrapper.getByTestId('menu')
        expect(menuEl).toHaveClass('ace-menu-vertical')
    })
})
