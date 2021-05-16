import React, { useState, useEffect } from 'react'

import PartnerCard from './partnerCard'
import './partnerList.css'

import firebase from '../firebase'

const PartnerList = () => {
    const [loading, setLoading] = useState(false)
    const [partners, setPartners] = useState([])

    const [searchTerm, setSearchTerm] = useState('')

    const ref = firebase.firestore().collection('providers')
    // console.log(ref)


    function getPartners() {
        setLoading(true)
        ref.onSnapshot((querySnapshot) => {

            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setPartners(items)
            setLoading(false)
        })

    }

    useEffect(() => {
        getPartners()
    }, [])

    if (loading) {
        return <h3>Fetching The Tiffin Services ...</h3>
    }

    return (
        <div className="partnerList">
            <div className="searchList">
                <h2>Our Partners</h2>

                <input
                    type="text"
                    placeholder={"Search by Locality"}
                    onChange={(event) => { setSearchTerm(event.target.value) }}
                />
            </div>

            {
                partners.filter((val) => {
                    if (searchTerm === '') {
                        return val
                    }
                    else if (val.locality.toLowerCase().includes(searchTerm.toLowerCase())) {
                        // console.log(val)
                        return val
                    }

                }).map((partner, index) => (
                    // console.log(index)
                    <PartnerCard key={index} partner={partner} />
                ))
            }
        </div >
    )
}

export default PartnerList
