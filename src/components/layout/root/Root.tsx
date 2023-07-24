import {Content} from '../content'
import {Footer} from '../footer'
import {Header} from '../header'

export const Root: Component = ({children}) => {
    return (
        <>
            <Header/>
            <Content>{children}</Content>
            <Footer/>
        </>
    )
}