const findMyLocation = () => {
            
    const state = document.getElementById('state')
    const city = document.getElementById('city')
    const mapLink = document.getElementById('map-link')

    const success = (position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude + ' ' + longitude);

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

        fetch(geoApiUrl)
        .then(res => res.json())
        .then(data => {
            state.textContent = data.principalSubdivision
            city.textContent = data.locality
            console.log(data);

        city.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        })
    }

    const error = () => {
        state.textContent = 'cant find location'
    }

    navigator.geolocation.getCurrentPosition(success, error);

}

module.exports = findMyLocation;



//document.querySelector('.find-location').addEventListener('click', findMyLocation);