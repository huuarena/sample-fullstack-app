const apiCaller = async ({ endpoint, method, data }) => {
  return await fetch('http://localhost:5000/api/' + endpoint, {
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null,
  }).then((response) => response.json())
}

const initCountries = async () => {
  try {
    console.log(`👉 Init countries`)

    // let count = await apiCaller({ endpoint: 'countries/count' }).then((res) => res.data)
    // if (count > 0) {
    //   console.log(`\t Countries already exist!`)
    //   return
    // }

    for (let i = 0, leng = window.data.countries.length; i < leng; i++) {
      await apiCaller({ endpoint: 'countries', method: 'POST', data: countries[i] })
        .then((res) => console.log(`\t [${i + 1}/${leng}] country created`))
        .catch((err) => console.log(`\t [${i + 1}/${leng}] create country failed: ${err.message}`))
    }
  } catch (error) {
    alert(error.error)
  }
}

const initUsers = async () => {
  try {
    console.log(`👉 Init users`)

    // let count = await apiCaller({ endpoint: 'users/count' }).then((res) => res.data)
    // if (count > 0) {
    //   console.log(`\t Countries already exist!`)
    //   return
    // }

    let countries = await apiCaller({ endpoint: 'countries' }).then((res) => res.data)
    countries = countries.items

    for (let i = 0, leng = users.length; i < leng; i++) {
      await apiCaller({
        endpoint: 'users',
        method: 'POST',
        data: {
          ...users[i],
          countryId: countries[Math.floor(Math.random() * countries.length)].id,
        },
      })
        .then((res) => console.log(`\t [${i + 1}/${leng}] user created`))
        .catch((err) => console.log(`\t [${i + 1}/${leng}] create user failed: ${err.message}`))
    }
  } catch (error) {
    alert(error.error)
  }
}

window.mockup = async () => {
  await initCountries()
  await initUsers()
}
