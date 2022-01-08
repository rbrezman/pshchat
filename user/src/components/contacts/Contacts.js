import React, { useState } from 'react'

const Contacts = () => {
    const [contacts, setContacts] = useState([
        {
            "results": [
              {
                "gender": "female",
                "name": {
                  "title": "Miss",
                  "first": "Silje",
                  "last": "Madsen"
                },
                "location": {
                  "street": {
                    "number": 5708,
                    "name": "Møllegårdsvej"
                  },
                  "city": "Sommersted",
                  "state": "Sjælland",
                  "country": "Denmark",
                  "postcode": 59011,
                  "coordinates": {
                    "latitude": "-26.5490",
                    "longitude": "0.7293"
                  },
                  "timezone": {
                    "offset": "-3:00",
                    "description": "Brazil, Buenos Aires, Georgetown"
                  }
                },
                "email": "silje.madsen@example.com",
                "login": {
                  "uuid": "d73598cb-897e-4958-954c-807d42c84707",
                  "username": "smalllion140",
                  "password": "daphne",
                  "salt": "MC6JuHZu",
                  "md5": "edc853276379017fec5e4f0a4e1aa9d6",
                  "sha1": "c287a4e6a72d56ac9d9dd1b1fd1b8f8a4f06a921",
                  "sha256": "93421fbd7e60cc4b49d7414ad1f7b05bb2a7ae8853d035bb8724f0e1df065b81"
                },
                "dob": {
                  "date": "1970-09-17T17:38:59.803Z",
                  "age": 52
                },
                "registered": {
                  "date": "2016-10-08T00:35:09.375Z",
                  "age": 6
                },
                "phone": "17524044",
                "cell": "08142893",
                "id": {
                  "name": "CPR",
                  "value": "170970-5417"
                },
                "picture": {
                  "large": "https://randomuser.me/api/portraits/women/26.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/women/26.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/women/26.jpg"
                },
                "nat": "DK"
              }
            ],
            "info": {
              "seed": "7ae7e5aece89505b",
              "results": 1,
              "page": 1,
              "version": "1.3"
            }
          }
    ])
    return (
        <div className="row">
            {contacts.map(contact => 
                {
                    return (
                        <div>
                            Hola Mundo
                        </div>
                    )
                })}
        </div>
    )
}

export default Contacts
