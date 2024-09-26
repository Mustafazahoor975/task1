const imageContainer = document.getElementById('imageContainer');

const imageFolders = {
    BMW: ['https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3166786/pexels-photo-3166786.jpeg?auto=compress&cs=tinysrgb&w=600', 
	'https://images.pexels.com/photos/100650/pexels-photo-100650.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/951318/pexels-photo-951318.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/2127037/pexels-photo-2127037.jpeg?auto=compress&cs=tinysrgb&w=600',
],
	
    AUDI: ['https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCElzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT37G9MpVr6WVAmsOCLQK_A5hfFf4goEVqIvxKpBgMQASfEuABCcnA5gEmbcJRKwH8ZnsmBkYWCuAjEgGEBDUMCASCLO7uIY4evoEAwDGbomn2QAAAA?wid=550', 'https://a.storyblok.com/f/143588/1600x1013/24aa690ed7/546a6b1c-0690-40ff-bdb9-137f0a9fb487_audi-rs5.jpg', 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCElzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grj5eHtccF31_KMRG3N0rmlvLsX25VzsAK1MUkCSSYNwAJvmlAguMxA5gEmQcSZGgC8ZksmRkYWCuAjEgGEBDUMCASCLO7uIY4evoEAwBqwxYY2QAAAA?wid=850',
	'https://d2ivfcfbdvj3sm.cloudfront.net/6fd260a869c3d7bf9335a6ae5bfa3334b0514259001034/color_no_cr/color_0640_032_png/MY2024/53343/53343_cc0640_032_9W9W.png', 'https://www.audi.com.pk/dam/nemo/sea/pk/new-homepage/2021/02/730x730-Audi-Q7.jpg?width=471', 'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/28379/q3-exterior-right-front-three-quarter-93481.jpeg?isig=0&q=80',],
	
    MERCEDES: ['https://di-uploads-pod13.dealerinspire.com/mercedesbenzofeaston/uploads/2024/04/2404-Mercedes-Benz-GLA.webp', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwy9nia63tHlXrIGDRaGGFiay-LWiUVqqEBteAEz6aImdoa-RLvADpsuYDDMCjlbZeewY&usqp=CAU', 'https://etimg.etb2bimg.com/thumb/msid-104002363,imgsize-46044,width-1200,height=765,overlay-etauto/passenger-vehicle/mercedes-benz-india-launches-exclusive-amg-g-63-grand-edition-starting-at-inr-4-cr.jpg', 
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUF9tn6XIjxaHuNf_duK3nQbI6zitcFalAow&s', 'https://www.autolina.ch/auto-bild/mercedes-benz-gle-53-amg-limousine-neuwagen/38/19365/4201304_1.jpg?t=1725282287&w=218&h=164&c=1', 'https://preview.thenewsmarket.com/Previews/GNML/StillAssets/1920x1080/650453_v2.jpg',],
	
    TOYOTA: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuaClHGXZMZayx0q5l6Whx21t6BGHUttPbg&s', 'https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-design1600x1000.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5DLtlDNH2PuTiA9-34Es712TSBobTU4VyUQ&s', 
	'https://toyota-indus.com/wp-content/uploads/2023/03/corolla-400-x-500.png', 'https://toyota-airport.com/wp-content/uploads/2024/05/Super-White.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFv2qRc5MbowJb31rH5hc4g9_pOvU0MgCkIA&s', ],
	
    ROLLSROYCE: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQexPYGbzUxfvtoNuXLckpzPNy5QlmF1QUg&s', 'https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_240,q_auto:good,w_385/ljyx3f546qprggne1nts.jpg', 'https://imageio.forbes.com/blogs-images/nargessbanks/files/2017/07/1.-Rolls-Royce-2018-Phantom-1200x920.jpg?format=jpg&height=600&width=1200&fit=bounds', 
	'https://www.mansory.com/sites/default/files/styles/1920x800_fullwidth_car_slider/public/migrated/cars/Cars/rolls-royce/wraith/mansory_rolls_royce_wraith_25.jpg?itok=f5CcTOPO', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAzmK72RGQ_90S8h6sUd-nmMf9IiXUg3FAw&s', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg/800px-2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg', ],
	
    PORSCHE: ['https://imgd.aeplcdn.com/370x208/n/cw/ec/32951/cayenne-exterior-right-front-three-quarter-2.jpeg?isig=0', 'https://di-uploads-pod15.dealerinspire.com/porscheatlantaperimeter/uploads/2022/01/718Cayman-jelly.jpg', 'https://s1.cdn.autoevolution.com/images/models/PORSCHE_Cayenne-S-Coupe-2023_main.jpg', 
	'https://listers.co.uk/img/v/used/largest/412724/2024-porsche-718-boxster-roadster-special-edition-2.0-style-edition-2dr-pdk-in-ruby-star-neo-at-porsche-centre-hull.jpg', 'https://models118.com/20942-large_default/porsche-914-17-bahia-red-norev-1-18.jpg', 'https://di-uploads-pod15.dealerinspire.com/porscheatlantaperimeter/uploads/2022/01/911Carrera-jelly.jpg',]
};

function loadImages(folder) {
    imageContainer.innerHTML = ''; 
    const images = imageFolders[folder];
    
    images.forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `${folder} Image`;
        imageContainer.appendChild(imgElement);
    });
}

document.querySelectorAll('.folder-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const folder = e.target.getAttribute('data-folder');
        loadImages(folder);
    });
});
