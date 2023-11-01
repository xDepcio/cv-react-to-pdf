// btoa and fetch are needed
global.btoa = (b) => Buffer.from(b).toString('base64')
import fetch from 'node-fetch'
import * as fs from 'fs'

fetch('https://api.pdfshift.io/v3/convert/pdf', {
    method: 'POST',
    headers: {
        Authorization: 'Basic ' + btoa('api:8ded585fd1b5414e92992970aa488f39'),
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        source: 'https://cv-react-to-pdf.vercel.app/cv',
        landscape: false,
        use_print: false,
        sandbox: true,
        format: `350mmx600mm`,
        delay: 10000
    })
}).then(response => {
    response.body.pipe(fs.createWriteStream('cv.pdf'))
})
