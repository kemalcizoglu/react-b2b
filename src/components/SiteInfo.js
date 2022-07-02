import React from 'react'
import { useSelector } from 'react-redux'

const SiteInfo = () => {

    const { dark, language } = useSelector(state => state.site);

    return (
        <>
            <div>SiteInfo</div>
            <div>Dark Mod: {dark ? 'evet' : 'hayır'}</div>
            <div>Dil: {language}</div>
        </>
    )
}

export default SiteInfo;