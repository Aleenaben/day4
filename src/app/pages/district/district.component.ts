import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-district',
  standalone: true,
  imports: [SlicePipe,RouterLink],
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent {
  district:any = [
    {
      id:1,
      title: "Thiruvananthapuram",
      image: "assets/img/Trivandrum.png",
      dis: "Thiruvananthapuram is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
    },
    {
      id:2,
      title: "kottayam",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOZX5qqCVI2Zg4s4aKqiBFQ3HXWqzClnHr0W04vt3SC0ibznqbJSUHvCIFeaztrNzvzA&usqp=CAU",
      dis:"Kottayam, the upcoming city in Kerala is known for its serene atmosphere, freshwater lakes, wildlife, western ghat, and more. The natural beauty of Kottayam makes it an ideal location for a peaceful lifestyle. Builders in Kottayam are upgrading the city's development and its way of life for the residents"
    },
    {
      id:3,
      title: "Alapuzha",
      image: "assets/img/alp.jpg",
      dis:" Alappuzha, famous for its boat races, beaches, marine products and coir industry, is a world renowned backwater tourist destination of India. Kuttanad, Alappuzha backwaters and Alappuzha beach are the must-see tourist attractions in the district"
    },
    {
      id:4,
      title: "Ernakulam",
      image: "https://townplanning.kerala.gov.in/town/wp-content/uploads/2018/12/ekm.jpg",
      dis:"Ernakulam is famous for backwaters and three major rivers have been instrumental in the agricultural, industrial and trade development of Ernakulam.Although the construction of huge over bridges such as the Goshree and Varapuzha in recent years have reduced the importance of water-transportation it is still a great attraction for the domestic and international tourists"
    },  
    {
      id:5,
      title: "Pathanamthitta",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Pathanamthitta_Town.jpg/1024px-Pathanamthitta_Town.jpg",
      dis:"Pathanamthitta district is a treat to eyes with its vast unending stretches of forests, rivers and rural landscapes. Blessed by nature, the district is famous for its scenic beauty, fairs and festivals.Land of Lord Ayyappa is the tag-line of Pathanamthitta tourism. Pilgrim centres and other eco tourism spots like Gavi and Adavi are most visited in Pathanamthitta."
    },
    {
      id:6,
      title: "Idukki",
      image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/11/Feature-image-Idukki.jpg",
      dis:"Idukki district is famous for its rich flora and fauna. It is home to the popular Eravikulam National Park and is characterized by the Anamudi mountain. Idukki is one of the greenest districts of Kerala."
    },
    {
      id:7,
      title: "Kannur",
      image: "https://cdn.londonerinsydney.com/wp-content/uploads/2018/04/Kannur-8.jpg?strip=all&lossy=1&resize=1000%2C750&ssl=1",
      dis:"located north of Kozhikode, south of Kasargod and Mangalore, west of the Western Ghat regions of Kodagu and Wayanad, and east of the Laccadive Sea. Mappila Bay harbour at Ayikkara. On one side, there is St. Angelo Fort and on the other side is Arakkal palace. Muzhappilangad Beach, the longest Drive-in Beach in Asia,. Vayalapra Lake is near Madayi."
    },
    {
      id:8,
      title: "Kozhikode",
      image: "https://www.dtpckozhikode.com/uploads/picture_gallery/gallery_images/kozhikode-beach-2-20230509170339267388.webp",
      dis:"It is the largest city in the region known as the Malabar Coast and was the capital of the British-era Malabar district. In antiquity and the medieval period, Kozhikode was dubbed the City of Spices for its role as the major trading point for Indian spices.It was the capital of an independent kingdom ruled by the Samoothiris (Zamorins). The port at Kozhikode acted as the gateway to medieval South Indian coast for the Chinese, the Persians, the Arabs, and finally the Europeans. According to data compiled by economics research firm Indicus Analytics in 2009 on residences, earnings and investments, Kozhikode was ranked the second-best city in India to live in"
    },
    {
      id:9,
      title: "Palakkad",
      image: "https://i0.wp.com/onedaytrip.in/wp-content/uploads/2023/09/Palakkad_Tipu_Fort.jpg?fit=640%2C480&ssl=1",
      dis:"historically known as Palakkattussery, is a city and municipality in the Indian state of Kerala. It is the administrative headquarters of the Palakkad District. Palakkad is most densely populated municipality and fourth-most densely populated city in Kerala. It was established before Indian independence under British rule and known by the name Palghat. Palakkad is famous for the ancient Palakkad Fort, which is in the heart of the city and was captured and rebuilt by Hyder Ali in 1766.The 18th-century Palakkad Fort has sturdy battlements, a moat, and a Hanuman temple on its grounds. North on the Kalpathy River, the 15th-century Viswanatha Swamy Temple is the main venue of the Ratholsavam chariot festival. The river Bharathappuzha flows through Palakkad.[3] Palakkad is on the northern bank of Bharathappuzha River"
    },
    {
      id:10,
      title: "Kollam",
      image: "https://www.keralatourism.org/images/destination/mobile/thangasseri_kollam20150811084844_296_1.jpg",
      dis:"Kollam is one of the most historic cities with continuous settlements in India. Geographically, Quilon formation seen around coastal cliffs of Ashtamudi Lake, represent sediments laid down in the Kerala basin that existed during Mio-Pliocene times . Kollam is also home to one of the seven churches that were established by St Thomas as well as one of the 10 oldest mosques believed to be found by Malik Deenar in Kerala. Roman Catholic Diocese of Quilon is the first diocese in India"
    },
    {
      id:11,
      title: "Kasaragod",
      image: "data:image/jpeg;base64,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",
      dis:"The town is located on the estuary where the Chandragiri River, which is also the longest river in the district, empties into the Arabian Sea. Kasaragod is home to several forts, including Arikady fort, Bekal Fort, Chandragiri Fort, and Hosdurg Fort. Bekal Fort is the largest fort in Kerala. Talakaveri, which is home to Talakaveri Wildlife Sanctuary where the 805 km long Kaveri river originates, is located closer to Ranipuram on the Kerala-Karnataka border."
    },
    {
      id:12,
      title: "Thrissur",
      image: "https://www.vishraam.com/blog/wp-content/uploads/2022/03/Thrissur-City.jpg",
      dis:"Thrissur was once the capital of the Kingdom of Cochin, and was a point of contact for the Assyrians, Greeks, Persians, Arabs, Romans, Portuguese, Dutch and English.Thrissur is also known as the Cultural Capital of Kerala because of its cultural, spiritual and religious leanings throughout history. The city centre contains the Kerala Sangeetha Nadaka Academy, Kerala Lalithakala Akademi and Kerala Sahitya Academy. The city hosts the Thrissur Pooram festival, the most colourful and spectacular temple festival in Kerala. The festival is held at the Thekkinkadu Maidan in April or May, in the Malayalam month 'medam'"
    },
    {
      id:13,
      title: "Malappuram",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/4b/a4/d9/b612-20170815-155320.jpg?w=700&h=500&s=1",
      dis:" It is the third-largest district of Kerala by area, as well as the largest district in the state, bounded by Western Ghats and Arabian Sea to either side. The district is divided into seven Taluks: Eranad, Kondotty, Nilambur, Perinthalmanna, Ponnani, Tirur, and Tirurangadi.The district has witnessed significant emigration, especially to the Arab states of the Persian Gulf during the Gulf Boom of the 1970s and early 1980s, and its economy depends significantly on remittances from a large Malayali expatriate community. Malappuram was the first e-literate as well as the first cyber literate district of India"
    },
    {
      id:14,
      title: " Wayanad",
      image: "https://www.keralatourism.org/images/microsites/wayanad/waynadu-1024x768.jpg",
      dis:"Wayanad, the green paradise is nestled among the mountains of the Western Ghats, forming the border world of the greener part of Kerala. Clean and pristine, enchanting and hypnotizing, this land is filled with history and culture. Located at a distance of 76 km. from the sea shores of Kozhikode, this verdant hill station is full of plantations, forests and wildlife." 
    }
  ];
  

}



