// btoa and fetch are needed
global.btoa = (b) => Buffer.from(b).toString('base64')
import fetch from 'node-fetch'
import * as fs from 'fs'

// fetch('https://api.pdfshift.io/v3/convert/pdf', {
//     method: 'POST',
//     headers: {
//         Authorization: 'Basic ' + btoa('api:8ded585fd1b5414e92992970aa488f39'),
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         // source: 'https://cv-react-to-pdf.vercel.app/cv',
//         source: 'https://pl.wikipedia.org/wiki/Ewolucja_biologiczna',
//         landscape: false,
//         use_print: false,
//         sandbox: true,
//         format: `350mmx600mm`,
//         delay: 2000,
//         // javascript: `const ele = document.querySelector(\`body > div.h-screen.w-screen.overflow-x-hidden > div > section:nth-child(5) > div.mt-8.flex.flex-col.gap-16 > div.flex.gap-10.flex-row-reverse > img\`);ele.scrollIntoView();`
//     })
// }).then(response => {
//     response.body.pipe(fs.createWriteStream('wiki.pdf'))
// })

// btoa and fetch are needed
global.btoa = (b) => Buffer.from(b).toString('base64')

fetch('https://api.pdfshift.io/v3/convert/pdf', {
    method: 'POST',
    headers: {
        Authorization: 'Basic ' + btoa('api:8ded585fd1b5414e92992970aa488f39'),
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        // source: 'https://en.wikipedia.org/wiki/PDF',
        source: 'https://cv-react-to-pdf.vercel.app/cv',
        landscape: false,
        use_print: false,
        sandbox: true,
        format: `350mmx600mm`,
        // delay: 2000,
        // javascript: `window.scroll(0, 1000)`
    })
}).then(response => {
    response.body.pipe(fs.createWriteStream('cv2.pdf'))
})
