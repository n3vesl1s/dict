function renderImagesWithCaptions(imageArray) {
    const container = document.createElement('div');
    container.className = 'image-container';
    imageArray.forEach(imageObj => {
        const imgElement = document.createElement('img');
        imgElement.src = imageObj.url;
        const captionElement = document.createElement('p');
        captionElement.textContent = imageObj.caption;
        const wrapper = document.createElement('div');
        wrapper.className = 'image-wrapper';
        wrapper.appendChild(imgElement);
        wrapper.appendChild(captionElement);
        container.appendChild(wrapper);
    });
    return container;
}
const imagesWithCaptions = [
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253268530493657168/lywjk9b3a2qc1_1.png?ex=66753cc6&is=6673eb46&hm=b026e4b53dd7ee894bf841528f01e8abeadda049c62d45046b732765b49890de&=&format=webp&quality=lossless', 
        caption: 'Кафиф' },
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253268530170826803/1202291472229994506.webp?ex=66753cc6&is=6673eb46&hm=2797d37c5a678273b7a01b97a01fba88615038cbabecc3bf1a482786f2f144ba&=&format=webp', 
        caption: 'Пися'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253268531684839506/generation.png?ex=66753cc6&is=6673eb46&hm=e8c1b76b7149bed134b1b11aa87bf22e731f0da4db1cc08e599f64f9d2c2dafb&=&format=webp&quality=lossless&width=676&height=676', 
        caption: 'Furstur' },
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253268531202756660/IMG20231126145500.png?ex=66753cc6&is=6673eb46&hm=a238751442656b89a944f086e47fa293a730fa99bcc1ae38362093856c5cee3d&=&format=webp&quality=lossless&width=676&height=676', 
        caption: 'Кот Ghiggi' },
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253267238266474526/IMG_6180.jpg?ex=66753b92&is=6673ea12&hm=3d056f7e152d1e63ea5a87c7a93519e500a0d5992414c1b0de61add17d544773&=&format=webp&width=507&height=676', 
        caption: 'Youngbomb'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253267473751347241/IMG_20240131_084803-1.jpg?ex=66753bca&is=6673ea4a&hm=e6bc24c620ee17c419bc19c976abd627e731ba2954a6777cd1525ca542e1f649&=&format=webp&width=653&height=676', 
        caption: 'Angrybomb'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253267958214561822/7ad6464d8c48bd340b0ddbdc99314383.png?ex=66753c3d&is=6673eabd&hm=45b6ae05d13a696114709d577dc7c1b2e64f71d03dbeb77459f6810e45cbd8dc&=&format=webp&quality=lossless', 
        caption: 'Miofif'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253269044006486036/image0.jpg?ex=66753d40&is=6673ebc0&hm=fe3ce0db4f62989a216a7f8b8e39c1fb9ab8d3326dec9c35ecdb9cc4b8025f7a&=&format=webp', 
        caption: 'Это DenisC'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253267959019864094/bruh-6.jpg?ex=66753c3e&is=6673eabe&hm=bea67ab2ee3ec9b359341bf387f260e4b493f04f1ce76b3bf22afe0d2bd4d2cd&=&format=webp', 
        caption: 'looks cool (FurryC)'},      
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253267959632105533/104_20230702102242.png?ex=66753c3e&is=6673eabe&hm=fbac2210535c95e7b6e762a4e72d94bce1c1471b0e766bf8860140b127467a31&=&format=webp&quality=lossless', 
        caption: 'I am horny! (Miobomb)'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253268209352839168/IMG_4767.jpg?ex=66753c79&is=6673eaf9&hm=f2a8873ce4553197ac10de6a0180c72c1e50959e65522d55b72cbe9e8a330cd7&=&format=webp&width=677&height=676', 
        caption: 'я теперь фуре! (Nosleep)'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253268557194854400/235_20240214123654.png?ex=66753ccc&is=6673eb4c&hm=feb28ce2c5d9a71ee62522ff2b06dc18e4852bbd7fbcf8d8312914d5620ddced&=&format=webp&quality=lossless&width=676&height=676', 
        caption: "Ава миобомба"},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253268557505237043/78_20240607203549.png?ex=66753ccc&is=6673eb4c&hm=b2c590498da035f4ab8f0cc0b56a78f2a5ff8d4abf17c0a4bbe2b5c0f0a87da0&=&format=webp&quality=lossless&width=643&height=676', 
        caption: 'I feel so фура! (Vustur)'}, 
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253268557748244561/68_20240524214835.png?ex=66753ccc&is=6673eb4c&hm=6f13d2b9f7d9eb2a15c9746f6ba300dc96620b2b2d53221b32eeb9747683df4d&=&format=webp&quality=lossless&width=676&height=676', 
        caption: 'Фура стафф'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253268558155350117/54_20240511221346.png?ex=66753ccc&is=6673eb4c&hm=6d50e8d59645972e7a1663f0c87e7950030ae2ebc54bb5c094a9df9c6c033516&=&format=webp&quality=lossless&width=901&height=676', 
        caption: 'Фото миобомба с фильтром'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253268558541230111/47_20240509225649.png?ex=66753ccc&is=6673eb4c&hm=317aa49d88a0fda5720f9301830f2fa7359c8b271c01a3da07e2503c2bac92e5&=&format=webp&quality=lossless&width=444&height=676', 
        caption: 'Foxtur'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253269174893940820/Screenshot_2024-02-21-20-39-36-78_572064f74bd5f9fa804b05334aa4f912.jpg?ex=66753d5f&is=6673ebdf&hm=a0b021d771dc0c3ef35bc82ef8174fb1754c7d87fbc8f8958ef33975c3c9dc21&=&format=webp', 
        caption: 'Kerfus'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253269175258976293/Screenshot_2024-02-24-16-36-31-36_99c04817c0de5652397fc8b56c3b3817.jpg?ex=66753d5f&is=6673ebdf&hm=fae30919da898cbe24987543470f5425c653d2f8f467974402ae0a9eb809daa2&=&format=webp&width=668&height=676', 
        caption: 'Happybomb'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253269175460429834/Screenshot_2024-05-16-00-22-01-70_572064f74bd5f9fa804b05334aa4f912.jpg?ex=66753d60&is=6673ebe0&hm=b06ad9f64ff7f82bba93bd6e6855a0177ddfc6a74a5c75476baf2b3b550bb4f6&=&format=webp', 
        caption: 'Ролить соль (Nosleep)'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253269590620770394/image0.jpg?ex=66753dc3&is=6673ec43&hm=f20fcaefe3a34c4da53db68b4a2f91da6c1ae34f6783f00e7449dbc99a1ea75d&=&format=webp&width=938&height=676', 
        caption: 'Rekafif или Kafif'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253270745640075284/image0.jpg?ex=66753ed6&is=6673ed56&hm=08da91337636d2aefdb47961f05d453b12cea30c1d857d5053e28aede1f1609c&=&format=webp&width=1082&height=676',
        caption: 'Fif issue'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253270958140293162/Screenshot_956.png?ex=66753f09&is=6673ed89&hm=d2f2ebcecb8b52b3a504b34498cd8e58c61f0a90fcda1a9ee6a432c47549204b&=&format=webp&quality=lossless',
        caption: 'Kerfusbomb'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253276279617093736/4ce3e7e0a9396c7931495d504121a027.png?ex=667543fd&is=6673f27d&hm=cb64732107b72cee1666b636a9e712d114296a69b3c9be4d330d524b71289683&=&format=webp&quality=lossless', 
        caption: 'Nosleep'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253277450784473160/1108024359160918056.webp?ex=66754515&is=6673f395&hm=5e7dbf9488c2bb2d94a67f2f321b40bc9d0f85ecf69a4cb5ea66e7cf1d50dc59&=&format=webp', 
        caption: 'Rekafif'},
    { url: '', 
        caption: ''},
];
document.body.appendChild(renderImagesWithCaptions(imagesWithCaptions));

// { url: '', 
//     caption: ''},