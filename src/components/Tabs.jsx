// Section.jsx와 비슷한 warraper Component 
export default function Tabs({children, buttons}){
    return <>
        <menu>
            {buttons}
        </menu>
        {children}
    </>
}