'use strict'

const url = 'https://api-senai.herokuapp.com/fotos'

const getPhotos = async() => {
    const response = await fetch(url)
    return await response.json()
}

const postPhoto = async (photo) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(photo),
        headers: {
            'content-type': 'application/json',
        },
    };

    await fetch(url, options);
};

export {getPhotos, postPhoto}