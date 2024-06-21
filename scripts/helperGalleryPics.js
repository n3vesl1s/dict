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
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/lywjk9b3a2qc1_1.png', 
        caption: 'Кафиф' },
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/1202291472229994506.webp', 
        caption: 'Пися'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/generation.png', 
        caption: 'Furstur' },
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/IMG20231126145500.png', 
        caption: 'Кот Ghiggi' },
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/IMG_6180.jpg', 
        caption: 'Youngbomb'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/IMG_20240131_084803-1.jpg', 
        caption: 'Angrybomb'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/7ad6464d8c48bd340b0ddbdc99314383.png', 
        caption: 'Miofif'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/image0.jpg', 
        caption: 'Это DenisC'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/bruh-6.jpg', 
        caption: 'looks cool (FurryC)'},      
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/104_20230702102242.png', 
        caption: 'I am horny! (Miobomb)'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/IMG_4767.jpg', 
        caption: 'я теперь фуре! (Nosleep)'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/235_20240214123654.png', 
        caption: "Ава миобомба"},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/78_20240607203549.png', 
        caption: 'I feel so фура! (Vustur)'}, 
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/68_20240524214835.png', 
        caption: 'Фура стафф'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/54_20240511221346.png', 
        caption: 'Фото миобомба с фильтром'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/47_20240509225649.png', 
        caption: 'Foxtur'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/Screenshot_2024-02-21-20-39-36-78_572064f74bd5f9fa804b05334aa4f912.jpg', 
        caption: 'Kerfus'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/Screenshot_2024-02-24-16-36-31-36_99c04817c0de5652397fc8b56c3b3817.jpg', 
        caption: 'Happybomb'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/Screenshot_2024-05-16-00-22-01-70_572064f74bd5f9fa804b05334aa4f912.jpg', 
        caption: 'Ролить соль (Nosleep)'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/image1.jpg', 
        caption: 'Rekafif или Kafif'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/image2.jpg',
        caption: 'Fif issue'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/Screenshot_956.png',
        caption: 'Kerfusbomb'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/4ce3e7e0a9396c7931495d504121a027.png', 
        caption: 'Nosleep'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/1108024359160918056.webp', 
        caption: 'Rekafif'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253415765076480041/9e8ee83c1786ee25423b5c980087408a.jpg?ex=6675c5e5&is=66747465&hm=561eb431ea1c6207a50586f929e2a81ab729b724702e4ace2cc0302e42a304b0&=&format=webp',
        caption: 'Шаурма'},
    { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253415541721268286/defdc31078c81f2f3f684b2598ba36d4.jpg?ex=66766e70&is=66751cf0&hm=7ba08e872b6da273ca3fd635beaf69964c349b3d787437fc2e29705ca41fc024&',
         caption: 'Аргумент'},
     { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253418092579782780/IMG_6185.jpg?ex=667670d0&is=66751f50&hm=e965ffade7550d5b86d13d74bb24d2192bb081be1126b8ea941e4d0198cf4633&', 
         caption: 'Putinbomb'},
     { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253640793382719558/image.png?ex=66769778&is=667545f8&hm=28878b1d423d54b859423207d17da7ef8ef38ff82642a3ec90d3e4ebfdff70a7&',
         caption: 'Фура хелпер'},
     { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253641136640102461/image.png?ex=667697ca&is=6675464a&hm=051ae56b69690d8f10bba482c95d0b4432f80c2e57862664f2952bbd2514f88c&',
         caption: 'Аж под аж ож об the morning will be great'},
     { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253643794243518555/IMG_4620.jpg?ex=66769a44&is=667548c4&hm=78588cac7bac3c08209c4cf250cb50b34f5e365b30d13b6e310af23024020255&',
         caption: 'Фураслип отправляет стикер'},
];
document.body.appendChild(renderImagesWithCaptions(imagesWithCaptions));

// { url: '', 
//     caption: ''},
