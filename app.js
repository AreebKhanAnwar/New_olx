
var Bikes = {
    honda: {
        CB_1200: {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEXs8njwek5urpuw8lNaXAmtoCgbmaH1DDg&s",
            price: "9,00,000",
            tittle: "Honda CB 1000",
        },
        CBR_1000: {
            img: "https://cache2.pakwheels.com/ad_pictures/1086/honda-cbr-1000rr-2017-108696283.webp",
            price: "60,00,000",
            tittle: "Honda CBR 1000 RR",
        },
        gold_wing: {
            img: "https://cache2.pakwheels.com/ad_pictures/1121/honda-gold-wing-2018-112194882.webp",
            price: "1,00,00,005",
            tittle: "Honda Gold Wing 2018",
        },
    },
    BMW:{
        s1000: {
            img: "https://cache3.pakwheels.com/ad_pictures/1109/bmw-s1000rr-2010-110900168.webp",
            price: "32,75,000",
            tittle: "BMW S1000RR (2010)",
        },
        k1600: {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ogHuTTcCz3kBdK1nQ7hUi2mCvAQfVC5p7A&s",
            price: "8,970,000",
            tittle: "BMW K 1600 Grand America",
        },
        R1250: {
            img: "https://cache1.pakwheels.com/ad_pictures/1021/bmw-r-1250-gs-adventure-2022-102170347.webp",
            price: "99,00,000",
            tittle: "BMW R 1250 GS 2022",
        },

    },
    kawasaki:{
        zx10r: {
            img: "https://cache4.pakwheels.com/ad_pictures/1091/kawasaki-ninja-zx-10r-2021-109123154.webp",
            price: "60,00,000",
            tittle: "Kawasaki Ninja ZX-10R 2021",
        },
        z1000: {
            img: "https://cache4.pakwheels.com/ad_pictures/1065/kawasaki-z1000-2017-106560243.webp",
            price: "40,00,000",
            tittle: "Kawasaki Z1000",
        },
        vulcan: {
            img: "https://cache1.pakwheels.com/ad_pictures/1116/kawasaki-vulcan-900-classic-2011-111657867.webp",
            price: "30,50,000",
            tittle: "Kawasaki Vulcan 900 Classic 2011",
        },

    },
  };
  

  for (let bike in Bikes.honda) {
      let bikeData = Bikes.honda[bike];
      document.getElementById(`${bike}_img`).src = bikeData.img;
      document.getElementById(`${bike}_price`).innerHTML = bikeData.price;
      document.getElementById(`${bike}_tittle`).innerHTML = bikeData.tittle;
      
  }

  for (let Bike in Bikes.BMW) {
      let BikeData = Bikes.BMW[Bike];
      document.getElementById(`${Bike}_img`).src = BikeData.img;
      document.getElementById(`${Bike}_price`).innerHTML = BikeData.price;
      document.getElementById(`${Bike}_tittle`).innerHTML = BikeData.tittle;
  }

  for (let Bike in Bikes.kawasaki) {
      let BikeData = Bikes.kawasaki[Bike];
      document.getElementById(`${Bike}_img`).src = BikeData.img;
      document.getElementById(`${Bike}_price`).innerHTML = BikeData.price;
      document.getElementById(`${Bike}_tittle`).innerHTML = BikeData.tittle;
  }
  
  