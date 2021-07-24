import {fireEvent, render} from '@testing-library/react';
import Alert from "./alert";

describe('Test Alert component', () => {
    it('should render correct default alert', () => {
        const wrapper = render(<Alert message='hello world!'></Alert>)
        const element = wrapper.getByText('hello world!') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('DIV')
        expect(element).toHaveClass('ace-alert ace-alert-info')
    })

    it('success alert', () => {
        const wrapper = render(<Alert type='success' message='hello world!'></Alert>)
        const element = wrapper.getByText('hello world!') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('DIV')
        expect(element).toHaveClass('ace-alert ace-alert-success')
    })

    it('warning alert', () => {
        const wrapper = render(<Alert type='warning' message='hello world!'></Alert>)
        const element = wrapper.getByText('hello world!') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('DIV')
        expect(element).toHaveClass('ace-alert ace-alert-warning')
    })

    it('error alert', () => {
        const wrapper = render(<Alert type='error' message='hello world!'></Alert>)
        const element = wrapper.getByText('hello world!') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('DIV')
        expect(element).toHaveClass('ace-alert ace-alert-error')
    })

    it('custom class name alert', () => {
        const wrapper = render(<Alert className='custom' message='hello world!'></Alert>)
        const element = wrapper.getByText('hello world!') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('DIV')
        expect(element).toHaveClass('ace-alert custom ace-alert-info')
    })
})
