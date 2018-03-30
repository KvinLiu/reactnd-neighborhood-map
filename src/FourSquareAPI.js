const api = "https://api.foursquare.com/v2/venues/search?near=";
const CLIENT_ID = "KBJ5VXSW3RO2LZBR0ZCJN54NRCTO4XMVZOP2BV1SXWNC3L33";
const CLIENT_SECRET = "SM0KS225X3LIOHCH2UB0JY30GRZGUZARR513WK4UU4SI4W0A&v=20180318";

export const search = (place, stuff) =>
  fetch(`${api}${place}&query=${stuff}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
  .then(res => res.json())
  .then(data => data.response.venues)
  .catch(err => {
    console.log(err);
    window.alert(err);
  });
