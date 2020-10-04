import React from 'react'

const Link=({className,children,href}) =>{
    const onClick=(event)=>{
        if(event.metaKey || event.ctrlKey) return ;
       event.preventDefault()
       window.history.pushState({},'',href)
       const navEvent=new PopStateEvent('popstate')
       window.dispatchEvent(navEvent)

    }
    return (
        <div>
            <a onClick={onClick} href={href} className={className}>{children}</a>
        </div>
    )
}

export default Link
